import { ApiError } from '../lib/ApiError.js';
import { emitLiveGameChanged } from '../lib/live-game-events.js';
import { prisma } from '../lib/prisma.js';

const PERIOD_SECONDS = 12 * 60;
const actionQueues = new Map<string, Promise<void>>();

export interface LiveGameState {
  clockRunning: boolean;
  clockSeconds: number;
  endedAt: Date | null;
  gameId: string;
  id: string;
  lineup: string[];
  opponentFouls: number[];
  opponentScore: number;
  period: number;
  startedAt: Date | null;
  status: string;
  teamFouls: number[];
  teamScore: number;
  timeouts: number[];
  updatedAt: Date;
}

type Action =
  | { amount: -1 | 1; period: number; side: 'opponent' | 'team'; type: 'foul' }
  | { amount: -1 | 1; side: 'opponent' | 'team'; type: 'timeout' }
  | { amount: number; side: 'opponent' | 'team'; type: 'adjust_score' }
  | { period: number; type: 'period' }
  | { playerIds: string[]; type: 'lineup' }
  | { points: 1 | 2 | 3; side: 'opponent' | 'team'; type: 'score' }
  | { running: boolean; seconds?: number; type: 'clock' }
  | { seconds?: number; type: 'reset' }
  | { type: 'end' }
  | { type: 'halftime' }
  | { type: 'start' }
  | { type: 'undo' };

export async function applyAction(gameId: string, action: Action): Promise<LiveGameState> {
  const previous = actionQueues.get(gameId) ?? Promise.resolve();
  let release!: () => void;
  const current = new Promise<void>((resolve) => {
    release = resolve;
  });
  const queued = previous.then(() => current);
  actionQueues.set(gameId, queued);
  await previous;
  try {
    return await applyActionInQueue(gameId, action);
  } finally {
    release();
    if (actionQueues.get(gameId) === queued) actionQueues.delete(gameId);
  }
}

export async function ensureState(gameId: string): Promise<LiveGameState> {
  const game = await prisma.game.findUnique({ where: { id: gameId } });
  if (!game) throw ApiError.notFound('Game not found');
  const state = await prisma.liveGame.upsert({
    create: { gameId, lineup: [], teamFouls: [0, 0, 0, 0] },
    update: {},
    where: { gameId },
  });
  return normalise(state as LiveGameState);
}

export async function getState(gameId: string): Promise<LiveGameState | null> {
  const state = await prisma.liveGame.findUnique({ where: { gameId } });
  return state ? normalise(state as LiveGameState) : null;
}

export async function listEvents(gameId: string) {
  return prisma.liveGameEvent.findMany({
    orderBy: { createdAt: 'desc' },
    take: 100,
    where: { gameId },
  });
}

export async function reverseEvent(gameId: string, eventId: string): Promise<LiveGameState> {
  const event = await prisma.liveGameEvent.findFirst({
    where: { gameId, id: eventId, reversed: false },
  });
  if (!event) throw ApiError.notFound('Event not found');
  await prisma.liveGameEvent.update({ data: { reversed: true }, where: { id: eventId } });
  throw ApiError.badRequest(
    'Event reversal is recorded; use manual adjustment to correct the current score',
  );
}

async function applyActionInQueue(gameId: string, action: Action): Promise<LiveGameState> {
  const current = await ensureState(gameId);
  const state = normalise(current);
  if (action.type === 'undo') {
    const event = await prisma.liveGameEvent.findFirst({
      orderBy: { createdAt: 'desc' },
      where: { gameId, reversed: false },
    });
    if (!event) throw ApiError.badRequest('No event to undo');
    const payload = event.payload as Partial<Action>;
    const inverse = { ...state };
    if (payload.type === 'score' && payload.side && payload.points) {
      if (payload.side === 'team')
        inverse.teamScore = Math.max(0, inverse.teamScore - payload.points);
      else inverse.opponentScore = Math.max(0, inverse.opponentScore - payload.points);
    } else if (payload.type === 'adjust_score' && payload.side && payload.amount !== undefined) {
      if (payload.side === 'team')
        inverse.teamScore = Math.max(0, inverse.teamScore - payload.amount);
      else inverse.opponentScore = Math.max(0, inverse.opponentScore - payload.amount);
    } else if (payload.type === 'foul' && payload.side && payload.amount) {
      const fouls = payload.side === 'team' ? inverse.teamFouls : inverse.opponentFouls;
      fouls[(payload.period ?? inverse.period) - 1] = Math.max(
        0,
        (fouls[(payload.period ?? inverse.period) - 1] ?? 0) - payload.amount,
      );
    } else if (payload.type === 'timeout' && payload.side) {
      const index = payload.side === 'team' ? 0 : 1;
      inverse.timeouts[index] = Math.max(
        0,
        Math.min(6, (inverse.timeouts[index] ?? 0) - (payload.amount ?? -1)),
      );
    } else {
      throw ApiError.badRequest('This event cannot be undone automatically');
    }
    const updated = await prisma.$transaction(async (tx) => {
      await tx.liveGameEvent.update({ data: { reversed: true }, where: { id: event.id } });
      await tx.liveGameEvent.create({
        data: { gameId, payload: { eventId: event.id }, type: 'undo' },
      });
      return tx.liveGame.update({
        data: {
          opponentFouls: inverse.opponentFouls,
          opponentScore: inverse.opponentScore,
          teamFouls: inverse.teamFouls,
          teamScore: inverse.teamScore,
          timeouts: inverse.timeouts,
        },
        where: { gameId },
      });
    });
    emitLiveGameChanged(gameId);
    return normalise(updated as LiveGameState);
  }
  const data: Record<string, unknown> = {};
  let status = state.status;
  let period = state.period;
  let clockSeconds = state.clockSeconds;
  let clockRunning = state.clockRunning;
  let teamScore = state.teamScore;
  let opponentScore = state.opponentScore;
  let teamFouls = [...state.teamFouls];
  let opponentFouls = [...state.opponentFouls];
  let timeouts = [...state.timeouts];
  let lineup = [...state.lineup];

  if (action.type === 'score') {
    if (action.side === 'team') teamScore += action.points;
    else opponentScore += action.points;
  } else if (action.type === 'adjust_score') {
    if (action.side === 'team') teamScore = Math.max(0, teamScore + action.amount);
    else opponentScore = Math.max(0, opponentScore + action.amount);
  } else if (action.type === 'foul') {
    const fouls = action.side === 'team' ? teamFouls : opponentFouls;
    fouls[period - 1] = Math.max(0, (fouls[period - 1] ?? 0) + action.amount);
  } else if (action.type === 'timeout') {
    const index = action.side === 'team' ? 0 : 1;
    timeouts[index] = Math.max(0, Math.min(6, (timeouts[index] ?? 0) + action.amount));
  } else if (action.type === 'clock') {
    if (typeof action.seconds === 'number')
      clockSeconds = Math.max(0, Math.min(PERIOD_SECONDS, action.seconds));
    clockRunning = action.running && clockSeconds > 0;
  } else if (action.type === 'period') {
    period = Math.max(1, Math.min(4, action.period));
    clockSeconds = PERIOD_SECONDS;
    clockRunning = false;
    teamFouls = Array.from({ length: 4 }, (_, index) =>
      index === period - 1 ? (teamFouls[index] ?? 0) : (teamFouls[index] ?? 0),
    );
  } else if (action.type === 'lineup') {
    if (action.playerIds.length !== 5) throw ApiError.badRequest('Select exactly five players');
    lineup = action.playerIds;
  } else if (action.type === 'halftime') {
    status = 'HALFTIME';
    clockRunning = false;
  } else if (action.type === 'start') {
    status = 'LIVE';
    clockRunning = true;
    data.startedAt = state.startedAt ?? new Date();
  } else if (action.type === 'end') {
    status = 'FINAL';
    clockRunning = false;
    data.endedAt = new Date();
  } else if (action.type === 'reset') {
    // Full manual reset — the scorer's escape hatch for a game started (or
    // scored) by mistake: everything returns to a clean pre-tip state.
    status = 'NOT_STARTED';
    period = 1;
    clockSeconds =
      typeof action.seconds === 'number'
        ? Math.max(0, Math.min(PERIOD_SECONDS, action.seconds))
        : PERIOD_SECONDS;
    clockRunning = false;
    teamScore = 0;
    opponentScore = 0;
    teamFouls = [0, 0, 0, 0];
    opponentFouls = [0, 0, 0, 0];
    timeouts = [6, 6];
    lineup = [];
    data.startedAt = null;
    data.endedAt = null;
  }

  const updated = await prisma.$transaction(async (tx) => {
    await tx.liveGameEvent.create({
      data: { gameId, payload: action, type: action.type },
    });
    return tx.liveGame.update({
      data: {
        ...data,
        clockRunning,
        clockSeconds,
        lineup,
        opponentFouls,
        opponentScore,
        period,
        status,
        teamFouls,
        teamScore,
        timeouts,
      },
      where: { gameId },
    });
  });
  emitLiveGameChanged(gameId);
  return normalise(updated as LiveGameState);
}

function normalise(state: LiveGameState): LiveGameState {
  const elapsed =
    state.clockRunning && state.updatedAt
      ? Math.max(0, Math.floor((Date.now() - state.updatedAt.getTime()) / 1000))
      : 0;
  return {
    ...state,
    clockRunning: state.clockRunning && state.clockSeconds - elapsed > 0,
    clockSeconds: Math.max(0, state.clockSeconds - elapsed),
    opponentFouls: state.opponentFouls ?? [0, 0, 0, 0],
    teamFouls: state.teamFouls ?? [0, 0, 0, 0],
  };
}
