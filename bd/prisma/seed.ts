import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcrypt';

import { env } from '../src/config/env.js';
import { PrismaClient } from '../src/generated/prisma/client.js';

// Seed runs as a standalone process with its own client instance.
const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: env.DATABASE_URL }) });

const CHART_USER_COUNT = 30;

/** UB evening tip-offs stored in UTC (18:00 local = 11:00Z). */
function at(date: string, hourUtc = 11): Date {
  return new Date(`${date}T${String(hourUtc).padStart(2, '0')}:00:00.000Z`);
}

async function seedUsers(): Promise<void> {
  // 1) Admin from env vars.
  const adminEmail = env.ADMIN_EMAIL.toLowerCase();
  const adminHash = await bcrypt.hash(env.ADMIN_PASSWORD, env.BCRYPT_COST);
  await prisma.user.upsert({
    create: { email: adminEmail, name: env.ADMIN_NAME, passwordHash: adminHash, role: 'ADMIN' },
    update: {}, // idempotent: never clobber an existing admin on re-run
    where: { email: adminEmail },
  });

  // 2) Demo user.
  const demoEmail = env.DEMO_USER_EMAIL.toLowerCase();
  const demoHash = await bcrypt.hash(env.DEMO_USER_PASSWORD, env.BCRYPT_COST);
  await prisma.user.upsert({
    create: { email: demoEmail, name: 'Demo User', passwordHash: demoHash, role: 'USER' },
    update: {},
    where: { email: demoEmail },
  });

  // 3) A spread of users across the last ~15 days so the admin dashboard
  //    chart shows real (seeded) data. Deterministic emails => idempotent.
  for (let i = 0; i < CHART_USER_COUNT; i++) {
    const email = `seed.user${i + 1}@ufeedu.local`;
    const createdAt = new Date(Date.now() - i * 12 * 60 * 60 * 1000);
    const isActive = i % 7 !== 0;
    await prisma.user.upsert({
      create: {
        createdAt,
        email,
        isActive,
        name: `Seed User ${i + 1}`,
        passwordHash: demoHash,
        role: 'USER',
      },
      update: { isActive },
      where: { email },
    });
  }
}

const COMPETITION = 'Их сургуулиудын сагсан бөмбөгийн аварга шалгаруулах тэмцээн 2026/27';

async function main(): Promise<void> {
  await seedUsers();
  await seedNews();
  await seedPlayers();
  await seedGames();
  await seedStandings();
  await seedPartners();
  await seedAlbums();
  await seedSiteContent();

  const [users, news, players, games, standings, partners, albums, content] = await Promise.all([
    prisma.user.count(),
    prisma.newsPost.count(),
    prisma.player.count(),
    prisma.game.count(),
    prisma.standingRow.count(),
    prisma.partner.count(),
    prisma.mediaAlbum.count(),
    prisma.siteContent.count(),
  ]);

  console.log('✅ Seed complete —');
  console.log(`   users: ${users} · news: ${news} · players: ${players} · games: ${games}`);
  console.log(
    `   standings: ${standings} · partners: ${partners} · albums: ${albums} · copy: ${content}`,
  );
  console.log(`   admin: ${env.ADMIN_EMAIL.toLowerCase()} / ${env.ADMIN_PASSWORD}`);
  console.log(`   demo:  ${env.DEMO_USER_EMAIL.toLowerCase()} / ${env.DEMO_USER_PASSWORD}`);
}

async function seedAlbums(): Promise<void> {
  if ((await prisma.mediaAlbum.count()) > 0) return;

  const albums = [
    {
      eventDate: at('2026-09-19'),
      images: [],
      slug: 'ulirliin-neelt',
      sortOrder: 1,
      title: 'Улирлын нээлтийн тоглолт',
    },
    {
      eventDate: at('2026-09-15'),
      images: [],
      slug: 'beltgeliin-surguulilt',
      sortOrder: 2,
      title: 'Бэлтгэл сургуулилтаас',
    },
    {
      eventDate: at('2026-09-26'),
      images: [],
      slug: 'sezis-shutis-toglots',
      sortOrder: 3,
      title: 'СЭЗИС — ШУТИС тоглолтоос',
    },
  ];

  await prisma.mediaAlbum.createMany({ data: albums });
}

async function seedGames(): Promise<void> {
  if ((await prisma.game.count()) > 0) return;

  const games = [
    // Finished (Үр дүн)
    {
      isHome: false,
      opponent: 'Хөдөө аж ахуйн их сургууль',
      opponentScore: 66,
      opponentShort: 'ХААИС',
      round: 'I тойрог',
      sortOrder: 1,
      status: 'FINAL',
      teamScore: 81,
      tipsAt: at('2026-09-05'),
      venue: 'ХААИС Спортын заал',
    },
    {
      isHome: false,
      opponent: 'Монгол Улсын их сургууль',
      opponentScore: 68,
      opponentShort: 'МУИС',
      round: 'I тойрог',
      sortOrder: 2,
      status: 'FINAL',
      teamScore: 76,
      tipsAt: at('2026-09-12'),
      venue: 'МУИС Заал 2',
    },
    {
      isHome: true,
      opponent: 'Эмнэлзүйн шинжлэх ухааны их сургууль',
      opponentScore: 71,
      opponentShort: 'ЭМШИС',
      round: 'II тойрог',
      sortOrder: 3,
      status: 'FINAL',
      teamScore: 84,
      tipsAt: at('2026-09-19'),
      venue: 'UFE Арена',
    },
    {
      isHome: true,
      opponent: 'Шинжлэх ухаан, технологийн их сургууль',
      opponentScore: 79,
      opponentShort: 'ШУТИС',
      round: 'II тойрог',
      sortOrder: 4,
      status: 'FINAL',
      teamScore: 84,
      tipsAt: at('2026-09-26'),
      venue: 'UFE Арена',
    },
    {
      isHome: false,
      opponent: 'Монгол Улсын багшийн их сургууль',
      opponentScore: 74,
      opponentShort: 'МУБИС',
      round: 'III тойрог',
      sortOrder: 5,
      status: 'FINAL',
      teamScore: 70,
      tipsAt: at('2026-10-03'),
      venue: 'МУБИС Спортын заал',
    },
    // Upcoming (Товлосон)
    {
      isHome: true,
      opponent: 'Их Засаг их сургууль',
      opponentShort: 'ИЗҮИС',
      round: 'III тойрог',
      sortOrder: 6,
      status: 'SCHEDULED',
      tipsAt: at('2026-10-11'),
      venue: 'UFE Арена',
    },
    {
      isHome: true,
      opponent: 'Хөдөө аж ахуйн их сургууль',
      opponentShort: 'ХААИС',
      round: 'IV тойрог',
      sortOrder: 7,
      status: 'SCHEDULED',
      tipsAt: at('2026-10-18'),
      venue: 'UFE Арена',
    },
    {
      isHome: false,
      opponent: 'Шинжлэх ухаан, технологийн их сургууль',
      opponentShort: 'ШУТИС',
      round: 'IV тойрог',
      sortOrder: 8,
      status: 'SCHEDULED',
      tipsAt: at('2026-10-25'),
      venue: 'ШУТИС Арена',
    },
    {
      isHome: false,
      opponent: 'Эмнэлзүйн шинжлэх ухааны их сургууль',
      opponentShort: 'ЭМШИС',
      round: 'V тойрог',
      sortOrder: 9,
      status: 'SCHEDULED',
      tipsAt: at('2026-11-01'),
      venue: 'ЭМШИС Заал',
    },
    {
      isHome: true,
      opponent: 'Монгол Улсын их сургууль',
      opponentShort: 'МУИС',
      round: 'V тойрог',
      sortOrder: 10,
      status: 'SCHEDULED',
      tipsAt: at('2026-11-08'),
      venue: 'UFE Арена',
    },
    {
      isHome: false,
      opponent: 'Их Засаг их сургууль',
      opponentShort: 'ИЗҮИС',
      round: 'Хагас шигшээ',
      sortOrder: 11,
      status: 'SCHEDULED',
      tipsAt: at('2026-11-15'),
      venue: 'ИЗҮИС Заал',
    },
    {
      isHome: true,
      opponent: 'Шигшээд',
      opponentShort: 'ТБД',
      round: 'Шигшээ тоглолт',
      sortOrder: 12,
      status: 'SCHEDULED',
      tipsAt: at('2026-11-22'),
      venue: 'UFE Арена',
    },
  ];

  await prisma.game.createMany({
    data: games.map((game) => ({ ...game, competition: COMPETITION })),
  });
}

async function seedNews(): Promise<void> {
  if ((await prisma.newsPost.count()) > 0) return;

  const posts = [
    {
      category: 'БАГ',
      content:
        'СЭЗИС-ийн сагсан бөмбөгийн шигшээ багийн 2026/27 улирлын бүрэлдэхүүн албан ёсоор зарлагдлаа. Дасгалжуулалтын штаб зун, намрын бэлтгэлийн үеэр шалгаруулалтад оролцсон 40 гаруй оюутнаас 12 тоглогч, 2 дасгалжуулагч шигшээ багт багтлаа.\n\nШинэ бүрэлдэхүүнд 1-4-р курсын оюутан багтжээ. Багийн ахлагчаар гурван дахь улиралдаа багийн төлөө тоглож байгаа М.Ариунбат томилогдсон бөгөөд тэрбээр өмнөх улиралд багийн онооны лидер байсан юм.\n\nБагийн ахлах дасгалжуулагч С.Жаргал "Бид энэ жил зөвхөн тоглолт хожихоос гадна СЭЗИС-ийн сагсан бөмбөгийн соёлыг дээшлүүлэх үүрэгтэй. Сонирхогч оюутнууд маань зааланд ирж, биднийг дэмжээсэй" гэлээ.\n\nШигшээ багийн анхны тоглолт аравдугаар сарын 11-нд UFE Арена танхимд ИЗҮИС-ийн багийн эсрэг болно.',
      excerpt:
        'Зун, намрын бэлтгэлийн шалгаруулалтаар шүүн сонгогдсон 12 тоглогч, 2 дасгалжуулагч шигшээ багт багтлаа. Ахлагчаар М.Ариунбат улираллах болно.',
      isFeatured: true,
      publishedAt: at('2026-09-28', 7),
      slug: 'ulirliin-bureldhuun-zarlagdlaa',
      sortOrder: 1,
      tags: ['шигшээ баг', 'бүрэлдэхүүн'],
      title: 'Шигшээ багийн шинэ улирлын бүрэлдэхүүн зарлагдлаа',
    },
    {
      category: 'ТОГЛОЛТ',
      content:
        'Их сургуулиудын аварга шалгаруулах тэмцээний II тойргийн тоглолтоор СЭЗИС-ийн шигшээ гэрээний танхимдаа ШУТИС-ийг 84-79 харьцаагаар буулган авлаа. Тоглолтын туршид онооны зөрүү тавиас хэтэрсэнгүй, сүүлийн хоёр минутанд л хожил шийдэгдлээ.\n\nБагийн ахлагч М.Ариунбат 24 оноо, 5 дамжуулалттайгаар тоглолтын шилдэг тоглогчоор тодорлоо. Төвийн бүсэд П.Мөнхсайхан 16 оноо, 11 самбараас двойл дүүргэж, багийн довтолгоог тогтвортой байлгав.\n\nТоглолтын эцсийн минутанд Э.Хаш-Эрдэнийн холын зайн шидэлт хожлын замыг нээж өгсөн нь хүндэтгэлтэй. Шүүгчийн бүртгэсэн алдааны тоогоор СЭЗИС 12, ШУТИС 15 удаа алдаа гаргажээ.\n\nДараагийн тоглолтоо багийнхан аравдугаар сарын 11-нд ИЗҮИС-ийн эсрэг өөрийн танхимд хийнэ.',
      excerpt:
        'II тойргийн хүчний сорилт болж өнгөрсөн тоглолтод М.Ариунбат 24 оноотойгоор шилдэг тоглогч болов. Сүүлийн хоёр минут л хожлыг шийдсэн юм.',
      isFeatured: true,
      publishedAt: at('2026-09-27', 7),
      slug: 'sezis-shutis-84-79',
      sortOrder: 2,
      tags: ['тоглолт', 'хожил'],
      title: 'СЭЗИС — ШУТИС: 84-79 хожилтой тоглолтын тойм',
    },
    {
      category: 'ТЭМЦЭЭН',
      content:
        'Их сургуулиудын сагсан бөмбөгийн аварга шалгаруулах тэмцээний 2026/27 улирлын албан ёсны хуваарь гарлаа. Энэ удаагийн тэмцээнд нийт 8 их, дээд сургуулийн баг оролцоно.\n\nШинэ улиралд багууд эхлээд улирлын тоглолтоор зэрэглэл тогтоох бөгөөд шилдэг дөрвөн баг хагас шигшээд шалгарна. Хагас шигшээ, шигшээ тоглолтууд арваннэгдүгээр сард багтана.\n\nСЭЗИС-ийн шигшээ А бүлэгт ШУТИС, ЭМШИС, ИЗҮИС багуудтай өрсөлдөнө. Багийн дасгалжуулагчид хуваарийг судлаад "манай бүлэг хүнд, гэхдээ зорилтот байр суурьнаасаа бицье" гэсэн хандлагатай байна.\n\nБүх тоглолтын дэлгэрэнгүй хуваарь, үр дүнг манай сайтаас шууд мөрдөж болно.',
      excerpt:
        '8 их, дээд сургуулийн баг энэ улирлын тэмцээндөө өрсөлдөнө. СЭЗИС А бүлэгт ШУТИС, ЭМШИС, ИЗҮИС багуудтай өрсөлдөх боллоо.',
      isFeatured: false,
      publishedAt: at('2026-09-20', 7),
      slug: 'temtseentiin-huvaari-garlaa',
      sortOrder: 3,
      tags: ['тэмцээн', 'хуваарь'],
      title: 'Их сургуулиудын аварга шалгаруулах тэмцээний хуваарь гарлаа',
    },
    {
      category: 'ТОГЛОГЧ',
      content:
        'Шигшээ багийн ахлагч, гуравдугаар курсын оюутан М.Ариунбаттай уулзлаа. Багийн бүрэлдэхүүнд хоёр дахь жилээ ахлагчаар ажиллаж буй тэрбээр энэ улирлын зорилго, багийн сэтгэл санааны талаар ярив.\n\n"Бид өнгөрсөн жилийн туршлагаас суралцсан. Хагас шигшээд шалгарч чадаагүй нь багтаа том сургамж байлаа. Энэ жил зорилгоо тодорхой тавьсан — шигшээ тоглолт хүртэл явахыг хүсч байна" гэж тэрбээр хэлээд "Хамгийн чухал нь бид бие биенээсээ суралцаж, нэг баг болж тоглох явдал юм" гэж нэмэв.\n\nАриунбат өдөр бүр өглөөний зургаан цагт зааланд ирж бэлтгэлээ хийдэг гэнэ. "Сагсан бөмбөг бол миний амьдралын хэсэг. Сургалт, спорт хоёрыг зохицуулах хэцүү, гэхдээ боломжгүй зүйл биш" гэлээ.\n\nБагийн дараагийн тоглолт аравдугаар сарын 11-нд ИЗҮИС-ийн эсрэг UFE Аренад болохыг сануулъя.',
      excerpt:
        'Гуравдугаар курсын оюутан, багийн ахлагч М.Ариунбаттай энэ улирлын зорилго, өдөр тутмын дэглэмийн тухай ярилаа.',
      isFeatured: true,
      publishedAt: at('2026-10-01', 7),
      slug: 'ahlagch-ariunbat-tuhai',
      sortOrder: 4,
      tags: ['тоглогч', 'ярилцлага'],
      title: 'Багийн ахлагч М.Ариунбат: Бид тоглолт бүрийг хожихоор ирдэг',
    },
    {
      category: 'БАГ',
      content:
        'Шигшээ багийн 2026/27 улирлын өвлийн хувцас өнөөдөр албан ёсоор нээлтээ хийлээ. Хувцасны загварыг СЭЗИС-ийн дизайны ангийн оюутнууд багийн хамт хамтран бүтээсэн бөгөөд хар хөх өнгөний давамгайлалтайгаар улирлын гэрэлтүүлэгт зориулагджээ.\n\nГэрээний болон зочлох тоглолтын хоёр хувилбартай хувцасны ар талд "СЭЗИС" бичиг, өмнө талд багийн сүлд тэмдэг бүхий бөгөөд тоглогч бүрийн дугаар, нэр хэвлэгдсэн байна.\n\nХувцасны нээлтэд багийн тоглогчид, дасгалжуулагчид, мөн спортын клубийн гишүүд оролцож, шинэ хувцастай багаараа хамт зургаа авчууллаа.\n\nШинэ хувцасаараа багийнхан анхны тоглолтоо аравдугаар сарын 11-нд хийнэ.',
      excerpt:
        'Хар хөх тэргүүлэх өнгө бүхий шинэ улирлын хувцас олны хүртээл болов. Загварыг дизайны ангийн оюутнууд бүтээсэн юм.',
      isFeatured: false,
      publishedAt: at('2026-10-03', 7),
      slug: 'shineltsen-huvtsas',
      sortOrder: 5,
      tags: ['баг', 'хувцас'],
      title: 'Шигшээ багийн шинэ хувцас нээлтээ хийлээ',
    },
    {
      category: 'МЭДЭЭ',
      content:
        'Шигшээ багийн дасгалжуулагч, тоглогчдоос гадна СЭЗИС-ийн бүх оюутан, багшийг хамруулсан нээлттэй сургуулилалт долоо хоног бүрийн пүрэв гарагт UFE Арена танхимд болно.\n\nСургуулилалт нь эхлээд багийн тоглогчдоос техникийн заавар авах, дараа нь сул чөлөөтэй тоглолт хэлбэрээр явагдана. Сагсан бөмбөгт сонирхолтой, оролцох хүсэлтэй оюутан бүр хүлээн авагдана.\n\nОролцохын тулд урьдчилж бүртгүүлэх шаардлагагүй бөгөөд спортын хувцас, гутал өөрөө бэлдэхийг хүсье. Танхимд дугуйны түрээсийн үйлчилгээ бас бий.\n\nДэлгэрэнгүй мэдээллийг холбоо барих хуудаснаас авна уу.',
      excerpt:
        'Долоо хоног бүрийн пүрэв гарагт UFE Аренад багийн тоглогчдоос заавал авдаг нээлттэй сургуулилалт эхэллээ. Оюутан бүр оролцох боломжтой.',
      isFeatured: false,
      publishedAt: at('2026-10-05', 7),
      slug: 'neelttei-surguulilt',
      sortOrder: 6,
      tags: ['сургуулилалт', 'оюутан'],
      title: 'UFE Аренад нээлттэй сургуулилалт долоо хоног бүр болно',
    },
  ];

  await prisma.newsPost.createMany({ data: posts });
}

async function seedPartners(): Promise<void> {
  if ((await prisma.partner.count()) > 0) return;

  const partners = [
    { name: 'Mobicom', sortOrder: 1, url: 'https://www.mobicom.mn' },
    { name: 'Хаан банк', sortOrder: 2, url: 'https://www.khanbank.com' },
    { name: 'APU', sortOrder: 3, url: 'https://www.apu.mn' },
    { name: 'Gobi', sortOrder: 4, url: 'https://www.gobi.mn' },
    { name: 'MCS Group', sortOrder: 5, url: 'https://www.mcs.mn' },
    { name: 'Nicols', sortOrder: 6, url: 'https://www.nicols.mn' },
  ];

  await prisma.partner.createMany({ data: partners });
}

async function seedPlayers(): Promise<void> {
  if ((await prisma.player.count()) > 0) return;

  const players = [
    {
      academicYear: '3-р курс',
      apg: 4.1,
      bio: 'Багийн ахлагч, онооны лидер. Холын зайн шидэлтээр онцлоглодог бөгөөд чухал мөчид тайван тоглодог.',
      birthYear: 2004,
      heightCm: 185,
      hometown: 'Улаанбаатар',
      isCaptain: true,
      name: 'М.Ариунбат',
      number: 11,
      position: 'Хамгаалагч',
      ppg: 19.8,
      rpg: 4.6,
      slug: 'ariunbat',
      sortOrder: 1,
    },
    {
      academicYear: '2-р курс',
      apg: 5.2,
      bio: 'Хурдан довтолгоо, нарийн шидэлттэй гол хамгаалагч. 2025/26 улирлаас шигшээ багийн бүрэлдэхүүнд тоглож байна.',
      birthYear: 2005,
      heightCm: 183,
      hometown: 'Улаанбаатар',
      name: 'Б.Тэмүүлэн',
      number: 7,
      position: 'Хамгаалагч',
      ppg: 16.4,
      rpg: 3.1,
      slug: 'temuulen',
      sortOrder: 2,
    },
    {
      academicYear: '2-р курс',
      apg: 1.9,
      bio: 'Өндөр довтолгооны шидэгч, холын зайн шидэлт сайтай. ШУТИС-тай хийсэн тоглолтод хожлын шидэлтийг хийсэн.',
      birthYear: 2005,
      heightCm: 192,
      hometown: 'Эрдэнэт',
      name: 'Э.Хаш-Эрдэнэ',
      number: 23,
      position: 'Довтлогч',
      ppg: 14.2,
      rpg: 6.1,
      slug: 'khas-erdene',
      sortOrder: 3,
    },
    {
      academicYear: '3-р курс',
      apg: 1.2,
      bio: 'Самбарын ноён нуруу. Двойл болон довтолгооны төгсгөлд онцлогтой.',
      birthYear: 2004,
      heightCm: 200,
      hometown: 'Дархан',
      name: 'П.Мөнхсайхан',
      number: 42,
      position: 'Төв',
      ppg: 13.8,
      rpg: 8.9,
      slug: 'munkhsaikhan',
      sortOrder: 4,
    },
    {
      academicYear: '4-р курс',
      apg: 2.1,
      bio: 'Туршлагатай довтлогч, хамгаалалтад ч мөн сайн. Багийн ахмад тоглогч.',
      birthYear: 2003,
      heightCm: 195,
      hometown: 'Улаанбаатар',
      name: 'С.Гантөгс',
      number: 13,
      position: 'Довтлогч',
      ppg: 11.0,
      rpg: 5.4,
      slug: 'gantogs',
      sortOrder: 5,
    },
    {
      academicYear: '4-р курс',
      apg: 0.9,
      bio: 'Том биетэй төвийн тоглогч. Самбар түлж, довтолгоог эхлүүлэгч.',
      birthYear: 2003,
      heightCm: 205,
      hometown: 'Улаанбаатар',
      name: 'Л.Батболд',
      number: 55,
      position: 'Төв',
      ppg: 10.6,
      rpg: 9.8,
      slug: 'batbold',
      sortOrder: 6,
    },
    {
      academicYear: '1-р курс',
      apg: 3.4,
      bio: 'Анхны улиралдаа шигшээд багтсан залуу авьяас. Хурд нь түүний зэвсэг.',
      birthYear: 2006,
      heightCm: 178,
      hometown: 'Улаанбаатар',
      name: 'Д.Билгүүн',
      number: 4,
      position: 'Хамгаалагч',
      ppg: 9.8,
      rpg: 2.0,
      slug: 'bilguun',
      sortOrder: 7,
    },
    {
      academicYear: '1-р курс',
      apg: 1.5,
      bio: 'Багаараа тоглох дуртай универсаль довтлогч.',
      birthYear: 2006,
      heightCm: 188,
      hometown: 'Чойбалсан',
      name: 'Ц.Энхбаяр',
      number: 10,
      position: 'Довтлогч',
      ppg: 8.9,
      rpg: 3.6,
      slug: 'enhbayar',
      sortOrder: 8,
    },
    {
      academicYear: '3-р курс',
      apg: 0.8,
      bio: 'Хамгаалалтын цайз. Блокын статистикаараа багт тэргүүлдэг.',
      birthYear: 2004,
      heightCm: 198,
      hometown: 'Улаанбаатар',
      name: 'О.Дөлгөөн',
      number: 21,
      position: 'Төв',
      ppg: 9.2,
      rpg: 6.3,
      slug: 'dolgoon',
      sortOrder: 9,
    },
    {
      academicYear: '2-р курс',
      apg: 2.6,
      bio: 'Эргэлтийн чадвар сайтай резервийн хамгаалагч.',
      birthYear: 2005,
      heightCm: 180,
      hometown: 'Улаанбаатар',
      name: 'Г.Нямсүрэн',
      number: 8,
      position: 'Хамгаалагч',
      ppg: 7.4,
      rpg: 1.8,
      slug: 'nyamsuren',
      sortOrder: 10,
    },
    {
      academicYear: '4-р курс',
      apg: 1.1,
      bio: 'Тууштай хөдөлмөрч ахмад довтлогч. Залуучуудад үлгэр дууриалал үзүүлдэг.',
      birthYear: 2003,
      heightCm: 190,
      hometown: 'Улаанбаатар',
      name: 'Н.Эрдэнэбат',
      number: 24,
      position: 'Довтлогч',
      ppg: 6.8,
      rpg: 2.9,
      slug: 'erdenebat',
      sortOrder: 11,
    },
    {
      academicYear: '1-р курс',
      apg: 1.9,
      bio: 'Ирээдүйн авьяас. Хөгжлийн өндөр потенциалтай залуу тоглогч.',
      birthYear: 2007,
      heightCm: 175,
      hometown: 'Улаанбаатар',
      name: 'Х.Ууганбаяр',
      number: 0,
      position: 'Хамгаалагч',
      ppg: 5.6,
      rpg: 1.2,
      slug: 'uuganbayar',
      sortOrder: 12,
    },
    {
      bio: '2019 оноос СЭЗИС-ийн шигшээ багийг удирдаж байна. Өмнө нь залуучуудын лигт дасгалжуулж байсан.',
      birthYear: 1988,
      heightCm: 188,
      name: 'С.Жаргал',
      position: 'Ахлах дасгалжуулагч',
      role: 'COACH',
      slug: 'jargal',
      sortOrder: 90,
    },
    {
      bio: 'Бэлтгэл сургуулилт, биеийн төлөвшлийн асуудлыг хариуцдаг. Багийн статистик шинжилгээг гардаг.',
      birthYear: 1994,
      heightCm: 183,
      name: 'Г.Очирбат',
      position: 'Дасгалжуулагчийн туслах',
      role: 'COACH',
      slug: 'ochirbat',
      sortOrder: 91,
    },
  ];

  await prisma.player.createMany({ data: players });
}

async function seedSiteContent(): Promise<void> {
  if ((await prisma.siteContent.count()) > 0) return;

  const rows = [
    {
      data: {
        kicker: 'ИХ СУРГУУЛИУДЫН АВАРГА ШАЛГАРУУЛАХ ТЭМЦЭЭН 2026/27',
        note: 'Улаанбаатар · СЭЗИС-ийн шигшээ баг',
      },
      page: 'home',
      section: 'hero',
    },
    {
      data: {
        button: 'Бүртгүүлэх',
        text: 'Тоглолт бүрийн үр дүн, багийн мэдээ, урилга имэйлээр шууд танд очно.',
        title: 'ФЭНЭЙ МЭДЭЭ',
      },
      page: 'home',
      section: 'fanmail',
    },
    {
      data: {
        address: 'Хан-Уул дүүрэг, 15-р хороо, Их сургуулийн 3-р гудамж, Улаанбаатар',
        email: 'basketball@ufe.edu.mn',
        hours: 'Даваа-Бямба · 09:00-21:00',
        phone: '+976 7711-2233',
      },
      page: 'contact',
      section: 'info',
    },
    {
      data: {
        price: '5 000₮',
        studentPrice: 'Үнэгүй (оюутны үнэмлэхээр)',
        text: 'Гэрээний тоглолтууд UFE Арена танхимд болно. Тасалбарыг танхимын касст эсвэл урьдчилж холбоо барин авна уу.',
      },
      page: 'contact',
      section: 'tickets',
    },
    {
      data: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        x: 'https://x.com',
        youtube: 'https://youtube.com',
      },
      page: 'footer',
      section: 'social',
    },
  ];

  await prisma.siteContent.createMany({ data: rows });
}

async function seedStandings(): Promise<void> {
  if ((await prisma.standingRow.count()) > 0) return;

  const rows = [
    { losses: 1, sortOrder: 1, teamName: 'СЭЗИС', teamShort: 'СЭЗИС', wins: 4 },
    {
      losses: 1,
      sortOrder: 2,
      teamName: 'Шинжлэх ухаан, технологийн их сургууль',
      teamShort: 'ШУТИС',
      wins: 3,
    },
    { losses: 2, sortOrder: 3, teamName: 'Монгол Улсын их сургууль', teamShort: 'МУИС', wins: 3 },
    {
      losses: 2,
      sortOrder: 4,
      teamName: 'Эмнэлзүйн шинжлэх ухааны их сургууль',
      teamShort: 'ЭМШИС',
      wins: 2,
    },
    {
      losses: 2,
      sortOrder: 5,
      teamName: 'Монгол Улсын багшийн их сургууль',
      teamShort: 'МУБИС',
      wins: 2,
    },
    {
      losses: 3,
      sortOrder: 6,
      teamName: 'Хөдөө аж ахуйн их сургууль',
      teamShort: 'ХААИС',
      wins: 2,
    },
    { losses: 3, sortOrder: 7, teamName: 'Их Засаг их сургууль', teamShort: 'ИЗҮИС', wins: 1 },
    { losses: 4, sortOrder: 8, teamName: 'Ховд их сургууль', teamShort: 'ХИС', wins: 0 },
  ];

  await prisma.standingRow.createMany({ data: rows });
}

main()
  .catch((error) => {
    console.error('❌ Seed failed:', error);
    process.exitCode = 1;
  })
  .finally(() => void prisma.$disconnect());
