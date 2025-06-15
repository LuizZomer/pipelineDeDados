
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
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model Developer
 * 
 */
export type Developer = $Result.DefaultSelection<Prisma.$DeveloperPayload>
/**
 * Model Platform
 * 
 */
export type Platform = $Result.DefaultSelection<Prisma.$PlatformPayload>
/**
 * Model Gender
 * 
 */
export type Gender = $Result.DefaultSelection<Prisma.$GenderPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model Achievement
 * 
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>
/**
 * Model UnlockedAchievement
 * 
 */
export type UnlockedAchievement = $Result.DefaultSelection<Prisma.$UnlockedAchievementPayload>
/**
 * Model Dlc
 * 
 */
export type Dlc = $Result.DefaultSelection<Prisma.$DlcPayload>
/**
 * Model GameGender
 * 
 */
export type GameGender = $Result.DefaultSelection<Prisma.$GameGenderPayload>
/**
 * Model GameTag
 * 
 */
export type GameTag = $Result.DefaultSelection<Prisma.$GameTagPayload>
/**
 * Model GamePlatform
 * 
 */
export type GamePlatform = $Result.DefaultSelection<Prisma.$GamePlatformPayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


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
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.developer`: Exposes CRUD operations for the **Developer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Developers
    * const developers = await prisma.developer.findMany()
    * ```
    */
  get developer(): Prisma.DeveloperDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platform`: Exposes CRUD operations for the **Platform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Platforms
    * const platforms = await prisma.platform.findMany()
    * ```
    */
  get platform(): Prisma.PlatformDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gender`: Exposes CRUD operations for the **Gender** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genders
    * const genders = await prisma.gender.findMany()
    * ```
    */
  get gender(): Prisma.GenderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievement.findMany()
    * ```
    */
  get achievement(): Prisma.AchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unlockedAchievement`: Exposes CRUD operations for the **UnlockedAchievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnlockedAchievements
    * const unlockedAchievements = await prisma.unlockedAchievement.findMany()
    * ```
    */
  get unlockedAchievement(): Prisma.UnlockedAchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dlc`: Exposes CRUD operations for the **Dlc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dlcs
    * const dlcs = await prisma.dlc.findMany()
    * ```
    */
  get dlc(): Prisma.DlcDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameGender`: Exposes CRUD operations for the **GameGender** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameGenders
    * const gameGenders = await prisma.gameGender.findMany()
    * ```
    */
  get gameGender(): Prisma.GameGenderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameTag`: Exposes CRUD operations for the **GameTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameTags
    * const gameTags = await prisma.gameTag.findMany()
    * ```
    */
  get gameTag(): Prisma.GameTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gamePlatform`: Exposes CRUD operations for the **GamePlatform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GamePlatforms
    * const gamePlatforms = await prisma.gamePlatform.findMany()
    * ```
    */
  get gamePlatform(): Prisma.GamePlatformDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Game: 'Game',
    Developer: 'Developer',
    Platform: 'Platform',
    Gender: 'Gender',
    Tag: 'Tag',
    Review: 'Review',
    Purchase: 'Purchase',
    Achievement: 'Achievement',
    UnlockedAchievement: 'UnlockedAchievement',
    Dlc: 'Dlc',
    GameGender: 'GameGender',
    GameTag: 'GameTag',
    GamePlatform: 'GamePlatform'
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
      modelProps: "user" | "game" | "developer" | "platform" | "gender" | "tag" | "review" | "purchase" | "achievement" | "unlockedAchievement" | "dlc" | "gameGender" | "gameTag" | "gamePlatform"
      txIsolationLevel: Prisma.TransactionIsolationLevel
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
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      Developer: {
        payload: Prisma.$DeveloperPayload<ExtArgs>
        fields: Prisma.DeveloperFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeveloperFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeveloperFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          findFirst: {
            args: Prisma.DeveloperFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeveloperFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          findMany: {
            args: Prisma.DeveloperFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>[]
          }
          create: {
            args: Prisma.DeveloperCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          createMany: {
            args: Prisma.DeveloperCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeveloperDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          update: {
            args: Prisma.DeveloperUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          deleteMany: {
            args: Prisma.DeveloperDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeveloperUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeveloperUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          aggregate: {
            args: Prisma.DeveloperAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeveloper>
          }
          groupBy: {
            args: Prisma.DeveloperGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeveloperGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeveloperCountArgs<ExtArgs>
            result: $Utils.Optional<DeveloperCountAggregateOutputType> | number
          }
        }
      }
      Platform: {
        payload: Prisma.$PlatformPayload<ExtArgs>
        fields: Prisma.PlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findFirst: {
            args: Prisma.PlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findMany: {
            args: Prisma.PlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          create: {
            args: Prisma.PlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          createMany: {
            args: Prisma.PlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          update: {
            args: Prisma.PlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          deleteMany: {
            args: Prisma.PlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          aggregate: {
            args: Prisma.PlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatform>
          }
          groupBy: {
            args: Prisma.PlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformCountAggregateOutputType> | number
          }
        }
      }
      Gender: {
        payload: Prisma.$GenderPayload<ExtArgs>
        fields: Prisma.GenderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          findFirst: {
            args: Prisma.GenderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          findMany: {
            args: Prisma.GenderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>[]
          }
          create: {
            args: Prisma.GenderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          createMany: {
            args: Prisma.GenderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GenderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          update: {
            args: Prisma.GenderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          deleteMany: {
            args: Prisma.GenderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GenderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          aggregate: {
            args: Prisma.GenderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGender>
          }
          groupBy: {
            args: Prisma.GenderGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenderGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenderCountArgs<ExtArgs>
            result: $Utils.Optional<GenderCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>
        fields: Prisma.AchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievement>
          }
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number
          }
        }
      }
      UnlockedAchievement: {
        payload: Prisma.$UnlockedAchievementPayload<ExtArgs>
        fields: Prisma.UnlockedAchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnlockedAchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockedAchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnlockedAchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockedAchievementPayload>
          }
          findFirst: {
            args: Prisma.UnlockedAchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockedAchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnlockedAchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockedAchievementPayload>
          }
          findMany: {
            args: Prisma.UnlockedAchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockedAchievementPayload>[]
          }
          create: {
            args: Prisma.UnlockedAchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockedAchievementPayload>
          }
          createMany: {
            args: Prisma.UnlockedAchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UnlockedAchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockedAchievementPayload>
          }
          update: {
            args: Prisma.UnlockedAchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockedAchievementPayload>
          }
          deleteMany: {
            args: Prisma.UnlockedAchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnlockedAchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnlockedAchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockedAchievementPayload>
          }
          aggregate: {
            args: Prisma.UnlockedAchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnlockedAchievement>
          }
          groupBy: {
            args: Prisma.UnlockedAchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnlockedAchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnlockedAchievementCountArgs<ExtArgs>
            result: $Utils.Optional<UnlockedAchievementCountAggregateOutputType> | number
          }
        }
      }
      Dlc: {
        payload: Prisma.$DlcPayload<ExtArgs>
        fields: Prisma.DlcFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DlcFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DlcPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DlcFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DlcPayload>
          }
          findFirst: {
            args: Prisma.DlcFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DlcPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DlcFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DlcPayload>
          }
          findMany: {
            args: Prisma.DlcFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DlcPayload>[]
          }
          create: {
            args: Prisma.DlcCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DlcPayload>
          }
          createMany: {
            args: Prisma.DlcCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DlcDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DlcPayload>
          }
          update: {
            args: Prisma.DlcUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DlcPayload>
          }
          deleteMany: {
            args: Prisma.DlcDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DlcUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DlcUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DlcPayload>
          }
          aggregate: {
            args: Prisma.DlcAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDlc>
          }
          groupBy: {
            args: Prisma.DlcGroupByArgs<ExtArgs>
            result: $Utils.Optional<DlcGroupByOutputType>[]
          }
          count: {
            args: Prisma.DlcCountArgs<ExtArgs>
            result: $Utils.Optional<DlcCountAggregateOutputType> | number
          }
        }
      }
      GameGender: {
        payload: Prisma.$GameGenderPayload<ExtArgs>
        fields: Prisma.GameGenderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameGenderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameGenderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameGenderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameGenderPayload>
          }
          findFirst: {
            args: Prisma.GameGenderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameGenderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameGenderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameGenderPayload>
          }
          findMany: {
            args: Prisma.GameGenderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameGenderPayload>[]
          }
          create: {
            args: Prisma.GameGenderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameGenderPayload>
          }
          createMany: {
            args: Prisma.GameGenderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GameGenderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameGenderPayload>
          }
          update: {
            args: Prisma.GameGenderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameGenderPayload>
          }
          deleteMany: {
            args: Prisma.GameGenderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameGenderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameGenderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameGenderPayload>
          }
          aggregate: {
            args: Prisma.GameGenderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameGender>
          }
          groupBy: {
            args: Prisma.GameGenderGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGenderGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameGenderCountArgs<ExtArgs>
            result: $Utils.Optional<GameGenderCountAggregateOutputType> | number
          }
        }
      }
      GameTag: {
        payload: Prisma.$GameTagPayload<ExtArgs>
        fields: Prisma.GameTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload>
          }
          findFirst: {
            args: Prisma.GameTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload>
          }
          findMany: {
            args: Prisma.GameTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload>[]
          }
          create: {
            args: Prisma.GameTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload>
          }
          createMany: {
            args: Prisma.GameTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GameTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload>
          }
          update: {
            args: Prisma.GameTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload>
          }
          deleteMany: {
            args: Prisma.GameTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload>
          }
          aggregate: {
            args: Prisma.GameTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameTag>
          }
          groupBy: {
            args: Prisma.GameTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameTagCountArgs<ExtArgs>
            result: $Utils.Optional<GameTagCountAggregateOutputType> | number
          }
        }
      }
      GamePlatform: {
        payload: Prisma.$GamePlatformPayload<ExtArgs>
        fields: Prisma.GamePlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GamePlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GamePlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlatformPayload>
          }
          findFirst: {
            args: Prisma.GamePlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GamePlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlatformPayload>
          }
          findMany: {
            args: Prisma.GamePlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlatformPayload>[]
          }
          create: {
            args: Prisma.GamePlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlatformPayload>
          }
          createMany: {
            args: Prisma.GamePlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GamePlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlatformPayload>
          }
          update: {
            args: Prisma.GamePlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlatformPayload>
          }
          deleteMany: {
            args: Prisma.GamePlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GamePlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GamePlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlatformPayload>
          }
          aggregate: {
            args: Prisma.GamePlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGamePlatform>
          }
          groupBy: {
            args: Prisma.GamePlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<GamePlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.GamePlatformCountArgs<ExtArgs>
            result: $Utils.Optional<GamePlatformCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    game?: GameOmit
    developer?: DeveloperOmit
    platform?: PlatformOmit
    gender?: GenderOmit
    tag?: TagOmit
    review?: ReviewOmit
    purchase?: PurchaseOmit
    achievement?: AchievementOmit
    unlockedAchievement?: UnlockedAchievementOmit
    dlc?: DlcOmit
    gameGender?: GameGenderOmit
    gameTag?: GameTagOmit
    gamePlatform?: GamePlatformOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    reviews: number
    purchases: number
    achievements: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    purchases?: boolean | UserCountOutputTypeCountPurchasesArgs
    achievements?: boolean | UserCountOutputTypeCountAchievementsArgs
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
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnlockedAchievementWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    reviews: number
    purchases: number
    achievements: number
    dlcs: number
    genres: number
    platforms: number
    tags: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | GameCountOutputTypeCountReviewsArgs
    purchases?: boolean | GameCountOutputTypeCountPurchasesArgs
    achievements?: boolean | GameCountOutputTypeCountAchievementsArgs
    dlcs?: boolean | GameCountOutputTypeCountDlcsArgs
    genres?: boolean | GameCountOutputTypeCountGenresArgs
    platforms?: boolean | GameCountOutputTypeCountPlatformsArgs
    tags?: boolean | GameCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountDlcsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DlcWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameGenderWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountPlatformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GamePlatformWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameTagWhereInput
  }


  /**
   * Count Type DeveloperCountOutputType
   */

  export type DeveloperCountOutputType = {
    games: number
  }

  export type DeveloperCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | DeveloperCountOutputTypeCountGamesArgs
  }

  // Custom InputTypes
  /**
   * DeveloperCountOutputType without action
   */
  export type DeveloperCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperCountOutputType
     */
    select?: DeveloperCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeveloperCountOutputType without action
   */
  export type DeveloperCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type PlatformCountOutputType
   */

  export type PlatformCountOutputType = {
    games: number
  }

  export type PlatformCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | PlatformCountOutputTypeCountGamesArgs
  }

  // Custom InputTypes
  /**
   * PlatformCountOutputType without action
   */
  export type PlatformCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCountOutputType
     */
    select?: PlatformCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlatformCountOutputType without action
   */
  export type PlatformCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GamePlatformWhereInput
  }


  /**
   * Count Type GenderCountOutputType
   */

  export type GenderCountOutputType = {
    games: number
  }

  export type GenderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | GenderCountOutputTypeCountGamesArgs
  }

  // Custom InputTypes
  /**
   * GenderCountOutputType without action
   */
  export type GenderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenderCountOutputType
     */
    select?: GenderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenderCountOutputType without action
   */
  export type GenderCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameGenderWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    games: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | TagCountOutputTypeCountGamesArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameTagWhereInput
  }


  /**
   * Count Type AchievementCountOutputType
   */

  export type AchievementCountOutputType = {
    unlockedAchievements: number
  }

  export type AchievementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unlockedAchievements?: boolean | AchievementCountOutputTypeCountUnlockedAchievementsArgs
  }

  // Custom InputTypes
  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementCountOutputType
     */
    select?: AchievementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeCountUnlockedAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnlockedAchievementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    achievements?: boolean | User$achievementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    achievements?: boolean | User$achievementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
      achievements: Prisma.$UnlockedAchievementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
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
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends User$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    achievements<T extends User$achievementsArgs<ExtArgs> = {}>(args?: Subset<T, User$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnlockedAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.purchases
   */
  export type User$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * User.achievements
   */
  export type User$achievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockedAchievement
     */
    select?: UnlockedAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockedAchievement
     */
    omit?: UnlockedAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockedAchievementInclude<ExtArgs> | null
    where?: UnlockedAchievementWhereInput
    orderBy?: UnlockedAchievementOrderByWithRelationInput | UnlockedAchievementOrderByWithRelationInput[]
    cursor?: UnlockedAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnlockedAchievementScalarFieldEnum | UnlockedAchievementScalarFieldEnum[]
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
    id: number | null
    price: number | null
    developerId: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
    price: number | null
    developerId: number | null
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    releaseDate: Date | null
    price: number | null
    developerId: number | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    releaseDate: Date | null
    price: number | null
    developerId: number | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    name: number
    description: number
    releaseDate: number
    price: number
    developerId: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
    price?: true
    developerId?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
    price?: true
    developerId?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    releaseDate?: true
    price?: true
    developerId?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    releaseDate?: true
    price?: true
    developerId?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    releaseDate?: true
    price?: true
    developerId?: true
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
    id: number
    name: string
    description: string | null
    releaseDate: Date | null
    price: number
    developerId: number
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
    name?: boolean
    description?: boolean
    releaseDate?: boolean
    price?: boolean
    developerId?: boolean
    reviews?: boolean | Game$reviewsArgs<ExtArgs>
    purchases?: boolean | Game$purchasesArgs<ExtArgs>
    achievements?: boolean | Game$achievementsArgs<ExtArgs>
    dlcs?: boolean | Game$dlcsArgs<ExtArgs>
    genres?: boolean | Game$genresArgs<ExtArgs>
    platforms?: boolean | Game$platformsArgs<ExtArgs>
    tags?: boolean | Game$tagsArgs<ExtArgs>
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>



  export type GameSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    releaseDate?: boolean
    price?: boolean
    developerId?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "releaseDate" | "price" | "developerId", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | Game$reviewsArgs<ExtArgs>
    purchases?: boolean | Game$purchasesArgs<ExtArgs>
    achievements?: boolean | Game$achievementsArgs<ExtArgs>
    dlcs?: boolean | Game$dlcsArgs<ExtArgs>
    genres?: boolean | Game$genresArgs<ExtArgs>
    platforms?: boolean | Game$platformsArgs<ExtArgs>
    tags?: boolean | Game$tagsArgs<ExtArgs>
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
      achievements: Prisma.$AchievementPayload<ExtArgs>[]
      dlcs: Prisma.$DlcPayload<ExtArgs>[]
      genres: Prisma.$GameGenderPayload<ExtArgs>[]
      platforms: Prisma.$GamePlatformPayload<ExtArgs>[]
      tags: Prisma.$GameTagPayload<ExtArgs>[]
      developer: Prisma.$DeveloperPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      releaseDate: Date | null
      price: number
      developerId: number
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
    reviews<T extends Game$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Game$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends Game$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Game$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    achievements<T extends Game$achievementsArgs<ExtArgs> = {}>(args?: Subset<T, Game$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dlcs<T extends Game$dlcsArgs<ExtArgs> = {}>(args?: Subset<T, Game$dlcsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DlcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    genres<T extends Game$genresArgs<ExtArgs> = {}>(args?: Subset<T, Game$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameGenderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    platforms<T extends Game$platformsArgs<ExtArgs> = {}>(args?: Subset<T, Game$platformsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Game$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Game$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    developer<T extends DeveloperDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeveloperDefaultArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Game", 'Int'>
    readonly name: FieldRef<"Game", 'String'>
    readonly description: FieldRef<"Game", 'String'>
    readonly releaseDate: FieldRef<"Game", 'DateTime'>
    readonly price: FieldRef<"Game", 'Float'>
    readonly developerId: FieldRef<"Game", 'Int'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
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
   * Game.reviews
   */
  export type Game$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Game.purchases
   */
  export type Game$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Game.achievements
   */
  export type Game$achievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    cursor?: AchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Game.dlcs
   */
  export type Game$dlcsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dlc
     */
    select?: DlcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dlc
     */
    omit?: DlcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DlcInclude<ExtArgs> | null
    where?: DlcWhereInput
    orderBy?: DlcOrderByWithRelationInput | DlcOrderByWithRelationInput[]
    cursor?: DlcWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DlcScalarFieldEnum | DlcScalarFieldEnum[]
  }

  /**
   * Game.genres
   */
  export type Game$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameGender
     */
    select?: GameGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameGender
     */
    omit?: GameGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameGenderInclude<ExtArgs> | null
    where?: GameGenderWhereInput
    orderBy?: GameGenderOrderByWithRelationInput | GameGenderOrderByWithRelationInput[]
    cursor?: GameGenderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameGenderScalarFieldEnum | GameGenderScalarFieldEnum[]
  }

  /**
   * Game.platforms
   */
  export type Game$platformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlatform
     */
    select?: GamePlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlatform
     */
    omit?: GamePlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlatformInclude<ExtArgs> | null
    where?: GamePlatformWhereInput
    orderBy?: GamePlatformOrderByWithRelationInput | GamePlatformOrderByWithRelationInput[]
    cursor?: GamePlatformWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GamePlatformScalarFieldEnum | GamePlatformScalarFieldEnum[]
  }

  /**
   * Game.tags
   */
  export type Game$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTag
     */
    omit?: GameTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    where?: GameTagWhereInput
    orderBy?: GameTagOrderByWithRelationInput | GameTagOrderByWithRelationInput[]
    cursor?: GameTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameTagScalarFieldEnum | GameTagScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model Developer
   */

  export type AggregateDeveloper = {
    _count: DeveloperCountAggregateOutputType | null
    _avg: DeveloperAvgAggregateOutputType | null
    _sum: DeveloperSumAggregateOutputType | null
    _min: DeveloperMinAggregateOutputType | null
    _max: DeveloperMaxAggregateOutputType | null
  }

  export type DeveloperAvgAggregateOutputType = {
    id: number | null
  }

  export type DeveloperSumAggregateOutputType = {
    id: number | null
  }

  export type DeveloperMinAggregateOutputType = {
    id: number | null
    name: string | null
    country: string | null
  }

  export type DeveloperMaxAggregateOutputType = {
    id: number | null
    name: string | null
    country: string | null
  }

  export type DeveloperCountAggregateOutputType = {
    id: number
    name: number
    country: number
    _all: number
  }


  export type DeveloperAvgAggregateInputType = {
    id?: true
  }

  export type DeveloperSumAggregateInputType = {
    id?: true
  }

  export type DeveloperMinAggregateInputType = {
    id?: true
    name?: true
    country?: true
  }

  export type DeveloperMaxAggregateInputType = {
    id?: true
    name?: true
    country?: true
  }

  export type DeveloperCountAggregateInputType = {
    id?: true
    name?: true
    country?: true
    _all?: true
  }

  export type DeveloperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Developer to aggregate.
     */
    where?: DeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DeveloperOrderByWithRelationInput | DeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Developers
    **/
    _count?: true | DeveloperCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeveloperAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeveloperSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeveloperMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeveloperMaxAggregateInputType
  }

  export type GetDeveloperAggregateType<T extends DeveloperAggregateArgs> = {
        [P in keyof T & keyof AggregateDeveloper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeveloper[P]>
      : GetScalarType<T[P], AggregateDeveloper[P]>
  }




  export type DeveloperGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeveloperWhereInput
    orderBy?: DeveloperOrderByWithAggregationInput | DeveloperOrderByWithAggregationInput[]
    by: DeveloperScalarFieldEnum[] | DeveloperScalarFieldEnum
    having?: DeveloperScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeveloperCountAggregateInputType | true
    _avg?: DeveloperAvgAggregateInputType
    _sum?: DeveloperSumAggregateInputType
    _min?: DeveloperMinAggregateInputType
    _max?: DeveloperMaxAggregateInputType
  }

  export type DeveloperGroupByOutputType = {
    id: number
    name: string
    country: string | null
    _count: DeveloperCountAggregateOutputType | null
    _avg: DeveloperAvgAggregateOutputType | null
    _sum: DeveloperSumAggregateOutputType | null
    _min: DeveloperMinAggregateOutputType | null
    _max: DeveloperMaxAggregateOutputType | null
  }

  type GetDeveloperGroupByPayload<T extends DeveloperGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeveloperGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeveloperGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeveloperGroupByOutputType[P]>
            : GetScalarType<T[P], DeveloperGroupByOutputType[P]>
        }
      >
    >


  export type DeveloperSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    games?: boolean | Developer$gamesArgs<ExtArgs>
    _count?: boolean | DeveloperCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["developer"]>



  export type DeveloperSelectScalar = {
    id?: boolean
    name?: boolean
    country?: boolean
  }

  export type DeveloperOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "country", ExtArgs["result"]["developer"]>
  export type DeveloperInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | Developer$gamesArgs<ExtArgs>
    _count?: boolean | DeveloperCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DeveloperPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Developer"
    objects: {
      games: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      country: string | null
    }, ExtArgs["result"]["developer"]>
    composites: {}
  }

  type DeveloperGetPayload<S extends boolean | null | undefined | DeveloperDefaultArgs> = $Result.GetResult<Prisma.$DeveloperPayload, S>

  type DeveloperCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeveloperFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeveloperCountAggregateInputType | true
    }

  export interface DeveloperDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Developer'], meta: { name: 'Developer' } }
    /**
     * Find zero or one Developer that matches the filter.
     * @param {DeveloperFindUniqueArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeveloperFindUniqueArgs>(args: SelectSubset<T, DeveloperFindUniqueArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Developer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeveloperFindUniqueOrThrowArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeveloperFindUniqueOrThrowArgs>(args: SelectSubset<T, DeveloperFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Developer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperFindFirstArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeveloperFindFirstArgs>(args?: SelectSubset<T, DeveloperFindFirstArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Developer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperFindFirstOrThrowArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeveloperFindFirstOrThrowArgs>(args?: SelectSubset<T, DeveloperFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Developers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Developers
     * const developers = await prisma.developer.findMany()
     * 
     * // Get first 10 Developers
     * const developers = await prisma.developer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const developerWithIdOnly = await prisma.developer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeveloperFindManyArgs>(args?: SelectSubset<T, DeveloperFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Developer.
     * @param {DeveloperCreateArgs} args - Arguments to create a Developer.
     * @example
     * // Create one Developer
     * const Developer = await prisma.developer.create({
     *   data: {
     *     // ... data to create a Developer
     *   }
     * })
     * 
     */
    create<T extends DeveloperCreateArgs>(args: SelectSubset<T, DeveloperCreateArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Developers.
     * @param {DeveloperCreateManyArgs} args - Arguments to create many Developers.
     * @example
     * // Create many Developers
     * const developer = await prisma.developer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeveloperCreateManyArgs>(args?: SelectSubset<T, DeveloperCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Developer.
     * @param {DeveloperDeleteArgs} args - Arguments to delete one Developer.
     * @example
     * // Delete one Developer
     * const Developer = await prisma.developer.delete({
     *   where: {
     *     // ... filter to delete one Developer
     *   }
     * })
     * 
     */
    delete<T extends DeveloperDeleteArgs>(args: SelectSubset<T, DeveloperDeleteArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Developer.
     * @param {DeveloperUpdateArgs} args - Arguments to update one Developer.
     * @example
     * // Update one Developer
     * const developer = await prisma.developer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeveloperUpdateArgs>(args: SelectSubset<T, DeveloperUpdateArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Developers.
     * @param {DeveloperDeleteManyArgs} args - Arguments to filter Developers to delete.
     * @example
     * // Delete a few Developers
     * const { count } = await prisma.developer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeveloperDeleteManyArgs>(args?: SelectSubset<T, DeveloperDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Developers
     * const developer = await prisma.developer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeveloperUpdateManyArgs>(args: SelectSubset<T, DeveloperUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Developer.
     * @param {DeveloperUpsertArgs} args - Arguments to update or create a Developer.
     * @example
     * // Update or create a Developer
     * const developer = await prisma.developer.upsert({
     *   create: {
     *     // ... data to create a Developer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Developer we want to update
     *   }
     * })
     */
    upsert<T extends DeveloperUpsertArgs>(args: SelectSubset<T, DeveloperUpsertArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperCountArgs} args - Arguments to filter Developers to count.
     * @example
     * // Count the number of Developers
     * const count = await prisma.developer.count({
     *   where: {
     *     // ... the filter for the Developers we want to count
     *   }
     * })
    **/
    count<T extends DeveloperCountArgs>(
      args?: Subset<T, DeveloperCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeveloperCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Developer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeveloperAggregateArgs>(args: Subset<T, DeveloperAggregateArgs>): Prisma.PrismaPromise<GetDeveloperAggregateType<T>>

    /**
     * Group by Developer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperGroupByArgs} args - Group by arguments.
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
      T extends DeveloperGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeveloperGroupByArgs['orderBy'] }
        : { orderBy?: DeveloperGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeveloperGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeveloperGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Developer model
   */
  readonly fields: DeveloperFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Developer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeveloperClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends Developer$gamesArgs<ExtArgs> = {}>(args?: Subset<T, Developer$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Developer model
   */
  interface DeveloperFieldRefs {
    readonly id: FieldRef<"Developer", 'Int'>
    readonly name: FieldRef<"Developer", 'String'>
    readonly country: FieldRef<"Developer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Developer findUnique
   */
  export type DeveloperFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developer to fetch.
     */
    where: DeveloperWhereUniqueInput
  }

  /**
   * Developer findUniqueOrThrow
   */
  export type DeveloperFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developer to fetch.
     */
    where: DeveloperWhereUniqueInput
  }

  /**
   * Developer findFirst
   */
  export type DeveloperFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developer to fetch.
     */
    where?: DeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DeveloperOrderByWithRelationInput | DeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Developers.
     */
    cursor?: DeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Developers.
     */
    distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[]
  }

  /**
   * Developer findFirstOrThrow
   */
  export type DeveloperFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developer to fetch.
     */
    where?: DeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DeveloperOrderByWithRelationInput | DeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Developers.
     */
    cursor?: DeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Developers.
     */
    distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[]
  }

  /**
   * Developer findMany
   */
  export type DeveloperFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developers to fetch.
     */
    where?: DeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DeveloperOrderByWithRelationInput | DeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Developers.
     */
    cursor?: DeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[]
  }

  /**
   * Developer create
   */
  export type DeveloperCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * The data needed to create a Developer.
     */
    data: XOR<DeveloperCreateInput, DeveloperUncheckedCreateInput>
  }

  /**
   * Developer createMany
   */
  export type DeveloperCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Developers.
     */
    data: DeveloperCreateManyInput | DeveloperCreateManyInput[]
  }

  /**
   * Developer update
   */
  export type DeveloperUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * The data needed to update a Developer.
     */
    data: XOR<DeveloperUpdateInput, DeveloperUncheckedUpdateInput>
    /**
     * Choose, which Developer to update.
     */
    where: DeveloperWhereUniqueInput
  }

  /**
   * Developer updateMany
   */
  export type DeveloperUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Developers.
     */
    data: XOR<DeveloperUpdateManyMutationInput, DeveloperUncheckedUpdateManyInput>
    /**
     * Filter which Developers to update
     */
    where?: DeveloperWhereInput
    /**
     * Limit how many Developers to update.
     */
    limit?: number
  }

  /**
   * Developer upsert
   */
  export type DeveloperUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * The filter to search for the Developer to update in case it exists.
     */
    where: DeveloperWhereUniqueInput
    /**
     * In case the Developer found by the `where` argument doesn't exist, create a new Developer with this data.
     */
    create: XOR<DeveloperCreateInput, DeveloperUncheckedCreateInput>
    /**
     * In case the Developer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeveloperUpdateInput, DeveloperUncheckedUpdateInput>
  }

  /**
   * Developer delete
   */
  export type DeveloperDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter which Developer to delete.
     */
    where: DeveloperWhereUniqueInput
  }

  /**
   * Developer deleteMany
   */
  export type DeveloperDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Developers to delete
     */
    where?: DeveloperWhereInput
    /**
     * Limit how many Developers to delete.
     */
    limit?: number
  }

  /**
   * Developer.games
   */
  export type Developer$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Developer without action
   */
  export type DeveloperDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
  }


  /**
   * Model Platform
   */

  export type AggregatePlatform = {
    _count: PlatformCountAggregateOutputType | null
    _avg: PlatformAvgAggregateOutputType | null
    _sum: PlatformSumAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  export type PlatformAvgAggregateOutputType = {
    id: number | null
  }

  export type PlatformSumAggregateOutputType = {
    id: number | null
  }

  export type PlatformMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PlatformMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PlatformCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PlatformAvgAggregateInputType = {
    id?: true
  }

  export type PlatformSumAggregateInputType = {
    id?: true
  }

  export type PlatformMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PlatformMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PlatformCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platform to aggregate.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Platforms
    **/
    _count?: true | PlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatformAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatformSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformMaxAggregateInputType
  }

  export type GetPlatformAggregateType<T extends PlatformAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatform[P]>
      : GetScalarType<T[P], AggregatePlatform[P]>
  }




  export type PlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformWhereInput
    orderBy?: PlatformOrderByWithAggregationInput | PlatformOrderByWithAggregationInput[]
    by: PlatformScalarFieldEnum[] | PlatformScalarFieldEnum
    having?: PlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformCountAggregateInputType | true
    _avg?: PlatformAvgAggregateInputType
    _sum?: PlatformSumAggregateInputType
    _min?: PlatformMinAggregateInputType
    _max?: PlatformMaxAggregateInputType
  }

  export type PlatformGroupByOutputType = {
    id: number
    name: string
    _count: PlatformCountAggregateOutputType | null
    _avg: PlatformAvgAggregateOutputType | null
    _sum: PlatformSumAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  type GetPlatformGroupByPayload<T extends PlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformGroupByOutputType[P]>
        }
      >
    >


  export type PlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    games?: boolean | Platform$gamesArgs<ExtArgs>
    _count?: boolean | PlatformCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platform"]>



  export type PlatformSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type PlatformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["platform"]>
  export type PlatformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | Platform$gamesArgs<ExtArgs>
    _count?: boolean | PlatformCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Platform"
    objects: {
      games: Prisma.$GamePlatformPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["platform"]>
    composites: {}
  }

  type PlatformGetPayload<S extends boolean | null | undefined | PlatformDefaultArgs> = $Result.GetResult<Prisma.$PlatformPayload, S>

  type PlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatformCountAggregateInputType | true
    }

  export interface PlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Platform'], meta: { name: 'Platform' } }
    /**
     * Find zero or one Platform that matches the filter.
     * @param {PlatformFindUniqueArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformFindUniqueArgs>(args: SelectSubset<T, PlatformFindUniqueArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Platform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformFindUniqueOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformFindFirstArgs>(args?: SelectSubset<T, PlatformFindFirstArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Platforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Platforms
     * const platforms = await prisma.platform.findMany()
     * 
     * // Get first 10 Platforms
     * const platforms = await prisma.platform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformWithIdOnly = await prisma.platform.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformFindManyArgs>(args?: SelectSubset<T, PlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Platform.
     * @param {PlatformCreateArgs} args - Arguments to create a Platform.
     * @example
     * // Create one Platform
     * const Platform = await prisma.platform.create({
     *   data: {
     *     // ... data to create a Platform
     *   }
     * })
     * 
     */
    create<T extends PlatformCreateArgs>(args: SelectSubset<T, PlatformCreateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Platforms.
     * @param {PlatformCreateManyArgs} args - Arguments to create many Platforms.
     * @example
     * // Create many Platforms
     * const platform = await prisma.platform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformCreateManyArgs>(args?: SelectSubset<T, PlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Platform.
     * @param {PlatformDeleteArgs} args - Arguments to delete one Platform.
     * @example
     * // Delete one Platform
     * const Platform = await prisma.platform.delete({
     *   where: {
     *     // ... filter to delete one Platform
     *   }
     * })
     * 
     */
    delete<T extends PlatformDeleteArgs>(args: SelectSubset<T, PlatformDeleteArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Platform.
     * @param {PlatformUpdateArgs} args - Arguments to update one Platform.
     * @example
     * // Update one Platform
     * const platform = await prisma.platform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformUpdateArgs>(args: SelectSubset<T, PlatformUpdateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Platforms.
     * @param {PlatformDeleteManyArgs} args - Arguments to filter Platforms to delete.
     * @example
     * // Delete a few Platforms
     * const { count } = await prisma.platform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformDeleteManyArgs>(args?: SelectSubset<T, PlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Platforms
     * const platform = await prisma.platform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformUpdateManyArgs>(args: SelectSubset<T, PlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Platform.
     * @param {PlatformUpsertArgs} args - Arguments to update or create a Platform.
     * @example
     * // Update or create a Platform
     * const platform = await prisma.platform.upsert({
     *   create: {
     *     // ... data to create a Platform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Platform we want to update
     *   }
     * })
     */
    upsert<T extends PlatformUpsertArgs>(args: SelectSubset<T, PlatformUpsertArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformCountArgs} args - Arguments to filter Platforms to count.
     * @example
     * // Count the number of Platforms
     * const count = await prisma.platform.count({
     *   where: {
     *     // ... the filter for the Platforms we want to count
     *   }
     * })
    **/
    count<T extends PlatformCountArgs>(
      args?: Subset<T, PlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlatformAggregateArgs>(args: Subset<T, PlatformAggregateArgs>): Prisma.PrismaPromise<GetPlatformAggregateType<T>>

    /**
     * Group by Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformGroupByArgs} args - Group by arguments.
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
      T extends PlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformGroupByArgs['orderBy'] }
        : { orderBy?: PlatformGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Platform model
   */
  readonly fields: PlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Platform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends Platform$gamesArgs<ExtArgs> = {}>(args?: Subset<T, Platform$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Platform model
   */
  interface PlatformFieldRefs {
    readonly id: FieldRef<"Platform", 'Int'>
    readonly name: FieldRef<"Platform", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Platform findUnique
   */
  export type PlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findUniqueOrThrow
   */
  export type PlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findFirst
   */
  export type PlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findFirstOrThrow
   */
  export type PlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findMany
   */
  export type PlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platforms to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform create
   */
  export type PlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The data needed to create a Platform.
     */
    data: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
  }

  /**
   * Platform createMany
   */
  export type PlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Platforms.
     */
    data: PlatformCreateManyInput | PlatformCreateManyInput[]
  }

  /**
   * Platform update
   */
  export type PlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The data needed to update a Platform.
     */
    data: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
    /**
     * Choose, which Platform to update.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform updateMany
   */
  export type PlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Platforms.
     */
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyInput>
    /**
     * Filter which Platforms to update
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to update.
     */
    limit?: number
  }

  /**
   * Platform upsert
   */
  export type PlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The filter to search for the Platform to update in case it exists.
     */
    where: PlatformWhereUniqueInput
    /**
     * In case the Platform found by the `where` argument doesn't exist, create a new Platform with this data.
     */
    create: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
    /**
     * In case the Platform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
  }

  /**
   * Platform delete
   */
  export type PlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter which Platform to delete.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform deleteMany
   */
  export type PlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platforms to delete
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to delete.
     */
    limit?: number
  }

  /**
   * Platform.games
   */
  export type Platform$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlatform
     */
    select?: GamePlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlatform
     */
    omit?: GamePlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlatformInclude<ExtArgs> | null
    where?: GamePlatformWhereInput
    orderBy?: GamePlatformOrderByWithRelationInput | GamePlatformOrderByWithRelationInput[]
    cursor?: GamePlatformWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GamePlatformScalarFieldEnum | GamePlatformScalarFieldEnum[]
  }

  /**
   * Platform without action
   */
  export type PlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
  }


  /**
   * Model Gender
   */

  export type AggregateGender = {
    _count: GenderCountAggregateOutputType | null
    _avg: GenderAvgAggregateOutputType | null
    _sum: GenderSumAggregateOutputType | null
    _min: GenderMinAggregateOutputType | null
    _max: GenderMaxAggregateOutputType | null
  }

  export type GenderAvgAggregateOutputType = {
    id: number | null
  }

  export type GenderSumAggregateOutputType = {
    id: number | null
  }

  export type GenderMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenderMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenderCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenderAvgAggregateInputType = {
    id?: true
  }

  export type GenderSumAggregateInputType = {
    id?: true
  }

  export type GenderMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenderMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenderCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gender to aggregate.
     */
    where?: GenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GenderOrderByWithRelationInput | GenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genders
    **/
    _count?: true | GenderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenderMaxAggregateInputType
  }

  export type GetGenderAggregateType<T extends GenderAggregateArgs> = {
        [P in keyof T & keyof AggregateGender]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGender[P]>
      : GetScalarType<T[P], AggregateGender[P]>
  }




  export type GenderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenderWhereInput
    orderBy?: GenderOrderByWithAggregationInput | GenderOrderByWithAggregationInput[]
    by: GenderScalarFieldEnum[] | GenderScalarFieldEnum
    having?: GenderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenderCountAggregateInputType | true
    _avg?: GenderAvgAggregateInputType
    _sum?: GenderSumAggregateInputType
    _min?: GenderMinAggregateInputType
    _max?: GenderMaxAggregateInputType
  }

  export type GenderGroupByOutputType = {
    id: number
    name: string
    _count: GenderCountAggregateOutputType | null
    _avg: GenderAvgAggregateOutputType | null
    _sum: GenderSumAggregateOutputType | null
    _min: GenderMinAggregateOutputType | null
    _max: GenderMaxAggregateOutputType | null
  }

  type GetGenderGroupByPayload<T extends GenderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenderGroupByOutputType[P]>
            : GetScalarType<T[P], GenderGroupByOutputType[P]>
        }
      >
    >


  export type GenderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    games?: boolean | Gender$gamesArgs<ExtArgs>
    _count?: boolean | GenderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gender"]>



  export type GenderSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GenderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["gender"]>
  export type GenderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | Gender$gamesArgs<ExtArgs>
    _count?: boolean | GenderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GenderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gender"
    objects: {
      games: Prisma.$GameGenderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["gender"]>
    composites: {}
  }

  type GenderGetPayload<S extends boolean | null | undefined | GenderDefaultArgs> = $Result.GetResult<Prisma.$GenderPayload, S>

  type GenderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenderCountAggregateInputType | true
    }

  export interface GenderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gender'], meta: { name: 'Gender' } }
    /**
     * Find zero or one Gender that matches the filter.
     * @param {GenderFindUniqueArgs} args - Arguments to find a Gender
     * @example
     * // Get one Gender
     * const gender = await prisma.gender.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenderFindUniqueArgs>(args: SelectSubset<T, GenderFindUniqueArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gender that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenderFindUniqueOrThrowArgs} args - Arguments to find a Gender
     * @example
     * // Get one Gender
     * const gender = await prisma.gender.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenderFindUniqueOrThrowArgs>(args: SelectSubset<T, GenderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gender that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderFindFirstArgs} args - Arguments to find a Gender
     * @example
     * // Get one Gender
     * const gender = await prisma.gender.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenderFindFirstArgs>(args?: SelectSubset<T, GenderFindFirstArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gender that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderFindFirstOrThrowArgs} args - Arguments to find a Gender
     * @example
     * // Get one Gender
     * const gender = await prisma.gender.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenderFindFirstOrThrowArgs>(args?: SelectSubset<T, GenderFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genders
     * const genders = await prisma.gender.findMany()
     * 
     * // Get first 10 Genders
     * const genders = await prisma.gender.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genderWithIdOnly = await prisma.gender.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenderFindManyArgs>(args?: SelectSubset<T, GenderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gender.
     * @param {GenderCreateArgs} args - Arguments to create a Gender.
     * @example
     * // Create one Gender
     * const Gender = await prisma.gender.create({
     *   data: {
     *     // ... data to create a Gender
     *   }
     * })
     * 
     */
    create<T extends GenderCreateArgs>(args: SelectSubset<T, GenderCreateArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genders.
     * @param {GenderCreateManyArgs} args - Arguments to create many Genders.
     * @example
     * // Create many Genders
     * const gender = await prisma.gender.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenderCreateManyArgs>(args?: SelectSubset<T, GenderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gender.
     * @param {GenderDeleteArgs} args - Arguments to delete one Gender.
     * @example
     * // Delete one Gender
     * const Gender = await prisma.gender.delete({
     *   where: {
     *     // ... filter to delete one Gender
     *   }
     * })
     * 
     */
    delete<T extends GenderDeleteArgs>(args: SelectSubset<T, GenderDeleteArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gender.
     * @param {GenderUpdateArgs} args - Arguments to update one Gender.
     * @example
     * // Update one Gender
     * const gender = await prisma.gender.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenderUpdateArgs>(args: SelectSubset<T, GenderUpdateArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genders.
     * @param {GenderDeleteManyArgs} args - Arguments to filter Genders to delete.
     * @example
     * // Delete a few Genders
     * const { count } = await prisma.gender.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenderDeleteManyArgs>(args?: SelectSubset<T, GenderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genders
     * const gender = await prisma.gender.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenderUpdateManyArgs>(args: SelectSubset<T, GenderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gender.
     * @param {GenderUpsertArgs} args - Arguments to update or create a Gender.
     * @example
     * // Update or create a Gender
     * const gender = await prisma.gender.upsert({
     *   create: {
     *     // ... data to create a Gender
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gender we want to update
     *   }
     * })
     */
    upsert<T extends GenderUpsertArgs>(args: SelectSubset<T, GenderUpsertArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderCountArgs} args - Arguments to filter Genders to count.
     * @example
     * // Count the number of Genders
     * const count = await prisma.gender.count({
     *   where: {
     *     // ... the filter for the Genders we want to count
     *   }
     * })
    **/
    count<T extends GenderCountArgs>(
      args?: Subset<T, GenderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenderAggregateArgs>(args: Subset<T, GenderAggregateArgs>): Prisma.PrismaPromise<GetGenderAggregateType<T>>

    /**
     * Group by Gender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderGroupByArgs} args - Group by arguments.
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
      T extends GenderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenderGroupByArgs['orderBy'] }
        : { orderBy?: GenderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gender model
   */
  readonly fields: GenderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gender.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends Gender$gamesArgs<ExtArgs> = {}>(args?: Subset<T, Gender$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameGenderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Gender model
   */
  interface GenderFieldRefs {
    readonly id: FieldRef<"Gender", 'Int'>
    readonly name: FieldRef<"Gender", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Gender findUnique
   */
  export type GenderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter, which Gender to fetch.
     */
    where: GenderWhereUniqueInput
  }

  /**
   * Gender findUniqueOrThrow
   */
  export type GenderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter, which Gender to fetch.
     */
    where: GenderWhereUniqueInput
  }

  /**
   * Gender findFirst
   */
  export type GenderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter, which Gender to fetch.
     */
    where?: GenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GenderOrderByWithRelationInput | GenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genders.
     */
    cursor?: GenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genders.
     */
    distinct?: GenderScalarFieldEnum | GenderScalarFieldEnum[]
  }

  /**
   * Gender findFirstOrThrow
   */
  export type GenderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter, which Gender to fetch.
     */
    where?: GenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GenderOrderByWithRelationInput | GenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genders.
     */
    cursor?: GenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genders.
     */
    distinct?: GenderScalarFieldEnum | GenderScalarFieldEnum[]
  }

  /**
   * Gender findMany
   */
  export type GenderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter, which Genders to fetch.
     */
    where?: GenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GenderOrderByWithRelationInput | GenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genders.
     */
    cursor?: GenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    distinct?: GenderScalarFieldEnum | GenderScalarFieldEnum[]
  }

  /**
   * Gender create
   */
  export type GenderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * The data needed to create a Gender.
     */
    data: XOR<GenderCreateInput, GenderUncheckedCreateInput>
  }

  /**
   * Gender createMany
   */
  export type GenderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genders.
     */
    data: GenderCreateManyInput | GenderCreateManyInput[]
  }

  /**
   * Gender update
   */
  export type GenderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * The data needed to update a Gender.
     */
    data: XOR<GenderUpdateInput, GenderUncheckedUpdateInput>
    /**
     * Choose, which Gender to update.
     */
    where: GenderWhereUniqueInput
  }

  /**
   * Gender updateMany
   */
  export type GenderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genders.
     */
    data: XOR<GenderUpdateManyMutationInput, GenderUncheckedUpdateManyInput>
    /**
     * Filter which Genders to update
     */
    where?: GenderWhereInput
    /**
     * Limit how many Genders to update.
     */
    limit?: number
  }

  /**
   * Gender upsert
   */
  export type GenderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * The filter to search for the Gender to update in case it exists.
     */
    where: GenderWhereUniqueInput
    /**
     * In case the Gender found by the `where` argument doesn't exist, create a new Gender with this data.
     */
    create: XOR<GenderCreateInput, GenderUncheckedCreateInput>
    /**
     * In case the Gender was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenderUpdateInput, GenderUncheckedUpdateInput>
  }

  /**
   * Gender delete
   */
  export type GenderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter which Gender to delete.
     */
    where: GenderWhereUniqueInput
  }

  /**
   * Gender deleteMany
   */
  export type GenderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genders to delete
     */
    where?: GenderWhereInput
    /**
     * Limit how many Genders to delete.
     */
    limit?: number
  }

  /**
   * Gender.games
   */
  export type Gender$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameGender
     */
    select?: GameGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameGender
     */
    omit?: GameGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameGenderInclude<ExtArgs> | null
    where?: GameGenderWhereInput
    orderBy?: GameGenderOrderByWithRelationInput | GameGenderOrderByWithRelationInput[]
    cursor?: GameGenderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameGenderScalarFieldEnum | GameGenderScalarFieldEnum[]
  }

  /**
   * Gender without action
   */
  export type GenderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    games?: boolean | Tag$gamesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>



  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | Tag$gamesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      games: Prisma.$GameTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends Tag$gamesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.games
   */
  export type Tag$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTag
     */
    omit?: GameTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    where?: GameTagWhereInput
    orderBy?: GameTagOrderByWithRelationInput | GameTagOrderByWithRelationInput[]
    cursor?: GameTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameTagScalarFieldEnum | GameTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    gameId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    gameId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    userId: number | null
    gameId: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    userId: number | null
    gameId: number | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    userId: number
    gameId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    gameId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    gameId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    gameId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    gameId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    gameId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    rating: number
    comment: string | null
    userId: number
    gameId: number
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    gameId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    gameId?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "userId" | "gameId", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number
      comment: string | null
      userId: number
      gameId: number
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly gameId: FieldRef<"Review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    id: number | null
    paidPrice: number | null
    userId: number | null
    gameId: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    id: number | null
    paidPrice: number | null
    userId: number | null
    gameId: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: number | null
    purchaseDate: Date | null
    paidPrice: number | null
    userId: number | null
    gameId: number | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: number | null
    purchaseDate: Date | null
    paidPrice: number | null
    userId: number | null
    gameId: number | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    purchaseDate: number
    paidPrice: number
    userId: number
    gameId: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    id?: true
    paidPrice?: true
    userId?: true
    gameId?: true
  }

  export type PurchaseSumAggregateInputType = {
    id?: true
    paidPrice?: true
    userId?: true
    gameId?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    purchaseDate?: true
    paidPrice?: true
    userId?: true
    gameId?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    purchaseDate?: true
    paidPrice?: true
    userId?: true
    gameId?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    purchaseDate?: true
    paidPrice?: true
    userId?: true
    gameId?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: number
    purchaseDate: Date
    paidPrice: number
    userId: number
    gameId: number
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseDate?: boolean
    paidPrice?: boolean
    userId?: boolean
    gameId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>



  export type PurchaseSelectScalar = {
    id?: boolean
    purchaseDate?: boolean
    paidPrice?: boolean
    userId?: boolean
    gameId?: boolean
  }

  export type PurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "purchaseDate" | "paidPrice" | "userId" | "gameId", ExtArgs["result"]["purchase"]>
  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      purchaseDate: Date
      paidPrice: number
      userId: number
      gameId: number
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
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
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Purchase model
   */
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'Int'>
    readonly purchaseDate: FieldRef<"Purchase", 'DateTime'>
    readonly paidPrice: FieldRef<"Purchase", 'Float'>
    readonly userId: FieldRef<"Purchase", 'Int'>
    readonly gameId: FieldRef<"Purchase", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  export type AchievementAvgAggregateOutputType = {
    id: number | null
    points: number | null
    gameId: number | null
  }

  export type AchievementSumAggregateOutputType = {
    id: number | null
    points: number | null
    gameId: number | null
  }

  export type AchievementMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    points: number | null
    gameId: number | null
  }

  export type AchievementMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    points: number | null
    gameId: number | null
  }

  export type AchievementCountAggregateOutputType = {
    id: number
    name: number
    description: number
    points: number
    gameId: number
    _all: number
  }


  export type AchievementAvgAggregateInputType = {
    id?: true
    points?: true
    gameId?: true
  }

  export type AchievementSumAggregateInputType = {
    id?: true
    points?: true
    gameId?: true
  }

  export type AchievementMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    points?: true
    gameId?: true
  }

  export type AchievementMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    points?: true
    gameId?: true
  }

  export type AchievementCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    points?: true
    gameId?: true
    _all?: true
  }

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementMaxAggregateInputType
  }

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>
  }




  export type AchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithAggregationInput | AchievementOrderByWithAggregationInput[]
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum
    having?: AchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementCountAggregateInputType | true
    _avg?: AchievementAvgAggregateInputType
    _sum?: AchievementSumAggregateInputType
    _min?: AchievementMinAggregateInputType
    _max?: AchievementMaxAggregateInputType
  }

  export type AchievementGroupByOutputType = {
    id: number
    name: string
    description: string | null
    points: number
    gameId: number
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
        }
      >
    >


  export type AchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    points?: boolean
    gameId?: boolean
    unlockedAchievements?: boolean | Achievement$unlockedAchievementsArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>



  export type AchievementSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    points?: boolean
    gameId?: boolean
  }

  export type AchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "points" | "gameId", ExtArgs["result"]["achievement"]>
  export type AchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unlockedAchievements?: boolean | Achievement$unlockedAchievementsArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievement"
    objects: {
      unlockedAchievements: Prisma.$UnlockedAchievementPayload<ExtArgs>[]
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      points: number
      gameId: number
    }, ExtArgs["result"]["achievement"]>
    composites: {}
  }

  type AchievementGetPayload<S extends boolean | null | undefined | AchievementDefaultArgs> = $Result.GetResult<Prisma.$AchievementPayload, S>

  type AchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementCountAggregateInputType | true
    }

  export interface AchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievement'], meta: { name: 'Achievement' } }
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementFindManyArgs>(args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     * 
     */
    create<T extends AchievementCreateArgs>(args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementCreateManyArgs>(args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     * 
     */
    delete<T extends AchievementDeleteArgs>(args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementUpdateArgs>(args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementDeleteManyArgs>(args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementUpdateManyArgs>(args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AchievementAggregateArgs>(args: Subset<T, AchievementAggregateArgs>): Prisma.PrismaPromise<GetAchievementAggregateType<T>>

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
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
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievement model
   */
  readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unlockedAchievements<T extends Achievement$unlockedAchievementsArgs<ExtArgs> = {}>(args?: Subset<T, Achievement$unlockedAchievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnlockedAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Achievement model
   */
  interface AchievementFieldRefs {
    readonly id: FieldRef<"Achievement", 'Int'>
    readonly name: FieldRef<"Achievement", 'String'>
    readonly description: FieldRef<"Achievement", 'String'>
    readonly points: FieldRef<"Achievement", 'Int'>
    readonly gameId: FieldRef<"Achievement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
  }

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
  }

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
  }

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to delete.
     */
    limit?: number
  }

  /**
   * Achievement.unlockedAchievements
   */
  export type Achievement$unlockedAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockedAchievement
     */
    select?: UnlockedAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockedAchievement
     */
    omit?: UnlockedAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockedAchievementInclude<ExtArgs> | null
    where?: UnlockedAchievementWhereInput
    orderBy?: UnlockedAchievementOrderByWithRelationInput | UnlockedAchievementOrderByWithRelationInput[]
    cursor?: UnlockedAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnlockedAchievementScalarFieldEnum | UnlockedAchievementScalarFieldEnum[]
  }

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
  }


  /**
   * Model UnlockedAchievement
   */

  export type AggregateUnlockedAchievement = {
    _count: UnlockedAchievementCountAggregateOutputType | null
    _avg: UnlockedAchievementAvgAggregateOutputType | null
    _sum: UnlockedAchievementSumAggregateOutputType | null
    _min: UnlockedAchievementMinAggregateOutputType | null
    _max: UnlockedAchievementMaxAggregateOutputType | null
  }

  export type UnlockedAchievementAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    achievementId: number | null
  }

  export type UnlockedAchievementSumAggregateOutputType = {
    id: number | null
    userId: number | null
    achievementId: number | null
  }

  export type UnlockedAchievementMinAggregateOutputType = {
    id: number | null
    unlockDate: Date | null
    userId: number | null
    achievementId: number | null
  }

  export type UnlockedAchievementMaxAggregateOutputType = {
    id: number | null
    unlockDate: Date | null
    userId: number | null
    achievementId: number | null
  }

  export type UnlockedAchievementCountAggregateOutputType = {
    id: number
    unlockDate: number
    userId: number
    achievementId: number
    _all: number
  }


  export type UnlockedAchievementAvgAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
  }

  export type UnlockedAchievementSumAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
  }

  export type UnlockedAchievementMinAggregateInputType = {
    id?: true
    unlockDate?: true
    userId?: true
    achievementId?: true
  }

  export type UnlockedAchievementMaxAggregateInputType = {
    id?: true
    unlockDate?: true
    userId?: true
    achievementId?: true
  }

  export type UnlockedAchievementCountAggregateInputType = {
    id?: true
    unlockDate?: true
    userId?: true
    achievementId?: true
    _all?: true
  }

  export type UnlockedAchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnlockedAchievement to aggregate.
     */
    where?: UnlockedAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnlockedAchievements to fetch.
     */
    orderBy?: UnlockedAchievementOrderByWithRelationInput | UnlockedAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnlockedAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnlockedAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnlockedAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnlockedAchievements
    **/
    _count?: true | UnlockedAchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnlockedAchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnlockedAchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnlockedAchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnlockedAchievementMaxAggregateInputType
  }

  export type GetUnlockedAchievementAggregateType<T extends UnlockedAchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateUnlockedAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnlockedAchievement[P]>
      : GetScalarType<T[P], AggregateUnlockedAchievement[P]>
  }




  export type UnlockedAchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnlockedAchievementWhereInput
    orderBy?: UnlockedAchievementOrderByWithAggregationInput | UnlockedAchievementOrderByWithAggregationInput[]
    by: UnlockedAchievementScalarFieldEnum[] | UnlockedAchievementScalarFieldEnum
    having?: UnlockedAchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnlockedAchievementCountAggregateInputType | true
    _avg?: UnlockedAchievementAvgAggregateInputType
    _sum?: UnlockedAchievementSumAggregateInputType
    _min?: UnlockedAchievementMinAggregateInputType
    _max?: UnlockedAchievementMaxAggregateInputType
  }

  export type UnlockedAchievementGroupByOutputType = {
    id: number
    unlockDate: Date
    userId: number
    achievementId: number
    _count: UnlockedAchievementCountAggregateOutputType | null
    _avg: UnlockedAchievementAvgAggregateOutputType | null
    _sum: UnlockedAchievementSumAggregateOutputType | null
    _min: UnlockedAchievementMinAggregateOutputType | null
    _max: UnlockedAchievementMaxAggregateOutputType | null
  }

  type GetUnlockedAchievementGroupByPayload<T extends UnlockedAchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnlockedAchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnlockedAchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnlockedAchievementGroupByOutputType[P]>
            : GetScalarType<T[P], UnlockedAchievementGroupByOutputType[P]>
        }
      >
    >


  export type UnlockedAchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unlockDate?: boolean
    userId?: boolean
    achievementId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unlockedAchievement"]>



  export type UnlockedAchievementSelectScalar = {
    id?: boolean
    unlockDate?: boolean
    userId?: boolean
    achievementId?: boolean
  }

  export type UnlockedAchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unlockDate" | "userId" | "achievementId", ExtArgs["result"]["unlockedAchievement"]>
  export type UnlockedAchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }

  export type $UnlockedAchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnlockedAchievement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      achievement: Prisma.$AchievementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      unlockDate: Date
      userId: number
      achievementId: number
    }, ExtArgs["result"]["unlockedAchievement"]>
    composites: {}
  }

  type UnlockedAchievementGetPayload<S extends boolean | null | undefined | UnlockedAchievementDefaultArgs> = $Result.GetResult<Prisma.$UnlockedAchievementPayload, S>

  type UnlockedAchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnlockedAchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnlockedAchievementCountAggregateInputType | true
    }

  export interface UnlockedAchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnlockedAchievement'], meta: { name: 'UnlockedAchievement' } }
    /**
     * Find zero or one UnlockedAchievement that matches the filter.
     * @param {UnlockedAchievementFindUniqueArgs} args - Arguments to find a UnlockedAchievement
     * @example
     * // Get one UnlockedAchievement
     * const unlockedAchievement = await prisma.unlockedAchievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnlockedAchievementFindUniqueArgs>(args: SelectSubset<T, UnlockedAchievementFindUniqueArgs<ExtArgs>>): Prisma__UnlockedAchievementClient<$Result.GetResult<Prisma.$UnlockedAchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnlockedAchievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnlockedAchievementFindUniqueOrThrowArgs} args - Arguments to find a UnlockedAchievement
     * @example
     * // Get one UnlockedAchievement
     * const unlockedAchievement = await prisma.unlockedAchievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnlockedAchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, UnlockedAchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnlockedAchievementClient<$Result.GetResult<Prisma.$UnlockedAchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnlockedAchievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockedAchievementFindFirstArgs} args - Arguments to find a UnlockedAchievement
     * @example
     * // Get one UnlockedAchievement
     * const unlockedAchievement = await prisma.unlockedAchievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnlockedAchievementFindFirstArgs>(args?: SelectSubset<T, UnlockedAchievementFindFirstArgs<ExtArgs>>): Prisma__UnlockedAchievementClient<$Result.GetResult<Prisma.$UnlockedAchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnlockedAchievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockedAchievementFindFirstOrThrowArgs} args - Arguments to find a UnlockedAchievement
     * @example
     * // Get one UnlockedAchievement
     * const unlockedAchievement = await prisma.unlockedAchievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnlockedAchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, UnlockedAchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnlockedAchievementClient<$Result.GetResult<Prisma.$UnlockedAchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnlockedAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockedAchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnlockedAchievements
     * const unlockedAchievements = await prisma.unlockedAchievement.findMany()
     * 
     * // Get first 10 UnlockedAchievements
     * const unlockedAchievements = await prisma.unlockedAchievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unlockedAchievementWithIdOnly = await prisma.unlockedAchievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnlockedAchievementFindManyArgs>(args?: SelectSubset<T, UnlockedAchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnlockedAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnlockedAchievement.
     * @param {UnlockedAchievementCreateArgs} args - Arguments to create a UnlockedAchievement.
     * @example
     * // Create one UnlockedAchievement
     * const UnlockedAchievement = await prisma.unlockedAchievement.create({
     *   data: {
     *     // ... data to create a UnlockedAchievement
     *   }
     * })
     * 
     */
    create<T extends UnlockedAchievementCreateArgs>(args: SelectSubset<T, UnlockedAchievementCreateArgs<ExtArgs>>): Prisma__UnlockedAchievementClient<$Result.GetResult<Prisma.$UnlockedAchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnlockedAchievements.
     * @param {UnlockedAchievementCreateManyArgs} args - Arguments to create many UnlockedAchievements.
     * @example
     * // Create many UnlockedAchievements
     * const unlockedAchievement = await prisma.unlockedAchievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnlockedAchievementCreateManyArgs>(args?: SelectSubset<T, UnlockedAchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UnlockedAchievement.
     * @param {UnlockedAchievementDeleteArgs} args - Arguments to delete one UnlockedAchievement.
     * @example
     * // Delete one UnlockedAchievement
     * const UnlockedAchievement = await prisma.unlockedAchievement.delete({
     *   where: {
     *     // ... filter to delete one UnlockedAchievement
     *   }
     * })
     * 
     */
    delete<T extends UnlockedAchievementDeleteArgs>(args: SelectSubset<T, UnlockedAchievementDeleteArgs<ExtArgs>>): Prisma__UnlockedAchievementClient<$Result.GetResult<Prisma.$UnlockedAchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnlockedAchievement.
     * @param {UnlockedAchievementUpdateArgs} args - Arguments to update one UnlockedAchievement.
     * @example
     * // Update one UnlockedAchievement
     * const unlockedAchievement = await prisma.unlockedAchievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnlockedAchievementUpdateArgs>(args: SelectSubset<T, UnlockedAchievementUpdateArgs<ExtArgs>>): Prisma__UnlockedAchievementClient<$Result.GetResult<Prisma.$UnlockedAchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnlockedAchievements.
     * @param {UnlockedAchievementDeleteManyArgs} args - Arguments to filter UnlockedAchievements to delete.
     * @example
     * // Delete a few UnlockedAchievements
     * const { count } = await prisma.unlockedAchievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnlockedAchievementDeleteManyArgs>(args?: SelectSubset<T, UnlockedAchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnlockedAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockedAchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnlockedAchievements
     * const unlockedAchievement = await prisma.unlockedAchievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnlockedAchievementUpdateManyArgs>(args: SelectSubset<T, UnlockedAchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UnlockedAchievement.
     * @param {UnlockedAchievementUpsertArgs} args - Arguments to update or create a UnlockedAchievement.
     * @example
     * // Update or create a UnlockedAchievement
     * const unlockedAchievement = await prisma.unlockedAchievement.upsert({
     *   create: {
     *     // ... data to create a UnlockedAchievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnlockedAchievement we want to update
     *   }
     * })
     */
    upsert<T extends UnlockedAchievementUpsertArgs>(args: SelectSubset<T, UnlockedAchievementUpsertArgs<ExtArgs>>): Prisma__UnlockedAchievementClient<$Result.GetResult<Prisma.$UnlockedAchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnlockedAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockedAchievementCountArgs} args - Arguments to filter UnlockedAchievements to count.
     * @example
     * // Count the number of UnlockedAchievements
     * const count = await prisma.unlockedAchievement.count({
     *   where: {
     *     // ... the filter for the UnlockedAchievements we want to count
     *   }
     * })
    **/
    count<T extends UnlockedAchievementCountArgs>(
      args?: Subset<T, UnlockedAchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnlockedAchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnlockedAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockedAchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnlockedAchievementAggregateArgs>(args: Subset<T, UnlockedAchievementAggregateArgs>): Prisma.PrismaPromise<GetUnlockedAchievementAggregateType<T>>

    /**
     * Group by UnlockedAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockedAchievementGroupByArgs} args - Group by arguments.
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
      T extends UnlockedAchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnlockedAchievementGroupByArgs['orderBy'] }
        : { orderBy?: UnlockedAchievementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnlockedAchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnlockedAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnlockedAchievement model
   */
  readonly fields: UnlockedAchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnlockedAchievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnlockedAchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    achievement<T extends AchievementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AchievementDefaultArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UnlockedAchievement model
   */
  interface UnlockedAchievementFieldRefs {
    readonly id: FieldRef<"UnlockedAchievement", 'Int'>
    readonly unlockDate: FieldRef<"UnlockedAchievement", 'DateTime'>
    readonly userId: FieldRef<"UnlockedAchievement", 'Int'>
    readonly achievementId: FieldRef<"UnlockedAchievement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UnlockedAchievement findUnique
   */
  export type UnlockedAchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockedAchievement
     */
    select?: UnlockedAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockedAchievement
     */
    omit?: UnlockedAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockedAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UnlockedAchievement to fetch.
     */
    where: UnlockedAchievementWhereUniqueInput
  }

  /**
   * UnlockedAchievement findUniqueOrThrow
   */
  export type UnlockedAchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockedAchievement
     */
    select?: UnlockedAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockedAchievement
     */
    omit?: UnlockedAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockedAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UnlockedAchievement to fetch.
     */
    where: UnlockedAchievementWhereUniqueInput
  }

  /**
   * UnlockedAchievement findFirst
   */
  export type UnlockedAchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockedAchievement
     */
    select?: UnlockedAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockedAchievement
     */
    omit?: UnlockedAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockedAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UnlockedAchievement to fetch.
     */
    where?: UnlockedAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnlockedAchievements to fetch.
     */
    orderBy?: UnlockedAchievementOrderByWithRelationInput | UnlockedAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnlockedAchievements.
     */
    cursor?: UnlockedAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnlockedAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnlockedAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnlockedAchievements.
     */
    distinct?: UnlockedAchievementScalarFieldEnum | UnlockedAchievementScalarFieldEnum[]
  }

  /**
   * UnlockedAchievement findFirstOrThrow
   */
  export type UnlockedAchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockedAchievement
     */
    select?: UnlockedAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockedAchievement
     */
    omit?: UnlockedAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockedAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UnlockedAchievement to fetch.
     */
    where?: UnlockedAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnlockedAchievements to fetch.
     */
    orderBy?: UnlockedAchievementOrderByWithRelationInput | UnlockedAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnlockedAchievements.
     */
    cursor?: UnlockedAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnlockedAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnlockedAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnlockedAchievements.
     */
    distinct?: UnlockedAchievementScalarFieldEnum | UnlockedAchievementScalarFieldEnum[]
  }

  /**
   * UnlockedAchievement findMany
   */
  export type UnlockedAchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockedAchievement
     */
    select?: UnlockedAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockedAchievement
     */
    omit?: UnlockedAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockedAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UnlockedAchievements to fetch.
     */
    where?: UnlockedAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnlockedAchievements to fetch.
     */
    orderBy?: UnlockedAchievementOrderByWithRelationInput | UnlockedAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnlockedAchievements.
     */
    cursor?: UnlockedAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnlockedAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnlockedAchievements.
     */
    skip?: number
    distinct?: UnlockedAchievementScalarFieldEnum | UnlockedAchievementScalarFieldEnum[]
  }

  /**
   * UnlockedAchievement create
   */
  export type UnlockedAchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockedAchievement
     */
    select?: UnlockedAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockedAchievement
     */
    omit?: UnlockedAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockedAchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a UnlockedAchievement.
     */
    data: XOR<UnlockedAchievementCreateInput, UnlockedAchievementUncheckedCreateInput>
  }

  /**
   * UnlockedAchievement createMany
   */
  export type UnlockedAchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnlockedAchievements.
     */
    data: UnlockedAchievementCreateManyInput | UnlockedAchievementCreateManyInput[]
  }

  /**
   * UnlockedAchievement update
   */
  export type UnlockedAchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockedAchievement
     */
    select?: UnlockedAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockedAchievement
     */
    omit?: UnlockedAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockedAchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a UnlockedAchievement.
     */
    data: XOR<UnlockedAchievementUpdateInput, UnlockedAchievementUncheckedUpdateInput>
    /**
     * Choose, which UnlockedAchievement to update.
     */
    where: UnlockedAchievementWhereUniqueInput
  }

  /**
   * UnlockedAchievement updateMany
   */
  export type UnlockedAchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnlockedAchievements.
     */
    data: XOR<UnlockedAchievementUpdateManyMutationInput, UnlockedAchievementUncheckedUpdateManyInput>
    /**
     * Filter which UnlockedAchievements to update
     */
    where?: UnlockedAchievementWhereInput
    /**
     * Limit how many UnlockedAchievements to update.
     */
    limit?: number
  }

  /**
   * UnlockedAchievement upsert
   */
  export type UnlockedAchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockedAchievement
     */
    select?: UnlockedAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockedAchievement
     */
    omit?: UnlockedAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockedAchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the UnlockedAchievement to update in case it exists.
     */
    where: UnlockedAchievementWhereUniqueInput
    /**
     * In case the UnlockedAchievement found by the `where` argument doesn't exist, create a new UnlockedAchievement with this data.
     */
    create: XOR<UnlockedAchievementCreateInput, UnlockedAchievementUncheckedCreateInput>
    /**
     * In case the UnlockedAchievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnlockedAchievementUpdateInput, UnlockedAchievementUncheckedUpdateInput>
  }

  /**
   * UnlockedAchievement delete
   */
  export type UnlockedAchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockedAchievement
     */
    select?: UnlockedAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockedAchievement
     */
    omit?: UnlockedAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockedAchievementInclude<ExtArgs> | null
    /**
     * Filter which UnlockedAchievement to delete.
     */
    where: UnlockedAchievementWhereUniqueInput
  }

  /**
   * UnlockedAchievement deleteMany
   */
  export type UnlockedAchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnlockedAchievements to delete
     */
    where?: UnlockedAchievementWhereInput
    /**
     * Limit how many UnlockedAchievements to delete.
     */
    limit?: number
  }

  /**
   * UnlockedAchievement without action
   */
  export type UnlockedAchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockedAchievement
     */
    select?: UnlockedAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockedAchievement
     */
    omit?: UnlockedAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockedAchievementInclude<ExtArgs> | null
  }


  /**
   * Model Dlc
   */

  export type AggregateDlc = {
    _count: DlcCountAggregateOutputType | null
    _avg: DlcAvgAggregateOutputType | null
    _sum: DlcSumAggregateOutputType | null
    _min: DlcMinAggregateOutputType | null
    _max: DlcMaxAggregateOutputType | null
  }

  export type DlcAvgAggregateOutputType = {
    id: number | null
    price: number | null
    baseGameId: number | null
  }

  export type DlcSumAggregateOutputType = {
    id: number | null
    price: number | null
    baseGameId: number | null
  }

  export type DlcMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    releaseDate: Date | null
    baseGameId: number | null
  }

  export type DlcMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    releaseDate: Date | null
    baseGameId: number | null
  }

  export type DlcCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    releaseDate: number
    baseGameId: number
    _all: number
  }


  export type DlcAvgAggregateInputType = {
    id?: true
    price?: true
    baseGameId?: true
  }

  export type DlcSumAggregateInputType = {
    id?: true
    price?: true
    baseGameId?: true
  }

  export type DlcMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    releaseDate?: true
    baseGameId?: true
  }

  export type DlcMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    releaseDate?: true
    baseGameId?: true
  }

  export type DlcCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    releaseDate?: true
    baseGameId?: true
    _all?: true
  }

  export type DlcAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dlc to aggregate.
     */
    where?: DlcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dlcs to fetch.
     */
    orderBy?: DlcOrderByWithRelationInput | DlcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DlcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dlcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dlcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dlcs
    **/
    _count?: true | DlcCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DlcAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DlcSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DlcMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DlcMaxAggregateInputType
  }

  export type GetDlcAggregateType<T extends DlcAggregateArgs> = {
        [P in keyof T & keyof AggregateDlc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDlc[P]>
      : GetScalarType<T[P], AggregateDlc[P]>
  }




  export type DlcGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DlcWhereInput
    orderBy?: DlcOrderByWithAggregationInput | DlcOrderByWithAggregationInput[]
    by: DlcScalarFieldEnum[] | DlcScalarFieldEnum
    having?: DlcScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DlcCountAggregateInputType | true
    _avg?: DlcAvgAggregateInputType
    _sum?: DlcSumAggregateInputType
    _min?: DlcMinAggregateInputType
    _max?: DlcMaxAggregateInputType
  }

  export type DlcGroupByOutputType = {
    id: number
    name: string
    description: string | null
    price: number
    releaseDate: Date | null
    baseGameId: number
    _count: DlcCountAggregateOutputType | null
    _avg: DlcAvgAggregateOutputType | null
    _sum: DlcSumAggregateOutputType | null
    _min: DlcMinAggregateOutputType | null
    _max: DlcMaxAggregateOutputType | null
  }

  type GetDlcGroupByPayload<T extends DlcGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DlcGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DlcGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DlcGroupByOutputType[P]>
            : GetScalarType<T[P], DlcGroupByOutputType[P]>
        }
      >
    >


  export type DlcSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    releaseDate?: boolean
    baseGameId?: boolean
    baseGame?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dlc"]>



  export type DlcSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    releaseDate?: boolean
    baseGameId?: boolean
  }

  export type DlcOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "releaseDate" | "baseGameId", ExtArgs["result"]["dlc"]>
  export type DlcInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseGame?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $DlcPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dlc"
    objects: {
      baseGame: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      price: number
      releaseDate: Date | null
      baseGameId: number
    }, ExtArgs["result"]["dlc"]>
    composites: {}
  }

  type DlcGetPayload<S extends boolean | null | undefined | DlcDefaultArgs> = $Result.GetResult<Prisma.$DlcPayload, S>

  type DlcCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DlcFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DlcCountAggregateInputType | true
    }

  export interface DlcDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dlc'], meta: { name: 'Dlc' } }
    /**
     * Find zero or one Dlc that matches the filter.
     * @param {DlcFindUniqueArgs} args - Arguments to find a Dlc
     * @example
     * // Get one Dlc
     * const dlc = await prisma.dlc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DlcFindUniqueArgs>(args: SelectSubset<T, DlcFindUniqueArgs<ExtArgs>>): Prisma__DlcClient<$Result.GetResult<Prisma.$DlcPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dlc that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DlcFindUniqueOrThrowArgs} args - Arguments to find a Dlc
     * @example
     * // Get one Dlc
     * const dlc = await prisma.dlc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DlcFindUniqueOrThrowArgs>(args: SelectSubset<T, DlcFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DlcClient<$Result.GetResult<Prisma.$DlcPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dlc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DlcFindFirstArgs} args - Arguments to find a Dlc
     * @example
     * // Get one Dlc
     * const dlc = await prisma.dlc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DlcFindFirstArgs>(args?: SelectSubset<T, DlcFindFirstArgs<ExtArgs>>): Prisma__DlcClient<$Result.GetResult<Prisma.$DlcPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dlc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DlcFindFirstOrThrowArgs} args - Arguments to find a Dlc
     * @example
     * // Get one Dlc
     * const dlc = await prisma.dlc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DlcFindFirstOrThrowArgs>(args?: SelectSubset<T, DlcFindFirstOrThrowArgs<ExtArgs>>): Prisma__DlcClient<$Result.GetResult<Prisma.$DlcPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dlcs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DlcFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dlcs
     * const dlcs = await prisma.dlc.findMany()
     * 
     * // Get first 10 Dlcs
     * const dlcs = await prisma.dlc.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dlcWithIdOnly = await prisma.dlc.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DlcFindManyArgs>(args?: SelectSubset<T, DlcFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DlcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dlc.
     * @param {DlcCreateArgs} args - Arguments to create a Dlc.
     * @example
     * // Create one Dlc
     * const Dlc = await prisma.dlc.create({
     *   data: {
     *     // ... data to create a Dlc
     *   }
     * })
     * 
     */
    create<T extends DlcCreateArgs>(args: SelectSubset<T, DlcCreateArgs<ExtArgs>>): Prisma__DlcClient<$Result.GetResult<Prisma.$DlcPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dlcs.
     * @param {DlcCreateManyArgs} args - Arguments to create many Dlcs.
     * @example
     * // Create many Dlcs
     * const dlc = await prisma.dlc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DlcCreateManyArgs>(args?: SelectSubset<T, DlcCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dlc.
     * @param {DlcDeleteArgs} args - Arguments to delete one Dlc.
     * @example
     * // Delete one Dlc
     * const Dlc = await prisma.dlc.delete({
     *   where: {
     *     // ... filter to delete one Dlc
     *   }
     * })
     * 
     */
    delete<T extends DlcDeleteArgs>(args: SelectSubset<T, DlcDeleteArgs<ExtArgs>>): Prisma__DlcClient<$Result.GetResult<Prisma.$DlcPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dlc.
     * @param {DlcUpdateArgs} args - Arguments to update one Dlc.
     * @example
     * // Update one Dlc
     * const dlc = await prisma.dlc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DlcUpdateArgs>(args: SelectSubset<T, DlcUpdateArgs<ExtArgs>>): Prisma__DlcClient<$Result.GetResult<Prisma.$DlcPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dlcs.
     * @param {DlcDeleteManyArgs} args - Arguments to filter Dlcs to delete.
     * @example
     * // Delete a few Dlcs
     * const { count } = await prisma.dlc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DlcDeleteManyArgs>(args?: SelectSubset<T, DlcDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dlcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DlcUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dlcs
     * const dlc = await prisma.dlc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DlcUpdateManyArgs>(args: SelectSubset<T, DlcUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dlc.
     * @param {DlcUpsertArgs} args - Arguments to update or create a Dlc.
     * @example
     * // Update or create a Dlc
     * const dlc = await prisma.dlc.upsert({
     *   create: {
     *     // ... data to create a Dlc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dlc we want to update
     *   }
     * })
     */
    upsert<T extends DlcUpsertArgs>(args: SelectSubset<T, DlcUpsertArgs<ExtArgs>>): Prisma__DlcClient<$Result.GetResult<Prisma.$DlcPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dlcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DlcCountArgs} args - Arguments to filter Dlcs to count.
     * @example
     * // Count the number of Dlcs
     * const count = await prisma.dlc.count({
     *   where: {
     *     // ... the filter for the Dlcs we want to count
     *   }
     * })
    **/
    count<T extends DlcCountArgs>(
      args?: Subset<T, DlcCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DlcCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dlc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DlcAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DlcAggregateArgs>(args: Subset<T, DlcAggregateArgs>): Prisma.PrismaPromise<GetDlcAggregateType<T>>

    /**
     * Group by Dlc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DlcGroupByArgs} args - Group by arguments.
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
      T extends DlcGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DlcGroupByArgs['orderBy'] }
        : { orderBy?: DlcGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DlcGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDlcGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dlc model
   */
  readonly fields: DlcFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dlc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DlcClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baseGame<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Dlc model
   */
  interface DlcFieldRefs {
    readonly id: FieldRef<"Dlc", 'Int'>
    readonly name: FieldRef<"Dlc", 'String'>
    readonly description: FieldRef<"Dlc", 'String'>
    readonly price: FieldRef<"Dlc", 'Float'>
    readonly releaseDate: FieldRef<"Dlc", 'DateTime'>
    readonly baseGameId: FieldRef<"Dlc", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Dlc findUnique
   */
  export type DlcFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dlc
     */
    select?: DlcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dlc
     */
    omit?: DlcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DlcInclude<ExtArgs> | null
    /**
     * Filter, which Dlc to fetch.
     */
    where: DlcWhereUniqueInput
  }

  /**
   * Dlc findUniqueOrThrow
   */
  export type DlcFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dlc
     */
    select?: DlcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dlc
     */
    omit?: DlcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DlcInclude<ExtArgs> | null
    /**
     * Filter, which Dlc to fetch.
     */
    where: DlcWhereUniqueInput
  }

  /**
   * Dlc findFirst
   */
  export type DlcFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dlc
     */
    select?: DlcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dlc
     */
    omit?: DlcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DlcInclude<ExtArgs> | null
    /**
     * Filter, which Dlc to fetch.
     */
    where?: DlcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dlcs to fetch.
     */
    orderBy?: DlcOrderByWithRelationInput | DlcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dlcs.
     */
    cursor?: DlcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dlcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dlcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dlcs.
     */
    distinct?: DlcScalarFieldEnum | DlcScalarFieldEnum[]
  }

  /**
   * Dlc findFirstOrThrow
   */
  export type DlcFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dlc
     */
    select?: DlcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dlc
     */
    omit?: DlcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DlcInclude<ExtArgs> | null
    /**
     * Filter, which Dlc to fetch.
     */
    where?: DlcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dlcs to fetch.
     */
    orderBy?: DlcOrderByWithRelationInput | DlcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dlcs.
     */
    cursor?: DlcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dlcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dlcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dlcs.
     */
    distinct?: DlcScalarFieldEnum | DlcScalarFieldEnum[]
  }

  /**
   * Dlc findMany
   */
  export type DlcFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dlc
     */
    select?: DlcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dlc
     */
    omit?: DlcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DlcInclude<ExtArgs> | null
    /**
     * Filter, which Dlcs to fetch.
     */
    where?: DlcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dlcs to fetch.
     */
    orderBy?: DlcOrderByWithRelationInput | DlcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dlcs.
     */
    cursor?: DlcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dlcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dlcs.
     */
    skip?: number
    distinct?: DlcScalarFieldEnum | DlcScalarFieldEnum[]
  }

  /**
   * Dlc create
   */
  export type DlcCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dlc
     */
    select?: DlcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dlc
     */
    omit?: DlcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DlcInclude<ExtArgs> | null
    /**
     * The data needed to create a Dlc.
     */
    data: XOR<DlcCreateInput, DlcUncheckedCreateInput>
  }

  /**
   * Dlc createMany
   */
  export type DlcCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dlcs.
     */
    data: DlcCreateManyInput | DlcCreateManyInput[]
  }

  /**
   * Dlc update
   */
  export type DlcUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dlc
     */
    select?: DlcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dlc
     */
    omit?: DlcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DlcInclude<ExtArgs> | null
    /**
     * The data needed to update a Dlc.
     */
    data: XOR<DlcUpdateInput, DlcUncheckedUpdateInput>
    /**
     * Choose, which Dlc to update.
     */
    where: DlcWhereUniqueInput
  }

  /**
   * Dlc updateMany
   */
  export type DlcUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dlcs.
     */
    data: XOR<DlcUpdateManyMutationInput, DlcUncheckedUpdateManyInput>
    /**
     * Filter which Dlcs to update
     */
    where?: DlcWhereInput
    /**
     * Limit how many Dlcs to update.
     */
    limit?: number
  }

  /**
   * Dlc upsert
   */
  export type DlcUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dlc
     */
    select?: DlcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dlc
     */
    omit?: DlcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DlcInclude<ExtArgs> | null
    /**
     * The filter to search for the Dlc to update in case it exists.
     */
    where: DlcWhereUniqueInput
    /**
     * In case the Dlc found by the `where` argument doesn't exist, create a new Dlc with this data.
     */
    create: XOR<DlcCreateInput, DlcUncheckedCreateInput>
    /**
     * In case the Dlc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DlcUpdateInput, DlcUncheckedUpdateInput>
  }

  /**
   * Dlc delete
   */
  export type DlcDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dlc
     */
    select?: DlcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dlc
     */
    omit?: DlcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DlcInclude<ExtArgs> | null
    /**
     * Filter which Dlc to delete.
     */
    where: DlcWhereUniqueInput
  }

  /**
   * Dlc deleteMany
   */
  export type DlcDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dlcs to delete
     */
    where?: DlcWhereInput
    /**
     * Limit how many Dlcs to delete.
     */
    limit?: number
  }

  /**
   * Dlc without action
   */
  export type DlcDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dlc
     */
    select?: DlcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dlc
     */
    omit?: DlcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DlcInclude<ExtArgs> | null
  }


  /**
   * Model GameGender
   */

  export type AggregateGameGender = {
    _count: GameGenderCountAggregateOutputType | null
    _avg: GameGenderAvgAggregateOutputType | null
    _sum: GameGenderSumAggregateOutputType | null
    _min: GameGenderMinAggregateOutputType | null
    _max: GameGenderMaxAggregateOutputType | null
  }

  export type GameGenderAvgAggregateOutputType = {
    gameId: number | null
    genderId: number | null
  }

  export type GameGenderSumAggregateOutputType = {
    gameId: number | null
    genderId: number | null
  }

  export type GameGenderMinAggregateOutputType = {
    gameId: number | null
    genderId: number | null
  }

  export type GameGenderMaxAggregateOutputType = {
    gameId: number | null
    genderId: number | null
  }

  export type GameGenderCountAggregateOutputType = {
    gameId: number
    genderId: number
    _all: number
  }


  export type GameGenderAvgAggregateInputType = {
    gameId?: true
    genderId?: true
  }

  export type GameGenderSumAggregateInputType = {
    gameId?: true
    genderId?: true
  }

  export type GameGenderMinAggregateInputType = {
    gameId?: true
    genderId?: true
  }

  export type GameGenderMaxAggregateInputType = {
    gameId?: true
    genderId?: true
  }

  export type GameGenderCountAggregateInputType = {
    gameId?: true
    genderId?: true
    _all?: true
  }

  export type GameGenderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameGender to aggregate.
     */
    where?: GameGenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameGenders to fetch.
     */
    orderBy?: GameGenderOrderByWithRelationInput | GameGenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameGenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameGenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameGenders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameGenders
    **/
    _count?: true | GameGenderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameGenderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameGenderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameGenderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameGenderMaxAggregateInputType
  }

  export type GetGameGenderAggregateType<T extends GameGenderAggregateArgs> = {
        [P in keyof T & keyof AggregateGameGender]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameGender[P]>
      : GetScalarType<T[P], AggregateGameGender[P]>
  }




  export type GameGenderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameGenderWhereInput
    orderBy?: GameGenderOrderByWithAggregationInput | GameGenderOrderByWithAggregationInput[]
    by: GameGenderScalarFieldEnum[] | GameGenderScalarFieldEnum
    having?: GameGenderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameGenderCountAggregateInputType | true
    _avg?: GameGenderAvgAggregateInputType
    _sum?: GameGenderSumAggregateInputType
    _min?: GameGenderMinAggregateInputType
    _max?: GameGenderMaxAggregateInputType
  }

  export type GameGenderGroupByOutputType = {
    gameId: number
    genderId: number
    _count: GameGenderCountAggregateOutputType | null
    _avg: GameGenderAvgAggregateOutputType | null
    _sum: GameGenderSumAggregateOutputType | null
    _min: GameGenderMinAggregateOutputType | null
    _max: GameGenderMaxAggregateOutputType | null
  }

  type GetGameGenderGroupByPayload<T extends GameGenderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGenderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGenderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGenderGroupByOutputType[P]>
            : GetScalarType<T[P], GameGenderGroupByOutputType[P]>
        }
      >
    >


  export type GameGenderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gameId?: boolean
    genderId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    genre?: boolean | GenderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameGender"]>



  export type GameGenderSelectScalar = {
    gameId?: boolean
    genderId?: boolean
  }

  export type GameGenderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"gameId" | "genderId", ExtArgs["result"]["gameGender"]>
  export type GameGenderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    genre?: boolean | GenderDefaultArgs<ExtArgs>
  }

  export type $GameGenderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameGender"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      genre: Prisma.$GenderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      gameId: number
      genderId: number
    }, ExtArgs["result"]["gameGender"]>
    composites: {}
  }

  type GameGenderGetPayload<S extends boolean | null | undefined | GameGenderDefaultArgs> = $Result.GetResult<Prisma.$GameGenderPayload, S>

  type GameGenderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameGenderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameGenderCountAggregateInputType | true
    }

  export interface GameGenderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameGender'], meta: { name: 'GameGender' } }
    /**
     * Find zero or one GameGender that matches the filter.
     * @param {GameGenderFindUniqueArgs} args - Arguments to find a GameGender
     * @example
     * // Get one GameGender
     * const gameGender = await prisma.gameGender.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameGenderFindUniqueArgs>(args: SelectSubset<T, GameGenderFindUniqueArgs<ExtArgs>>): Prisma__GameGenderClient<$Result.GetResult<Prisma.$GameGenderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameGender that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameGenderFindUniqueOrThrowArgs} args - Arguments to find a GameGender
     * @example
     * // Get one GameGender
     * const gameGender = await prisma.gameGender.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameGenderFindUniqueOrThrowArgs>(args: SelectSubset<T, GameGenderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameGenderClient<$Result.GetResult<Prisma.$GameGenderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameGender that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGenderFindFirstArgs} args - Arguments to find a GameGender
     * @example
     * // Get one GameGender
     * const gameGender = await prisma.gameGender.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameGenderFindFirstArgs>(args?: SelectSubset<T, GameGenderFindFirstArgs<ExtArgs>>): Prisma__GameGenderClient<$Result.GetResult<Prisma.$GameGenderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameGender that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGenderFindFirstOrThrowArgs} args - Arguments to find a GameGender
     * @example
     * // Get one GameGender
     * const gameGender = await prisma.gameGender.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameGenderFindFirstOrThrowArgs>(args?: SelectSubset<T, GameGenderFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameGenderClient<$Result.GetResult<Prisma.$GameGenderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameGenders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGenderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameGenders
     * const gameGenders = await prisma.gameGender.findMany()
     * 
     * // Get first 10 GameGenders
     * const gameGenders = await prisma.gameGender.findMany({ take: 10 })
     * 
     * // Only select the `gameId`
     * const gameGenderWithGameIdOnly = await prisma.gameGender.findMany({ select: { gameId: true } })
     * 
     */
    findMany<T extends GameGenderFindManyArgs>(args?: SelectSubset<T, GameGenderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameGenderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameGender.
     * @param {GameGenderCreateArgs} args - Arguments to create a GameGender.
     * @example
     * // Create one GameGender
     * const GameGender = await prisma.gameGender.create({
     *   data: {
     *     // ... data to create a GameGender
     *   }
     * })
     * 
     */
    create<T extends GameGenderCreateArgs>(args: SelectSubset<T, GameGenderCreateArgs<ExtArgs>>): Prisma__GameGenderClient<$Result.GetResult<Prisma.$GameGenderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameGenders.
     * @param {GameGenderCreateManyArgs} args - Arguments to create many GameGenders.
     * @example
     * // Create many GameGenders
     * const gameGender = await prisma.gameGender.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameGenderCreateManyArgs>(args?: SelectSubset<T, GameGenderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GameGender.
     * @param {GameGenderDeleteArgs} args - Arguments to delete one GameGender.
     * @example
     * // Delete one GameGender
     * const GameGender = await prisma.gameGender.delete({
     *   where: {
     *     // ... filter to delete one GameGender
     *   }
     * })
     * 
     */
    delete<T extends GameGenderDeleteArgs>(args: SelectSubset<T, GameGenderDeleteArgs<ExtArgs>>): Prisma__GameGenderClient<$Result.GetResult<Prisma.$GameGenderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameGender.
     * @param {GameGenderUpdateArgs} args - Arguments to update one GameGender.
     * @example
     * // Update one GameGender
     * const gameGender = await prisma.gameGender.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameGenderUpdateArgs>(args: SelectSubset<T, GameGenderUpdateArgs<ExtArgs>>): Prisma__GameGenderClient<$Result.GetResult<Prisma.$GameGenderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameGenders.
     * @param {GameGenderDeleteManyArgs} args - Arguments to filter GameGenders to delete.
     * @example
     * // Delete a few GameGenders
     * const { count } = await prisma.gameGender.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameGenderDeleteManyArgs>(args?: SelectSubset<T, GameGenderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameGenders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGenderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameGenders
     * const gameGender = await prisma.gameGender.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameGenderUpdateManyArgs>(args: SelectSubset<T, GameGenderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameGender.
     * @param {GameGenderUpsertArgs} args - Arguments to update or create a GameGender.
     * @example
     * // Update or create a GameGender
     * const gameGender = await prisma.gameGender.upsert({
     *   create: {
     *     // ... data to create a GameGender
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameGender we want to update
     *   }
     * })
     */
    upsert<T extends GameGenderUpsertArgs>(args: SelectSubset<T, GameGenderUpsertArgs<ExtArgs>>): Prisma__GameGenderClient<$Result.GetResult<Prisma.$GameGenderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameGenders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGenderCountArgs} args - Arguments to filter GameGenders to count.
     * @example
     * // Count the number of GameGenders
     * const count = await prisma.gameGender.count({
     *   where: {
     *     // ... the filter for the GameGenders we want to count
     *   }
     * })
    **/
    count<T extends GameGenderCountArgs>(
      args?: Subset<T, GameGenderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameGenderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameGender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGenderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameGenderAggregateArgs>(args: Subset<T, GameGenderAggregateArgs>): Prisma.PrismaPromise<GetGameGenderAggregateType<T>>

    /**
     * Group by GameGender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGenderGroupByArgs} args - Group by arguments.
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
      T extends GameGenderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGenderGroupByArgs['orderBy'] }
        : { orderBy?: GameGenderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameGenderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGenderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameGender model
   */
  readonly fields: GameGenderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameGender.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameGenderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genre<T extends GenderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenderDefaultArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GameGender model
   */
  interface GameGenderFieldRefs {
    readonly gameId: FieldRef<"GameGender", 'Int'>
    readonly genderId: FieldRef<"GameGender", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GameGender findUnique
   */
  export type GameGenderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameGender
     */
    select?: GameGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameGender
     */
    omit?: GameGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameGenderInclude<ExtArgs> | null
    /**
     * Filter, which GameGender to fetch.
     */
    where: GameGenderWhereUniqueInput
  }

  /**
   * GameGender findUniqueOrThrow
   */
  export type GameGenderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameGender
     */
    select?: GameGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameGender
     */
    omit?: GameGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameGenderInclude<ExtArgs> | null
    /**
     * Filter, which GameGender to fetch.
     */
    where: GameGenderWhereUniqueInput
  }

  /**
   * GameGender findFirst
   */
  export type GameGenderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameGender
     */
    select?: GameGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameGender
     */
    omit?: GameGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameGenderInclude<ExtArgs> | null
    /**
     * Filter, which GameGender to fetch.
     */
    where?: GameGenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameGenders to fetch.
     */
    orderBy?: GameGenderOrderByWithRelationInput | GameGenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameGenders.
     */
    cursor?: GameGenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameGenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameGenders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameGenders.
     */
    distinct?: GameGenderScalarFieldEnum | GameGenderScalarFieldEnum[]
  }

  /**
   * GameGender findFirstOrThrow
   */
  export type GameGenderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameGender
     */
    select?: GameGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameGender
     */
    omit?: GameGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameGenderInclude<ExtArgs> | null
    /**
     * Filter, which GameGender to fetch.
     */
    where?: GameGenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameGenders to fetch.
     */
    orderBy?: GameGenderOrderByWithRelationInput | GameGenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameGenders.
     */
    cursor?: GameGenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameGenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameGenders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameGenders.
     */
    distinct?: GameGenderScalarFieldEnum | GameGenderScalarFieldEnum[]
  }

  /**
   * GameGender findMany
   */
  export type GameGenderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameGender
     */
    select?: GameGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameGender
     */
    omit?: GameGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameGenderInclude<ExtArgs> | null
    /**
     * Filter, which GameGenders to fetch.
     */
    where?: GameGenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameGenders to fetch.
     */
    orderBy?: GameGenderOrderByWithRelationInput | GameGenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameGenders.
     */
    cursor?: GameGenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameGenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameGenders.
     */
    skip?: number
    distinct?: GameGenderScalarFieldEnum | GameGenderScalarFieldEnum[]
  }

  /**
   * GameGender create
   */
  export type GameGenderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameGender
     */
    select?: GameGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameGender
     */
    omit?: GameGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameGenderInclude<ExtArgs> | null
    /**
     * The data needed to create a GameGender.
     */
    data: XOR<GameGenderCreateInput, GameGenderUncheckedCreateInput>
  }

  /**
   * GameGender createMany
   */
  export type GameGenderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameGenders.
     */
    data: GameGenderCreateManyInput | GameGenderCreateManyInput[]
  }

  /**
   * GameGender update
   */
  export type GameGenderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameGender
     */
    select?: GameGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameGender
     */
    omit?: GameGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameGenderInclude<ExtArgs> | null
    /**
     * The data needed to update a GameGender.
     */
    data: XOR<GameGenderUpdateInput, GameGenderUncheckedUpdateInput>
    /**
     * Choose, which GameGender to update.
     */
    where: GameGenderWhereUniqueInput
  }

  /**
   * GameGender updateMany
   */
  export type GameGenderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameGenders.
     */
    data: XOR<GameGenderUpdateManyMutationInput, GameGenderUncheckedUpdateManyInput>
    /**
     * Filter which GameGenders to update
     */
    where?: GameGenderWhereInput
    /**
     * Limit how many GameGenders to update.
     */
    limit?: number
  }

  /**
   * GameGender upsert
   */
  export type GameGenderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameGender
     */
    select?: GameGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameGender
     */
    omit?: GameGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameGenderInclude<ExtArgs> | null
    /**
     * The filter to search for the GameGender to update in case it exists.
     */
    where: GameGenderWhereUniqueInput
    /**
     * In case the GameGender found by the `where` argument doesn't exist, create a new GameGender with this data.
     */
    create: XOR<GameGenderCreateInput, GameGenderUncheckedCreateInput>
    /**
     * In case the GameGender was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameGenderUpdateInput, GameGenderUncheckedUpdateInput>
  }

  /**
   * GameGender delete
   */
  export type GameGenderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameGender
     */
    select?: GameGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameGender
     */
    omit?: GameGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameGenderInclude<ExtArgs> | null
    /**
     * Filter which GameGender to delete.
     */
    where: GameGenderWhereUniqueInput
  }

  /**
   * GameGender deleteMany
   */
  export type GameGenderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameGenders to delete
     */
    where?: GameGenderWhereInput
    /**
     * Limit how many GameGenders to delete.
     */
    limit?: number
  }

  /**
   * GameGender without action
   */
  export type GameGenderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameGender
     */
    select?: GameGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameGender
     */
    omit?: GameGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameGenderInclude<ExtArgs> | null
  }


  /**
   * Model GameTag
   */

  export type AggregateGameTag = {
    _count: GameTagCountAggregateOutputType | null
    _avg: GameTagAvgAggregateOutputType | null
    _sum: GameTagSumAggregateOutputType | null
    _min: GameTagMinAggregateOutputType | null
    _max: GameTagMaxAggregateOutputType | null
  }

  export type GameTagAvgAggregateOutputType = {
    gameId: number | null
    tagId: number | null
  }

  export type GameTagSumAggregateOutputType = {
    gameId: number | null
    tagId: number | null
  }

  export type GameTagMinAggregateOutputType = {
    gameId: number | null
    tagId: number | null
  }

  export type GameTagMaxAggregateOutputType = {
    gameId: number | null
    tagId: number | null
  }

  export type GameTagCountAggregateOutputType = {
    gameId: number
    tagId: number
    _all: number
  }


  export type GameTagAvgAggregateInputType = {
    gameId?: true
    tagId?: true
  }

  export type GameTagSumAggregateInputType = {
    gameId?: true
    tagId?: true
  }

  export type GameTagMinAggregateInputType = {
    gameId?: true
    tagId?: true
  }

  export type GameTagMaxAggregateInputType = {
    gameId?: true
    tagId?: true
  }

  export type GameTagCountAggregateInputType = {
    gameId?: true
    tagId?: true
    _all?: true
  }

  export type GameTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameTag to aggregate.
     */
    where?: GameTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTags to fetch.
     */
    orderBy?: GameTagOrderByWithRelationInput | GameTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameTags
    **/
    _count?: true | GameTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameTagMaxAggregateInputType
  }

  export type GetGameTagAggregateType<T extends GameTagAggregateArgs> = {
        [P in keyof T & keyof AggregateGameTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameTag[P]>
      : GetScalarType<T[P], AggregateGameTag[P]>
  }




  export type GameTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameTagWhereInput
    orderBy?: GameTagOrderByWithAggregationInput | GameTagOrderByWithAggregationInput[]
    by: GameTagScalarFieldEnum[] | GameTagScalarFieldEnum
    having?: GameTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameTagCountAggregateInputType | true
    _avg?: GameTagAvgAggregateInputType
    _sum?: GameTagSumAggregateInputType
    _min?: GameTagMinAggregateInputType
    _max?: GameTagMaxAggregateInputType
  }

  export type GameTagGroupByOutputType = {
    gameId: number
    tagId: number
    _count: GameTagCountAggregateOutputType | null
    _avg: GameTagAvgAggregateOutputType | null
    _sum: GameTagSumAggregateOutputType | null
    _min: GameTagMinAggregateOutputType | null
    _max: GameTagMaxAggregateOutputType | null
  }

  type GetGameTagGroupByPayload<T extends GameTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameTagGroupByOutputType[P]>
            : GetScalarType<T[P], GameTagGroupByOutputType[P]>
        }
      >
    >


  export type GameTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gameId?: boolean
    tagId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameTag"]>



  export type GameTagSelectScalar = {
    gameId?: boolean
    tagId?: boolean
  }

  export type GameTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"gameId" | "tagId", ExtArgs["result"]["gameTag"]>
  export type GameTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $GameTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameTag"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      gameId: number
      tagId: number
    }, ExtArgs["result"]["gameTag"]>
    composites: {}
  }

  type GameTagGetPayload<S extends boolean | null | undefined | GameTagDefaultArgs> = $Result.GetResult<Prisma.$GameTagPayload, S>

  type GameTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameTagCountAggregateInputType | true
    }

  export interface GameTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameTag'], meta: { name: 'GameTag' } }
    /**
     * Find zero or one GameTag that matches the filter.
     * @param {GameTagFindUniqueArgs} args - Arguments to find a GameTag
     * @example
     * // Get one GameTag
     * const gameTag = await prisma.gameTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameTagFindUniqueArgs>(args: SelectSubset<T, GameTagFindUniqueArgs<ExtArgs>>): Prisma__GameTagClient<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameTagFindUniqueOrThrowArgs} args - Arguments to find a GameTag
     * @example
     * // Get one GameTag
     * const gameTag = await prisma.gameTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameTagFindUniqueOrThrowArgs>(args: SelectSubset<T, GameTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameTagClient<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTagFindFirstArgs} args - Arguments to find a GameTag
     * @example
     * // Get one GameTag
     * const gameTag = await prisma.gameTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameTagFindFirstArgs>(args?: SelectSubset<T, GameTagFindFirstArgs<ExtArgs>>): Prisma__GameTagClient<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTagFindFirstOrThrowArgs} args - Arguments to find a GameTag
     * @example
     * // Get one GameTag
     * const gameTag = await prisma.gameTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameTagFindFirstOrThrowArgs>(args?: SelectSubset<T, GameTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameTagClient<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameTags
     * const gameTags = await prisma.gameTag.findMany()
     * 
     * // Get first 10 GameTags
     * const gameTags = await prisma.gameTag.findMany({ take: 10 })
     * 
     * // Only select the `gameId`
     * const gameTagWithGameIdOnly = await prisma.gameTag.findMany({ select: { gameId: true } })
     * 
     */
    findMany<T extends GameTagFindManyArgs>(args?: SelectSubset<T, GameTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameTag.
     * @param {GameTagCreateArgs} args - Arguments to create a GameTag.
     * @example
     * // Create one GameTag
     * const GameTag = await prisma.gameTag.create({
     *   data: {
     *     // ... data to create a GameTag
     *   }
     * })
     * 
     */
    create<T extends GameTagCreateArgs>(args: SelectSubset<T, GameTagCreateArgs<ExtArgs>>): Prisma__GameTagClient<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameTags.
     * @param {GameTagCreateManyArgs} args - Arguments to create many GameTags.
     * @example
     * // Create many GameTags
     * const gameTag = await prisma.gameTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameTagCreateManyArgs>(args?: SelectSubset<T, GameTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GameTag.
     * @param {GameTagDeleteArgs} args - Arguments to delete one GameTag.
     * @example
     * // Delete one GameTag
     * const GameTag = await prisma.gameTag.delete({
     *   where: {
     *     // ... filter to delete one GameTag
     *   }
     * })
     * 
     */
    delete<T extends GameTagDeleteArgs>(args: SelectSubset<T, GameTagDeleteArgs<ExtArgs>>): Prisma__GameTagClient<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameTag.
     * @param {GameTagUpdateArgs} args - Arguments to update one GameTag.
     * @example
     * // Update one GameTag
     * const gameTag = await prisma.gameTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameTagUpdateArgs>(args: SelectSubset<T, GameTagUpdateArgs<ExtArgs>>): Prisma__GameTagClient<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameTags.
     * @param {GameTagDeleteManyArgs} args - Arguments to filter GameTags to delete.
     * @example
     * // Delete a few GameTags
     * const { count } = await prisma.gameTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameTagDeleteManyArgs>(args?: SelectSubset<T, GameTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameTags
     * const gameTag = await prisma.gameTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameTagUpdateManyArgs>(args: SelectSubset<T, GameTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameTag.
     * @param {GameTagUpsertArgs} args - Arguments to update or create a GameTag.
     * @example
     * // Update or create a GameTag
     * const gameTag = await prisma.gameTag.upsert({
     *   create: {
     *     // ... data to create a GameTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameTag we want to update
     *   }
     * })
     */
    upsert<T extends GameTagUpsertArgs>(args: SelectSubset<T, GameTagUpsertArgs<ExtArgs>>): Prisma__GameTagClient<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTagCountArgs} args - Arguments to filter GameTags to count.
     * @example
     * // Count the number of GameTags
     * const count = await prisma.gameTag.count({
     *   where: {
     *     // ... the filter for the GameTags we want to count
     *   }
     * })
    **/
    count<T extends GameTagCountArgs>(
      args?: Subset<T, GameTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameTagAggregateArgs>(args: Subset<T, GameTagAggregateArgs>): Prisma.PrismaPromise<GetGameTagAggregateType<T>>

    /**
     * Group by GameTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTagGroupByArgs} args - Group by arguments.
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
      T extends GameTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameTagGroupByArgs['orderBy'] }
        : { orderBy?: GameTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameTag model
   */
  readonly fields: GameTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GameTag model
   */
  interface GameTagFieldRefs {
    readonly gameId: FieldRef<"GameTag", 'Int'>
    readonly tagId: FieldRef<"GameTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GameTag findUnique
   */
  export type GameTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTag
     */
    omit?: GameTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * Filter, which GameTag to fetch.
     */
    where: GameTagWhereUniqueInput
  }

  /**
   * GameTag findUniqueOrThrow
   */
  export type GameTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTag
     */
    omit?: GameTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * Filter, which GameTag to fetch.
     */
    where: GameTagWhereUniqueInput
  }

  /**
   * GameTag findFirst
   */
  export type GameTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTag
     */
    omit?: GameTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * Filter, which GameTag to fetch.
     */
    where?: GameTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTags to fetch.
     */
    orderBy?: GameTagOrderByWithRelationInput | GameTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameTags.
     */
    cursor?: GameTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameTags.
     */
    distinct?: GameTagScalarFieldEnum | GameTagScalarFieldEnum[]
  }

  /**
   * GameTag findFirstOrThrow
   */
  export type GameTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTag
     */
    omit?: GameTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * Filter, which GameTag to fetch.
     */
    where?: GameTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTags to fetch.
     */
    orderBy?: GameTagOrderByWithRelationInput | GameTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameTags.
     */
    cursor?: GameTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameTags.
     */
    distinct?: GameTagScalarFieldEnum | GameTagScalarFieldEnum[]
  }

  /**
   * GameTag findMany
   */
  export type GameTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTag
     */
    omit?: GameTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * Filter, which GameTags to fetch.
     */
    where?: GameTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTags to fetch.
     */
    orderBy?: GameTagOrderByWithRelationInput | GameTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameTags.
     */
    cursor?: GameTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTags.
     */
    skip?: number
    distinct?: GameTagScalarFieldEnum | GameTagScalarFieldEnum[]
  }

  /**
   * GameTag create
   */
  export type GameTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTag
     */
    omit?: GameTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * The data needed to create a GameTag.
     */
    data: XOR<GameTagCreateInput, GameTagUncheckedCreateInput>
  }

  /**
   * GameTag createMany
   */
  export type GameTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameTags.
     */
    data: GameTagCreateManyInput | GameTagCreateManyInput[]
  }

  /**
   * GameTag update
   */
  export type GameTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTag
     */
    omit?: GameTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * The data needed to update a GameTag.
     */
    data: XOR<GameTagUpdateInput, GameTagUncheckedUpdateInput>
    /**
     * Choose, which GameTag to update.
     */
    where: GameTagWhereUniqueInput
  }

  /**
   * GameTag updateMany
   */
  export type GameTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameTags.
     */
    data: XOR<GameTagUpdateManyMutationInput, GameTagUncheckedUpdateManyInput>
    /**
     * Filter which GameTags to update
     */
    where?: GameTagWhereInput
    /**
     * Limit how many GameTags to update.
     */
    limit?: number
  }

  /**
   * GameTag upsert
   */
  export type GameTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTag
     */
    omit?: GameTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * The filter to search for the GameTag to update in case it exists.
     */
    where: GameTagWhereUniqueInput
    /**
     * In case the GameTag found by the `where` argument doesn't exist, create a new GameTag with this data.
     */
    create: XOR<GameTagCreateInput, GameTagUncheckedCreateInput>
    /**
     * In case the GameTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameTagUpdateInput, GameTagUncheckedUpdateInput>
  }

  /**
   * GameTag delete
   */
  export type GameTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTag
     */
    omit?: GameTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * Filter which GameTag to delete.
     */
    where: GameTagWhereUniqueInput
  }

  /**
   * GameTag deleteMany
   */
  export type GameTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameTags to delete
     */
    where?: GameTagWhereInput
    /**
     * Limit how many GameTags to delete.
     */
    limit?: number
  }

  /**
   * GameTag without action
   */
  export type GameTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTag
     */
    omit?: GameTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
  }


  /**
   * Model GamePlatform
   */

  export type AggregateGamePlatform = {
    _count: GamePlatformCountAggregateOutputType | null
    _avg: GamePlatformAvgAggregateOutputType | null
    _sum: GamePlatformSumAggregateOutputType | null
    _min: GamePlatformMinAggregateOutputType | null
    _max: GamePlatformMaxAggregateOutputType | null
  }

  export type GamePlatformAvgAggregateOutputType = {
    gameId: number | null
    platformId: number | null
  }

  export type GamePlatformSumAggregateOutputType = {
    gameId: number | null
    platformId: number | null
  }

  export type GamePlatformMinAggregateOutputType = {
    gameId: number | null
    platformId: number | null
  }

  export type GamePlatformMaxAggregateOutputType = {
    gameId: number | null
    platformId: number | null
  }

  export type GamePlatformCountAggregateOutputType = {
    gameId: number
    platformId: number
    _all: number
  }


  export type GamePlatformAvgAggregateInputType = {
    gameId?: true
    platformId?: true
  }

  export type GamePlatformSumAggregateInputType = {
    gameId?: true
    platformId?: true
  }

  export type GamePlatformMinAggregateInputType = {
    gameId?: true
    platformId?: true
  }

  export type GamePlatformMaxAggregateInputType = {
    gameId?: true
    platformId?: true
  }

  export type GamePlatformCountAggregateInputType = {
    gameId?: true
    platformId?: true
    _all?: true
  }

  export type GamePlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GamePlatform to aggregate.
     */
    where?: GamePlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GamePlatforms to fetch.
     */
    orderBy?: GamePlatformOrderByWithRelationInput | GamePlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GamePlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GamePlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GamePlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GamePlatforms
    **/
    _count?: true | GamePlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GamePlatformAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GamePlatformSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GamePlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GamePlatformMaxAggregateInputType
  }

  export type GetGamePlatformAggregateType<T extends GamePlatformAggregateArgs> = {
        [P in keyof T & keyof AggregateGamePlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGamePlatform[P]>
      : GetScalarType<T[P], AggregateGamePlatform[P]>
  }




  export type GamePlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GamePlatformWhereInput
    orderBy?: GamePlatformOrderByWithAggregationInput | GamePlatformOrderByWithAggregationInput[]
    by: GamePlatformScalarFieldEnum[] | GamePlatformScalarFieldEnum
    having?: GamePlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GamePlatformCountAggregateInputType | true
    _avg?: GamePlatformAvgAggregateInputType
    _sum?: GamePlatformSumAggregateInputType
    _min?: GamePlatformMinAggregateInputType
    _max?: GamePlatformMaxAggregateInputType
  }

  export type GamePlatformGroupByOutputType = {
    gameId: number
    platformId: number
    _count: GamePlatformCountAggregateOutputType | null
    _avg: GamePlatformAvgAggregateOutputType | null
    _sum: GamePlatformSumAggregateOutputType | null
    _min: GamePlatformMinAggregateOutputType | null
    _max: GamePlatformMaxAggregateOutputType | null
  }

  type GetGamePlatformGroupByPayload<T extends GamePlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GamePlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GamePlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GamePlatformGroupByOutputType[P]>
            : GetScalarType<T[P], GamePlatformGroupByOutputType[P]>
        }
      >
    >


  export type GamePlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gameId?: boolean
    platformId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gamePlatform"]>



  export type GamePlatformSelectScalar = {
    gameId?: boolean
    platformId?: boolean
  }

  export type GamePlatformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"gameId" | "platformId", ExtArgs["result"]["gamePlatform"]>
  export type GamePlatformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }

  export type $GamePlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GamePlatform"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      platform: Prisma.$PlatformPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      gameId: number
      platformId: number
    }, ExtArgs["result"]["gamePlatform"]>
    composites: {}
  }

  type GamePlatformGetPayload<S extends boolean | null | undefined | GamePlatformDefaultArgs> = $Result.GetResult<Prisma.$GamePlatformPayload, S>

  type GamePlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GamePlatformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GamePlatformCountAggregateInputType | true
    }

  export interface GamePlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GamePlatform'], meta: { name: 'GamePlatform' } }
    /**
     * Find zero or one GamePlatform that matches the filter.
     * @param {GamePlatformFindUniqueArgs} args - Arguments to find a GamePlatform
     * @example
     * // Get one GamePlatform
     * const gamePlatform = await prisma.gamePlatform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GamePlatformFindUniqueArgs>(args: SelectSubset<T, GamePlatformFindUniqueArgs<ExtArgs>>): Prisma__GamePlatformClient<$Result.GetResult<Prisma.$GamePlatformPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GamePlatform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GamePlatformFindUniqueOrThrowArgs} args - Arguments to find a GamePlatform
     * @example
     * // Get one GamePlatform
     * const gamePlatform = await prisma.gamePlatform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GamePlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, GamePlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GamePlatformClient<$Result.GetResult<Prisma.$GamePlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GamePlatform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlatformFindFirstArgs} args - Arguments to find a GamePlatform
     * @example
     * // Get one GamePlatform
     * const gamePlatform = await prisma.gamePlatform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GamePlatformFindFirstArgs>(args?: SelectSubset<T, GamePlatformFindFirstArgs<ExtArgs>>): Prisma__GamePlatformClient<$Result.GetResult<Prisma.$GamePlatformPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GamePlatform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlatformFindFirstOrThrowArgs} args - Arguments to find a GamePlatform
     * @example
     * // Get one GamePlatform
     * const gamePlatform = await prisma.gamePlatform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GamePlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, GamePlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__GamePlatformClient<$Result.GetResult<Prisma.$GamePlatformPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GamePlatforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GamePlatforms
     * const gamePlatforms = await prisma.gamePlatform.findMany()
     * 
     * // Get first 10 GamePlatforms
     * const gamePlatforms = await prisma.gamePlatform.findMany({ take: 10 })
     * 
     * // Only select the `gameId`
     * const gamePlatformWithGameIdOnly = await prisma.gamePlatform.findMany({ select: { gameId: true } })
     * 
     */
    findMany<T extends GamePlatformFindManyArgs>(args?: SelectSubset<T, GamePlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GamePlatform.
     * @param {GamePlatformCreateArgs} args - Arguments to create a GamePlatform.
     * @example
     * // Create one GamePlatform
     * const GamePlatform = await prisma.gamePlatform.create({
     *   data: {
     *     // ... data to create a GamePlatform
     *   }
     * })
     * 
     */
    create<T extends GamePlatformCreateArgs>(args: SelectSubset<T, GamePlatformCreateArgs<ExtArgs>>): Prisma__GamePlatformClient<$Result.GetResult<Prisma.$GamePlatformPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GamePlatforms.
     * @param {GamePlatformCreateManyArgs} args - Arguments to create many GamePlatforms.
     * @example
     * // Create many GamePlatforms
     * const gamePlatform = await prisma.gamePlatform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GamePlatformCreateManyArgs>(args?: SelectSubset<T, GamePlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GamePlatform.
     * @param {GamePlatformDeleteArgs} args - Arguments to delete one GamePlatform.
     * @example
     * // Delete one GamePlatform
     * const GamePlatform = await prisma.gamePlatform.delete({
     *   where: {
     *     // ... filter to delete one GamePlatform
     *   }
     * })
     * 
     */
    delete<T extends GamePlatformDeleteArgs>(args: SelectSubset<T, GamePlatformDeleteArgs<ExtArgs>>): Prisma__GamePlatformClient<$Result.GetResult<Prisma.$GamePlatformPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GamePlatform.
     * @param {GamePlatformUpdateArgs} args - Arguments to update one GamePlatform.
     * @example
     * // Update one GamePlatform
     * const gamePlatform = await prisma.gamePlatform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GamePlatformUpdateArgs>(args: SelectSubset<T, GamePlatformUpdateArgs<ExtArgs>>): Prisma__GamePlatformClient<$Result.GetResult<Prisma.$GamePlatformPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GamePlatforms.
     * @param {GamePlatformDeleteManyArgs} args - Arguments to filter GamePlatforms to delete.
     * @example
     * // Delete a few GamePlatforms
     * const { count } = await prisma.gamePlatform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GamePlatformDeleteManyArgs>(args?: SelectSubset<T, GamePlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GamePlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GamePlatforms
     * const gamePlatform = await prisma.gamePlatform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GamePlatformUpdateManyArgs>(args: SelectSubset<T, GamePlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GamePlatform.
     * @param {GamePlatformUpsertArgs} args - Arguments to update or create a GamePlatform.
     * @example
     * // Update or create a GamePlatform
     * const gamePlatform = await prisma.gamePlatform.upsert({
     *   create: {
     *     // ... data to create a GamePlatform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GamePlatform we want to update
     *   }
     * })
     */
    upsert<T extends GamePlatformUpsertArgs>(args: SelectSubset<T, GamePlatformUpsertArgs<ExtArgs>>): Prisma__GamePlatformClient<$Result.GetResult<Prisma.$GamePlatformPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GamePlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlatformCountArgs} args - Arguments to filter GamePlatforms to count.
     * @example
     * // Count the number of GamePlatforms
     * const count = await prisma.gamePlatform.count({
     *   where: {
     *     // ... the filter for the GamePlatforms we want to count
     *   }
     * })
    **/
    count<T extends GamePlatformCountArgs>(
      args?: Subset<T, GamePlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GamePlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GamePlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GamePlatformAggregateArgs>(args: Subset<T, GamePlatformAggregateArgs>): Prisma.PrismaPromise<GetGamePlatformAggregateType<T>>

    /**
     * Group by GamePlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlatformGroupByArgs} args - Group by arguments.
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
      T extends GamePlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GamePlatformGroupByArgs['orderBy'] }
        : { orderBy?: GamePlatformGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GamePlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGamePlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GamePlatform model
   */
  readonly fields: GamePlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GamePlatform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GamePlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    platform<T extends PlatformDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlatformDefaultArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GamePlatform model
   */
  interface GamePlatformFieldRefs {
    readonly gameId: FieldRef<"GamePlatform", 'Int'>
    readonly platformId: FieldRef<"GamePlatform", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GamePlatform findUnique
   */
  export type GamePlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlatform
     */
    select?: GamePlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlatform
     */
    omit?: GamePlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlatformInclude<ExtArgs> | null
    /**
     * Filter, which GamePlatform to fetch.
     */
    where: GamePlatformWhereUniqueInput
  }

  /**
   * GamePlatform findUniqueOrThrow
   */
  export type GamePlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlatform
     */
    select?: GamePlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlatform
     */
    omit?: GamePlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlatformInclude<ExtArgs> | null
    /**
     * Filter, which GamePlatform to fetch.
     */
    where: GamePlatformWhereUniqueInput
  }

  /**
   * GamePlatform findFirst
   */
  export type GamePlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlatform
     */
    select?: GamePlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlatform
     */
    omit?: GamePlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlatformInclude<ExtArgs> | null
    /**
     * Filter, which GamePlatform to fetch.
     */
    where?: GamePlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GamePlatforms to fetch.
     */
    orderBy?: GamePlatformOrderByWithRelationInput | GamePlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GamePlatforms.
     */
    cursor?: GamePlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GamePlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GamePlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GamePlatforms.
     */
    distinct?: GamePlatformScalarFieldEnum | GamePlatformScalarFieldEnum[]
  }

  /**
   * GamePlatform findFirstOrThrow
   */
  export type GamePlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlatform
     */
    select?: GamePlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlatform
     */
    omit?: GamePlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlatformInclude<ExtArgs> | null
    /**
     * Filter, which GamePlatform to fetch.
     */
    where?: GamePlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GamePlatforms to fetch.
     */
    orderBy?: GamePlatformOrderByWithRelationInput | GamePlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GamePlatforms.
     */
    cursor?: GamePlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GamePlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GamePlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GamePlatforms.
     */
    distinct?: GamePlatformScalarFieldEnum | GamePlatformScalarFieldEnum[]
  }

  /**
   * GamePlatform findMany
   */
  export type GamePlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlatform
     */
    select?: GamePlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlatform
     */
    omit?: GamePlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlatformInclude<ExtArgs> | null
    /**
     * Filter, which GamePlatforms to fetch.
     */
    where?: GamePlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GamePlatforms to fetch.
     */
    orderBy?: GamePlatformOrderByWithRelationInput | GamePlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GamePlatforms.
     */
    cursor?: GamePlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GamePlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GamePlatforms.
     */
    skip?: number
    distinct?: GamePlatformScalarFieldEnum | GamePlatformScalarFieldEnum[]
  }

  /**
   * GamePlatform create
   */
  export type GamePlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlatform
     */
    select?: GamePlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlatform
     */
    omit?: GamePlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlatformInclude<ExtArgs> | null
    /**
     * The data needed to create a GamePlatform.
     */
    data: XOR<GamePlatformCreateInput, GamePlatformUncheckedCreateInput>
  }

  /**
   * GamePlatform createMany
   */
  export type GamePlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GamePlatforms.
     */
    data: GamePlatformCreateManyInput | GamePlatformCreateManyInput[]
  }

  /**
   * GamePlatform update
   */
  export type GamePlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlatform
     */
    select?: GamePlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlatform
     */
    omit?: GamePlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlatformInclude<ExtArgs> | null
    /**
     * The data needed to update a GamePlatform.
     */
    data: XOR<GamePlatformUpdateInput, GamePlatformUncheckedUpdateInput>
    /**
     * Choose, which GamePlatform to update.
     */
    where: GamePlatformWhereUniqueInput
  }

  /**
   * GamePlatform updateMany
   */
  export type GamePlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GamePlatforms.
     */
    data: XOR<GamePlatformUpdateManyMutationInput, GamePlatformUncheckedUpdateManyInput>
    /**
     * Filter which GamePlatforms to update
     */
    where?: GamePlatformWhereInput
    /**
     * Limit how many GamePlatforms to update.
     */
    limit?: number
  }

  /**
   * GamePlatform upsert
   */
  export type GamePlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlatform
     */
    select?: GamePlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlatform
     */
    omit?: GamePlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlatformInclude<ExtArgs> | null
    /**
     * The filter to search for the GamePlatform to update in case it exists.
     */
    where: GamePlatformWhereUniqueInput
    /**
     * In case the GamePlatform found by the `where` argument doesn't exist, create a new GamePlatform with this data.
     */
    create: XOR<GamePlatformCreateInput, GamePlatformUncheckedCreateInput>
    /**
     * In case the GamePlatform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GamePlatformUpdateInput, GamePlatformUncheckedUpdateInput>
  }

  /**
   * GamePlatform delete
   */
  export type GamePlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlatform
     */
    select?: GamePlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlatform
     */
    omit?: GamePlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlatformInclude<ExtArgs> | null
    /**
     * Filter which GamePlatform to delete.
     */
    where: GamePlatformWhereUniqueInput
  }

  /**
   * GamePlatform deleteMany
   */
  export type GamePlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GamePlatforms to delete
     */
    where?: GamePlatformWhereInput
    /**
     * Limit how many GamePlatforms to delete.
     */
    limit?: number
  }

  /**
   * GamePlatform without action
   */
  export type GamePlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlatform
     */
    select?: GamePlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlatform
     */
    omit?: GamePlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlatformInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    releaseDate: 'releaseDate',
    price: 'price',
    developerId: 'developerId'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const DeveloperScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country: 'country'
  };

  export type DeveloperScalarFieldEnum = (typeof DeveloperScalarFieldEnum)[keyof typeof DeveloperScalarFieldEnum]


  export const PlatformScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PlatformScalarFieldEnum = (typeof PlatformScalarFieldEnum)[keyof typeof PlatformScalarFieldEnum]


  export const GenderScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenderScalarFieldEnum = (typeof GenderScalarFieldEnum)[keyof typeof GenderScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    userId: 'userId',
    gameId: 'gameId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    purchaseDate: 'purchaseDate',
    paidPrice: 'paidPrice',
    userId: 'userId',
    gameId: 'gameId'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const AchievementScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    points: 'points',
    gameId: 'gameId'
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum]


  export const UnlockedAchievementScalarFieldEnum: {
    id: 'id',
    unlockDate: 'unlockDate',
    userId: 'userId',
    achievementId: 'achievementId'
  };

  export type UnlockedAchievementScalarFieldEnum = (typeof UnlockedAchievementScalarFieldEnum)[keyof typeof UnlockedAchievementScalarFieldEnum]


  export const DlcScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    releaseDate: 'releaseDate',
    baseGameId: 'baseGameId'
  };

  export type DlcScalarFieldEnum = (typeof DlcScalarFieldEnum)[keyof typeof DlcScalarFieldEnum]


  export const GameGenderScalarFieldEnum: {
    gameId: 'gameId',
    genderId: 'genderId'
  };

  export type GameGenderScalarFieldEnum = (typeof GameGenderScalarFieldEnum)[keyof typeof GameGenderScalarFieldEnum]


  export const GameTagScalarFieldEnum: {
    gameId: 'gameId',
    tagId: 'tagId'
  };

  export type GameTagScalarFieldEnum = (typeof GameTagScalarFieldEnum)[keyof typeof GameTagScalarFieldEnum]


  export const GamePlatformScalarFieldEnum: {
    gameId: 'gameId',
    platformId: 'platformId'
  };

  export type GamePlatformScalarFieldEnum = (typeof GamePlatformScalarFieldEnum)[keyof typeof GamePlatformScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    reviews?: ReviewListRelationFilter
    purchases?: PurchaseListRelationFilter
    achievements?: UnlockedAchievementListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
    purchases?: PurchaseOrderByRelationAggregateInput
    achievements?: UnlockedAchievementOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    reviews?: ReviewListRelationFilter
    purchases?: PurchaseListRelationFilter
    achievements?: UnlockedAchievementListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: IntFilter<"Game"> | number
    name?: StringFilter<"Game"> | string
    description?: StringNullableFilter<"Game"> | string | null
    releaseDate?: DateTimeNullableFilter<"Game"> | Date | string | null
    price?: FloatFilter<"Game"> | number
    developerId?: IntFilter<"Game"> | number
    reviews?: ReviewListRelationFilter
    purchases?: PurchaseListRelationFilter
    achievements?: AchievementListRelationFilter
    dlcs?: DlcListRelationFilter
    genres?: GameGenderListRelationFilter
    platforms?: GamePlatformListRelationFilter
    tags?: GameTagListRelationFilter
    developer?: XOR<DeveloperScalarRelationFilter, DeveloperWhereInput>
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    price?: SortOrder
    developerId?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
    purchases?: PurchaseOrderByRelationAggregateInput
    achievements?: AchievementOrderByRelationAggregateInput
    dlcs?: DlcOrderByRelationAggregateInput
    genres?: GameGenderOrderByRelationAggregateInput
    platforms?: GamePlatformOrderByRelationAggregateInput
    tags?: GameTagOrderByRelationAggregateInput
    developer?: DeveloperOrderByWithRelationInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    name?: StringFilter<"Game"> | string
    description?: StringNullableFilter<"Game"> | string | null
    releaseDate?: DateTimeNullableFilter<"Game"> | Date | string | null
    price?: FloatFilter<"Game"> | number
    developerId?: IntFilter<"Game"> | number
    reviews?: ReviewListRelationFilter
    purchases?: PurchaseListRelationFilter
    achievements?: AchievementListRelationFilter
    dlcs?: DlcListRelationFilter
    genres?: GameGenderListRelationFilter
    platforms?: GamePlatformListRelationFilter
    tags?: GameTagListRelationFilter
    developer?: XOR<DeveloperScalarRelationFilter, DeveloperWhereInput>
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    price?: SortOrder
    developerId?: SortOrder
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
    id?: IntWithAggregatesFilter<"Game"> | number
    name?: StringWithAggregatesFilter<"Game"> | string
    description?: StringNullableWithAggregatesFilter<"Game"> | string | null
    releaseDate?: DateTimeNullableWithAggregatesFilter<"Game"> | Date | string | null
    price?: FloatWithAggregatesFilter<"Game"> | number
    developerId?: IntWithAggregatesFilter<"Game"> | number
  }

  export type DeveloperWhereInput = {
    AND?: DeveloperWhereInput | DeveloperWhereInput[]
    OR?: DeveloperWhereInput[]
    NOT?: DeveloperWhereInput | DeveloperWhereInput[]
    id?: IntFilter<"Developer"> | number
    name?: StringFilter<"Developer"> | string
    country?: StringNullableFilter<"Developer"> | string | null
    games?: GameListRelationFilter
  }

  export type DeveloperOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrderInput | SortOrder
    games?: GameOrderByRelationAggregateInput
  }

  export type DeveloperWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeveloperWhereInput | DeveloperWhereInput[]
    OR?: DeveloperWhereInput[]
    NOT?: DeveloperWhereInput | DeveloperWhereInput[]
    name?: StringFilter<"Developer"> | string
    country?: StringNullableFilter<"Developer"> | string | null
    games?: GameListRelationFilter
  }, "id">

  export type DeveloperOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrderInput | SortOrder
    _count?: DeveloperCountOrderByAggregateInput
    _avg?: DeveloperAvgOrderByAggregateInput
    _max?: DeveloperMaxOrderByAggregateInput
    _min?: DeveloperMinOrderByAggregateInput
    _sum?: DeveloperSumOrderByAggregateInput
  }

  export type DeveloperScalarWhereWithAggregatesInput = {
    AND?: DeveloperScalarWhereWithAggregatesInput | DeveloperScalarWhereWithAggregatesInput[]
    OR?: DeveloperScalarWhereWithAggregatesInput[]
    NOT?: DeveloperScalarWhereWithAggregatesInput | DeveloperScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Developer"> | number
    name?: StringWithAggregatesFilter<"Developer"> | string
    country?: StringNullableWithAggregatesFilter<"Developer"> | string | null
  }

  export type PlatformWhereInput = {
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    id?: IntFilter<"Platform"> | number
    name?: StringFilter<"Platform"> | string
    games?: GamePlatformListRelationFilter
  }

  export type PlatformOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    games?: GamePlatformOrderByRelationAggregateInput
  }

  export type PlatformWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    name?: StringFilter<"Platform"> | string
    games?: GamePlatformListRelationFilter
  }, "id">

  export type PlatformOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: PlatformCountOrderByAggregateInput
    _avg?: PlatformAvgOrderByAggregateInput
    _max?: PlatformMaxOrderByAggregateInput
    _min?: PlatformMinOrderByAggregateInput
    _sum?: PlatformSumOrderByAggregateInput
  }

  export type PlatformScalarWhereWithAggregatesInput = {
    AND?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    OR?: PlatformScalarWhereWithAggregatesInput[]
    NOT?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Platform"> | number
    name?: StringWithAggregatesFilter<"Platform"> | string
  }

  export type GenderWhereInput = {
    AND?: GenderWhereInput | GenderWhereInput[]
    OR?: GenderWhereInput[]
    NOT?: GenderWhereInput | GenderWhereInput[]
    id?: IntFilter<"Gender"> | number
    name?: StringFilter<"Gender"> | string
    games?: GameGenderListRelationFilter
  }

  export type GenderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    games?: GameGenderOrderByRelationAggregateInput
  }

  export type GenderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GenderWhereInput | GenderWhereInput[]
    OR?: GenderWhereInput[]
    NOT?: GenderWhereInput | GenderWhereInput[]
    name?: StringFilter<"Gender"> | string
    games?: GameGenderListRelationFilter
  }, "id">

  export type GenderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GenderCountOrderByAggregateInput
    _avg?: GenderAvgOrderByAggregateInput
    _max?: GenderMaxOrderByAggregateInput
    _min?: GenderMinOrderByAggregateInput
    _sum?: GenderSumOrderByAggregateInput
  }

  export type GenderScalarWhereWithAggregatesInput = {
    AND?: GenderScalarWhereWithAggregatesInput | GenderScalarWhereWithAggregatesInput[]
    OR?: GenderScalarWhereWithAggregatesInput[]
    NOT?: GenderScalarWhereWithAggregatesInput | GenderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gender"> | number
    name?: StringWithAggregatesFilter<"Gender"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    games?: GameTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    games?: GameTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    games?: GameTagListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    userId?: IntFilter<"Review"> | number
    gameId?: IntFilter<"Review"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    user?: UserOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    userId?: IntFilter<"Review"> | number
    gameId?: IntFilter<"Review"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    userId?: IntWithAggregatesFilter<"Review"> | number
    gameId?: IntWithAggregatesFilter<"Review"> | number
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: IntFilter<"Purchase"> | number
    purchaseDate?: DateTimeFilter<"Purchase"> | Date | string
    paidPrice?: FloatFilter<"Purchase"> | number
    userId?: IntFilter<"Purchase"> | number
    gameId?: IntFilter<"Purchase"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    purchaseDate?: SortOrder
    paidPrice?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    user?: UserOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    purchaseDate?: DateTimeFilter<"Purchase"> | Date | string
    paidPrice?: FloatFilter<"Purchase"> | number
    userId?: IntFilter<"Purchase"> | number
    gameId?: IntFilter<"Purchase"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseDate?: SortOrder
    paidPrice?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Purchase"> | number
    purchaseDate?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    paidPrice?: FloatWithAggregatesFilter<"Purchase"> | number
    userId?: IntWithAggregatesFilter<"Purchase"> | number
    gameId?: IntWithAggregatesFilter<"Purchase"> | number
  }

  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    id?: IntFilter<"Achievement"> | number
    name?: StringFilter<"Achievement"> | string
    description?: StringNullableFilter<"Achievement"> | string | null
    points?: IntFilter<"Achievement"> | number
    gameId?: IntFilter<"Achievement"> | number
    unlockedAchievements?: UnlockedAchievementListRelationFilter
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type AchievementOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    points?: SortOrder
    gameId?: SortOrder
    unlockedAchievements?: UnlockedAchievementOrderByRelationAggregateInput
    game?: GameOrderByWithRelationInput
  }

  export type AchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    name?: StringFilter<"Achievement"> | string
    description?: StringNullableFilter<"Achievement"> | string | null
    points?: IntFilter<"Achievement"> | number
    gameId?: IntFilter<"Achievement"> | number
    unlockedAchievements?: UnlockedAchievementListRelationFilter
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id">

  export type AchievementOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    points?: SortOrder
    gameId?: SortOrder
    _count?: AchievementCountOrderByAggregateInput
    _avg?: AchievementAvgOrderByAggregateInput
    _max?: AchievementMaxOrderByAggregateInput
    _min?: AchievementMinOrderByAggregateInput
    _sum?: AchievementSumOrderByAggregateInput
  }

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    OR?: AchievementScalarWhereWithAggregatesInput[]
    NOT?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Achievement"> | number
    name?: StringWithAggregatesFilter<"Achievement"> | string
    description?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    points?: IntWithAggregatesFilter<"Achievement"> | number
    gameId?: IntWithAggregatesFilter<"Achievement"> | number
  }

  export type UnlockedAchievementWhereInput = {
    AND?: UnlockedAchievementWhereInput | UnlockedAchievementWhereInput[]
    OR?: UnlockedAchievementWhereInput[]
    NOT?: UnlockedAchievementWhereInput | UnlockedAchievementWhereInput[]
    id?: IntFilter<"UnlockedAchievement"> | number
    unlockDate?: DateTimeFilter<"UnlockedAchievement"> | Date | string
    userId?: IntFilter<"UnlockedAchievement"> | number
    achievementId?: IntFilter<"UnlockedAchievement"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    achievement?: XOR<AchievementScalarRelationFilter, AchievementWhereInput>
  }

  export type UnlockedAchievementOrderByWithRelationInput = {
    id?: SortOrder
    unlockDate?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    user?: UserOrderByWithRelationInput
    achievement?: AchievementOrderByWithRelationInput
  }

  export type UnlockedAchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_achievementId?: UnlockedAchievementUserIdAchievementIdCompoundUniqueInput
    AND?: UnlockedAchievementWhereInput | UnlockedAchievementWhereInput[]
    OR?: UnlockedAchievementWhereInput[]
    NOT?: UnlockedAchievementWhereInput | UnlockedAchievementWhereInput[]
    unlockDate?: DateTimeFilter<"UnlockedAchievement"> | Date | string
    userId?: IntFilter<"UnlockedAchievement"> | number
    achievementId?: IntFilter<"UnlockedAchievement"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    achievement?: XOR<AchievementScalarRelationFilter, AchievementWhereInput>
  }, "id" | "userId_achievementId">

  export type UnlockedAchievementOrderByWithAggregationInput = {
    id?: SortOrder
    unlockDate?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    _count?: UnlockedAchievementCountOrderByAggregateInput
    _avg?: UnlockedAchievementAvgOrderByAggregateInput
    _max?: UnlockedAchievementMaxOrderByAggregateInput
    _min?: UnlockedAchievementMinOrderByAggregateInput
    _sum?: UnlockedAchievementSumOrderByAggregateInput
  }

  export type UnlockedAchievementScalarWhereWithAggregatesInput = {
    AND?: UnlockedAchievementScalarWhereWithAggregatesInput | UnlockedAchievementScalarWhereWithAggregatesInput[]
    OR?: UnlockedAchievementScalarWhereWithAggregatesInput[]
    NOT?: UnlockedAchievementScalarWhereWithAggregatesInput | UnlockedAchievementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UnlockedAchievement"> | number
    unlockDate?: DateTimeWithAggregatesFilter<"UnlockedAchievement"> | Date | string
    userId?: IntWithAggregatesFilter<"UnlockedAchievement"> | number
    achievementId?: IntWithAggregatesFilter<"UnlockedAchievement"> | number
  }

  export type DlcWhereInput = {
    AND?: DlcWhereInput | DlcWhereInput[]
    OR?: DlcWhereInput[]
    NOT?: DlcWhereInput | DlcWhereInput[]
    id?: IntFilter<"Dlc"> | number
    name?: StringFilter<"Dlc"> | string
    description?: StringNullableFilter<"Dlc"> | string | null
    price?: FloatFilter<"Dlc"> | number
    releaseDate?: DateTimeNullableFilter<"Dlc"> | Date | string | null
    baseGameId?: IntFilter<"Dlc"> | number
    baseGame?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type DlcOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    baseGameId?: SortOrder
    baseGame?: GameOrderByWithRelationInput
  }

  export type DlcWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DlcWhereInput | DlcWhereInput[]
    OR?: DlcWhereInput[]
    NOT?: DlcWhereInput | DlcWhereInput[]
    name?: StringFilter<"Dlc"> | string
    description?: StringNullableFilter<"Dlc"> | string | null
    price?: FloatFilter<"Dlc"> | number
    releaseDate?: DateTimeNullableFilter<"Dlc"> | Date | string | null
    baseGameId?: IntFilter<"Dlc"> | number
    baseGame?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id">

  export type DlcOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    baseGameId?: SortOrder
    _count?: DlcCountOrderByAggregateInput
    _avg?: DlcAvgOrderByAggregateInput
    _max?: DlcMaxOrderByAggregateInput
    _min?: DlcMinOrderByAggregateInput
    _sum?: DlcSumOrderByAggregateInput
  }

  export type DlcScalarWhereWithAggregatesInput = {
    AND?: DlcScalarWhereWithAggregatesInput | DlcScalarWhereWithAggregatesInput[]
    OR?: DlcScalarWhereWithAggregatesInput[]
    NOT?: DlcScalarWhereWithAggregatesInput | DlcScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dlc"> | number
    name?: StringWithAggregatesFilter<"Dlc"> | string
    description?: StringNullableWithAggregatesFilter<"Dlc"> | string | null
    price?: FloatWithAggregatesFilter<"Dlc"> | number
    releaseDate?: DateTimeNullableWithAggregatesFilter<"Dlc"> | Date | string | null
    baseGameId?: IntWithAggregatesFilter<"Dlc"> | number
  }

  export type GameGenderWhereInput = {
    AND?: GameGenderWhereInput | GameGenderWhereInput[]
    OR?: GameGenderWhereInput[]
    NOT?: GameGenderWhereInput | GameGenderWhereInput[]
    gameId?: IntFilter<"GameGender"> | number
    genderId?: IntFilter<"GameGender"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    genre?: XOR<GenderScalarRelationFilter, GenderWhereInput>
  }

  export type GameGenderOrderByWithRelationInput = {
    gameId?: SortOrder
    genderId?: SortOrder
    game?: GameOrderByWithRelationInput
    genre?: GenderOrderByWithRelationInput
  }

  export type GameGenderWhereUniqueInput = Prisma.AtLeast<{
    gameId_genderId?: GameGenderGameIdGenderIdCompoundUniqueInput
    AND?: GameGenderWhereInput | GameGenderWhereInput[]
    OR?: GameGenderWhereInput[]
    NOT?: GameGenderWhereInput | GameGenderWhereInput[]
    gameId?: IntFilter<"GameGender"> | number
    genderId?: IntFilter<"GameGender"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    genre?: XOR<GenderScalarRelationFilter, GenderWhereInput>
  }, "gameId_genderId">

  export type GameGenderOrderByWithAggregationInput = {
    gameId?: SortOrder
    genderId?: SortOrder
    _count?: GameGenderCountOrderByAggregateInput
    _avg?: GameGenderAvgOrderByAggregateInput
    _max?: GameGenderMaxOrderByAggregateInput
    _min?: GameGenderMinOrderByAggregateInput
    _sum?: GameGenderSumOrderByAggregateInput
  }

  export type GameGenderScalarWhereWithAggregatesInput = {
    AND?: GameGenderScalarWhereWithAggregatesInput | GameGenderScalarWhereWithAggregatesInput[]
    OR?: GameGenderScalarWhereWithAggregatesInput[]
    NOT?: GameGenderScalarWhereWithAggregatesInput | GameGenderScalarWhereWithAggregatesInput[]
    gameId?: IntWithAggregatesFilter<"GameGender"> | number
    genderId?: IntWithAggregatesFilter<"GameGender"> | number
  }

  export type GameTagWhereInput = {
    AND?: GameTagWhereInput | GameTagWhereInput[]
    OR?: GameTagWhereInput[]
    NOT?: GameTagWhereInput | GameTagWhereInput[]
    gameId?: IntFilter<"GameTag"> | number
    tagId?: IntFilter<"GameTag"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type GameTagOrderByWithRelationInput = {
    gameId?: SortOrder
    tagId?: SortOrder
    game?: GameOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type GameTagWhereUniqueInput = Prisma.AtLeast<{
    gameId_tagId?: GameTagGameIdTagIdCompoundUniqueInput
    AND?: GameTagWhereInput | GameTagWhereInput[]
    OR?: GameTagWhereInput[]
    NOT?: GameTagWhereInput | GameTagWhereInput[]
    gameId?: IntFilter<"GameTag"> | number
    tagId?: IntFilter<"GameTag"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "gameId_tagId">

  export type GameTagOrderByWithAggregationInput = {
    gameId?: SortOrder
    tagId?: SortOrder
    _count?: GameTagCountOrderByAggregateInput
    _avg?: GameTagAvgOrderByAggregateInput
    _max?: GameTagMaxOrderByAggregateInput
    _min?: GameTagMinOrderByAggregateInput
    _sum?: GameTagSumOrderByAggregateInput
  }

  export type GameTagScalarWhereWithAggregatesInput = {
    AND?: GameTagScalarWhereWithAggregatesInput | GameTagScalarWhereWithAggregatesInput[]
    OR?: GameTagScalarWhereWithAggregatesInput[]
    NOT?: GameTagScalarWhereWithAggregatesInput | GameTagScalarWhereWithAggregatesInput[]
    gameId?: IntWithAggregatesFilter<"GameTag"> | number
    tagId?: IntWithAggregatesFilter<"GameTag"> | number
  }

  export type GamePlatformWhereInput = {
    AND?: GamePlatformWhereInput | GamePlatformWhereInput[]
    OR?: GamePlatformWhereInput[]
    NOT?: GamePlatformWhereInput | GamePlatformWhereInput[]
    gameId?: IntFilter<"GamePlatform"> | number
    platformId?: IntFilter<"GamePlatform"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    platform?: XOR<PlatformScalarRelationFilter, PlatformWhereInput>
  }

  export type GamePlatformOrderByWithRelationInput = {
    gameId?: SortOrder
    platformId?: SortOrder
    game?: GameOrderByWithRelationInput
    platform?: PlatformOrderByWithRelationInput
  }

  export type GamePlatformWhereUniqueInput = Prisma.AtLeast<{
    gameId_platformId?: GamePlatformGameIdPlatformIdCompoundUniqueInput
    AND?: GamePlatformWhereInput | GamePlatformWhereInput[]
    OR?: GamePlatformWhereInput[]
    NOT?: GamePlatformWhereInput | GamePlatformWhereInput[]
    gameId?: IntFilter<"GamePlatform"> | number
    platformId?: IntFilter<"GamePlatform"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    platform?: XOR<PlatformScalarRelationFilter, PlatformWhereInput>
  }, "gameId_platformId">

  export type GamePlatformOrderByWithAggregationInput = {
    gameId?: SortOrder
    platformId?: SortOrder
    _count?: GamePlatformCountOrderByAggregateInput
    _avg?: GamePlatformAvgOrderByAggregateInput
    _max?: GamePlatformMaxOrderByAggregateInput
    _min?: GamePlatformMinOrderByAggregateInput
    _sum?: GamePlatformSumOrderByAggregateInput
  }

  export type GamePlatformScalarWhereWithAggregatesInput = {
    AND?: GamePlatformScalarWhereWithAggregatesInput | GamePlatformScalarWhereWithAggregatesInput[]
    OR?: GamePlatformScalarWhereWithAggregatesInput[]
    NOT?: GamePlatformScalarWhereWithAggregatesInput | GamePlatformScalarWhereWithAggregatesInput[]
    gameId?: IntWithAggregatesFilter<"GamePlatform"> | number
    platformId?: IntWithAggregatesFilter<"GamePlatform"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    achievements?: UnlockedAchievementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    achievements?: UnlockedAchievementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    achievements?: UnlockedAchievementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UnlockedAchievementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type GameCreateInput = {
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    reviews?: ReviewCreateNestedManyWithoutGameInput
    purchases?: PurchaseCreateNestedManyWithoutGameInput
    achievements?: AchievementCreateNestedManyWithoutGameInput
    dlcs?: DlcCreateNestedManyWithoutBaseGameInput
    genres?: GameGenderCreateNestedManyWithoutGameInput
    platforms?: GamePlatformCreateNestedManyWithoutGameInput
    tags?: GameTagCreateNestedManyWithoutGameInput
    developer: DeveloperCreateNestedOneWithoutGamesInput
  }

  export type GameUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    developerId: number
    reviews?: ReviewUncheckedCreateNestedManyWithoutGameInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutGameInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutGameInput
    dlcs?: DlcUncheckedCreateNestedManyWithoutBaseGameInput
    genres?: GameGenderUncheckedCreateNestedManyWithoutGameInput
    platforms?: GamePlatformUncheckedCreateNestedManyWithoutGameInput
    tags?: GameTagUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    reviews?: ReviewUpdateManyWithoutGameNestedInput
    purchases?: PurchaseUpdateManyWithoutGameNestedInput
    achievements?: AchievementUpdateManyWithoutGameNestedInput
    dlcs?: DlcUpdateManyWithoutBaseGameNestedInput
    genres?: GameGenderUpdateManyWithoutGameNestedInput
    platforms?: GamePlatformUpdateManyWithoutGameNestedInput
    tags?: GameTagUpdateManyWithoutGameNestedInput
    developer?: DeveloperUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    developerId?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewUncheckedUpdateManyWithoutGameNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutGameNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutGameNestedInput
    dlcs?: DlcUncheckedUpdateManyWithoutBaseGameNestedInput
    genres?: GameGenderUncheckedUpdateManyWithoutGameNestedInput
    platforms?: GamePlatformUncheckedUpdateManyWithoutGameNestedInput
    tags?: GameTagUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    developerId: number
  }

  export type GameUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type GameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    developerId?: IntFieldUpdateOperationsInput | number
  }

  export type DeveloperCreateInput = {
    name: string
    country?: string | null
    games?: GameCreateNestedManyWithoutDeveloperInput
  }

  export type DeveloperUncheckedCreateInput = {
    id?: number
    name: string
    country?: string | null
    games?: GameUncheckedCreateNestedManyWithoutDeveloperInput
  }

  export type DeveloperUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUpdateManyWithoutDeveloperNestedInput
  }

  export type DeveloperUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUncheckedUpdateManyWithoutDeveloperNestedInput
  }

  export type DeveloperCreateManyInput = {
    name: string
    country?: string | null
  }

  export type DeveloperUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeveloperUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlatformCreateInput = {
    name: string
    games?: GamePlatformCreateNestedManyWithoutPlatformInput
  }

  export type PlatformUncheckedCreateInput = {
    id?: number
    name: string
    games?: GamePlatformUncheckedCreateNestedManyWithoutPlatformInput
  }

  export type PlatformUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    games?: GamePlatformUpdateManyWithoutPlatformNestedInput
  }

  export type PlatformUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    games?: GamePlatformUncheckedUpdateManyWithoutPlatformNestedInput
  }

  export type PlatformCreateManyInput = {
    name: string
  }

  export type PlatformUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PlatformUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenderCreateInput = {
    name: string
    games?: GameGenderCreateNestedManyWithoutGenreInput
  }

  export type GenderUncheckedCreateInput = {
    id?: number
    name: string
    games?: GameGenderUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    games?: GameGenderUpdateManyWithoutGenreNestedInput
  }

  export type GenderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    games?: GameGenderUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenderCreateManyInput = {
    name: string
  }

  export type GenderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    name: string
    games?: GameTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name: string
    games?: GameTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    games?: GameTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    games?: GameTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    name: string
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    rating: number
    comment?: string | null
    user: UserCreateNestedOneWithoutReviewsInput
    game: GameCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    rating: number
    comment?: string | null
    userId: number
    gameId: number
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    game?: GameUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyInput = {
    rating: number
    comment?: string | null
    userId: number
    gameId: number
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseCreateInput = {
    purchaseDate?: Date | string
    paidPrice: number
    user: UserCreateNestedOneWithoutPurchasesInput
    game: GameCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: number
    purchaseDate?: Date | string
    paidPrice: number
    userId: number
    gameId: number
  }

  export type PurchaseUpdateInput = {
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidPrice?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
    game?: GameUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidPrice?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseCreateManyInput = {
    purchaseDate?: Date | string
    paidPrice: number
    userId: number
    gameId: number
  }

  export type PurchaseUpdateManyMutationInput = {
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidPrice?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type AchievementCreateInput = {
    name: string
    description?: string | null
    points: number
    unlockedAchievements?: UnlockedAchievementCreateNestedManyWithoutAchievementInput
    game: GameCreateNestedOneWithoutAchievementsInput
  }

  export type AchievementUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    points: number
    gameId: number
    unlockedAchievements?: UnlockedAchievementUncheckedCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    unlockedAchievements?: UnlockedAchievementUpdateManyWithoutAchievementNestedInput
    game?: GameUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type AchievementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    unlockedAchievements?: UnlockedAchievementUncheckedUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementCreateManyInput = {
    name: string
    description?: string | null
    points: number
    gameId: number
  }

  export type AchievementUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
  }

  export type AchievementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type UnlockedAchievementCreateInput = {
    unlockDate?: Date | string
    user: UserCreateNestedOneWithoutAchievementsInput
    achievement: AchievementCreateNestedOneWithoutUnlockedAchievementsInput
  }

  export type UnlockedAchievementUncheckedCreateInput = {
    id?: number
    unlockDate?: Date | string
    userId: number
    achievementId: number
  }

  export type UnlockedAchievementUpdateInput = {
    unlockDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAchievementsNestedInput
    achievement?: AchievementUpdateOneRequiredWithoutUnlockedAchievementsNestedInput
  }

  export type UnlockedAchievementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    unlockDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    achievementId?: IntFieldUpdateOperationsInput | number
  }

  export type UnlockedAchievementCreateManyInput = {
    unlockDate?: Date | string
    userId: number
    achievementId: number
  }

  export type UnlockedAchievementUpdateManyMutationInput = {
    unlockDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnlockedAchievementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    unlockDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    achievementId?: IntFieldUpdateOperationsInput | number
  }

  export type DlcCreateInput = {
    name: string
    description?: string | null
    price: number
    releaseDate?: Date | string | null
    baseGame: GameCreateNestedOneWithoutDlcsInput
  }

  export type DlcUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    releaseDate?: Date | string | null
    baseGameId: number
  }

  export type DlcUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baseGame?: GameUpdateOneRequiredWithoutDlcsNestedInput
  }

  export type DlcUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baseGameId?: IntFieldUpdateOperationsInput | number
  }

  export type DlcCreateManyInput = {
    name: string
    description?: string | null
    price: number
    releaseDate?: Date | string | null
    baseGameId: number
  }

  export type DlcUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DlcUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baseGameId?: IntFieldUpdateOperationsInput | number
  }

  export type GameGenderCreateInput = {
    game: GameCreateNestedOneWithoutGenresInput
    genre: GenderCreateNestedOneWithoutGamesInput
  }

  export type GameGenderUncheckedCreateInput = {
    gameId: number
    genderId: number
  }

  export type GameGenderUpdateInput = {
    game?: GameUpdateOneRequiredWithoutGenresNestedInput
    genre?: GenderUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameGenderUncheckedUpdateInput = {
    gameId?: IntFieldUpdateOperationsInput | number
    genderId?: IntFieldUpdateOperationsInput | number
  }

  export type GameGenderCreateManyInput = {
    gameId: number
    genderId: number
  }

  export type GameGenderUpdateManyMutationInput = {

  }

  export type GameGenderUncheckedUpdateManyInput = {
    gameId?: IntFieldUpdateOperationsInput | number
    genderId?: IntFieldUpdateOperationsInput | number
  }

  export type GameTagCreateInput = {
    game: GameCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutGamesInput
  }

  export type GameTagUncheckedCreateInput = {
    gameId: number
    tagId: number
  }

  export type GameTagUpdateInput = {
    game?: GameUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameTagUncheckedUpdateInput = {
    gameId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type GameTagCreateManyInput = {
    gameId: number
    tagId: number
  }

  export type GameTagUpdateManyMutationInput = {

  }

  export type GameTagUncheckedUpdateManyInput = {
    gameId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type GamePlatformCreateInput = {
    game: GameCreateNestedOneWithoutPlatformsInput
    platform: PlatformCreateNestedOneWithoutGamesInput
  }

  export type GamePlatformUncheckedCreateInput = {
    gameId: number
    platformId: number
  }

  export type GamePlatformUpdateInput = {
    game?: GameUpdateOneRequiredWithoutPlatformsNestedInput
    platform?: PlatformUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GamePlatformUncheckedUpdateInput = {
    gameId?: IntFieldUpdateOperationsInput | number
    platformId?: IntFieldUpdateOperationsInput | number
  }

  export type GamePlatformCreateManyInput = {
    gameId: number
    platformId: number
  }

  export type GamePlatformUpdateManyMutationInput = {

  }

  export type GamePlatformUncheckedUpdateManyInput = {
    gameId?: IntFieldUpdateOperationsInput | number
    platformId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type UnlockedAchievementListRelationFilter = {
    every?: UnlockedAchievementWhereInput
    some?: UnlockedAchievementWhereInput
    none?: UnlockedAchievementWhereInput
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnlockedAchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AchievementListRelationFilter = {
    every?: AchievementWhereInput
    some?: AchievementWhereInput
    none?: AchievementWhereInput
  }

  export type DlcListRelationFilter = {
    every?: DlcWhereInput
    some?: DlcWhereInput
    none?: DlcWhereInput
  }

  export type GameGenderListRelationFilter = {
    every?: GameGenderWhereInput
    some?: GameGenderWhereInput
    none?: GameGenderWhereInput
  }

  export type GamePlatformListRelationFilter = {
    every?: GamePlatformWhereInput
    some?: GamePlatformWhereInput
    none?: GamePlatformWhereInput
  }

  export type GameTagListRelationFilter = {
    every?: GameTagWhereInput
    some?: GameTagWhereInput
    none?: GameTagWhereInput
  }

  export type DeveloperScalarRelationFilter = {
    is?: DeveloperWhereInput
    isNot?: DeveloperWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DlcOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameGenderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GamePlatformOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    releaseDate?: SortOrder
    price?: SortOrder
    developerId?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    developerId?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    releaseDate?: SortOrder
    price?: SortOrder
    developerId?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    releaseDate?: SortOrder
    price?: SortOrder
    developerId?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    developerId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeveloperCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
  }

  export type DeveloperAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DeveloperMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
  }

  export type DeveloperMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
  }

  export type DeveloperSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlatformCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PlatformAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlatformMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PlatformMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PlatformSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenderSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseDate?: SortOrder
    paidPrice?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    id?: SortOrder
    paidPrice?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseDate?: SortOrder
    paidPrice?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseDate?: SortOrder
    paidPrice?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    id?: SortOrder
    paidPrice?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AchievementCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    points?: SortOrder
    gameId?: SortOrder
  }

  export type AchievementAvgOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    gameId?: SortOrder
  }

  export type AchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    points?: SortOrder
    gameId?: SortOrder
  }

  export type AchievementMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    points?: SortOrder
    gameId?: SortOrder
  }

  export type AchievementSumOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    gameId?: SortOrder
  }

  export type AchievementScalarRelationFilter = {
    is?: AchievementWhereInput
    isNot?: AchievementWhereInput
  }

  export type UnlockedAchievementUserIdAchievementIdCompoundUniqueInput = {
    userId: number
    achievementId: number
  }

  export type UnlockedAchievementCountOrderByAggregateInput = {
    id?: SortOrder
    unlockDate?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
  }

  export type UnlockedAchievementAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
  }

  export type UnlockedAchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    unlockDate?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
  }

  export type UnlockedAchievementMinOrderByAggregateInput = {
    id?: SortOrder
    unlockDate?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
  }

  export type UnlockedAchievementSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
  }

  export type DlcCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    releaseDate?: SortOrder
    baseGameId?: SortOrder
  }

  export type DlcAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    baseGameId?: SortOrder
  }

  export type DlcMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    releaseDate?: SortOrder
    baseGameId?: SortOrder
  }

  export type DlcMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    releaseDate?: SortOrder
    baseGameId?: SortOrder
  }

  export type DlcSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    baseGameId?: SortOrder
  }

  export type GenderScalarRelationFilter = {
    is?: GenderWhereInput
    isNot?: GenderWhereInput
  }

  export type GameGenderGameIdGenderIdCompoundUniqueInput = {
    gameId: number
    genderId: number
  }

  export type GameGenderCountOrderByAggregateInput = {
    gameId?: SortOrder
    genderId?: SortOrder
  }

  export type GameGenderAvgOrderByAggregateInput = {
    gameId?: SortOrder
    genderId?: SortOrder
  }

  export type GameGenderMaxOrderByAggregateInput = {
    gameId?: SortOrder
    genderId?: SortOrder
  }

  export type GameGenderMinOrderByAggregateInput = {
    gameId?: SortOrder
    genderId?: SortOrder
  }

  export type GameGenderSumOrderByAggregateInput = {
    gameId?: SortOrder
    genderId?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type GameTagGameIdTagIdCompoundUniqueInput = {
    gameId: number
    tagId: number
  }

  export type GameTagCountOrderByAggregateInput = {
    gameId?: SortOrder
    tagId?: SortOrder
  }

  export type GameTagAvgOrderByAggregateInput = {
    gameId?: SortOrder
    tagId?: SortOrder
  }

  export type GameTagMaxOrderByAggregateInput = {
    gameId?: SortOrder
    tagId?: SortOrder
  }

  export type GameTagMinOrderByAggregateInput = {
    gameId?: SortOrder
    tagId?: SortOrder
  }

  export type GameTagSumOrderByAggregateInput = {
    gameId?: SortOrder
    tagId?: SortOrder
  }

  export type PlatformScalarRelationFilter = {
    is?: PlatformWhereInput
    isNot?: PlatformWhereInput
  }

  export type GamePlatformGameIdPlatformIdCompoundUniqueInput = {
    gameId: number
    platformId: number
  }

  export type GamePlatformCountOrderByAggregateInput = {
    gameId?: SortOrder
    platformId?: SortOrder
  }

  export type GamePlatformAvgOrderByAggregateInput = {
    gameId?: SortOrder
    platformId?: SortOrder
  }

  export type GamePlatformMaxOrderByAggregateInput = {
    gameId?: SortOrder
    platformId?: SortOrder
  }

  export type GamePlatformMinOrderByAggregateInput = {
    gameId?: SortOrder
    platformId?: SortOrder
  }

  export type GamePlatformSumOrderByAggregateInput = {
    gameId?: SortOrder
    platformId?: SortOrder
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type UnlockedAchievementCreateNestedManyWithoutUserInput = {
    create?: XOR<UnlockedAchievementCreateWithoutUserInput, UnlockedAchievementUncheckedCreateWithoutUserInput> | UnlockedAchievementCreateWithoutUserInput[] | UnlockedAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnlockedAchievementCreateOrConnectWithoutUserInput | UnlockedAchievementCreateOrConnectWithoutUserInput[]
    createMany?: UnlockedAchievementCreateManyUserInputEnvelope
    connect?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type UnlockedAchievementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UnlockedAchievementCreateWithoutUserInput, UnlockedAchievementUncheckedCreateWithoutUserInput> | UnlockedAchievementCreateWithoutUserInput[] | UnlockedAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnlockedAchievementCreateOrConnectWithoutUserInput | UnlockedAchievementCreateOrConnectWithoutUserInput[]
    createMany?: UnlockedAchievementCreateManyUserInputEnvelope
    connect?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type UnlockedAchievementUpdateManyWithoutUserNestedInput = {
    create?: XOR<UnlockedAchievementCreateWithoutUserInput, UnlockedAchievementUncheckedCreateWithoutUserInput> | UnlockedAchievementCreateWithoutUserInput[] | UnlockedAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnlockedAchievementCreateOrConnectWithoutUserInput | UnlockedAchievementCreateOrConnectWithoutUserInput[]
    upsert?: UnlockedAchievementUpsertWithWhereUniqueWithoutUserInput | UnlockedAchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UnlockedAchievementCreateManyUserInputEnvelope
    set?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
    disconnect?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
    delete?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
    connect?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
    update?: UnlockedAchievementUpdateWithWhereUniqueWithoutUserInput | UnlockedAchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UnlockedAchievementUpdateManyWithWhereWithoutUserInput | UnlockedAchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UnlockedAchievementScalarWhereInput | UnlockedAchievementScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type UnlockedAchievementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UnlockedAchievementCreateWithoutUserInput, UnlockedAchievementUncheckedCreateWithoutUserInput> | UnlockedAchievementCreateWithoutUserInput[] | UnlockedAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnlockedAchievementCreateOrConnectWithoutUserInput | UnlockedAchievementCreateOrConnectWithoutUserInput[]
    upsert?: UnlockedAchievementUpsertWithWhereUniqueWithoutUserInput | UnlockedAchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UnlockedAchievementCreateManyUserInputEnvelope
    set?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
    disconnect?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
    delete?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
    connect?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
    update?: UnlockedAchievementUpdateWithWhereUniqueWithoutUserInput | UnlockedAchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UnlockedAchievementUpdateManyWithWhereWithoutUserInput | UnlockedAchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UnlockedAchievementScalarWhereInput | UnlockedAchievementScalarWhereInput[]
  }

  export type ReviewCreateNestedManyWithoutGameInput = {
    create?: XOR<ReviewCreateWithoutGameInput, ReviewUncheckedCreateWithoutGameInput> | ReviewCreateWithoutGameInput[] | ReviewUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGameInput | ReviewCreateOrConnectWithoutGameInput[]
    createMany?: ReviewCreateManyGameInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutGameInput = {
    create?: XOR<PurchaseCreateWithoutGameInput, PurchaseUncheckedCreateWithoutGameInput> | PurchaseCreateWithoutGameInput[] | PurchaseUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutGameInput | PurchaseCreateOrConnectWithoutGameInput[]
    createMany?: PurchaseCreateManyGameInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type AchievementCreateNestedManyWithoutGameInput = {
    create?: XOR<AchievementCreateWithoutGameInput, AchievementUncheckedCreateWithoutGameInput> | AchievementCreateWithoutGameInput[] | AchievementUncheckedCreateWithoutGameInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutGameInput | AchievementCreateOrConnectWithoutGameInput[]
    createMany?: AchievementCreateManyGameInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type DlcCreateNestedManyWithoutBaseGameInput = {
    create?: XOR<DlcCreateWithoutBaseGameInput, DlcUncheckedCreateWithoutBaseGameInput> | DlcCreateWithoutBaseGameInput[] | DlcUncheckedCreateWithoutBaseGameInput[]
    connectOrCreate?: DlcCreateOrConnectWithoutBaseGameInput | DlcCreateOrConnectWithoutBaseGameInput[]
    createMany?: DlcCreateManyBaseGameInputEnvelope
    connect?: DlcWhereUniqueInput | DlcWhereUniqueInput[]
  }

  export type GameGenderCreateNestedManyWithoutGameInput = {
    create?: XOR<GameGenderCreateWithoutGameInput, GameGenderUncheckedCreateWithoutGameInput> | GameGenderCreateWithoutGameInput[] | GameGenderUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameGenderCreateOrConnectWithoutGameInput | GameGenderCreateOrConnectWithoutGameInput[]
    createMany?: GameGenderCreateManyGameInputEnvelope
    connect?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
  }

  export type GamePlatformCreateNestedManyWithoutGameInput = {
    create?: XOR<GamePlatformCreateWithoutGameInput, GamePlatformUncheckedCreateWithoutGameInput> | GamePlatformCreateWithoutGameInput[] | GamePlatformUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GamePlatformCreateOrConnectWithoutGameInput | GamePlatformCreateOrConnectWithoutGameInput[]
    createMany?: GamePlatformCreateManyGameInputEnvelope
    connect?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
  }

  export type GameTagCreateNestedManyWithoutGameInput = {
    create?: XOR<GameTagCreateWithoutGameInput, GameTagUncheckedCreateWithoutGameInput> | GameTagCreateWithoutGameInput[] | GameTagUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameTagCreateOrConnectWithoutGameInput | GameTagCreateOrConnectWithoutGameInput[]
    createMany?: GameTagCreateManyGameInputEnvelope
    connect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
  }

  export type DeveloperCreateNestedOneWithoutGamesInput = {
    create?: XOR<DeveloperCreateWithoutGamesInput, DeveloperUncheckedCreateWithoutGamesInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutGamesInput
    connect?: DeveloperWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<ReviewCreateWithoutGameInput, ReviewUncheckedCreateWithoutGameInput> | ReviewCreateWithoutGameInput[] | ReviewUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGameInput | ReviewCreateOrConnectWithoutGameInput[]
    createMany?: ReviewCreateManyGameInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<PurchaseCreateWithoutGameInput, PurchaseUncheckedCreateWithoutGameInput> | PurchaseCreateWithoutGameInput[] | PurchaseUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutGameInput | PurchaseCreateOrConnectWithoutGameInput[]
    createMany?: PurchaseCreateManyGameInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type AchievementUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<AchievementCreateWithoutGameInput, AchievementUncheckedCreateWithoutGameInput> | AchievementCreateWithoutGameInput[] | AchievementUncheckedCreateWithoutGameInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutGameInput | AchievementCreateOrConnectWithoutGameInput[]
    createMany?: AchievementCreateManyGameInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type DlcUncheckedCreateNestedManyWithoutBaseGameInput = {
    create?: XOR<DlcCreateWithoutBaseGameInput, DlcUncheckedCreateWithoutBaseGameInput> | DlcCreateWithoutBaseGameInput[] | DlcUncheckedCreateWithoutBaseGameInput[]
    connectOrCreate?: DlcCreateOrConnectWithoutBaseGameInput | DlcCreateOrConnectWithoutBaseGameInput[]
    createMany?: DlcCreateManyBaseGameInputEnvelope
    connect?: DlcWhereUniqueInput | DlcWhereUniqueInput[]
  }

  export type GameGenderUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameGenderCreateWithoutGameInput, GameGenderUncheckedCreateWithoutGameInput> | GameGenderCreateWithoutGameInput[] | GameGenderUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameGenderCreateOrConnectWithoutGameInput | GameGenderCreateOrConnectWithoutGameInput[]
    createMany?: GameGenderCreateManyGameInputEnvelope
    connect?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
  }

  export type GamePlatformUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GamePlatformCreateWithoutGameInput, GamePlatformUncheckedCreateWithoutGameInput> | GamePlatformCreateWithoutGameInput[] | GamePlatformUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GamePlatformCreateOrConnectWithoutGameInput | GamePlatformCreateOrConnectWithoutGameInput[]
    createMany?: GamePlatformCreateManyGameInputEnvelope
    connect?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
  }

  export type GameTagUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameTagCreateWithoutGameInput, GameTagUncheckedCreateWithoutGameInput> | GameTagCreateWithoutGameInput[] | GameTagUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameTagCreateOrConnectWithoutGameInput | GameTagCreateOrConnectWithoutGameInput[]
    createMany?: GameTagCreateManyGameInputEnvelope
    connect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewUpdateManyWithoutGameNestedInput = {
    create?: XOR<ReviewCreateWithoutGameInput, ReviewUncheckedCreateWithoutGameInput> | ReviewCreateWithoutGameInput[] | ReviewUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGameInput | ReviewCreateOrConnectWithoutGameInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutGameInput | ReviewUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: ReviewCreateManyGameInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutGameInput | ReviewUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutGameInput | ReviewUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutGameNestedInput = {
    create?: XOR<PurchaseCreateWithoutGameInput, PurchaseUncheckedCreateWithoutGameInput> | PurchaseCreateWithoutGameInput[] | PurchaseUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutGameInput | PurchaseCreateOrConnectWithoutGameInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutGameInput | PurchaseUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PurchaseCreateManyGameInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutGameInput | PurchaseUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutGameInput | PurchaseUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type AchievementUpdateManyWithoutGameNestedInput = {
    create?: XOR<AchievementCreateWithoutGameInput, AchievementUncheckedCreateWithoutGameInput> | AchievementCreateWithoutGameInput[] | AchievementUncheckedCreateWithoutGameInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutGameInput | AchievementCreateOrConnectWithoutGameInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutGameInput | AchievementUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: AchievementCreateManyGameInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutGameInput | AchievementUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutGameInput | AchievementUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type DlcUpdateManyWithoutBaseGameNestedInput = {
    create?: XOR<DlcCreateWithoutBaseGameInput, DlcUncheckedCreateWithoutBaseGameInput> | DlcCreateWithoutBaseGameInput[] | DlcUncheckedCreateWithoutBaseGameInput[]
    connectOrCreate?: DlcCreateOrConnectWithoutBaseGameInput | DlcCreateOrConnectWithoutBaseGameInput[]
    upsert?: DlcUpsertWithWhereUniqueWithoutBaseGameInput | DlcUpsertWithWhereUniqueWithoutBaseGameInput[]
    createMany?: DlcCreateManyBaseGameInputEnvelope
    set?: DlcWhereUniqueInput | DlcWhereUniqueInput[]
    disconnect?: DlcWhereUniqueInput | DlcWhereUniqueInput[]
    delete?: DlcWhereUniqueInput | DlcWhereUniqueInput[]
    connect?: DlcWhereUniqueInput | DlcWhereUniqueInput[]
    update?: DlcUpdateWithWhereUniqueWithoutBaseGameInput | DlcUpdateWithWhereUniqueWithoutBaseGameInput[]
    updateMany?: DlcUpdateManyWithWhereWithoutBaseGameInput | DlcUpdateManyWithWhereWithoutBaseGameInput[]
    deleteMany?: DlcScalarWhereInput | DlcScalarWhereInput[]
  }

  export type GameGenderUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameGenderCreateWithoutGameInput, GameGenderUncheckedCreateWithoutGameInput> | GameGenderCreateWithoutGameInput[] | GameGenderUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameGenderCreateOrConnectWithoutGameInput | GameGenderCreateOrConnectWithoutGameInput[]
    upsert?: GameGenderUpsertWithWhereUniqueWithoutGameInput | GameGenderUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameGenderCreateManyGameInputEnvelope
    set?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
    disconnect?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
    delete?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
    connect?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
    update?: GameGenderUpdateWithWhereUniqueWithoutGameInput | GameGenderUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameGenderUpdateManyWithWhereWithoutGameInput | GameGenderUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameGenderScalarWhereInput | GameGenderScalarWhereInput[]
  }

  export type GamePlatformUpdateManyWithoutGameNestedInput = {
    create?: XOR<GamePlatformCreateWithoutGameInput, GamePlatformUncheckedCreateWithoutGameInput> | GamePlatformCreateWithoutGameInput[] | GamePlatformUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GamePlatformCreateOrConnectWithoutGameInput | GamePlatformCreateOrConnectWithoutGameInput[]
    upsert?: GamePlatformUpsertWithWhereUniqueWithoutGameInput | GamePlatformUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GamePlatformCreateManyGameInputEnvelope
    set?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
    disconnect?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
    delete?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
    connect?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
    update?: GamePlatformUpdateWithWhereUniqueWithoutGameInput | GamePlatformUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GamePlatformUpdateManyWithWhereWithoutGameInput | GamePlatformUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GamePlatformScalarWhereInput | GamePlatformScalarWhereInput[]
  }

  export type GameTagUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameTagCreateWithoutGameInput, GameTagUncheckedCreateWithoutGameInput> | GameTagCreateWithoutGameInput[] | GameTagUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameTagCreateOrConnectWithoutGameInput | GameTagCreateOrConnectWithoutGameInput[]
    upsert?: GameTagUpsertWithWhereUniqueWithoutGameInput | GameTagUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameTagCreateManyGameInputEnvelope
    set?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    disconnect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    delete?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    connect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    update?: GameTagUpdateWithWhereUniqueWithoutGameInput | GameTagUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameTagUpdateManyWithWhereWithoutGameInput | GameTagUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameTagScalarWhereInput | GameTagScalarWhereInput[]
  }

  export type DeveloperUpdateOneRequiredWithoutGamesNestedInput = {
    create?: XOR<DeveloperCreateWithoutGamesInput, DeveloperUncheckedCreateWithoutGamesInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutGamesInput
    upsert?: DeveloperUpsertWithoutGamesInput
    connect?: DeveloperWhereUniqueInput
    update?: XOR<XOR<DeveloperUpdateToOneWithWhereWithoutGamesInput, DeveloperUpdateWithoutGamesInput>, DeveloperUncheckedUpdateWithoutGamesInput>
  }

  export type ReviewUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<ReviewCreateWithoutGameInput, ReviewUncheckedCreateWithoutGameInput> | ReviewCreateWithoutGameInput[] | ReviewUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGameInput | ReviewCreateOrConnectWithoutGameInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutGameInput | ReviewUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: ReviewCreateManyGameInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutGameInput | ReviewUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutGameInput | ReviewUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<PurchaseCreateWithoutGameInput, PurchaseUncheckedCreateWithoutGameInput> | PurchaseCreateWithoutGameInput[] | PurchaseUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutGameInput | PurchaseCreateOrConnectWithoutGameInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutGameInput | PurchaseUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PurchaseCreateManyGameInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutGameInput | PurchaseUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutGameInput | PurchaseUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type AchievementUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<AchievementCreateWithoutGameInput, AchievementUncheckedCreateWithoutGameInput> | AchievementCreateWithoutGameInput[] | AchievementUncheckedCreateWithoutGameInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutGameInput | AchievementCreateOrConnectWithoutGameInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutGameInput | AchievementUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: AchievementCreateManyGameInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutGameInput | AchievementUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutGameInput | AchievementUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type DlcUncheckedUpdateManyWithoutBaseGameNestedInput = {
    create?: XOR<DlcCreateWithoutBaseGameInput, DlcUncheckedCreateWithoutBaseGameInput> | DlcCreateWithoutBaseGameInput[] | DlcUncheckedCreateWithoutBaseGameInput[]
    connectOrCreate?: DlcCreateOrConnectWithoutBaseGameInput | DlcCreateOrConnectWithoutBaseGameInput[]
    upsert?: DlcUpsertWithWhereUniqueWithoutBaseGameInput | DlcUpsertWithWhereUniqueWithoutBaseGameInput[]
    createMany?: DlcCreateManyBaseGameInputEnvelope
    set?: DlcWhereUniqueInput | DlcWhereUniqueInput[]
    disconnect?: DlcWhereUniqueInput | DlcWhereUniqueInput[]
    delete?: DlcWhereUniqueInput | DlcWhereUniqueInput[]
    connect?: DlcWhereUniqueInput | DlcWhereUniqueInput[]
    update?: DlcUpdateWithWhereUniqueWithoutBaseGameInput | DlcUpdateWithWhereUniqueWithoutBaseGameInput[]
    updateMany?: DlcUpdateManyWithWhereWithoutBaseGameInput | DlcUpdateManyWithWhereWithoutBaseGameInput[]
    deleteMany?: DlcScalarWhereInput | DlcScalarWhereInput[]
  }

  export type GameGenderUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameGenderCreateWithoutGameInput, GameGenderUncheckedCreateWithoutGameInput> | GameGenderCreateWithoutGameInput[] | GameGenderUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameGenderCreateOrConnectWithoutGameInput | GameGenderCreateOrConnectWithoutGameInput[]
    upsert?: GameGenderUpsertWithWhereUniqueWithoutGameInput | GameGenderUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameGenderCreateManyGameInputEnvelope
    set?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
    disconnect?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
    delete?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
    connect?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
    update?: GameGenderUpdateWithWhereUniqueWithoutGameInput | GameGenderUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameGenderUpdateManyWithWhereWithoutGameInput | GameGenderUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameGenderScalarWhereInput | GameGenderScalarWhereInput[]
  }

  export type GamePlatformUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GamePlatformCreateWithoutGameInput, GamePlatformUncheckedCreateWithoutGameInput> | GamePlatformCreateWithoutGameInput[] | GamePlatformUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GamePlatformCreateOrConnectWithoutGameInput | GamePlatformCreateOrConnectWithoutGameInput[]
    upsert?: GamePlatformUpsertWithWhereUniqueWithoutGameInput | GamePlatformUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GamePlatformCreateManyGameInputEnvelope
    set?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
    disconnect?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
    delete?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
    connect?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
    update?: GamePlatformUpdateWithWhereUniqueWithoutGameInput | GamePlatformUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GamePlatformUpdateManyWithWhereWithoutGameInput | GamePlatformUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GamePlatformScalarWhereInput | GamePlatformScalarWhereInput[]
  }

  export type GameTagUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameTagCreateWithoutGameInput, GameTagUncheckedCreateWithoutGameInput> | GameTagCreateWithoutGameInput[] | GameTagUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameTagCreateOrConnectWithoutGameInput | GameTagCreateOrConnectWithoutGameInput[]
    upsert?: GameTagUpsertWithWhereUniqueWithoutGameInput | GameTagUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameTagCreateManyGameInputEnvelope
    set?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    disconnect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    delete?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    connect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    update?: GameTagUpdateWithWhereUniqueWithoutGameInput | GameTagUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameTagUpdateManyWithWhereWithoutGameInput | GameTagUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameTagScalarWhereInput | GameTagScalarWhereInput[]
  }

  export type GameCreateNestedManyWithoutDeveloperInput = {
    create?: XOR<GameCreateWithoutDeveloperInput, GameUncheckedCreateWithoutDeveloperInput> | GameCreateWithoutDeveloperInput[] | GameUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: GameCreateOrConnectWithoutDeveloperInput | GameCreateOrConnectWithoutDeveloperInput[]
    createMany?: GameCreateManyDeveloperInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutDeveloperInput = {
    create?: XOR<GameCreateWithoutDeveloperInput, GameUncheckedCreateWithoutDeveloperInput> | GameCreateWithoutDeveloperInput[] | GameUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: GameCreateOrConnectWithoutDeveloperInput | GameCreateOrConnectWithoutDeveloperInput[]
    createMany?: GameCreateManyDeveloperInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUpdateManyWithoutDeveloperNestedInput = {
    create?: XOR<GameCreateWithoutDeveloperInput, GameUncheckedCreateWithoutDeveloperInput> | GameCreateWithoutDeveloperInput[] | GameUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: GameCreateOrConnectWithoutDeveloperInput | GameCreateOrConnectWithoutDeveloperInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutDeveloperInput | GameUpsertWithWhereUniqueWithoutDeveloperInput[]
    createMany?: GameCreateManyDeveloperInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutDeveloperInput | GameUpdateWithWhereUniqueWithoutDeveloperInput[]
    updateMany?: GameUpdateManyWithWhereWithoutDeveloperInput | GameUpdateManyWithWhereWithoutDeveloperInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutDeveloperNestedInput = {
    create?: XOR<GameCreateWithoutDeveloperInput, GameUncheckedCreateWithoutDeveloperInput> | GameCreateWithoutDeveloperInput[] | GameUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: GameCreateOrConnectWithoutDeveloperInput | GameCreateOrConnectWithoutDeveloperInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutDeveloperInput | GameUpsertWithWhereUniqueWithoutDeveloperInput[]
    createMany?: GameCreateManyDeveloperInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutDeveloperInput | GameUpdateWithWhereUniqueWithoutDeveloperInput[]
    updateMany?: GameUpdateManyWithWhereWithoutDeveloperInput | GameUpdateManyWithWhereWithoutDeveloperInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GamePlatformCreateNestedManyWithoutPlatformInput = {
    create?: XOR<GamePlatformCreateWithoutPlatformInput, GamePlatformUncheckedCreateWithoutPlatformInput> | GamePlatformCreateWithoutPlatformInput[] | GamePlatformUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: GamePlatformCreateOrConnectWithoutPlatformInput | GamePlatformCreateOrConnectWithoutPlatformInput[]
    createMany?: GamePlatformCreateManyPlatformInputEnvelope
    connect?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
  }

  export type GamePlatformUncheckedCreateNestedManyWithoutPlatformInput = {
    create?: XOR<GamePlatformCreateWithoutPlatformInput, GamePlatformUncheckedCreateWithoutPlatformInput> | GamePlatformCreateWithoutPlatformInput[] | GamePlatformUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: GamePlatformCreateOrConnectWithoutPlatformInput | GamePlatformCreateOrConnectWithoutPlatformInput[]
    createMany?: GamePlatformCreateManyPlatformInputEnvelope
    connect?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
  }

  export type GamePlatformUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<GamePlatformCreateWithoutPlatformInput, GamePlatformUncheckedCreateWithoutPlatformInput> | GamePlatformCreateWithoutPlatformInput[] | GamePlatformUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: GamePlatformCreateOrConnectWithoutPlatformInput | GamePlatformCreateOrConnectWithoutPlatformInput[]
    upsert?: GamePlatformUpsertWithWhereUniqueWithoutPlatformInput | GamePlatformUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: GamePlatformCreateManyPlatformInputEnvelope
    set?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
    disconnect?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
    delete?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
    connect?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
    update?: GamePlatformUpdateWithWhereUniqueWithoutPlatformInput | GamePlatformUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: GamePlatformUpdateManyWithWhereWithoutPlatformInput | GamePlatformUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: GamePlatformScalarWhereInput | GamePlatformScalarWhereInput[]
  }

  export type GamePlatformUncheckedUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<GamePlatformCreateWithoutPlatformInput, GamePlatformUncheckedCreateWithoutPlatformInput> | GamePlatformCreateWithoutPlatformInput[] | GamePlatformUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: GamePlatformCreateOrConnectWithoutPlatformInput | GamePlatformCreateOrConnectWithoutPlatformInput[]
    upsert?: GamePlatformUpsertWithWhereUniqueWithoutPlatformInput | GamePlatformUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: GamePlatformCreateManyPlatformInputEnvelope
    set?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
    disconnect?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
    delete?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
    connect?: GamePlatformWhereUniqueInput | GamePlatformWhereUniqueInput[]
    update?: GamePlatformUpdateWithWhereUniqueWithoutPlatformInput | GamePlatformUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: GamePlatformUpdateManyWithWhereWithoutPlatformInput | GamePlatformUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: GamePlatformScalarWhereInput | GamePlatformScalarWhereInput[]
  }

  export type GameGenderCreateNestedManyWithoutGenreInput = {
    create?: XOR<GameGenderCreateWithoutGenreInput, GameGenderUncheckedCreateWithoutGenreInput> | GameGenderCreateWithoutGenreInput[] | GameGenderUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: GameGenderCreateOrConnectWithoutGenreInput | GameGenderCreateOrConnectWithoutGenreInput[]
    createMany?: GameGenderCreateManyGenreInputEnvelope
    connect?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
  }

  export type GameGenderUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<GameGenderCreateWithoutGenreInput, GameGenderUncheckedCreateWithoutGenreInput> | GameGenderCreateWithoutGenreInput[] | GameGenderUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: GameGenderCreateOrConnectWithoutGenreInput | GameGenderCreateOrConnectWithoutGenreInput[]
    createMany?: GameGenderCreateManyGenreInputEnvelope
    connect?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
  }

  export type GameGenderUpdateManyWithoutGenreNestedInput = {
    create?: XOR<GameGenderCreateWithoutGenreInput, GameGenderUncheckedCreateWithoutGenreInput> | GameGenderCreateWithoutGenreInput[] | GameGenderUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: GameGenderCreateOrConnectWithoutGenreInput | GameGenderCreateOrConnectWithoutGenreInput[]
    upsert?: GameGenderUpsertWithWhereUniqueWithoutGenreInput | GameGenderUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: GameGenderCreateManyGenreInputEnvelope
    set?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
    disconnect?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
    delete?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
    connect?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
    update?: GameGenderUpdateWithWhereUniqueWithoutGenreInput | GameGenderUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: GameGenderUpdateManyWithWhereWithoutGenreInput | GameGenderUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: GameGenderScalarWhereInput | GameGenderScalarWhereInput[]
  }

  export type GameGenderUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<GameGenderCreateWithoutGenreInput, GameGenderUncheckedCreateWithoutGenreInput> | GameGenderCreateWithoutGenreInput[] | GameGenderUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: GameGenderCreateOrConnectWithoutGenreInput | GameGenderCreateOrConnectWithoutGenreInput[]
    upsert?: GameGenderUpsertWithWhereUniqueWithoutGenreInput | GameGenderUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: GameGenderCreateManyGenreInputEnvelope
    set?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
    disconnect?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
    delete?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
    connect?: GameGenderWhereUniqueInput | GameGenderWhereUniqueInput[]
    update?: GameGenderUpdateWithWhereUniqueWithoutGenreInput | GameGenderUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: GameGenderUpdateManyWithWhereWithoutGenreInput | GameGenderUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: GameGenderScalarWhereInput | GameGenderScalarWhereInput[]
  }

  export type GameTagCreateNestedManyWithoutTagInput = {
    create?: XOR<GameTagCreateWithoutTagInput, GameTagUncheckedCreateWithoutTagInput> | GameTagCreateWithoutTagInput[] | GameTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: GameTagCreateOrConnectWithoutTagInput | GameTagCreateOrConnectWithoutTagInput[]
    createMany?: GameTagCreateManyTagInputEnvelope
    connect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
  }

  export type GameTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<GameTagCreateWithoutTagInput, GameTagUncheckedCreateWithoutTagInput> | GameTagCreateWithoutTagInput[] | GameTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: GameTagCreateOrConnectWithoutTagInput | GameTagCreateOrConnectWithoutTagInput[]
    createMany?: GameTagCreateManyTagInputEnvelope
    connect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
  }

  export type GameTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<GameTagCreateWithoutTagInput, GameTagUncheckedCreateWithoutTagInput> | GameTagCreateWithoutTagInput[] | GameTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: GameTagCreateOrConnectWithoutTagInput | GameTagCreateOrConnectWithoutTagInput[]
    upsert?: GameTagUpsertWithWhereUniqueWithoutTagInput | GameTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: GameTagCreateManyTagInputEnvelope
    set?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    disconnect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    delete?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    connect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    update?: GameTagUpdateWithWhereUniqueWithoutTagInput | GameTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: GameTagUpdateManyWithWhereWithoutTagInput | GameTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: GameTagScalarWhereInput | GameTagScalarWhereInput[]
  }

  export type GameTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<GameTagCreateWithoutTagInput, GameTagUncheckedCreateWithoutTagInput> | GameTagCreateWithoutTagInput[] | GameTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: GameTagCreateOrConnectWithoutTagInput | GameTagCreateOrConnectWithoutTagInput[]
    upsert?: GameTagUpsertWithWhereUniqueWithoutTagInput | GameTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: GameTagCreateManyTagInputEnvelope
    set?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    disconnect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    delete?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    connect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    update?: GameTagUpdateWithWhereUniqueWithoutTagInput | GameTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: GameTagUpdateManyWithWhereWithoutTagInput | GameTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: GameTagScalarWhereInput | GameTagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutReviewsInput = {
    create?: XOR<GameCreateWithoutReviewsInput, GameUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: GameCreateOrConnectWithoutReviewsInput
    connect?: GameWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type GameUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<GameCreateWithoutReviewsInput, GameUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: GameCreateOrConnectWithoutReviewsInput
    upsert?: GameUpsertWithoutReviewsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutReviewsInput, GameUpdateWithoutReviewsInput>, GameUncheckedUpdateWithoutReviewsInput>
  }

  export type UserCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<GameCreateWithoutPurchasesInput, GameUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: GameCreateOrConnectWithoutPurchasesInput
    connect?: GameWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    upsert?: UserUpsertWithoutPurchasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchasesInput, UserUpdateWithoutPurchasesInput>, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type GameUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<GameCreateWithoutPurchasesInput, GameUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: GameCreateOrConnectWithoutPurchasesInput
    upsert?: GameUpsertWithoutPurchasesInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutPurchasesInput, GameUpdateWithoutPurchasesInput>, GameUncheckedUpdateWithoutPurchasesInput>
  }

  export type UnlockedAchievementCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UnlockedAchievementCreateWithoutAchievementInput, UnlockedAchievementUncheckedCreateWithoutAchievementInput> | UnlockedAchievementCreateWithoutAchievementInput[] | UnlockedAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UnlockedAchievementCreateOrConnectWithoutAchievementInput | UnlockedAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: UnlockedAchievementCreateManyAchievementInputEnvelope
    connect?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
  }

  export type GameCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<GameCreateWithoutAchievementsInput, GameUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: GameCreateOrConnectWithoutAchievementsInput
    connect?: GameWhereUniqueInput
  }

  export type UnlockedAchievementUncheckedCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UnlockedAchievementCreateWithoutAchievementInput, UnlockedAchievementUncheckedCreateWithoutAchievementInput> | UnlockedAchievementCreateWithoutAchievementInput[] | UnlockedAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UnlockedAchievementCreateOrConnectWithoutAchievementInput | UnlockedAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: UnlockedAchievementCreateManyAchievementInputEnvelope
    connect?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
  }

  export type UnlockedAchievementUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UnlockedAchievementCreateWithoutAchievementInput, UnlockedAchievementUncheckedCreateWithoutAchievementInput> | UnlockedAchievementCreateWithoutAchievementInput[] | UnlockedAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UnlockedAchievementCreateOrConnectWithoutAchievementInput | UnlockedAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: UnlockedAchievementUpsertWithWhereUniqueWithoutAchievementInput | UnlockedAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UnlockedAchievementCreateManyAchievementInputEnvelope
    set?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
    disconnect?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
    delete?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
    connect?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
    update?: UnlockedAchievementUpdateWithWhereUniqueWithoutAchievementInput | UnlockedAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UnlockedAchievementUpdateManyWithWhereWithoutAchievementInput | UnlockedAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UnlockedAchievementScalarWhereInput | UnlockedAchievementScalarWhereInput[]
  }

  export type GameUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<GameCreateWithoutAchievementsInput, GameUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: GameCreateOrConnectWithoutAchievementsInput
    upsert?: GameUpsertWithoutAchievementsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutAchievementsInput, GameUpdateWithoutAchievementsInput>, GameUncheckedUpdateWithoutAchievementsInput>
  }

  export type UnlockedAchievementUncheckedUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UnlockedAchievementCreateWithoutAchievementInput, UnlockedAchievementUncheckedCreateWithoutAchievementInput> | UnlockedAchievementCreateWithoutAchievementInput[] | UnlockedAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UnlockedAchievementCreateOrConnectWithoutAchievementInput | UnlockedAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: UnlockedAchievementUpsertWithWhereUniqueWithoutAchievementInput | UnlockedAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UnlockedAchievementCreateManyAchievementInputEnvelope
    set?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
    disconnect?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
    delete?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
    connect?: UnlockedAchievementWhereUniqueInput | UnlockedAchievementWhereUniqueInput[]
    update?: UnlockedAchievementUpdateWithWhereUniqueWithoutAchievementInput | UnlockedAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UnlockedAchievementUpdateManyWithWhereWithoutAchievementInput | UnlockedAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UnlockedAchievementScalarWhereInput | UnlockedAchievementScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput
    connect?: UserWhereUniqueInput
  }

  export type AchievementCreateNestedOneWithoutUnlockedAchievementsInput = {
    create?: XOR<AchievementCreateWithoutUnlockedAchievementsInput, AchievementUncheckedCreateWithoutUnlockedAchievementsInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutUnlockedAchievementsInput
    connect?: AchievementWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput
    upsert?: UserUpsertWithoutAchievementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAchievementsInput, UserUpdateWithoutAchievementsInput>, UserUncheckedUpdateWithoutAchievementsInput>
  }

  export type AchievementUpdateOneRequiredWithoutUnlockedAchievementsNestedInput = {
    create?: XOR<AchievementCreateWithoutUnlockedAchievementsInput, AchievementUncheckedCreateWithoutUnlockedAchievementsInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutUnlockedAchievementsInput
    upsert?: AchievementUpsertWithoutUnlockedAchievementsInput
    connect?: AchievementWhereUniqueInput
    update?: XOR<XOR<AchievementUpdateToOneWithWhereWithoutUnlockedAchievementsInput, AchievementUpdateWithoutUnlockedAchievementsInput>, AchievementUncheckedUpdateWithoutUnlockedAchievementsInput>
  }

  export type GameCreateNestedOneWithoutDlcsInput = {
    create?: XOR<GameCreateWithoutDlcsInput, GameUncheckedCreateWithoutDlcsInput>
    connectOrCreate?: GameCreateOrConnectWithoutDlcsInput
    connect?: GameWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutDlcsNestedInput = {
    create?: XOR<GameCreateWithoutDlcsInput, GameUncheckedCreateWithoutDlcsInput>
    connectOrCreate?: GameCreateOrConnectWithoutDlcsInput
    upsert?: GameUpsertWithoutDlcsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutDlcsInput, GameUpdateWithoutDlcsInput>, GameUncheckedUpdateWithoutDlcsInput>
  }

  export type GameCreateNestedOneWithoutGenresInput = {
    create?: XOR<GameCreateWithoutGenresInput, GameUncheckedCreateWithoutGenresInput>
    connectOrCreate?: GameCreateOrConnectWithoutGenresInput
    connect?: GameWhereUniqueInput
  }

  export type GenderCreateNestedOneWithoutGamesInput = {
    create?: XOR<GenderCreateWithoutGamesInput, GenderUncheckedCreateWithoutGamesInput>
    connectOrCreate?: GenderCreateOrConnectWithoutGamesInput
    connect?: GenderWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutGenresNestedInput = {
    create?: XOR<GameCreateWithoutGenresInput, GameUncheckedCreateWithoutGenresInput>
    connectOrCreate?: GameCreateOrConnectWithoutGenresInput
    upsert?: GameUpsertWithoutGenresInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutGenresInput, GameUpdateWithoutGenresInput>, GameUncheckedUpdateWithoutGenresInput>
  }

  export type GenderUpdateOneRequiredWithoutGamesNestedInput = {
    create?: XOR<GenderCreateWithoutGamesInput, GenderUncheckedCreateWithoutGamesInput>
    connectOrCreate?: GenderCreateOrConnectWithoutGamesInput
    upsert?: GenderUpsertWithoutGamesInput
    connect?: GenderWhereUniqueInput
    update?: XOR<XOR<GenderUpdateToOneWithWhereWithoutGamesInput, GenderUpdateWithoutGamesInput>, GenderUncheckedUpdateWithoutGamesInput>
  }

  export type GameCreateNestedOneWithoutTagsInput = {
    create?: XOR<GameCreateWithoutTagsInput, GameUncheckedCreateWithoutTagsInput>
    connectOrCreate?: GameCreateOrConnectWithoutTagsInput
    connect?: GameWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutGamesInput = {
    create?: XOR<TagCreateWithoutGamesInput, TagUncheckedCreateWithoutGamesInput>
    connectOrCreate?: TagCreateOrConnectWithoutGamesInput
    connect?: TagWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<GameCreateWithoutTagsInput, GameUncheckedCreateWithoutTagsInput>
    connectOrCreate?: GameCreateOrConnectWithoutTagsInput
    upsert?: GameUpsertWithoutTagsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutTagsInput, GameUpdateWithoutTagsInput>, GameUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutGamesNestedInput = {
    create?: XOR<TagCreateWithoutGamesInput, TagUncheckedCreateWithoutGamesInput>
    connectOrCreate?: TagCreateOrConnectWithoutGamesInput
    upsert?: TagUpsertWithoutGamesInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutGamesInput, TagUpdateWithoutGamesInput>, TagUncheckedUpdateWithoutGamesInput>
  }

  export type GameCreateNestedOneWithoutPlatformsInput = {
    create?: XOR<GameCreateWithoutPlatformsInput, GameUncheckedCreateWithoutPlatformsInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlatformsInput
    connect?: GameWhereUniqueInput
  }

  export type PlatformCreateNestedOneWithoutGamesInput = {
    create?: XOR<PlatformCreateWithoutGamesInput, PlatformUncheckedCreateWithoutGamesInput>
    connectOrCreate?: PlatformCreateOrConnectWithoutGamesInput
    connect?: PlatformWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutPlatformsNestedInput = {
    create?: XOR<GameCreateWithoutPlatformsInput, GameUncheckedCreateWithoutPlatformsInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlatformsInput
    upsert?: GameUpsertWithoutPlatformsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutPlatformsInput, GameUpdateWithoutPlatformsInput>, GameUncheckedUpdateWithoutPlatformsInput>
  }

  export type PlatformUpdateOneRequiredWithoutGamesNestedInput = {
    create?: XOR<PlatformCreateWithoutGamesInput, PlatformUncheckedCreateWithoutGamesInput>
    connectOrCreate?: PlatformCreateOrConnectWithoutGamesInput
    upsert?: PlatformUpsertWithoutGamesInput
    connect?: PlatformWhereUniqueInput
    update?: XOR<XOR<PlatformUpdateToOneWithWhereWithoutGamesInput, PlatformUpdateWithoutGamesInput>, PlatformUncheckedUpdateWithoutGamesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ReviewCreateWithoutUserInput = {
    rating: number
    comment?: string | null
    game: GameCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    rating: number
    comment?: string | null
    gameId: number
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
  }

  export type PurchaseCreateWithoutUserInput = {
    purchaseDate?: Date | string
    paidPrice: number
    game: GameCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutUserInput = {
    id?: number
    purchaseDate?: Date | string
    paidPrice: number
    gameId: number
  }

  export type PurchaseCreateOrConnectWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseCreateManyUserInputEnvelope = {
    data: PurchaseCreateManyUserInput | PurchaseCreateManyUserInput[]
  }

  export type UnlockedAchievementCreateWithoutUserInput = {
    unlockDate?: Date | string
    achievement: AchievementCreateNestedOneWithoutUnlockedAchievementsInput
  }

  export type UnlockedAchievementUncheckedCreateWithoutUserInput = {
    id?: number
    unlockDate?: Date | string
    achievementId: number
  }

  export type UnlockedAchievementCreateOrConnectWithoutUserInput = {
    where: UnlockedAchievementWhereUniqueInput
    create: XOR<UnlockedAchievementCreateWithoutUserInput, UnlockedAchievementUncheckedCreateWithoutUserInput>
  }

  export type UnlockedAchievementCreateManyUserInputEnvelope = {
    data: UnlockedAchievementCreateManyUserInput | UnlockedAchievementCreateManyUserInput[]
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    userId?: IntFilter<"Review"> | number
    gameId?: IntFilter<"Review"> | number
  }

  export type PurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutUserInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id?: IntFilter<"Purchase"> | number
    purchaseDate?: DateTimeFilter<"Purchase"> | Date | string
    paidPrice?: FloatFilter<"Purchase"> | number
    userId?: IntFilter<"Purchase"> | number
    gameId?: IntFilter<"Purchase"> | number
  }

  export type UnlockedAchievementUpsertWithWhereUniqueWithoutUserInput = {
    where: UnlockedAchievementWhereUniqueInput
    update: XOR<UnlockedAchievementUpdateWithoutUserInput, UnlockedAchievementUncheckedUpdateWithoutUserInput>
    create: XOR<UnlockedAchievementCreateWithoutUserInput, UnlockedAchievementUncheckedCreateWithoutUserInput>
  }

  export type UnlockedAchievementUpdateWithWhereUniqueWithoutUserInput = {
    where: UnlockedAchievementWhereUniqueInput
    data: XOR<UnlockedAchievementUpdateWithoutUserInput, UnlockedAchievementUncheckedUpdateWithoutUserInput>
  }

  export type UnlockedAchievementUpdateManyWithWhereWithoutUserInput = {
    where: UnlockedAchievementScalarWhereInput
    data: XOR<UnlockedAchievementUpdateManyMutationInput, UnlockedAchievementUncheckedUpdateManyWithoutUserInput>
  }

  export type UnlockedAchievementScalarWhereInput = {
    AND?: UnlockedAchievementScalarWhereInput | UnlockedAchievementScalarWhereInput[]
    OR?: UnlockedAchievementScalarWhereInput[]
    NOT?: UnlockedAchievementScalarWhereInput | UnlockedAchievementScalarWhereInput[]
    id?: IntFilter<"UnlockedAchievement"> | number
    unlockDate?: DateTimeFilter<"UnlockedAchievement"> | Date | string
    userId?: IntFilter<"UnlockedAchievement"> | number
    achievementId?: IntFilter<"UnlockedAchievement"> | number
  }

  export type ReviewCreateWithoutGameInput = {
    rating: number
    comment?: string | null
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutGameInput = {
    id?: number
    rating: number
    comment?: string | null
    userId: number
  }

  export type ReviewCreateOrConnectWithoutGameInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutGameInput, ReviewUncheckedCreateWithoutGameInput>
  }

  export type ReviewCreateManyGameInputEnvelope = {
    data: ReviewCreateManyGameInput | ReviewCreateManyGameInput[]
  }

  export type PurchaseCreateWithoutGameInput = {
    purchaseDate?: Date | string
    paidPrice: number
    user: UserCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutGameInput = {
    id?: number
    purchaseDate?: Date | string
    paidPrice: number
    userId: number
  }

  export type PurchaseCreateOrConnectWithoutGameInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutGameInput, PurchaseUncheckedCreateWithoutGameInput>
  }

  export type PurchaseCreateManyGameInputEnvelope = {
    data: PurchaseCreateManyGameInput | PurchaseCreateManyGameInput[]
  }

  export type AchievementCreateWithoutGameInput = {
    name: string
    description?: string | null
    points: number
    unlockedAchievements?: UnlockedAchievementCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUncheckedCreateWithoutGameInput = {
    id?: number
    name: string
    description?: string | null
    points: number
    unlockedAchievements?: UnlockedAchievementUncheckedCreateNestedManyWithoutAchievementInput
  }

  export type AchievementCreateOrConnectWithoutGameInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutGameInput, AchievementUncheckedCreateWithoutGameInput>
  }

  export type AchievementCreateManyGameInputEnvelope = {
    data: AchievementCreateManyGameInput | AchievementCreateManyGameInput[]
  }

  export type DlcCreateWithoutBaseGameInput = {
    name: string
    description?: string | null
    price: number
    releaseDate?: Date | string | null
  }

  export type DlcUncheckedCreateWithoutBaseGameInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    releaseDate?: Date | string | null
  }

  export type DlcCreateOrConnectWithoutBaseGameInput = {
    where: DlcWhereUniqueInput
    create: XOR<DlcCreateWithoutBaseGameInput, DlcUncheckedCreateWithoutBaseGameInput>
  }

  export type DlcCreateManyBaseGameInputEnvelope = {
    data: DlcCreateManyBaseGameInput | DlcCreateManyBaseGameInput[]
  }

  export type GameGenderCreateWithoutGameInput = {
    genre: GenderCreateNestedOneWithoutGamesInput
  }

  export type GameGenderUncheckedCreateWithoutGameInput = {
    genderId: number
  }

  export type GameGenderCreateOrConnectWithoutGameInput = {
    where: GameGenderWhereUniqueInput
    create: XOR<GameGenderCreateWithoutGameInput, GameGenderUncheckedCreateWithoutGameInput>
  }

  export type GameGenderCreateManyGameInputEnvelope = {
    data: GameGenderCreateManyGameInput | GameGenderCreateManyGameInput[]
  }

  export type GamePlatformCreateWithoutGameInput = {
    platform: PlatformCreateNestedOneWithoutGamesInput
  }

  export type GamePlatformUncheckedCreateWithoutGameInput = {
    platformId: number
  }

  export type GamePlatformCreateOrConnectWithoutGameInput = {
    where: GamePlatformWhereUniqueInput
    create: XOR<GamePlatformCreateWithoutGameInput, GamePlatformUncheckedCreateWithoutGameInput>
  }

  export type GamePlatformCreateManyGameInputEnvelope = {
    data: GamePlatformCreateManyGameInput | GamePlatformCreateManyGameInput[]
  }

  export type GameTagCreateWithoutGameInput = {
    tag: TagCreateNestedOneWithoutGamesInput
  }

  export type GameTagUncheckedCreateWithoutGameInput = {
    tagId: number
  }

  export type GameTagCreateOrConnectWithoutGameInput = {
    where: GameTagWhereUniqueInput
    create: XOR<GameTagCreateWithoutGameInput, GameTagUncheckedCreateWithoutGameInput>
  }

  export type GameTagCreateManyGameInputEnvelope = {
    data: GameTagCreateManyGameInput | GameTagCreateManyGameInput[]
  }

  export type DeveloperCreateWithoutGamesInput = {
    name: string
    country?: string | null
  }

  export type DeveloperUncheckedCreateWithoutGamesInput = {
    id?: number
    name: string
    country?: string | null
  }

  export type DeveloperCreateOrConnectWithoutGamesInput = {
    where: DeveloperWhereUniqueInput
    create: XOR<DeveloperCreateWithoutGamesInput, DeveloperUncheckedCreateWithoutGamesInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutGameInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutGameInput, ReviewUncheckedUpdateWithoutGameInput>
    create: XOR<ReviewCreateWithoutGameInput, ReviewUncheckedCreateWithoutGameInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutGameInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutGameInput, ReviewUncheckedUpdateWithoutGameInput>
  }

  export type ReviewUpdateManyWithWhereWithoutGameInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutGameInput>
  }

  export type PurchaseUpsertWithWhereUniqueWithoutGameInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutGameInput, PurchaseUncheckedUpdateWithoutGameInput>
    create: XOR<PurchaseCreateWithoutGameInput, PurchaseUncheckedCreateWithoutGameInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutGameInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutGameInput, PurchaseUncheckedUpdateWithoutGameInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutGameInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutGameInput>
  }

  export type AchievementUpsertWithWhereUniqueWithoutGameInput = {
    where: AchievementWhereUniqueInput
    update: XOR<AchievementUpdateWithoutGameInput, AchievementUncheckedUpdateWithoutGameInput>
    create: XOR<AchievementCreateWithoutGameInput, AchievementUncheckedCreateWithoutGameInput>
  }

  export type AchievementUpdateWithWhereUniqueWithoutGameInput = {
    where: AchievementWhereUniqueInput
    data: XOR<AchievementUpdateWithoutGameInput, AchievementUncheckedUpdateWithoutGameInput>
  }

  export type AchievementUpdateManyWithWhereWithoutGameInput = {
    where: AchievementScalarWhereInput
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyWithoutGameInput>
  }

  export type AchievementScalarWhereInput = {
    AND?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
    OR?: AchievementScalarWhereInput[]
    NOT?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
    id?: IntFilter<"Achievement"> | number
    name?: StringFilter<"Achievement"> | string
    description?: StringNullableFilter<"Achievement"> | string | null
    points?: IntFilter<"Achievement"> | number
    gameId?: IntFilter<"Achievement"> | number
  }

  export type DlcUpsertWithWhereUniqueWithoutBaseGameInput = {
    where: DlcWhereUniqueInput
    update: XOR<DlcUpdateWithoutBaseGameInput, DlcUncheckedUpdateWithoutBaseGameInput>
    create: XOR<DlcCreateWithoutBaseGameInput, DlcUncheckedCreateWithoutBaseGameInput>
  }

  export type DlcUpdateWithWhereUniqueWithoutBaseGameInput = {
    where: DlcWhereUniqueInput
    data: XOR<DlcUpdateWithoutBaseGameInput, DlcUncheckedUpdateWithoutBaseGameInput>
  }

  export type DlcUpdateManyWithWhereWithoutBaseGameInput = {
    where: DlcScalarWhereInput
    data: XOR<DlcUpdateManyMutationInput, DlcUncheckedUpdateManyWithoutBaseGameInput>
  }

  export type DlcScalarWhereInput = {
    AND?: DlcScalarWhereInput | DlcScalarWhereInput[]
    OR?: DlcScalarWhereInput[]
    NOT?: DlcScalarWhereInput | DlcScalarWhereInput[]
    id?: IntFilter<"Dlc"> | number
    name?: StringFilter<"Dlc"> | string
    description?: StringNullableFilter<"Dlc"> | string | null
    price?: FloatFilter<"Dlc"> | number
    releaseDate?: DateTimeNullableFilter<"Dlc"> | Date | string | null
    baseGameId?: IntFilter<"Dlc"> | number
  }

  export type GameGenderUpsertWithWhereUniqueWithoutGameInput = {
    where: GameGenderWhereUniqueInput
    update: XOR<GameGenderUpdateWithoutGameInput, GameGenderUncheckedUpdateWithoutGameInput>
    create: XOR<GameGenderCreateWithoutGameInput, GameGenderUncheckedCreateWithoutGameInput>
  }

  export type GameGenderUpdateWithWhereUniqueWithoutGameInput = {
    where: GameGenderWhereUniqueInput
    data: XOR<GameGenderUpdateWithoutGameInput, GameGenderUncheckedUpdateWithoutGameInput>
  }

  export type GameGenderUpdateManyWithWhereWithoutGameInput = {
    where: GameGenderScalarWhereInput
    data: XOR<GameGenderUpdateManyMutationInput, GameGenderUncheckedUpdateManyWithoutGameInput>
  }

  export type GameGenderScalarWhereInput = {
    AND?: GameGenderScalarWhereInput | GameGenderScalarWhereInput[]
    OR?: GameGenderScalarWhereInput[]
    NOT?: GameGenderScalarWhereInput | GameGenderScalarWhereInput[]
    gameId?: IntFilter<"GameGender"> | number
    genderId?: IntFilter<"GameGender"> | number
  }

  export type GamePlatformUpsertWithWhereUniqueWithoutGameInput = {
    where: GamePlatformWhereUniqueInput
    update: XOR<GamePlatformUpdateWithoutGameInput, GamePlatformUncheckedUpdateWithoutGameInput>
    create: XOR<GamePlatformCreateWithoutGameInput, GamePlatformUncheckedCreateWithoutGameInput>
  }

  export type GamePlatformUpdateWithWhereUniqueWithoutGameInput = {
    where: GamePlatformWhereUniqueInput
    data: XOR<GamePlatformUpdateWithoutGameInput, GamePlatformUncheckedUpdateWithoutGameInput>
  }

  export type GamePlatformUpdateManyWithWhereWithoutGameInput = {
    where: GamePlatformScalarWhereInput
    data: XOR<GamePlatformUpdateManyMutationInput, GamePlatformUncheckedUpdateManyWithoutGameInput>
  }

  export type GamePlatformScalarWhereInput = {
    AND?: GamePlatformScalarWhereInput | GamePlatformScalarWhereInput[]
    OR?: GamePlatformScalarWhereInput[]
    NOT?: GamePlatformScalarWhereInput | GamePlatformScalarWhereInput[]
    gameId?: IntFilter<"GamePlatform"> | number
    platformId?: IntFilter<"GamePlatform"> | number
  }

  export type GameTagUpsertWithWhereUniqueWithoutGameInput = {
    where: GameTagWhereUniqueInput
    update: XOR<GameTagUpdateWithoutGameInput, GameTagUncheckedUpdateWithoutGameInput>
    create: XOR<GameTagCreateWithoutGameInput, GameTagUncheckedCreateWithoutGameInput>
  }

  export type GameTagUpdateWithWhereUniqueWithoutGameInput = {
    where: GameTagWhereUniqueInput
    data: XOR<GameTagUpdateWithoutGameInput, GameTagUncheckedUpdateWithoutGameInput>
  }

  export type GameTagUpdateManyWithWhereWithoutGameInput = {
    where: GameTagScalarWhereInput
    data: XOR<GameTagUpdateManyMutationInput, GameTagUncheckedUpdateManyWithoutGameInput>
  }

  export type GameTagScalarWhereInput = {
    AND?: GameTagScalarWhereInput | GameTagScalarWhereInput[]
    OR?: GameTagScalarWhereInput[]
    NOT?: GameTagScalarWhereInput | GameTagScalarWhereInput[]
    gameId?: IntFilter<"GameTag"> | number
    tagId?: IntFilter<"GameTag"> | number
  }

  export type DeveloperUpsertWithoutGamesInput = {
    update: XOR<DeveloperUpdateWithoutGamesInput, DeveloperUncheckedUpdateWithoutGamesInput>
    create: XOR<DeveloperCreateWithoutGamesInput, DeveloperUncheckedCreateWithoutGamesInput>
    where?: DeveloperWhereInput
  }

  export type DeveloperUpdateToOneWithWhereWithoutGamesInput = {
    where?: DeveloperWhereInput
    data: XOR<DeveloperUpdateWithoutGamesInput, DeveloperUncheckedUpdateWithoutGamesInput>
  }

  export type DeveloperUpdateWithoutGamesInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeveloperUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameCreateWithoutDeveloperInput = {
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    reviews?: ReviewCreateNestedManyWithoutGameInput
    purchases?: PurchaseCreateNestedManyWithoutGameInput
    achievements?: AchievementCreateNestedManyWithoutGameInput
    dlcs?: DlcCreateNestedManyWithoutBaseGameInput
    genres?: GameGenderCreateNestedManyWithoutGameInput
    platforms?: GamePlatformCreateNestedManyWithoutGameInput
    tags?: GameTagCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutDeveloperInput = {
    id?: number
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    reviews?: ReviewUncheckedCreateNestedManyWithoutGameInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutGameInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutGameInput
    dlcs?: DlcUncheckedCreateNestedManyWithoutBaseGameInput
    genres?: GameGenderUncheckedCreateNestedManyWithoutGameInput
    platforms?: GamePlatformUncheckedCreateNestedManyWithoutGameInput
    tags?: GameTagUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutDeveloperInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutDeveloperInput, GameUncheckedCreateWithoutDeveloperInput>
  }

  export type GameCreateManyDeveloperInputEnvelope = {
    data: GameCreateManyDeveloperInput | GameCreateManyDeveloperInput[]
  }

  export type GameUpsertWithWhereUniqueWithoutDeveloperInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutDeveloperInput, GameUncheckedUpdateWithoutDeveloperInput>
    create: XOR<GameCreateWithoutDeveloperInput, GameUncheckedCreateWithoutDeveloperInput>
  }

  export type GameUpdateWithWhereUniqueWithoutDeveloperInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutDeveloperInput, GameUncheckedUpdateWithoutDeveloperInput>
  }

  export type GameUpdateManyWithWhereWithoutDeveloperInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutDeveloperInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: IntFilter<"Game"> | number
    name?: StringFilter<"Game"> | string
    description?: StringNullableFilter<"Game"> | string | null
    releaseDate?: DateTimeNullableFilter<"Game"> | Date | string | null
    price?: FloatFilter<"Game"> | number
    developerId?: IntFilter<"Game"> | number
  }

  export type GamePlatformCreateWithoutPlatformInput = {
    game: GameCreateNestedOneWithoutPlatformsInput
  }

  export type GamePlatformUncheckedCreateWithoutPlatformInput = {
    gameId: number
  }

  export type GamePlatformCreateOrConnectWithoutPlatformInput = {
    where: GamePlatformWhereUniqueInput
    create: XOR<GamePlatformCreateWithoutPlatformInput, GamePlatformUncheckedCreateWithoutPlatformInput>
  }

  export type GamePlatformCreateManyPlatformInputEnvelope = {
    data: GamePlatformCreateManyPlatformInput | GamePlatformCreateManyPlatformInput[]
  }

  export type GamePlatformUpsertWithWhereUniqueWithoutPlatformInput = {
    where: GamePlatformWhereUniqueInput
    update: XOR<GamePlatformUpdateWithoutPlatformInput, GamePlatformUncheckedUpdateWithoutPlatformInput>
    create: XOR<GamePlatformCreateWithoutPlatformInput, GamePlatformUncheckedCreateWithoutPlatformInput>
  }

  export type GamePlatformUpdateWithWhereUniqueWithoutPlatformInput = {
    where: GamePlatformWhereUniqueInput
    data: XOR<GamePlatformUpdateWithoutPlatformInput, GamePlatformUncheckedUpdateWithoutPlatformInput>
  }

  export type GamePlatformUpdateManyWithWhereWithoutPlatformInput = {
    where: GamePlatformScalarWhereInput
    data: XOR<GamePlatformUpdateManyMutationInput, GamePlatformUncheckedUpdateManyWithoutPlatformInput>
  }

  export type GameGenderCreateWithoutGenreInput = {
    game: GameCreateNestedOneWithoutGenresInput
  }

  export type GameGenderUncheckedCreateWithoutGenreInput = {
    gameId: number
  }

  export type GameGenderCreateOrConnectWithoutGenreInput = {
    where: GameGenderWhereUniqueInput
    create: XOR<GameGenderCreateWithoutGenreInput, GameGenderUncheckedCreateWithoutGenreInput>
  }

  export type GameGenderCreateManyGenreInputEnvelope = {
    data: GameGenderCreateManyGenreInput | GameGenderCreateManyGenreInput[]
  }

  export type GameGenderUpsertWithWhereUniqueWithoutGenreInput = {
    where: GameGenderWhereUniqueInput
    update: XOR<GameGenderUpdateWithoutGenreInput, GameGenderUncheckedUpdateWithoutGenreInput>
    create: XOR<GameGenderCreateWithoutGenreInput, GameGenderUncheckedCreateWithoutGenreInput>
  }

  export type GameGenderUpdateWithWhereUniqueWithoutGenreInput = {
    where: GameGenderWhereUniqueInput
    data: XOR<GameGenderUpdateWithoutGenreInput, GameGenderUncheckedUpdateWithoutGenreInput>
  }

  export type GameGenderUpdateManyWithWhereWithoutGenreInput = {
    where: GameGenderScalarWhereInput
    data: XOR<GameGenderUpdateManyMutationInput, GameGenderUncheckedUpdateManyWithoutGenreInput>
  }

  export type GameTagCreateWithoutTagInput = {
    game: GameCreateNestedOneWithoutTagsInput
  }

  export type GameTagUncheckedCreateWithoutTagInput = {
    gameId: number
  }

  export type GameTagCreateOrConnectWithoutTagInput = {
    where: GameTagWhereUniqueInput
    create: XOR<GameTagCreateWithoutTagInput, GameTagUncheckedCreateWithoutTagInput>
  }

  export type GameTagCreateManyTagInputEnvelope = {
    data: GameTagCreateManyTagInput | GameTagCreateManyTagInput[]
  }

  export type GameTagUpsertWithWhereUniqueWithoutTagInput = {
    where: GameTagWhereUniqueInput
    update: XOR<GameTagUpdateWithoutTagInput, GameTagUncheckedUpdateWithoutTagInput>
    create: XOR<GameTagCreateWithoutTagInput, GameTagUncheckedCreateWithoutTagInput>
  }

  export type GameTagUpdateWithWhereUniqueWithoutTagInput = {
    where: GameTagWhereUniqueInput
    data: XOR<GameTagUpdateWithoutTagInput, GameTagUncheckedUpdateWithoutTagInput>
  }

  export type GameTagUpdateManyWithWhereWithoutTagInput = {
    where: GameTagScalarWhereInput
    data: XOR<GameTagUpdateManyMutationInput, GameTagUncheckedUpdateManyWithoutTagInput>
  }

  export type UserCreateWithoutReviewsInput = {
    name: string
    email: string
    password: string
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    achievements?: UnlockedAchievementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    email: string
    password: string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    achievements?: UnlockedAchievementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type GameCreateWithoutReviewsInput = {
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    purchases?: PurchaseCreateNestedManyWithoutGameInput
    achievements?: AchievementCreateNestedManyWithoutGameInput
    dlcs?: DlcCreateNestedManyWithoutBaseGameInput
    genres?: GameGenderCreateNestedManyWithoutGameInput
    platforms?: GamePlatformCreateNestedManyWithoutGameInput
    tags?: GameTagCreateNestedManyWithoutGameInput
    developer: DeveloperCreateNestedOneWithoutGamesInput
  }

  export type GameUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    developerId: number
    purchases?: PurchaseUncheckedCreateNestedManyWithoutGameInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutGameInput
    dlcs?: DlcUncheckedCreateNestedManyWithoutBaseGameInput
    genres?: GameGenderUncheckedCreateNestedManyWithoutGameInput
    platforms?: GamePlatformUncheckedCreateNestedManyWithoutGameInput
    tags?: GameTagUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutReviewsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutReviewsInput, GameUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    achievements?: UnlockedAchievementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UnlockedAchievementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GameUpsertWithoutReviewsInput = {
    update: XOR<GameUpdateWithoutReviewsInput, GameUncheckedUpdateWithoutReviewsInput>
    create: XOR<GameCreateWithoutReviewsInput, GameUncheckedCreateWithoutReviewsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutReviewsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutReviewsInput, GameUncheckedUpdateWithoutReviewsInput>
  }

  export type GameUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    purchases?: PurchaseUpdateManyWithoutGameNestedInput
    achievements?: AchievementUpdateManyWithoutGameNestedInput
    dlcs?: DlcUpdateManyWithoutBaseGameNestedInput
    genres?: GameGenderUpdateManyWithoutGameNestedInput
    platforms?: GamePlatformUpdateManyWithoutGameNestedInput
    tags?: GameTagUpdateManyWithoutGameNestedInput
    developer?: DeveloperUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    developerId?: IntFieldUpdateOperationsInput | number
    purchases?: PurchaseUncheckedUpdateManyWithoutGameNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutGameNestedInput
    dlcs?: DlcUncheckedUpdateManyWithoutBaseGameNestedInput
    genres?: GameGenderUncheckedUpdateManyWithoutGameNestedInput
    platforms?: GamePlatformUncheckedUpdateManyWithoutGameNestedInput
    tags?: GameTagUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UserCreateWithoutPurchasesInput = {
    name: string
    email: string
    password: string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    achievements?: UnlockedAchievementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchasesInput = {
    id?: number
    name: string
    email: string
    password: string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    achievements?: UnlockedAchievementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
  }

  export type GameCreateWithoutPurchasesInput = {
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    reviews?: ReviewCreateNestedManyWithoutGameInput
    achievements?: AchievementCreateNestedManyWithoutGameInput
    dlcs?: DlcCreateNestedManyWithoutBaseGameInput
    genres?: GameGenderCreateNestedManyWithoutGameInput
    platforms?: GamePlatformCreateNestedManyWithoutGameInput
    tags?: GameTagCreateNestedManyWithoutGameInput
    developer: DeveloperCreateNestedOneWithoutGamesInput
  }

  export type GameUncheckedCreateWithoutPurchasesInput = {
    id?: number
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    developerId: number
    reviews?: ReviewUncheckedCreateNestedManyWithoutGameInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutGameInput
    dlcs?: DlcUncheckedCreateNestedManyWithoutBaseGameInput
    genres?: GameGenderUncheckedCreateNestedManyWithoutGameInput
    platforms?: GamePlatformUncheckedCreateNestedManyWithoutGameInput
    tags?: GameTagUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPurchasesInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPurchasesInput, GameUncheckedCreateWithoutPurchasesInput>
  }

  export type UserUpsertWithoutPurchasesInput = {
    update: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateWithoutPurchasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    achievements?: UnlockedAchievementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UnlockedAchievementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GameUpsertWithoutPurchasesInput = {
    update: XOR<GameUpdateWithoutPurchasesInput, GameUncheckedUpdateWithoutPurchasesInput>
    create: XOR<GameCreateWithoutPurchasesInput, GameUncheckedCreateWithoutPurchasesInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutPurchasesInput, GameUncheckedUpdateWithoutPurchasesInput>
  }

  export type GameUpdateWithoutPurchasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    reviews?: ReviewUpdateManyWithoutGameNestedInput
    achievements?: AchievementUpdateManyWithoutGameNestedInput
    dlcs?: DlcUpdateManyWithoutBaseGameNestedInput
    genres?: GameGenderUpdateManyWithoutGameNestedInput
    platforms?: GamePlatformUpdateManyWithoutGameNestedInput
    tags?: GameTagUpdateManyWithoutGameNestedInput
    developer?: DeveloperUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    developerId?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewUncheckedUpdateManyWithoutGameNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutGameNestedInput
    dlcs?: DlcUncheckedUpdateManyWithoutBaseGameNestedInput
    genres?: GameGenderUncheckedUpdateManyWithoutGameNestedInput
    platforms?: GamePlatformUncheckedUpdateManyWithoutGameNestedInput
    tags?: GameTagUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UnlockedAchievementCreateWithoutAchievementInput = {
    unlockDate?: Date | string
    user: UserCreateNestedOneWithoutAchievementsInput
  }

  export type UnlockedAchievementUncheckedCreateWithoutAchievementInput = {
    id?: number
    unlockDate?: Date | string
    userId: number
  }

  export type UnlockedAchievementCreateOrConnectWithoutAchievementInput = {
    where: UnlockedAchievementWhereUniqueInput
    create: XOR<UnlockedAchievementCreateWithoutAchievementInput, UnlockedAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type UnlockedAchievementCreateManyAchievementInputEnvelope = {
    data: UnlockedAchievementCreateManyAchievementInput | UnlockedAchievementCreateManyAchievementInput[]
  }

  export type GameCreateWithoutAchievementsInput = {
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    reviews?: ReviewCreateNestedManyWithoutGameInput
    purchases?: PurchaseCreateNestedManyWithoutGameInput
    dlcs?: DlcCreateNestedManyWithoutBaseGameInput
    genres?: GameGenderCreateNestedManyWithoutGameInput
    platforms?: GamePlatformCreateNestedManyWithoutGameInput
    tags?: GameTagCreateNestedManyWithoutGameInput
    developer: DeveloperCreateNestedOneWithoutGamesInput
  }

  export type GameUncheckedCreateWithoutAchievementsInput = {
    id?: number
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    developerId: number
    reviews?: ReviewUncheckedCreateNestedManyWithoutGameInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutGameInput
    dlcs?: DlcUncheckedCreateNestedManyWithoutBaseGameInput
    genres?: GameGenderUncheckedCreateNestedManyWithoutGameInput
    platforms?: GamePlatformUncheckedCreateNestedManyWithoutGameInput
    tags?: GameTagUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutAchievementsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutAchievementsInput, GameUncheckedCreateWithoutAchievementsInput>
  }

  export type UnlockedAchievementUpsertWithWhereUniqueWithoutAchievementInput = {
    where: UnlockedAchievementWhereUniqueInput
    update: XOR<UnlockedAchievementUpdateWithoutAchievementInput, UnlockedAchievementUncheckedUpdateWithoutAchievementInput>
    create: XOR<UnlockedAchievementCreateWithoutAchievementInput, UnlockedAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type UnlockedAchievementUpdateWithWhereUniqueWithoutAchievementInput = {
    where: UnlockedAchievementWhereUniqueInput
    data: XOR<UnlockedAchievementUpdateWithoutAchievementInput, UnlockedAchievementUncheckedUpdateWithoutAchievementInput>
  }

  export type UnlockedAchievementUpdateManyWithWhereWithoutAchievementInput = {
    where: UnlockedAchievementScalarWhereInput
    data: XOR<UnlockedAchievementUpdateManyMutationInput, UnlockedAchievementUncheckedUpdateManyWithoutAchievementInput>
  }

  export type GameUpsertWithoutAchievementsInput = {
    update: XOR<GameUpdateWithoutAchievementsInput, GameUncheckedUpdateWithoutAchievementsInput>
    create: XOR<GameCreateWithoutAchievementsInput, GameUncheckedCreateWithoutAchievementsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutAchievementsInput, GameUncheckedUpdateWithoutAchievementsInput>
  }

  export type GameUpdateWithoutAchievementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    reviews?: ReviewUpdateManyWithoutGameNestedInput
    purchases?: PurchaseUpdateManyWithoutGameNestedInput
    dlcs?: DlcUpdateManyWithoutBaseGameNestedInput
    genres?: GameGenderUpdateManyWithoutGameNestedInput
    platforms?: GamePlatformUpdateManyWithoutGameNestedInput
    tags?: GameTagUpdateManyWithoutGameNestedInput
    developer?: DeveloperUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutAchievementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    developerId?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewUncheckedUpdateManyWithoutGameNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutGameNestedInput
    dlcs?: DlcUncheckedUpdateManyWithoutBaseGameNestedInput
    genres?: GameGenderUncheckedUpdateManyWithoutGameNestedInput
    platforms?: GamePlatformUncheckedUpdateManyWithoutGameNestedInput
    tags?: GameTagUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UserCreateWithoutAchievementsInput = {
    name: string
    email: string
    password: string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAchievementsInput = {
    id?: number
    name: string
    email: string
    password: string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAchievementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
  }

  export type AchievementCreateWithoutUnlockedAchievementsInput = {
    name: string
    description?: string | null
    points: number
    game: GameCreateNestedOneWithoutAchievementsInput
  }

  export type AchievementUncheckedCreateWithoutUnlockedAchievementsInput = {
    id?: number
    name: string
    description?: string | null
    points: number
    gameId: number
  }

  export type AchievementCreateOrConnectWithoutUnlockedAchievementsInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutUnlockedAchievementsInput, AchievementUncheckedCreateWithoutUnlockedAchievementsInput>
  }

  export type UserUpsertWithoutAchievementsInput = {
    update: XOR<UserUpdateWithoutAchievementsInput, UserUncheckedUpdateWithoutAchievementsInput>
    create: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAchievementsInput, UserUncheckedUpdateWithoutAchievementsInput>
  }

  export type UserUpdateWithoutAchievementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAchievementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AchievementUpsertWithoutUnlockedAchievementsInput = {
    update: XOR<AchievementUpdateWithoutUnlockedAchievementsInput, AchievementUncheckedUpdateWithoutUnlockedAchievementsInput>
    create: XOR<AchievementCreateWithoutUnlockedAchievementsInput, AchievementUncheckedCreateWithoutUnlockedAchievementsInput>
    where?: AchievementWhereInput
  }

  export type AchievementUpdateToOneWithWhereWithoutUnlockedAchievementsInput = {
    where?: AchievementWhereInput
    data: XOR<AchievementUpdateWithoutUnlockedAchievementsInput, AchievementUncheckedUpdateWithoutUnlockedAchievementsInput>
  }

  export type AchievementUpdateWithoutUnlockedAchievementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type AchievementUncheckedUpdateWithoutUnlockedAchievementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type GameCreateWithoutDlcsInput = {
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    reviews?: ReviewCreateNestedManyWithoutGameInput
    purchases?: PurchaseCreateNestedManyWithoutGameInput
    achievements?: AchievementCreateNestedManyWithoutGameInput
    genres?: GameGenderCreateNestedManyWithoutGameInput
    platforms?: GamePlatformCreateNestedManyWithoutGameInput
    tags?: GameTagCreateNestedManyWithoutGameInput
    developer: DeveloperCreateNestedOneWithoutGamesInput
  }

  export type GameUncheckedCreateWithoutDlcsInput = {
    id?: number
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    developerId: number
    reviews?: ReviewUncheckedCreateNestedManyWithoutGameInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutGameInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutGameInput
    genres?: GameGenderUncheckedCreateNestedManyWithoutGameInput
    platforms?: GamePlatformUncheckedCreateNestedManyWithoutGameInput
    tags?: GameTagUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutDlcsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutDlcsInput, GameUncheckedCreateWithoutDlcsInput>
  }

  export type GameUpsertWithoutDlcsInput = {
    update: XOR<GameUpdateWithoutDlcsInput, GameUncheckedUpdateWithoutDlcsInput>
    create: XOR<GameCreateWithoutDlcsInput, GameUncheckedCreateWithoutDlcsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutDlcsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutDlcsInput, GameUncheckedUpdateWithoutDlcsInput>
  }

  export type GameUpdateWithoutDlcsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    reviews?: ReviewUpdateManyWithoutGameNestedInput
    purchases?: PurchaseUpdateManyWithoutGameNestedInput
    achievements?: AchievementUpdateManyWithoutGameNestedInput
    genres?: GameGenderUpdateManyWithoutGameNestedInput
    platforms?: GamePlatformUpdateManyWithoutGameNestedInput
    tags?: GameTagUpdateManyWithoutGameNestedInput
    developer?: DeveloperUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutDlcsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    developerId?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewUncheckedUpdateManyWithoutGameNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutGameNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutGameNestedInput
    genres?: GameGenderUncheckedUpdateManyWithoutGameNestedInput
    platforms?: GamePlatformUncheckedUpdateManyWithoutGameNestedInput
    tags?: GameTagUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateWithoutGenresInput = {
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    reviews?: ReviewCreateNestedManyWithoutGameInput
    purchases?: PurchaseCreateNestedManyWithoutGameInput
    achievements?: AchievementCreateNestedManyWithoutGameInput
    dlcs?: DlcCreateNestedManyWithoutBaseGameInput
    platforms?: GamePlatformCreateNestedManyWithoutGameInput
    tags?: GameTagCreateNestedManyWithoutGameInput
    developer: DeveloperCreateNestedOneWithoutGamesInput
  }

  export type GameUncheckedCreateWithoutGenresInput = {
    id?: number
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    developerId: number
    reviews?: ReviewUncheckedCreateNestedManyWithoutGameInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutGameInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutGameInput
    dlcs?: DlcUncheckedCreateNestedManyWithoutBaseGameInput
    platforms?: GamePlatformUncheckedCreateNestedManyWithoutGameInput
    tags?: GameTagUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutGenresInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGenresInput, GameUncheckedCreateWithoutGenresInput>
  }

  export type GenderCreateWithoutGamesInput = {
    name: string
  }

  export type GenderUncheckedCreateWithoutGamesInput = {
    id?: number
    name: string
  }

  export type GenderCreateOrConnectWithoutGamesInput = {
    where: GenderWhereUniqueInput
    create: XOR<GenderCreateWithoutGamesInput, GenderUncheckedCreateWithoutGamesInput>
  }

  export type GameUpsertWithoutGenresInput = {
    update: XOR<GameUpdateWithoutGenresInput, GameUncheckedUpdateWithoutGenresInput>
    create: XOR<GameCreateWithoutGenresInput, GameUncheckedCreateWithoutGenresInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutGenresInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutGenresInput, GameUncheckedUpdateWithoutGenresInput>
  }

  export type GameUpdateWithoutGenresInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    reviews?: ReviewUpdateManyWithoutGameNestedInput
    purchases?: PurchaseUpdateManyWithoutGameNestedInput
    achievements?: AchievementUpdateManyWithoutGameNestedInput
    dlcs?: DlcUpdateManyWithoutBaseGameNestedInput
    platforms?: GamePlatformUpdateManyWithoutGameNestedInput
    tags?: GameTagUpdateManyWithoutGameNestedInput
    developer?: DeveloperUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    developerId?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewUncheckedUpdateManyWithoutGameNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutGameNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutGameNestedInput
    dlcs?: DlcUncheckedUpdateManyWithoutBaseGameNestedInput
    platforms?: GamePlatformUncheckedUpdateManyWithoutGameNestedInput
    tags?: GameTagUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GenderUpsertWithoutGamesInput = {
    update: XOR<GenderUpdateWithoutGamesInput, GenderUncheckedUpdateWithoutGamesInput>
    create: XOR<GenderCreateWithoutGamesInput, GenderUncheckedCreateWithoutGamesInput>
    where?: GenderWhereInput
  }

  export type GenderUpdateToOneWithWhereWithoutGamesInput = {
    where?: GenderWhereInput
    data: XOR<GenderUpdateWithoutGamesInput, GenderUncheckedUpdateWithoutGamesInput>
  }

  export type GenderUpdateWithoutGamesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenderUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GameCreateWithoutTagsInput = {
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    reviews?: ReviewCreateNestedManyWithoutGameInput
    purchases?: PurchaseCreateNestedManyWithoutGameInput
    achievements?: AchievementCreateNestedManyWithoutGameInput
    dlcs?: DlcCreateNestedManyWithoutBaseGameInput
    genres?: GameGenderCreateNestedManyWithoutGameInput
    platforms?: GamePlatformCreateNestedManyWithoutGameInput
    developer: DeveloperCreateNestedOneWithoutGamesInput
  }

  export type GameUncheckedCreateWithoutTagsInput = {
    id?: number
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    developerId: number
    reviews?: ReviewUncheckedCreateNestedManyWithoutGameInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutGameInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutGameInput
    dlcs?: DlcUncheckedCreateNestedManyWithoutBaseGameInput
    genres?: GameGenderUncheckedCreateNestedManyWithoutGameInput
    platforms?: GamePlatformUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutTagsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutTagsInput, GameUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutGamesInput = {
    name: string
  }

  export type TagUncheckedCreateWithoutGamesInput = {
    id?: number
    name: string
  }

  export type TagCreateOrConnectWithoutGamesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutGamesInput, TagUncheckedCreateWithoutGamesInput>
  }

  export type GameUpsertWithoutTagsInput = {
    update: XOR<GameUpdateWithoutTagsInput, GameUncheckedUpdateWithoutTagsInput>
    create: XOR<GameCreateWithoutTagsInput, GameUncheckedCreateWithoutTagsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutTagsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutTagsInput, GameUncheckedUpdateWithoutTagsInput>
  }

  export type GameUpdateWithoutTagsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    reviews?: ReviewUpdateManyWithoutGameNestedInput
    purchases?: PurchaseUpdateManyWithoutGameNestedInput
    achievements?: AchievementUpdateManyWithoutGameNestedInput
    dlcs?: DlcUpdateManyWithoutBaseGameNestedInput
    genres?: GameGenderUpdateManyWithoutGameNestedInput
    platforms?: GamePlatformUpdateManyWithoutGameNestedInput
    developer?: DeveloperUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    developerId?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewUncheckedUpdateManyWithoutGameNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutGameNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutGameNestedInput
    dlcs?: DlcUncheckedUpdateManyWithoutBaseGameNestedInput
    genres?: GameGenderUncheckedUpdateManyWithoutGameNestedInput
    platforms?: GamePlatformUncheckedUpdateManyWithoutGameNestedInput
  }

  export type TagUpsertWithoutGamesInput = {
    update: XOR<TagUpdateWithoutGamesInput, TagUncheckedUpdateWithoutGamesInput>
    create: XOR<TagCreateWithoutGamesInput, TagUncheckedCreateWithoutGamesInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutGamesInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutGamesInput, TagUncheckedUpdateWithoutGamesInput>
  }

  export type TagUpdateWithoutGamesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GameCreateWithoutPlatformsInput = {
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    reviews?: ReviewCreateNestedManyWithoutGameInput
    purchases?: PurchaseCreateNestedManyWithoutGameInput
    achievements?: AchievementCreateNestedManyWithoutGameInput
    dlcs?: DlcCreateNestedManyWithoutBaseGameInput
    genres?: GameGenderCreateNestedManyWithoutGameInput
    tags?: GameTagCreateNestedManyWithoutGameInput
    developer: DeveloperCreateNestedOneWithoutGamesInput
  }

  export type GameUncheckedCreateWithoutPlatformsInput = {
    id?: number
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
    developerId: number
    reviews?: ReviewUncheckedCreateNestedManyWithoutGameInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutGameInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutGameInput
    dlcs?: DlcUncheckedCreateNestedManyWithoutBaseGameInput
    genres?: GameGenderUncheckedCreateNestedManyWithoutGameInput
    tags?: GameTagUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPlatformsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlatformsInput, GameUncheckedCreateWithoutPlatformsInput>
  }

  export type PlatformCreateWithoutGamesInput = {
    name: string
  }

  export type PlatformUncheckedCreateWithoutGamesInput = {
    id?: number
    name: string
  }

  export type PlatformCreateOrConnectWithoutGamesInput = {
    where: PlatformWhereUniqueInput
    create: XOR<PlatformCreateWithoutGamesInput, PlatformUncheckedCreateWithoutGamesInput>
  }

  export type GameUpsertWithoutPlatformsInput = {
    update: XOR<GameUpdateWithoutPlatformsInput, GameUncheckedUpdateWithoutPlatformsInput>
    create: XOR<GameCreateWithoutPlatformsInput, GameUncheckedCreateWithoutPlatformsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutPlatformsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutPlatformsInput, GameUncheckedUpdateWithoutPlatformsInput>
  }

  export type GameUpdateWithoutPlatformsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    reviews?: ReviewUpdateManyWithoutGameNestedInput
    purchases?: PurchaseUpdateManyWithoutGameNestedInput
    achievements?: AchievementUpdateManyWithoutGameNestedInput
    dlcs?: DlcUpdateManyWithoutBaseGameNestedInput
    genres?: GameGenderUpdateManyWithoutGameNestedInput
    tags?: GameTagUpdateManyWithoutGameNestedInput
    developer?: DeveloperUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutPlatformsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    developerId?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewUncheckedUpdateManyWithoutGameNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutGameNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutGameNestedInput
    dlcs?: DlcUncheckedUpdateManyWithoutBaseGameNestedInput
    genres?: GameGenderUncheckedUpdateManyWithoutGameNestedInput
    tags?: GameTagUncheckedUpdateManyWithoutGameNestedInput
  }

  export type PlatformUpsertWithoutGamesInput = {
    update: XOR<PlatformUpdateWithoutGamesInput, PlatformUncheckedUpdateWithoutGamesInput>
    create: XOR<PlatformCreateWithoutGamesInput, PlatformUncheckedCreateWithoutGamesInput>
    where?: PlatformWhereInput
  }

  export type PlatformUpdateToOneWithWhereWithoutGamesInput = {
    where?: PlatformWhereInput
    data: XOR<PlatformUpdateWithoutGamesInput, PlatformUncheckedUpdateWithoutGamesInput>
  }

  export type PlatformUpdateWithoutGamesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PlatformUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateManyUserInput = {
    rating: number
    comment?: string | null
    gameId: number
  }

  export type PurchaseCreateManyUserInput = {
    purchaseDate?: Date | string
    paidPrice: number
    gameId: number
  }

  export type UnlockedAchievementCreateManyUserInput = {
    unlockDate?: Date | string
    achievementId: number
  }

  export type ReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    game?: GameUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseUpdateWithoutUserInput = {
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidPrice?: FloatFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidPrice?: FloatFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidPrice?: FloatFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type UnlockedAchievementUpdateWithoutUserInput = {
    unlockDate?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateOneRequiredWithoutUnlockedAchievementsNestedInput
  }

  export type UnlockedAchievementUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    unlockDate?: DateTimeFieldUpdateOperationsInput | Date | string
    achievementId?: IntFieldUpdateOperationsInput | number
  }

  export type UnlockedAchievementUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    unlockDate?: DateTimeFieldUpdateOperationsInput | Date | string
    achievementId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyGameInput = {
    rating: number
    comment?: string | null
    userId: number
  }

  export type PurchaseCreateManyGameInput = {
    purchaseDate?: Date | string
    paidPrice: number
    userId: number
  }

  export type AchievementCreateManyGameInput = {
    name: string
    description?: string | null
    points: number
  }

  export type DlcCreateManyBaseGameInput = {
    name: string
    description?: string | null
    price: number
    releaseDate?: Date | string | null
  }

  export type GameGenderCreateManyGameInput = {
    genderId: number
  }

  export type GamePlatformCreateManyGameInput = {
    platformId: number
  }

  export type GameTagCreateManyGameInput = {
    tagId: number
  }

  export type ReviewUpdateWithoutGameInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseUpdateWithoutGameInput = {
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidPrice?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidPrice?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidPrice?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AchievementUpdateWithoutGameInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    unlockedAchievements?: UnlockedAchievementUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    unlockedAchievements?: UnlockedAchievementUncheckedUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
  }

  export type DlcUpdateWithoutBaseGameInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DlcUncheckedUpdateWithoutBaseGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DlcUncheckedUpdateManyWithoutBaseGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GameGenderUpdateWithoutGameInput = {
    genre?: GenderUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameGenderUncheckedUpdateWithoutGameInput = {
    genderId?: IntFieldUpdateOperationsInput | number
  }

  export type GameGenderUncheckedUpdateManyWithoutGameInput = {
    genderId?: IntFieldUpdateOperationsInput | number
  }

  export type GamePlatformUpdateWithoutGameInput = {
    platform?: PlatformUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GamePlatformUncheckedUpdateWithoutGameInput = {
    platformId?: IntFieldUpdateOperationsInput | number
  }

  export type GamePlatformUncheckedUpdateManyWithoutGameInput = {
    platformId?: IntFieldUpdateOperationsInput | number
  }

  export type GameTagUpdateWithoutGameInput = {
    tag?: TagUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameTagUncheckedUpdateWithoutGameInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type GameTagUncheckedUpdateManyWithoutGameInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type GameCreateManyDeveloperInput = {
    name: string
    description?: string | null
    releaseDate?: Date | string | null
    price: number
  }

  export type GameUpdateWithoutDeveloperInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    reviews?: ReviewUpdateManyWithoutGameNestedInput
    purchases?: PurchaseUpdateManyWithoutGameNestedInput
    achievements?: AchievementUpdateManyWithoutGameNestedInput
    dlcs?: DlcUpdateManyWithoutBaseGameNestedInput
    genres?: GameGenderUpdateManyWithoutGameNestedInput
    platforms?: GamePlatformUpdateManyWithoutGameNestedInput
    tags?: GameTagUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutDeveloperInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    reviews?: ReviewUncheckedUpdateManyWithoutGameNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutGameNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutGameNestedInput
    dlcs?: DlcUncheckedUpdateManyWithoutBaseGameNestedInput
    genres?: GameGenderUncheckedUpdateManyWithoutGameNestedInput
    platforms?: GamePlatformUncheckedUpdateManyWithoutGameNestedInput
    tags?: GameTagUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutDeveloperInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type GamePlatformCreateManyPlatformInput = {
    gameId: number
  }

  export type GamePlatformUpdateWithoutPlatformInput = {
    game?: GameUpdateOneRequiredWithoutPlatformsNestedInput
  }

  export type GamePlatformUncheckedUpdateWithoutPlatformInput = {
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type GamePlatformUncheckedUpdateManyWithoutPlatformInput = {
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type GameGenderCreateManyGenreInput = {
    gameId: number
  }

  export type GameGenderUpdateWithoutGenreInput = {
    game?: GameUpdateOneRequiredWithoutGenresNestedInput
  }

  export type GameGenderUncheckedUpdateWithoutGenreInput = {
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type GameGenderUncheckedUpdateManyWithoutGenreInput = {
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type GameTagCreateManyTagInput = {
    gameId: number
  }

  export type GameTagUpdateWithoutTagInput = {
    game?: GameUpdateOneRequiredWithoutTagsNestedInput
  }

  export type GameTagUncheckedUpdateWithoutTagInput = {
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type GameTagUncheckedUpdateManyWithoutTagInput = {
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type UnlockedAchievementCreateManyAchievementInput = {
    unlockDate?: Date | string
    userId: number
  }

  export type UnlockedAchievementUpdateWithoutAchievementInput = {
    unlockDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type UnlockedAchievementUncheckedUpdateWithoutAchievementInput = {
    id?: IntFieldUpdateOperationsInput | number
    unlockDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UnlockedAchievementUncheckedUpdateManyWithoutAchievementInput = {
    id?: IntFieldUpdateOperationsInput | number
    unlockDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
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