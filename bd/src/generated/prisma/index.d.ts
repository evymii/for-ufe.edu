
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model NewsPost
 * 
 */
export type NewsPost = $Result.DefaultSelection<Prisma.$NewsPostPayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model LiveGame
 * 
 */
export type LiveGame = $Result.DefaultSelection<Prisma.$LiveGamePayload>
/**
 * Model LiveGameEvent
 * 
 */
export type LiveGameEvent = $Result.DefaultSelection<Prisma.$LiveGameEventPayload>
/**
 * Model StandingRow
 * 
 */
export type StandingRow = $Result.DefaultSelection<Prisma.$StandingRowPayload>
/**
 * Model Partner
 * 
 */
export type Partner = $Result.DefaultSelection<Prisma.$PartnerPayload>
/**
 * Model MediaAlbum
 * 
 */
export type MediaAlbum = $Result.DefaultSelection<Prisma.$MediaAlbumPayload>
/**
 * Model Executive
 * 
 */
export type Executive = $Result.DefaultSelection<Prisma.$ExecutivePayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model ShopProduct
 * 
 */
export type ShopProduct = $Result.DefaultSelection<Prisma.$ShopProductPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model SiteContent
 * 
 */
export type SiteContent = $Result.DefaultSelection<Prisma.$SiteContentPayload>
/**
 * Model ContentBlock
 * 
 */
export type ContentBlock = $Result.DefaultSelection<Prisma.$ContentBlockPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model ContentHistory
 * 
 */
export type ContentHistory = $Result.DefaultSelection<Prisma.$ContentHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsPost`: Exposes CRUD operations for the **NewsPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsPosts
    * const newsPosts = await prisma.newsPost.findMany()
    * ```
    */
  get newsPost(): Prisma.NewsPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.liveGame`: Exposes CRUD operations for the **LiveGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LiveGames
    * const liveGames = await prisma.liveGame.findMany()
    * ```
    */
  get liveGame(): Prisma.LiveGameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.liveGameEvent`: Exposes CRUD operations for the **LiveGameEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LiveGameEvents
    * const liveGameEvents = await prisma.liveGameEvent.findMany()
    * ```
    */
  get liveGameEvent(): Prisma.LiveGameEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.standingRow`: Exposes CRUD operations for the **StandingRow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StandingRows
    * const standingRows = await prisma.standingRow.findMany()
    * ```
    */
  get standingRow(): Prisma.StandingRowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partner`: Exposes CRUD operations for the **Partner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partners
    * const partners = await prisma.partner.findMany()
    * ```
    */
  get partner(): Prisma.PartnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaAlbum`: Exposes CRUD operations for the **MediaAlbum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaAlbums
    * const mediaAlbums = await prisma.mediaAlbum.findMany()
    * ```
    */
  get mediaAlbum(): Prisma.MediaAlbumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.executive`: Exposes CRUD operations for the **Executive** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Executives
    * const executives = await prisma.executive.findMany()
    * ```
    */
  get executive(): Prisma.ExecutiveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopProduct`: Exposes CRUD operations for the **ShopProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopProducts
    * const shopProducts = await prisma.shopProduct.findMany()
    * ```
    */
  get shopProduct(): Prisma.ShopProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteContent`: Exposes CRUD operations for the **SiteContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteContents
    * const siteContents = await prisma.siteContent.findMany()
    * ```
    */
  get siteContent(): Prisma.SiteContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentBlock`: Exposes CRUD operations for the **ContentBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentBlocks
    * const contentBlocks = await prisma.contentBlock.findMany()
    * ```
    */
  get contentBlock(): Prisma.ContentBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentHistory`: Exposes CRUD operations for the **ContentHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentHistories
    * const contentHistories = await prisma.contentHistory.findMany()
    * ```
    */
  get contentHistory(): Prisma.ContentHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    RefreshToken: 'RefreshToken',
    NewsPost: 'NewsPost',
    Player: 'Player',
    Game: 'Game',
    LiveGame: 'LiveGame',
    LiveGameEvent: 'LiveGameEvent',
    StandingRow: 'StandingRow',
    Partner: 'Partner',
    MediaAlbum: 'MediaAlbum',
    Executive: 'Executive',
    Video: 'Video',
    ShopProduct: 'ShopProduct',
    Order: 'Order',
    SiteContent: 'SiteContent',
    ContentBlock: 'ContentBlock',
    Media: 'Media',
    ContentHistory: 'ContentHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "refreshToken" | "newsPost" | "player" | "game" | "liveGame" | "liveGameEvent" | "standingRow" | "partner" | "mediaAlbum" | "executive" | "video" | "shopProduct" | "order" | "siteContent" | "contentBlock" | "media" | "contentHistory"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RefreshTokenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RefreshTokenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      NewsPost: {
        payload: Prisma.$NewsPostPayload<ExtArgs>
        fields: Prisma.NewsPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPostPayload>
          }
          findFirst: {
            args: Prisma.NewsPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPostPayload>
          }
          findMany: {
            args: Prisma.NewsPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPostPayload>[]
          }
          create: {
            args: Prisma.NewsPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPostPayload>
          }
          createMany: {
            args: Prisma.NewsPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NewsPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPostPayload>
          }
          update: {
            args: Prisma.NewsPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPostPayload>
          }
          deleteMany: {
            args: Prisma.NewsPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPostPayload>
          }
          aggregate: {
            args: Prisma.NewsPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsPost>
          }
          groupBy: {
            args: Prisma.NewsPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsPostGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.NewsPostFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.NewsPostAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.NewsPostCountArgs<ExtArgs>
            result: $Utils.Optional<NewsPostCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PlayerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PlayerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GameFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GameAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      LiveGame: {
        payload: Prisma.$LiveGamePayload<ExtArgs>
        fields: Prisma.LiveGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiveGameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiveGameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGamePayload>
          }
          findFirst: {
            args: Prisma.LiveGameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiveGameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGamePayload>
          }
          findMany: {
            args: Prisma.LiveGameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGamePayload>[]
          }
          create: {
            args: Prisma.LiveGameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGamePayload>
          }
          createMany: {
            args: Prisma.LiveGameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LiveGameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGamePayload>
          }
          update: {
            args: Prisma.LiveGameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGamePayload>
          }
          deleteMany: {
            args: Prisma.LiveGameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LiveGameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LiveGameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGamePayload>
          }
          aggregate: {
            args: Prisma.LiveGameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLiveGame>
          }
          groupBy: {
            args: Prisma.LiveGameGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiveGameGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LiveGameFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LiveGameAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LiveGameCountArgs<ExtArgs>
            result: $Utils.Optional<LiveGameCountAggregateOutputType> | number
          }
        }
      }
      LiveGameEvent: {
        payload: Prisma.$LiveGameEventPayload<ExtArgs>
        fields: Prisma.LiveGameEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiveGameEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGameEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiveGameEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGameEventPayload>
          }
          findFirst: {
            args: Prisma.LiveGameEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGameEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiveGameEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGameEventPayload>
          }
          findMany: {
            args: Prisma.LiveGameEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGameEventPayload>[]
          }
          create: {
            args: Prisma.LiveGameEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGameEventPayload>
          }
          createMany: {
            args: Prisma.LiveGameEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LiveGameEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGameEventPayload>
          }
          update: {
            args: Prisma.LiveGameEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGameEventPayload>
          }
          deleteMany: {
            args: Prisma.LiveGameEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LiveGameEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LiveGameEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveGameEventPayload>
          }
          aggregate: {
            args: Prisma.LiveGameEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLiveGameEvent>
          }
          groupBy: {
            args: Prisma.LiveGameEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiveGameEventGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LiveGameEventFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LiveGameEventAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LiveGameEventCountArgs<ExtArgs>
            result: $Utils.Optional<LiveGameEventCountAggregateOutputType> | number
          }
        }
      }
      StandingRow: {
        payload: Prisma.$StandingRowPayload<ExtArgs>
        fields: Prisma.StandingRowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StandingRowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandingRowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StandingRowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandingRowPayload>
          }
          findFirst: {
            args: Prisma.StandingRowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandingRowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StandingRowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandingRowPayload>
          }
          findMany: {
            args: Prisma.StandingRowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandingRowPayload>[]
          }
          create: {
            args: Prisma.StandingRowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandingRowPayload>
          }
          createMany: {
            args: Prisma.StandingRowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StandingRowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandingRowPayload>
          }
          update: {
            args: Prisma.StandingRowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandingRowPayload>
          }
          deleteMany: {
            args: Prisma.StandingRowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StandingRowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StandingRowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandingRowPayload>
          }
          aggregate: {
            args: Prisma.StandingRowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStandingRow>
          }
          groupBy: {
            args: Prisma.StandingRowGroupByArgs<ExtArgs>
            result: $Utils.Optional<StandingRowGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StandingRowFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StandingRowAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StandingRowCountArgs<ExtArgs>
            result: $Utils.Optional<StandingRowCountAggregateOutputType> | number
          }
        }
      }
      Partner: {
        payload: Prisma.$PartnerPayload<ExtArgs>
        fields: Prisma.PartnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          findFirst: {
            args: Prisma.PartnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          findMany: {
            args: Prisma.PartnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          create: {
            args: Prisma.PartnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          createMany: {
            args: Prisma.PartnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PartnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          update: {
            args: Prisma.PartnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          deleteMany: {
            args: Prisma.PartnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          aggregate: {
            args: Prisma.PartnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartner>
          }
          groupBy: {
            args: Prisma.PartnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PartnerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PartnerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PartnerCountArgs<ExtArgs>
            result: $Utils.Optional<PartnerCountAggregateOutputType> | number
          }
        }
      }
      MediaAlbum: {
        payload: Prisma.$MediaAlbumPayload<ExtArgs>
        fields: Prisma.MediaAlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaAlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaAlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAlbumPayload>
          }
          findFirst: {
            args: Prisma.MediaAlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaAlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAlbumPayload>
          }
          findMany: {
            args: Prisma.MediaAlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAlbumPayload>[]
          }
          create: {
            args: Prisma.MediaAlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAlbumPayload>
          }
          createMany: {
            args: Prisma.MediaAlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MediaAlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAlbumPayload>
          }
          update: {
            args: Prisma.MediaAlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAlbumPayload>
          }
          deleteMany: {
            args: Prisma.MediaAlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaAlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MediaAlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAlbumPayload>
          }
          aggregate: {
            args: Prisma.MediaAlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaAlbum>
          }
          groupBy: {
            args: Prisma.MediaAlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaAlbumGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MediaAlbumFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MediaAlbumAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MediaAlbumCountArgs<ExtArgs>
            result: $Utils.Optional<MediaAlbumCountAggregateOutputType> | number
          }
        }
      }
      Executive: {
        payload: Prisma.$ExecutivePayload<ExtArgs>
        fields: Prisma.ExecutiveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutiveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutiveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload>
          }
          findFirst: {
            args: Prisma.ExecutiveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutiveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload>
          }
          findMany: {
            args: Prisma.ExecutiveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload>[]
          }
          create: {
            args: Prisma.ExecutiveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload>
          }
          createMany: {
            args: Prisma.ExecutiveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExecutiveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload>
          }
          update: {
            args: Prisma.ExecutiveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload>
          }
          deleteMany: {
            args: Prisma.ExecutiveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutiveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExecutiveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload>
          }
          aggregate: {
            args: Prisma.ExecutiveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutive>
          }
          groupBy: {
            args: Prisma.ExecutiveGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutiveGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExecutiveFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExecutiveAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ExecutiveCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutiveCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VideoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VideoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      ShopProduct: {
        payload: Prisma.$ShopProductPayload<ExtArgs>
        fields: Prisma.ShopProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopProductPayload>
          }
          findFirst: {
            args: Prisma.ShopProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopProductPayload>
          }
          findMany: {
            args: Prisma.ShopProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopProductPayload>[]
          }
          create: {
            args: Prisma.ShopProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopProductPayload>
          }
          createMany: {
            args: Prisma.ShopProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShopProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopProductPayload>
          }
          update: {
            args: Prisma.ShopProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopProductPayload>
          }
          deleteMany: {
            args: Prisma.ShopProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShopProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopProductPayload>
          }
          aggregate: {
            args: Prisma.ShopProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopProduct>
          }
          groupBy: {
            args: Prisma.ShopProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopProductGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ShopProductFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ShopProductAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ShopProductCountArgs<ExtArgs>
            result: $Utils.Optional<ShopProductCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.OrderFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.OrderAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      SiteContent: {
        payload: Prisma.$SiteContentPayload<ExtArgs>
        fields: Prisma.SiteContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteContentPayload>
          }
          findFirst: {
            args: Prisma.SiteContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteContentPayload>
          }
          findMany: {
            args: Prisma.SiteContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteContentPayload>[]
          }
          create: {
            args: Prisma.SiteContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteContentPayload>
          }
          createMany: {
            args: Prisma.SiteContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SiteContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteContentPayload>
          }
          update: {
            args: Prisma.SiteContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteContentPayload>
          }
          deleteMany: {
            args: Prisma.SiteContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SiteContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteContentPayload>
          }
          aggregate: {
            args: Prisma.SiteContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteContent>
          }
          groupBy: {
            args: Prisma.SiteContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteContentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SiteContentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SiteContentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SiteContentCountArgs<ExtArgs>
            result: $Utils.Optional<SiteContentCountAggregateOutputType> | number
          }
        }
      }
      ContentBlock: {
        payload: Prisma.$ContentBlockPayload<ExtArgs>
        fields: Prisma.ContentBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          findFirst: {
            args: Prisma.ContentBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          findMany: {
            args: Prisma.ContentBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>[]
          }
          create: {
            args: Prisma.ContentBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          createMany: {
            args: Prisma.ContentBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContentBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          update: {
            args: Prisma.ContentBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          deleteMany: {
            args: Prisma.ContentBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContentBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          aggregate: {
            args: Prisma.ContentBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentBlock>
          }
          groupBy: {
            args: Prisma.ContentBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentBlockGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ContentBlockFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ContentBlockAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ContentBlockCountArgs<ExtArgs>
            result: $Utils.Optional<ContentBlockCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MediaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MediaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      ContentHistory: {
        payload: Prisma.$ContentHistoryPayload<ExtArgs>
        fields: Prisma.ContentHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload>
          }
          findFirst: {
            args: Prisma.ContentHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload>
          }
          findMany: {
            args: Prisma.ContentHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload>[]
          }
          create: {
            args: Prisma.ContentHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload>
          }
          createMany: {
            args: Prisma.ContentHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContentHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload>
          }
          update: {
            args: Prisma.ContentHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ContentHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContentHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload>
          }
          aggregate: {
            args: Prisma.ContentHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentHistory>
          }
          groupBy: {
            args: Prisma.ContentHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentHistoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ContentHistoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ContentHistoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ContentHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ContentHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    refreshToken?: RefreshTokenOmit
    newsPost?: NewsPostOmit
    player?: PlayerOmit
    game?: GameOmit
    liveGame?: LiveGameOmit
    liveGameEvent?: LiveGameEventOmit
    standingRow?: StandingRowOmit
    partner?: PartnerOmit
    mediaAlbum?: MediaAlbumOmit
    executive?: ExecutiveOmit
    video?: VideoOmit
    shopProduct?: ShopProductOmit
    order?: OrderOmit
    siteContent?: SiteContentOmit
    contentBlock?: ContentBlockOmit
    media?: MediaOmit
    contentHistory?: ContentHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    refreshTokens: number
    contentBlocks: number
    contentEdits: number
    media: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    contentBlocks?: boolean | UserCountOutputTypeCountContentBlocksArgs
    contentEdits?: boolean | UserCountOutputTypeCountContentEditsArgs
    media?: boolean | UserCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContentBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentBlockWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContentEditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }


  /**
   * Count Type ContentBlockCountOutputType
   */

  export type ContentBlockCountOutputType = {
    history: number
  }

  export type ContentBlockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | ContentBlockCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * ContentBlockCountOutputType without action
   */
  export type ContentBlockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlockCountOutputType
     */
    select?: ContentBlockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContentBlockCountOutputType without action
   */
  export type ContentBlockCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    passwordHash: number
    name: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string | null
    passwordHash: string
    name: string | null
    role: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    contentBlocks?: boolean | User$contentBlocksArgs<ExtArgs>
    contentEdits?: boolean | User$contentEditsArgs<ExtArgs>
    media?: boolean | User$mediaArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "passwordHash" | "name" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    contentBlocks?: boolean | User$contentBlocksArgs<ExtArgs>
    contentEdits?: boolean | User$contentEditsArgs<ExtArgs>
    media?: boolean | User$mediaArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      contentBlocks: Prisma.$ContentBlockPayload<ExtArgs>[]
      contentEdits: Prisma.$ContentHistoryPayload<ExtArgs>[]
      media: Prisma.$MediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string | null
      passwordHash: string
      name: string | null
      role: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contentBlocks<T extends User$contentBlocksArgs<ExtArgs> = {}>(args?: Subset<T, User$contentBlocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contentEdits<T extends User$contentEditsArgs<ExtArgs> = {}>(args?: Subset<T, User$contentEditsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    media<T extends User$mediaArgs<ExtArgs> = {}>(args?: Subset<T, User$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.contentBlocks
   */
  export type User$contentBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    where?: ContentBlockWhereInput
    orderBy?: ContentBlockOrderByWithRelationInput | ContentBlockOrderByWithRelationInput[]
    cursor?: ContentBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentBlockScalarFieldEnum | ContentBlockScalarFieldEnum[]
  }

  /**
   * User.contentEdits
   */
  export type User$contentEditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    where?: ContentHistoryWhereInput
    orderBy?: ContentHistoryOrderByWithRelationInput | ContentHistoryOrderByWithRelationInput[]
    cursor?: ContentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentHistoryScalarFieldEnum | ContentHistoryScalarFieldEnum[]
  }

  /**
   * User.media
   */
  export type User$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    revokedAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    revokedAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    tokenHash: number
    userId: number
    expiresAt: number
    createdAt: number
    revokedAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    revokedAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    revokedAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    revokedAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    tokenHash: string
    userId: string
    expiresAt: Date
    createdAt: Date
    revokedAt: Date | null
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    revokedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>



  export type RefreshTokenSelectScalar = {
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    revokedAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenHash" | "userId" | "expiresAt" | "createdAt" | "revokedAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenHash: string
      userId: string
      expiresAt: Date
      createdAt: Date
      revokedAt: Date | null
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * @param {RefreshTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const refreshToken = await prisma.refreshToken.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RefreshTokenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RefreshToken.
     * @param {RefreshTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const refreshToken = await prisma.refreshToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RefreshTokenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly tokenHash: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly revokedAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken findRaw
   */
  export type RefreshTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RefreshToken aggregateRaw
   */
  export type RefreshTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model NewsPost
   */

  export type AggregateNewsPost = {
    _count: NewsPostCountAggregateOutputType | null
    _avg: NewsPostAvgAggregateOutputType | null
    _sum: NewsPostSumAggregateOutputType | null
    _min: NewsPostMinAggregateOutputType | null
    _max: NewsPostMaxAggregateOutputType | null
  }

  export type NewsPostAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type NewsPostSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type NewsPostMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    coverImage: string | null
    category: string | null
    isFeatured: boolean | null
    isPublished: boolean | null
    publishedAt: Date | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsPostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    coverImage: string | null
    category: string | null
    isFeatured: boolean | null
    isPublished: boolean | null
    publishedAt: Date | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsPostCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    excerpt: number
    content: number
    coverImage: number
    category: number
    tags: number
    isFeatured: number
    isPublished: number
    publishedAt: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsPostAvgAggregateInputType = {
    sortOrder?: true
  }

  export type NewsPostSumAggregateInputType = {
    sortOrder?: true
  }

  export type NewsPostMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    category?: true
    isFeatured?: true
    isPublished?: true
    publishedAt?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsPostMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    category?: true
    isFeatured?: true
    isPublished?: true
    publishedAt?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsPostCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    category?: true
    tags?: true
    isFeatured?: true
    isPublished?: true
    publishedAt?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsPost to aggregate.
     */
    where?: NewsPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsPosts to fetch.
     */
    orderBy?: NewsPostOrderByWithRelationInput | NewsPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsPosts
    **/
    _count?: true | NewsPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsPostMaxAggregateInputType
  }

  export type GetNewsPostAggregateType<T extends NewsPostAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsPost[P]>
      : GetScalarType<T[P], AggregateNewsPost[P]>
  }




  export type NewsPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsPostWhereInput
    orderBy?: NewsPostOrderByWithAggregationInput | NewsPostOrderByWithAggregationInput[]
    by: NewsPostScalarFieldEnum[] | NewsPostScalarFieldEnum
    having?: NewsPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsPostCountAggregateInputType | true
    _avg?: NewsPostAvgAggregateInputType
    _sum?: NewsPostSumAggregateInputType
    _min?: NewsPostMinAggregateInputType
    _max?: NewsPostMaxAggregateInputType
  }

  export type NewsPostGroupByOutputType = {
    id: string
    title: string
    slug: string
    excerpt: string
    content: string
    coverImage: string | null
    category: string
    tags: string[]
    isFeatured: boolean
    isPublished: boolean
    publishedAt: Date
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: NewsPostCountAggregateOutputType | null
    _avg: NewsPostAvgAggregateOutputType | null
    _sum: NewsPostSumAggregateOutputType | null
    _min: NewsPostMinAggregateOutputType | null
    _max: NewsPostMaxAggregateOutputType | null
  }

  type GetNewsPostGroupByPayload<T extends NewsPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsPostGroupByOutputType[P]>
            : GetScalarType<T[P], NewsPostGroupByOutputType[P]>
        }
      >
    >


  export type NewsPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    category?: boolean
    tags?: boolean
    isFeatured?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsPost"]>



  export type NewsPostSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    category?: boolean
    tags?: boolean
    isFeatured?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "excerpt" | "content" | "coverImage" | "category" | "tags" | "isFeatured" | "isPublished" | "publishedAt" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["newsPost"]>

  export type $NewsPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsPost"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      excerpt: string
      content: string
      coverImage: string | null
      category: string
      tags: string[]
      isFeatured: boolean
      isPublished: boolean
      publishedAt: Date
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["newsPost"]>
    composites: {}
  }

  type NewsPostGetPayload<S extends boolean | null | undefined | NewsPostDefaultArgs> = $Result.GetResult<Prisma.$NewsPostPayload, S>

  type NewsPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsPostCountAggregateInputType | true
    }

  export interface NewsPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsPost'], meta: { name: 'NewsPost' } }
    /**
     * Find zero or one NewsPost that matches the filter.
     * @param {NewsPostFindUniqueArgs} args - Arguments to find a NewsPost
     * @example
     * // Get one NewsPost
     * const newsPost = await prisma.newsPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsPostFindUniqueArgs>(args: SelectSubset<T, NewsPostFindUniqueArgs<ExtArgs>>): Prisma__NewsPostClient<$Result.GetResult<Prisma.$NewsPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsPostFindUniqueOrThrowArgs} args - Arguments to find a NewsPost
     * @example
     * // Get one NewsPost
     * const newsPost = await prisma.newsPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsPostFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsPostClient<$Result.GetResult<Prisma.$NewsPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsPostFindFirstArgs} args - Arguments to find a NewsPost
     * @example
     * // Get one NewsPost
     * const newsPost = await prisma.newsPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsPostFindFirstArgs>(args?: SelectSubset<T, NewsPostFindFirstArgs<ExtArgs>>): Prisma__NewsPostClient<$Result.GetResult<Prisma.$NewsPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsPostFindFirstOrThrowArgs} args - Arguments to find a NewsPost
     * @example
     * // Get one NewsPost
     * const newsPost = await prisma.newsPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsPostFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsPostClient<$Result.GetResult<Prisma.$NewsPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsPosts
     * const newsPosts = await prisma.newsPost.findMany()
     * 
     * // Get first 10 NewsPosts
     * const newsPosts = await prisma.newsPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsPostWithIdOnly = await prisma.newsPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsPostFindManyArgs>(args?: SelectSubset<T, NewsPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsPost.
     * @param {NewsPostCreateArgs} args - Arguments to create a NewsPost.
     * @example
     * // Create one NewsPost
     * const NewsPost = await prisma.newsPost.create({
     *   data: {
     *     // ... data to create a NewsPost
     *   }
     * })
     * 
     */
    create<T extends NewsPostCreateArgs>(args: SelectSubset<T, NewsPostCreateArgs<ExtArgs>>): Prisma__NewsPostClient<$Result.GetResult<Prisma.$NewsPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsPosts.
     * @param {NewsPostCreateManyArgs} args - Arguments to create many NewsPosts.
     * @example
     * // Create many NewsPosts
     * const newsPost = await prisma.newsPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsPostCreateManyArgs>(args?: SelectSubset<T, NewsPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NewsPost.
     * @param {NewsPostDeleteArgs} args - Arguments to delete one NewsPost.
     * @example
     * // Delete one NewsPost
     * const NewsPost = await prisma.newsPost.delete({
     *   where: {
     *     // ... filter to delete one NewsPost
     *   }
     * })
     * 
     */
    delete<T extends NewsPostDeleteArgs>(args: SelectSubset<T, NewsPostDeleteArgs<ExtArgs>>): Prisma__NewsPostClient<$Result.GetResult<Prisma.$NewsPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsPost.
     * @param {NewsPostUpdateArgs} args - Arguments to update one NewsPost.
     * @example
     * // Update one NewsPost
     * const newsPost = await prisma.newsPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsPostUpdateArgs>(args: SelectSubset<T, NewsPostUpdateArgs<ExtArgs>>): Prisma__NewsPostClient<$Result.GetResult<Prisma.$NewsPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsPosts.
     * @param {NewsPostDeleteManyArgs} args - Arguments to filter NewsPosts to delete.
     * @example
     * // Delete a few NewsPosts
     * const { count } = await prisma.newsPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsPostDeleteManyArgs>(args?: SelectSubset<T, NewsPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsPosts
     * const newsPost = await prisma.newsPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsPostUpdateManyArgs>(args: SelectSubset<T, NewsPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NewsPost.
     * @param {NewsPostUpsertArgs} args - Arguments to update or create a NewsPost.
     * @example
     * // Update or create a NewsPost
     * const newsPost = await prisma.newsPost.upsert({
     *   create: {
     *     // ... data to create a NewsPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsPost we want to update
     *   }
     * })
     */
    upsert<T extends NewsPostUpsertArgs>(args: SelectSubset<T, NewsPostUpsertArgs<ExtArgs>>): Prisma__NewsPostClient<$Result.GetResult<Prisma.$NewsPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsPosts that matches the filter.
     * @param {NewsPostFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const newsPost = await prisma.newsPost.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: NewsPostFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a NewsPost.
     * @param {NewsPostAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const newsPost = await prisma.newsPost.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: NewsPostAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of NewsPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsPostCountArgs} args - Arguments to filter NewsPosts to count.
     * @example
     * // Count the number of NewsPosts
     * const count = await prisma.newsPost.count({
     *   where: {
     *     // ... the filter for the NewsPosts we want to count
     *   }
     * })
    **/
    count<T extends NewsPostCountArgs>(
      args?: Subset<T, NewsPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsPostAggregateArgs>(args: Subset<T, NewsPostAggregateArgs>): Prisma.PrismaPromise<GetNewsPostAggregateType<T>>

    /**
     * Group by NewsPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsPostGroupByArgs['orderBy'] }
        : { orderBy?: NewsPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsPost model
   */
  readonly fields: NewsPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsPost model
   */
  interface NewsPostFieldRefs {
    readonly id: FieldRef<"NewsPost", 'String'>
    readonly title: FieldRef<"NewsPost", 'String'>
    readonly slug: FieldRef<"NewsPost", 'String'>
    readonly excerpt: FieldRef<"NewsPost", 'String'>
    readonly content: FieldRef<"NewsPost", 'String'>
    readonly coverImage: FieldRef<"NewsPost", 'String'>
    readonly category: FieldRef<"NewsPost", 'String'>
    readonly tags: FieldRef<"NewsPost", 'String[]'>
    readonly isFeatured: FieldRef<"NewsPost", 'Boolean'>
    readonly isPublished: FieldRef<"NewsPost", 'Boolean'>
    readonly publishedAt: FieldRef<"NewsPost", 'DateTime'>
    readonly sortOrder: FieldRef<"NewsPost", 'Int'>
    readonly createdAt: FieldRef<"NewsPost", 'DateTime'>
    readonly updatedAt: FieldRef<"NewsPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsPost findUnique
   */
  export type NewsPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPost
     */
    select?: NewsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPost
     */
    omit?: NewsPostOmit<ExtArgs> | null
    /**
     * Filter, which NewsPost to fetch.
     */
    where: NewsPostWhereUniqueInput
  }

  /**
   * NewsPost findUniqueOrThrow
   */
  export type NewsPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPost
     */
    select?: NewsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPost
     */
    omit?: NewsPostOmit<ExtArgs> | null
    /**
     * Filter, which NewsPost to fetch.
     */
    where: NewsPostWhereUniqueInput
  }

  /**
   * NewsPost findFirst
   */
  export type NewsPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPost
     */
    select?: NewsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPost
     */
    omit?: NewsPostOmit<ExtArgs> | null
    /**
     * Filter, which NewsPost to fetch.
     */
    where?: NewsPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsPosts to fetch.
     */
    orderBy?: NewsPostOrderByWithRelationInput | NewsPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsPosts.
     */
    cursor?: NewsPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsPosts.
     */
    distinct?: NewsPostScalarFieldEnum | NewsPostScalarFieldEnum[]
  }

  /**
   * NewsPost findFirstOrThrow
   */
  export type NewsPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPost
     */
    select?: NewsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPost
     */
    omit?: NewsPostOmit<ExtArgs> | null
    /**
     * Filter, which NewsPost to fetch.
     */
    where?: NewsPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsPosts to fetch.
     */
    orderBy?: NewsPostOrderByWithRelationInput | NewsPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsPosts.
     */
    cursor?: NewsPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsPosts.
     */
    distinct?: NewsPostScalarFieldEnum | NewsPostScalarFieldEnum[]
  }

  /**
   * NewsPost findMany
   */
  export type NewsPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPost
     */
    select?: NewsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPost
     */
    omit?: NewsPostOmit<ExtArgs> | null
    /**
     * Filter, which NewsPosts to fetch.
     */
    where?: NewsPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsPosts to fetch.
     */
    orderBy?: NewsPostOrderByWithRelationInput | NewsPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsPosts.
     */
    cursor?: NewsPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsPosts.
     */
    skip?: number
    distinct?: NewsPostScalarFieldEnum | NewsPostScalarFieldEnum[]
  }

  /**
   * NewsPost create
   */
  export type NewsPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPost
     */
    select?: NewsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPost
     */
    omit?: NewsPostOmit<ExtArgs> | null
    /**
     * The data needed to create a NewsPost.
     */
    data: XOR<NewsPostCreateInput, NewsPostUncheckedCreateInput>
  }

  /**
   * NewsPost createMany
   */
  export type NewsPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsPosts.
     */
    data: NewsPostCreateManyInput | NewsPostCreateManyInput[]
  }

  /**
   * NewsPost update
   */
  export type NewsPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPost
     */
    select?: NewsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPost
     */
    omit?: NewsPostOmit<ExtArgs> | null
    /**
     * The data needed to update a NewsPost.
     */
    data: XOR<NewsPostUpdateInput, NewsPostUncheckedUpdateInput>
    /**
     * Choose, which NewsPost to update.
     */
    where: NewsPostWhereUniqueInput
  }

  /**
   * NewsPost updateMany
   */
  export type NewsPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsPosts.
     */
    data: XOR<NewsPostUpdateManyMutationInput, NewsPostUncheckedUpdateManyInput>
    /**
     * Filter which NewsPosts to update
     */
    where?: NewsPostWhereInput
    /**
     * Limit how many NewsPosts to update.
     */
    limit?: number
  }

  /**
   * NewsPost upsert
   */
  export type NewsPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPost
     */
    select?: NewsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPost
     */
    omit?: NewsPostOmit<ExtArgs> | null
    /**
     * The filter to search for the NewsPost to update in case it exists.
     */
    where: NewsPostWhereUniqueInput
    /**
     * In case the NewsPost found by the `where` argument doesn't exist, create a new NewsPost with this data.
     */
    create: XOR<NewsPostCreateInput, NewsPostUncheckedCreateInput>
    /**
     * In case the NewsPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsPostUpdateInput, NewsPostUncheckedUpdateInput>
  }

  /**
   * NewsPost delete
   */
  export type NewsPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPost
     */
    select?: NewsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPost
     */
    omit?: NewsPostOmit<ExtArgs> | null
    /**
     * Filter which NewsPost to delete.
     */
    where: NewsPostWhereUniqueInput
  }

  /**
   * NewsPost deleteMany
   */
  export type NewsPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsPosts to delete
     */
    where?: NewsPostWhereInput
    /**
     * Limit how many NewsPosts to delete.
     */
    limit?: number
  }

  /**
   * NewsPost findRaw
   */
  export type NewsPostFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * NewsPost aggregateRaw
   */
  export type NewsPostAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * NewsPost without action
   */
  export type NewsPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPost
     */
    select?: NewsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPost
     */
    omit?: NewsPostOmit<ExtArgs> | null
  }


  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    number: number | null
    heightCm: number | null
    weightKg: number | null
    birthYear: number | null
    ppg: number | null
    rpg: number | null
    apg: number | null
    sortOrder: number | null
  }

  export type PlayerSumAggregateOutputType = {
    number: number | null
    heightCm: number | null
    weightKg: number | null
    birthYear: number | null
    ppg: number | null
    rpg: number | null
    apg: number | null
    sortOrder: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    number: number | null
    role: string | null
    position: string | null
    heightCm: number | null
    weightKg: number | null
    birthYear: number | null
    hometown: string | null
    photo: string | null
    actionPhoto: string | null
    bio: string | null
    academicYear: string | null
    isCaptain: boolean | null
    ppg: number | null
    rpg: number | null
    apg: number | null
    sortOrder: number | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    number: number | null
    role: string | null
    position: string | null
    heightCm: number | null
    weightKg: number | null
    birthYear: number | null
    hometown: string | null
    photo: string | null
    actionPhoto: string | null
    bio: string | null
    academicYear: string | null
    isCaptain: boolean | null
    ppg: number | null
    rpg: number | null
    apg: number | null
    sortOrder: number | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    number: number
    role: number
    position: number
    heightCm: number
    weightKg: number
    birthYear: number
    hometown: number
    photo: number
    actionPhoto: number
    bio: number
    academicYear: number
    isCaptain: number
    ppg: number
    rpg: number
    apg: number
    profile: number
    sortOrder: number
    isPublic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    number?: true
    heightCm?: true
    weightKg?: true
    birthYear?: true
    ppg?: true
    rpg?: true
    apg?: true
    sortOrder?: true
  }

  export type PlayerSumAggregateInputType = {
    number?: true
    heightCm?: true
    weightKg?: true
    birthYear?: true
    ppg?: true
    rpg?: true
    apg?: true
    sortOrder?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    number?: true
    role?: true
    position?: true
    heightCm?: true
    weightKg?: true
    birthYear?: true
    hometown?: true
    photo?: true
    actionPhoto?: true
    bio?: true
    academicYear?: true
    isCaptain?: true
    ppg?: true
    rpg?: true
    apg?: true
    sortOrder?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    number?: true
    role?: true
    position?: true
    heightCm?: true
    weightKg?: true
    birthYear?: true
    hometown?: true
    photo?: true
    actionPhoto?: true
    bio?: true
    academicYear?: true
    isCaptain?: true
    ppg?: true
    rpg?: true
    apg?: true
    sortOrder?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    number?: true
    role?: true
    position?: true
    heightCm?: true
    weightKg?: true
    birthYear?: true
    hometown?: true
    photo?: true
    actionPhoto?: true
    bio?: true
    academicYear?: true
    isCaptain?: true
    ppg?: true
    rpg?: true
    apg?: true
    profile?: true
    sortOrder?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: string
    name: string
    slug: string
    number: number | null
    role: string
    position: string | null
    heightCm: number | null
    weightKg: number | null
    birthYear: number | null
    hometown: string | null
    photo: string | null
    actionPhoto: string | null
    bio: string | null
    academicYear: string | null
    isCaptain: boolean
    ppg: number | null
    rpg: number | null
    apg: number | null
    profile: JsonValue | null
    sortOrder: number
    isPublic: boolean
    createdAt: Date
    updatedAt: Date
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    number?: boolean
    role?: boolean
    position?: boolean
    heightCm?: boolean
    weightKg?: boolean
    birthYear?: boolean
    hometown?: boolean
    photo?: boolean
    actionPhoto?: boolean
    bio?: boolean
    academicYear?: boolean
    isCaptain?: boolean
    ppg?: boolean
    rpg?: boolean
    apg?: boolean
    profile?: boolean
    sortOrder?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["player"]>



  export type PlayerSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    number?: boolean
    role?: boolean
    position?: boolean
    heightCm?: boolean
    weightKg?: boolean
    birthYear?: boolean
    hometown?: boolean
    photo?: boolean
    actionPhoto?: boolean
    bio?: boolean
    academicYear?: boolean
    isCaptain?: boolean
    ppg?: boolean
    rpg?: boolean
    apg?: boolean
    profile?: boolean
    sortOrder?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "number" | "role" | "position" | "heightCm" | "weightKg" | "birthYear" | "hometown" | "photo" | "actionPhoto" | "bio" | "academicYear" | "isCaptain" | "ppg" | "rpg" | "apg" | "profile" | "sortOrder" | "isPublic" | "createdAt" | "updatedAt", ExtArgs["result"]["player"]>

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      number: number | null
      role: string
      position: string | null
      heightCm: number | null
      weightKg: number | null
      birthYear: number | null
      hometown: string | null
      photo: string | null
      actionPhoto: string | null
      bio: string | null
      academicYear: string | null
      isCaptain: boolean
      ppg: number | null
      rpg: number | null
      apg: number | null
      profile: Prisma.JsonValue | null
      sortOrder: number
      isPublic: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * @param {PlayerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const player = await prisma.player.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PlayerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Player.
     * @param {PlayerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const player = await prisma.player.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PlayerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'String'>
    readonly name: FieldRef<"Player", 'String'>
    readonly slug: FieldRef<"Player", 'String'>
    readonly number: FieldRef<"Player", 'Int'>
    readonly role: FieldRef<"Player", 'String'>
    readonly position: FieldRef<"Player", 'String'>
    readonly heightCm: FieldRef<"Player", 'Int'>
    readonly weightKg: FieldRef<"Player", 'Int'>
    readonly birthYear: FieldRef<"Player", 'Int'>
    readonly hometown: FieldRef<"Player", 'String'>
    readonly photo: FieldRef<"Player", 'String'>
    readonly actionPhoto: FieldRef<"Player", 'String'>
    readonly bio: FieldRef<"Player", 'String'>
    readonly academicYear: FieldRef<"Player", 'String'>
    readonly isCaptain: FieldRef<"Player", 'Boolean'>
    readonly ppg: FieldRef<"Player", 'Float'>
    readonly rpg: FieldRef<"Player", 'Float'>
    readonly apg: FieldRef<"Player", 'Float'>
    readonly profile: FieldRef<"Player", 'Json'>
    readonly sortOrder: FieldRef<"Player", 'Int'>
    readonly isPublic: FieldRef<"Player", 'Boolean'>
    readonly createdAt: FieldRef<"Player", 'DateTime'>
    readonly updatedAt: FieldRef<"Player", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player findRaw
   */
  export type PlayerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Player aggregateRaw
   */
  export type PlayerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    teamScore: number | null
    opponentScore: number | null
    sortOrder: number | null
  }

  export type GameSumAggregateOutputType = {
    teamScore: number | null
    opponentScore: number | null
    sortOrder: number | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    competition: string | null
    round: string | null
    opponent: string | null
    opponentShort: string | null
    opponentLogo: string | null
    isHome: boolean | null
    tipsAt: Date | null
    venue: string | null
    status: string | null
    teamScore: number | null
    opponentScore: number | null
    note: string | null
    streamUrl: string | null
    ticketUrl: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    competition: string | null
    round: string | null
    opponent: string | null
    opponentShort: string | null
    opponentLogo: string | null
    isHome: boolean | null
    tipsAt: Date | null
    venue: string | null
    status: string | null
    teamScore: number | null
    opponentScore: number | null
    note: string | null
    streamUrl: string | null
    ticketUrl: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    competition: number
    round: number
    opponent: number
    opponentShort: number
    opponentLogo: number
    isHome: number
    tipsAt: number
    venue: number
    status: number
    teamScore: number
    opponentScore: number
    note: number
    streamUrl: number
    ticketUrl: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    teamScore?: true
    opponentScore?: true
    sortOrder?: true
  }

  export type GameSumAggregateInputType = {
    teamScore?: true
    opponentScore?: true
    sortOrder?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    competition?: true
    round?: true
    opponent?: true
    opponentShort?: true
    opponentLogo?: true
    isHome?: true
    tipsAt?: true
    venue?: true
    status?: true
    teamScore?: true
    opponentScore?: true
    note?: true
    streamUrl?: true
    ticketUrl?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    competition?: true
    round?: true
    opponent?: true
    opponentShort?: true
    opponentLogo?: true
    isHome?: true
    tipsAt?: true
    venue?: true
    status?: true
    teamScore?: true
    opponentScore?: true
    note?: true
    streamUrl?: true
    ticketUrl?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    competition?: true
    round?: true
    opponent?: true
    opponentShort?: true
    opponentLogo?: true
    isHome?: true
    tipsAt?: true
    venue?: true
    status?: true
    teamScore?: true
    opponentScore?: true
    note?: true
    streamUrl?: true
    ticketUrl?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    competition: string
    round: string | null
    opponent: string
    opponentShort: string | null
    opponentLogo: string | null
    isHome: boolean
    tipsAt: Date
    venue: string
    status: string
    teamScore: number | null
    opponentScore: number | null
    note: string | null
    streamUrl: string | null
    ticketUrl: string | null
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competition?: boolean
    round?: boolean
    opponent?: boolean
    opponentShort?: boolean
    opponentLogo?: boolean
    isHome?: boolean
    tipsAt?: boolean
    venue?: boolean
    status?: boolean
    teamScore?: boolean
    opponentScore?: boolean
    note?: boolean
    streamUrl?: boolean
    ticketUrl?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["game"]>



  export type GameSelectScalar = {
    id?: boolean
    competition?: boolean
    round?: boolean
    opponent?: boolean
    opponentShort?: boolean
    opponentLogo?: boolean
    isHome?: boolean
    tipsAt?: boolean
    venue?: boolean
    status?: boolean
    teamScore?: boolean
    opponentScore?: boolean
    note?: boolean
    streamUrl?: boolean
    ticketUrl?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "competition" | "round" | "opponent" | "opponentShort" | "opponentLogo" | "isHome" | "tipsAt" | "venue" | "status" | "teamScore" | "opponentScore" | "note" | "streamUrl" | "ticketUrl" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["game"]>

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      competition: string
      round: string | null
      opponent: string
      opponentShort: string | null
      opponentLogo: string | null
      isHome: boolean
      tipsAt: Date
      venue: string
      status: string
      teamScore: number | null
      opponentScore: number | null
      note: string | null
      streamUrl: string | null
      ticketUrl: string | null
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * @param {GameFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const game = await prisma.game.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GameFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Game.
     * @param {GameAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const game = await prisma.game.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GameAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly competition: FieldRef<"Game", 'String'>
    readonly round: FieldRef<"Game", 'String'>
    readonly opponent: FieldRef<"Game", 'String'>
    readonly opponentShort: FieldRef<"Game", 'String'>
    readonly opponentLogo: FieldRef<"Game", 'String'>
    readonly isHome: FieldRef<"Game", 'Boolean'>
    readonly tipsAt: FieldRef<"Game", 'DateTime'>
    readonly venue: FieldRef<"Game", 'String'>
    readonly status: FieldRef<"Game", 'String'>
    readonly teamScore: FieldRef<"Game", 'Int'>
    readonly opponentScore: FieldRef<"Game", 'Int'>
    readonly note: FieldRef<"Game", 'String'>
    readonly streamUrl: FieldRef<"Game", 'String'>
    readonly ticketUrl: FieldRef<"Game", 'String'>
    readonly sortOrder: FieldRef<"Game", 'Int'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly updatedAt: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game findRaw
   */
  export type GameFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Game aggregateRaw
   */
  export type GameAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
  }


  /**
   * Model LiveGame
   */

  export type AggregateLiveGame = {
    _count: LiveGameCountAggregateOutputType | null
    _avg: LiveGameAvgAggregateOutputType | null
    _sum: LiveGameSumAggregateOutputType | null
    _min: LiveGameMinAggregateOutputType | null
    _max: LiveGameMaxAggregateOutputType | null
  }

  export type LiveGameAvgAggregateOutputType = {
    period: number | null
    clockSeconds: number | null
    teamScore: number | null
    opponentScore: number | null
    teamFouls: number | null
    opponentFouls: number | null
    timeouts: number | null
  }

  export type LiveGameSumAggregateOutputType = {
    period: number | null
    clockSeconds: number | null
    teamScore: number | null
    opponentScore: number | null
    teamFouls: number[]
    opponentFouls: number[]
    timeouts: number[]
  }

  export type LiveGameMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    status: string | null
    period: number | null
    clockSeconds: number | null
    clockRunning: boolean | null
    teamScore: number | null
    opponentScore: number | null
    startedAt: Date | null
    endedAt: Date | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type LiveGameMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    status: string | null
    period: number | null
    clockSeconds: number | null
    clockRunning: boolean | null
    teamScore: number | null
    opponentScore: number | null
    startedAt: Date | null
    endedAt: Date | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type LiveGameCountAggregateOutputType = {
    id: number
    gameId: number
    status: number
    period: number
    clockSeconds: number
    clockRunning: number
    teamScore: number
    opponentScore: number
    teamFouls: number
    opponentFouls: number
    timeouts: number
    lineup: number
    startedAt: number
    endedAt: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type LiveGameAvgAggregateInputType = {
    period?: true
    clockSeconds?: true
    teamScore?: true
    opponentScore?: true
    teamFouls?: true
    opponentFouls?: true
    timeouts?: true
  }

  export type LiveGameSumAggregateInputType = {
    period?: true
    clockSeconds?: true
    teamScore?: true
    opponentScore?: true
    teamFouls?: true
    opponentFouls?: true
    timeouts?: true
  }

  export type LiveGameMinAggregateInputType = {
    id?: true
    gameId?: true
    status?: true
    period?: true
    clockSeconds?: true
    clockRunning?: true
    teamScore?: true
    opponentScore?: true
    startedAt?: true
    endedAt?: true
    updatedAt?: true
    createdAt?: true
  }

  export type LiveGameMaxAggregateInputType = {
    id?: true
    gameId?: true
    status?: true
    period?: true
    clockSeconds?: true
    clockRunning?: true
    teamScore?: true
    opponentScore?: true
    startedAt?: true
    endedAt?: true
    updatedAt?: true
    createdAt?: true
  }

  export type LiveGameCountAggregateInputType = {
    id?: true
    gameId?: true
    status?: true
    period?: true
    clockSeconds?: true
    clockRunning?: true
    teamScore?: true
    opponentScore?: true
    teamFouls?: true
    opponentFouls?: true
    timeouts?: true
    lineup?: true
    startedAt?: true
    endedAt?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type LiveGameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveGame to aggregate.
     */
    where?: LiveGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveGames to fetch.
     */
    orderBy?: LiveGameOrderByWithRelationInput | LiveGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiveGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LiveGames
    **/
    _count?: true | LiveGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LiveGameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LiveGameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiveGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiveGameMaxAggregateInputType
  }

  export type GetLiveGameAggregateType<T extends LiveGameAggregateArgs> = {
        [P in keyof T & keyof AggregateLiveGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLiveGame[P]>
      : GetScalarType<T[P], AggregateLiveGame[P]>
  }




  export type LiveGameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiveGameWhereInput
    orderBy?: LiveGameOrderByWithAggregationInput | LiveGameOrderByWithAggregationInput[]
    by: LiveGameScalarFieldEnum[] | LiveGameScalarFieldEnum
    having?: LiveGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiveGameCountAggregateInputType | true
    _avg?: LiveGameAvgAggregateInputType
    _sum?: LiveGameSumAggregateInputType
    _min?: LiveGameMinAggregateInputType
    _max?: LiveGameMaxAggregateInputType
  }

  export type LiveGameGroupByOutputType = {
    id: string
    gameId: string
    status: string
    period: number
    clockSeconds: number
    clockRunning: boolean
    teamScore: number
    opponentScore: number
    teamFouls: number[]
    opponentFouls: number[]
    timeouts: number[]
    lineup: string[]
    startedAt: Date | null
    endedAt: Date | null
    updatedAt: Date
    createdAt: Date
    _count: LiveGameCountAggregateOutputType | null
    _avg: LiveGameAvgAggregateOutputType | null
    _sum: LiveGameSumAggregateOutputType | null
    _min: LiveGameMinAggregateOutputType | null
    _max: LiveGameMaxAggregateOutputType | null
  }

  type GetLiveGameGroupByPayload<T extends LiveGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiveGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiveGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiveGameGroupByOutputType[P]>
            : GetScalarType<T[P], LiveGameGroupByOutputType[P]>
        }
      >
    >


  export type LiveGameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    status?: boolean
    period?: boolean
    clockSeconds?: boolean
    clockRunning?: boolean
    teamScore?: boolean
    opponentScore?: boolean
    teamFouls?: boolean
    opponentFouls?: boolean
    timeouts?: boolean
    lineup?: boolean
    startedAt?: boolean
    endedAt?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["liveGame"]>



  export type LiveGameSelectScalar = {
    id?: boolean
    gameId?: boolean
    status?: boolean
    period?: boolean
    clockSeconds?: boolean
    clockRunning?: boolean
    teamScore?: boolean
    opponentScore?: boolean
    teamFouls?: boolean
    opponentFouls?: boolean
    timeouts?: boolean
    lineup?: boolean
    startedAt?: boolean
    endedAt?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type LiveGameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "status" | "period" | "clockSeconds" | "clockRunning" | "teamScore" | "opponentScore" | "teamFouls" | "opponentFouls" | "timeouts" | "lineup" | "startedAt" | "endedAt" | "updatedAt" | "createdAt", ExtArgs["result"]["liveGame"]>

  export type $LiveGamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LiveGame"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      status: string
      period: number
      clockSeconds: number
      clockRunning: boolean
      teamScore: number
      opponentScore: number
      teamFouls: number[]
      opponentFouls: number[]
      timeouts: number[]
      lineup: string[]
      startedAt: Date | null
      endedAt: Date | null
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["liveGame"]>
    composites: {}
  }

  type LiveGameGetPayload<S extends boolean | null | undefined | LiveGameDefaultArgs> = $Result.GetResult<Prisma.$LiveGamePayload, S>

  type LiveGameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LiveGameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LiveGameCountAggregateInputType | true
    }

  export interface LiveGameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LiveGame'], meta: { name: 'LiveGame' } }
    /**
     * Find zero or one LiveGame that matches the filter.
     * @param {LiveGameFindUniqueArgs} args - Arguments to find a LiveGame
     * @example
     * // Get one LiveGame
     * const liveGame = await prisma.liveGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiveGameFindUniqueArgs>(args: SelectSubset<T, LiveGameFindUniqueArgs<ExtArgs>>): Prisma__LiveGameClient<$Result.GetResult<Prisma.$LiveGamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LiveGame that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LiveGameFindUniqueOrThrowArgs} args - Arguments to find a LiveGame
     * @example
     * // Get one LiveGame
     * const liveGame = await prisma.liveGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiveGameFindUniqueOrThrowArgs>(args: SelectSubset<T, LiveGameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LiveGameClient<$Result.GetResult<Prisma.$LiveGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveGameFindFirstArgs} args - Arguments to find a LiveGame
     * @example
     * // Get one LiveGame
     * const liveGame = await prisma.liveGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiveGameFindFirstArgs>(args?: SelectSubset<T, LiveGameFindFirstArgs<ExtArgs>>): Prisma__LiveGameClient<$Result.GetResult<Prisma.$LiveGamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveGameFindFirstOrThrowArgs} args - Arguments to find a LiveGame
     * @example
     * // Get one LiveGame
     * const liveGame = await prisma.liveGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiveGameFindFirstOrThrowArgs>(args?: SelectSubset<T, LiveGameFindFirstOrThrowArgs<ExtArgs>>): Prisma__LiveGameClient<$Result.GetResult<Prisma.$LiveGamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LiveGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveGameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LiveGames
     * const liveGames = await prisma.liveGame.findMany()
     * 
     * // Get first 10 LiveGames
     * const liveGames = await prisma.liveGame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liveGameWithIdOnly = await prisma.liveGame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LiveGameFindManyArgs>(args?: SelectSubset<T, LiveGameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LiveGame.
     * @param {LiveGameCreateArgs} args - Arguments to create a LiveGame.
     * @example
     * // Create one LiveGame
     * const LiveGame = await prisma.liveGame.create({
     *   data: {
     *     // ... data to create a LiveGame
     *   }
     * })
     * 
     */
    create<T extends LiveGameCreateArgs>(args: SelectSubset<T, LiveGameCreateArgs<ExtArgs>>): Prisma__LiveGameClient<$Result.GetResult<Prisma.$LiveGamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LiveGames.
     * @param {LiveGameCreateManyArgs} args - Arguments to create many LiveGames.
     * @example
     * // Create many LiveGames
     * const liveGame = await prisma.liveGame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LiveGameCreateManyArgs>(args?: SelectSubset<T, LiveGameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LiveGame.
     * @param {LiveGameDeleteArgs} args - Arguments to delete one LiveGame.
     * @example
     * // Delete one LiveGame
     * const LiveGame = await prisma.liveGame.delete({
     *   where: {
     *     // ... filter to delete one LiveGame
     *   }
     * })
     * 
     */
    delete<T extends LiveGameDeleteArgs>(args: SelectSubset<T, LiveGameDeleteArgs<ExtArgs>>): Prisma__LiveGameClient<$Result.GetResult<Prisma.$LiveGamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LiveGame.
     * @param {LiveGameUpdateArgs} args - Arguments to update one LiveGame.
     * @example
     * // Update one LiveGame
     * const liveGame = await prisma.liveGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LiveGameUpdateArgs>(args: SelectSubset<T, LiveGameUpdateArgs<ExtArgs>>): Prisma__LiveGameClient<$Result.GetResult<Prisma.$LiveGamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LiveGames.
     * @param {LiveGameDeleteManyArgs} args - Arguments to filter LiveGames to delete.
     * @example
     * // Delete a few LiveGames
     * const { count } = await prisma.liveGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LiveGameDeleteManyArgs>(args?: SelectSubset<T, LiveGameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiveGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LiveGames
     * const liveGame = await prisma.liveGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LiveGameUpdateManyArgs>(args: SelectSubset<T, LiveGameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LiveGame.
     * @param {LiveGameUpsertArgs} args - Arguments to update or create a LiveGame.
     * @example
     * // Update or create a LiveGame
     * const liveGame = await prisma.liveGame.upsert({
     *   create: {
     *     // ... data to create a LiveGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LiveGame we want to update
     *   }
     * })
     */
    upsert<T extends LiveGameUpsertArgs>(args: SelectSubset<T, LiveGameUpsertArgs<ExtArgs>>): Prisma__LiveGameClient<$Result.GetResult<Prisma.$LiveGamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LiveGames that matches the filter.
     * @param {LiveGameFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const liveGame = await prisma.liveGame.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LiveGameFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LiveGame.
     * @param {LiveGameAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const liveGame = await prisma.liveGame.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LiveGameAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of LiveGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveGameCountArgs} args - Arguments to filter LiveGames to count.
     * @example
     * // Count the number of LiveGames
     * const count = await prisma.liveGame.count({
     *   where: {
     *     // ... the filter for the LiveGames we want to count
     *   }
     * })
    **/
    count<T extends LiveGameCountArgs>(
      args?: Subset<T, LiveGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiveGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LiveGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LiveGameAggregateArgs>(args: Subset<T, LiveGameAggregateArgs>): Prisma.PrismaPromise<GetLiveGameAggregateType<T>>

    /**
     * Group by LiveGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveGameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LiveGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiveGameGroupByArgs['orderBy'] }
        : { orderBy?: LiveGameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LiveGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiveGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LiveGame model
   */
  readonly fields: LiveGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LiveGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiveGameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LiveGame model
   */
  interface LiveGameFieldRefs {
    readonly id: FieldRef<"LiveGame", 'String'>
    readonly gameId: FieldRef<"LiveGame", 'String'>
    readonly status: FieldRef<"LiveGame", 'String'>
    readonly period: FieldRef<"LiveGame", 'Int'>
    readonly clockSeconds: FieldRef<"LiveGame", 'Int'>
    readonly clockRunning: FieldRef<"LiveGame", 'Boolean'>
    readonly teamScore: FieldRef<"LiveGame", 'Int'>
    readonly opponentScore: FieldRef<"LiveGame", 'Int'>
    readonly teamFouls: FieldRef<"LiveGame", 'Int[]'>
    readonly opponentFouls: FieldRef<"LiveGame", 'Int[]'>
    readonly timeouts: FieldRef<"LiveGame", 'Int[]'>
    readonly lineup: FieldRef<"LiveGame", 'String[]'>
    readonly startedAt: FieldRef<"LiveGame", 'DateTime'>
    readonly endedAt: FieldRef<"LiveGame", 'DateTime'>
    readonly updatedAt: FieldRef<"LiveGame", 'DateTime'>
    readonly createdAt: FieldRef<"LiveGame", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LiveGame findUnique
   */
  export type LiveGameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGame
     */
    select?: LiveGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGame
     */
    omit?: LiveGameOmit<ExtArgs> | null
    /**
     * Filter, which LiveGame to fetch.
     */
    where: LiveGameWhereUniqueInput
  }

  /**
   * LiveGame findUniqueOrThrow
   */
  export type LiveGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGame
     */
    select?: LiveGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGame
     */
    omit?: LiveGameOmit<ExtArgs> | null
    /**
     * Filter, which LiveGame to fetch.
     */
    where: LiveGameWhereUniqueInput
  }

  /**
   * LiveGame findFirst
   */
  export type LiveGameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGame
     */
    select?: LiveGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGame
     */
    omit?: LiveGameOmit<ExtArgs> | null
    /**
     * Filter, which LiveGame to fetch.
     */
    where?: LiveGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveGames to fetch.
     */
    orderBy?: LiveGameOrderByWithRelationInput | LiveGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveGames.
     */
    cursor?: LiveGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveGames.
     */
    distinct?: LiveGameScalarFieldEnum | LiveGameScalarFieldEnum[]
  }

  /**
   * LiveGame findFirstOrThrow
   */
  export type LiveGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGame
     */
    select?: LiveGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGame
     */
    omit?: LiveGameOmit<ExtArgs> | null
    /**
     * Filter, which LiveGame to fetch.
     */
    where?: LiveGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveGames to fetch.
     */
    orderBy?: LiveGameOrderByWithRelationInput | LiveGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveGames.
     */
    cursor?: LiveGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveGames.
     */
    distinct?: LiveGameScalarFieldEnum | LiveGameScalarFieldEnum[]
  }

  /**
   * LiveGame findMany
   */
  export type LiveGameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGame
     */
    select?: LiveGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGame
     */
    omit?: LiveGameOmit<ExtArgs> | null
    /**
     * Filter, which LiveGames to fetch.
     */
    where?: LiveGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveGames to fetch.
     */
    orderBy?: LiveGameOrderByWithRelationInput | LiveGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LiveGames.
     */
    cursor?: LiveGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveGames.
     */
    skip?: number
    distinct?: LiveGameScalarFieldEnum | LiveGameScalarFieldEnum[]
  }

  /**
   * LiveGame create
   */
  export type LiveGameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGame
     */
    select?: LiveGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGame
     */
    omit?: LiveGameOmit<ExtArgs> | null
    /**
     * The data needed to create a LiveGame.
     */
    data: XOR<LiveGameCreateInput, LiveGameUncheckedCreateInput>
  }

  /**
   * LiveGame createMany
   */
  export type LiveGameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LiveGames.
     */
    data: LiveGameCreateManyInput | LiveGameCreateManyInput[]
  }

  /**
   * LiveGame update
   */
  export type LiveGameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGame
     */
    select?: LiveGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGame
     */
    omit?: LiveGameOmit<ExtArgs> | null
    /**
     * The data needed to update a LiveGame.
     */
    data: XOR<LiveGameUpdateInput, LiveGameUncheckedUpdateInput>
    /**
     * Choose, which LiveGame to update.
     */
    where: LiveGameWhereUniqueInput
  }

  /**
   * LiveGame updateMany
   */
  export type LiveGameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LiveGames.
     */
    data: XOR<LiveGameUpdateManyMutationInput, LiveGameUncheckedUpdateManyInput>
    /**
     * Filter which LiveGames to update
     */
    where?: LiveGameWhereInput
    /**
     * Limit how many LiveGames to update.
     */
    limit?: number
  }

  /**
   * LiveGame upsert
   */
  export type LiveGameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGame
     */
    select?: LiveGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGame
     */
    omit?: LiveGameOmit<ExtArgs> | null
    /**
     * The filter to search for the LiveGame to update in case it exists.
     */
    where: LiveGameWhereUniqueInput
    /**
     * In case the LiveGame found by the `where` argument doesn't exist, create a new LiveGame with this data.
     */
    create: XOR<LiveGameCreateInput, LiveGameUncheckedCreateInput>
    /**
     * In case the LiveGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiveGameUpdateInput, LiveGameUncheckedUpdateInput>
  }

  /**
   * LiveGame delete
   */
  export type LiveGameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGame
     */
    select?: LiveGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGame
     */
    omit?: LiveGameOmit<ExtArgs> | null
    /**
     * Filter which LiveGame to delete.
     */
    where: LiveGameWhereUniqueInput
  }

  /**
   * LiveGame deleteMany
   */
  export type LiveGameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveGames to delete
     */
    where?: LiveGameWhereInput
    /**
     * Limit how many LiveGames to delete.
     */
    limit?: number
  }

  /**
   * LiveGame findRaw
   */
  export type LiveGameFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LiveGame aggregateRaw
   */
  export type LiveGameAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LiveGame without action
   */
  export type LiveGameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGame
     */
    select?: LiveGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGame
     */
    omit?: LiveGameOmit<ExtArgs> | null
  }


  /**
   * Model LiveGameEvent
   */

  export type AggregateLiveGameEvent = {
    _count: LiveGameEventCountAggregateOutputType | null
    _min: LiveGameEventMinAggregateOutputType | null
    _max: LiveGameEventMaxAggregateOutputType | null
  }

  export type LiveGameEventMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    type: string | null
    reversed: boolean | null
    createdAt: Date | null
  }

  export type LiveGameEventMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    type: string | null
    reversed: boolean | null
    createdAt: Date | null
  }

  export type LiveGameEventCountAggregateOutputType = {
    id: number
    gameId: number
    type: number
    payload: number
    reversed: number
    createdAt: number
    _all: number
  }


  export type LiveGameEventMinAggregateInputType = {
    id?: true
    gameId?: true
    type?: true
    reversed?: true
    createdAt?: true
  }

  export type LiveGameEventMaxAggregateInputType = {
    id?: true
    gameId?: true
    type?: true
    reversed?: true
    createdAt?: true
  }

  export type LiveGameEventCountAggregateInputType = {
    id?: true
    gameId?: true
    type?: true
    payload?: true
    reversed?: true
    createdAt?: true
    _all?: true
  }

  export type LiveGameEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveGameEvent to aggregate.
     */
    where?: LiveGameEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveGameEvents to fetch.
     */
    orderBy?: LiveGameEventOrderByWithRelationInput | LiveGameEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiveGameEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveGameEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveGameEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LiveGameEvents
    **/
    _count?: true | LiveGameEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiveGameEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiveGameEventMaxAggregateInputType
  }

  export type GetLiveGameEventAggregateType<T extends LiveGameEventAggregateArgs> = {
        [P in keyof T & keyof AggregateLiveGameEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLiveGameEvent[P]>
      : GetScalarType<T[P], AggregateLiveGameEvent[P]>
  }




  export type LiveGameEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiveGameEventWhereInput
    orderBy?: LiveGameEventOrderByWithAggregationInput | LiveGameEventOrderByWithAggregationInput[]
    by: LiveGameEventScalarFieldEnum[] | LiveGameEventScalarFieldEnum
    having?: LiveGameEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiveGameEventCountAggregateInputType | true
    _min?: LiveGameEventMinAggregateInputType
    _max?: LiveGameEventMaxAggregateInputType
  }

  export type LiveGameEventGroupByOutputType = {
    id: string
    gameId: string
    type: string
    payload: JsonValue
    reversed: boolean
    createdAt: Date
    _count: LiveGameEventCountAggregateOutputType | null
    _min: LiveGameEventMinAggregateOutputType | null
    _max: LiveGameEventMaxAggregateOutputType | null
  }

  type GetLiveGameEventGroupByPayload<T extends LiveGameEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiveGameEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiveGameEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiveGameEventGroupByOutputType[P]>
            : GetScalarType<T[P], LiveGameEventGroupByOutputType[P]>
        }
      >
    >


  export type LiveGameEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    type?: boolean
    payload?: boolean
    reversed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["liveGameEvent"]>



  export type LiveGameEventSelectScalar = {
    id?: boolean
    gameId?: boolean
    type?: boolean
    payload?: boolean
    reversed?: boolean
    createdAt?: boolean
  }

  export type LiveGameEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "type" | "payload" | "reversed" | "createdAt", ExtArgs["result"]["liveGameEvent"]>

  export type $LiveGameEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LiveGameEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      type: string
      payload: Prisma.JsonValue
      reversed: boolean
      createdAt: Date
    }, ExtArgs["result"]["liveGameEvent"]>
    composites: {}
  }

  type LiveGameEventGetPayload<S extends boolean | null | undefined | LiveGameEventDefaultArgs> = $Result.GetResult<Prisma.$LiveGameEventPayload, S>

  type LiveGameEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LiveGameEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LiveGameEventCountAggregateInputType | true
    }

  export interface LiveGameEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LiveGameEvent'], meta: { name: 'LiveGameEvent' } }
    /**
     * Find zero or one LiveGameEvent that matches the filter.
     * @param {LiveGameEventFindUniqueArgs} args - Arguments to find a LiveGameEvent
     * @example
     * // Get one LiveGameEvent
     * const liveGameEvent = await prisma.liveGameEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiveGameEventFindUniqueArgs>(args: SelectSubset<T, LiveGameEventFindUniqueArgs<ExtArgs>>): Prisma__LiveGameEventClient<$Result.GetResult<Prisma.$LiveGameEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LiveGameEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LiveGameEventFindUniqueOrThrowArgs} args - Arguments to find a LiveGameEvent
     * @example
     * // Get one LiveGameEvent
     * const liveGameEvent = await prisma.liveGameEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiveGameEventFindUniqueOrThrowArgs>(args: SelectSubset<T, LiveGameEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LiveGameEventClient<$Result.GetResult<Prisma.$LiveGameEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveGameEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveGameEventFindFirstArgs} args - Arguments to find a LiveGameEvent
     * @example
     * // Get one LiveGameEvent
     * const liveGameEvent = await prisma.liveGameEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiveGameEventFindFirstArgs>(args?: SelectSubset<T, LiveGameEventFindFirstArgs<ExtArgs>>): Prisma__LiveGameEventClient<$Result.GetResult<Prisma.$LiveGameEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveGameEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveGameEventFindFirstOrThrowArgs} args - Arguments to find a LiveGameEvent
     * @example
     * // Get one LiveGameEvent
     * const liveGameEvent = await prisma.liveGameEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiveGameEventFindFirstOrThrowArgs>(args?: SelectSubset<T, LiveGameEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__LiveGameEventClient<$Result.GetResult<Prisma.$LiveGameEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LiveGameEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveGameEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LiveGameEvents
     * const liveGameEvents = await prisma.liveGameEvent.findMany()
     * 
     * // Get first 10 LiveGameEvents
     * const liveGameEvents = await prisma.liveGameEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liveGameEventWithIdOnly = await prisma.liveGameEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LiveGameEventFindManyArgs>(args?: SelectSubset<T, LiveGameEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveGameEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LiveGameEvent.
     * @param {LiveGameEventCreateArgs} args - Arguments to create a LiveGameEvent.
     * @example
     * // Create one LiveGameEvent
     * const LiveGameEvent = await prisma.liveGameEvent.create({
     *   data: {
     *     // ... data to create a LiveGameEvent
     *   }
     * })
     * 
     */
    create<T extends LiveGameEventCreateArgs>(args: SelectSubset<T, LiveGameEventCreateArgs<ExtArgs>>): Prisma__LiveGameEventClient<$Result.GetResult<Prisma.$LiveGameEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LiveGameEvents.
     * @param {LiveGameEventCreateManyArgs} args - Arguments to create many LiveGameEvents.
     * @example
     * // Create many LiveGameEvents
     * const liveGameEvent = await prisma.liveGameEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LiveGameEventCreateManyArgs>(args?: SelectSubset<T, LiveGameEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LiveGameEvent.
     * @param {LiveGameEventDeleteArgs} args - Arguments to delete one LiveGameEvent.
     * @example
     * // Delete one LiveGameEvent
     * const LiveGameEvent = await prisma.liveGameEvent.delete({
     *   where: {
     *     // ... filter to delete one LiveGameEvent
     *   }
     * })
     * 
     */
    delete<T extends LiveGameEventDeleteArgs>(args: SelectSubset<T, LiveGameEventDeleteArgs<ExtArgs>>): Prisma__LiveGameEventClient<$Result.GetResult<Prisma.$LiveGameEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LiveGameEvent.
     * @param {LiveGameEventUpdateArgs} args - Arguments to update one LiveGameEvent.
     * @example
     * // Update one LiveGameEvent
     * const liveGameEvent = await prisma.liveGameEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LiveGameEventUpdateArgs>(args: SelectSubset<T, LiveGameEventUpdateArgs<ExtArgs>>): Prisma__LiveGameEventClient<$Result.GetResult<Prisma.$LiveGameEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LiveGameEvents.
     * @param {LiveGameEventDeleteManyArgs} args - Arguments to filter LiveGameEvents to delete.
     * @example
     * // Delete a few LiveGameEvents
     * const { count } = await prisma.liveGameEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LiveGameEventDeleteManyArgs>(args?: SelectSubset<T, LiveGameEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiveGameEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveGameEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LiveGameEvents
     * const liveGameEvent = await prisma.liveGameEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LiveGameEventUpdateManyArgs>(args: SelectSubset<T, LiveGameEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LiveGameEvent.
     * @param {LiveGameEventUpsertArgs} args - Arguments to update or create a LiveGameEvent.
     * @example
     * // Update or create a LiveGameEvent
     * const liveGameEvent = await prisma.liveGameEvent.upsert({
     *   create: {
     *     // ... data to create a LiveGameEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LiveGameEvent we want to update
     *   }
     * })
     */
    upsert<T extends LiveGameEventUpsertArgs>(args: SelectSubset<T, LiveGameEventUpsertArgs<ExtArgs>>): Prisma__LiveGameEventClient<$Result.GetResult<Prisma.$LiveGameEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LiveGameEvents that matches the filter.
     * @param {LiveGameEventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const liveGameEvent = await prisma.liveGameEvent.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LiveGameEventFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LiveGameEvent.
     * @param {LiveGameEventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const liveGameEvent = await prisma.liveGameEvent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LiveGameEventAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of LiveGameEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveGameEventCountArgs} args - Arguments to filter LiveGameEvents to count.
     * @example
     * // Count the number of LiveGameEvents
     * const count = await prisma.liveGameEvent.count({
     *   where: {
     *     // ... the filter for the LiveGameEvents we want to count
     *   }
     * })
    **/
    count<T extends LiveGameEventCountArgs>(
      args?: Subset<T, LiveGameEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiveGameEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LiveGameEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveGameEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LiveGameEventAggregateArgs>(args: Subset<T, LiveGameEventAggregateArgs>): Prisma.PrismaPromise<GetLiveGameEventAggregateType<T>>

    /**
     * Group by LiveGameEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveGameEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LiveGameEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiveGameEventGroupByArgs['orderBy'] }
        : { orderBy?: LiveGameEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LiveGameEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiveGameEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LiveGameEvent model
   */
  readonly fields: LiveGameEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LiveGameEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiveGameEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LiveGameEvent model
   */
  interface LiveGameEventFieldRefs {
    readonly id: FieldRef<"LiveGameEvent", 'String'>
    readonly gameId: FieldRef<"LiveGameEvent", 'String'>
    readonly type: FieldRef<"LiveGameEvent", 'String'>
    readonly payload: FieldRef<"LiveGameEvent", 'Json'>
    readonly reversed: FieldRef<"LiveGameEvent", 'Boolean'>
    readonly createdAt: FieldRef<"LiveGameEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LiveGameEvent findUnique
   */
  export type LiveGameEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGameEvent
     */
    select?: LiveGameEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGameEvent
     */
    omit?: LiveGameEventOmit<ExtArgs> | null
    /**
     * Filter, which LiveGameEvent to fetch.
     */
    where: LiveGameEventWhereUniqueInput
  }

  /**
   * LiveGameEvent findUniqueOrThrow
   */
  export type LiveGameEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGameEvent
     */
    select?: LiveGameEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGameEvent
     */
    omit?: LiveGameEventOmit<ExtArgs> | null
    /**
     * Filter, which LiveGameEvent to fetch.
     */
    where: LiveGameEventWhereUniqueInput
  }

  /**
   * LiveGameEvent findFirst
   */
  export type LiveGameEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGameEvent
     */
    select?: LiveGameEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGameEvent
     */
    omit?: LiveGameEventOmit<ExtArgs> | null
    /**
     * Filter, which LiveGameEvent to fetch.
     */
    where?: LiveGameEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveGameEvents to fetch.
     */
    orderBy?: LiveGameEventOrderByWithRelationInput | LiveGameEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveGameEvents.
     */
    cursor?: LiveGameEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveGameEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveGameEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveGameEvents.
     */
    distinct?: LiveGameEventScalarFieldEnum | LiveGameEventScalarFieldEnum[]
  }

  /**
   * LiveGameEvent findFirstOrThrow
   */
  export type LiveGameEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGameEvent
     */
    select?: LiveGameEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGameEvent
     */
    omit?: LiveGameEventOmit<ExtArgs> | null
    /**
     * Filter, which LiveGameEvent to fetch.
     */
    where?: LiveGameEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveGameEvents to fetch.
     */
    orderBy?: LiveGameEventOrderByWithRelationInput | LiveGameEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveGameEvents.
     */
    cursor?: LiveGameEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveGameEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveGameEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveGameEvents.
     */
    distinct?: LiveGameEventScalarFieldEnum | LiveGameEventScalarFieldEnum[]
  }

  /**
   * LiveGameEvent findMany
   */
  export type LiveGameEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGameEvent
     */
    select?: LiveGameEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGameEvent
     */
    omit?: LiveGameEventOmit<ExtArgs> | null
    /**
     * Filter, which LiveGameEvents to fetch.
     */
    where?: LiveGameEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveGameEvents to fetch.
     */
    orderBy?: LiveGameEventOrderByWithRelationInput | LiveGameEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LiveGameEvents.
     */
    cursor?: LiveGameEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveGameEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveGameEvents.
     */
    skip?: number
    distinct?: LiveGameEventScalarFieldEnum | LiveGameEventScalarFieldEnum[]
  }

  /**
   * LiveGameEvent create
   */
  export type LiveGameEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGameEvent
     */
    select?: LiveGameEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGameEvent
     */
    omit?: LiveGameEventOmit<ExtArgs> | null
    /**
     * The data needed to create a LiveGameEvent.
     */
    data: XOR<LiveGameEventCreateInput, LiveGameEventUncheckedCreateInput>
  }

  /**
   * LiveGameEvent createMany
   */
  export type LiveGameEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LiveGameEvents.
     */
    data: LiveGameEventCreateManyInput | LiveGameEventCreateManyInput[]
  }

  /**
   * LiveGameEvent update
   */
  export type LiveGameEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGameEvent
     */
    select?: LiveGameEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGameEvent
     */
    omit?: LiveGameEventOmit<ExtArgs> | null
    /**
     * The data needed to update a LiveGameEvent.
     */
    data: XOR<LiveGameEventUpdateInput, LiveGameEventUncheckedUpdateInput>
    /**
     * Choose, which LiveGameEvent to update.
     */
    where: LiveGameEventWhereUniqueInput
  }

  /**
   * LiveGameEvent updateMany
   */
  export type LiveGameEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LiveGameEvents.
     */
    data: XOR<LiveGameEventUpdateManyMutationInput, LiveGameEventUncheckedUpdateManyInput>
    /**
     * Filter which LiveGameEvents to update
     */
    where?: LiveGameEventWhereInput
    /**
     * Limit how many LiveGameEvents to update.
     */
    limit?: number
  }

  /**
   * LiveGameEvent upsert
   */
  export type LiveGameEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGameEvent
     */
    select?: LiveGameEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGameEvent
     */
    omit?: LiveGameEventOmit<ExtArgs> | null
    /**
     * The filter to search for the LiveGameEvent to update in case it exists.
     */
    where: LiveGameEventWhereUniqueInput
    /**
     * In case the LiveGameEvent found by the `where` argument doesn't exist, create a new LiveGameEvent with this data.
     */
    create: XOR<LiveGameEventCreateInput, LiveGameEventUncheckedCreateInput>
    /**
     * In case the LiveGameEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiveGameEventUpdateInput, LiveGameEventUncheckedUpdateInput>
  }

  /**
   * LiveGameEvent delete
   */
  export type LiveGameEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGameEvent
     */
    select?: LiveGameEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGameEvent
     */
    omit?: LiveGameEventOmit<ExtArgs> | null
    /**
     * Filter which LiveGameEvent to delete.
     */
    where: LiveGameEventWhereUniqueInput
  }

  /**
   * LiveGameEvent deleteMany
   */
  export type LiveGameEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveGameEvents to delete
     */
    where?: LiveGameEventWhereInput
    /**
     * Limit how many LiveGameEvents to delete.
     */
    limit?: number
  }

  /**
   * LiveGameEvent findRaw
   */
  export type LiveGameEventFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LiveGameEvent aggregateRaw
   */
  export type LiveGameEventAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LiveGameEvent without action
   */
  export type LiveGameEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveGameEvent
     */
    select?: LiveGameEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveGameEvent
     */
    omit?: LiveGameEventOmit<ExtArgs> | null
  }


  /**
   * Model StandingRow
   */

  export type AggregateStandingRow = {
    _count: StandingRowCountAggregateOutputType | null
    _avg: StandingRowAvgAggregateOutputType | null
    _sum: StandingRowSumAggregateOutputType | null
    _min: StandingRowMinAggregateOutputType | null
    _max: StandingRowMaxAggregateOutputType | null
  }

  export type StandingRowAvgAggregateOutputType = {
    wins: number | null
    losses: number | null
    sortOrder: number | null
  }

  export type StandingRowSumAggregateOutputType = {
    wins: number | null
    losses: number | null
    sortOrder: number | null
  }

  export type StandingRowMinAggregateOutputType = {
    id: string | null
    teamName: string | null
    teamShort: string | null
    teamLogo: string | null
    wins: number | null
    losses: number | null
    sortOrder: number | null
    isCurrent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StandingRowMaxAggregateOutputType = {
    id: string | null
    teamName: string | null
    teamShort: string | null
    teamLogo: string | null
    wins: number | null
    losses: number | null
    sortOrder: number | null
    isCurrent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StandingRowCountAggregateOutputType = {
    id: number
    teamName: number
    teamShort: number
    teamLogo: number
    wins: number
    losses: number
    sortOrder: number
    isCurrent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StandingRowAvgAggregateInputType = {
    wins?: true
    losses?: true
    sortOrder?: true
  }

  export type StandingRowSumAggregateInputType = {
    wins?: true
    losses?: true
    sortOrder?: true
  }

  export type StandingRowMinAggregateInputType = {
    id?: true
    teamName?: true
    teamShort?: true
    teamLogo?: true
    wins?: true
    losses?: true
    sortOrder?: true
    isCurrent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StandingRowMaxAggregateInputType = {
    id?: true
    teamName?: true
    teamShort?: true
    teamLogo?: true
    wins?: true
    losses?: true
    sortOrder?: true
    isCurrent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StandingRowCountAggregateInputType = {
    id?: true
    teamName?: true
    teamShort?: true
    teamLogo?: true
    wins?: true
    losses?: true
    sortOrder?: true
    isCurrent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StandingRowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StandingRow to aggregate.
     */
    where?: StandingRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StandingRows to fetch.
     */
    orderBy?: StandingRowOrderByWithRelationInput | StandingRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StandingRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StandingRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StandingRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StandingRows
    **/
    _count?: true | StandingRowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StandingRowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StandingRowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StandingRowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StandingRowMaxAggregateInputType
  }

  export type GetStandingRowAggregateType<T extends StandingRowAggregateArgs> = {
        [P in keyof T & keyof AggregateStandingRow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStandingRow[P]>
      : GetScalarType<T[P], AggregateStandingRow[P]>
  }




  export type StandingRowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StandingRowWhereInput
    orderBy?: StandingRowOrderByWithAggregationInput | StandingRowOrderByWithAggregationInput[]
    by: StandingRowScalarFieldEnum[] | StandingRowScalarFieldEnum
    having?: StandingRowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StandingRowCountAggregateInputType | true
    _avg?: StandingRowAvgAggregateInputType
    _sum?: StandingRowSumAggregateInputType
    _min?: StandingRowMinAggregateInputType
    _max?: StandingRowMaxAggregateInputType
  }

  export type StandingRowGroupByOutputType = {
    id: string
    teamName: string
    teamShort: string | null
    teamLogo: string | null
    wins: number
    losses: number
    sortOrder: number
    isCurrent: boolean
    createdAt: Date
    updatedAt: Date
    _count: StandingRowCountAggregateOutputType | null
    _avg: StandingRowAvgAggregateOutputType | null
    _sum: StandingRowSumAggregateOutputType | null
    _min: StandingRowMinAggregateOutputType | null
    _max: StandingRowMaxAggregateOutputType | null
  }

  type GetStandingRowGroupByPayload<T extends StandingRowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StandingRowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StandingRowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StandingRowGroupByOutputType[P]>
            : GetScalarType<T[P], StandingRowGroupByOutputType[P]>
        }
      >
    >


  export type StandingRowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    teamShort?: boolean
    teamLogo?: boolean
    wins?: boolean
    losses?: boolean
    sortOrder?: boolean
    isCurrent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["standingRow"]>



  export type StandingRowSelectScalar = {
    id?: boolean
    teamName?: boolean
    teamShort?: boolean
    teamLogo?: boolean
    wins?: boolean
    losses?: boolean
    sortOrder?: boolean
    isCurrent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StandingRowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamName" | "teamShort" | "teamLogo" | "wins" | "losses" | "sortOrder" | "isCurrent" | "createdAt" | "updatedAt", ExtArgs["result"]["standingRow"]>

  export type $StandingRowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StandingRow"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamName: string
      teamShort: string | null
      teamLogo: string | null
      wins: number
      losses: number
      sortOrder: number
      isCurrent: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["standingRow"]>
    composites: {}
  }

  type StandingRowGetPayload<S extends boolean | null | undefined | StandingRowDefaultArgs> = $Result.GetResult<Prisma.$StandingRowPayload, S>

  type StandingRowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StandingRowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StandingRowCountAggregateInputType | true
    }

  export interface StandingRowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StandingRow'], meta: { name: 'StandingRow' } }
    /**
     * Find zero or one StandingRow that matches the filter.
     * @param {StandingRowFindUniqueArgs} args - Arguments to find a StandingRow
     * @example
     * // Get one StandingRow
     * const standingRow = await prisma.standingRow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StandingRowFindUniqueArgs>(args: SelectSubset<T, StandingRowFindUniqueArgs<ExtArgs>>): Prisma__StandingRowClient<$Result.GetResult<Prisma.$StandingRowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StandingRow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StandingRowFindUniqueOrThrowArgs} args - Arguments to find a StandingRow
     * @example
     * // Get one StandingRow
     * const standingRow = await prisma.standingRow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StandingRowFindUniqueOrThrowArgs>(args: SelectSubset<T, StandingRowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StandingRowClient<$Result.GetResult<Prisma.$StandingRowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StandingRow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandingRowFindFirstArgs} args - Arguments to find a StandingRow
     * @example
     * // Get one StandingRow
     * const standingRow = await prisma.standingRow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StandingRowFindFirstArgs>(args?: SelectSubset<T, StandingRowFindFirstArgs<ExtArgs>>): Prisma__StandingRowClient<$Result.GetResult<Prisma.$StandingRowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StandingRow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandingRowFindFirstOrThrowArgs} args - Arguments to find a StandingRow
     * @example
     * // Get one StandingRow
     * const standingRow = await prisma.standingRow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StandingRowFindFirstOrThrowArgs>(args?: SelectSubset<T, StandingRowFindFirstOrThrowArgs<ExtArgs>>): Prisma__StandingRowClient<$Result.GetResult<Prisma.$StandingRowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StandingRows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandingRowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StandingRows
     * const standingRows = await prisma.standingRow.findMany()
     * 
     * // Get first 10 StandingRows
     * const standingRows = await prisma.standingRow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const standingRowWithIdOnly = await prisma.standingRow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StandingRowFindManyArgs>(args?: SelectSubset<T, StandingRowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandingRowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StandingRow.
     * @param {StandingRowCreateArgs} args - Arguments to create a StandingRow.
     * @example
     * // Create one StandingRow
     * const StandingRow = await prisma.standingRow.create({
     *   data: {
     *     // ... data to create a StandingRow
     *   }
     * })
     * 
     */
    create<T extends StandingRowCreateArgs>(args: SelectSubset<T, StandingRowCreateArgs<ExtArgs>>): Prisma__StandingRowClient<$Result.GetResult<Prisma.$StandingRowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StandingRows.
     * @param {StandingRowCreateManyArgs} args - Arguments to create many StandingRows.
     * @example
     * // Create many StandingRows
     * const standingRow = await prisma.standingRow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StandingRowCreateManyArgs>(args?: SelectSubset<T, StandingRowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StandingRow.
     * @param {StandingRowDeleteArgs} args - Arguments to delete one StandingRow.
     * @example
     * // Delete one StandingRow
     * const StandingRow = await prisma.standingRow.delete({
     *   where: {
     *     // ... filter to delete one StandingRow
     *   }
     * })
     * 
     */
    delete<T extends StandingRowDeleteArgs>(args: SelectSubset<T, StandingRowDeleteArgs<ExtArgs>>): Prisma__StandingRowClient<$Result.GetResult<Prisma.$StandingRowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StandingRow.
     * @param {StandingRowUpdateArgs} args - Arguments to update one StandingRow.
     * @example
     * // Update one StandingRow
     * const standingRow = await prisma.standingRow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StandingRowUpdateArgs>(args: SelectSubset<T, StandingRowUpdateArgs<ExtArgs>>): Prisma__StandingRowClient<$Result.GetResult<Prisma.$StandingRowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StandingRows.
     * @param {StandingRowDeleteManyArgs} args - Arguments to filter StandingRows to delete.
     * @example
     * // Delete a few StandingRows
     * const { count } = await prisma.standingRow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StandingRowDeleteManyArgs>(args?: SelectSubset<T, StandingRowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StandingRows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandingRowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StandingRows
     * const standingRow = await prisma.standingRow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StandingRowUpdateManyArgs>(args: SelectSubset<T, StandingRowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StandingRow.
     * @param {StandingRowUpsertArgs} args - Arguments to update or create a StandingRow.
     * @example
     * // Update or create a StandingRow
     * const standingRow = await prisma.standingRow.upsert({
     *   create: {
     *     // ... data to create a StandingRow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StandingRow we want to update
     *   }
     * })
     */
    upsert<T extends StandingRowUpsertArgs>(args: SelectSubset<T, StandingRowUpsertArgs<ExtArgs>>): Prisma__StandingRowClient<$Result.GetResult<Prisma.$StandingRowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StandingRows that matches the filter.
     * @param {StandingRowFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const standingRow = await prisma.standingRow.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StandingRowFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a StandingRow.
     * @param {StandingRowAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const standingRow = await prisma.standingRow.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StandingRowAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of StandingRows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandingRowCountArgs} args - Arguments to filter StandingRows to count.
     * @example
     * // Count the number of StandingRows
     * const count = await prisma.standingRow.count({
     *   where: {
     *     // ... the filter for the StandingRows we want to count
     *   }
     * })
    **/
    count<T extends StandingRowCountArgs>(
      args?: Subset<T, StandingRowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StandingRowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StandingRow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandingRowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StandingRowAggregateArgs>(args: Subset<T, StandingRowAggregateArgs>): Prisma.PrismaPromise<GetStandingRowAggregateType<T>>

    /**
     * Group by StandingRow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandingRowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StandingRowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StandingRowGroupByArgs['orderBy'] }
        : { orderBy?: StandingRowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StandingRowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStandingRowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StandingRow model
   */
  readonly fields: StandingRowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StandingRow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StandingRowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StandingRow model
   */
  interface StandingRowFieldRefs {
    readonly id: FieldRef<"StandingRow", 'String'>
    readonly teamName: FieldRef<"StandingRow", 'String'>
    readonly teamShort: FieldRef<"StandingRow", 'String'>
    readonly teamLogo: FieldRef<"StandingRow", 'String'>
    readonly wins: FieldRef<"StandingRow", 'Int'>
    readonly losses: FieldRef<"StandingRow", 'Int'>
    readonly sortOrder: FieldRef<"StandingRow", 'Int'>
    readonly isCurrent: FieldRef<"StandingRow", 'Boolean'>
    readonly createdAt: FieldRef<"StandingRow", 'DateTime'>
    readonly updatedAt: FieldRef<"StandingRow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StandingRow findUnique
   */
  export type StandingRowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandingRow
     */
    select?: StandingRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandingRow
     */
    omit?: StandingRowOmit<ExtArgs> | null
    /**
     * Filter, which StandingRow to fetch.
     */
    where: StandingRowWhereUniqueInput
  }

  /**
   * StandingRow findUniqueOrThrow
   */
  export type StandingRowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandingRow
     */
    select?: StandingRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandingRow
     */
    omit?: StandingRowOmit<ExtArgs> | null
    /**
     * Filter, which StandingRow to fetch.
     */
    where: StandingRowWhereUniqueInput
  }

  /**
   * StandingRow findFirst
   */
  export type StandingRowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandingRow
     */
    select?: StandingRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandingRow
     */
    omit?: StandingRowOmit<ExtArgs> | null
    /**
     * Filter, which StandingRow to fetch.
     */
    where?: StandingRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StandingRows to fetch.
     */
    orderBy?: StandingRowOrderByWithRelationInput | StandingRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StandingRows.
     */
    cursor?: StandingRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StandingRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StandingRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StandingRows.
     */
    distinct?: StandingRowScalarFieldEnum | StandingRowScalarFieldEnum[]
  }

  /**
   * StandingRow findFirstOrThrow
   */
  export type StandingRowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandingRow
     */
    select?: StandingRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandingRow
     */
    omit?: StandingRowOmit<ExtArgs> | null
    /**
     * Filter, which StandingRow to fetch.
     */
    where?: StandingRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StandingRows to fetch.
     */
    orderBy?: StandingRowOrderByWithRelationInput | StandingRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StandingRows.
     */
    cursor?: StandingRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StandingRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StandingRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StandingRows.
     */
    distinct?: StandingRowScalarFieldEnum | StandingRowScalarFieldEnum[]
  }

  /**
   * StandingRow findMany
   */
  export type StandingRowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandingRow
     */
    select?: StandingRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandingRow
     */
    omit?: StandingRowOmit<ExtArgs> | null
    /**
     * Filter, which StandingRows to fetch.
     */
    where?: StandingRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StandingRows to fetch.
     */
    orderBy?: StandingRowOrderByWithRelationInput | StandingRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StandingRows.
     */
    cursor?: StandingRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StandingRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StandingRows.
     */
    skip?: number
    distinct?: StandingRowScalarFieldEnum | StandingRowScalarFieldEnum[]
  }

  /**
   * StandingRow create
   */
  export type StandingRowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandingRow
     */
    select?: StandingRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandingRow
     */
    omit?: StandingRowOmit<ExtArgs> | null
    /**
     * The data needed to create a StandingRow.
     */
    data: XOR<StandingRowCreateInput, StandingRowUncheckedCreateInput>
  }

  /**
   * StandingRow createMany
   */
  export type StandingRowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StandingRows.
     */
    data: StandingRowCreateManyInput | StandingRowCreateManyInput[]
  }

  /**
   * StandingRow update
   */
  export type StandingRowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandingRow
     */
    select?: StandingRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandingRow
     */
    omit?: StandingRowOmit<ExtArgs> | null
    /**
     * The data needed to update a StandingRow.
     */
    data: XOR<StandingRowUpdateInput, StandingRowUncheckedUpdateInput>
    /**
     * Choose, which StandingRow to update.
     */
    where: StandingRowWhereUniqueInput
  }

  /**
   * StandingRow updateMany
   */
  export type StandingRowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StandingRows.
     */
    data: XOR<StandingRowUpdateManyMutationInput, StandingRowUncheckedUpdateManyInput>
    /**
     * Filter which StandingRows to update
     */
    where?: StandingRowWhereInput
    /**
     * Limit how many StandingRows to update.
     */
    limit?: number
  }

  /**
   * StandingRow upsert
   */
  export type StandingRowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandingRow
     */
    select?: StandingRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandingRow
     */
    omit?: StandingRowOmit<ExtArgs> | null
    /**
     * The filter to search for the StandingRow to update in case it exists.
     */
    where: StandingRowWhereUniqueInput
    /**
     * In case the StandingRow found by the `where` argument doesn't exist, create a new StandingRow with this data.
     */
    create: XOR<StandingRowCreateInput, StandingRowUncheckedCreateInput>
    /**
     * In case the StandingRow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StandingRowUpdateInput, StandingRowUncheckedUpdateInput>
  }

  /**
   * StandingRow delete
   */
  export type StandingRowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandingRow
     */
    select?: StandingRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandingRow
     */
    omit?: StandingRowOmit<ExtArgs> | null
    /**
     * Filter which StandingRow to delete.
     */
    where: StandingRowWhereUniqueInput
  }

  /**
   * StandingRow deleteMany
   */
  export type StandingRowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StandingRows to delete
     */
    where?: StandingRowWhereInput
    /**
     * Limit how many StandingRows to delete.
     */
    limit?: number
  }

  /**
   * StandingRow findRaw
   */
  export type StandingRowFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * StandingRow aggregateRaw
   */
  export type StandingRowAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * StandingRow without action
   */
  export type StandingRowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandingRow
     */
    select?: StandingRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandingRow
     */
    omit?: StandingRowOmit<ExtArgs> | null
  }


  /**
   * Model Partner
   */

  export type AggregatePartner = {
    _count: PartnerCountAggregateOutputType | null
    _avg: PartnerAvgAggregateOutputType | null
    _sum: PartnerSumAggregateOutputType | null
    _min: PartnerMinAggregateOutputType | null
    _max: PartnerMaxAggregateOutputType | null
  }

  export type PartnerAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type PartnerSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type PartnerMinAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    url: string | null
    sortOrder: number | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    url: string | null
    sortOrder: number | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerCountAggregateOutputType = {
    id: number
    name: number
    logo: number
    url: number
    sortOrder: number
    isVisible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartnerAvgAggregateInputType = {
    sortOrder?: true
  }

  export type PartnerSumAggregateInputType = {
    sortOrder?: true
  }

  export type PartnerMinAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    url?: true
    sortOrder?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerMaxAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    url?: true
    sortOrder?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerCountAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    url?: true
    sortOrder?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partner to aggregate.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Partners
    **/
    _count?: true | PartnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerMaxAggregateInputType
  }

  export type GetPartnerAggregateType<T extends PartnerAggregateArgs> = {
        [P in keyof T & keyof AggregatePartner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartner[P]>
      : GetScalarType<T[P], AggregatePartner[P]>
  }




  export type PartnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerWhereInput
    orderBy?: PartnerOrderByWithAggregationInput | PartnerOrderByWithAggregationInput[]
    by: PartnerScalarFieldEnum[] | PartnerScalarFieldEnum
    having?: PartnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerCountAggregateInputType | true
    _avg?: PartnerAvgAggregateInputType
    _sum?: PartnerSumAggregateInputType
    _min?: PartnerMinAggregateInputType
    _max?: PartnerMaxAggregateInputType
  }

  export type PartnerGroupByOutputType = {
    id: string
    name: string
    logo: string | null
    url: string | null
    sortOrder: number
    isVisible: boolean
    createdAt: Date
    updatedAt: Date
    _count: PartnerCountAggregateOutputType | null
    _avg: PartnerAvgAggregateOutputType | null
    _sum: PartnerSumAggregateOutputType | null
    _min: PartnerMinAggregateOutputType | null
    _max: PartnerMaxAggregateOutputType | null
  }

  type GetPartnerGroupByPayload<T extends PartnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerGroupByOutputType[P]>
        }
      >
    >


  export type PartnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    url?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["partner"]>



  export type PartnerSelectScalar = {
    id?: boolean
    name?: boolean
    logo?: boolean
    url?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo" | "url" | "sortOrder" | "isVisible" | "createdAt" | "updatedAt", ExtArgs["result"]["partner"]>

  export type $PartnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      logo: string | null
      url: string | null
      sortOrder: number
      isVisible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partner"]>
    composites: {}
  }

  type PartnerGetPayload<S extends boolean | null | undefined | PartnerDefaultArgs> = $Result.GetResult<Prisma.$PartnerPayload, S>

  type PartnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartnerCountAggregateInputType | true
    }

  export interface PartnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partner'], meta: { name: 'Partner' } }
    /**
     * Find zero or one Partner that matches the filter.
     * @param {PartnerFindUniqueArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerFindUniqueArgs>(args: SelectSubset<T, PartnerFindUniqueArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Partner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartnerFindUniqueOrThrowArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindFirstArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerFindFirstArgs>(args?: SelectSubset<T, PartnerFindFirstArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindFirstOrThrowArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partners
     * const partners = await prisma.partner.findMany()
     * 
     * // Get first 10 Partners
     * const partners = await prisma.partner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnerWithIdOnly = await prisma.partner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnerFindManyArgs>(args?: SelectSubset<T, PartnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Partner.
     * @param {PartnerCreateArgs} args - Arguments to create a Partner.
     * @example
     * // Create one Partner
     * const Partner = await prisma.partner.create({
     *   data: {
     *     // ... data to create a Partner
     *   }
     * })
     * 
     */
    create<T extends PartnerCreateArgs>(args: SelectSubset<T, PartnerCreateArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Partners.
     * @param {PartnerCreateManyArgs} args - Arguments to create many Partners.
     * @example
     * // Create many Partners
     * const partner = await prisma.partner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnerCreateManyArgs>(args?: SelectSubset<T, PartnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Partner.
     * @param {PartnerDeleteArgs} args - Arguments to delete one Partner.
     * @example
     * // Delete one Partner
     * const Partner = await prisma.partner.delete({
     *   where: {
     *     // ... filter to delete one Partner
     *   }
     * })
     * 
     */
    delete<T extends PartnerDeleteArgs>(args: SelectSubset<T, PartnerDeleteArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Partner.
     * @param {PartnerUpdateArgs} args - Arguments to update one Partner.
     * @example
     * // Update one Partner
     * const partner = await prisma.partner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnerUpdateArgs>(args: SelectSubset<T, PartnerUpdateArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Partners.
     * @param {PartnerDeleteManyArgs} args - Arguments to filter Partners to delete.
     * @example
     * // Delete a few Partners
     * const { count } = await prisma.partner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnerDeleteManyArgs>(args?: SelectSubset<T, PartnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partners
     * const partner = await prisma.partner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnerUpdateManyArgs>(args: SelectSubset<T, PartnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Partner.
     * @param {PartnerUpsertArgs} args - Arguments to update or create a Partner.
     * @example
     * // Update or create a Partner
     * const partner = await prisma.partner.upsert({
     *   create: {
     *     // ... data to create a Partner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partner we want to update
     *   }
     * })
     */
    upsert<T extends PartnerUpsertArgs>(args: SelectSubset<T, PartnerUpsertArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Partners that matches the filter.
     * @param {PartnerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const partner = await prisma.partner.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PartnerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Partner.
     * @param {PartnerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const partner = await prisma.partner.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PartnerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerCountArgs} args - Arguments to filter Partners to count.
     * @example
     * // Count the number of Partners
     * const count = await prisma.partner.count({
     *   where: {
     *     // ... the filter for the Partners we want to count
     *   }
     * })
    **/
    count<T extends PartnerCountArgs>(
      args?: Subset<T, PartnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnerAggregateArgs>(args: Subset<T, PartnerAggregateArgs>): Prisma.PrismaPromise<GetPartnerAggregateType<T>>

    /**
     * Group by Partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerGroupByArgs['orderBy'] }
        : { orderBy?: PartnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partner model
   */
  readonly fields: PartnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Partner model
   */
  interface PartnerFieldRefs {
    readonly id: FieldRef<"Partner", 'String'>
    readonly name: FieldRef<"Partner", 'String'>
    readonly logo: FieldRef<"Partner", 'String'>
    readonly url: FieldRef<"Partner", 'String'>
    readonly sortOrder: FieldRef<"Partner", 'Int'>
    readonly isVisible: FieldRef<"Partner", 'Boolean'>
    readonly createdAt: FieldRef<"Partner", 'DateTime'>
    readonly updatedAt: FieldRef<"Partner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Partner findUnique
   */
  export type PartnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner findUniqueOrThrow
   */
  export type PartnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner findFirst
   */
  export type PartnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner findFirstOrThrow
   */
  export type PartnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner findMany
   */
  export type PartnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Filter, which Partners to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner create
   */
  export type PartnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * The data needed to create a Partner.
     */
    data: XOR<PartnerCreateInput, PartnerUncheckedCreateInput>
  }

  /**
   * Partner createMany
   */
  export type PartnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Partners.
     */
    data: PartnerCreateManyInput | PartnerCreateManyInput[]
  }

  /**
   * Partner update
   */
  export type PartnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * The data needed to update a Partner.
     */
    data: XOR<PartnerUpdateInput, PartnerUncheckedUpdateInput>
    /**
     * Choose, which Partner to update.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner updateMany
   */
  export type PartnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Partners.
     */
    data: XOR<PartnerUpdateManyMutationInput, PartnerUncheckedUpdateManyInput>
    /**
     * Filter which Partners to update
     */
    where?: PartnerWhereInput
    /**
     * Limit how many Partners to update.
     */
    limit?: number
  }

  /**
   * Partner upsert
   */
  export type PartnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * The filter to search for the Partner to update in case it exists.
     */
    where: PartnerWhereUniqueInput
    /**
     * In case the Partner found by the `where` argument doesn't exist, create a new Partner with this data.
     */
    create: XOR<PartnerCreateInput, PartnerUncheckedCreateInput>
    /**
     * In case the Partner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerUpdateInput, PartnerUncheckedUpdateInput>
  }

  /**
   * Partner delete
   */
  export type PartnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Filter which Partner to delete.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner deleteMany
   */
  export type PartnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partners to delete
     */
    where?: PartnerWhereInput
    /**
     * Limit how many Partners to delete.
     */
    limit?: number
  }

  /**
   * Partner findRaw
   */
  export type PartnerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Partner aggregateRaw
   */
  export type PartnerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Partner without action
   */
  export type PartnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
  }


  /**
   * Model MediaAlbum
   */

  export type AggregateMediaAlbum = {
    _count: MediaAlbumCountAggregateOutputType | null
    _avg: MediaAlbumAvgAggregateOutputType | null
    _sum: MediaAlbumSumAggregateOutputType | null
    _min: MediaAlbumMinAggregateOutputType | null
    _max: MediaAlbumMaxAggregateOutputType | null
  }

  export type MediaAlbumAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type MediaAlbumSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type MediaAlbumMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    category: string | null
    coverImage: string | null
    eventDate: Date | null
    sortOrder: number | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaAlbumMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    category: string | null
    coverImage: string | null
    eventDate: Date | null
    sortOrder: number | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaAlbumCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    category: number
    coverImage: number
    images: number
    eventDate: number
    sortOrder: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MediaAlbumAvgAggregateInputType = {
    sortOrder?: true
  }

  export type MediaAlbumSumAggregateInputType = {
    sortOrder?: true
  }

  export type MediaAlbumMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    coverImage?: true
    eventDate?: true
    sortOrder?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaAlbumMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    coverImage?: true
    eventDate?: true
    sortOrder?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaAlbumCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    coverImage?: true
    images?: true
    eventDate?: true
    sortOrder?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MediaAlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaAlbum to aggregate.
     */
    where?: MediaAlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAlbums to fetch.
     */
    orderBy?: MediaAlbumOrderByWithRelationInput | MediaAlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaAlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaAlbums
    **/
    _count?: true | MediaAlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaAlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaAlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaAlbumMaxAggregateInputType
  }

  export type GetMediaAlbumAggregateType<T extends MediaAlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaAlbum[P]>
      : GetScalarType<T[P], AggregateMediaAlbum[P]>
  }




  export type MediaAlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaAlbumWhereInput
    orderBy?: MediaAlbumOrderByWithAggregationInput | MediaAlbumOrderByWithAggregationInput[]
    by: MediaAlbumScalarFieldEnum[] | MediaAlbumScalarFieldEnum
    having?: MediaAlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaAlbumCountAggregateInputType | true
    _avg?: MediaAlbumAvgAggregateInputType
    _sum?: MediaAlbumSumAggregateInputType
    _min?: MediaAlbumMinAggregateInputType
    _max?: MediaAlbumMaxAggregateInputType
  }

  export type MediaAlbumGroupByOutputType = {
    id: string
    title: string
    slug: string
    category: string
    coverImage: string | null
    images: JsonValue
    eventDate: Date | null
    sortOrder: number
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: MediaAlbumCountAggregateOutputType | null
    _avg: MediaAlbumAvgAggregateOutputType | null
    _sum: MediaAlbumSumAggregateOutputType | null
    _min: MediaAlbumMinAggregateOutputType | null
    _max: MediaAlbumMaxAggregateOutputType | null
  }

  type GetMediaAlbumGroupByPayload<T extends MediaAlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaAlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaAlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaAlbumGroupByOutputType[P]>
            : GetScalarType<T[P], MediaAlbumGroupByOutputType[P]>
        }
      >
    >


  export type MediaAlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    coverImage?: boolean
    images?: boolean
    eventDate?: boolean
    sortOrder?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mediaAlbum"]>



  export type MediaAlbumSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    coverImage?: boolean
    images?: boolean
    eventDate?: boolean
    sortOrder?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MediaAlbumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "category" | "coverImage" | "images" | "eventDate" | "sortOrder" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["mediaAlbum"]>

  export type $MediaAlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaAlbum"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      category: string
      coverImage: string | null
      images: Prisma.JsonValue
      eventDate: Date | null
      sortOrder: number
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mediaAlbum"]>
    composites: {}
  }

  type MediaAlbumGetPayload<S extends boolean | null | undefined | MediaAlbumDefaultArgs> = $Result.GetResult<Prisma.$MediaAlbumPayload, S>

  type MediaAlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaAlbumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaAlbumCountAggregateInputType | true
    }

  export interface MediaAlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaAlbum'], meta: { name: 'MediaAlbum' } }
    /**
     * Find zero or one MediaAlbum that matches the filter.
     * @param {MediaAlbumFindUniqueArgs} args - Arguments to find a MediaAlbum
     * @example
     * // Get one MediaAlbum
     * const mediaAlbum = await prisma.mediaAlbum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaAlbumFindUniqueArgs>(args: SelectSubset<T, MediaAlbumFindUniqueArgs<ExtArgs>>): Prisma__MediaAlbumClient<$Result.GetResult<Prisma.$MediaAlbumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediaAlbum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaAlbumFindUniqueOrThrowArgs} args - Arguments to find a MediaAlbum
     * @example
     * // Get one MediaAlbum
     * const mediaAlbum = await prisma.mediaAlbum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaAlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaAlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaAlbumClient<$Result.GetResult<Prisma.$MediaAlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaAlbum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAlbumFindFirstArgs} args - Arguments to find a MediaAlbum
     * @example
     * // Get one MediaAlbum
     * const mediaAlbum = await prisma.mediaAlbum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaAlbumFindFirstArgs>(args?: SelectSubset<T, MediaAlbumFindFirstArgs<ExtArgs>>): Prisma__MediaAlbumClient<$Result.GetResult<Prisma.$MediaAlbumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaAlbum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAlbumFindFirstOrThrowArgs} args - Arguments to find a MediaAlbum
     * @example
     * // Get one MediaAlbum
     * const mediaAlbum = await prisma.mediaAlbum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaAlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaAlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaAlbumClient<$Result.GetResult<Prisma.$MediaAlbumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaAlbums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaAlbums
     * const mediaAlbums = await prisma.mediaAlbum.findMany()
     * 
     * // Get first 10 MediaAlbums
     * const mediaAlbums = await prisma.mediaAlbum.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaAlbumWithIdOnly = await prisma.mediaAlbum.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaAlbumFindManyArgs>(args?: SelectSubset<T, MediaAlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediaAlbum.
     * @param {MediaAlbumCreateArgs} args - Arguments to create a MediaAlbum.
     * @example
     * // Create one MediaAlbum
     * const MediaAlbum = await prisma.mediaAlbum.create({
     *   data: {
     *     // ... data to create a MediaAlbum
     *   }
     * })
     * 
     */
    create<T extends MediaAlbumCreateArgs>(args: SelectSubset<T, MediaAlbumCreateArgs<ExtArgs>>): Prisma__MediaAlbumClient<$Result.GetResult<Prisma.$MediaAlbumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediaAlbums.
     * @param {MediaAlbumCreateManyArgs} args - Arguments to create many MediaAlbums.
     * @example
     * // Create many MediaAlbums
     * const mediaAlbum = await prisma.mediaAlbum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaAlbumCreateManyArgs>(args?: SelectSubset<T, MediaAlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MediaAlbum.
     * @param {MediaAlbumDeleteArgs} args - Arguments to delete one MediaAlbum.
     * @example
     * // Delete one MediaAlbum
     * const MediaAlbum = await prisma.mediaAlbum.delete({
     *   where: {
     *     // ... filter to delete one MediaAlbum
     *   }
     * })
     * 
     */
    delete<T extends MediaAlbumDeleteArgs>(args: SelectSubset<T, MediaAlbumDeleteArgs<ExtArgs>>): Prisma__MediaAlbumClient<$Result.GetResult<Prisma.$MediaAlbumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediaAlbum.
     * @param {MediaAlbumUpdateArgs} args - Arguments to update one MediaAlbum.
     * @example
     * // Update one MediaAlbum
     * const mediaAlbum = await prisma.mediaAlbum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaAlbumUpdateArgs>(args: SelectSubset<T, MediaAlbumUpdateArgs<ExtArgs>>): Prisma__MediaAlbumClient<$Result.GetResult<Prisma.$MediaAlbumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediaAlbums.
     * @param {MediaAlbumDeleteManyArgs} args - Arguments to filter MediaAlbums to delete.
     * @example
     * // Delete a few MediaAlbums
     * const { count } = await prisma.mediaAlbum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaAlbumDeleteManyArgs>(args?: SelectSubset<T, MediaAlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaAlbums
     * const mediaAlbum = await prisma.mediaAlbum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaAlbumUpdateManyArgs>(args: SelectSubset<T, MediaAlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MediaAlbum.
     * @param {MediaAlbumUpsertArgs} args - Arguments to update or create a MediaAlbum.
     * @example
     * // Update or create a MediaAlbum
     * const mediaAlbum = await prisma.mediaAlbum.upsert({
     *   create: {
     *     // ... data to create a MediaAlbum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaAlbum we want to update
     *   }
     * })
     */
    upsert<T extends MediaAlbumUpsertArgs>(args: SelectSubset<T, MediaAlbumUpsertArgs<ExtArgs>>): Prisma__MediaAlbumClient<$Result.GetResult<Prisma.$MediaAlbumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaAlbums that matches the filter.
     * @param {MediaAlbumFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const mediaAlbum = await prisma.mediaAlbum.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MediaAlbumFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MediaAlbum.
     * @param {MediaAlbumAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const mediaAlbum = await prisma.mediaAlbum.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MediaAlbumAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MediaAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAlbumCountArgs} args - Arguments to filter MediaAlbums to count.
     * @example
     * // Count the number of MediaAlbums
     * const count = await prisma.mediaAlbum.count({
     *   where: {
     *     // ... the filter for the MediaAlbums we want to count
     *   }
     * })
    **/
    count<T extends MediaAlbumCountArgs>(
      args?: Subset<T, MediaAlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaAlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaAlbum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAlbumAggregateArgs>(args: Subset<T, MediaAlbumAggregateArgs>): Prisma.PrismaPromise<GetMediaAlbumAggregateType<T>>

    /**
     * Group by MediaAlbum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAlbumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaAlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaAlbumGroupByArgs['orderBy'] }
        : { orderBy?: MediaAlbumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaAlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaAlbum model
   */
  readonly fields: MediaAlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaAlbum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaAlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MediaAlbum model
   */
  interface MediaAlbumFieldRefs {
    readonly id: FieldRef<"MediaAlbum", 'String'>
    readonly title: FieldRef<"MediaAlbum", 'String'>
    readonly slug: FieldRef<"MediaAlbum", 'String'>
    readonly category: FieldRef<"MediaAlbum", 'String'>
    readonly coverImage: FieldRef<"MediaAlbum", 'String'>
    readonly images: FieldRef<"MediaAlbum", 'Json'>
    readonly eventDate: FieldRef<"MediaAlbum", 'DateTime'>
    readonly sortOrder: FieldRef<"MediaAlbum", 'Int'>
    readonly isPublished: FieldRef<"MediaAlbum", 'Boolean'>
    readonly createdAt: FieldRef<"MediaAlbum", 'DateTime'>
    readonly updatedAt: FieldRef<"MediaAlbum", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MediaAlbum findUnique
   */
  export type MediaAlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAlbum
     */
    select?: MediaAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAlbum
     */
    omit?: MediaAlbumOmit<ExtArgs> | null
    /**
     * Filter, which MediaAlbum to fetch.
     */
    where: MediaAlbumWhereUniqueInput
  }

  /**
   * MediaAlbum findUniqueOrThrow
   */
  export type MediaAlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAlbum
     */
    select?: MediaAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAlbum
     */
    omit?: MediaAlbumOmit<ExtArgs> | null
    /**
     * Filter, which MediaAlbum to fetch.
     */
    where: MediaAlbumWhereUniqueInput
  }

  /**
   * MediaAlbum findFirst
   */
  export type MediaAlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAlbum
     */
    select?: MediaAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAlbum
     */
    omit?: MediaAlbumOmit<ExtArgs> | null
    /**
     * Filter, which MediaAlbum to fetch.
     */
    where?: MediaAlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAlbums to fetch.
     */
    orderBy?: MediaAlbumOrderByWithRelationInput | MediaAlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaAlbums.
     */
    cursor?: MediaAlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaAlbums.
     */
    distinct?: MediaAlbumScalarFieldEnum | MediaAlbumScalarFieldEnum[]
  }

  /**
   * MediaAlbum findFirstOrThrow
   */
  export type MediaAlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAlbum
     */
    select?: MediaAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAlbum
     */
    omit?: MediaAlbumOmit<ExtArgs> | null
    /**
     * Filter, which MediaAlbum to fetch.
     */
    where?: MediaAlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAlbums to fetch.
     */
    orderBy?: MediaAlbumOrderByWithRelationInput | MediaAlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaAlbums.
     */
    cursor?: MediaAlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaAlbums.
     */
    distinct?: MediaAlbumScalarFieldEnum | MediaAlbumScalarFieldEnum[]
  }

  /**
   * MediaAlbum findMany
   */
  export type MediaAlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAlbum
     */
    select?: MediaAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAlbum
     */
    omit?: MediaAlbumOmit<ExtArgs> | null
    /**
     * Filter, which MediaAlbums to fetch.
     */
    where?: MediaAlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAlbums to fetch.
     */
    orderBy?: MediaAlbumOrderByWithRelationInput | MediaAlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaAlbums.
     */
    cursor?: MediaAlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAlbums.
     */
    skip?: number
    distinct?: MediaAlbumScalarFieldEnum | MediaAlbumScalarFieldEnum[]
  }

  /**
   * MediaAlbum create
   */
  export type MediaAlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAlbum
     */
    select?: MediaAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAlbum
     */
    omit?: MediaAlbumOmit<ExtArgs> | null
    /**
     * The data needed to create a MediaAlbum.
     */
    data: XOR<MediaAlbumCreateInput, MediaAlbumUncheckedCreateInput>
  }

  /**
   * MediaAlbum createMany
   */
  export type MediaAlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaAlbums.
     */
    data: MediaAlbumCreateManyInput | MediaAlbumCreateManyInput[]
  }

  /**
   * MediaAlbum update
   */
  export type MediaAlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAlbum
     */
    select?: MediaAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAlbum
     */
    omit?: MediaAlbumOmit<ExtArgs> | null
    /**
     * The data needed to update a MediaAlbum.
     */
    data: XOR<MediaAlbumUpdateInput, MediaAlbumUncheckedUpdateInput>
    /**
     * Choose, which MediaAlbum to update.
     */
    where: MediaAlbumWhereUniqueInput
  }

  /**
   * MediaAlbum updateMany
   */
  export type MediaAlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaAlbums.
     */
    data: XOR<MediaAlbumUpdateManyMutationInput, MediaAlbumUncheckedUpdateManyInput>
    /**
     * Filter which MediaAlbums to update
     */
    where?: MediaAlbumWhereInput
    /**
     * Limit how many MediaAlbums to update.
     */
    limit?: number
  }

  /**
   * MediaAlbum upsert
   */
  export type MediaAlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAlbum
     */
    select?: MediaAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAlbum
     */
    omit?: MediaAlbumOmit<ExtArgs> | null
    /**
     * The filter to search for the MediaAlbum to update in case it exists.
     */
    where: MediaAlbumWhereUniqueInput
    /**
     * In case the MediaAlbum found by the `where` argument doesn't exist, create a new MediaAlbum with this data.
     */
    create: XOR<MediaAlbumCreateInput, MediaAlbumUncheckedCreateInput>
    /**
     * In case the MediaAlbum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaAlbumUpdateInput, MediaAlbumUncheckedUpdateInput>
  }

  /**
   * MediaAlbum delete
   */
  export type MediaAlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAlbum
     */
    select?: MediaAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAlbum
     */
    omit?: MediaAlbumOmit<ExtArgs> | null
    /**
     * Filter which MediaAlbum to delete.
     */
    where: MediaAlbumWhereUniqueInput
  }

  /**
   * MediaAlbum deleteMany
   */
  export type MediaAlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaAlbums to delete
     */
    where?: MediaAlbumWhereInput
    /**
     * Limit how many MediaAlbums to delete.
     */
    limit?: number
  }

  /**
   * MediaAlbum findRaw
   */
  export type MediaAlbumFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MediaAlbum aggregateRaw
   */
  export type MediaAlbumAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MediaAlbum without action
   */
  export type MediaAlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAlbum
     */
    select?: MediaAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAlbum
     */
    omit?: MediaAlbumOmit<ExtArgs> | null
  }


  /**
   * Model Executive
   */

  export type AggregateExecutive = {
    _count: ExecutiveCountAggregateOutputType | null
    _avg: ExecutiveAvgAggregateOutputType | null
    _sum: ExecutiveSumAggregateOutputType | null
    _min: ExecutiveMinAggregateOutputType | null
    _max: ExecutiveMaxAggregateOutputType | null
  }

  export type ExecutiveAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ExecutiveSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ExecutiveMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    group: string | null
    title: string | null
    photo: string | null
    bio: string | null
    sortOrder: number | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExecutiveMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    group: string | null
    title: string | null
    photo: string | null
    bio: string | null
    sortOrder: number | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExecutiveCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    group: number
    title: number
    photo: number
    bio: number
    bullets: number
    sections: number
    sortOrder: number
    isPublic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExecutiveAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ExecutiveSumAggregateInputType = {
    sortOrder?: true
  }

  export type ExecutiveMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    group?: true
    title?: true
    photo?: true
    bio?: true
    sortOrder?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExecutiveMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    group?: true
    title?: true
    photo?: true
    bio?: true
    sortOrder?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExecutiveCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    group?: true
    title?: true
    photo?: true
    bio?: true
    bullets?: true
    sections?: true
    sortOrder?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExecutiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Executive to aggregate.
     */
    where?: ExecutiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executives to fetch.
     */
    orderBy?: ExecutiveOrderByWithRelationInput | ExecutiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Executives
    **/
    _count?: true | ExecutiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExecutiveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExecutiveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutiveMaxAggregateInputType
  }

  export type GetExecutiveAggregateType<T extends ExecutiveAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutive[P]>
      : GetScalarType<T[P], AggregateExecutive[P]>
  }




  export type ExecutiveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutiveWhereInput
    orderBy?: ExecutiveOrderByWithAggregationInput | ExecutiveOrderByWithAggregationInput[]
    by: ExecutiveScalarFieldEnum[] | ExecutiveScalarFieldEnum
    having?: ExecutiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutiveCountAggregateInputType | true
    _avg?: ExecutiveAvgAggregateInputType
    _sum?: ExecutiveSumAggregateInputType
    _min?: ExecutiveMinAggregateInputType
    _max?: ExecutiveMaxAggregateInputType
  }

  export type ExecutiveGroupByOutputType = {
    id: string
    name: string
    slug: string
    group: string
    title: string
    photo: string | null
    bio: string | null
    bullets: string[]
    sections: JsonValue | null
    sortOrder: number
    isPublic: boolean
    createdAt: Date
    updatedAt: Date
    _count: ExecutiveCountAggregateOutputType | null
    _avg: ExecutiveAvgAggregateOutputType | null
    _sum: ExecutiveSumAggregateOutputType | null
    _min: ExecutiveMinAggregateOutputType | null
    _max: ExecutiveMaxAggregateOutputType | null
  }

  type GetExecutiveGroupByPayload<T extends ExecutiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutiveGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutiveGroupByOutputType[P]>
        }
      >
    >


  export type ExecutiveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    group?: boolean
    title?: boolean
    photo?: boolean
    bio?: boolean
    bullets?: boolean
    sections?: boolean
    sortOrder?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["executive"]>



  export type ExecutiveSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    group?: boolean
    title?: boolean
    photo?: boolean
    bio?: boolean
    bullets?: boolean
    sections?: boolean
    sortOrder?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExecutiveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "group" | "title" | "photo" | "bio" | "bullets" | "sections" | "sortOrder" | "isPublic" | "createdAt" | "updatedAt", ExtArgs["result"]["executive"]>

  export type $ExecutivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Executive"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      group: string
      title: string
      photo: string | null
      bio: string | null
      bullets: string[]
      sections: Prisma.JsonValue | null
      sortOrder: number
      isPublic: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["executive"]>
    composites: {}
  }

  type ExecutiveGetPayload<S extends boolean | null | undefined | ExecutiveDefaultArgs> = $Result.GetResult<Prisma.$ExecutivePayload, S>

  type ExecutiveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExecutiveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecutiveCountAggregateInputType | true
    }

  export interface ExecutiveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Executive'], meta: { name: 'Executive' } }
    /**
     * Find zero or one Executive that matches the filter.
     * @param {ExecutiveFindUniqueArgs} args - Arguments to find a Executive
     * @example
     * // Get one Executive
     * const executive = await prisma.executive.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutiveFindUniqueArgs>(args: SelectSubset<T, ExecutiveFindUniqueArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Executive that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExecutiveFindUniqueOrThrowArgs} args - Arguments to find a Executive
     * @example
     * // Get one Executive
     * const executive = await prisma.executive.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutiveFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutiveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Executive that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutiveFindFirstArgs} args - Arguments to find a Executive
     * @example
     * // Get one Executive
     * const executive = await prisma.executive.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutiveFindFirstArgs>(args?: SelectSubset<T, ExecutiveFindFirstArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Executive that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutiveFindFirstOrThrowArgs} args - Arguments to find a Executive
     * @example
     * // Get one Executive
     * const executive = await prisma.executive.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutiveFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutiveFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Executives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutiveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Executives
     * const executives = await prisma.executive.findMany()
     * 
     * // Get first 10 Executives
     * const executives = await prisma.executive.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executiveWithIdOnly = await prisma.executive.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutiveFindManyArgs>(args?: SelectSubset<T, ExecutiveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Executive.
     * @param {ExecutiveCreateArgs} args - Arguments to create a Executive.
     * @example
     * // Create one Executive
     * const Executive = await prisma.executive.create({
     *   data: {
     *     // ... data to create a Executive
     *   }
     * })
     * 
     */
    create<T extends ExecutiveCreateArgs>(args: SelectSubset<T, ExecutiveCreateArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Executives.
     * @param {ExecutiveCreateManyArgs} args - Arguments to create many Executives.
     * @example
     * // Create many Executives
     * const executive = await prisma.executive.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutiveCreateManyArgs>(args?: SelectSubset<T, ExecutiveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Executive.
     * @param {ExecutiveDeleteArgs} args - Arguments to delete one Executive.
     * @example
     * // Delete one Executive
     * const Executive = await prisma.executive.delete({
     *   where: {
     *     // ... filter to delete one Executive
     *   }
     * })
     * 
     */
    delete<T extends ExecutiveDeleteArgs>(args: SelectSubset<T, ExecutiveDeleteArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Executive.
     * @param {ExecutiveUpdateArgs} args - Arguments to update one Executive.
     * @example
     * // Update one Executive
     * const executive = await prisma.executive.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutiveUpdateArgs>(args: SelectSubset<T, ExecutiveUpdateArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Executives.
     * @param {ExecutiveDeleteManyArgs} args - Arguments to filter Executives to delete.
     * @example
     * // Delete a few Executives
     * const { count } = await prisma.executive.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutiveDeleteManyArgs>(args?: SelectSubset<T, ExecutiveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Executives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Executives
     * const executive = await prisma.executive.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutiveUpdateManyArgs>(args: SelectSubset<T, ExecutiveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Executive.
     * @param {ExecutiveUpsertArgs} args - Arguments to update or create a Executive.
     * @example
     * // Update or create a Executive
     * const executive = await prisma.executive.upsert({
     *   create: {
     *     // ... data to create a Executive
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Executive we want to update
     *   }
     * })
     */
    upsert<T extends ExecutiveUpsertArgs>(args: SelectSubset<T, ExecutiveUpsertArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Executives that matches the filter.
     * @param {ExecutiveFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const executive = await prisma.executive.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ExecutiveFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Executive.
     * @param {ExecutiveAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const executive = await prisma.executive.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ExecutiveAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Executives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutiveCountArgs} args - Arguments to filter Executives to count.
     * @example
     * // Count the number of Executives
     * const count = await prisma.executive.count({
     *   where: {
     *     // ... the filter for the Executives we want to count
     *   }
     * })
    **/
    count<T extends ExecutiveCountArgs>(
      args?: Subset<T, ExecutiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Executive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExecutiveAggregateArgs>(args: Subset<T, ExecutiveAggregateArgs>): Prisma.PrismaPromise<GetExecutiveAggregateType<T>>

    /**
     * Group by Executive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutiveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExecutiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutiveGroupByArgs['orderBy'] }
        : { orderBy?: ExecutiveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExecutiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Executive model
   */
  readonly fields: ExecutiveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Executive.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutiveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Executive model
   */
  interface ExecutiveFieldRefs {
    readonly id: FieldRef<"Executive", 'String'>
    readonly name: FieldRef<"Executive", 'String'>
    readonly slug: FieldRef<"Executive", 'String'>
    readonly group: FieldRef<"Executive", 'String'>
    readonly title: FieldRef<"Executive", 'String'>
    readonly photo: FieldRef<"Executive", 'String'>
    readonly bio: FieldRef<"Executive", 'String'>
    readonly bullets: FieldRef<"Executive", 'String[]'>
    readonly sections: FieldRef<"Executive", 'Json'>
    readonly sortOrder: FieldRef<"Executive", 'Int'>
    readonly isPublic: FieldRef<"Executive", 'Boolean'>
    readonly createdAt: FieldRef<"Executive", 'DateTime'>
    readonly updatedAt: FieldRef<"Executive", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Executive findUnique
   */
  export type ExecutiveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * Filter, which Executive to fetch.
     */
    where: ExecutiveWhereUniqueInput
  }

  /**
   * Executive findUniqueOrThrow
   */
  export type ExecutiveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * Filter, which Executive to fetch.
     */
    where: ExecutiveWhereUniqueInput
  }

  /**
   * Executive findFirst
   */
  export type ExecutiveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * Filter, which Executive to fetch.
     */
    where?: ExecutiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executives to fetch.
     */
    orderBy?: ExecutiveOrderByWithRelationInput | ExecutiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Executives.
     */
    cursor?: ExecutiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Executives.
     */
    distinct?: ExecutiveScalarFieldEnum | ExecutiveScalarFieldEnum[]
  }

  /**
   * Executive findFirstOrThrow
   */
  export type ExecutiveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * Filter, which Executive to fetch.
     */
    where?: ExecutiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executives to fetch.
     */
    orderBy?: ExecutiveOrderByWithRelationInput | ExecutiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Executives.
     */
    cursor?: ExecutiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Executives.
     */
    distinct?: ExecutiveScalarFieldEnum | ExecutiveScalarFieldEnum[]
  }

  /**
   * Executive findMany
   */
  export type ExecutiveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * Filter, which Executives to fetch.
     */
    where?: ExecutiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executives to fetch.
     */
    orderBy?: ExecutiveOrderByWithRelationInput | ExecutiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Executives.
     */
    cursor?: ExecutiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executives.
     */
    skip?: number
    distinct?: ExecutiveScalarFieldEnum | ExecutiveScalarFieldEnum[]
  }

  /**
   * Executive create
   */
  export type ExecutiveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * The data needed to create a Executive.
     */
    data: XOR<ExecutiveCreateInput, ExecutiveUncheckedCreateInput>
  }

  /**
   * Executive createMany
   */
  export type ExecutiveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Executives.
     */
    data: ExecutiveCreateManyInput | ExecutiveCreateManyInput[]
  }

  /**
   * Executive update
   */
  export type ExecutiveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * The data needed to update a Executive.
     */
    data: XOR<ExecutiveUpdateInput, ExecutiveUncheckedUpdateInput>
    /**
     * Choose, which Executive to update.
     */
    where: ExecutiveWhereUniqueInput
  }

  /**
   * Executive updateMany
   */
  export type ExecutiveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Executives.
     */
    data: XOR<ExecutiveUpdateManyMutationInput, ExecutiveUncheckedUpdateManyInput>
    /**
     * Filter which Executives to update
     */
    where?: ExecutiveWhereInput
    /**
     * Limit how many Executives to update.
     */
    limit?: number
  }

  /**
   * Executive upsert
   */
  export type ExecutiveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * The filter to search for the Executive to update in case it exists.
     */
    where: ExecutiveWhereUniqueInput
    /**
     * In case the Executive found by the `where` argument doesn't exist, create a new Executive with this data.
     */
    create: XOR<ExecutiveCreateInput, ExecutiveUncheckedCreateInput>
    /**
     * In case the Executive was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutiveUpdateInput, ExecutiveUncheckedUpdateInput>
  }

  /**
   * Executive delete
   */
  export type ExecutiveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * Filter which Executive to delete.
     */
    where: ExecutiveWhereUniqueInput
  }

  /**
   * Executive deleteMany
   */
  export type ExecutiveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Executives to delete
     */
    where?: ExecutiveWhereInput
    /**
     * Limit how many Executives to delete.
     */
    limit?: number
  }

  /**
   * Executive findRaw
   */
  export type ExecutiveFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Executive aggregateRaw
   */
  export type ExecutiveAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Executive without action
   */
  export type ExecutiveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    durationSec: number | null
    sortOrder: number | null
  }

  export type VideoSumAggregateOutputType = {
    durationSec: number | null
    sortOrder: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    category: string | null
    thumbnail: string | null
    videoUrl: string | null
    youtubeId: string | null
    durationSec: number | null
    isFeatured: boolean | null
    isPublished: boolean | null
    publishedAt: Date | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    category: string | null
    thumbnail: string | null
    videoUrl: string | null
    youtubeId: string | null
    durationSec: number | null
    isFeatured: boolean | null
    isPublished: boolean | null
    publishedAt: Date | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    category: number
    thumbnail: number
    videoUrl: number
    youtubeId: number
    durationSec: number
    isFeatured: number
    isPublished: number
    publishedAt: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    durationSec?: true
    sortOrder?: true
  }

  export type VideoSumAggregateInputType = {
    durationSec?: true
    sortOrder?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    thumbnail?: true
    videoUrl?: true
    youtubeId?: true
    durationSec?: true
    isFeatured?: true
    isPublished?: true
    publishedAt?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    thumbnail?: true
    videoUrl?: true
    youtubeId?: true
    durationSec?: true
    isFeatured?: true
    isPublished?: true
    publishedAt?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    thumbnail?: true
    videoUrl?: true
    youtubeId?: true
    durationSec?: true
    isFeatured?: true
    isPublished?: true
    publishedAt?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: string
    title: string
    slug: string
    category: string
    thumbnail: string | null
    videoUrl: string | null
    youtubeId: string | null
    durationSec: number | null
    isFeatured: boolean
    isPublished: boolean
    publishedAt: Date
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    thumbnail?: boolean
    videoUrl?: boolean
    youtubeId?: boolean
    durationSec?: boolean
    isFeatured?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["video"]>



  export type VideoSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    thumbnail?: boolean
    videoUrl?: boolean
    youtubeId?: boolean
    durationSec?: boolean
    isFeatured?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "category" | "thumbnail" | "videoUrl" | "youtubeId" | "durationSec" | "isFeatured" | "isPublished" | "publishedAt" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["video"]>

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      category: string
      thumbnail: string | null
      videoUrl: string | null
      youtubeId: string | null
      durationSec: number | null
      isFeatured: boolean
      isPublished: boolean
      publishedAt: Date
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * @param {VideoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const video = await prisma.video.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VideoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Video.
     * @param {VideoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const video = await prisma.video.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VideoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'String'>
    readonly title: FieldRef<"Video", 'String'>
    readonly slug: FieldRef<"Video", 'String'>
    readonly category: FieldRef<"Video", 'String'>
    readonly thumbnail: FieldRef<"Video", 'String'>
    readonly videoUrl: FieldRef<"Video", 'String'>
    readonly youtubeId: FieldRef<"Video", 'String'>
    readonly durationSec: FieldRef<"Video", 'Int'>
    readonly isFeatured: FieldRef<"Video", 'Boolean'>
    readonly isPublished: FieldRef<"Video", 'Boolean'>
    readonly publishedAt: FieldRef<"Video", 'DateTime'>
    readonly sortOrder: FieldRef<"Video", 'Int'>
    readonly createdAt: FieldRef<"Video", 'DateTime'>
    readonly updatedAt: FieldRef<"Video", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video findRaw
   */
  export type VideoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Video aggregateRaw
   */
  export type VideoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
  }


  /**
   * Model ShopProduct
   */

  export type AggregateShopProduct = {
    _count: ShopProductCountAggregateOutputType | null
    _avg: ShopProductAvgAggregateOutputType | null
    _sum: ShopProductSumAggregateOutputType | null
    _min: ShopProductMinAggregateOutputType | null
    _max: ShopProductMaxAggregateOutputType | null
  }

  export type ShopProductAvgAggregateOutputType = {
    price: number | null
    compareAtPrice: number | null
    sortOrder: number | null
  }

  export type ShopProductSumAggregateOutputType = {
    price: number | null
    compareAtPrice: number | null
    sortOrder: number | null
  }

  export type ShopProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    category: string | null
    price: number | null
    compareAtPrice: number | null
    image: string | null
    url: string | null
    badge: string | null
    isVisible: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    category: string | null
    price: number | null
    compareAtPrice: number | null
    image: string | null
    url: string | null
    badge: string | null
    isVisible: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopProductCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    category: number
    price: number
    compareAtPrice: number
    image: number
    url: number
    sizes: number
    badge: number
    isVisible: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShopProductAvgAggregateInputType = {
    price?: true
    compareAtPrice?: true
    sortOrder?: true
  }

  export type ShopProductSumAggregateInputType = {
    price?: true
    compareAtPrice?: true
    sortOrder?: true
  }

  export type ShopProductMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    category?: true
    price?: true
    compareAtPrice?: true
    image?: true
    url?: true
    badge?: true
    isVisible?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopProductMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    category?: true
    price?: true
    compareAtPrice?: true
    image?: true
    url?: true
    badge?: true
    isVisible?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopProductCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    category?: true
    price?: true
    compareAtPrice?: true
    image?: true
    url?: true
    sizes?: true
    badge?: true
    isVisible?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShopProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopProduct to aggregate.
     */
    where?: ShopProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopProducts to fetch.
     */
    orderBy?: ShopProductOrderByWithRelationInput | ShopProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopProducts
    **/
    _count?: true | ShopProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopProductMaxAggregateInputType
  }

  export type GetShopProductAggregateType<T extends ShopProductAggregateArgs> = {
        [P in keyof T & keyof AggregateShopProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopProduct[P]>
      : GetScalarType<T[P], AggregateShopProduct[P]>
  }




  export type ShopProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopProductWhereInput
    orderBy?: ShopProductOrderByWithAggregationInput | ShopProductOrderByWithAggregationInput[]
    by: ShopProductScalarFieldEnum[] | ShopProductScalarFieldEnum
    having?: ShopProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopProductCountAggregateInputType | true
    _avg?: ShopProductAvgAggregateInputType
    _sum?: ShopProductSumAggregateInputType
    _min?: ShopProductMinAggregateInputType
    _max?: ShopProductMaxAggregateInputType
  }

  export type ShopProductGroupByOutputType = {
    id: string
    name: string
    slug: string
    category: string
    price: number
    compareAtPrice: number | null
    image: string | null
    url: string | null
    sizes: string[]
    badge: string | null
    isVisible: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: ShopProductCountAggregateOutputType | null
    _avg: ShopProductAvgAggregateOutputType | null
    _sum: ShopProductSumAggregateOutputType | null
    _min: ShopProductMinAggregateOutputType | null
    _max: ShopProductMaxAggregateOutputType | null
  }

  type GetShopProductGroupByPayload<T extends ShopProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopProductGroupByOutputType[P]>
            : GetScalarType<T[P], ShopProductGroupByOutputType[P]>
        }
      >
    >


  export type ShopProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    category?: boolean
    price?: boolean
    compareAtPrice?: boolean
    image?: boolean
    url?: boolean
    sizes?: boolean
    badge?: boolean
    isVisible?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shopProduct"]>



  export type ShopProductSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    category?: boolean
    price?: boolean
    compareAtPrice?: boolean
    image?: boolean
    url?: boolean
    sizes?: boolean
    badge?: boolean
    isVisible?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShopProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "category" | "price" | "compareAtPrice" | "image" | "url" | "sizes" | "badge" | "isVisible" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["shopProduct"]>

  export type $ShopProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopProduct"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      category: string
      price: number
      compareAtPrice: number | null
      image: string | null
      url: string | null
      sizes: string[]
      badge: string | null
      isVisible: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shopProduct"]>
    composites: {}
  }

  type ShopProductGetPayload<S extends boolean | null | undefined | ShopProductDefaultArgs> = $Result.GetResult<Prisma.$ShopProductPayload, S>

  type ShopProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopProductCountAggregateInputType | true
    }

  export interface ShopProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopProduct'], meta: { name: 'ShopProduct' } }
    /**
     * Find zero or one ShopProduct that matches the filter.
     * @param {ShopProductFindUniqueArgs} args - Arguments to find a ShopProduct
     * @example
     * // Get one ShopProduct
     * const shopProduct = await prisma.shopProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopProductFindUniqueArgs>(args: SelectSubset<T, ShopProductFindUniqueArgs<ExtArgs>>): Prisma__ShopProductClient<$Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopProductFindUniqueOrThrowArgs} args - Arguments to find a ShopProduct
     * @example
     * // Get one ShopProduct
     * const shopProduct = await prisma.shopProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopProductClient<$Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductFindFirstArgs} args - Arguments to find a ShopProduct
     * @example
     * // Get one ShopProduct
     * const shopProduct = await prisma.shopProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopProductFindFirstArgs>(args?: SelectSubset<T, ShopProductFindFirstArgs<ExtArgs>>): Prisma__ShopProductClient<$Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductFindFirstOrThrowArgs} args - Arguments to find a ShopProduct
     * @example
     * // Get one ShopProduct
     * const shopProduct = await prisma.shopProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopProductClient<$Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopProducts
     * const shopProducts = await prisma.shopProduct.findMany()
     * 
     * // Get first 10 ShopProducts
     * const shopProducts = await prisma.shopProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopProductWithIdOnly = await prisma.shopProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopProductFindManyArgs>(args?: SelectSubset<T, ShopProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopProduct.
     * @param {ShopProductCreateArgs} args - Arguments to create a ShopProduct.
     * @example
     * // Create one ShopProduct
     * const ShopProduct = await prisma.shopProduct.create({
     *   data: {
     *     // ... data to create a ShopProduct
     *   }
     * })
     * 
     */
    create<T extends ShopProductCreateArgs>(args: SelectSubset<T, ShopProductCreateArgs<ExtArgs>>): Prisma__ShopProductClient<$Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopProducts.
     * @param {ShopProductCreateManyArgs} args - Arguments to create many ShopProducts.
     * @example
     * // Create many ShopProducts
     * const shopProduct = await prisma.shopProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopProductCreateManyArgs>(args?: SelectSubset<T, ShopProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShopProduct.
     * @param {ShopProductDeleteArgs} args - Arguments to delete one ShopProduct.
     * @example
     * // Delete one ShopProduct
     * const ShopProduct = await prisma.shopProduct.delete({
     *   where: {
     *     // ... filter to delete one ShopProduct
     *   }
     * })
     * 
     */
    delete<T extends ShopProductDeleteArgs>(args: SelectSubset<T, ShopProductDeleteArgs<ExtArgs>>): Prisma__ShopProductClient<$Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopProduct.
     * @param {ShopProductUpdateArgs} args - Arguments to update one ShopProduct.
     * @example
     * // Update one ShopProduct
     * const shopProduct = await prisma.shopProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopProductUpdateArgs>(args: SelectSubset<T, ShopProductUpdateArgs<ExtArgs>>): Prisma__ShopProductClient<$Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopProducts.
     * @param {ShopProductDeleteManyArgs} args - Arguments to filter ShopProducts to delete.
     * @example
     * // Delete a few ShopProducts
     * const { count } = await prisma.shopProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopProductDeleteManyArgs>(args?: SelectSubset<T, ShopProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopProducts
     * const shopProduct = await prisma.shopProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopProductUpdateManyArgs>(args: SelectSubset<T, ShopProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShopProduct.
     * @param {ShopProductUpsertArgs} args - Arguments to update or create a ShopProduct.
     * @example
     * // Update or create a ShopProduct
     * const shopProduct = await prisma.shopProduct.upsert({
     *   create: {
     *     // ... data to create a ShopProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopProduct we want to update
     *   }
     * })
     */
    upsert<T extends ShopProductUpsertArgs>(args: SelectSubset<T, ShopProductUpsertArgs<ExtArgs>>): Prisma__ShopProductClient<$Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopProducts that matches the filter.
     * @param {ShopProductFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const shopProduct = await prisma.shopProduct.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ShopProductFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ShopProduct.
     * @param {ShopProductAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const shopProduct = await prisma.shopProduct.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ShopProductAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ShopProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductCountArgs} args - Arguments to filter ShopProducts to count.
     * @example
     * // Count the number of ShopProducts
     * const count = await prisma.shopProduct.count({
     *   where: {
     *     // ... the filter for the ShopProducts we want to count
     *   }
     * })
    **/
    count<T extends ShopProductCountArgs>(
      args?: Subset<T, ShopProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopProductAggregateArgs>(args: Subset<T, ShopProductAggregateArgs>): Prisma.PrismaPromise<GetShopProductAggregateType<T>>

    /**
     * Group by ShopProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopProductGroupByArgs['orderBy'] }
        : { orderBy?: ShopProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopProduct model
   */
  readonly fields: ShopProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShopProduct model
   */
  interface ShopProductFieldRefs {
    readonly id: FieldRef<"ShopProduct", 'String'>
    readonly name: FieldRef<"ShopProduct", 'String'>
    readonly slug: FieldRef<"ShopProduct", 'String'>
    readonly category: FieldRef<"ShopProduct", 'String'>
    readonly price: FieldRef<"ShopProduct", 'Int'>
    readonly compareAtPrice: FieldRef<"ShopProduct", 'Int'>
    readonly image: FieldRef<"ShopProduct", 'String'>
    readonly url: FieldRef<"ShopProduct", 'String'>
    readonly sizes: FieldRef<"ShopProduct", 'String[]'>
    readonly badge: FieldRef<"ShopProduct", 'String'>
    readonly isVisible: FieldRef<"ShopProduct", 'Boolean'>
    readonly sortOrder: FieldRef<"ShopProduct", 'Int'>
    readonly createdAt: FieldRef<"ShopProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"ShopProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShopProduct findUnique
   */
  export type ShopProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: ShopProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: ShopProductOmit<ExtArgs> | null
    /**
     * Filter, which ShopProduct to fetch.
     */
    where: ShopProductWhereUniqueInput
  }

  /**
   * ShopProduct findUniqueOrThrow
   */
  export type ShopProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: ShopProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: ShopProductOmit<ExtArgs> | null
    /**
     * Filter, which ShopProduct to fetch.
     */
    where: ShopProductWhereUniqueInput
  }

  /**
   * ShopProduct findFirst
   */
  export type ShopProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: ShopProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: ShopProductOmit<ExtArgs> | null
    /**
     * Filter, which ShopProduct to fetch.
     */
    where?: ShopProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopProducts to fetch.
     */
    orderBy?: ShopProductOrderByWithRelationInput | ShopProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopProducts.
     */
    cursor?: ShopProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopProducts.
     */
    distinct?: ShopProductScalarFieldEnum | ShopProductScalarFieldEnum[]
  }

  /**
   * ShopProduct findFirstOrThrow
   */
  export type ShopProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: ShopProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: ShopProductOmit<ExtArgs> | null
    /**
     * Filter, which ShopProduct to fetch.
     */
    where?: ShopProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopProducts to fetch.
     */
    orderBy?: ShopProductOrderByWithRelationInput | ShopProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopProducts.
     */
    cursor?: ShopProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopProducts.
     */
    distinct?: ShopProductScalarFieldEnum | ShopProductScalarFieldEnum[]
  }

  /**
   * ShopProduct findMany
   */
  export type ShopProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: ShopProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: ShopProductOmit<ExtArgs> | null
    /**
     * Filter, which ShopProducts to fetch.
     */
    where?: ShopProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopProducts to fetch.
     */
    orderBy?: ShopProductOrderByWithRelationInput | ShopProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopProducts.
     */
    cursor?: ShopProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopProducts.
     */
    skip?: number
    distinct?: ShopProductScalarFieldEnum | ShopProductScalarFieldEnum[]
  }

  /**
   * ShopProduct create
   */
  export type ShopProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: ShopProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: ShopProductOmit<ExtArgs> | null
    /**
     * The data needed to create a ShopProduct.
     */
    data: XOR<ShopProductCreateInput, ShopProductUncheckedCreateInput>
  }

  /**
   * ShopProduct createMany
   */
  export type ShopProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopProducts.
     */
    data: ShopProductCreateManyInput | ShopProductCreateManyInput[]
  }

  /**
   * ShopProduct update
   */
  export type ShopProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: ShopProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: ShopProductOmit<ExtArgs> | null
    /**
     * The data needed to update a ShopProduct.
     */
    data: XOR<ShopProductUpdateInput, ShopProductUncheckedUpdateInput>
    /**
     * Choose, which ShopProduct to update.
     */
    where: ShopProductWhereUniqueInput
  }

  /**
   * ShopProduct updateMany
   */
  export type ShopProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopProducts.
     */
    data: XOR<ShopProductUpdateManyMutationInput, ShopProductUncheckedUpdateManyInput>
    /**
     * Filter which ShopProducts to update
     */
    where?: ShopProductWhereInput
    /**
     * Limit how many ShopProducts to update.
     */
    limit?: number
  }

  /**
   * ShopProduct upsert
   */
  export type ShopProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: ShopProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: ShopProductOmit<ExtArgs> | null
    /**
     * The filter to search for the ShopProduct to update in case it exists.
     */
    where: ShopProductWhereUniqueInput
    /**
     * In case the ShopProduct found by the `where` argument doesn't exist, create a new ShopProduct with this data.
     */
    create: XOR<ShopProductCreateInput, ShopProductUncheckedCreateInput>
    /**
     * In case the ShopProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopProductUpdateInput, ShopProductUncheckedUpdateInput>
  }

  /**
   * ShopProduct delete
   */
  export type ShopProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: ShopProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: ShopProductOmit<ExtArgs> | null
    /**
     * Filter which ShopProduct to delete.
     */
    where: ShopProductWhereUniqueInput
  }

  /**
   * ShopProduct deleteMany
   */
  export type ShopProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopProducts to delete
     */
    where?: ShopProductWhereInput
    /**
     * Limit how many ShopProducts to delete.
     */
    limit?: number
  }

  /**
   * ShopProduct findRaw
   */
  export type ShopProductFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ShopProduct aggregateRaw
   */
  export type ShopProductAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ShopProduct without action
   */
  export type ShopProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: ShopProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: ShopProductOmit<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    total: number | null
  }

  export type OrderSumAggregateOutputType = {
    total: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    customerName: string | null
    phone: string | null
    email: string | null
    note: string | null
    total: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    customerName: string | null
    phone: string | null
    email: string | null
    note: string | null
    total: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    customerName: number
    phone: number
    email: number
    note: number
    items: number
    total: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    total?: true
  }

  export type OrderSumAggregateInputType = {
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    customerName?: true
    phone?: true
    email?: true
    note?: true
    total?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    customerName?: true
    phone?: true
    email?: true
    note?: true
    total?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    customerName?: true
    phone?: true
    email?: true
    note?: true
    items?: true
    total?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    customerName: string
    phone: string
    email: string | null
    note: string | null
    items: JsonValue
    total: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    phone?: boolean
    email?: boolean
    note?: boolean
    items?: boolean
    total?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>



  export type OrderSelectScalar = {
    id?: boolean
    customerName?: boolean
    phone?: boolean
    email?: boolean
    note?: boolean
    items?: boolean
    total?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerName" | "phone" | "email" | "note" | "items" | "total" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerName: string
      phone: string
      email: string | null
      note: string | null
      items: Prisma.JsonValue
      total: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * @param {OrderFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const order = await prisma.order.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: OrderFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Order.
     * @param {OrderAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const order = await prisma.order.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: OrderAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly customerName: FieldRef<"Order", 'String'>
    readonly phone: FieldRef<"Order", 'String'>
    readonly email: FieldRef<"Order", 'String'>
    readonly note: FieldRef<"Order", 'String'>
    readonly items: FieldRef<"Order", 'Json'>
    readonly total: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order findRaw
   */
  export type OrderFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Order aggregateRaw
   */
  export type OrderAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
  }


  /**
   * Model SiteContent
   */

  export type AggregateSiteContent = {
    _count: SiteContentCountAggregateOutputType | null
    _min: SiteContentMinAggregateOutputType | null
    _max: SiteContentMaxAggregateOutputType | null
  }

  export type SiteContentMinAggregateOutputType = {
    id: string | null
    page: string | null
    section: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteContentMaxAggregateOutputType = {
    id: string | null
    page: string | null
    section: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteContentCountAggregateOutputType = {
    id: number
    page: number
    section: number
    data: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SiteContentMinAggregateInputType = {
    id?: true
    page?: true
    section?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteContentMaxAggregateInputType = {
    id?: true
    page?: true
    section?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteContentCountAggregateInputType = {
    id?: true
    page?: true
    section?: true
    data?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteContent to aggregate.
     */
    where?: SiteContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteContents to fetch.
     */
    orderBy?: SiteContentOrderByWithRelationInput | SiteContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteContents
    **/
    _count?: true | SiteContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteContentMaxAggregateInputType
  }

  export type GetSiteContentAggregateType<T extends SiteContentAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteContent[P]>
      : GetScalarType<T[P], AggregateSiteContent[P]>
  }




  export type SiteContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteContentWhereInput
    orderBy?: SiteContentOrderByWithAggregationInput | SiteContentOrderByWithAggregationInput[]
    by: SiteContentScalarFieldEnum[] | SiteContentScalarFieldEnum
    having?: SiteContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteContentCountAggregateInputType | true
    _min?: SiteContentMinAggregateInputType
    _max?: SiteContentMaxAggregateInputType
  }

  export type SiteContentGroupByOutputType = {
    id: string
    page: string
    section: string
    data: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: SiteContentCountAggregateOutputType | null
    _min: SiteContentMinAggregateOutputType | null
    _max: SiteContentMaxAggregateOutputType | null
  }

  type GetSiteContentGroupByPayload<T extends SiteContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteContentGroupByOutputType[P]>
            : GetScalarType<T[P], SiteContentGroupByOutputType[P]>
        }
      >
    >


  export type SiteContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    page?: boolean
    section?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteContent"]>



  export type SiteContentSelectScalar = {
    id?: boolean
    page?: boolean
    section?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SiteContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "page" | "section" | "data" | "createdAt" | "updatedAt", ExtArgs["result"]["siteContent"]>

  export type $SiteContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      page: string
      section: string
      data: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["siteContent"]>
    composites: {}
  }

  type SiteContentGetPayload<S extends boolean | null | undefined | SiteContentDefaultArgs> = $Result.GetResult<Prisma.$SiteContentPayload, S>

  type SiteContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteContentCountAggregateInputType | true
    }

  export interface SiteContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteContent'], meta: { name: 'SiteContent' } }
    /**
     * Find zero or one SiteContent that matches the filter.
     * @param {SiteContentFindUniqueArgs} args - Arguments to find a SiteContent
     * @example
     * // Get one SiteContent
     * const siteContent = await prisma.siteContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteContentFindUniqueArgs>(args: SelectSubset<T, SiteContentFindUniqueArgs<ExtArgs>>): Prisma__SiteContentClient<$Result.GetResult<Prisma.$SiteContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteContentFindUniqueOrThrowArgs} args - Arguments to find a SiteContent
     * @example
     * // Get one SiteContent
     * const siteContent = await prisma.siteContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteContentFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteContentClient<$Result.GetResult<Prisma.$SiteContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteContentFindFirstArgs} args - Arguments to find a SiteContent
     * @example
     * // Get one SiteContent
     * const siteContent = await prisma.siteContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteContentFindFirstArgs>(args?: SelectSubset<T, SiteContentFindFirstArgs<ExtArgs>>): Prisma__SiteContentClient<$Result.GetResult<Prisma.$SiteContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteContentFindFirstOrThrowArgs} args - Arguments to find a SiteContent
     * @example
     * // Get one SiteContent
     * const siteContent = await prisma.siteContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteContentFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteContentClient<$Result.GetResult<Prisma.$SiteContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteContents
     * const siteContents = await prisma.siteContent.findMany()
     * 
     * // Get first 10 SiteContents
     * const siteContents = await prisma.siteContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteContentWithIdOnly = await prisma.siteContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteContentFindManyArgs>(args?: SelectSubset<T, SiteContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteContent.
     * @param {SiteContentCreateArgs} args - Arguments to create a SiteContent.
     * @example
     * // Create one SiteContent
     * const SiteContent = await prisma.siteContent.create({
     *   data: {
     *     // ... data to create a SiteContent
     *   }
     * })
     * 
     */
    create<T extends SiteContentCreateArgs>(args: SelectSubset<T, SiteContentCreateArgs<ExtArgs>>): Prisma__SiteContentClient<$Result.GetResult<Prisma.$SiteContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteContents.
     * @param {SiteContentCreateManyArgs} args - Arguments to create many SiteContents.
     * @example
     * // Create many SiteContents
     * const siteContent = await prisma.siteContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteContentCreateManyArgs>(args?: SelectSubset<T, SiteContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SiteContent.
     * @param {SiteContentDeleteArgs} args - Arguments to delete one SiteContent.
     * @example
     * // Delete one SiteContent
     * const SiteContent = await prisma.siteContent.delete({
     *   where: {
     *     // ... filter to delete one SiteContent
     *   }
     * })
     * 
     */
    delete<T extends SiteContentDeleteArgs>(args: SelectSubset<T, SiteContentDeleteArgs<ExtArgs>>): Prisma__SiteContentClient<$Result.GetResult<Prisma.$SiteContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteContent.
     * @param {SiteContentUpdateArgs} args - Arguments to update one SiteContent.
     * @example
     * // Update one SiteContent
     * const siteContent = await prisma.siteContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteContentUpdateArgs>(args: SelectSubset<T, SiteContentUpdateArgs<ExtArgs>>): Prisma__SiteContentClient<$Result.GetResult<Prisma.$SiteContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteContents.
     * @param {SiteContentDeleteManyArgs} args - Arguments to filter SiteContents to delete.
     * @example
     * // Delete a few SiteContents
     * const { count } = await prisma.siteContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteContentDeleteManyArgs>(args?: SelectSubset<T, SiteContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteContents
     * const siteContent = await prisma.siteContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteContentUpdateManyArgs>(args: SelectSubset<T, SiteContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SiteContent.
     * @param {SiteContentUpsertArgs} args - Arguments to update or create a SiteContent.
     * @example
     * // Update or create a SiteContent
     * const siteContent = await prisma.siteContent.upsert({
     *   create: {
     *     // ... data to create a SiteContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteContent we want to update
     *   }
     * })
     */
    upsert<T extends SiteContentUpsertArgs>(args: SelectSubset<T, SiteContentUpsertArgs<ExtArgs>>): Prisma__SiteContentClient<$Result.GetResult<Prisma.$SiteContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteContents that matches the filter.
     * @param {SiteContentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const siteContent = await prisma.siteContent.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SiteContentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SiteContent.
     * @param {SiteContentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const siteContent = await prisma.siteContent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SiteContentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SiteContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteContentCountArgs} args - Arguments to filter SiteContents to count.
     * @example
     * // Count the number of SiteContents
     * const count = await prisma.siteContent.count({
     *   where: {
     *     // ... the filter for the SiteContents we want to count
     *   }
     * })
    **/
    count<T extends SiteContentCountArgs>(
      args?: Subset<T, SiteContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteContentAggregateArgs>(args: Subset<T, SiteContentAggregateArgs>): Prisma.PrismaPromise<GetSiteContentAggregateType<T>>

    /**
     * Group by SiteContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteContentGroupByArgs['orderBy'] }
        : { orderBy?: SiteContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteContent model
   */
  readonly fields: SiteContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SiteContent model
   */
  interface SiteContentFieldRefs {
    readonly id: FieldRef<"SiteContent", 'String'>
    readonly page: FieldRef<"SiteContent", 'String'>
    readonly section: FieldRef<"SiteContent", 'String'>
    readonly data: FieldRef<"SiteContent", 'Json'>
    readonly createdAt: FieldRef<"SiteContent", 'DateTime'>
    readonly updatedAt: FieldRef<"SiteContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteContent findUnique
   */
  export type SiteContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteContent
     */
    select?: SiteContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteContent
     */
    omit?: SiteContentOmit<ExtArgs> | null
    /**
     * Filter, which SiteContent to fetch.
     */
    where: SiteContentWhereUniqueInput
  }

  /**
   * SiteContent findUniqueOrThrow
   */
  export type SiteContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteContent
     */
    select?: SiteContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteContent
     */
    omit?: SiteContentOmit<ExtArgs> | null
    /**
     * Filter, which SiteContent to fetch.
     */
    where: SiteContentWhereUniqueInput
  }

  /**
   * SiteContent findFirst
   */
  export type SiteContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteContent
     */
    select?: SiteContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteContent
     */
    omit?: SiteContentOmit<ExtArgs> | null
    /**
     * Filter, which SiteContent to fetch.
     */
    where?: SiteContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteContents to fetch.
     */
    orderBy?: SiteContentOrderByWithRelationInput | SiteContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteContents.
     */
    cursor?: SiteContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteContents.
     */
    distinct?: SiteContentScalarFieldEnum | SiteContentScalarFieldEnum[]
  }

  /**
   * SiteContent findFirstOrThrow
   */
  export type SiteContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteContent
     */
    select?: SiteContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteContent
     */
    omit?: SiteContentOmit<ExtArgs> | null
    /**
     * Filter, which SiteContent to fetch.
     */
    where?: SiteContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteContents to fetch.
     */
    orderBy?: SiteContentOrderByWithRelationInput | SiteContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteContents.
     */
    cursor?: SiteContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteContents.
     */
    distinct?: SiteContentScalarFieldEnum | SiteContentScalarFieldEnum[]
  }

  /**
   * SiteContent findMany
   */
  export type SiteContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteContent
     */
    select?: SiteContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteContent
     */
    omit?: SiteContentOmit<ExtArgs> | null
    /**
     * Filter, which SiteContents to fetch.
     */
    where?: SiteContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteContents to fetch.
     */
    orderBy?: SiteContentOrderByWithRelationInput | SiteContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteContents.
     */
    cursor?: SiteContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteContents.
     */
    skip?: number
    distinct?: SiteContentScalarFieldEnum | SiteContentScalarFieldEnum[]
  }

  /**
   * SiteContent create
   */
  export type SiteContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteContent
     */
    select?: SiteContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteContent
     */
    omit?: SiteContentOmit<ExtArgs> | null
    /**
     * The data needed to create a SiteContent.
     */
    data: XOR<SiteContentCreateInput, SiteContentUncheckedCreateInput>
  }

  /**
   * SiteContent createMany
   */
  export type SiteContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteContents.
     */
    data: SiteContentCreateManyInput | SiteContentCreateManyInput[]
  }

  /**
   * SiteContent update
   */
  export type SiteContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteContent
     */
    select?: SiteContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteContent
     */
    omit?: SiteContentOmit<ExtArgs> | null
    /**
     * The data needed to update a SiteContent.
     */
    data: XOR<SiteContentUpdateInput, SiteContentUncheckedUpdateInput>
    /**
     * Choose, which SiteContent to update.
     */
    where: SiteContentWhereUniqueInput
  }

  /**
   * SiteContent updateMany
   */
  export type SiteContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteContents.
     */
    data: XOR<SiteContentUpdateManyMutationInput, SiteContentUncheckedUpdateManyInput>
    /**
     * Filter which SiteContents to update
     */
    where?: SiteContentWhereInput
    /**
     * Limit how many SiteContents to update.
     */
    limit?: number
  }

  /**
   * SiteContent upsert
   */
  export type SiteContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteContent
     */
    select?: SiteContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteContent
     */
    omit?: SiteContentOmit<ExtArgs> | null
    /**
     * The filter to search for the SiteContent to update in case it exists.
     */
    where: SiteContentWhereUniqueInput
    /**
     * In case the SiteContent found by the `where` argument doesn't exist, create a new SiteContent with this data.
     */
    create: XOR<SiteContentCreateInput, SiteContentUncheckedCreateInput>
    /**
     * In case the SiteContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteContentUpdateInput, SiteContentUncheckedUpdateInput>
  }

  /**
   * SiteContent delete
   */
  export type SiteContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteContent
     */
    select?: SiteContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteContent
     */
    omit?: SiteContentOmit<ExtArgs> | null
    /**
     * Filter which SiteContent to delete.
     */
    where: SiteContentWhereUniqueInput
  }

  /**
   * SiteContent deleteMany
   */
  export type SiteContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteContents to delete
     */
    where?: SiteContentWhereInput
    /**
     * Limit how many SiteContents to delete.
     */
    limit?: number
  }

  /**
   * SiteContent findRaw
   */
  export type SiteContentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SiteContent aggregateRaw
   */
  export type SiteContentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SiteContent without action
   */
  export type SiteContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteContent
     */
    select?: SiteContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteContent
     */
    omit?: SiteContentOmit<ExtArgs> | null
  }


  /**
   * Model ContentBlock
   */

  export type AggregateContentBlock = {
    _count: ContentBlockCountAggregateOutputType | null
    _min: ContentBlockMinAggregateOutputType | null
    _max: ContentBlockMaxAggregateOutputType | null
  }

  export type ContentBlockMinAggregateOutputType = {
    id: string | null
    pageSlug: string | null
    key: string | null
    locale: string | null
    type: string | null
    value: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentBlockMaxAggregateOutputType = {
    id: string | null
    pageSlug: string | null
    key: string | null
    locale: string | null
    type: string | null
    value: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentBlockCountAggregateOutputType = {
    id: number
    pageSlug: number
    key: number
    locale: number
    type: number
    value: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentBlockMinAggregateInputType = {
    id?: true
    pageSlug?: true
    key?: true
    locale?: true
    type?: true
    value?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentBlockMaxAggregateInputType = {
    id?: true
    pageSlug?: true
    key?: true
    locale?: true
    type?: true
    value?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentBlockCountAggregateInputType = {
    id?: true
    pageSlug?: true
    key?: true
    locale?: true
    type?: true
    value?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentBlock to aggregate.
     */
    where?: ContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentBlocks to fetch.
     */
    orderBy?: ContentBlockOrderByWithRelationInput | ContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentBlocks
    **/
    _count?: true | ContentBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentBlockMaxAggregateInputType
  }

  export type GetContentBlockAggregateType<T extends ContentBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateContentBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentBlock[P]>
      : GetScalarType<T[P], AggregateContentBlock[P]>
  }




  export type ContentBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentBlockWhereInput
    orderBy?: ContentBlockOrderByWithAggregationInput | ContentBlockOrderByWithAggregationInput[]
    by: ContentBlockScalarFieldEnum[] | ContentBlockScalarFieldEnum
    having?: ContentBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentBlockCountAggregateInputType | true
    _min?: ContentBlockMinAggregateInputType
    _max?: ContentBlockMaxAggregateInputType
  }

  export type ContentBlockGroupByOutputType = {
    id: string
    pageSlug: string
    key: string
    locale: string
    type: string
    value: string
    updatedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContentBlockCountAggregateOutputType | null
    _min: ContentBlockMinAggregateOutputType | null
    _max: ContentBlockMaxAggregateOutputType | null
  }

  type GetContentBlockGroupByPayload<T extends ContentBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentBlockGroupByOutputType[P]>
            : GetScalarType<T[P], ContentBlockGroupByOutputType[P]>
        }
      >
    >


  export type ContentBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageSlug?: boolean
    key?: boolean
    locale?: boolean
    type?: boolean
    value?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updater?: boolean | ContentBlock$updaterArgs<ExtArgs>
    history?: boolean | ContentBlock$historyArgs<ExtArgs>
    _count?: boolean | ContentBlockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentBlock"]>



  export type ContentBlockSelectScalar = {
    id?: boolean
    pageSlug?: boolean
    key?: boolean
    locale?: boolean
    type?: boolean
    value?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pageSlug" | "key" | "locale" | "type" | "value" | "updatedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["contentBlock"]>
  export type ContentBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    updater?: boolean | ContentBlock$updaterArgs<ExtArgs>
    history?: boolean | ContentBlock$historyArgs<ExtArgs>
    _count?: boolean | ContentBlockCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ContentBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentBlock"
    objects: {
      updater: Prisma.$UserPayload<ExtArgs> | null
      history: Prisma.$ContentHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pageSlug: string
      key: string
      locale: string
      type: string
      value: string
      updatedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contentBlock"]>
    composites: {}
  }

  type ContentBlockGetPayload<S extends boolean | null | undefined | ContentBlockDefaultArgs> = $Result.GetResult<Prisma.$ContentBlockPayload, S>

  type ContentBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentBlockCountAggregateInputType | true
    }

  export interface ContentBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentBlock'], meta: { name: 'ContentBlock' } }
    /**
     * Find zero or one ContentBlock that matches the filter.
     * @param {ContentBlockFindUniqueArgs} args - Arguments to find a ContentBlock
     * @example
     * // Get one ContentBlock
     * const contentBlock = await prisma.contentBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentBlockFindUniqueArgs>(args: SelectSubset<T, ContentBlockFindUniqueArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentBlockFindUniqueOrThrowArgs} args - Arguments to find a ContentBlock
     * @example
     * // Get one ContentBlock
     * const contentBlock = await prisma.contentBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockFindFirstArgs} args - Arguments to find a ContentBlock
     * @example
     * // Get one ContentBlock
     * const contentBlock = await prisma.contentBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentBlockFindFirstArgs>(args?: SelectSubset<T, ContentBlockFindFirstArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockFindFirstOrThrowArgs} args - Arguments to find a ContentBlock
     * @example
     * // Get one ContentBlock
     * const contentBlock = await prisma.contentBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentBlocks
     * const contentBlocks = await prisma.contentBlock.findMany()
     * 
     * // Get first 10 ContentBlocks
     * const contentBlocks = await prisma.contentBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentBlockWithIdOnly = await prisma.contentBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentBlockFindManyArgs>(args?: SelectSubset<T, ContentBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentBlock.
     * @param {ContentBlockCreateArgs} args - Arguments to create a ContentBlock.
     * @example
     * // Create one ContentBlock
     * const ContentBlock = await prisma.contentBlock.create({
     *   data: {
     *     // ... data to create a ContentBlock
     *   }
     * })
     * 
     */
    create<T extends ContentBlockCreateArgs>(args: SelectSubset<T, ContentBlockCreateArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentBlocks.
     * @param {ContentBlockCreateManyArgs} args - Arguments to create many ContentBlocks.
     * @example
     * // Create many ContentBlocks
     * const contentBlock = await prisma.contentBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentBlockCreateManyArgs>(args?: SelectSubset<T, ContentBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContentBlock.
     * @param {ContentBlockDeleteArgs} args - Arguments to delete one ContentBlock.
     * @example
     * // Delete one ContentBlock
     * const ContentBlock = await prisma.contentBlock.delete({
     *   where: {
     *     // ... filter to delete one ContentBlock
     *   }
     * })
     * 
     */
    delete<T extends ContentBlockDeleteArgs>(args: SelectSubset<T, ContentBlockDeleteArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentBlock.
     * @param {ContentBlockUpdateArgs} args - Arguments to update one ContentBlock.
     * @example
     * // Update one ContentBlock
     * const contentBlock = await prisma.contentBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentBlockUpdateArgs>(args: SelectSubset<T, ContentBlockUpdateArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentBlocks.
     * @param {ContentBlockDeleteManyArgs} args - Arguments to filter ContentBlocks to delete.
     * @example
     * // Delete a few ContentBlocks
     * const { count } = await prisma.contentBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentBlockDeleteManyArgs>(args?: SelectSubset<T, ContentBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentBlocks
     * const contentBlock = await prisma.contentBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentBlockUpdateManyArgs>(args: SelectSubset<T, ContentBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContentBlock.
     * @param {ContentBlockUpsertArgs} args - Arguments to update or create a ContentBlock.
     * @example
     * // Update or create a ContentBlock
     * const contentBlock = await prisma.contentBlock.upsert({
     *   create: {
     *     // ... data to create a ContentBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentBlock we want to update
     *   }
     * })
     */
    upsert<T extends ContentBlockUpsertArgs>(args: SelectSubset<T, ContentBlockUpsertArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentBlocks that matches the filter.
     * @param {ContentBlockFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const contentBlock = await prisma.contentBlock.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ContentBlockFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ContentBlock.
     * @param {ContentBlockAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const contentBlock = await prisma.contentBlock.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ContentBlockAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ContentBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockCountArgs} args - Arguments to filter ContentBlocks to count.
     * @example
     * // Count the number of ContentBlocks
     * const count = await prisma.contentBlock.count({
     *   where: {
     *     // ... the filter for the ContentBlocks we want to count
     *   }
     * })
    **/
    count<T extends ContentBlockCountArgs>(
      args?: Subset<T, ContentBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentBlockAggregateArgs>(args: Subset<T, ContentBlockAggregateArgs>): Prisma.PrismaPromise<GetContentBlockAggregateType<T>>

    /**
     * Group by ContentBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentBlockGroupByArgs['orderBy'] }
        : { orderBy?: ContentBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentBlock model
   */
  readonly fields: ContentBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    updater<T extends ContentBlock$updaterArgs<ExtArgs> = {}>(args?: Subset<T, ContentBlock$updaterArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    history<T extends ContentBlock$historyArgs<ExtArgs> = {}>(args?: Subset<T, ContentBlock$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentBlock model
   */
  interface ContentBlockFieldRefs {
    readonly id: FieldRef<"ContentBlock", 'String'>
    readonly pageSlug: FieldRef<"ContentBlock", 'String'>
    readonly key: FieldRef<"ContentBlock", 'String'>
    readonly locale: FieldRef<"ContentBlock", 'String'>
    readonly type: FieldRef<"ContentBlock", 'String'>
    readonly value: FieldRef<"ContentBlock", 'String'>
    readonly updatedBy: FieldRef<"ContentBlock", 'String'>
    readonly createdAt: FieldRef<"ContentBlock", 'DateTime'>
    readonly updatedAt: FieldRef<"ContentBlock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContentBlock findUnique
   */
  export type ContentBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which ContentBlock to fetch.
     */
    where: ContentBlockWhereUniqueInput
  }

  /**
   * ContentBlock findUniqueOrThrow
   */
  export type ContentBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which ContentBlock to fetch.
     */
    where: ContentBlockWhereUniqueInput
  }

  /**
   * ContentBlock findFirst
   */
  export type ContentBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which ContentBlock to fetch.
     */
    where?: ContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentBlocks to fetch.
     */
    orderBy?: ContentBlockOrderByWithRelationInput | ContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentBlocks.
     */
    cursor?: ContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentBlocks.
     */
    distinct?: ContentBlockScalarFieldEnum | ContentBlockScalarFieldEnum[]
  }

  /**
   * ContentBlock findFirstOrThrow
   */
  export type ContentBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which ContentBlock to fetch.
     */
    where?: ContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentBlocks to fetch.
     */
    orderBy?: ContentBlockOrderByWithRelationInput | ContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentBlocks.
     */
    cursor?: ContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentBlocks.
     */
    distinct?: ContentBlockScalarFieldEnum | ContentBlockScalarFieldEnum[]
  }

  /**
   * ContentBlock findMany
   */
  export type ContentBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which ContentBlocks to fetch.
     */
    where?: ContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentBlocks to fetch.
     */
    orderBy?: ContentBlockOrderByWithRelationInput | ContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentBlocks.
     */
    cursor?: ContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentBlocks.
     */
    skip?: number
    distinct?: ContentBlockScalarFieldEnum | ContentBlockScalarFieldEnum[]
  }

  /**
   * ContentBlock create
   */
  export type ContentBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentBlock.
     */
    data: XOR<ContentBlockCreateInput, ContentBlockUncheckedCreateInput>
  }

  /**
   * ContentBlock createMany
   */
  export type ContentBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentBlocks.
     */
    data: ContentBlockCreateManyInput | ContentBlockCreateManyInput[]
  }

  /**
   * ContentBlock update
   */
  export type ContentBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentBlock.
     */
    data: XOR<ContentBlockUpdateInput, ContentBlockUncheckedUpdateInput>
    /**
     * Choose, which ContentBlock to update.
     */
    where: ContentBlockWhereUniqueInput
  }

  /**
   * ContentBlock updateMany
   */
  export type ContentBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentBlocks.
     */
    data: XOR<ContentBlockUpdateManyMutationInput, ContentBlockUncheckedUpdateManyInput>
    /**
     * Filter which ContentBlocks to update
     */
    where?: ContentBlockWhereInput
    /**
     * Limit how many ContentBlocks to update.
     */
    limit?: number
  }

  /**
   * ContentBlock upsert
   */
  export type ContentBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentBlock to update in case it exists.
     */
    where: ContentBlockWhereUniqueInput
    /**
     * In case the ContentBlock found by the `where` argument doesn't exist, create a new ContentBlock with this data.
     */
    create: XOR<ContentBlockCreateInput, ContentBlockUncheckedCreateInput>
    /**
     * In case the ContentBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentBlockUpdateInput, ContentBlockUncheckedUpdateInput>
  }

  /**
   * ContentBlock delete
   */
  export type ContentBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * Filter which ContentBlock to delete.
     */
    where: ContentBlockWhereUniqueInput
  }

  /**
   * ContentBlock deleteMany
   */
  export type ContentBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentBlocks to delete
     */
    where?: ContentBlockWhereInput
    /**
     * Limit how many ContentBlocks to delete.
     */
    limit?: number
  }

  /**
   * ContentBlock findRaw
   */
  export type ContentBlockFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ContentBlock aggregateRaw
   */
  export type ContentBlockAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ContentBlock.updater
   */
  export type ContentBlock$updaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ContentBlock.history
   */
  export type ContentBlock$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    where?: ContentHistoryWhereInput
    orderBy?: ContentHistoryOrderByWithRelationInput | ContentHistoryOrderByWithRelationInput[]
    cursor?: ContentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentHistoryScalarFieldEnum | ContentHistoryScalarFieldEnum[]
  }

  /**
   * ContentBlock without action
   */
  export type ContentBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    sizeBytes: number | null
    width: number | null
    height: number | null
  }

  export type MediaSumAggregateOutputType = {
    sizeBytes: number | null
    width: number | null
    height: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    provider: string | null
    publicId: string | null
    url: string | null
    mime: string | null
    sizeBytes: number | null
    width: number | null
    height: number | null
    altText: string | null
    folder: string | null
    uploadedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    provider: string | null
    publicId: string | null
    url: string | null
    mime: string | null
    sizeBytes: number | null
    width: number | null
    height: number | null
    altText: string | null
    folder: string | null
    uploadedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    provider: number
    publicId: number
    url: number
    mime: number
    sizeBytes: number
    width: number
    height: number
    altText: number
    folder: number
    uploadedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    sizeBytes?: true
    width?: true
    height?: true
  }

  export type MediaSumAggregateInputType = {
    sizeBytes?: true
    width?: true
    height?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    provider?: true
    publicId?: true
    url?: true
    mime?: true
    sizeBytes?: true
    width?: true
    height?: true
    altText?: true
    folder?: true
    uploadedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    provider?: true
    publicId?: true
    url?: true
    mime?: true
    sizeBytes?: true
    width?: true
    height?: true
    altText?: true
    folder?: true
    uploadedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    provider?: true
    publicId?: true
    url?: true
    mime?: true
    sizeBytes?: true
    width?: true
    height?: true
    altText?: true
    folder?: true
    uploadedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    provider: string
    publicId: string
    url: string
    mime: string
    sizeBytes: number
    width: number | null
    height: number | null
    altText: string | null
    folder: string
    uploadedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    publicId?: boolean
    url?: boolean
    mime?: boolean
    sizeBytes?: boolean
    width?: boolean
    height?: boolean
    altText?: boolean
    folder?: boolean
    uploadedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploader?: boolean | Media$uploaderArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>



  export type MediaSelectScalar = {
    id?: boolean
    provider?: boolean
    publicId?: boolean
    url?: boolean
    mime?: boolean
    sizeBytes?: boolean
    width?: boolean
    height?: boolean
    altText?: boolean
    folder?: boolean
    uploadedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "publicId" | "url" | "mime" | "sizeBytes" | "width" | "height" | "altText" | "folder" | "uploadedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | Media$uploaderArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      uploader: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: string
      publicId: string
      url: string
      mime: string
      sizeBytes: number
      width: number | null
      height: number | null
      altText: string | null
      folder: string
      uploadedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * @param {MediaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const media = await prisma.media.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MediaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Media.
     * @param {MediaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const media = await prisma.media.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MediaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploader<T extends Media$uploaderArgs<ExtArgs> = {}>(args?: Subset<T, Media$uploaderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly provider: FieldRef<"Media", 'String'>
    readonly publicId: FieldRef<"Media", 'String'>
    readonly url: FieldRef<"Media", 'String'>
    readonly mime: FieldRef<"Media", 'String'>
    readonly sizeBytes: FieldRef<"Media", 'Int'>
    readonly width: FieldRef<"Media", 'Int'>
    readonly height: FieldRef<"Media", 'Int'>
    readonly altText: FieldRef<"Media", 'String'>
    readonly folder: FieldRef<"Media", 'String'>
    readonly uploadedBy: FieldRef<"Media", 'String'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
    readonly updatedAt: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media findRaw
   */
  export type MediaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Media aggregateRaw
   */
  export type MediaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Media.uploader
   */
  export type Media$uploaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model ContentHistory
   */

  export type AggregateContentHistory = {
    _count: ContentHistoryCountAggregateOutputType | null
    _min: ContentHistoryMinAggregateOutputType | null
    _max: ContentHistoryMaxAggregateOutputType | null
  }

  export type ContentHistoryMinAggregateOutputType = {
    id: string | null
    blockId: string | null
    oldValue: string | null
    newValue: string | null
    changedBy: string | null
    createdAt: Date | null
  }

  export type ContentHistoryMaxAggregateOutputType = {
    id: string | null
    blockId: string | null
    oldValue: string | null
    newValue: string | null
    changedBy: string | null
    createdAt: Date | null
  }

  export type ContentHistoryCountAggregateOutputType = {
    id: number
    blockId: number
    oldValue: number
    newValue: number
    changedBy: number
    createdAt: number
    _all: number
  }


  export type ContentHistoryMinAggregateInputType = {
    id?: true
    blockId?: true
    oldValue?: true
    newValue?: true
    changedBy?: true
    createdAt?: true
  }

  export type ContentHistoryMaxAggregateInputType = {
    id?: true
    blockId?: true
    oldValue?: true
    newValue?: true
    changedBy?: true
    createdAt?: true
  }

  export type ContentHistoryCountAggregateInputType = {
    id?: true
    blockId?: true
    oldValue?: true
    newValue?: true
    changedBy?: true
    createdAt?: true
    _all?: true
  }

  export type ContentHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentHistory to aggregate.
     */
    where?: ContentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentHistories to fetch.
     */
    orderBy?: ContentHistoryOrderByWithRelationInput | ContentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentHistories
    **/
    _count?: true | ContentHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentHistoryMaxAggregateInputType
  }

  export type GetContentHistoryAggregateType<T extends ContentHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateContentHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentHistory[P]>
      : GetScalarType<T[P], AggregateContentHistory[P]>
  }




  export type ContentHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentHistoryWhereInput
    orderBy?: ContentHistoryOrderByWithAggregationInput | ContentHistoryOrderByWithAggregationInput[]
    by: ContentHistoryScalarFieldEnum[] | ContentHistoryScalarFieldEnum
    having?: ContentHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentHistoryCountAggregateInputType | true
    _min?: ContentHistoryMinAggregateInputType
    _max?: ContentHistoryMaxAggregateInputType
  }

  export type ContentHistoryGroupByOutputType = {
    id: string
    blockId: string
    oldValue: string | null
    newValue: string
    changedBy: string | null
    createdAt: Date
    _count: ContentHistoryCountAggregateOutputType | null
    _min: ContentHistoryMinAggregateOutputType | null
    _max: ContentHistoryMaxAggregateOutputType | null
  }

  type GetContentHistoryGroupByPayload<T extends ContentHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ContentHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ContentHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockId?: boolean
    oldValue?: boolean
    newValue?: boolean
    changedBy?: boolean
    createdAt?: boolean
    block?: boolean | ContentBlockDefaultArgs<ExtArgs>
    changer?: boolean | ContentHistory$changerArgs<ExtArgs>
  }, ExtArgs["result"]["contentHistory"]>



  export type ContentHistorySelectScalar = {
    id?: boolean
    blockId?: boolean
    oldValue?: boolean
    newValue?: boolean
    changedBy?: boolean
    createdAt?: boolean
  }

  export type ContentHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blockId" | "oldValue" | "newValue" | "changedBy" | "createdAt", ExtArgs["result"]["contentHistory"]>
  export type ContentHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    block?: boolean | ContentBlockDefaultArgs<ExtArgs>
    changer?: boolean | ContentHistory$changerArgs<ExtArgs>
  }

  export type $ContentHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentHistory"
    objects: {
      block: Prisma.$ContentBlockPayload<ExtArgs>
      changer: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blockId: string
      oldValue: string | null
      newValue: string
      changedBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["contentHistory"]>
    composites: {}
  }

  type ContentHistoryGetPayload<S extends boolean | null | undefined | ContentHistoryDefaultArgs> = $Result.GetResult<Prisma.$ContentHistoryPayload, S>

  type ContentHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentHistoryCountAggregateInputType | true
    }

  export interface ContentHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentHistory'], meta: { name: 'ContentHistory' } }
    /**
     * Find zero or one ContentHistory that matches the filter.
     * @param {ContentHistoryFindUniqueArgs} args - Arguments to find a ContentHistory
     * @example
     * // Get one ContentHistory
     * const contentHistory = await prisma.contentHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentHistoryFindUniqueArgs>(args: SelectSubset<T, ContentHistoryFindUniqueArgs<ExtArgs>>): Prisma__ContentHistoryClient<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentHistoryFindUniqueOrThrowArgs} args - Arguments to find a ContentHistory
     * @example
     * // Get one ContentHistory
     * const contentHistory = await prisma.contentHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentHistoryClient<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentHistoryFindFirstArgs} args - Arguments to find a ContentHistory
     * @example
     * // Get one ContentHistory
     * const contentHistory = await prisma.contentHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentHistoryFindFirstArgs>(args?: SelectSubset<T, ContentHistoryFindFirstArgs<ExtArgs>>): Prisma__ContentHistoryClient<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentHistoryFindFirstOrThrowArgs} args - Arguments to find a ContentHistory
     * @example
     * // Get one ContentHistory
     * const contentHistory = await prisma.contentHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentHistoryClient<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentHistories
     * const contentHistories = await prisma.contentHistory.findMany()
     * 
     * // Get first 10 ContentHistories
     * const contentHistories = await prisma.contentHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentHistoryWithIdOnly = await prisma.contentHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentHistoryFindManyArgs>(args?: SelectSubset<T, ContentHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentHistory.
     * @param {ContentHistoryCreateArgs} args - Arguments to create a ContentHistory.
     * @example
     * // Create one ContentHistory
     * const ContentHistory = await prisma.contentHistory.create({
     *   data: {
     *     // ... data to create a ContentHistory
     *   }
     * })
     * 
     */
    create<T extends ContentHistoryCreateArgs>(args: SelectSubset<T, ContentHistoryCreateArgs<ExtArgs>>): Prisma__ContentHistoryClient<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentHistories.
     * @param {ContentHistoryCreateManyArgs} args - Arguments to create many ContentHistories.
     * @example
     * // Create many ContentHistories
     * const contentHistory = await prisma.contentHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentHistoryCreateManyArgs>(args?: SelectSubset<T, ContentHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContentHistory.
     * @param {ContentHistoryDeleteArgs} args - Arguments to delete one ContentHistory.
     * @example
     * // Delete one ContentHistory
     * const ContentHistory = await prisma.contentHistory.delete({
     *   where: {
     *     // ... filter to delete one ContentHistory
     *   }
     * })
     * 
     */
    delete<T extends ContentHistoryDeleteArgs>(args: SelectSubset<T, ContentHistoryDeleteArgs<ExtArgs>>): Prisma__ContentHistoryClient<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentHistory.
     * @param {ContentHistoryUpdateArgs} args - Arguments to update one ContentHistory.
     * @example
     * // Update one ContentHistory
     * const contentHistory = await prisma.contentHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentHistoryUpdateArgs>(args: SelectSubset<T, ContentHistoryUpdateArgs<ExtArgs>>): Prisma__ContentHistoryClient<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentHistories.
     * @param {ContentHistoryDeleteManyArgs} args - Arguments to filter ContentHistories to delete.
     * @example
     * // Delete a few ContentHistories
     * const { count } = await prisma.contentHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentHistoryDeleteManyArgs>(args?: SelectSubset<T, ContentHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentHistories
     * const contentHistory = await prisma.contentHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentHistoryUpdateManyArgs>(args: SelectSubset<T, ContentHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContentHistory.
     * @param {ContentHistoryUpsertArgs} args - Arguments to update or create a ContentHistory.
     * @example
     * // Update or create a ContentHistory
     * const contentHistory = await prisma.contentHistory.upsert({
     *   create: {
     *     // ... data to create a ContentHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentHistory we want to update
     *   }
     * })
     */
    upsert<T extends ContentHistoryUpsertArgs>(args: SelectSubset<T, ContentHistoryUpsertArgs<ExtArgs>>): Prisma__ContentHistoryClient<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentHistories that matches the filter.
     * @param {ContentHistoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const contentHistory = await prisma.contentHistory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ContentHistoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ContentHistory.
     * @param {ContentHistoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const contentHistory = await prisma.contentHistory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ContentHistoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ContentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentHistoryCountArgs} args - Arguments to filter ContentHistories to count.
     * @example
     * // Count the number of ContentHistories
     * const count = await prisma.contentHistory.count({
     *   where: {
     *     // ... the filter for the ContentHistories we want to count
     *   }
     * })
    **/
    count<T extends ContentHistoryCountArgs>(
      args?: Subset<T, ContentHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentHistoryAggregateArgs>(args: Subset<T, ContentHistoryAggregateArgs>): Prisma.PrismaPromise<GetContentHistoryAggregateType<T>>

    /**
     * Group by ContentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ContentHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentHistory model
   */
  readonly fields: ContentHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    block<T extends ContentBlockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentBlockDefaultArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    changer<T extends ContentHistory$changerArgs<ExtArgs> = {}>(args?: Subset<T, ContentHistory$changerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentHistory model
   */
  interface ContentHistoryFieldRefs {
    readonly id: FieldRef<"ContentHistory", 'String'>
    readonly blockId: FieldRef<"ContentHistory", 'String'>
    readonly oldValue: FieldRef<"ContentHistory", 'String'>
    readonly newValue: FieldRef<"ContentHistory", 'String'>
    readonly changedBy: FieldRef<"ContentHistory", 'String'>
    readonly createdAt: FieldRef<"ContentHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContentHistory findUnique
   */
  export type ContentHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ContentHistory to fetch.
     */
    where: ContentHistoryWhereUniqueInput
  }

  /**
   * ContentHistory findUniqueOrThrow
   */
  export type ContentHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ContentHistory to fetch.
     */
    where: ContentHistoryWhereUniqueInput
  }

  /**
   * ContentHistory findFirst
   */
  export type ContentHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ContentHistory to fetch.
     */
    where?: ContentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentHistories to fetch.
     */
    orderBy?: ContentHistoryOrderByWithRelationInput | ContentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentHistories.
     */
    cursor?: ContentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentHistories.
     */
    distinct?: ContentHistoryScalarFieldEnum | ContentHistoryScalarFieldEnum[]
  }

  /**
   * ContentHistory findFirstOrThrow
   */
  export type ContentHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ContentHistory to fetch.
     */
    where?: ContentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentHistories to fetch.
     */
    orderBy?: ContentHistoryOrderByWithRelationInput | ContentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentHistories.
     */
    cursor?: ContentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentHistories.
     */
    distinct?: ContentHistoryScalarFieldEnum | ContentHistoryScalarFieldEnum[]
  }

  /**
   * ContentHistory findMany
   */
  export type ContentHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ContentHistories to fetch.
     */
    where?: ContentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentHistories to fetch.
     */
    orderBy?: ContentHistoryOrderByWithRelationInput | ContentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentHistories.
     */
    cursor?: ContentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentHistories.
     */
    skip?: number
    distinct?: ContentHistoryScalarFieldEnum | ContentHistoryScalarFieldEnum[]
  }

  /**
   * ContentHistory create
   */
  export type ContentHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentHistory.
     */
    data: XOR<ContentHistoryCreateInput, ContentHistoryUncheckedCreateInput>
  }

  /**
   * ContentHistory createMany
   */
  export type ContentHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentHistories.
     */
    data: ContentHistoryCreateManyInput | ContentHistoryCreateManyInput[]
  }

  /**
   * ContentHistory update
   */
  export type ContentHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentHistory.
     */
    data: XOR<ContentHistoryUpdateInput, ContentHistoryUncheckedUpdateInput>
    /**
     * Choose, which ContentHistory to update.
     */
    where: ContentHistoryWhereUniqueInput
  }

  /**
   * ContentHistory updateMany
   */
  export type ContentHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentHistories.
     */
    data: XOR<ContentHistoryUpdateManyMutationInput, ContentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ContentHistories to update
     */
    where?: ContentHistoryWhereInput
    /**
     * Limit how many ContentHistories to update.
     */
    limit?: number
  }

  /**
   * ContentHistory upsert
   */
  export type ContentHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentHistory to update in case it exists.
     */
    where: ContentHistoryWhereUniqueInput
    /**
     * In case the ContentHistory found by the `where` argument doesn't exist, create a new ContentHistory with this data.
     */
    create: XOR<ContentHistoryCreateInput, ContentHistoryUncheckedCreateInput>
    /**
     * In case the ContentHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentHistoryUpdateInput, ContentHistoryUncheckedUpdateInput>
  }

  /**
   * ContentHistory delete
   */
  export type ContentHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * Filter which ContentHistory to delete.
     */
    where: ContentHistoryWhereUniqueInput
  }

  /**
   * ContentHistory deleteMany
   */
  export type ContentHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentHistories to delete
     */
    where?: ContentHistoryWhereInput
    /**
     * Limit how many ContentHistories to delete.
     */
    limit?: number
  }

  /**
   * ContentHistory findRaw
   */
  export type ContentHistoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ContentHistory aggregateRaw
   */
  export type ContentHistoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ContentHistory.changer
   */
  export type ContentHistory$changerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ContentHistory without action
   */
  export type ContentHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    tokenHash: 'tokenHash',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    revokedAt: 'revokedAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const NewsPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    content: 'content',
    coverImage: 'coverImage',
    category: 'category',
    tags: 'tags',
    isFeatured: 'isFeatured',
    isPublished: 'isPublished',
    publishedAt: 'publishedAt',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsPostScalarFieldEnum = (typeof NewsPostScalarFieldEnum)[keyof typeof NewsPostScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    number: 'number',
    role: 'role',
    position: 'position',
    heightCm: 'heightCm',
    weightKg: 'weightKg',
    birthYear: 'birthYear',
    hometown: 'hometown',
    photo: 'photo',
    actionPhoto: 'actionPhoto',
    bio: 'bio',
    academicYear: 'academicYear',
    isCaptain: 'isCaptain',
    ppg: 'ppg',
    rpg: 'rpg',
    apg: 'apg',
    profile: 'profile',
    sortOrder: 'sortOrder',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    competition: 'competition',
    round: 'round',
    opponent: 'opponent',
    opponentShort: 'opponentShort',
    opponentLogo: 'opponentLogo',
    isHome: 'isHome',
    tipsAt: 'tipsAt',
    venue: 'venue',
    status: 'status',
    teamScore: 'teamScore',
    opponentScore: 'opponentScore',
    note: 'note',
    streamUrl: 'streamUrl',
    ticketUrl: 'ticketUrl',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const LiveGameScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    status: 'status',
    period: 'period',
    clockSeconds: 'clockSeconds',
    clockRunning: 'clockRunning',
    teamScore: 'teamScore',
    opponentScore: 'opponentScore',
    teamFouls: 'teamFouls',
    opponentFouls: 'opponentFouls',
    timeouts: 'timeouts',
    lineup: 'lineup',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type LiveGameScalarFieldEnum = (typeof LiveGameScalarFieldEnum)[keyof typeof LiveGameScalarFieldEnum]


  export const LiveGameEventScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    type: 'type',
    payload: 'payload',
    reversed: 'reversed',
    createdAt: 'createdAt'
  };

  export type LiveGameEventScalarFieldEnum = (typeof LiveGameEventScalarFieldEnum)[keyof typeof LiveGameEventScalarFieldEnum]


  export const StandingRowScalarFieldEnum: {
    id: 'id',
    teamName: 'teamName',
    teamShort: 'teamShort',
    teamLogo: 'teamLogo',
    wins: 'wins',
    losses: 'losses',
    sortOrder: 'sortOrder',
    isCurrent: 'isCurrent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StandingRowScalarFieldEnum = (typeof StandingRowScalarFieldEnum)[keyof typeof StandingRowScalarFieldEnum]


  export const PartnerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logo: 'logo',
    url: 'url',
    sortOrder: 'sortOrder',
    isVisible: 'isVisible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartnerScalarFieldEnum = (typeof PartnerScalarFieldEnum)[keyof typeof PartnerScalarFieldEnum]


  export const MediaAlbumScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    category: 'category',
    coverImage: 'coverImage',
    images: 'images',
    eventDate: 'eventDate',
    sortOrder: 'sortOrder',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MediaAlbumScalarFieldEnum = (typeof MediaAlbumScalarFieldEnum)[keyof typeof MediaAlbumScalarFieldEnum]


  export const ExecutiveScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    group: 'group',
    title: 'title',
    photo: 'photo',
    bio: 'bio',
    bullets: 'bullets',
    sections: 'sections',
    sortOrder: 'sortOrder',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExecutiveScalarFieldEnum = (typeof ExecutiveScalarFieldEnum)[keyof typeof ExecutiveScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    category: 'category',
    thumbnail: 'thumbnail',
    videoUrl: 'videoUrl',
    youtubeId: 'youtubeId',
    durationSec: 'durationSec',
    isFeatured: 'isFeatured',
    isPublished: 'isPublished',
    publishedAt: 'publishedAt',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const ShopProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    category: 'category',
    price: 'price',
    compareAtPrice: 'compareAtPrice',
    image: 'image',
    url: 'url',
    sizes: 'sizes',
    badge: 'badge',
    isVisible: 'isVisible',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShopProductScalarFieldEnum = (typeof ShopProductScalarFieldEnum)[keyof typeof ShopProductScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    customerName: 'customerName',
    phone: 'phone',
    email: 'email',
    note: 'note',
    items: 'items',
    total: 'total',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const SiteContentScalarFieldEnum: {
    id: 'id',
    page: 'page',
    section: 'section',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SiteContentScalarFieldEnum = (typeof SiteContentScalarFieldEnum)[keyof typeof SiteContentScalarFieldEnum]


  export const ContentBlockScalarFieldEnum: {
    id: 'id',
    pageSlug: 'pageSlug',
    key: 'key',
    locale: 'locale',
    type: 'type',
    value: 'value',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentBlockScalarFieldEnum = (typeof ContentBlockScalarFieldEnum)[keyof typeof ContentBlockScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    publicId: 'publicId',
    url: 'url',
    mime: 'mime',
    sizeBytes: 'sizeBytes',
    width: 'width',
    height: 'height',
    altText: 'altText',
    folder: 'folder',
    uploadedBy: 'uploadedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const ContentHistoryScalarFieldEnum: {
    id: 'id',
    blockId: 'blockId',
    oldValue: 'oldValue',
    newValue: 'newValue',
    changedBy: 'changedBy',
    createdAt: 'createdAt'
  };

  export type ContentHistoryScalarFieldEnum = (typeof ContentHistoryScalarFieldEnum)[keyof typeof ContentHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshTokens?: RefreshTokenListRelationFilter
    contentBlocks?: ContentBlockListRelationFilter
    contentEdits?: ContentHistoryListRelationFilter
    media?: MediaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    contentBlocks?: ContentBlockOrderByRelationAggregateInput
    contentEdits?: ContentHistoryOrderByRelationAggregateInput
    media?: MediaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshTokens?: RefreshTokenListRelationFilter
    contentBlocks?: ContentBlockListRelationFilter
    contentEdits?: ContentHistoryListRelationFilter
    media?: MediaListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    revokedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tokenHash">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    revokedAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    tokenHash?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"RefreshToken"> | Date | string | null
  }

  export type NewsPostWhereInput = {
    AND?: NewsPostWhereInput | NewsPostWhereInput[]
    OR?: NewsPostWhereInput[]
    NOT?: NewsPostWhereInput | NewsPostWhereInput[]
    id?: StringFilter<"NewsPost"> | string
    title?: StringFilter<"NewsPost"> | string
    slug?: StringFilter<"NewsPost"> | string
    excerpt?: StringFilter<"NewsPost"> | string
    content?: StringFilter<"NewsPost"> | string
    coverImage?: StringNullableFilter<"NewsPost"> | string | null
    category?: StringFilter<"NewsPost"> | string
    tags?: StringNullableListFilter<"NewsPost">
    isFeatured?: BoolFilter<"NewsPost"> | boolean
    isPublished?: BoolFilter<"NewsPost"> | boolean
    publishedAt?: DateTimeFilter<"NewsPost"> | Date | string
    sortOrder?: IntFilter<"NewsPost"> | number
    createdAt?: DateTimeFilter<"NewsPost"> | Date | string
    updatedAt?: DateTimeFilter<"NewsPost"> | Date | string
  }

  export type NewsPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    isFeatured?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: NewsPostWhereInput | NewsPostWhereInput[]
    OR?: NewsPostWhereInput[]
    NOT?: NewsPostWhereInput | NewsPostWhereInput[]
    title?: StringFilter<"NewsPost"> | string
    excerpt?: StringFilter<"NewsPost"> | string
    content?: StringFilter<"NewsPost"> | string
    coverImage?: StringNullableFilter<"NewsPost"> | string | null
    category?: StringFilter<"NewsPost"> | string
    tags?: StringNullableListFilter<"NewsPost">
    isFeatured?: BoolFilter<"NewsPost"> | boolean
    isPublished?: BoolFilter<"NewsPost"> | boolean
    publishedAt?: DateTimeFilter<"NewsPost"> | Date | string
    sortOrder?: IntFilter<"NewsPost"> | number
    createdAt?: DateTimeFilter<"NewsPost"> | Date | string
    updatedAt?: DateTimeFilter<"NewsPost"> | Date | string
  }, "id" | "slug">

  export type NewsPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    isFeatured?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsPostCountOrderByAggregateInput
    _avg?: NewsPostAvgOrderByAggregateInput
    _max?: NewsPostMaxOrderByAggregateInput
    _min?: NewsPostMinOrderByAggregateInput
    _sum?: NewsPostSumOrderByAggregateInput
  }

  export type NewsPostScalarWhereWithAggregatesInput = {
    AND?: NewsPostScalarWhereWithAggregatesInput | NewsPostScalarWhereWithAggregatesInput[]
    OR?: NewsPostScalarWhereWithAggregatesInput[]
    NOT?: NewsPostScalarWhereWithAggregatesInput | NewsPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsPost"> | string
    title?: StringWithAggregatesFilter<"NewsPost"> | string
    slug?: StringWithAggregatesFilter<"NewsPost"> | string
    excerpt?: StringWithAggregatesFilter<"NewsPost"> | string
    content?: StringWithAggregatesFilter<"NewsPost"> | string
    coverImage?: StringNullableWithAggregatesFilter<"NewsPost"> | string | null
    category?: StringWithAggregatesFilter<"NewsPost"> | string
    tags?: StringNullableListFilter<"NewsPost">
    isFeatured?: BoolWithAggregatesFilter<"NewsPost"> | boolean
    isPublished?: BoolWithAggregatesFilter<"NewsPost"> | boolean
    publishedAt?: DateTimeWithAggregatesFilter<"NewsPost"> | Date | string
    sortOrder?: IntWithAggregatesFilter<"NewsPost"> | number
    createdAt?: DateTimeWithAggregatesFilter<"NewsPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewsPost"> | Date | string
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: StringFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    slug?: StringFilter<"Player"> | string
    number?: IntNullableFilter<"Player"> | number | null
    role?: StringFilter<"Player"> | string
    position?: StringNullableFilter<"Player"> | string | null
    heightCm?: IntNullableFilter<"Player"> | number | null
    weightKg?: IntNullableFilter<"Player"> | number | null
    birthYear?: IntNullableFilter<"Player"> | number | null
    hometown?: StringNullableFilter<"Player"> | string | null
    photo?: StringNullableFilter<"Player"> | string | null
    actionPhoto?: StringNullableFilter<"Player"> | string | null
    bio?: StringNullableFilter<"Player"> | string | null
    academicYear?: StringNullableFilter<"Player"> | string | null
    isCaptain?: BoolFilter<"Player"> | boolean
    ppg?: FloatNullableFilter<"Player"> | number | null
    rpg?: FloatNullableFilter<"Player"> | number | null
    apg?: FloatNullableFilter<"Player"> | number | null
    profile?: JsonNullableFilter<"Player">
    sortOrder?: IntFilter<"Player"> | number
    isPublic?: BoolFilter<"Player"> | boolean
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    number?: SortOrder
    role?: SortOrder
    position?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    birthYear?: SortOrder
    hometown?: SortOrder
    photo?: SortOrder
    actionPhoto?: SortOrder
    bio?: SortOrder
    academicYear?: SortOrder
    isCaptain?: SortOrder
    ppg?: SortOrder
    rpg?: SortOrder
    apg?: SortOrder
    profile?: SortOrder
    sortOrder?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    name?: StringFilter<"Player"> | string
    number?: IntNullableFilter<"Player"> | number | null
    role?: StringFilter<"Player"> | string
    position?: StringNullableFilter<"Player"> | string | null
    heightCm?: IntNullableFilter<"Player"> | number | null
    weightKg?: IntNullableFilter<"Player"> | number | null
    birthYear?: IntNullableFilter<"Player"> | number | null
    hometown?: StringNullableFilter<"Player"> | string | null
    photo?: StringNullableFilter<"Player"> | string | null
    actionPhoto?: StringNullableFilter<"Player"> | string | null
    bio?: StringNullableFilter<"Player"> | string | null
    academicYear?: StringNullableFilter<"Player"> | string | null
    isCaptain?: BoolFilter<"Player"> | boolean
    ppg?: FloatNullableFilter<"Player"> | number | null
    rpg?: FloatNullableFilter<"Player"> | number | null
    apg?: FloatNullableFilter<"Player"> | number | null
    profile?: JsonNullableFilter<"Player">
    sortOrder?: IntFilter<"Player"> | number
    isPublic?: BoolFilter<"Player"> | boolean
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
  }, "id" | "slug">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    number?: SortOrder
    role?: SortOrder
    position?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    birthYear?: SortOrder
    hometown?: SortOrder
    photo?: SortOrder
    actionPhoto?: SortOrder
    bio?: SortOrder
    academicYear?: SortOrder
    isCaptain?: SortOrder
    ppg?: SortOrder
    rpg?: SortOrder
    apg?: SortOrder
    profile?: SortOrder
    sortOrder?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Player"> | string
    name?: StringWithAggregatesFilter<"Player"> | string
    slug?: StringWithAggregatesFilter<"Player"> | string
    number?: IntNullableWithAggregatesFilter<"Player"> | number | null
    role?: StringWithAggregatesFilter<"Player"> | string
    position?: StringNullableWithAggregatesFilter<"Player"> | string | null
    heightCm?: IntNullableWithAggregatesFilter<"Player"> | number | null
    weightKg?: IntNullableWithAggregatesFilter<"Player"> | number | null
    birthYear?: IntNullableWithAggregatesFilter<"Player"> | number | null
    hometown?: StringNullableWithAggregatesFilter<"Player"> | string | null
    photo?: StringNullableWithAggregatesFilter<"Player"> | string | null
    actionPhoto?: StringNullableWithAggregatesFilter<"Player"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Player"> | string | null
    academicYear?: StringNullableWithAggregatesFilter<"Player"> | string | null
    isCaptain?: BoolWithAggregatesFilter<"Player"> | boolean
    ppg?: FloatNullableWithAggregatesFilter<"Player"> | number | null
    rpg?: FloatNullableWithAggregatesFilter<"Player"> | number | null
    apg?: FloatNullableWithAggregatesFilter<"Player"> | number | null
    profile?: JsonNullableWithAggregatesFilter<"Player">
    sortOrder?: IntWithAggregatesFilter<"Player"> | number
    isPublic?: BoolWithAggregatesFilter<"Player"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    competition?: StringFilter<"Game"> | string
    round?: StringNullableFilter<"Game"> | string | null
    opponent?: StringFilter<"Game"> | string
    opponentShort?: StringNullableFilter<"Game"> | string | null
    opponentLogo?: StringNullableFilter<"Game"> | string | null
    isHome?: BoolFilter<"Game"> | boolean
    tipsAt?: DateTimeFilter<"Game"> | Date | string
    venue?: StringFilter<"Game"> | string
    status?: StringFilter<"Game"> | string
    teamScore?: IntNullableFilter<"Game"> | number | null
    opponentScore?: IntNullableFilter<"Game"> | number | null
    note?: StringNullableFilter<"Game"> | string | null
    streamUrl?: StringNullableFilter<"Game"> | string | null
    ticketUrl?: StringNullableFilter<"Game"> | string | null
    sortOrder?: IntFilter<"Game"> | number
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    competition?: SortOrder
    round?: SortOrder
    opponent?: SortOrder
    opponentShort?: SortOrder
    opponentLogo?: SortOrder
    isHome?: SortOrder
    tipsAt?: SortOrder
    venue?: SortOrder
    status?: SortOrder
    teamScore?: SortOrder
    opponentScore?: SortOrder
    note?: SortOrder
    streamUrl?: SortOrder
    ticketUrl?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    competition?: StringFilter<"Game"> | string
    round?: StringNullableFilter<"Game"> | string | null
    opponent?: StringFilter<"Game"> | string
    opponentShort?: StringNullableFilter<"Game"> | string | null
    opponentLogo?: StringNullableFilter<"Game"> | string | null
    isHome?: BoolFilter<"Game"> | boolean
    tipsAt?: DateTimeFilter<"Game"> | Date | string
    venue?: StringFilter<"Game"> | string
    status?: StringFilter<"Game"> | string
    teamScore?: IntNullableFilter<"Game"> | number | null
    opponentScore?: IntNullableFilter<"Game"> | number | null
    note?: StringNullableFilter<"Game"> | string | null
    streamUrl?: StringNullableFilter<"Game"> | string | null
    ticketUrl?: StringNullableFilter<"Game"> | string | null
    sortOrder?: IntFilter<"Game"> | number
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    competition?: SortOrder
    round?: SortOrder
    opponent?: SortOrder
    opponentShort?: SortOrder
    opponentLogo?: SortOrder
    isHome?: SortOrder
    tipsAt?: SortOrder
    venue?: SortOrder
    status?: SortOrder
    teamScore?: SortOrder
    opponentScore?: SortOrder
    note?: SortOrder
    streamUrl?: SortOrder
    ticketUrl?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    competition?: StringWithAggregatesFilter<"Game"> | string
    round?: StringNullableWithAggregatesFilter<"Game"> | string | null
    opponent?: StringWithAggregatesFilter<"Game"> | string
    opponentShort?: StringNullableWithAggregatesFilter<"Game"> | string | null
    opponentLogo?: StringNullableWithAggregatesFilter<"Game"> | string | null
    isHome?: BoolWithAggregatesFilter<"Game"> | boolean
    tipsAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    venue?: StringWithAggregatesFilter<"Game"> | string
    status?: StringWithAggregatesFilter<"Game"> | string
    teamScore?: IntNullableWithAggregatesFilter<"Game"> | number | null
    opponentScore?: IntNullableWithAggregatesFilter<"Game"> | number | null
    note?: StringNullableWithAggregatesFilter<"Game"> | string | null
    streamUrl?: StringNullableWithAggregatesFilter<"Game"> | string | null
    ticketUrl?: StringNullableWithAggregatesFilter<"Game"> | string | null
    sortOrder?: IntWithAggregatesFilter<"Game"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
  }

  export type LiveGameWhereInput = {
    AND?: LiveGameWhereInput | LiveGameWhereInput[]
    OR?: LiveGameWhereInput[]
    NOT?: LiveGameWhereInput | LiveGameWhereInput[]
    id?: StringFilter<"LiveGame"> | string
    gameId?: StringFilter<"LiveGame"> | string
    status?: StringFilter<"LiveGame"> | string
    period?: IntFilter<"LiveGame"> | number
    clockSeconds?: IntFilter<"LiveGame"> | number
    clockRunning?: BoolFilter<"LiveGame"> | boolean
    teamScore?: IntFilter<"LiveGame"> | number
    opponentScore?: IntFilter<"LiveGame"> | number
    teamFouls?: IntNullableListFilter<"LiveGame">
    opponentFouls?: IntNullableListFilter<"LiveGame">
    timeouts?: IntNullableListFilter<"LiveGame">
    lineup?: StringNullableListFilter<"LiveGame">
    startedAt?: DateTimeNullableFilter<"LiveGame"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"LiveGame"> | Date | string | null
    updatedAt?: DateTimeFilter<"LiveGame"> | Date | string
    createdAt?: DateTimeFilter<"LiveGame"> | Date | string
  }

  export type LiveGameOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    period?: SortOrder
    clockSeconds?: SortOrder
    clockRunning?: SortOrder
    teamScore?: SortOrder
    opponentScore?: SortOrder
    teamFouls?: SortOrder
    opponentFouls?: SortOrder
    timeouts?: SortOrder
    lineup?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveGameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gameId?: string
    AND?: LiveGameWhereInput | LiveGameWhereInput[]
    OR?: LiveGameWhereInput[]
    NOT?: LiveGameWhereInput | LiveGameWhereInput[]
    status?: StringFilter<"LiveGame"> | string
    period?: IntFilter<"LiveGame"> | number
    clockSeconds?: IntFilter<"LiveGame"> | number
    clockRunning?: BoolFilter<"LiveGame"> | boolean
    teamScore?: IntFilter<"LiveGame"> | number
    opponentScore?: IntFilter<"LiveGame"> | number
    teamFouls?: IntNullableListFilter<"LiveGame">
    opponentFouls?: IntNullableListFilter<"LiveGame">
    timeouts?: IntNullableListFilter<"LiveGame">
    lineup?: StringNullableListFilter<"LiveGame">
    startedAt?: DateTimeNullableFilter<"LiveGame"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"LiveGame"> | Date | string | null
    updatedAt?: DateTimeFilter<"LiveGame"> | Date | string
    createdAt?: DateTimeFilter<"LiveGame"> | Date | string
  }, "id" | "gameId">

  export type LiveGameOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    period?: SortOrder
    clockSeconds?: SortOrder
    clockRunning?: SortOrder
    teamScore?: SortOrder
    opponentScore?: SortOrder
    teamFouls?: SortOrder
    opponentFouls?: SortOrder
    timeouts?: SortOrder
    lineup?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: LiveGameCountOrderByAggregateInput
    _avg?: LiveGameAvgOrderByAggregateInput
    _max?: LiveGameMaxOrderByAggregateInput
    _min?: LiveGameMinOrderByAggregateInput
    _sum?: LiveGameSumOrderByAggregateInput
  }

  export type LiveGameScalarWhereWithAggregatesInput = {
    AND?: LiveGameScalarWhereWithAggregatesInput | LiveGameScalarWhereWithAggregatesInput[]
    OR?: LiveGameScalarWhereWithAggregatesInput[]
    NOT?: LiveGameScalarWhereWithAggregatesInput | LiveGameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LiveGame"> | string
    gameId?: StringWithAggregatesFilter<"LiveGame"> | string
    status?: StringWithAggregatesFilter<"LiveGame"> | string
    period?: IntWithAggregatesFilter<"LiveGame"> | number
    clockSeconds?: IntWithAggregatesFilter<"LiveGame"> | number
    clockRunning?: BoolWithAggregatesFilter<"LiveGame"> | boolean
    teamScore?: IntWithAggregatesFilter<"LiveGame"> | number
    opponentScore?: IntWithAggregatesFilter<"LiveGame"> | number
    teamFouls?: IntNullableListFilter<"LiveGame">
    opponentFouls?: IntNullableListFilter<"LiveGame">
    timeouts?: IntNullableListFilter<"LiveGame">
    lineup?: StringNullableListFilter<"LiveGame">
    startedAt?: DateTimeNullableWithAggregatesFilter<"LiveGame"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"LiveGame"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"LiveGame"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LiveGame"> | Date | string
  }

  export type LiveGameEventWhereInput = {
    AND?: LiveGameEventWhereInput | LiveGameEventWhereInput[]
    OR?: LiveGameEventWhereInput[]
    NOT?: LiveGameEventWhereInput | LiveGameEventWhereInput[]
    id?: StringFilter<"LiveGameEvent"> | string
    gameId?: StringFilter<"LiveGameEvent"> | string
    type?: StringFilter<"LiveGameEvent"> | string
    payload?: JsonFilter<"LiveGameEvent">
    reversed?: BoolFilter<"LiveGameEvent"> | boolean
    createdAt?: DateTimeFilter<"LiveGameEvent"> | Date | string
  }

  export type LiveGameEventOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    reversed?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveGameEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LiveGameEventWhereInput | LiveGameEventWhereInput[]
    OR?: LiveGameEventWhereInput[]
    NOT?: LiveGameEventWhereInput | LiveGameEventWhereInput[]
    gameId?: StringFilter<"LiveGameEvent"> | string
    type?: StringFilter<"LiveGameEvent"> | string
    payload?: JsonFilter<"LiveGameEvent">
    reversed?: BoolFilter<"LiveGameEvent"> | boolean
    createdAt?: DateTimeFilter<"LiveGameEvent"> | Date | string
  }, "id">

  export type LiveGameEventOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    reversed?: SortOrder
    createdAt?: SortOrder
    _count?: LiveGameEventCountOrderByAggregateInput
    _max?: LiveGameEventMaxOrderByAggregateInput
    _min?: LiveGameEventMinOrderByAggregateInput
  }

  export type LiveGameEventScalarWhereWithAggregatesInput = {
    AND?: LiveGameEventScalarWhereWithAggregatesInput | LiveGameEventScalarWhereWithAggregatesInput[]
    OR?: LiveGameEventScalarWhereWithAggregatesInput[]
    NOT?: LiveGameEventScalarWhereWithAggregatesInput | LiveGameEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LiveGameEvent"> | string
    gameId?: StringWithAggregatesFilter<"LiveGameEvent"> | string
    type?: StringWithAggregatesFilter<"LiveGameEvent"> | string
    payload?: JsonWithAggregatesFilter<"LiveGameEvent">
    reversed?: BoolWithAggregatesFilter<"LiveGameEvent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LiveGameEvent"> | Date | string
  }

  export type StandingRowWhereInput = {
    AND?: StandingRowWhereInput | StandingRowWhereInput[]
    OR?: StandingRowWhereInput[]
    NOT?: StandingRowWhereInput | StandingRowWhereInput[]
    id?: StringFilter<"StandingRow"> | string
    teamName?: StringFilter<"StandingRow"> | string
    teamShort?: StringNullableFilter<"StandingRow"> | string | null
    teamLogo?: StringNullableFilter<"StandingRow"> | string | null
    wins?: IntFilter<"StandingRow"> | number
    losses?: IntFilter<"StandingRow"> | number
    sortOrder?: IntFilter<"StandingRow"> | number
    isCurrent?: BoolFilter<"StandingRow"> | boolean
    createdAt?: DateTimeFilter<"StandingRow"> | Date | string
    updatedAt?: DateTimeFilter<"StandingRow"> | Date | string
  }

  export type StandingRowOrderByWithRelationInput = {
    id?: SortOrder
    teamName?: SortOrder
    teamShort?: SortOrder
    teamLogo?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    sortOrder?: SortOrder
    isCurrent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StandingRowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StandingRowWhereInput | StandingRowWhereInput[]
    OR?: StandingRowWhereInput[]
    NOT?: StandingRowWhereInput | StandingRowWhereInput[]
    teamName?: StringFilter<"StandingRow"> | string
    teamShort?: StringNullableFilter<"StandingRow"> | string | null
    teamLogo?: StringNullableFilter<"StandingRow"> | string | null
    wins?: IntFilter<"StandingRow"> | number
    losses?: IntFilter<"StandingRow"> | number
    sortOrder?: IntFilter<"StandingRow"> | number
    isCurrent?: BoolFilter<"StandingRow"> | boolean
    createdAt?: DateTimeFilter<"StandingRow"> | Date | string
    updatedAt?: DateTimeFilter<"StandingRow"> | Date | string
  }, "id">

  export type StandingRowOrderByWithAggregationInput = {
    id?: SortOrder
    teamName?: SortOrder
    teamShort?: SortOrder
    teamLogo?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    sortOrder?: SortOrder
    isCurrent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StandingRowCountOrderByAggregateInput
    _avg?: StandingRowAvgOrderByAggregateInput
    _max?: StandingRowMaxOrderByAggregateInput
    _min?: StandingRowMinOrderByAggregateInput
    _sum?: StandingRowSumOrderByAggregateInput
  }

  export type StandingRowScalarWhereWithAggregatesInput = {
    AND?: StandingRowScalarWhereWithAggregatesInput | StandingRowScalarWhereWithAggregatesInput[]
    OR?: StandingRowScalarWhereWithAggregatesInput[]
    NOT?: StandingRowScalarWhereWithAggregatesInput | StandingRowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StandingRow"> | string
    teamName?: StringWithAggregatesFilter<"StandingRow"> | string
    teamShort?: StringNullableWithAggregatesFilter<"StandingRow"> | string | null
    teamLogo?: StringNullableWithAggregatesFilter<"StandingRow"> | string | null
    wins?: IntWithAggregatesFilter<"StandingRow"> | number
    losses?: IntWithAggregatesFilter<"StandingRow"> | number
    sortOrder?: IntWithAggregatesFilter<"StandingRow"> | number
    isCurrent?: BoolWithAggregatesFilter<"StandingRow"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"StandingRow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StandingRow"> | Date | string
  }

  export type PartnerWhereInput = {
    AND?: PartnerWhereInput | PartnerWhereInput[]
    OR?: PartnerWhereInput[]
    NOT?: PartnerWhereInput | PartnerWhereInput[]
    id?: StringFilter<"Partner"> | string
    name?: StringFilter<"Partner"> | string
    logo?: StringNullableFilter<"Partner"> | string | null
    url?: StringNullableFilter<"Partner"> | string | null
    sortOrder?: IntFilter<"Partner"> | number
    isVisible?: BoolFilter<"Partner"> | boolean
    createdAt?: DateTimeFilter<"Partner"> | Date | string
    updatedAt?: DateTimeFilter<"Partner"> | Date | string
  }

  export type PartnerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PartnerWhereInput | PartnerWhereInput[]
    OR?: PartnerWhereInput[]
    NOT?: PartnerWhereInput | PartnerWhereInput[]
    name?: StringFilter<"Partner"> | string
    logo?: StringNullableFilter<"Partner"> | string | null
    url?: StringNullableFilter<"Partner"> | string | null
    sortOrder?: IntFilter<"Partner"> | number
    isVisible?: BoolFilter<"Partner"> | boolean
    createdAt?: DateTimeFilter<"Partner"> | Date | string
    updatedAt?: DateTimeFilter<"Partner"> | Date | string
  }, "id">

  export type PartnerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartnerCountOrderByAggregateInput
    _avg?: PartnerAvgOrderByAggregateInput
    _max?: PartnerMaxOrderByAggregateInput
    _min?: PartnerMinOrderByAggregateInput
    _sum?: PartnerSumOrderByAggregateInput
  }

  export type PartnerScalarWhereWithAggregatesInput = {
    AND?: PartnerScalarWhereWithAggregatesInput | PartnerScalarWhereWithAggregatesInput[]
    OR?: PartnerScalarWhereWithAggregatesInput[]
    NOT?: PartnerScalarWhereWithAggregatesInput | PartnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Partner"> | string
    name?: StringWithAggregatesFilter<"Partner"> | string
    logo?: StringNullableWithAggregatesFilter<"Partner"> | string | null
    url?: StringNullableWithAggregatesFilter<"Partner"> | string | null
    sortOrder?: IntWithAggregatesFilter<"Partner"> | number
    isVisible?: BoolWithAggregatesFilter<"Partner"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Partner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Partner"> | Date | string
  }

  export type MediaAlbumWhereInput = {
    AND?: MediaAlbumWhereInput | MediaAlbumWhereInput[]
    OR?: MediaAlbumWhereInput[]
    NOT?: MediaAlbumWhereInput | MediaAlbumWhereInput[]
    id?: StringFilter<"MediaAlbum"> | string
    title?: StringFilter<"MediaAlbum"> | string
    slug?: StringFilter<"MediaAlbum"> | string
    category?: StringFilter<"MediaAlbum"> | string
    coverImage?: StringNullableFilter<"MediaAlbum"> | string | null
    images?: JsonFilter<"MediaAlbum">
    eventDate?: DateTimeNullableFilter<"MediaAlbum"> | Date | string | null
    sortOrder?: IntFilter<"MediaAlbum"> | number
    isPublished?: BoolFilter<"MediaAlbum"> | boolean
    createdAt?: DateTimeFilter<"MediaAlbum"> | Date | string
    updatedAt?: DateTimeFilter<"MediaAlbum"> | Date | string
  }

  export type MediaAlbumOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    coverImage?: SortOrder
    images?: SortOrder
    eventDate?: SortOrder
    sortOrder?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaAlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: MediaAlbumWhereInput | MediaAlbumWhereInput[]
    OR?: MediaAlbumWhereInput[]
    NOT?: MediaAlbumWhereInput | MediaAlbumWhereInput[]
    title?: StringFilter<"MediaAlbum"> | string
    category?: StringFilter<"MediaAlbum"> | string
    coverImage?: StringNullableFilter<"MediaAlbum"> | string | null
    images?: JsonFilter<"MediaAlbum">
    eventDate?: DateTimeNullableFilter<"MediaAlbum"> | Date | string | null
    sortOrder?: IntFilter<"MediaAlbum"> | number
    isPublished?: BoolFilter<"MediaAlbum"> | boolean
    createdAt?: DateTimeFilter<"MediaAlbum"> | Date | string
    updatedAt?: DateTimeFilter<"MediaAlbum"> | Date | string
  }, "id" | "slug">

  export type MediaAlbumOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    coverImage?: SortOrder
    images?: SortOrder
    eventDate?: SortOrder
    sortOrder?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MediaAlbumCountOrderByAggregateInput
    _avg?: MediaAlbumAvgOrderByAggregateInput
    _max?: MediaAlbumMaxOrderByAggregateInput
    _min?: MediaAlbumMinOrderByAggregateInput
    _sum?: MediaAlbumSumOrderByAggregateInput
  }

  export type MediaAlbumScalarWhereWithAggregatesInput = {
    AND?: MediaAlbumScalarWhereWithAggregatesInput | MediaAlbumScalarWhereWithAggregatesInput[]
    OR?: MediaAlbumScalarWhereWithAggregatesInput[]
    NOT?: MediaAlbumScalarWhereWithAggregatesInput | MediaAlbumScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MediaAlbum"> | string
    title?: StringWithAggregatesFilter<"MediaAlbum"> | string
    slug?: StringWithAggregatesFilter<"MediaAlbum"> | string
    category?: StringWithAggregatesFilter<"MediaAlbum"> | string
    coverImage?: StringNullableWithAggregatesFilter<"MediaAlbum"> | string | null
    images?: JsonWithAggregatesFilter<"MediaAlbum">
    eventDate?: DateTimeNullableWithAggregatesFilter<"MediaAlbum"> | Date | string | null
    sortOrder?: IntWithAggregatesFilter<"MediaAlbum"> | number
    isPublished?: BoolWithAggregatesFilter<"MediaAlbum"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MediaAlbum"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MediaAlbum"> | Date | string
  }

  export type ExecutiveWhereInput = {
    AND?: ExecutiveWhereInput | ExecutiveWhereInput[]
    OR?: ExecutiveWhereInput[]
    NOT?: ExecutiveWhereInput | ExecutiveWhereInput[]
    id?: StringFilter<"Executive"> | string
    name?: StringFilter<"Executive"> | string
    slug?: StringFilter<"Executive"> | string
    group?: StringFilter<"Executive"> | string
    title?: StringFilter<"Executive"> | string
    photo?: StringNullableFilter<"Executive"> | string | null
    bio?: StringNullableFilter<"Executive"> | string | null
    bullets?: StringNullableListFilter<"Executive">
    sections?: JsonNullableFilter<"Executive">
    sortOrder?: IntFilter<"Executive"> | number
    isPublic?: BoolFilter<"Executive"> | boolean
    createdAt?: DateTimeFilter<"Executive"> | Date | string
    updatedAt?: DateTimeFilter<"Executive"> | Date | string
  }

  export type ExecutiveOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    group?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    bio?: SortOrder
    bullets?: SortOrder
    sections?: SortOrder
    sortOrder?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExecutiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ExecutiveWhereInput | ExecutiveWhereInput[]
    OR?: ExecutiveWhereInput[]
    NOT?: ExecutiveWhereInput | ExecutiveWhereInput[]
    name?: StringFilter<"Executive"> | string
    group?: StringFilter<"Executive"> | string
    title?: StringFilter<"Executive"> | string
    photo?: StringNullableFilter<"Executive"> | string | null
    bio?: StringNullableFilter<"Executive"> | string | null
    bullets?: StringNullableListFilter<"Executive">
    sections?: JsonNullableFilter<"Executive">
    sortOrder?: IntFilter<"Executive"> | number
    isPublic?: BoolFilter<"Executive"> | boolean
    createdAt?: DateTimeFilter<"Executive"> | Date | string
    updatedAt?: DateTimeFilter<"Executive"> | Date | string
  }, "id" | "slug">

  export type ExecutiveOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    group?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    bio?: SortOrder
    bullets?: SortOrder
    sections?: SortOrder
    sortOrder?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExecutiveCountOrderByAggregateInput
    _avg?: ExecutiveAvgOrderByAggregateInput
    _max?: ExecutiveMaxOrderByAggregateInput
    _min?: ExecutiveMinOrderByAggregateInput
    _sum?: ExecutiveSumOrderByAggregateInput
  }

  export type ExecutiveScalarWhereWithAggregatesInput = {
    AND?: ExecutiveScalarWhereWithAggregatesInput | ExecutiveScalarWhereWithAggregatesInput[]
    OR?: ExecutiveScalarWhereWithAggregatesInput[]
    NOT?: ExecutiveScalarWhereWithAggregatesInput | ExecutiveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Executive"> | string
    name?: StringWithAggregatesFilter<"Executive"> | string
    slug?: StringWithAggregatesFilter<"Executive"> | string
    group?: StringWithAggregatesFilter<"Executive"> | string
    title?: StringWithAggregatesFilter<"Executive"> | string
    photo?: StringNullableWithAggregatesFilter<"Executive"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Executive"> | string | null
    bullets?: StringNullableListFilter<"Executive">
    sections?: JsonNullableWithAggregatesFilter<"Executive">
    sortOrder?: IntWithAggregatesFilter<"Executive"> | number
    isPublic?: BoolWithAggregatesFilter<"Executive"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Executive"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Executive"> | Date | string
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: StringFilter<"Video"> | string
    title?: StringFilter<"Video"> | string
    slug?: StringFilter<"Video"> | string
    category?: StringFilter<"Video"> | string
    thumbnail?: StringNullableFilter<"Video"> | string | null
    videoUrl?: StringNullableFilter<"Video"> | string | null
    youtubeId?: StringNullableFilter<"Video"> | string | null
    durationSec?: IntNullableFilter<"Video"> | number | null
    isFeatured?: BoolFilter<"Video"> | boolean
    isPublished?: BoolFilter<"Video"> | boolean
    publishedAt?: DateTimeFilter<"Video"> | Date | string
    sortOrder?: IntFilter<"Video"> | number
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    thumbnail?: SortOrder
    videoUrl?: SortOrder
    youtubeId?: SortOrder
    durationSec?: SortOrder
    isFeatured?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    title?: StringFilter<"Video"> | string
    category?: StringFilter<"Video"> | string
    thumbnail?: StringNullableFilter<"Video"> | string | null
    videoUrl?: StringNullableFilter<"Video"> | string | null
    youtubeId?: StringNullableFilter<"Video"> | string | null
    durationSec?: IntNullableFilter<"Video"> | number | null
    isFeatured?: BoolFilter<"Video"> | boolean
    isPublished?: BoolFilter<"Video"> | boolean
    publishedAt?: DateTimeFilter<"Video"> | Date | string
    sortOrder?: IntFilter<"Video"> | number
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
  }, "id" | "slug">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    thumbnail?: SortOrder
    videoUrl?: SortOrder
    youtubeId?: SortOrder
    durationSec?: SortOrder
    isFeatured?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Video"> | string
    title?: StringWithAggregatesFilter<"Video"> | string
    slug?: StringWithAggregatesFilter<"Video"> | string
    category?: StringWithAggregatesFilter<"Video"> | string
    thumbnail?: StringNullableWithAggregatesFilter<"Video"> | string | null
    videoUrl?: StringNullableWithAggregatesFilter<"Video"> | string | null
    youtubeId?: StringNullableWithAggregatesFilter<"Video"> | string | null
    durationSec?: IntNullableWithAggregatesFilter<"Video"> | number | null
    isFeatured?: BoolWithAggregatesFilter<"Video"> | boolean
    isPublished?: BoolWithAggregatesFilter<"Video"> | boolean
    publishedAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    sortOrder?: IntWithAggregatesFilter<"Video"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
  }

  export type ShopProductWhereInput = {
    AND?: ShopProductWhereInput | ShopProductWhereInput[]
    OR?: ShopProductWhereInput[]
    NOT?: ShopProductWhereInput | ShopProductWhereInput[]
    id?: StringFilter<"ShopProduct"> | string
    name?: StringFilter<"ShopProduct"> | string
    slug?: StringFilter<"ShopProduct"> | string
    category?: StringFilter<"ShopProduct"> | string
    price?: IntFilter<"ShopProduct"> | number
    compareAtPrice?: IntNullableFilter<"ShopProduct"> | number | null
    image?: StringNullableFilter<"ShopProduct"> | string | null
    url?: StringNullableFilter<"ShopProduct"> | string | null
    sizes?: StringNullableListFilter<"ShopProduct">
    badge?: StringNullableFilter<"ShopProduct"> | string | null
    isVisible?: BoolFilter<"ShopProduct"> | boolean
    sortOrder?: IntFilter<"ShopProduct"> | number
    createdAt?: DateTimeFilter<"ShopProduct"> | Date | string
    updatedAt?: DateTimeFilter<"ShopProduct"> | Date | string
  }

  export type ShopProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    price?: SortOrder
    compareAtPrice?: SortOrder
    image?: SortOrder
    url?: SortOrder
    sizes?: SortOrder
    badge?: SortOrder
    isVisible?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ShopProductWhereInput | ShopProductWhereInput[]
    OR?: ShopProductWhereInput[]
    NOT?: ShopProductWhereInput | ShopProductWhereInput[]
    name?: StringFilter<"ShopProduct"> | string
    category?: StringFilter<"ShopProduct"> | string
    price?: IntFilter<"ShopProduct"> | number
    compareAtPrice?: IntNullableFilter<"ShopProduct"> | number | null
    image?: StringNullableFilter<"ShopProduct"> | string | null
    url?: StringNullableFilter<"ShopProduct"> | string | null
    sizes?: StringNullableListFilter<"ShopProduct">
    badge?: StringNullableFilter<"ShopProduct"> | string | null
    isVisible?: BoolFilter<"ShopProduct"> | boolean
    sortOrder?: IntFilter<"ShopProduct"> | number
    createdAt?: DateTimeFilter<"ShopProduct"> | Date | string
    updatedAt?: DateTimeFilter<"ShopProduct"> | Date | string
  }, "id" | "slug">

  export type ShopProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    price?: SortOrder
    compareAtPrice?: SortOrder
    image?: SortOrder
    url?: SortOrder
    sizes?: SortOrder
    badge?: SortOrder
    isVisible?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShopProductCountOrderByAggregateInput
    _avg?: ShopProductAvgOrderByAggregateInput
    _max?: ShopProductMaxOrderByAggregateInput
    _min?: ShopProductMinOrderByAggregateInput
    _sum?: ShopProductSumOrderByAggregateInput
  }

  export type ShopProductScalarWhereWithAggregatesInput = {
    AND?: ShopProductScalarWhereWithAggregatesInput | ShopProductScalarWhereWithAggregatesInput[]
    OR?: ShopProductScalarWhereWithAggregatesInput[]
    NOT?: ShopProductScalarWhereWithAggregatesInput | ShopProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShopProduct"> | string
    name?: StringWithAggregatesFilter<"ShopProduct"> | string
    slug?: StringWithAggregatesFilter<"ShopProduct"> | string
    category?: StringWithAggregatesFilter<"ShopProduct"> | string
    price?: IntWithAggregatesFilter<"ShopProduct"> | number
    compareAtPrice?: IntNullableWithAggregatesFilter<"ShopProduct"> | number | null
    image?: StringNullableWithAggregatesFilter<"ShopProduct"> | string | null
    url?: StringNullableWithAggregatesFilter<"ShopProduct"> | string | null
    sizes?: StringNullableListFilter<"ShopProduct">
    badge?: StringNullableWithAggregatesFilter<"ShopProduct"> | string | null
    isVisible?: BoolWithAggregatesFilter<"ShopProduct"> | boolean
    sortOrder?: IntWithAggregatesFilter<"ShopProduct"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ShopProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShopProduct"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    customerName?: StringFilter<"Order"> | string
    phone?: StringFilter<"Order"> | string
    email?: StringNullableFilter<"Order"> | string | null
    note?: StringNullableFilter<"Order"> | string | null
    items?: JsonFilter<"Order">
    total?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    customerName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    note?: SortOrder
    items?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    customerName?: StringFilter<"Order"> | string
    phone?: StringFilter<"Order"> | string
    email?: StringNullableFilter<"Order"> | string | null
    note?: StringNullableFilter<"Order"> | string | null
    items?: JsonFilter<"Order">
    total?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    customerName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    note?: SortOrder
    items?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    customerName?: StringWithAggregatesFilter<"Order"> | string
    phone?: StringWithAggregatesFilter<"Order"> | string
    email?: StringNullableWithAggregatesFilter<"Order"> | string | null
    note?: StringNullableWithAggregatesFilter<"Order"> | string | null
    items?: JsonWithAggregatesFilter<"Order">
    total?: IntWithAggregatesFilter<"Order"> | number
    status?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type SiteContentWhereInput = {
    AND?: SiteContentWhereInput | SiteContentWhereInput[]
    OR?: SiteContentWhereInput[]
    NOT?: SiteContentWhereInput | SiteContentWhereInput[]
    id?: StringFilter<"SiteContent"> | string
    page?: StringFilter<"SiteContent"> | string
    section?: StringFilter<"SiteContent"> | string
    data?: JsonFilter<"SiteContent">
    createdAt?: DateTimeFilter<"SiteContent"> | Date | string
    updatedAt?: DateTimeFilter<"SiteContent"> | Date | string
  }

  export type SiteContentOrderByWithRelationInput = {
    id?: SortOrder
    page?: SortOrder
    section?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    page_section?: SiteContentPageSectionCompoundUniqueInput
    AND?: SiteContentWhereInput | SiteContentWhereInput[]
    OR?: SiteContentWhereInput[]
    NOT?: SiteContentWhereInput | SiteContentWhereInput[]
    page?: StringFilter<"SiteContent"> | string
    section?: StringFilter<"SiteContent"> | string
    data?: JsonFilter<"SiteContent">
    createdAt?: DateTimeFilter<"SiteContent"> | Date | string
    updatedAt?: DateTimeFilter<"SiteContent"> | Date | string
  }, "id" | "page_section">

  export type SiteContentOrderByWithAggregationInput = {
    id?: SortOrder
    page?: SortOrder
    section?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteContentCountOrderByAggregateInput
    _max?: SiteContentMaxOrderByAggregateInput
    _min?: SiteContentMinOrderByAggregateInput
  }

  export type SiteContentScalarWhereWithAggregatesInput = {
    AND?: SiteContentScalarWhereWithAggregatesInput | SiteContentScalarWhereWithAggregatesInput[]
    OR?: SiteContentScalarWhereWithAggregatesInput[]
    NOT?: SiteContentScalarWhereWithAggregatesInput | SiteContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SiteContent"> | string
    page?: StringWithAggregatesFilter<"SiteContent"> | string
    section?: StringWithAggregatesFilter<"SiteContent"> | string
    data?: JsonWithAggregatesFilter<"SiteContent">
    createdAt?: DateTimeWithAggregatesFilter<"SiteContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteContent"> | Date | string
  }

  export type ContentBlockWhereInput = {
    AND?: ContentBlockWhereInput | ContentBlockWhereInput[]
    OR?: ContentBlockWhereInput[]
    NOT?: ContentBlockWhereInput | ContentBlockWhereInput[]
    id?: StringFilter<"ContentBlock"> | string
    pageSlug?: StringFilter<"ContentBlock"> | string
    key?: StringFilter<"ContentBlock"> | string
    locale?: StringFilter<"ContentBlock"> | string
    type?: StringFilter<"ContentBlock"> | string
    value?: StringFilter<"ContentBlock"> | string
    updatedBy?: StringNullableFilter<"ContentBlock"> | string | null
    createdAt?: DateTimeFilter<"ContentBlock"> | Date | string
    updatedAt?: DateTimeFilter<"ContentBlock"> | Date | string
    updater?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    history?: ContentHistoryListRelationFilter
  }

  export type ContentBlockOrderByWithRelationInput = {
    id?: SortOrder
    pageSlug?: SortOrder
    key?: SortOrder
    locale?: SortOrder
    type?: SortOrder
    value?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updater?: UserOrderByWithRelationInput
    history?: ContentHistoryOrderByRelationAggregateInput
  }

  export type ContentBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pageSlug_key_locale?: ContentBlockPageSlugKeyLocaleCompoundUniqueInput
    AND?: ContentBlockWhereInput | ContentBlockWhereInput[]
    OR?: ContentBlockWhereInput[]
    NOT?: ContentBlockWhereInput | ContentBlockWhereInput[]
    pageSlug?: StringFilter<"ContentBlock"> | string
    key?: StringFilter<"ContentBlock"> | string
    locale?: StringFilter<"ContentBlock"> | string
    type?: StringFilter<"ContentBlock"> | string
    value?: StringFilter<"ContentBlock"> | string
    updatedBy?: StringNullableFilter<"ContentBlock"> | string | null
    createdAt?: DateTimeFilter<"ContentBlock"> | Date | string
    updatedAt?: DateTimeFilter<"ContentBlock"> | Date | string
    updater?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    history?: ContentHistoryListRelationFilter
  }, "id" | "pageSlug_key_locale">

  export type ContentBlockOrderByWithAggregationInput = {
    id?: SortOrder
    pageSlug?: SortOrder
    key?: SortOrder
    locale?: SortOrder
    type?: SortOrder
    value?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentBlockCountOrderByAggregateInput
    _max?: ContentBlockMaxOrderByAggregateInput
    _min?: ContentBlockMinOrderByAggregateInput
  }

  export type ContentBlockScalarWhereWithAggregatesInput = {
    AND?: ContentBlockScalarWhereWithAggregatesInput | ContentBlockScalarWhereWithAggregatesInput[]
    OR?: ContentBlockScalarWhereWithAggregatesInput[]
    NOT?: ContentBlockScalarWhereWithAggregatesInput | ContentBlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentBlock"> | string
    pageSlug?: StringWithAggregatesFilter<"ContentBlock"> | string
    key?: StringWithAggregatesFilter<"ContentBlock"> | string
    locale?: StringWithAggregatesFilter<"ContentBlock"> | string
    type?: StringWithAggregatesFilter<"ContentBlock"> | string
    value?: StringWithAggregatesFilter<"ContentBlock"> | string
    updatedBy?: StringNullableWithAggregatesFilter<"ContentBlock"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ContentBlock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContentBlock"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    provider?: StringFilter<"Media"> | string
    publicId?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    mime?: StringFilter<"Media"> | string
    sizeBytes?: IntFilter<"Media"> | number
    width?: IntNullableFilter<"Media"> | number | null
    height?: IntNullableFilter<"Media"> | number | null
    altText?: StringNullableFilter<"Media"> | string | null
    folder?: StringFilter<"Media"> | string
    uploadedBy?: StringNullableFilter<"Media"> | string | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
    uploader?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    publicId?: SortOrder
    url?: SortOrder
    mime?: SortOrder
    sizeBytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
    altText?: SortOrder
    folder?: SortOrder
    uploadedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uploader?: UserOrderByWithRelationInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    publicId?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    provider?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    mime?: StringFilter<"Media"> | string
    sizeBytes?: IntFilter<"Media"> | number
    width?: IntNullableFilter<"Media"> | number | null
    height?: IntNullableFilter<"Media"> | number | null
    altText?: StringNullableFilter<"Media"> | string | null
    folder?: StringFilter<"Media"> | string
    uploadedBy?: StringNullableFilter<"Media"> | string | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
    uploader?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "publicId">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    publicId?: SortOrder
    url?: SortOrder
    mime?: SortOrder
    sizeBytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
    altText?: SortOrder
    folder?: SortOrder
    uploadedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _avg?: MediaAvgOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
    _sum?: MediaSumOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    provider?: StringWithAggregatesFilter<"Media"> | string
    publicId?: StringWithAggregatesFilter<"Media"> | string
    url?: StringWithAggregatesFilter<"Media"> | string
    mime?: StringWithAggregatesFilter<"Media"> | string
    sizeBytes?: IntWithAggregatesFilter<"Media"> | number
    width?: IntNullableWithAggregatesFilter<"Media"> | number | null
    height?: IntNullableWithAggregatesFilter<"Media"> | number | null
    altText?: StringNullableWithAggregatesFilter<"Media"> | string | null
    folder?: StringWithAggregatesFilter<"Media"> | string
    uploadedBy?: StringNullableWithAggregatesFilter<"Media"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type ContentHistoryWhereInput = {
    AND?: ContentHistoryWhereInput | ContentHistoryWhereInput[]
    OR?: ContentHistoryWhereInput[]
    NOT?: ContentHistoryWhereInput | ContentHistoryWhereInput[]
    id?: StringFilter<"ContentHistory"> | string
    blockId?: StringFilter<"ContentHistory"> | string
    oldValue?: StringNullableFilter<"ContentHistory"> | string | null
    newValue?: StringFilter<"ContentHistory"> | string
    changedBy?: StringNullableFilter<"ContentHistory"> | string | null
    createdAt?: DateTimeFilter<"ContentHistory"> | Date | string
    block?: XOR<ContentBlockScalarRelationFilter, ContentBlockWhereInput>
    changer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ContentHistoryOrderByWithRelationInput = {
    id?: SortOrder
    blockId?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    changedBy?: SortOrder
    createdAt?: SortOrder
    block?: ContentBlockOrderByWithRelationInput
    changer?: UserOrderByWithRelationInput
  }

  export type ContentHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentHistoryWhereInput | ContentHistoryWhereInput[]
    OR?: ContentHistoryWhereInput[]
    NOT?: ContentHistoryWhereInput | ContentHistoryWhereInput[]
    blockId?: StringFilter<"ContentHistory"> | string
    oldValue?: StringNullableFilter<"ContentHistory"> | string | null
    newValue?: StringFilter<"ContentHistory"> | string
    changedBy?: StringNullableFilter<"ContentHistory"> | string | null
    createdAt?: DateTimeFilter<"ContentHistory"> | Date | string
    block?: XOR<ContentBlockScalarRelationFilter, ContentBlockWhereInput>
    changer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ContentHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    blockId?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    changedBy?: SortOrder
    createdAt?: SortOrder
    _count?: ContentHistoryCountOrderByAggregateInput
    _max?: ContentHistoryMaxOrderByAggregateInput
    _min?: ContentHistoryMinOrderByAggregateInput
  }

  export type ContentHistoryScalarWhereWithAggregatesInput = {
    AND?: ContentHistoryScalarWhereWithAggregatesInput | ContentHistoryScalarWhereWithAggregatesInput[]
    OR?: ContentHistoryScalarWhereWithAggregatesInput[]
    NOT?: ContentHistoryScalarWhereWithAggregatesInput | ContentHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentHistory"> | string
    blockId?: StringWithAggregatesFilter<"ContentHistory"> | string
    oldValue?: StringNullableWithAggregatesFilter<"ContentHistory"> | string | null
    newValue?: StringWithAggregatesFilter<"ContentHistory"> | string
    changedBy?: StringNullableWithAggregatesFilter<"ContentHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ContentHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username?: string | null
    passwordHash: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    contentBlocks?: ContentBlockCreateNestedManyWithoutUpdaterInput
    contentEdits?: ContentHistoryCreateNestedManyWithoutChangerInput
    media?: MediaCreateNestedManyWithoutUploaderInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username?: string | null
    passwordHash: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    contentBlocks?: ContentBlockUncheckedCreateNestedManyWithoutUpdaterInput
    contentEdits?: ContentHistoryUncheckedCreateNestedManyWithoutChangerInput
    media?: MediaUncheckedCreateNestedManyWithoutUploaderInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    contentBlocks?: ContentBlockUpdateManyWithoutUpdaterNestedInput
    contentEdits?: ContentHistoryUpdateManyWithoutChangerNestedInput
    media?: MediaUpdateManyWithoutUploaderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    contentBlocks?: ContentBlockUncheckedUpdateManyWithoutUpdaterNestedInput
    contentEdits?: ContentHistoryUncheckedUpdateManyWithoutChangerNestedInput
    media?: MediaUncheckedUpdateManyWithoutUploaderNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username?: string | null
    passwordHash: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    revokedAt?: Date | string | null
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    tokenHash: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    revokedAt?: Date | string | null
  }

  export type RefreshTokenUpdateInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    tokenHash: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    revokedAt?: Date | string | null
  }

  export type RefreshTokenUpdateManyMutationInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsPostCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt: string
    content: string
    coverImage?: string | null
    category?: string
    tags?: NewsPostCreatetagsInput | string[]
    isFeatured?: boolean
    isPublished?: boolean
    publishedAt?: Date | string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsPostUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt: string
    content: string
    coverImage?: string | null
    category?: string
    tags?: NewsPostCreatetagsInput | string[]
    isFeatured?: boolean
    isPublished?: boolean
    publishedAt?: Date | string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsPostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: NewsPostUpdatetagsInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsPostUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: NewsPostUpdatetagsInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsPostCreateManyInput = {
    id?: string
    title: string
    slug: string
    excerpt: string
    content: string
    coverImage?: string | null
    category?: string
    tags?: NewsPostCreatetagsInput | string[]
    isFeatured?: boolean
    isPublished?: boolean
    publishedAt?: Date | string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsPostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: NewsPostUpdatetagsInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsPostUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: NewsPostUpdatetagsInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateInput = {
    id?: string
    name: string
    slug: string
    number?: number | null
    role?: string
    position?: string | null
    heightCm?: number | null
    weightKg?: number | null
    birthYear?: number | null
    hometown?: string | null
    photo?: string | null
    actionPhoto?: string | null
    bio?: string | null
    academicYear?: string | null
    isCaptain?: boolean
    ppg?: number | null
    rpg?: number | null
    apg?: number | null
    profile?: InputJsonValue | null
    sortOrder?: number
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    number?: number | null
    role?: string
    position?: string | null
    heightCm?: number | null
    weightKg?: number | null
    birthYear?: number | null
    hometown?: string | null
    photo?: string | null
    actionPhoto?: string | null
    bio?: string | null
    academicYear?: string | null
    isCaptain?: boolean
    ppg?: number | null
    rpg?: number | null
    apg?: number | null
    profile?: InputJsonValue | null
    sortOrder?: number
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    role?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    birthYear?: NullableIntFieldUpdateOperationsInput | number | null
    hometown?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    actionPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    academicYear?: NullableStringFieldUpdateOperationsInput | string | null
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    ppg?: NullableFloatFieldUpdateOperationsInput | number | null
    rpg?: NullableFloatFieldUpdateOperationsInput | number | null
    apg?: NullableFloatFieldUpdateOperationsInput | number | null
    profile?: InputJsonValue | InputJsonValue | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    role?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    birthYear?: NullableIntFieldUpdateOperationsInput | number | null
    hometown?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    actionPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    academicYear?: NullableStringFieldUpdateOperationsInput | string | null
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    ppg?: NullableFloatFieldUpdateOperationsInput | number | null
    rpg?: NullableFloatFieldUpdateOperationsInput | number | null
    apg?: NullableFloatFieldUpdateOperationsInput | number | null
    profile?: InputJsonValue | InputJsonValue | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateManyInput = {
    id?: string
    name: string
    slug: string
    number?: number | null
    role?: string
    position?: string | null
    heightCm?: number | null
    weightKg?: number | null
    birthYear?: number | null
    hometown?: string | null
    photo?: string | null
    actionPhoto?: string | null
    bio?: string | null
    academicYear?: string | null
    isCaptain?: boolean
    ppg?: number | null
    rpg?: number | null
    apg?: number | null
    profile?: InputJsonValue | null
    sortOrder?: number
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    role?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    birthYear?: NullableIntFieldUpdateOperationsInput | number | null
    hometown?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    actionPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    academicYear?: NullableStringFieldUpdateOperationsInput | string | null
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    ppg?: NullableFloatFieldUpdateOperationsInput | number | null
    rpg?: NullableFloatFieldUpdateOperationsInput | number | null
    apg?: NullableFloatFieldUpdateOperationsInput | number | null
    profile?: InputJsonValue | InputJsonValue | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    role?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    birthYear?: NullableIntFieldUpdateOperationsInput | number | null
    hometown?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    actionPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    academicYear?: NullableStringFieldUpdateOperationsInput | string | null
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    ppg?: NullableFloatFieldUpdateOperationsInput | number | null
    rpg?: NullableFloatFieldUpdateOperationsInput | number | null
    apg?: NullableFloatFieldUpdateOperationsInput | number | null
    profile?: InputJsonValue | InputJsonValue | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    id?: string
    competition?: string
    round?: string | null
    opponent: string
    opponentShort?: string | null
    opponentLogo?: string | null
    isHome?: boolean
    tipsAt: Date | string
    venue?: string
    status?: string
    teamScore?: number | null
    opponentScore?: number | null
    note?: string | null
    streamUrl?: string | null
    ticketUrl?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUncheckedCreateInput = {
    id?: string
    competition?: string
    round?: string | null
    opponent: string
    opponentShort?: string | null
    opponentLogo?: string | null
    isHome?: boolean
    tipsAt: Date | string
    venue?: string
    status?: string
    teamScore?: number | null
    opponentScore?: number | null
    note?: string | null
    streamUrl?: string | null
    ticketUrl?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateInput = {
    competition?: StringFieldUpdateOperationsInput | string
    round?: NullableStringFieldUpdateOperationsInput | string | null
    opponent?: StringFieldUpdateOperationsInput | string
    opponentShort?: NullableStringFieldUpdateOperationsInput | string | null
    opponentLogo?: NullableStringFieldUpdateOperationsInput | string | null
    isHome?: BoolFieldUpdateOperationsInput | boolean
    tipsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    teamScore?: NullableIntFieldUpdateOperationsInput | number | null
    opponentScore?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ticketUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateInput = {
    competition?: StringFieldUpdateOperationsInput | string
    round?: NullableStringFieldUpdateOperationsInput | string | null
    opponent?: StringFieldUpdateOperationsInput | string
    opponentShort?: NullableStringFieldUpdateOperationsInput | string | null
    opponentLogo?: NullableStringFieldUpdateOperationsInput | string | null
    isHome?: BoolFieldUpdateOperationsInput | boolean
    tipsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    teamScore?: NullableIntFieldUpdateOperationsInput | number | null
    opponentScore?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ticketUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateManyInput = {
    id?: string
    competition?: string
    round?: string | null
    opponent: string
    opponentShort?: string | null
    opponentLogo?: string | null
    isHome?: boolean
    tipsAt: Date | string
    venue?: string
    status?: string
    teamScore?: number | null
    opponentScore?: number | null
    note?: string | null
    streamUrl?: string | null
    ticketUrl?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateManyMutationInput = {
    competition?: StringFieldUpdateOperationsInput | string
    round?: NullableStringFieldUpdateOperationsInput | string | null
    opponent?: StringFieldUpdateOperationsInput | string
    opponentShort?: NullableStringFieldUpdateOperationsInput | string | null
    opponentLogo?: NullableStringFieldUpdateOperationsInput | string | null
    isHome?: BoolFieldUpdateOperationsInput | boolean
    tipsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    teamScore?: NullableIntFieldUpdateOperationsInput | number | null
    opponentScore?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ticketUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyInput = {
    competition?: StringFieldUpdateOperationsInput | string
    round?: NullableStringFieldUpdateOperationsInput | string | null
    opponent?: StringFieldUpdateOperationsInput | string
    opponentShort?: NullableStringFieldUpdateOperationsInput | string | null
    opponentLogo?: NullableStringFieldUpdateOperationsInput | string | null
    isHome?: BoolFieldUpdateOperationsInput | boolean
    tipsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    teamScore?: NullableIntFieldUpdateOperationsInput | number | null
    opponentScore?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ticketUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveGameCreateInput = {
    id?: string
    gameId: string
    status?: string
    period?: number
    clockSeconds?: number
    clockRunning?: boolean
    teamScore?: number
    opponentScore?: number
    teamFouls?: LiveGameCreateteamFoulsInput | number[]
    opponentFouls?: LiveGameCreateopponentFoulsInput | number[]
    timeouts?: LiveGameCreatetimeoutsInput | number[]
    lineup?: LiveGameCreatelineupInput | string[]
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type LiveGameUncheckedCreateInput = {
    id?: string
    gameId: string
    status?: string
    period?: number
    clockSeconds?: number
    clockRunning?: boolean
    teamScore?: number
    opponentScore?: number
    teamFouls?: LiveGameCreateteamFoulsInput | number[]
    opponentFouls?: LiveGameCreateopponentFoulsInput | number[]
    timeouts?: LiveGameCreatetimeoutsInput | number[]
    lineup?: LiveGameCreatelineupInput | string[]
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type LiveGameUpdateInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    clockSeconds?: IntFieldUpdateOperationsInput | number
    clockRunning?: BoolFieldUpdateOperationsInput | boolean
    teamScore?: IntFieldUpdateOperationsInput | number
    opponentScore?: IntFieldUpdateOperationsInput | number
    teamFouls?: LiveGameUpdateteamFoulsInput | number[]
    opponentFouls?: LiveGameUpdateopponentFoulsInput | number[]
    timeouts?: LiveGameUpdatetimeoutsInput | number[]
    lineup?: LiveGameUpdatelineupInput | string[]
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveGameUncheckedUpdateInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    clockSeconds?: IntFieldUpdateOperationsInput | number
    clockRunning?: BoolFieldUpdateOperationsInput | boolean
    teamScore?: IntFieldUpdateOperationsInput | number
    opponentScore?: IntFieldUpdateOperationsInput | number
    teamFouls?: LiveGameUpdateteamFoulsInput | number[]
    opponentFouls?: LiveGameUpdateopponentFoulsInput | number[]
    timeouts?: LiveGameUpdatetimeoutsInput | number[]
    lineup?: LiveGameUpdatelineupInput | string[]
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveGameCreateManyInput = {
    id?: string
    gameId: string
    status?: string
    period?: number
    clockSeconds?: number
    clockRunning?: boolean
    teamScore?: number
    opponentScore?: number
    teamFouls?: LiveGameCreateteamFoulsInput | number[]
    opponentFouls?: LiveGameCreateopponentFoulsInput | number[]
    timeouts?: LiveGameCreatetimeoutsInput | number[]
    lineup?: LiveGameCreatelineupInput | string[]
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type LiveGameUpdateManyMutationInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    clockSeconds?: IntFieldUpdateOperationsInput | number
    clockRunning?: BoolFieldUpdateOperationsInput | boolean
    teamScore?: IntFieldUpdateOperationsInput | number
    opponentScore?: IntFieldUpdateOperationsInput | number
    teamFouls?: LiveGameUpdateteamFoulsInput | number[]
    opponentFouls?: LiveGameUpdateopponentFoulsInput | number[]
    timeouts?: LiveGameUpdatetimeoutsInput | number[]
    lineup?: LiveGameUpdatelineupInput | string[]
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveGameUncheckedUpdateManyInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    clockSeconds?: IntFieldUpdateOperationsInput | number
    clockRunning?: BoolFieldUpdateOperationsInput | boolean
    teamScore?: IntFieldUpdateOperationsInput | number
    opponentScore?: IntFieldUpdateOperationsInput | number
    teamFouls?: LiveGameUpdateteamFoulsInput | number[]
    opponentFouls?: LiveGameUpdateopponentFoulsInput | number[]
    timeouts?: LiveGameUpdatetimeoutsInput | number[]
    lineup?: LiveGameUpdatelineupInput | string[]
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveGameEventCreateInput = {
    id?: string
    gameId: string
    type: string
    payload: InputJsonValue
    reversed?: boolean
    createdAt?: Date | string
  }

  export type LiveGameEventUncheckedCreateInput = {
    id?: string
    gameId: string
    type: string
    payload: InputJsonValue
    reversed?: boolean
    createdAt?: Date | string
  }

  export type LiveGameEventUpdateInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: InputJsonValue | InputJsonValue
    reversed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveGameEventUncheckedUpdateInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: InputJsonValue | InputJsonValue
    reversed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveGameEventCreateManyInput = {
    id?: string
    gameId: string
    type: string
    payload: InputJsonValue
    reversed?: boolean
    createdAt?: Date | string
  }

  export type LiveGameEventUpdateManyMutationInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: InputJsonValue | InputJsonValue
    reversed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveGameEventUncheckedUpdateManyInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: InputJsonValue | InputJsonValue
    reversed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandingRowCreateInput = {
    id?: string
    teamName: string
    teamShort?: string | null
    teamLogo?: string | null
    wins?: number
    losses?: number
    sortOrder?: number
    isCurrent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StandingRowUncheckedCreateInput = {
    id?: string
    teamName: string
    teamShort?: string | null
    teamLogo?: string | null
    wins?: number
    losses?: number
    sortOrder?: number
    isCurrent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StandingRowUpdateInput = {
    teamName?: StringFieldUpdateOperationsInput | string
    teamShort?: NullableStringFieldUpdateOperationsInput | string | null
    teamLogo?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandingRowUncheckedUpdateInput = {
    teamName?: StringFieldUpdateOperationsInput | string
    teamShort?: NullableStringFieldUpdateOperationsInput | string | null
    teamLogo?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandingRowCreateManyInput = {
    id?: string
    teamName: string
    teamShort?: string | null
    teamLogo?: string | null
    wins?: number
    losses?: number
    sortOrder?: number
    isCurrent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StandingRowUpdateManyMutationInput = {
    teamName?: StringFieldUpdateOperationsInput | string
    teamShort?: NullableStringFieldUpdateOperationsInput | string | null
    teamLogo?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandingRowUncheckedUpdateManyInput = {
    teamName?: StringFieldUpdateOperationsInput | string
    teamShort?: NullableStringFieldUpdateOperationsInput | string | null
    teamLogo?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerCreateInput = {
    id?: string
    name: string
    logo?: string | null
    url?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerUncheckedCreateInput = {
    id?: string
    name: string
    logo?: string | null
    url?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerCreateManyInput = {
    id?: string
    name: string
    logo?: string | null
    url?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAlbumCreateInput = {
    id?: string
    title: string
    slug: string
    category?: string
    coverImage?: string | null
    images?: InputJsonValue
    eventDate?: Date | string | null
    sortOrder?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaAlbumUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    category?: string
    coverImage?: string | null
    images?: InputJsonValue
    eventDate?: Date | string | null
    sortOrder?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaAlbumUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    images?: InputJsonValue | InputJsonValue
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAlbumUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    images?: InputJsonValue | InputJsonValue
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAlbumCreateManyInput = {
    id?: string
    title: string
    slug: string
    category?: string
    coverImage?: string | null
    images?: InputJsonValue
    eventDate?: Date | string | null
    sortOrder?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaAlbumUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    images?: InputJsonValue | InputJsonValue
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAlbumUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    images?: InputJsonValue | InputJsonValue
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutiveCreateInput = {
    id?: string
    name: string
    slug: string
    group?: string
    title: string
    photo?: string | null
    bio?: string | null
    bullets?: ExecutiveCreatebulletsInput | string[]
    sections?: InputJsonValue | null
    sortOrder?: number
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExecutiveUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    group?: string
    title: string
    photo?: string | null
    bio?: string | null
    bullets?: ExecutiveCreatebulletsInput | string[]
    sections?: InputJsonValue | null
    sortOrder?: number
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExecutiveUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    bullets?: ExecutiveUpdatebulletsInput | string[]
    sections?: InputJsonValue | InputJsonValue | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutiveUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    bullets?: ExecutiveUpdatebulletsInput | string[]
    sections?: InputJsonValue | InputJsonValue | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutiveCreateManyInput = {
    id?: string
    name: string
    slug: string
    group?: string
    title: string
    photo?: string | null
    bio?: string | null
    bullets?: ExecutiveCreatebulletsInput | string[]
    sections?: InputJsonValue | null
    sortOrder?: number
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExecutiveUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    bullets?: ExecutiveUpdatebulletsInput | string[]
    sections?: InputJsonValue | InputJsonValue | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutiveUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    bullets?: ExecutiveUpdatebulletsInput | string[]
    sections?: InputJsonValue | InputJsonValue | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateInput = {
    id?: string
    title: string
    slug: string
    category?: string
    thumbnail?: string | null
    videoUrl?: string | null
    youtubeId?: string | null
    durationSec?: number | null
    isFeatured?: boolean
    isPublished?: boolean
    publishedAt?: Date | string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    category?: string
    thumbnail?: string | null
    videoUrl?: string | null
    youtubeId?: string | null
    durationSec?: number | null
    isFeatured?: boolean
    isPublished?: boolean
    publishedAt?: Date | string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateManyInput = {
    id?: string
    title: string
    slug: string
    category?: string
    thumbnail?: string | null
    videoUrl?: string | null
    youtubeId?: string | null
    durationSec?: number | null
    isFeatured?: boolean
    isPublished?: boolean
    publishedAt?: Date | string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopProductCreateInput = {
    id?: string
    name: string
    slug: string
    category?: string
    price: number
    compareAtPrice?: number | null
    image?: string | null
    url?: string | null
    sizes?: ShopProductCreatesizesInput | string[]
    badge?: string | null
    isVisible?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopProductUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    category?: string
    price: number
    compareAtPrice?: number | null
    image?: string | null
    url?: string | null
    sizes?: ShopProductCreatesizesInput | string[]
    badge?: string | null
    isVisible?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    compareAtPrice?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    sizes?: ShopProductUpdatesizesInput | string[]
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopProductUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    compareAtPrice?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    sizes?: ShopProductUpdatesizesInput | string[]
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopProductCreateManyInput = {
    id?: string
    name: string
    slug: string
    category?: string
    price: number
    compareAtPrice?: number | null
    image?: string | null
    url?: string | null
    sizes?: ShopProductCreatesizesInput | string[]
    badge?: string | null
    isVisible?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    compareAtPrice?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    sizes?: ShopProductUpdatesizesInput | string[]
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopProductUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    compareAtPrice?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    sizes?: ShopProductUpdatesizesInput | string[]
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    customerName: string
    phone: string
    email?: string | null
    note?: string | null
    items?: InputJsonValue
    total?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    customerName: string
    phone: string
    email?: string | null
    note?: string | null
    items?: InputJsonValue
    total?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    customerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    items?: InputJsonValue | InputJsonValue
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateInput = {
    customerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    items?: InputJsonValue | InputJsonValue
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: string
    customerName: string
    phone: string
    email?: string | null
    note?: string | null
    items?: InputJsonValue
    total?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    customerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    items?: InputJsonValue | InputJsonValue
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    customerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    items?: InputJsonValue | InputJsonValue
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteContentCreateInput = {
    id?: string
    page: string
    section: string
    data: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteContentUncheckedCreateInput = {
    id?: string
    page: string
    section: string
    data: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteContentUpdateInput = {
    page?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteContentUncheckedUpdateInput = {
    page?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteContentCreateManyInput = {
    id?: string
    page: string
    section: string
    data: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteContentUpdateManyMutationInput = {
    page?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteContentUncheckedUpdateManyInput = {
    page?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentBlockCreateInput = {
    id?: string
    pageSlug: string
    key: string
    locale: string
    type: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updater?: UserCreateNestedOneWithoutContentBlocksInput
    history?: ContentHistoryCreateNestedManyWithoutBlockInput
  }

  export type ContentBlockUncheckedCreateInput = {
    id?: string
    pageSlug: string
    key: string
    locale: string
    type: string
    value: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: ContentHistoryUncheckedCreateNestedManyWithoutBlockInput
  }

  export type ContentBlockUpdateInput = {
    pageSlug?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updater?: UserUpdateOneWithoutContentBlocksNestedInput
    history?: ContentHistoryUpdateManyWithoutBlockNestedInput
  }

  export type ContentBlockUncheckedUpdateInput = {
    pageSlug?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: ContentHistoryUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type ContentBlockCreateManyInput = {
    id?: string
    pageSlug: string
    key: string
    locale: string
    type: string
    value: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentBlockUpdateManyMutationInput = {
    pageSlug?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentBlockUncheckedUpdateManyInput = {
    pageSlug?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    id?: string
    provider?: string
    publicId: string
    url: string
    mime: string
    sizeBytes: number
    width?: number | null
    height?: number | null
    altText?: string | null
    folder?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uploader?: UserCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    provider?: string
    publicId: string
    url: string
    mime: string
    sizeBytes: number
    width?: number | null
    height?: number | null
    altText?: string | null
    folder?: string
    uploadedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUpdateInput = {
    provider?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    folder?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: UserUpdateOneWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    provider?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    folder?: StringFieldUpdateOperationsInput | string
    uploadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyInput = {
    id?: string
    provider?: string
    publicId: string
    url: string
    mime: string
    sizeBytes: number
    width?: number | null
    height?: number | null
    altText?: string | null
    folder?: string
    uploadedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    provider?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    folder?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    provider?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    folder?: StringFieldUpdateOperationsInput | string
    uploadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentHistoryCreateInput = {
    id?: string
    oldValue?: string | null
    newValue: string
    createdAt?: Date | string
    block: ContentBlockCreateNestedOneWithoutHistoryInput
    changer?: UserCreateNestedOneWithoutContentEditsInput
  }

  export type ContentHistoryUncheckedCreateInput = {
    id?: string
    blockId: string
    oldValue?: string | null
    newValue: string
    changedBy?: string | null
    createdAt?: Date | string
  }

  export type ContentHistoryUpdateInput = {
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: ContentBlockUpdateOneRequiredWithoutHistoryNestedInput
    changer?: UserUpdateOneWithoutContentEditsNestedInput
  }

  export type ContentHistoryUncheckedUpdateInput = {
    blockId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: StringFieldUpdateOperationsInput | string
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentHistoryCreateManyInput = {
    id?: string
    blockId: string
    oldValue?: string | null
    newValue: string
    changedBy?: string | null
    createdAt?: Date | string
  }

  export type ContentHistoryUpdateManyMutationInput = {
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentHistoryUncheckedUpdateManyInput = {
    blockId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: StringFieldUpdateOperationsInput | string
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type ContentBlockListRelationFilter = {
    every?: ContentBlockWhereInput
    some?: ContentBlockWhereInput
    none?: ContentBlockWhereInput
  }

  export type ContentHistoryListRelationFilter = {
    every?: ContentHistoryWhereInput
    some?: ContentHistoryWhereInput
    none?: ContentHistoryWhereInput
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    revokedAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    revokedAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    revokedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NewsPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    isFeatured?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsPostAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type NewsPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    category?: SortOrder
    isFeatured?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    category?: SortOrder
    isFeatured?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsPostSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    number?: SortOrder
    role?: SortOrder
    position?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    birthYear?: SortOrder
    hometown?: SortOrder
    photo?: SortOrder
    actionPhoto?: SortOrder
    bio?: SortOrder
    academicYear?: SortOrder
    isCaptain?: SortOrder
    ppg?: SortOrder
    rpg?: SortOrder
    apg?: SortOrder
    profile?: SortOrder
    sortOrder?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    number?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    birthYear?: SortOrder
    ppg?: SortOrder
    rpg?: SortOrder
    apg?: SortOrder
    sortOrder?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    number?: SortOrder
    role?: SortOrder
    position?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    birthYear?: SortOrder
    hometown?: SortOrder
    photo?: SortOrder
    actionPhoto?: SortOrder
    bio?: SortOrder
    academicYear?: SortOrder
    isCaptain?: SortOrder
    ppg?: SortOrder
    rpg?: SortOrder
    apg?: SortOrder
    sortOrder?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    number?: SortOrder
    role?: SortOrder
    position?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    birthYear?: SortOrder
    hometown?: SortOrder
    photo?: SortOrder
    actionPhoto?: SortOrder
    bio?: SortOrder
    academicYear?: SortOrder
    isCaptain?: SortOrder
    ppg?: SortOrder
    rpg?: SortOrder
    apg?: SortOrder
    sortOrder?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    number?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    birthYear?: SortOrder
    ppg?: SortOrder
    rpg?: SortOrder
    apg?: SortOrder
    sortOrder?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    competition?: SortOrder
    round?: SortOrder
    opponent?: SortOrder
    opponentShort?: SortOrder
    opponentLogo?: SortOrder
    isHome?: SortOrder
    tipsAt?: SortOrder
    venue?: SortOrder
    status?: SortOrder
    teamScore?: SortOrder
    opponentScore?: SortOrder
    note?: SortOrder
    streamUrl?: SortOrder
    ticketUrl?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    teamScore?: SortOrder
    opponentScore?: SortOrder
    sortOrder?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    competition?: SortOrder
    round?: SortOrder
    opponent?: SortOrder
    opponentShort?: SortOrder
    opponentLogo?: SortOrder
    isHome?: SortOrder
    tipsAt?: SortOrder
    venue?: SortOrder
    status?: SortOrder
    teamScore?: SortOrder
    opponentScore?: SortOrder
    note?: SortOrder
    streamUrl?: SortOrder
    ticketUrl?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    competition?: SortOrder
    round?: SortOrder
    opponent?: SortOrder
    opponentShort?: SortOrder
    opponentLogo?: SortOrder
    isHome?: SortOrder
    tipsAt?: SortOrder
    venue?: SortOrder
    status?: SortOrder
    teamScore?: SortOrder
    opponentScore?: SortOrder
    note?: SortOrder
    streamUrl?: SortOrder
    ticketUrl?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    teamScore?: SortOrder
    opponentScore?: SortOrder
    sortOrder?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type LiveGameCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    period?: SortOrder
    clockSeconds?: SortOrder
    clockRunning?: SortOrder
    teamScore?: SortOrder
    opponentScore?: SortOrder
    teamFouls?: SortOrder
    opponentFouls?: SortOrder
    timeouts?: SortOrder
    lineup?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveGameAvgOrderByAggregateInput = {
    period?: SortOrder
    clockSeconds?: SortOrder
    teamScore?: SortOrder
    opponentScore?: SortOrder
    teamFouls?: SortOrder
    opponentFouls?: SortOrder
    timeouts?: SortOrder
  }

  export type LiveGameMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    period?: SortOrder
    clockSeconds?: SortOrder
    clockRunning?: SortOrder
    teamScore?: SortOrder
    opponentScore?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveGameMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    period?: SortOrder
    clockSeconds?: SortOrder
    clockRunning?: SortOrder
    teamScore?: SortOrder
    opponentScore?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveGameSumOrderByAggregateInput = {
    period?: SortOrder
    clockSeconds?: SortOrder
    teamScore?: SortOrder
    opponentScore?: SortOrder
    teamFouls?: SortOrder
    opponentFouls?: SortOrder
    timeouts?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type LiveGameEventCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    reversed?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveGameEventMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    type?: SortOrder
    reversed?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveGameEventMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    type?: SortOrder
    reversed?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StandingRowCountOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    teamShort?: SortOrder
    teamLogo?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    sortOrder?: SortOrder
    isCurrent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StandingRowAvgOrderByAggregateInput = {
    wins?: SortOrder
    losses?: SortOrder
    sortOrder?: SortOrder
  }

  export type StandingRowMaxOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    teamShort?: SortOrder
    teamLogo?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    sortOrder?: SortOrder
    isCurrent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StandingRowMinOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    teamShort?: SortOrder
    teamLogo?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    sortOrder?: SortOrder
    isCurrent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StandingRowSumOrderByAggregateInput = {
    wins?: SortOrder
    losses?: SortOrder
    sortOrder?: SortOrder
  }

  export type PartnerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type PartnerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type MediaAlbumCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    coverImage?: SortOrder
    images?: SortOrder
    eventDate?: SortOrder
    sortOrder?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaAlbumAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type MediaAlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    coverImage?: SortOrder
    eventDate?: SortOrder
    sortOrder?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaAlbumMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    coverImage?: SortOrder
    eventDate?: SortOrder
    sortOrder?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaAlbumSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ExecutiveCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    group?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    bio?: SortOrder
    bullets?: SortOrder
    sections?: SortOrder
    sortOrder?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExecutiveAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ExecutiveMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    group?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    bio?: SortOrder
    sortOrder?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExecutiveMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    group?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    bio?: SortOrder
    sortOrder?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExecutiveSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    thumbnail?: SortOrder
    videoUrl?: SortOrder
    youtubeId?: SortOrder
    durationSec?: SortOrder
    isFeatured?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    durationSec?: SortOrder
    sortOrder?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    thumbnail?: SortOrder
    videoUrl?: SortOrder
    youtubeId?: SortOrder
    durationSec?: SortOrder
    isFeatured?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    thumbnail?: SortOrder
    videoUrl?: SortOrder
    youtubeId?: SortOrder
    durationSec?: SortOrder
    isFeatured?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    durationSec?: SortOrder
    sortOrder?: SortOrder
  }

  export type ShopProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    price?: SortOrder
    compareAtPrice?: SortOrder
    image?: SortOrder
    url?: SortOrder
    sizes?: SortOrder
    badge?: SortOrder
    isVisible?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopProductAvgOrderByAggregateInput = {
    price?: SortOrder
    compareAtPrice?: SortOrder
    sortOrder?: SortOrder
  }

  export type ShopProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    price?: SortOrder
    compareAtPrice?: SortOrder
    image?: SortOrder
    url?: SortOrder
    badge?: SortOrder
    isVisible?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    price?: SortOrder
    compareAtPrice?: SortOrder
    image?: SortOrder
    url?: SortOrder
    badge?: SortOrder
    isVisible?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopProductSumOrderByAggregateInput = {
    price?: SortOrder
    compareAtPrice?: SortOrder
    sortOrder?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    note?: SortOrder
    items?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    note?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    note?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type SiteContentPageSectionCompoundUniqueInput = {
    page: string
    section: string
  }

  export type SiteContentCountOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    section?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteContentMaxOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    section?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteContentMinOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    section?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ContentBlockPageSlugKeyLocaleCompoundUniqueInput = {
    pageSlug: string
    key: string
    locale: string
  }

  export type ContentBlockCountOrderByAggregateInput = {
    id?: SortOrder
    pageSlug?: SortOrder
    key?: SortOrder
    locale?: SortOrder
    type?: SortOrder
    value?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    pageSlug?: SortOrder
    key?: SortOrder
    locale?: SortOrder
    type?: SortOrder
    value?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentBlockMinOrderByAggregateInput = {
    id?: SortOrder
    pageSlug?: SortOrder
    key?: SortOrder
    locale?: SortOrder
    type?: SortOrder
    value?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    publicId?: SortOrder
    url?: SortOrder
    mime?: SortOrder
    sizeBytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
    altText?: SortOrder
    folder?: SortOrder
    uploadedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaAvgOrderByAggregateInput = {
    sizeBytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    publicId?: SortOrder
    url?: SortOrder
    mime?: SortOrder
    sizeBytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
    altText?: SortOrder
    folder?: SortOrder
    uploadedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    publicId?: SortOrder
    url?: SortOrder
    mime?: SortOrder
    sizeBytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
    altText?: SortOrder
    folder?: SortOrder
    uploadedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaSumOrderByAggregateInput = {
    sizeBytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type ContentBlockScalarRelationFilter = {
    is?: ContentBlockWhereInput
    isNot?: ContentBlockWhereInput
  }

  export type ContentHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    changedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ContentHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    changedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ContentHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    changedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type ContentBlockCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<ContentBlockCreateWithoutUpdaterInput, ContentBlockUncheckedCreateWithoutUpdaterInput> | ContentBlockCreateWithoutUpdaterInput[] | ContentBlockUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: ContentBlockCreateOrConnectWithoutUpdaterInput | ContentBlockCreateOrConnectWithoutUpdaterInput[]
    createMany?: ContentBlockCreateManyUpdaterInputEnvelope
    connect?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
  }

  export type ContentHistoryCreateNestedManyWithoutChangerInput = {
    create?: XOR<ContentHistoryCreateWithoutChangerInput, ContentHistoryUncheckedCreateWithoutChangerInput> | ContentHistoryCreateWithoutChangerInput[] | ContentHistoryUncheckedCreateWithoutChangerInput[]
    connectOrCreate?: ContentHistoryCreateOrConnectWithoutChangerInput | ContentHistoryCreateOrConnectWithoutChangerInput[]
    createMany?: ContentHistoryCreateManyChangerInputEnvelope
    connect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
  }

  export type MediaCreateNestedManyWithoutUploaderInput = {
    create?: XOR<MediaCreateWithoutUploaderInput, MediaUncheckedCreateWithoutUploaderInput> | MediaCreateWithoutUploaderInput[] | MediaUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutUploaderInput | MediaCreateOrConnectWithoutUploaderInput[]
    createMany?: MediaCreateManyUploaderInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type ContentBlockUncheckedCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<ContentBlockCreateWithoutUpdaterInput, ContentBlockUncheckedCreateWithoutUpdaterInput> | ContentBlockCreateWithoutUpdaterInput[] | ContentBlockUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: ContentBlockCreateOrConnectWithoutUpdaterInput | ContentBlockCreateOrConnectWithoutUpdaterInput[]
    createMany?: ContentBlockCreateManyUpdaterInputEnvelope
    connect?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
  }

  export type ContentHistoryUncheckedCreateNestedManyWithoutChangerInput = {
    create?: XOR<ContentHistoryCreateWithoutChangerInput, ContentHistoryUncheckedCreateWithoutChangerInput> | ContentHistoryCreateWithoutChangerInput[] | ContentHistoryUncheckedCreateWithoutChangerInput[]
    connectOrCreate?: ContentHistoryCreateOrConnectWithoutChangerInput | ContentHistoryCreateOrConnectWithoutChangerInput[]
    createMany?: ContentHistoryCreateManyChangerInputEnvelope
    connect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: XOR<MediaCreateWithoutUploaderInput, MediaUncheckedCreateWithoutUploaderInput> | MediaCreateWithoutUploaderInput[] | MediaUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutUploaderInput | MediaCreateOrConnectWithoutUploaderInput[]
    createMany?: MediaCreateManyUploaderInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type ContentBlockUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<ContentBlockCreateWithoutUpdaterInput, ContentBlockUncheckedCreateWithoutUpdaterInput> | ContentBlockCreateWithoutUpdaterInput[] | ContentBlockUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: ContentBlockCreateOrConnectWithoutUpdaterInput | ContentBlockCreateOrConnectWithoutUpdaterInput[]
    upsert?: ContentBlockUpsertWithWhereUniqueWithoutUpdaterInput | ContentBlockUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: ContentBlockCreateManyUpdaterInputEnvelope
    set?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
    disconnect?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
    delete?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
    connect?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
    update?: ContentBlockUpdateWithWhereUniqueWithoutUpdaterInput | ContentBlockUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: ContentBlockUpdateManyWithWhereWithoutUpdaterInput | ContentBlockUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: ContentBlockScalarWhereInput | ContentBlockScalarWhereInput[]
  }

  export type ContentHistoryUpdateManyWithoutChangerNestedInput = {
    create?: XOR<ContentHistoryCreateWithoutChangerInput, ContentHistoryUncheckedCreateWithoutChangerInput> | ContentHistoryCreateWithoutChangerInput[] | ContentHistoryUncheckedCreateWithoutChangerInput[]
    connectOrCreate?: ContentHistoryCreateOrConnectWithoutChangerInput | ContentHistoryCreateOrConnectWithoutChangerInput[]
    upsert?: ContentHistoryUpsertWithWhereUniqueWithoutChangerInput | ContentHistoryUpsertWithWhereUniqueWithoutChangerInput[]
    createMany?: ContentHistoryCreateManyChangerInputEnvelope
    set?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    disconnect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    delete?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    connect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    update?: ContentHistoryUpdateWithWhereUniqueWithoutChangerInput | ContentHistoryUpdateWithWhereUniqueWithoutChangerInput[]
    updateMany?: ContentHistoryUpdateManyWithWhereWithoutChangerInput | ContentHistoryUpdateManyWithWhereWithoutChangerInput[]
    deleteMany?: ContentHistoryScalarWhereInput | ContentHistoryScalarWhereInput[]
  }

  export type MediaUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<MediaCreateWithoutUploaderInput, MediaUncheckedCreateWithoutUploaderInput> | MediaCreateWithoutUploaderInput[] | MediaUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutUploaderInput | MediaCreateOrConnectWithoutUploaderInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutUploaderInput | MediaUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: MediaCreateManyUploaderInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutUploaderInput | MediaUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutUploaderInput | MediaUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type ContentBlockUncheckedUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<ContentBlockCreateWithoutUpdaterInput, ContentBlockUncheckedCreateWithoutUpdaterInput> | ContentBlockCreateWithoutUpdaterInput[] | ContentBlockUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: ContentBlockCreateOrConnectWithoutUpdaterInput | ContentBlockCreateOrConnectWithoutUpdaterInput[]
    upsert?: ContentBlockUpsertWithWhereUniqueWithoutUpdaterInput | ContentBlockUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: ContentBlockCreateManyUpdaterInputEnvelope
    set?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
    disconnect?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
    delete?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
    connect?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
    update?: ContentBlockUpdateWithWhereUniqueWithoutUpdaterInput | ContentBlockUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: ContentBlockUpdateManyWithWhereWithoutUpdaterInput | ContentBlockUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: ContentBlockScalarWhereInput | ContentBlockScalarWhereInput[]
  }

  export type ContentHistoryUncheckedUpdateManyWithoutChangerNestedInput = {
    create?: XOR<ContentHistoryCreateWithoutChangerInput, ContentHistoryUncheckedCreateWithoutChangerInput> | ContentHistoryCreateWithoutChangerInput[] | ContentHistoryUncheckedCreateWithoutChangerInput[]
    connectOrCreate?: ContentHistoryCreateOrConnectWithoutChangerInput | ContentHistoryCreateOrConnectWithoutChangerInput[]
    upsert?: ContentHistoryUpsertWithWhereUniqueWithoutChangerInput | ContentHistoryUpsertWithWhereUniqueWithoutChangerInput[]
    createMany?: ContentHistoryCreateManyChangerInputEnvelope
    set?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    disconnect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    delete?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    connect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    update?: ContentHistoryUpdateWithWhereUniqueWithoutChangerInput | ContentHistoryUpdateWithWhereUniqueWithoutChangerInput[]
    updateMany?: ContentHistoryUpdateManyWithWhereWithoutChangerInput | ContentHistoryUpdateManyWithWhereWithoutChangerInput[]
    deleteMany?: ContentHistoryScalarWhereInput | ContentHistoryScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<MediaCreateWithoutUploaderInput, MediaUncheckedCreateWithoutUploaderInput> | MediaCreateWithoutUploaderInput[] | MediaUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutUploaderInput | MediaCreateOrConnectWithoutUploaderInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutUploaderInput | MediaUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: MediaCreateManyUploaderInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutUploaderInput | MediaUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutUploaderInput | MediaUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type NewsPostCreatetagsInput = {
    set: string[]
  }

  export type NewsPostUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type LiveGameCreateteamFoulsInput = {
    set: number[]
  }

  export type LiveGameCreateopponentFoulsInput = {
    set: number[]
  }

  export type LiveGameCreatetimeoutsInput = {
    set: number[]
  }

  export type LiveGameCreatelineupInput = {
    set: string[]
  }

  export type LiveGameUpdateteamFoulsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type LiveGameUpdateopponentFoulsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type LiveGameUpdatetimeoutsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type LiveGameUpdatelineupInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ExecutiveCreatebulletsInput = {
    set: string[]
  }

  export type ExecutiveUpdatebulletsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ShopProductCreatesizesInput = {
    set: string[]
  }

  export type ShopProductUpdatesizesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserCreateNestedOneWithoutContentBlocksInput = {
    create?: XOR<UserCreateWithoutContentBlocksInput, UserUncheckedCreateWithoutContentBlocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentBlocksInput
    connect?: UserWhereUniqueInput
  }

  export type ContentHistoryCreateNestedManyWithoutBlockInput = {
    create?: XOR<ContentHistoryCreateWithoutBlockInput, ContentHistoryUncheckedCreateWithoutBlockInput> | ContentHistoryCreateWithoutBlockInput[] | ContentHistoryUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: ContentHistoryCreateOrConnectWithoutBlockInput | ContentHistoryCreateOrConnectWithoutBlockInput[]
    createMany?: ContentHistoryCreateManyBlockInputEnvelope
    connect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
  }

  export type ContentHistoryUncheckedCreateNestedManyWithoutBlockInput = {
    create?: XOR<ContentHistoryCreateWithoutBlockInput, ContentHistoryUncheckedCreateWithoutBlockInput> | ContentHistoryCreateWithoutBlockInput[] | ContentHistoryUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: ContentHistoryCreateOrConnectWithoutBlockInput | ContentHistoryCreateOrConnectWithoutBlockInput[]
    createMany?: ContentHistoryCreateManyBlockInputEnvelope
    connect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutContentBlocksNestedInput = {
    create?: XOR<UserCreateWithoutContentBlocksInput, UserUncheckedCreateWithoutContentBlocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentBlocksInput
    upsert?: UserUpsertWithoutContentBlocksInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContentBlocksInput, UserUpdateWithoutContentBlocksInput>, UserUncheckedUpdateWithoutContentBlocksInput>
  }

  export type ContentHistoryUpdateManyWithoutBlockNestedInput = {
    create?: XOR<ContentHistoryCreateWithoutBlockInput, ContentHistoryUncheckedCreateWithoutBlockInput> | ContentHistoryCreateWithoutBlockInput[] | ContentHistoryUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: ContentHistoryCreateOrConnectWithoutBlockInput | ContentHistoryCreateOrConnectWithoutBlockInput[]
    upsert?: ContentHistoryUpsertWithWhereUniqueWithoutBlockInput | ContentHistoryUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: ContentHistoryCreateManyBlockInputEnvelope
    set?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    disconnect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    delete?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    connect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    update?: ContentHistoryUpdateWithWhereUniqueWithoutBlockInput | ContentHistoryUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: ContentHistoryUpdateManyWithWhereWithoutBlockInput | ContentHistoryUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: ContentHistoryScalarWhereInput | ContentHistoryScalarWhereInput[]
  }

  export type ContentHistoryUncheckedUpdateManyWithoutBlockNestedInput = {
    create?: XOR<ContentHistoryCreateWithoutBlockInput, ContentHistoryUncheckedCreateWithoutBlockInput> | ContentHistoryCreateWithoutBlockInput[] | ContentHistoryUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: ContentHistoryCreateOrConnectWithoutBlockInput | ContentHistoryCreateOrConnectWithoutBlockInput[]
    upsert?: ContentHistoryUpsertWithWhereUniqueWithoutBlockInput | ContentHistoryUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: ContentHistoryCreateManyBlockInputEnvelope
    set?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    disconnect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    delete?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    connect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    update?: ContentHistoryUpdateWithWhereUniqueWithoutBlockInput | ContentHistoryUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: ContentHistoryUpdateManyWithWhereWithoutBlockInput | ContentHistoryUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: ContentHistoryScalarWhereInput | ContentHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMediaInput = {
    create?: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediaInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutMediaNestedInput = {
    create?: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediaInput
    upsert?: UserUpsertWithoutMediaInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMediaInput, UserUpdateWithoutMediaInput>, UserUncheckedUpdateWithoutMediaInput>
  }

  export type ContentBlockCreateNestedOneWithoutHistoryInput = {
    create?: XOR<ContentBlockCreateWithoutHistoryInput, ContentBlockUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: ContentBlockCreateOrConnectWithoutHistoryInput
    connect?: ContentBlockWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutContentEditsInput = {
    create?: XOR<UserCreateWithoutContentEditsInput, UserUncheckedCreateWithoutContentEditsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentEditsInput
    connect?: UserWhereUniqueInput
  }

  export type ContentBlockUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<ContentBlockCreateWithoutHistoryInput, ContentBlockUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: ContentBlockCreateOrConnectWithoutHistoryInput
    upsert?: ContentBlockUpsertWithoutHistoryInput
    connect?: ContentBlockWhereUniqueInput
    update?: XOR<XOR<ContentBlockUpdateToOneWithWhereWithoutHistoryInput, ContentBlockUpdateWithoutHistoryInput>, ContentBlockUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateOneWithoutContentEditsNestedInput = {
    create?: XOR<UserCreateWithoutContentEditsInput, UserUncheckedCreateWithoutContentEditsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentEditsInput
    upsert?: UserUpsertWithoutContentEditsInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContentEditsInput, UserUpdateWithoutContentEditsInput>, UserUncheckedUpdateWithoutContentEditsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    revokedAt?: Date | string | null
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    revokedAt?: Date | string | null
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
  }

  export type ContentBlockCreateWithoutUpdaterInput = {
    id?: string
    pageSlug: string
    key: string
    locale: string
    type: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: ContentHistoryCreateNestedManyWithoutBlockInput
  }

  export type ContentBlockUncheckedCreateWithoutUpdaterInput = {
    id?: string
    pageSlug: string
    key: string
    locale: string
    type: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: ContentHistoryUncheckedCreateNestedManyWithoutBlockInput
  }

  export type ContentBlockCreateOrConnectWithoutUpdaterInput = {
    where: ContentBlockWhereUniqueInput
    create: XOR<ContentBlockCreateWithoutUpdaterInput, ContentBlockUncheckedCreateWithoutUpdaterInput>
  }

  export type ContentBlockCreateManyUpdaterInputEnvelope = {
    data: ContentBlockCreateManyUpdaterInput | ContentBlockCreateManyUpdaterInput[]
  }

  export type ContentHistoryCreateWithoutChangerInput = {
    id?: string
    oldValue?: string | null
    newValue: string
    createdAt?: Date | string
    block: ContentBlockCreateNestedOneWithoutHistoryInput
  }

  export type ContentHistoryUncheckedCreateWithoutChangerInput = {
    id?: string
    blockId: string
    oldValue?: string | null
    newValue: string
    createdAt?: Date | string
  }

  export type ContentHistoryCreateOrConnectWithoutChangerInput = {
    where: ContentHistoryWhereUniqueInput
    create: XOR<ContentHistoryCreateWithoutChangerInput, ContentHistoryUncheckedCreateWithoutChangerInput>
  }

  export type ContentHistoryCreateManyChangerInputEnvelope = {
    data: ContentHistoryCreateManyChangerInput | ContentHistoryCreateManyChangerInput[]
  }

  export type MediaCreateWithoutUploaderInput = {
    id?: string
    provider?: string
    publicId: string
    url: string
    mime: string
    sizeBytes: number
    width?: number | null
    height?: number | null
    altText?: string | null
    folder?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUncheckedCreateWithoutUploaderInput = {
    id?: string
    provider?: string
    publicId: string
    url: string
    mime: string
    sizeBytes: number
    width?: number | null
    height?: number | null
    altText?: string | null
    folder?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaCreateOrConnectWithoutUploaderInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutUploaderInput, MediaUncheckedCreateWithoutUploaderInput>
  }

  export type MediaCreateManyUploaderInputEnvelope = {
    data: MediaCreateManyUploaderInput | MediaCreateManyUploaderInput[]
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
  }

  export type ContentBlockUpsertWithWhereUniqueWithoutUpdaterInput = {
    where: ContentBlockWhereUniqueInput
    update: XOR<ContentBlockUpdateWithoutUpdaterInput, ContentBlockUncheckedUpdateWithoutUpdaterInput>
    create: XOR<ContentBlockCreateWithoutUpdaterInput, ContentBlockUncheckedCreateWithoutUpdaterInput>
  }

  export type ContentBlockUpdateWithWhereUniqueWithoutUpdaterInput = {
    where: ContentBlockWhereUniqueInput
    data: XOR<ContentBlockUpdateWithoutUpdaterInput, ContentBlockUncheckedUpdateWithoutUpdaterInput>
  }

  export type ContentBlockUpdateManyWithWhereWithoutUpdaterInput = {
    where: ContentBlockScalarWhereInput
    data: XOR<ContentBlockUpdateManyMutationInput, ContentBlockUncheckedUpdateManyWithoutUpdaterInput>
  }

  export type ContentBlockScalarWhereInput = {
    AND?: ContentBlockScalarWhereInput | ContentBlockScalarWhereInput[]
    OR?: ContentBlockScalarWhereInput[]
    NOT?: ContentBlockScalarWhereInput | ContentBlockScalarWhereInput[]
    id?: StringFilter<"ContentBlock"> | string
    pageSlug?: StringFilter<"ContentBlock"> | string
    key?: StringFilter<"ContentBlock"> | string
    locale?: StringFilter<"ContentBlock"> | string
    type?: StringFilter<"ContentBlock"> | string
    value?: StringFilter<"ContentBlock"> | string
    updatedBy?: StringNullableFilter<"ContentBlock"> | string | null
    createdAt?: DateTimeFilter<"ContentBlock"> | Date | string
    updatedAt?: DateTimeFilter<"ContentBlock"> | Date | string
  }

  export type ContentHistoryUpsertWithWhereUniqueWithoutChangerInput = {
    where: ContentHistoryWhereUniqueInput
    update: XOR<ContentHistoryUpdateWithoutChangerInput, ContentHistoryUncheckedUpdateWithoutChangerInput>
    create: XOR<ContentHistoryCreateWithoutChangerInput, ContentHistoryUncheckedCreateWithoutChangerInput>
  }

  export type ContentHistoryUpdateWithWhereUniqueWithoutChangerInput = {
    where: ContentHistoryWhereUniqueInput
    data: XOR<ContentHistoryUpdateWithoutChangerInput, ContentHistoryUncheckedUpdateWithoutChangerInput>
  }

  export type ContentHistoryUpdateManyWithWhereWithoutChangerInput = {
    where: ContentHistoryScalarWhereInput
    data: XOR<ContentHistoryUpdateManyMutationInput, ContentHistoryUncheckedUpdateManyWithoutChangerInput>
  }

  export type ContentHistoryScalarWhereInput = {
    AND?: ContentHistoryScalarWhereInput | ContentHistoryScalarWhereInput[]
    OR?: ContentHistoryScalarWhereInput[]
    NOT?: ContentHistoryScalarWhereInput | ContentHistoryScalarWhereInput[]
    id?: StringFilter<"ContentHistory"> | string
    blockId?: StringFilter<"ContentHistory"> | string
    oldValue?: StringNullableFilter<"ContentHistory"> | string | null
    newValue?: StringFilter<"ContentHistory"> | string
    changedBy?: StringNullableFilter<"ContentHistory"> | string | null
    createdAt?: DateTimeFilter<"ContentHistory"> | Date | string
  }

  export type MediaUpsertWithWhereUniqueWithoutUploaderInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutUploaderInput, MediaUncheckedUpdateWithoutUploaderInput>
    create: XOR<MediaCreateWithoutUploaderInput, MediaUncheckedCreateWithoutUploaderInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutUploaderInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutUploaderInput, MediaUncheckedUpdateWithoutUploaderInput>
  }

  export type MediaUpdateManyWithWhereWithoutUploaderInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutUploaderInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: StringFilter<"Media"> | string
    provider?: StringFilter<"Media"> | string
    publicId?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    mime?: StringFilter<"Media"> | string
    sizeBytes?: IntFilter<"Media"> | number
    width?: IntNullableFilter<"Media"> | number | null
    height?: IntNullableFilter<"Media"> | number | null
    altText?: StringNullableFilter<"Media"> | string | null
    folder?: StringFilter<"Media"> | string
    uploadedBy?: StringNullableFilter<"Media"> | string | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    username?: string | null
    passwordHash: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contentBlocks?: ContentBlockCreateNestedManyWithoutUpdaterInput
    contentEdits?: ContentHistoryCreateNestedManyWithoutChangerInput
    media?: MediaCreateNestedManyWithoutUploaderInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    username?: string | null
    passwordHash: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contentBlocks?: ContentBlockUncheckedCreateNestedManyWithoutUpdaterInput
    contentEdits?: ContentHistoryUncheckedCreateNestedManyWithoutChangerInput
    media?: MediaUncheckedCreateNestedManyWithoutUploaderInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentBlocks?: ContentBlockUpdateManyWithoutUpdaterNestedInput
    contentEdits?: ContentHistoryUpdateManyWithoutChangerNestedInput
    media?: MediaUpdateManyWithoutUploaderNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentBlocks?: ContentBlockUncheckedUpdateManyWithoutUpdaterNestedInput
    contentEdits?: ContentHistoryUncheckedUpdateManyWithoutChangerNestedInput
    media?: MediaUncheckedUpdateManyWithoutUploaderNestedInput
  }

  export type UserCreateWithoutContentBlocksInput = {
    id?: string
    email: string
    username?: string | null
    passwordHash: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    contentEdits?: ContentHistoryCreateNestedManyWithoutChangerInput
    media?: MediaCreateNestedManyWithoutUploaderInput
  }

  export type UserUncheckedCreateWithoutContentBlocksInput = {
    id?: string
    email: string
    username?: string | null
    passwordHash: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    contentEdits?: ContentHistoryUncheckedCreateNestedManyWithoutChangerInput
    media?: MediaUncheckedCreateNestedManyWithoutUploaderInput
  }

  export type UserCreateOrConnectWithoutContentBlocksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContentBlocksInput, UserUncheckedCreateWithoutContentBlocksInput>
  }

  export type ContentHistoryCreateWithoutBlockInput = {
    id?: string
    oldValue?: string | null
    newValue: string
    createdAt?: Date | string
    changer?: UserCreateNestedOneWithoutContentEditsInput
  }

  export type ContentHistoryUncheckedCreateWithoutBlockInput = {
    id?: string
    oldValue?: string | null
    newValue: string
    changedBy?: string | null
    createdAt?: Date | string
  }

  export type ContentHistoryCreateOrConnectWithoutBlockInput = {
    where: ContentHistoryWhereUniqueInput
    create: XOR<ContentHistoryCreateWithoutBlockInput, ContentHistoryUncheckedCreateWithoutBlockInput>
  }

  export type ContentHistoryCreateManyBlockInputEnvelope = {
    data: ContentHistoryCreateManyBlockInput | ContentHistoryCreateManyBlockInput[]
  }

  export type UserUpsertWithoutContentBlocksInput = {
    update: XOR<UserUpdateWithoutContentBlocksInput, UserUncheckedUpdateWithoutContentBlocksInput>
    create: XOR<UserCreateWithoutContentBlocksInput, UserUncheckedCreateWithoutContentBlocksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContentBlocksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContentBlocksInput, UserUncheckedUpdateWithoutContentBlocksInput>
  }

  export type UserUpdateWithoutContentBlocksInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    contentEdits?: ContentHistoryUpdateManyWithoutChangerNestedInput
    media?: MediaUpdateManyWithoutUploaderNestedInput
  }

  export type UserUncheckedUpdateWithoutContentBlocksInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    contentEdits?: ContentHistoryUncheckedUpdateManyWithoutChangerNestedInput
    media?: MediaUncheckedUpdateManyWithoutUploaderNestedInput
  }

  export type ContentHistoryUpsertWithWhereUniqueWithoutBlockInput = {
    where: ContentHistoryWhereUniqueInput
    update: XOR<ContentHistoryUpdateWithoutBlockInput, ContentHistoryUncheckedUpdateWithoutBlockInput>
    create: XOR<ContentHistoryCreateWithoutBlockInput, ContentHistoryUncheckedCreateWithoutBlockInput>
  }

  export type ContentHistoryUpdateWithWhereUniqueWithoutBlockInput = {
    where: ContentHistoryWhereUniqueInput
    data: XOR<ContentHistoryUpdateWithoutBlockInput, ContentHistoryUncheckedUpdateWithoutBlockInput>
  }

  export type ContentHistoryUpdateManyWithWhereWithoutBlockInput = {
    where: ContentHistoryScalarWhereInput
    data: XOR<ContentHistoryUpdateManyMutationInput, ContentHistoryUncheckedUpdateManyWithoutBlockInput>
  }

  export type UserCreateWithoutMediaInput = {
    id?: string
    email: string
    username?: string | null
    passwordHash: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    contentBlocks?: ContentBlockCreateNestedManyWithoutUpdaterInput
    contentEdits?: ContentHistoryCreateNestedManyWithoutChangerInput
  }

  export type UserUncheckedCreateWithoutMediaInput = {
    id?: string
    email: string
    username?: string | null
    passwordHash: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    contentBlocks?: ContentBlockUncheckedCreateNestedManyWithoutUpdaterInput
    contentEdits?: ContentHistoryUncheckedCreateNestedManyWithoutChangerInput
  }

  export type UserCreateOrConnectWithoutMediaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
  }

  export type UserUpsertWithoutMediaInput = {
    update: XOR<UserUpdateWithoutMediaInput, UserUncheckedUpdateWithoutMediaInput>
    create: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMediaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMediaInput, UserUncheckedUpdateWithoutMediaInput>
  }

  export type UserUpdateWithoutMediaInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    contentBlocks?: ContentBlockUpdateManyWithoutUpdaterNestedInput
    contentEdits?: ContentHistoryUpdateManyWithoutChangerNestedInput
  }

  export type UserUncheckedUpdateWithoutMediaInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    contentBlocks?: ContentBlockUncheckedUpdateManyWithoutUpdaterNestedInput
    contentEdits?: ContentHistoryUncheckedUpdateManyWithoutChangerNestedInput
  }

  export type ContentBlockCreateWithoutHistoryInput = {
    id?: string
    pageSlug: string
    key: string
    locale: string
    type: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updater?: UserCreateNestedOneWithoutContentBlocksInput
  }

  export type ContentBlockUncheckedCreateWithoutHistoryInput = {
    id?: string
    pageSlug: string
    key: string
    locale: string
    type: string
    value: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentBlockCreateOrConnectWithoutHistoryInput = {
    where: ContentBlockWhereUniqueInput
    create: XOR<ContentBlockCreateWithoutHistoryInput, ContentBlockUncheckedCreateWithoutHistoryInput>
  }

  export type UserCreateWithoutContentEditsInput = {
    id?: string
    email: string
    username?: string | null
    passwordHash: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    contentBlocks?: ContentBlockCreateNestedManyWithoutUpdaterInput
    media?: MediaCreateNestedManyWithoutUploaderInput
  }

  export type UserUncheckedCreateWithoutContentEditsInput = {
    id?: string
    email: string
    username?: string | null
    passwordHash: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    contentBlocks?: ContentBlockUncheckedCreateNestedManyWithoutUpdaterInput
    media?: MediaUncheckedCreateNestedManyWithoutUploaderInput
  }

  export type UserCreateOrConnectWithoutContentEditsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContentEditsInput, UserUncheckedCreateWithoutContentEditsInput>
  }

  export type ContentBlockUpsertWithoutHistoryInput = {
    update: XOR<ContentBlockUpdateWithoutHistoryInput, ContentBlockUncheckedUpdateWithoutHistoryInput>
    create: XOR<ContentBlockCreateWithoutHistoryInput, ContentBlockUncheckedCreateWithoutHistoryInput>
    where?: ContentBlockWhereInput
  }

  export type ContentBlockUpdateToOneWithWhereWithoutHistoryInput = {
    where?: ContentBlockWhereInput
    data: XOR<ContentBlockUpdateWithoutHistoryInput, ContentBlockUncheckedUpdateWithoutHistoryInput>
  }

  export type ContentBlockUpdateWithoutHistoryInput = {
    pageSlug?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updater?: UserUpdateOneWithoutContentBlocksNestedInput
  }

  export type ContentBlockUncheckedUpdateWithoutHistoryInput = {
    pageSlug?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutContentEditsInput = {
    update: XOR<UserUpdateWithoutContentEditsInput, UserUncheckedUpdateWithoutContentEditsInput>
    create: XOR<UserCreateWithoutContentEditsInput, UserUncheckedCreateWithoutContentEditsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContentEditsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContentEditsInput, UserUncheckedUpdateWithoutContentEditsInput>
  }

  export type UserUpdateWithoutContentEditsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    contentBlocks?: ContentBlockUpdateManyWithoutUpdaterNestedInput
    media?: MediaUpdateManyWithoutUploaderNestedInput
  }

  export type UserUncheckedUpdateWithoutContentEditsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    contentBlocks?: ContentBlockUncheckedUpdateManyWithoutUpdaterNestedInput
    media?: MediaUncheckedUpdateManyWithoutUploaderNestedInput
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    revokedAt?: Date | string | null
  }

  export type ContentBlockCreateManyUpdaterInput = {
    id?: string
    pageSlug: string
    key: string
    locale: string
    type: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentHistoryCreateManyChangerInput = {
    id?: string
    blockId: string
    oldValue?: string | null
    newValue: string
    createdAt?: Date | string
  }

  export type MediaCreateManyUploaderInput = {
    id?: string
    provider?: string
    publicId: string
    url: string
    mime: string
    sizeBytes: number
    width?: number | null
    height?: number | null
    altText?: string | null
    folder?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContentBlockUpdateWithoutUpdaterInput = {
    pageSlug?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: ContentHistoryUpdateManyWithoutBlockNestedInput
  }

  export type ContentBlockUncheckedUpdateWithoutUpdaterInput = {
    pageSlug?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: ContentHistoryUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type ContentBlockUncheckedUpdateManyWithoutUpdaterInput = {
    pageSlug?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentHistoryUpdateWithoutChangerInput = {
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: ContentBlockUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type ContentHistoryUncheckedUpdateWithoutChangerInput = {
    blockId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentHistoryUncheckedUpdateManyWithoutChangerInput = {
    blockId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpdateWithoutUploaderInput = {
    provider?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    folder?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateWithoutUploaderInput = {
    provider?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    folder?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyWithoutUploaderInput = {
    provider?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    folder?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentHistoryCreateManyBlockInput = {
    id?: string
    oldValue?: string | null
    newValue: string
    changedBy?: string | null
    createdAt?: Date | string
  }

  export type ContentHistoryUpdateWithoutBlockInput = {
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changer?: UserUpdateOneWithoutContentEditsNestedInput
  }

  export type ContentHistoryUncheckedUpdateWithoutBlockInput = {
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: StringFieldUpdateOperationsInput | string
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentHistoryUncheckedUpdateManyWithoutBlockInput = {
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: StringFieldUpdateOperationsInput | string
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}