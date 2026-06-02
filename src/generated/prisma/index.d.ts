
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cinema
 * 
 */
export type Cinema = $Result.DefaultSelection<Prisma.$CinemaPayload>
/**
 * Model Sala
 * 
 */
export type Sala = $Result.DefaultSelection<Prisma.$SalaPayload>
/**
 * Model Poutrona
 * 
 */
export type Poutrona = $Result.DefaultSelection<Prisma.$PoutronaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Cinemas
 * const cinemas = await prisma.cinema.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Cinemas
   * const cinemas = await prisma.cinema.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cinema`: Exposes CRUD operations for the **Cinema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cinemas
    * const cinemas = await prisma.cinema.findMany()
    * ```
    */
  get cinema(): Prisma.CinemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sala`: Exposes CRUD operations for the **Sala** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salas
    * const salas = await prisma.sala.findMany()
    * ```
    */
  get sala(): Prisma.SalaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poutrona`: Exposes CRUD operations for the **Poutrona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Poutronas
    * const poutronas = await prisma.poutrona.findMany()
    * ```
    */
  get poutrona(): Prisma.PoutronaDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Cinema: 'Cinema',
    Sala: 'Sala',
    Poutrona: 'Poutrona'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cinema" | "sala" | "poutrona"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cinema: {
        payload: Prisma.$CinemaPayload<ExtArgs>
        fields: Prisma.CinemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CinemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CinemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          findFirst: {
            args: Prisma.CinemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CinemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          findMany: {
            args: Prisma.CinemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>[]
          }
          create: {
            args: Prisma.CinemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          createMany: {
            args: Prisma.CinemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CinemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>[]
          }
          delete: {
            args: Prisma.CinemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          update: {
            args: Prisma.CinemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          deleteMany: {
            args: Prisma.CinemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CinemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CinemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>[]
          }
          upsert: {
            args: Prisma.CinemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          aggregate: {
            args: Prisma.CinemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCinema>
          }
          groupBy: {
            args: Prisma.CinemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CinemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CinemaCountArgs<ExtArgs>
            result: $Utils.Optional<CinemaCountAggregateOutputType> | number
          }
        }
      }
      Sala: {
        payload: Prisma.$SalaPayload<ExtArgs>
        fields: Prisma.SalaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findFirst: {
            args: Prisma.SalaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findMany: {
            args: Prisma.SalaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          create: {
            args: Prisma.SalaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          createMany: {
            args: Prisma.SalaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          delete: {
            args: Prisma.SalaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          update: {
            args: Prisma.SalaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          deleteMany: {
            args: Prisma.SalaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          upsert: {
            args: Prisma.SalaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          aggregate: {
            args: Prisma.SalaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSala>
          }
          groupBy: {
            args: Prisma.SalaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalaCountArgs<ExtArgs>
            result: $Utils.Optional<SalaCountAggregateOutputType> | number
          }
        }
      }
      Poutrona: {
        payload: Prisma.$PoutronaPayload<ExtArgs>
        fields: Prisma.PoutronaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoutronaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoutronaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoutronaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoutronaPayload>
          }
          findFirst: {
            args: Prisma.PoutronaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoutronaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoutronaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoutronaPayload>
          }
          findMany: {
            args: Prisma.PoutronaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoutronaPayload>[]
          }
          create: {
            args: Prisma.PoutronaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoutronaPayload>
          }
          createMany: {
            args: Prisma.PoutronaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoutronaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoutronaPayload>[]
          }
          delete: {
            args: Prisma.PoutronaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoutronaPayload>
          }
          update: {
            args: Prisma.PoutronaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoutronaPayload>
          }
          deleteMany: {
            args: Prisma.PoutronaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoutronaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoutronaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoutronaPayload>[]
          }
          upsert: {
            args: Prisma.PoutronaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoutronaPayload>
          }
          aggregate: {
            args: Prisma.PoutronaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoutrona>
          }
          groupBy: {
            args: Prisma.PoutronaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoutronaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoutronaCountArgs<ExtArgs>
            result: $Utils.Optional<PoutronaCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    cinema?: CinemaOmit
    sala?: SalaOmit
    poutrona?: PoutronaOmit
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
   * Count Type CinemaCountOutputType
   */

  export type CinemaCountOutputType = {
    salas: number
  }

  export type CinemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salas?: boolean | CinemaCountOutputTypeCountSalasArgs
  }

  // Custom InputTypes
  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaCountOutputType
     */
    select?: CinemaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeCountSalasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaWhereInput
  }


  /**
   * Count Type SalaCountOutputType
   */

  export type SalaCountOutputType = {
    poutronas: number
  }

  export type SalaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poutronas?: boolean | SalaCountOutputTypeCountPoutronasArgs
  }

  // Custom InputTypes
  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaCountOutputType
     */
    select?: SalaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeCountPoutronasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoutronaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cinema
   */

  export type AggregateCinema = {
    _count: CinemaCountAggregateOutputType | null
    _avg: CinemaAvgAggregateOutputType | null
    _sum: CinemaSumAggregateOutputType | null
    _min: CinemaMinAggregateOutputType | null
    _max: CinemaMaxAggregateOutputType | null
  }

  export type CinemaAvgAggregateOutputType = {
    id: number | null
  }

  export type CinemaSumAggregateOutputType = {
    id: number | null
  }

  export type CinemaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    endereco: string | null
  }

  export type CinemaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    endereco: string | null
  }

  export type CinemaCountAggregateOutputType = {
    id: number
    nome: number
    endereco: number
    _all: number
  }


  export type CinemaAvgAggregateInputType = {
    id?: true
  }

  export type CinemaSumAggregateInputType = {
    id?: true
  }

  export type CinemaMinAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
  }

  export type CinemaMaxAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
  }

  export type CinemaCountAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
    _all?: true
  }

  export type CinemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cinema to aggregate.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cinemas
    **/
    _count?: true | CinemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CinemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CinemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CinemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CinemaMaxAggregateInputType
  }

  export type GetCinemaAggregateType<T extends CinemaAggregateArgs> = {
        [P in keyof T & keyof AggregateCinema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCinema[P]>
      : GetScalarType<T[P], AggregateCinema[P]>
  }




  export type CinemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CinemaWhereInput
    orderBy?: CinemaOrderByWithAggregationInput | CinemaOrderByWithAggregationInput[]
    by: CinemaScalarFieldEnum[] | CinemaScalarFieldEnum
    having?: CinemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CinemaCountAggregateInputType | true
    _avg?: CinemaAvgAggregateInputType
    _sum?: CinemaSumAggregateInputType
    _min?: CinemaMinAggregateInputType
    _max?: CinemaMaxAggregateInputType
  }

  export type CinemaGroupByOutputType = {
    id: number
    nome: string
    endereco: string | null
    _count: CinemaCountAggregateOutputType | null
    _avg: CinemaAvgAggregateOutputType | null
    _sum: CinemaSumAggregateOutputType | null
    _min: CinemaMinAggregateOutputType | null
    _max: CinemaMaxAggregateOutputType | null
  }

  type GetCinemaGroupByPayload<T extends CinemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CinemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CinemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CinemaGroupByOutputType[P]>
            : GetScalarType<T[P], CinemaGroupByOutputType[P]>
        }
      >
    >


  export type CinemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
    salas?: boolean | Cinema$salasArgs<ExtArgs>
    _count?: boolean | CinemaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cinema"]>

  export type CinemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
  }, ExtArgs["result"]["cinema"]>

  export type CinemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
  }, ExtArgs["result"]["cinema"]>

  export type CinemaSelectScalar = {
    id?: boolean
    nome?: boolean
    endereco?: boolean
  }

  export type CinemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "endereco", ExtArgs["result"]["cinema"]>
  export type CinemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salas?: boolean | Cinema$salasArgs<ExtArgs>
    _count?: boolean | CinemaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CinemaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CinemaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CinemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cinema"
    objects: {
      salas: Prisma.$SalaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      endereco: string | null
    }, ExtArgs["result"]["cinema"]>
    composites: {}
  }

  type CinemaGetPayload<S extends boolean | null | undefined | CinemaDefaultArgs> = $Result.GetResult<Prisma.$CinemaPayload, S>

  type CinemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CinemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CinemaCountAggregateInputType | true
    }

  export interface CinemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cinema'], meta: { name: 'Cinema' } }
    /**
     * Find zero or one Cinema that matches the filter.
     * @param {CinemaFindUniqueArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CinemaFindUniqueArgs>(args: SelectSubset<T, CinemaFindUniqueArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cinema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CinemaFindUniqueOrThrowArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CinemaFindUniqueOrThrowArgs>(args: SelectSubset<T, CinemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cinema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindFirstArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CinemaFindFirstArgs>(args?: SelectSubset<T, CinemaFindFirstArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cinema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindFirstOrThrowArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CinemaFindFirstOrThrowArgs>(args?: SelectSubset<T, CinemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cinemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cinemas
     * const cinemas = await prisma.cinema.findMany()
     * 
     * // Get first 10 Cinemas
     * const cinemas = await prisma.cinema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cinemaWithIdOnly = await prisma.cinema.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CinemaFindManyArgs>(args?: SelectSubset<T, CinemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cinema.
     * @param {CinemaCreateArgs} args - Arguments to create a Cinema.
     * @example
     * // Create one Cinema
     * const Cinema = await prisma.cinema.create({
     *   data: {
     *     // ... data to create a Cinema
     *   }
     * })
     * 
     */
    create<T extends CinemaCreateArgs>(args: SelectSubset<T, CinemaCreateArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cinemas.
     * @param {CinemaCreateManyArgs} args - Arguments to create many Cinemas.
     * @example
     * // Create many Cinemas
     * const cinema = await prisma.cinema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CinemaCreateManyArgs>(args?: SelectSubset<T, CinemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cinemas and returns the data saved in the database.
     * @param {CinemaCreateManyAndReturnArgs} args - Arguments to create many Cinemas.
     * @example
     * // Create many Cinemas
     * const cinema = await prisma.cinema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cinemas and only return the `id`
     * const cinemaWithIdOnly = await prisma.cinema.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CinemaCreateManyAndReturnArgs>(args?: SelectSubset<T, CinemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cinema.
     * @param {CinemaDeleteArgs} args - Arguments to delete one Cinema.
     * @example
     * // Delete one Cinema
     * const Cinema = await prisma.cinema.delete({
     *   where: {
     *     // ... filter to delete one Cinema
     *   }
     * })
     * 
     */
    delete<T extends CinemaDeleteArgs>(args: SelectSubset<T, CinemaDeleteArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cinema.
     * @param {CinemaUpdateArgs} args - Arguments to update one Cinema.
     * @example
     * // Update one Cinema
     * const cinema = await prisma.cinema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CinemaUpdateArgs>(args: SelectSubset<T, CinemaUpdateArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cinemas.
     * @param {CinemaDeleteManyArgs} args - Arguments to filter Cinemas to delete.
     * @example
     * // Delete a few Cinemas
     * const { count } = await prisma.cinema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CinemaDeleteManyArgs>(args?: SelectSubset<T, CinemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cinemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cinemas
     * const cinema = await prisma.cinema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CinemaUpdateManyArgs>(args: SelectSubset<T, CinemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cinemas and returns the data updated in the database.
     * @param {CinemaUpdateManyAndReturnArgs} args - Arguments to update many Cinemas.
     * @example
     * // Update many Cinemas
     * const cinema = await prisma.cinema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cinemas and only return the `id`
     * const cinemaWithIdOnly = await prisma.cinema.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CinemaUpdateManyAndReturnArgs>(args: SelectSubset<T, CinemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cinema.
     * @param {CinemaUpsertArgs} args - Arguments to update or create a Cinema.
     * @example
     * // Update or create a Cinema
     * const cinema = await prisma.cinema.upsert({
     *   create: {
     *     // ... data to create a Cinema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cinema we want to update
     *   }
     * })
     */
    upsert<T extends CinemaUpsertArgs>(args: SelectSubset<T, CinemaUpsertArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cinemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaCountArgs} args - Arguments to filter Cinemas to count.
     * @example
     * // Count the number of Cinemas
     * const count = await prisma.cinema.count({
     *   where: {
     *     // ... the filter for the Cinemas we want to count
     *   }
     * })
    **/
    count<T extends CinemaCountArgs>(
      args?: Subset<T, CinemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CinemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cinema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CinemaAggregateArgs>(args: Subset<T, CinemaAggregateArgs>): Prisma.PrismaPromise<GetCinemaAggregateType<T>>

    /**
     * Group by Cinema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaGroupByArgs} args - Group by arguments.
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
      T extends CinemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CinemaGroupByArgs['orderBy'] }
        : { orderBy?: CinemaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CinemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCinemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cinema model
   */
  readonly fields: CinemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cinema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CinemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salas<T extends Cinema$salasArgs<ExtArgs> = {}>(args?: Subset<T, Cinema$salasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cinema model
   */
  interface CinemaFieldRefs {
    readonly id: FieldRef<"Cinema", 'Int'>
    readonly nome: FieldRef<"Cinema", 'String'>
    readonly endereco: FieldRef<"Cinema", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cinema findUnique
   */
  export type CinemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema findUniqueOrThrow
   */
  export type CinemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema findFirst
   */
  export type CinemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cinemas.
     */
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema findFirstOrThrow
   */
  export type CinemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cinemas.
     */
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema findMany
   */
  export type CinemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinemas to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cinemas.
     */
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema create
   */
  export type CinemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cinema.
     */
    data: XOR<CinemaCreateInput, CinemaUncheckedCreateInput>
  }

  /**
   * Cinema createMany
   */
  export type CinemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cinemas.
     */
    data: CinemaCreateManyInput | CinemaCreateManyInput[]
  }

  /**
   * Cinema createManyAndReturn
   */
  export type CinemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * The data used to create many Cinemas.
     */
    data: CinemaCreateManyInput | CinemaCreateManyInput[]
  }

  /**
   * Cinema update
   */
  export type CinemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cinema.
     */
    data: XOR<CinemaUpdateInput, CinemaUncheckedUpdateInput>
    /**
     * Choose, which Cinema to update.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema updateMany
   */
  export type CinemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cinemas.
     */
    data: XOR<CinemaUpdateManyMutationInput, CinemaUncheckedUpdateManyInput>
    /**
     * Filter which Cinemas to update
     */
    where?: CinemaWhereInput
    /**
     * Limit how many Cinemas to update.
     */
    limit?: number
  }

  /**
   * Cinema updateManyAndReturn
   */
  export type CinemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * The data used to update Cinemas.
     */
    data: XOR<CinemaUpdateManyMutationInput, CinemaUncheckedUpdateManyInput>
    /**
     * Filter which Cinemas to update
     */
    where?: CinemaWhereInput
    /**
     * Limit how many Cinemas to update.
     */
    limit?: number
  }

  /**
   * Cinema upsert
   */
  export type CinemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cinema to update in case it exists.
     */
    where: CinemaWhereUniqueInput
    /**
     * In case the Cinema found by the `where` argument doesn't exist, create a new Cinema with this data.
     */
    create: XOR<CinemaCreateInput, CinemaUncheckedCreateInput>
    /**
     * In case the Cinema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CinemaUpdateInput, CinemaUncheckedUpdateInput>
  }

  /**
   * Cinema delete
   */
  export type CinemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter which Cinema to delete.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema deleteMany
   */
  export type CinemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cinemas to delete
     */
    where?: CinemaWhereInput
    /**
     * Limit how many Cinemas to delete.
     */
    limit?: number
  }

  /**
   * Cinema.salas
   */
  export type Cinema$salasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    where?: SalaWhereInput
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    cursor?: SalaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Cinema without action
   */
  export type CinemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
  }


  /**
   * Model Sala
   */

  export type AggregateSala = {
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  export type SalaAvgAggregateOutputType = {
    id: number | null
    capacidade: number | null
    cinemaId: number | null
  }

  export type SalaSumAggregateOutputType = {
    id: number | null
    capacidade: number | null
    cinemaId: number | null
  }

  export type SalaMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    capacidade: number | null
    cinemaId: number | null
  }

  export type SalaMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    capacidade: number | null
    cinemaId: number | null
  }

  export type SalaCountAggregateOutputType = {
    id: number
    codigo: number
    capacidade: number
    cinemaId: number
    _all: number
  }


  export type SalaAvgAggregateInputType = {
    id?: true
    capacidade?: true
    cinemaId?: true
  }

  export type SalaSumAggregateInputType = {
    id?: true
    capacidade?: true
    cinemaId?: true
  }

  export type SalaMinAggregateInputType = {
    id?: true
    codigo?: true
    capacidade?: true
    cinemaId?: true
  }

  export type SalaMaxAggregateInputType = {
    id?: true
    codigo?: true
    capacidade?: true
    cinemaId?: true
  }

  export type SalaCountAggregateInputType = {
    id?: true
    codigo?: true
    capacidade?: true
    cinemaId?: true
    _all?: true
  }

  export type SalaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sala to aggregate.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Salas
    **/
    _count?: true | SalaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaMaxAggregateInputType
  }

  export type GetSalaAggregateType<T extends SalaAggregateArgs> = {
        [P in keyof T & keyof AggregateSala]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSala[P]>
      : GetScalarType<T[P], AggregateSala[P]>
  }




  export type SalaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaWhereInput
    orderBy?: SalaOrderByWithAggregationInput | SalaOrderByWithAggregationInput[]
    by: SalaScalarFieldEnum[] | SalaScalarFieldEnum
    having?: SalaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaCountAggregateInputType | true
    _avg?: SalaAvgAggregateInputType
    _sum?: SalaSumAggregateInputType
    _min?: SalaMinAggregateInputType
    _max?: SalaMaxAggregateInputType
  }

  export type SalaGroupByOutputType = {
    id: number
    codigo: string
    capacidade: number
    cinemaId: number
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  type GetSalaGroupByPayload<T extends SalaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaGroupByOutputType[P]>
            : GetScalarType<T[P], SalaGroupByOutputType[P]>
        }
      >
    >


  export type SalaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    capacidade?: boolean
    cinemaId?: boolean
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
    poutronas?: boolean | Sala$poutronasArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    capacidade?: boolean
    cinemaId?: boolean
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    capacidade?: boolean
    cinemaId?: boolean
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectScalar = {
    id?: boolean
    codigo?: boolean
    capacidade?: boolean
    cinemaId?: boolean
  }

  export type SalaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "capacidade" | "cinemaId", ExtArgs["result"]["sala"]>
  export type SalaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
    poutronas?: boolean | Sala$poutronasArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
  }
  export type SalaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
  }

  export type $SalaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sala"
    objects: {
      cinema: Prisma.$CinemaPayload<ExtArgs>
      poutronas: Prisma.$PoutronaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string
      capacidade: number
      cinemaId: number
    }, ExtArgs["result"]["sala"]>
    composites: {}
  }

  type SalaGetPayload<S extends boolean | null | undefined | SalaDefaultArgs> = $Result.GetResult<Prisma.$SalaPayload, S>

  type SalaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaCountAggregateInputType | true
    }

  export interface SalaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sala'], meta: { name: 'Sala' } }
    /**
     * Find zero or one Sala that matches the filter.
     * @param {SalaFindUniqueArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaFindUniqueArgs>(args: SelectSubset<T, SalaFindUniqueArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sala that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaFindUniqueOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaFindFirstArgs>(args?: SelectSubset<T, SalaFindFirstArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salas
     * const salas = await prisma.sala.findMany()
     * 
     * // Get first 10 Salas
     * const salas = await prisma.sala.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salaWithIdOnly = await prisma.sala.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalaFindManyArgs>(args?: SelectSubset<T, SalaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sala.
     * @param {SalaCreateArgs} args - Arguments to create a Sala.
     * @example
     * // Create one Sala
     * const Sala = await prisma.sala.create({
     *   data: {
     *     // ... data to create a Sala
     *   }
     * })
     * 
     */
    create<T extends SalaCreateArgs>(args: SelectSubset<T, SalaCreateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salas.
     * @param {SalaCreateManyArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaCreateManyArgs>(args?: SelectSubset<T, SalaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Salas and returns the data saved in the database.
     * @param {SalaCreateManyAndReturnArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Salas and only return the `id`
     * const salaWithIdOnly = await prisma.sala.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalaCreateManyAndReturnArgs>(args?: SelectSubset<T, SalaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sala.
     * @param {SalaDeleteArgs} args - Arguments to delete one Sala.
     * @example
     * // Delete one Sala
     * const Sala = await prisma.sala.delete({
     *   where: {
     *     // ... filter to delete one Sala
     *   }
     * })
     * 
     */
    delete<T extends SalaDeleteArgs>(args: SelectSubset<T, SalaDeleteArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sala.
     * @param {SalaUpdateArgs} args - Arguments to update one Sala.
     * @example
     * // Update one Sala
     * const sala = await prisma.sala.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaUpdateArgs>(args: SelectSubset<T, SalaUpdateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salas.
     * @param {SalaDeleteManyArgs} args - Arguments to filter Salas to delete.
     * @example
     * // Delete a few Salas
     * const { count } = await prisma.sala.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaDeleteManyArgs>(args?: SelectSubset<T, SalaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salas
     * const sala = await prisma.sala.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaUpdateManyArgs>(args: SelectSubset<T, SalaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas and returns the data updated in the database.
     * @param {SalaUpdateManyAndReturnArgs} args - Arguments to update many Salas.
     * @example
     * // Update many Salas
     * const sala = await prisma.sala.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Salas and only return the `id`
     * const salaWithIdOnly = await prisma.sala.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalaUpdateManyAndReturnArgs>(args: SelectSubset<T, SalaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sala.
     * @param {SalaUpsertArgs} args - Arguments to update or create a Sala.
     * @example
     * // Update or create a Sala
     * const sala = await prisma.sala.upsert({
     *   create: {
     *     // ... data to create a Sala
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sala we want to update
     *   }
     * })
     */
    upsert<T extends SalaUpsertArgs>(args: SelectSubset<T, SalaUpsertArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaCountArgs} args - Arguments to filter Salas to count.
     * @example
     * // Count the number of Salas
     * const count = await prisma.sala.count({
     *   where: {
     *     // ... the filter for the Salas we want to count
     *   }
     * })
    **/
    count<T extends SalaCountArgs>(
      args?: Subset<T, SalaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalaAggregateArgs>(args: Subset<T, SalaAggregateArgs>): Prisma.PrismaPromise<GetSalaAggregateType<T>>

    /**
     * Group by Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaGroupByArgs} args - Group by arguments.
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
      T extends SalaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaGroupByArgs['orderBy'] }
        : { orderBy?: SalaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sala model
   */
  readonly fields: SalaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sala.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cinema<T extends CinemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CinemaDefaultArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    poutronas<T extends Sala$poutronasArgs<ExtArgs> = {}>(args?: Subset<T, Sala$poutronasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoutronaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sala model
   */
  interface SalaFieldRefs {
    readonly id: FieldRef<"Sala", 'Int'>
    readonly codigo: FieldRef<"Sala", 'String'>
    readonly capacidade: FieldRef<"Sala", 'Int'>
    readonly cinemaId: FieldRef<"Sala", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sala findUnique
   */
  export type SalaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findUniqueOrThrow
   */
  export type SalaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findFirst
   */
  export type SalaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findFirstOrThrow
   */
  export type SalaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findMany
   */
  export type SalaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Salas to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala create
   */
  export type SalaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to create a Sala.
     */
    data: XOR<SalaCreateInput, SalaUncheckedCreateInput>
  }

  /**
   * Sala createMany
   */
  export type SalaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Salas.
     */
    data: SalaCreateManyInput | SalaCreateManyInput[]
  }

  /**
   * Sala createManyAndReturn
   */
  export type SalaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * The data used to create many Salas.
     */
    data: SalaCreateManyInput | SalaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sala update
   */
  export type SalaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to update a Sala.
     */
    data: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
    /**
     * Choose, which Sala to update.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala updateMany
   */
  export type SalaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Salas.
     */
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyInput>
    /**
     * Filter which Salas to update
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to update.
     */
    limit?: number
  }

  /**
   * Sala updateManyAndReturn
   */
  export type SalaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * The data used to update Salas.
     */
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyInput>
    /**
     * Filter which Salas to update
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sala upsert
   */
  export type SalaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The filter to search for the Sala to update in case it exists.
     */
    where: SalaWhereUniqueInput
    /**
     * In case the Sala found by the `where` argument doesn't exist, create a new Sala with this data.
     */
    create: XOR<SalaCreateInput, SalaUncheckedCreateInput>
    /**
     * In case the Sala was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
  }

  /**
   * Sala delete
   */
  export type SalaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter which Sala to delete.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala deleteMany
   */
  export type SalaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salas to delete
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to delete.
     */
    limit?: number
  }

  /**
   * Sala.poutronas
   */
  export type Sala$poutronasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poutrona
     */
    select?: PoutronaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poutrona
     */
    omit?: PoutronaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoutronaInclude<ExtArgs> | null
    where?: PoutronaWhereInput
    orderBy?: PoutronaOrderByWithRelationInput | PoutronaOrderByWithRelationInput[]
    cursor?: PoutronaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PoutronaScalarFieldEnum | PoutronaScalarFieldEnum[]
  }

  /**
   * Sala without action
   */
  export type SalaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
  }


  /**
   * Model Poutrona
   */

  export type AggregatePoutrona = {
    _count: PoutronaCountAggregateOutputType | null
    _avg: PoutronaAvgAggregateOutputType | null
    _sum: PoutronaSumAggregateOutputType | null
    _min: PoutronaMinAggregateOutputType | null
    _max: PoutronaMaxAggregateOutputType | null
  }

  export type PoutronaAvgAggregateOutputType = {
    id: number | null
    numero: number | null
    salaId: number | null
  }

  export type PoutronaSumAggregateOutputType = {
    id: number | null
    numero: number | null
    salaId: number | null
  }

  export type PoutronaMinAggregateOutputType = {
    id: number | null
    numero: number | null
    categoria: string | null
    salaId: number | null
    status: boolean | null
  }

  export type PoutronaMaxAggregateOutputType = {
    id: number | null
    numero: number | null
    categoria: string | null
    salaId: number | null
    status: boolean | null
  }

  export type PoutronaCountAggregateOutputType = {
    id: number
    numero: number
    categoria: number
    salaId: number
    status: number
    _all: number
  }


  export type PoutronaAvgAggregateInputType = {
    id?: true
    numero?: true
    salaId?: true
  }

  export type PoutronaSumAggregateInputType = {
    id?: true
    numero?: true
    salaId?: true
  }

  export type PoutronaMinAggregateInputType = {
    id?: true
    numero?: true
    categoria?: true
    salaId?: true
    status?: true
  }

  export type PoutronaMaxAggregateInputType = {
    id?: true
    numero?: true
    categoria?: true
    salaId?: true
    status?: true
  }

  export type PoutronaCountAggregateInputType = {
    id?: true
    numero?: true
    categoria?: true
    salaId?: true
    status?: true
    _all?: true
  }

  export type PoutronaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Poutrona to aggregate.
     */
    where?: PoutronaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poutronas to fetch.
     */
    orderBy?: PoutronaOrderByWithRelationInput | PoutronaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoutronaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poutronas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poutronas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Poutronas
    **/
    _count?: true | PoutronaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoutronaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoutronaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoutronaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoutronaMaxAggregateInputType
  }

  export type GetPoutronaAggregateType<T extends PoutronaAggregateArgs> = {
        [P in keyof T & keyof AggregatePoutrona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoutrona[P]>
      : GetScalarType<T[P], AggregatePoutrona[P]>
  }




  export type PoutronaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoutronaWhereInput
    orderBy?: PoutronaOrderByWithAggregationInput | PoutronaOrderByWithAggregationInput[]
    by: PoutronaScalarFieldEnum[] | PoutronaScalarFieldEnum
    having?: PoutronaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoutronaCountAggregateInputType | true
    _avg?: PoutronaAvgAggregateInputType
    _sum?: PoutronaSumAggregateInputType
    _min?: PoutronaMinAggregateInputType
    _max?: PoutronaMaxAggregateInputType
  }

  export type PoutronaGroupByOutputType = {
    id: number
    numero: number
    categoria: string
    salaId: number
    status: boolean
    _count: PoutronaCountAggregateOutputType | null
    _avg: PoutronaAvgAggregateOutputType | null
    _sum: PoutronaSumAggregateOutputType | null
    _min: PoutronaMinAggregateOutputType | null
    _max: PoutronaMaxAggregateOutputType | null
  }

  type GetPoutronaGroupByPayload<T extends PoutronaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoutronaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoutronaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoutronaGroupByOutputType[P]>
            : GetScalarType<T[P], PoutronaGroupByOutputType[P]>
        }
      >
    >


  export type PoutronaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    categoria?: boolean
    salaId?: boolean
    status?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poutrona"]>

  export type PoutronaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    categoria?: boolean
    salaId?: boolean
    status?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poutrona"]>

  export type PoutronaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    categoria?: boolean
    salaId?: boolean
    status?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poutrona"]>

  export type PoutronaSelectScalar = {
    id?: boolean
    numero?: boolean
    categoria?: boolean
    salaId?: boolean
    status?: boolean
  }

  export type PoutronaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "categoria" | "salaId" | "status", ExtArgs["result"]["poutrona"]>
  export type PoutronaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }
  export type PoutronaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }
  export type PoutronaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }

  export type $PoutronaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Poutrona"
    objects: {
      sala: Prisma.$SalaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: number
      categoria: string
      salaId: number
      status: boolean
    }, ExtArgs["result"]["poutrona"]>
    composites: {}
  }

  type PoutronaGetPayload<S extends boolean | null | undefined | PoutronaDefaultArgs> = $Result.GetResult<Prisma.$PoutronaPayload, S>

  type PoutronaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoutronaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoutronaCountAggregateInputType | true
    }

  export interface PoutronaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Poutrona'], meta: { name: 'Poutrona' } }
    /**
     * Find zero or one Poutrona that matches the filter.
     * @param {PoutronaFindUniqueArgs} args - Arguments to find a Poutrona
     * @example
     * // Get one Poutrona
     * const poutrona = await prisma.poutrona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoutronaFindUniqueArgs>(args: SelectSubset<T, PoutronaFindUniqueArgs<ExtArgs>>): Prisma__PoutronaClient<$Result.GetResult<Prisma.$PoutronaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Poutrona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoutronaFindUniqueOrThrowArgs} args - Arguments to find a Poutrona
     * @example
     * // Get one Poutrona
     * const poutrona = await prisma.poutrona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoutronaFindUniqueOrThrowArgs>(args: SelectSubset<T, PoutronaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoutronaClient<$Result.GetResult<Prisma.$PoutronaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poutrona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoutronaFindFirstArgs} args - Arguments to find a Poutrona
     * @example
     * // Get one Poutrona
     * const poutrona = await prisma.poutrona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoutronaFindFirstArgs>(args?: SelectSubset<T, PoutronaFindFirstArgs<ExtArgs>>): Prisma__PoutronaClient<$Result.GetResult<Prisma.$PoutronaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poutrona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoutronaFindFirstOrThrowArgs} args - Arguments to find a Poutrona
     * @example
     * // Get one Poutrona
     * const poutrona = await prisma.poutrona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoutronaFindFirstOrThrowArgs>(args?: SelectSubset<T, PoutronaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoutronaClient<$Result.GetResult<Prisma.$PoutronaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Poutronas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoutronaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Poutronas
     * const poutronas = await prisma.poutrona.findMany()
     * 
     * // Get first 10 Poutronas
     * const poutronas = await prisma.poutrona.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poutronaWithIdOnly = await prisma.poutrona.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoutronaFindManyArgs>(args?: SelectSubset<T, PoutronaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoutronaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Poutrona.
     * @param {PoutronaCreateArgs} args - Arguments to create a Poutrona.
     * @example
     * // Create one Poutrona
     * const Poutrona = await prisma.poutrona.create({
     *   data: {
     *     // ... data to create a Poutrona
     *   }
     * })
     * 
     */
    create<T extends PoutronaCreateArgs>(args: SelectSubset<T, PoutronaCreateArgs<ExtArgs>>): Prisma__PoutronaClient<$Result.GetResult<Prisma.$PoutronaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Poutronas.
     * @param {PoutronaCreateManyArgs} args - Arguments to create many Poutronas.
     * @example
     * // Create many Poutronas
     * const poutrona = await prisma.poutrona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoutronaCreateManyArgs>(args?: SelectSubset<T, PoutronaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Poutronas and returns the data saved in the database.
     * @param {PoutronaCreateManyAndReturnArgs} args - Arguments to create many Poutronas.
     * @example
     * // Create many Poutronas
     * const poutrona = await prisma.poutrona.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Poutronas and only return the `id`
     * const poutronaWithIdOnly = await prisma.poutrona.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoutronaCreateManyAndReturnArgs>(args?: SelectSubset<T, PoutronaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoutronaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Poutrona.
     * @param {PoutronaDeleteArgs} args - Arguments to delete one Poutrona.
     * @example
     * // Delete one Poutrona
     * const Poutrona = await prisma.poutrona.delete({
     *   where: {
     *     // ... filter to delete one Poutrona
     *   }
     * })
     * 
     */
    delete<T extends PoutronaDeleteArgs>(args: SelectSubset<T, PoutronaDeleteArgs<ExtArgs>>): Prisma__PoutronaClient<$Result.GetResult<Prisma.$PoutronaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Poutrona.
     * @param {PoutronaUpdateArgs} args - Arguments to update one Poutrona.
     * @example
     * // Update one Poutrona
     * const poutrona = await prisma.poutrona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoutronaUpdateArgs>(args: SelectSubset<T, PoutronaUpdateArgs<ExtArgs>>): Prisma__PoutronaClient<$Result.GetResult<Prisma.$PoutronaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Poutronas.
     * @param {PoutronaDeleteManyArgs} args - Arguments to filter Poutronas to delete.
     * @example
     * // Delete a few Poutronas
     * const { count } = await prisma.poutrona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoutronaDeleteManyArgs>(args?: SelectSubset<T, PoutronaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Poutronas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoutronaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Poutronas
     * const poutrona = await prisma.poutrona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoutronaUpdateManyArgs>(args: SelectSubset<T, PoutronaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Poutronas and returns the data updated in the database.
     * @param {PoutronaUpdateManyAndReturnArgs} args - Arguments to update many Poutronas.
     * @example
     * // Update many Poutronas
     * const poutrona = await prisma.poutrona.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Poutronas and only return the `id`
     * const poutronaWithIdOnly = await prisma.poutrona.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PoutronaUpdateManyAndReturnArgs>(args: SelectSubset<T, PoutronaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoutronaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Poutrona.
     * @param {PoutronaUpsertArgs} args - Arguments to update or create a Poutrona.
     * @example
     * // Update or create a Poutrona
     * const poutrona = await prisma.poutrona.upsert({
     *   create: {
     *     // ... data to create a Poutrona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Poutrona we want to update
     *   }
     * })
     */
    upsert<T extends PoutronaUpsertArgs>(args: SelectSubset<T, PoutronaUpsertArgs<ExtArgs>>): Prisma__PoutronaClient<$Result.GetResult<Prisma.$PoutronaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Poutronas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoutronaCountArgs} args - Arguments to filter Poutronas to count.
     * @example
     * // Count the number of Poutronas
     * const count = await prisma.poutrona.count({
     *   where: {
     *     // ... the filter for the Poutronas we want to count
     *   }
     * })
    **/
    count<T extends PoutronaCountArgs>(
      args?: Subset<T, PoutronaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoutronaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Poutrona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoutronaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PoutronaAggregateArgs>(args: Subset<T, PoutronaAggregateArgs>): Prisma.PrismaPromise<GetPoutronaAggregateType<T>>

    /**
     * Group by Poutrona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoutronaGroupByArgs} args - Group by arguments.
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
      T extends PoutronaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoutronaGroupByArgs['orderBy'] }
        : { orderBy?: PoutronaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PoutronaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoutronaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Poutrona model
   */
  readonly fields: PoutronaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Poutrona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoutronaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sala<T extends SalaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalaDefaultArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Poutrona model
   */
  interface PoutronaFieldRefs {
    readonly id: FieldRef<"Poutrona", 'Int'>
    readonly numero: FieldRef<"Poutrona", 'Int'>
    readonly categoria: FieldRef<"Poutrona", 'String'>
    readonly salaId: FieldRef<"Poutrona", 'Int'>
    readonly status: FieldRef<"Poutrona", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Poutrona findUnique
   */
  export type PoutronaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poutrona
     */
    select?: PoutronaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poutrona
     */
    omit?: PoutronaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoutronaInclude<ExtArgs> | null
    /**
     * Filter, which Poutrona to fetch.
     */
    where: PoutronaWhereUniqueInput
  }

  /**
   * Poutrona findUniqueOrThrow
   */
  export type PoutronaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poutrona
     */
    select?: PoutronaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poutrona
     */
    omit?: PoutronaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoutronaInclude<ExtArgs> | null
    /**
     * Filter, which Poutrona to fetch.
     */
    where: PoutronaWhereUniqueInput
  }

  /**
   * Poutrona findFirst
   */
  export type PoutronaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poutrona
     */
    select?: PoutronaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poutrona
     */
    omit?: PoutronaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoutronaInclude<ExtArgs> | null
    /**
     * Filter, which Poutrona to fetch.
     */
    where?: PoutronaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poutronas to fetch.
     */
    orderBy?: PoutronaOrderByWithRelationInput | PoutronaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Poutronas.
     */
    cursor?: PoutronaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poutronas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poutronas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Poutronas.
     */
    distinct?: PoutronaScalarFieldEnum | PoutronaScalarFieldEnum[]
  }

  /**
   * Poutrona findFirstOrThrow
   */
  export type PoutronaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poutrona
     */
    select?: PoutronaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poutrona
     */
    omit?: PoutronaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoutronaInclude<ExtArgs> | null
    /**
     * Filter, which Poutrona to fetch.
     */
    where?: PoutronaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poutronas to fetch.
     */
    orderBy?: PoutronaOrderByWithRelationInput | PoutronaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Poutronas.
     */
    cursor?: PoutronaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poutronas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poutronas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Poutronas.
     */
    distinct?: PoutronaScalarFieldEnum | PoutronaScalarFieldEnum[]
  }

  /**
   * Poutrona findMany
   */
  export type PoutronaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poutrona
     */
    select?: PoutronaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poutrona
     */
    omit?: PoutronaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoutronaInclude<ExtArgs> | null
    /**
     * Filter, which Poutronas to fetch.
     */
    where?: PoutronaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poutronas to fetch.
     */
    orderBy?: PoutronaOrderByWithRelationInput | PoutronaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Poutronas.
     */
    cursor?: PoutronaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poutronas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poutronas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Poutronas.
     */
    distinct?: PoutronaScalarFieldEnum | PoutronaScalarFieldEnum[]
  }

  /**
   * Poutrona create
   */
  export type PoutronaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poutrona
     */
    select?: PoutronaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poutrona
     */
    omit?: PoutronaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoutronaInclude<ExtArgs> | null
    /**
     * The data needed to create a Poutrona.
     */
    data: XOR<PoutronaCreateInput, PoutronaUncheckedCreateInput>
  }

  /**
   * Poutrona createMany
   */
  export type PoutronaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Poutronas.
     */
    data: PoutronaCreateManyInput | PoutronaCreateManyInput[]
  }

  /**
   * Poutrona createManyAndReturn
   */
  export type PoutronaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poutrona
     */
    select?: PoutronaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Poutrona
     */
    omit?: PoutronaOmit<ExtArgs> | null
    /**
     * The data used to create many Poutronas.
     */
    data: PoutronaCreateManyInput | PoutronaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoutronaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Poutrona update
   */
  export type PoutronaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poutrona
     */
    select?: PoutronaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poutrona
     */
    omit?: PoutronaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoutronaInclude<ExtArgs> | null
    /**
     * The data needed to update a Poutrona.
     */
    data: XOR<PoutronaUpdateInput, PoutronaUncheckedUpdateInput>
    /**
     * Choose, which Poutrona to update.
     */
    where: PoutronaWhereUniqueInput
  }

  /**
   * Poutrona updateMany
   */
  export type PoutronaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Poutronas.
     */
    data: XOR<PoutronaUpdateManyMutationInput, PoutronaUncheckedUpdateManyInput>
    /**
     * Filter which Poutronas to update
     */
    where?: PoutronaWhereInput
    /**
     * Limit how many Poutronas to update.
     */
    limit?: number
  }

  /**
   * Poutrona updateManyAndReturn
   */
  export type PoutronaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poutrona
     */
    select?: PoutronaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Poutrona
     */
    omit?: PoutronaOmit<ExtArgs> | null
    /**
     * The data used to update Poutronas.
     */
    data: XOR<PoutronaUpdateManyMutationInput, PoutronaUncheckedUpdateManyInput>
    /**
     * Filter which Poutronas to update
     */
    where?: PoutronaWhereInput
    /**
     * Limit how many Poutronas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoutronaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Poutrona upsert
   */
  export type PoutronaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poutrona
     */
    select?: PoutronaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poutrona
     */
    omit?: PoutronaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoutronaInclude<ExtArgs> | null
    /**
     * The filter to search for the Poutrona to update in case it exists.
     */
    where: PoutronaWhereUniqueInput
    /**
     * In case the Poutrona found by the `where` argument doesn't exist, create a new Poutrona with this data.
     */
    create: XOR<PoutronaCreateInput, PoutronaUncheckedCreateInput>
    /**
     * In case the Poutrona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoutronaUpdateInput, PoutronaUncheckedUpdateInput>
  }

  /**
   * Poutrona delete
   */
  export type PoutronaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poutrona
     */
    select?: PoutronaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poutrona
     */
    omit?: PoutronaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoutronaInclude<ExtArgs> | null
    /**
     * Filter which Poutrona to delete.
     */
    where: PoutronaWhereUniqueInput
  }

  /**
   * Poutrona deleteMany
   */
  export type PoutronaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Poutronas to delete
     */
    where?: PoutronaWhereInput
    /**
     * Limit how many Poutronas to delete.
     */
    limit?: number
  }

  /**
   * Poutrona without action
   */
  export type PoutronaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poutrona
     */
    select?: PoutronaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poutrona
     */
    omit?: PoutronaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoutronaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CinemaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    endereco: 'endereco'
  };

  export type CinemaScalarFieldEnum = (typeof CinemaScalarFieldEnum)[keyof typeof CinemaScalarFieldEnum]


  export const SalaScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    capacidade: 'capacidade',
    cinemaId: 'cinemaId'
  };

  export type SalaScalarFieldEnum = (typeof SalaScalarFieldEnum)[keyof typeof SalaScalarFieldEnum]


  export const PoutronaScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    categoria: 'categoria',
    salaId: 'salaId',
    status: 'status'
  };

  export type PoutronaScalarFieldEnum = (typeof PoutronaScalarFieldEnum)[keyof typeof PoutronaScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CinemaWhereInput = {
    AND?: CinemaWhereInput | CinemaWhereInput[]
    OR?: CinemaWhereInput[]
    NOT?: CinemaWhereInput | CinemaWhereInput[]
    id?: IntFilter<"Cinema"> | number
    nome?: StringFilter<"Cinema"> | string
    endereco?: StringNullableFilter<"Cinema"> | string | null
    salas?: SalaListRelationFilter
  }

  export type CinemaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrderInput | SortOrder
    salas?: SalaOrderByRelationAggregateInput
  }

  export type CinemaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CinemaWhereInput | CinemaWhereInput[]
    OR?: CinemaWhereInput[]
    NOT?: CinemaWhereInput | CinemaWhereInput[]
    nome?: StringFilter<"Cinema"> | string
    endereco?: StringNullableFilter<"Cinema"> | string | null
    salas?: SalaListRelationFilter
  }, "id">

  export type CinemaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrderInput | SortOrder
    _count?: CinemaCountOrderByAggregateInput
    _avg?: CinemaAvgOrderByAggregateInput
    _max?: CinemaMaxOrderByAggregateInput
    _min?: CinemaMinOrderByAggregateInput
    _sum?: CinemaSumOrderByAggregateInput
  }

  export type CinemaScalarWhereWithAggregatesInput = {
    AND?: CinemaScalarWhereWithAggregatesInput | CinemaScalarWhereWithAggregatesInput[]
    OR?: CinemaScalarWhereWithAggregatesInput[]
    NOT?: CinemaScalarWhereWithAggregatesInput | CinemaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cinema"> | number
    nome?: StringWithAggregatesFilter<"Cinema"> | string
    endereco?: StringNullableWithAggregatesFilter<"Cinema"> | string | null
  }

  export type SalaWhereInput = {
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    id?: IntFilter<"Sala"> | number
    codigo?: StringFilter<"Sala"> | string
    capacidade?: IntFilter<"Sala"> | number
    cinemaId?: IntFilter<"Sala"> | number
    cinema?: XOR<CinemaScalarRelationFilter, CinemaWhereInput>
    poutronas?: PoutronaListRelationFilter
  }

  export type SalaOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    capacidade?: SortOrder
    cinemaId?: SortOrder
    cinema?: CinemaOrderByWithRelationInput
    poutronas?: PoutronaOrderByRelationAggregateInput
  }

  export type SalaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    codigo?: StringFilter<"Sala"> | string
    capacidade?: IntFilter<"Sala"> | number
    cinemaId?: IntFilter<"Sala"> | number
    cinema?: XOR<CinemaScalarRelationFilter, CinemaWhereInput>
    poutronas?: PoutronaListRelationFilter
  }, "id">

  export type SalaOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    capacidade?: SortOrder
    cinemaId?: SortOrder
    _count?: SalaCountOrderByAggregateInput
    _avg?: SalaAvgOrderByAggregateInput
    _max?: SalaMaxOrderByAggregateInput
    _min?: SalaMinOrderByAggregateInput
    _sum?: SalaSumOrderByAggregateInput
  }

  export type SalaScalarWhereWithAggregatesInput = {
    AND?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    OR?: SalaScalarWhereWithAggregatesInput[]
    NOT?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sala"> | number
    codigo?: StringWithAggregatesFilter<"Sala"> | string
    capacidade?: IntWithAggregatesFilter<"Sala"> | number
    cinemaId?: IntWithAggregatesFilter<"Sala"> | number
  }

  export type PoutronaWhereInput = {
    AND?: PoutronaWhereInput | PoutronaWhereInput[]
    OR?: PoutronaWhereInput[]
    NOT?: PoutronaWhereInput | PoutronaWhereInput[]
    id?: IntFilter<"Poutrona"> | number
    numero?: IntFilter<"Poutrona"> | number
    categoria?: StringFilter<"Poutrona"> | string
    salaId?: IntFilter<"Poutrona"> | number
    status?: BoolFilter<"Poutrona"> | boolean
    sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
  }

  export type PoutronaOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    categoria?: SortOrder
    salaId?: SortOrder
    status?: SortOrder
    sala?: SalaOrderByWithRelationInput
  }

  export type PoutronaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PoutronaWhereInput | PoutronaWhereInput[]
    OR?: PoutronaWhereInput[]
    NOT?: PoutronaWhereInput | PoutronaWhereInput[]
    numero?: IntFilter<"Poutrona"> | number
    categoria?: StringFilter<"Poutrona"> | string
    salaId?: IntFilter<"Poutrona"> | number
    status?: BoolFilter<"Poutrona"> | boolean
    sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
  }, "id">

  export type PoutronaOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    categoria?: SortOrder
    salaId?: SortOrder
    status?: SortOrder
    _count?: PoutronaCountOrderByAggregateInput
    _avg?: PoutronaAvgOrderByAggregateInput
    _max?: PoutronaMaxOrderByAggregateInput
    _min?: PoutronaMinOrderByAggregateInput
    _sum?: PoutronaSumOrderByAggregateInput
  }

  export type PoutronaScalarWhereWithAggregatesInput = {
    AND?: PoutronaScalarWhereWithAggregatesInput | PoutronaScalarWhereWithAggregatesInput[]
    OR?: PoutronaScalarWhereWithAggregatesInput[]
    NOT?: PoutronaScalarWhereWithAggregatesInput | PoutronaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Poutrona"> | number
    numero?: IntWithAggregatesFilter<"Poutrona"> | number
    categoria?: StringWithAggregatesFilter<"Poutrona"> | string
    salaId?: IntWithAggregatesFilter<"Poutrona"> | number
    status?: BoolWithAggregatesFilter<"Poutrona"> | boolean
  }

  export type CinemaCreateInput = {
    nome: string
    endereco?: string | null
    salas?: SalaCreateNestedManyWithoutCinemaInput
  }

  export type CinemaUncheckedCreateInput = {
    id?: number
    nome: string
    endereco?: string | null
    salas?: SalaUncheckedCreateNestedManyWithoutCinemaInput
  }

  export type CinemaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    salas?: SalaUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    salas?: SalaUncheckedUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaCreateManyInput = {
    id?: number
    nome: string
    endereco?: string | null
  }

  export type CinemaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CinemaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SalaCreateInput = {
    codigo: string
    capacidade: number
    cinema: CinemaCreateNestedOneWithoutSalasInput
    poutronas?: PoutronaCreateNestedManyWithoutSalaInput
  }

  export type SalaUncheckedCreateInput = {
    id?: number
    codigo: string
    capacidade: number
    cinemaId: number
    poutronas?: PoutronaUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    cinema?: CinemaUpdateOneRequiredWithoutSalasNestedInput
    poutronas?: PoutronaUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    cinemaId?: IntFieldUpdateOperationsInput | number
    poutronas?: PoutronaUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type SalaCreateManyInput = {
    id?: number
    codigo: string
    capacidade: number
    cinemaId: number
  }

  export type SalaUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
  }

  export type SalaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    cinemaId?: IntFieldUpdateOperationsInput | number
  }

  export type PoutronaCreateInput = {
    numero: number
    categoria: string
    status?: boolean
    sala: SalaCreateNestedOneWithoutPoutronasInput
  }

  export type PoutronaUncheckedCreateInput = {
    id?: number
    numero: number
    categoria: string
    salaId: number
    status?: boolean
  }

  export type PoutronaUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    sala?: SalaUpdateOneRequiredWithoutPoutronasNestedInput
  }

  export type PoutronaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    salaId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PoutronaCreateManyInput = {
    id?: number
    numero: number
    categoria: string
    salaId: number
    status?: boolean
  }

  export type PoutronaUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PoutronaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    salaId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
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

  export type SalaListRelationFilter = {
    every?: SalaWhereInput
    some?: SalaWhereInput
    none?: SalaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SalaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CinemaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
  }

  export type CinemaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CinemaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
  }

  export type CinemaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
  }

  export type CinemaSumOrderByAggregateInput = {
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

  export type CinemaScalarRelationFilter = {
    is?: CinemaWhereInput
    isNot?: CinemaWhereInput
  }

  export type PoutronaListRelationFilter = {
    every?: PoutronaWhereInput
    some?: PoutronaWhereInput
    none?: PoutronaWhereInput
  }

  export type PoutronaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalaCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    capacidade?: SortOrder
    cinemaId?: SortOrder
  }

  export type SalaAvgOrderByAggregateInput = {
    id?: SortOrder
    capacidade?: SortOrder
    cinemaId?: SortOrder
  }

  export type SalaMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    capacidade?: SortOrder
    cinemaId?: SortOrder
  }

  export type SalaMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    capacidade?: SortOrder
    cinemaId?: SortOrder
  }

  export type SalaSumOrderByAggregateInput = {
    id?: SortOrder
    capacidade?: SortOrder
    cinemaId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SalaScalarRelationFilter = {
    is?: SalaWhereInput
    isNot?: SalaWhereInput
  }

  export type PoutronaCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    categoria?: SortOrder
    salaId?: SortOrder
    status?: SortOrder
  }

  export type PoutronaAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    salaId?: SortOrder
  }

  export type PoutronaMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    categoria?: SortOrder
    salaId?: SortOrder
    status?: SortOrder
  }

  export type PoutronaMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    categoria?: SortOrder
    salaId?: SortOrder
    status?: SortOrder
  }

  export type PoutronaSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    salaId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SalaCreateNestedManyWithoutCinemaInput = {
    create?: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput> | SalaCreateWithoutCinemaInput[] | SalaUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutCinemaInput | SalaCreateOrConnectWithoutCinemaInput[]
    createMany?: SalaCreateManyCinemaInputEnvelope
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
  }

  export type SalaUncheckedCreateNestedManyWithoutCinemaInput = {
    create?: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput> | SalaCreateWithoutCinemaInput[] | SalaUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutCinemaInput | SalaCreateOrConnectWithoutCinemaInput[]
    createMany?: SalaCreateManyCinemaInputEnvelope
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SalaUpdateManyWithoutCinemaNestedInput = {
    create?: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput> | SalaCreateWithoutCinemaInput[] | SalaUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutCinemaInput | SalaCreateOrConnectWithoutCinemaInput[]
    upsert?: SalaUpsertWithWhereUniqueWithoutCinemaInput | SalaUpsertWithWhereUniqueWithoutCinemaInput[]
    createMany?: SalaCreateManyCinemaInputEnvelope
    set?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    disconnect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    delete?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    update?: SalaUpdateWithWhereUniqueWithoutCinemaInput | SalaUpdateWithWhereUniqueWithoutCinemaInput[]
    updateMany?: SalaUpdateManyWithWhereWithoutCinemaInput | SalaUpdateManyWithWhereWithoutCinemaInput[]
    deleteMany?: SalaScalarWhereInput | SalaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SalaUncheckedUpdateManyWithoutCinemaNestedInput = {
    create?: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput> | SalaCreateWithoutCinemaInput[] | SalaUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutCinemaInput | SalaCreateOrConnectWithoutCinemaInput[]
    upsert?: SalaUpsertWithWhereUniqueWithoutCinemaInput | SalaUpsertWithWhereUniqueWithoutCinemaInput[]
    createMany?: SalaCreateManyCinemaInputEnvelope
    set?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    disconnect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    delete?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    update?: SalaUpdateWithWhereUniqueWithoutCinemaInput | SalaUpdateWithWhereUniqueWithoutCinemaInput[]
    updateMany?: SalaUpdateManyWithWhereWithoutCinemaInput | SalaUpdateManyWithWhereWithoutCinemaInput[]
    deleteMany?: SalaScalarWhereInput | SalaScalarWhereInput[]
  }

  export type CinemaCreateNestedOneWithoutSalasInput = {
    create?: XOR<CinemaCreateWithoutSalasInput, CinemaUncheckedCreateWithoutSalasInput>
    connectOrCreate?: CinemaCreateOrConnectWithoutSalasInput
    connect?: CinemaWhereUniqueInput
  }

  export type PoutronaCreateNestedManyWithoutSalaInput = {
    create?: XOR<PoutronaCreateWithoutSalaInput, PoutronaUncheckedCreateWithoutSalaInput> | PoutronaCreateWithoutSalaInput[] | PoutronaUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: PoutronaCreateOrConnectWithoutSalaInput | PoutronaCreateOrConnectWithoutSalaInput[]
    createMany?: PoutronaCreateManySalaInputEnvelope
    connect?: PoutronaWhereUniqueInput | PoutronaWhereUniqueInput[]
  }

  export type PoutronaUncheckedCreateNestedManyWithoutSalaInput = {
    create?: XOR<PoutronaCreateWithoutSalaInput, PoutronaUncheckedCreateWithoutSalaInput> | PoutronaCreateWithoutSalaInput[] | PoutronaUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: PoutronaCreateOrConnectWithoutSalaInput | PoutronaCreateOrConnectWithoutSalaInput[]
    createMany?: PoutronaCreateManySalaInputEnvelope
    connect?: PoutronaWhereUniqueInput | PoutronaWhereUniqueInput[]
  }

  export type CinemaUpdateOneRequiredWithoutSalasNestedInput = {
    create?: XOR<CinemaCreateWithoutSalasInput, CinemaUncheckedCreateWithoutSalasInput>
    connectOrCreate?: CinemaCreateOrConnectWithoutSalasInput
    upsert?: CinemaUpsertWithoutSalasInput
    connect?: CinemaWhereUniqueInput
    update?: XOR<XOR<CinemaUpdateToOneWithWhereWithoutSalasInput, CinemaUpdateWithoutSalasInput>, CinemaUncheckedUpdateWithoutSalasInput>
  }

  export type PoutronaUpdateManyWithoutSalaNestedInput = {
    create?: XOR<PoutronaCreateWithoutSalaInput, PoutronaUncheckedCreateWithoutSalaInput> | PoutronaCreateWithoutSalaInput[] | PoutronaUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: PoutronaCreateOrConnectWithoutSalaInput | PoutronaCreateOrConnectWithoutSalaInput[]
    upsert?: PoutronaUpsertWithWhereUniqueWithoutSalaInput | PoutronaUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: PoutronaCreateManySalaInputEnvelope
    set?: PoutronaWhereUniqueInput | PoutronaWhereUniqueInput[]
    disconnect?: PoutronaWhereUniqueInput | PoutronaWhereUniqueInput[]
    delete?: PoutronaWhereUniqueInput | PoutronaWhereUniqueInput[]
    connect?: PoutronaWhereUniqueInput | PoutronaWhereUniqueInput[]
    update?: PoutronaUpdateWithWhereUniqueWithoutSalaInput | PoutronaUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: PoutronaUpdateManyWithWhereWithoutSalaInput | PoutronaUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: PoutronaScalarWhereInput | PoutronaScalarWhereInput[]
  }

  export type PoutronaUncheckedUpdateManyWithoutSalaNestedInput = {
    create?: XOR<PoutronaCreateWithoutSalaInput, PoutronaUncheckedCreateWithoutSalaInput> | PoutronaCreateWithoutSalaInput[] | PoutronaUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: PoutronaCreateOrConnectWithoutSalaInput | PoutronaCreateOrConnectWithoutSalaInput[]
    upsert?: PoutronaUpsertWithWhereUniqueWithoutSalaInput | PoutronaUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: PoutronaCreateManySalaInputEnvelope
    set?: PoutronaWhereUniqueInput | PoutronaWhereUniqueInput[]
    disconnect?: PoutronaWhereUniqueInput | PoutronaWhereUniqueInput[]
    delete?: PoutronaWhereUniqueInput | PoutronaWhereUniqueInput[]
    connect?: PoutronaWhereUniqueInput | PoutronaWhereUniqueInput[]
    update?: PoutronaUpdateWithWhereUniqueWithoutSalaInput | PoutronaUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: PoutronaUpdateManyWithWhereWithoutSalaInput | PoutronaUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: PoutronaScalarWhereInput | PoutronaScalarWhereInput[]
  }

  export type SalaCreateNestedOneWithoutPoutronasInput = {
    create?: XOR<SalaCreateWithoutPoutronasInput, SalaUncheckedCreateWithoutPoutronasInput>
    connectOrCreate?: SalaCreateOrConnectWithoutPoutronasInput
    connect?: SalaWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SalaUpdateOneRequiredWithoutPoutronasNestedInput = {
    create?: XOR<SalaCreateWithoutPoutronasInput, SalaUncheckedCreateWithoutPoutronasInput>
    connectOrCreate?: SalaCreateOrConnectWithoutPoutronasInput
    upsert?: SalaUpsertWithoutPoutronasInput
    connect?: SalaWhereUniqueInput
    update?: XOR<XOR<SalaUpdateToOneWithWhereWithoutPoutronasInput, SalaUpdateWithoutPoutronasInput>, SalaUncheckedUpdateWithoutPoutronasInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SalaCreateWithoutCinemaInput = {
    codigo: string
    capacidade: number
    poutronas?: PoutronaCreateNestedManyWithoutSalaInput
  }

  export type SalaUncheckedCreateWithoutCinemaInput = {
    id?: number
    codigo: string
    capacidade: number
    poutronas?: PoutronaUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaCreateOrConnectWithoutCinemaInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput>
  }

  export type SalaCreateManyCinemaInputEnvelope = {
    data: SalaCreateManyCinemaInput | SalaCreateManyCinemaInput[]
  }

  export type SalaUpsertWithWhereUniqueWithoutCinemaInput = {
    where: SalaWhereUniqueInput
    update: XOR<SalaUpdateWithoutCinemaInput, SalaUncheckedUpdateWithoutCinemaInput>
    create: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput>
  }

  export type SalaUpdateWithWhereUniqueWithoutCinemaInput = {
    where: SalaWhereUniqueInput
    data: XOR<SalaUpdateWithoutCinemaInput, SalaUncheckedUpdateWithoutCinemaInput>
  }

  export type SalaUpdateManyWithWhereWithoutCinemaInput = {
    where: SalaScalarWhereInput
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyWithoutCinemaInput>
  }

  export type SalaScalarWhereInput = {
    AND?: SalaScalarWhereInput | SalaScalarWhereInput[]
    OR?: SalaScalarWhereInput[]
    NOT?: SalaScalarWhereInput | SalaScalarWhereInput[]
    id?: IntFilter<"Sala"> | number
    codigo?: StringFilter<"Sala"> | string
    capacidade?: IntFilter<"Sala"> | number
    cinemaId?: IntFilter<"Sala"> | number
  }

  export type CinemaCreateWithoutSalasInput = {
    nome: string
    endereco?: string | null
  }

  export type CinemaUncheckedCreateWithoutSalasInput = {
    id?: number
    nome: string
    endereco?: string | null
  }

  export type CinemaCreateOrConnectWithoutSalasInput = {
    where: CinemaWhereUniqueInput
    create: XOR<CinemaCreateWithoutSalasInput, CinemaUncheckedCreateWithoutSalasInput>
  }

  export type PoutronaCreateWithoutSalaInput = {
    numero: number
    categoria: string
    status?: boolean
  }

  export type PoutronaUncheckedCreateWithoutSalaInput = {
    id?: number
    numero: number
    categoria: string
    status?: boolean
  }

  export type PoutronaCreateOrConnectWithoutSalaInput = {
    where: PoutronaWhereUniqueInput
    create: XOR<PoutronaCreateWithoutSalaInput, PoutronaUncheckedCreateWithoutSalaInput>
  }

  export type PoutronaCreateManySalaInputEnvelope = {
    data: PoutronaCreateManySalaInput | PoutronaCreateManySalaInput[]
  }

  export type CinemaUpsertWithoutSalasInput = {
    update: XOR<CinemaUpdateWithoutSalasInput, CinemaUncheckedUpdateWithoutSalasInput>
    create: XOR<CinemaCreateWithoutSalasInput, CinemaUncheckedCreateWithoutSalasInput>
    where?: CinemaWhereInput
  }

  export type CinemaUpdateToOneWithWhereWithoutSalasInput = {
    where?: CinemaWhereInput
    data: XOR<CinemaUpdateWithoutSalasInput, CinemaUncheckedUpdateWithoutSalasInput>
  }

  export type CinemaUpdateWithoutSalasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CinemaUncheckedUpdateWithoutSalasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PoutronaUpsertWithWhereUniqueWithoutSalaInput = {
    where: PoutronaWhereUniqueInput
    update: XOR<PoutronaUpdateWithoutSalaInput, PoutronaUncheckedUpdateWithoutSalaInput>
    create: XOR<PoutronaCreateWithoutSalaInput, PoutronaUncheckedCreateWithoutSalaInput>
  }

  export type PoutronaUpdateWithWhereUniqueWithoutSalaInput = {
    where: PoutronaWhereUniqueInput
    data: XOR<PoutronaUpdateWithoutSalaInput, PoutronaUncheckedUpdateWithoutSalaInput>
  }

  export type PoutronaUpdateManyWithWhereWithoutSalaInput = {
    where: PoutronaScalarWhereInput
    data: XOR<PoutronaUpdateManyMutationInput, PoutronaUncheckedUpdateManyWithoutSalaInput>
  }

  export type PoutronaScalarWhereInput = {
    AND?: PoutronaScalarWhereInput | PoutronaScalarWhereInput[]
    OR?: PoutronaScalarWhereInput[]
    NOT?: PoutronaScalarWhereInput | PoutronaScalarWhereInput[]
    id?: IntFilter<"Poutrona"> | number
    numero?: IntFilter<"Poutrona"> | number
    categoria?: StringFilter<"Poutrona"> | string
    salaId?: IntFilter<"Poutrona"> | number
    status?: BoolFilter<"Poutrona"> | boolean
  }

  export type SalaCreateWithoutPoutronasInput = {
    codigo: string
    capacidade: number
    cinema: CinemaCreateNestedOneWithoutSalasInput
  }

  export type SalaUncheckedCreateWithoutPoutronasInput = {
    id?: number
    codigo: string
    capacidade: number
    cinemaId: number
  }

  export type SalaCreateOrConnectWithoutPoutronasInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutPoutronasInput, SalaUncheckedCreateWithoutPoutronasInput>
  }

  export type SalaUpsertWithoutPoutronasInput = {
    update: XOR<SalaUpdateWithoutPoutronasInput, SalaUncheckedUpdateWithoutPoutronasInput>
    create: XOR<SalaCreateWithoutPoutronasInput, SalaUncheckedCreateWithoutPoutronasInput>
    where?: SalaWhereInput
  }

  export type SalaUpdateToOneWithWhereWithoutPoutronasInput = {
    where?: SalaWhereInput
    data: XOR<SalaUpdateWithoutPoutronasInput, SalaUncheckedUpdateWithoutPoutronasInput>
  }

  export type SalaUpdateWithoutPoutronasInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    cinema?: CinemaUpdateOneRequiredWithoutSalasNestedInput
  }

  export type SalaUncheckedUpdateWithoutPoutronasInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    cinemaId?: IntFieldUpdateOperationsInput | number
  }

  export type SalaCreateManyCinemaInput = {
    id?: number
    codigo: string
    capacidade: number
  }

  export type SalaUpdateWithoutCinemaInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    poutronas?: PoutronaUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateWithoutCinemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    poutronas?: PoutronaUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateManyWithoutCinemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
  }

  export type PoutronaCreateManySalaInput = {
    id?: number
    numero: number
    categoria: string
    status?: boolean
  }

  export type PoutronaUpdateWithoutSalaInput = {
    numero?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PoutronaUncheckedUpdateWithoutSalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PoutronaUncheckedUpdateManyWithoutSalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
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