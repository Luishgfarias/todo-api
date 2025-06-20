
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
 * Model tarefa
 * 
 */
export type tarefa = $Result.DefaultSelection<Prisma.$tarefaPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Urgencia: {
  PADRAO: 'PADRAO',
  IMPORTANTE: 'IMPORTANTE',
  URGENTE: 'URGENTE',
  CRITICA: 'CRITICA'
};

export type Urgencia = (typeof Urgencia)[keyof typeof Urgencia]

}

export type Urgencia = $Enums.Urgencia

export const Urgencia: typeof $Enums.Urgencia

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tarefas
 * const tarefas = await prisma.tarefa.findMany()
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
   * // Fetch zero or more Tarefas
   * const tarefas = await prisma.tarefa.findMany()
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
   * `prisma.tarefa`: Exposes CRUD operations for the **tarefa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tarefas
    * const tarefas = await prisma.tarefa.findMany()
    * ```
    */
  get tarefa(): Prisma.tarefaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    tarefa: 'tarefa',
    usuario: 'usuario'
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
      modelProps: "tarefa" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tarefa: {
        payload: Prisma.$tarefaPayload<ExtArgs>
        fields: Prisma.tarefaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tarefaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tarefaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tarefaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tarefaPayload>
          }
          findFirst: {
            args: Prisma.tarefaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tarefaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tarefaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tarefaPayload>
          }
          findMany: {
            args: Prisma.tarefaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tarefaPayload>[]
          }
          create: {
            args: Prisma.tarefaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tarefaPayload>
          }
          createMany: {
            args: Prisma.tarefaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tarefaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tarefaPayload>
          }
          update: {
            args: Prisma.tarefaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tarefaPayload>
          }
          deleteMany: {
            args: Prisma.tarefaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tarefaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tarefaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tarefaPayload>
          }
          aggregate: {
            args: Prisma.TarefaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTarefa>
          }
          groupBy: {
            args: Prisma.tarefaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TarefaGroupByOutputType>[]
          }
          count: {
            args: Prisma.tarefaCountArgs<ExtArgs>
            result: $Utils.Optional<TarefaCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
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
    tarefa?: tarefaOmit
    usuario?: usuarioOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    tarefas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarefas?: boolean | UsuarioCountOutputTypeCountTarefasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tarefaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model tarefa
   */

  export type AggregateTarefa = {
    _count: TarefaCountAggregateOutputType | null
    _avg: TarefaAvgAggregateOutputType | null
    _sum: TarefaSumAggregateOutputType | null
    _min: TarefaMinAggregateOutputType | null
    _max: TarefaMaxAggregateOutputType | null
  }

  export type TarefaAvgAggregateOutputType = {
    id: number | null
  }

  export type TarefaSumAggregateOutputType = {
    id: number | null
  }

  export type TarefaMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    concluida: boolean | null
    urgencia: $Enums.Urgencia | null
    dataDeCriacao: Date | null
    dataParaConclusao: Date | null
    usuarioId: string | null
  }

  export type TarefaMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    concluida: boolean | null
    urgencia: $Enums.Urgencia | null
    dataDeCriacao: Date | null
    dataParaConclusao: Date | null
    usuarioId: string | null
  }

  export type TarefaCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    concluida: number
    urgencia: number
    dataDeCriacao: number
    dataParaConclusao: number
    usuarioId: number
    _all: number
  }


  export type TarefaAvgAggregateInputType = {
    id?: true
  }

  export type TarefaSumAggregateInputType = {
    id?: true
  }

  export type TarefaMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    concluida?: true
    urgencia?: true
    dataDeCriacao?: true
    dataParaConclusao?: true
    usuarioId?: true
  }

  export type TarefaMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    concluida?: true
    urgencia?: true
    dataDeCriacao?: true
    dataParaConclusao?: true
    usuarioId?: true
  }

  export type TarefaCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    concluida?: true
    urgencia?: true
    dataDeCriacao?: true
    dataParaConclusao?: true
    usuarioId?: true
    _all?: true
  }

  export type TarefaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tarefa to aggregate.
     */
    where?: tarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tarefas to fetch.
     */
    orderBy?: tarefaOrderByWithRelationInput | tarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tarefas
    **/
    _count?: true | TarefaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TarefaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TarefaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TarefaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TarefaMaxAggregateInputType
  }

  export type GetTarefaAggregateType<T extends TarefaAggregateArgs> = {
        [P in keyof T & keyof AggregateTarefa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTarefa[P]>
      : GetScalarType<T[P], AggregateTarefa[P]>
  }




  export type tarefaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tarefaWhereInput
    orderBy?: tarefaOrderByWithAggregationInput | tarefaOrderByWithAggregationInput[]
    by: TarefaScalarFieldEnum[] | TarefaScalarFieldEnum
    having?: tarefaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TarefaCountAggregateInputType | true
    _avg?: TarefaAvgAggregateInputType
    _sum?: TarefaSumAggregateInputType
    _min?: TarefaMinAggregateInputType
    _max?: TarefaMaxAggregateInputType
  }

  export type TarefaGroupByOutputType = {
    id: number
    titulo: string
    descricao: string
    concluida: boolean
    urgencia: $Enums.Urgencia
    dataDeCriacao: Date
    dataParaConclusao: Date
    usuarioId: string
    _count: TarefaCountAggregateOutputType | null
    _avg: TarefaAvgAggregateOutputType | null
    _sum: TarefaSumAggregateOutputType | null
    _min: TarefaMinAggregateOutputType | null
    _max: TarefaMaxAggregateOutputType | null
  }

  type GetTarefaGroupByPayload<T extends tarefaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TarefaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TarefaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TarefaGroupByOutputType[P]>
            : GetScalarType<T[P], TarefaGroupByOutputType[P]>
        }
      >
    >


  export type tarefaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    concluida?: boolean
    urgencia?: boolean
    dataDeCriacao?: boolean
    dataParaConclusao?: boolean
    usuarioId?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarefa"]>



  export type tarefaSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    concluida?: boolean
    urgencia?: boolean
    dataDeCriacao?: boolean
    dataParaConclusao?: boolean
    usuarioId?: boolean
  }

  export type tarefaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "concluida" | "urgencia" | "dataDeCriacao" | "dataParaConclusao" | "usuarioId", ExtArgs["result"]["tarefa"]>
  export type tarefaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $tarefaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tarefa"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string
      concluida: boolean
      urgencia: $Enums.Urgencia
      dataDeCriacao: Date
      dataParaConclusao: Date
      usuarioId: string
    }, ExtArgs["result"]["tarefa"]>
    composites: {}
  }

  type tarefaGetPayload<S extends boolean | null | undefined | tarefaDefaultArgs> = $Result.GetResult<Prisma.$tarefaPayload, S>

  type tarefaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tarefaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TarefaCountAggregateInputType | true
    }

  export interface tarefaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tarefa'], meta: { name: 'tarefa' } }
    /**
     * Find zero or one Tarefa that matches the filter.
     * @param {tarefaFindUniqueArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tarefaFindUniqueArgs>(args: SelectSubset<T, tarefaFindUniqueArgs<ExtArgs>>): Prisma__tarefaClient<$Result.GetResult<Prisma.$tarefaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tarefa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tarefaFindUniqueOrThrowArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tarefaFindUniqueOrThrowArgs>(args: SelectSubset<T, tarefaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tarefaClient<$Result.GetResult<Prisma.$tarefaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarefa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tarefaFindFirstArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tarefaFindFirstArgs>(args?: SelectSubset<T, tarefaFindFirstArgs<ExtArgs>>): Prisma__tarefaClient<$Result.GetResult<Prisma.$tarefaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarefa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tarefaFindFirstOrThrowArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tarefaFindFirstOrThrowArgs>(args?: SelectSubset<T, tarefaFindFirstOrThrowArgs<ExtArgs>>): Prisma__tarefaClient<$Result.GetResult<Prisma.$tarefaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tarefas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tarefaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tarefas
     * const tarefas = await prisma.tarefa.findMany()
     * 
     * // Get first 10 Tarefas
     * const tarefas = await prisma.tarefa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tarefaWithIdOnly = await prisma.tarefa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tarefaFindManyArgs>(args?: SelectSubset<T, tarefaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tarefa.
     * @param {tarefaCreateArgs} args - Arguments to create a Tarefa.
     * @example
     * // Create one Tarefa
     * const Tarefa = await prisma.tarefa.create({
     *   data: {
     *     // ... data to create a Tarefa
     *   }
     * })
     * 
     */
    create<T extends tarefaCreateArgs>(args: SelectSubset<T, tarefaCreateArgs<ExtArgs>>): Prisma__tarefaClient<$Result.GetResult<Prisma.$tarefaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tarefas.
     * @param {tarefaCreateManyArgs} args - Arguments to create many Tarefas.
     * @example
     * // Create many Tarefas
     * const tarefa = await prisma.tarefa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tarefaCreateManyArgs>(args?: SelectSubset<T, tarefaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tarefa.
     * @param {tarefaDeleteArgs} args - Arguments to delete one Tarefa.
     * @example
     * // Delete one Tarefa
     * const Tarefa = await prisma.tarefa.delete({
     *   where: {
     *     // ... filter to delete one Tarefa
     *   }
     * })
     * 
     */
    delete<T extends tarefaDeleteArgs>(args: SelectSubset<T, tarefaDeleteArgs<ExtArgs>>): Prisma__tarefaClient<$Result.GetResult<Prisma.$tarefaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tarefa.
     * @param {tarefaUpdateArgs} args - Arguments to update one Tarefa.
     * @example
     * // Update one Tarefa
     * const tarefa = await prisma.tarefa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tarefaUpdateArgs>(args: SelectSubset<T, tarefaUpdateArgs<ExtArgs>>): Prisma__tarefaClient<$Result.GetResult<Prisma.$tarefaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tarefas.
     * @param {tarefaDeleteManyArgs} args - Arguments to filter Tarefas to delete.
     * @example
     * // Delete a few Tarefas
     * const { count } = await prisma.tarefa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tarefaDeleteManyArgs>(args?: SelectSubset<T, tarefaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tarefas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tarefaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tarefas
     * const tarefa = await prisma.tarefa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tarefaUpdateManyArgs>(args: SelectSubset<T, tarefaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tarefa.
     * @param {tarefaUpsertArgs} args - Arguments to update or create a Tarefa.
     * @example
     * // Update or create a Tarefa
     * const tarefa = await prisma.tarefa.upsert({
     *   create: {
     *     // ... data to create a Tarefa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tarefa we want to update
     *   }
     * })
     */
    upsert<T extends tarefaUpsertArgs>(args: SelectSubset<T, tarefaUpsertArgs<ExtArgs>>): Prisma__tarefaClient<$Result.GetResult<Prisma.$tarefaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tarefas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tarefaCountArgs} args - Arguments to filter Tarefas to count.
     * @example
     * // Count the number of Tarefas
     * const count = await prisma.tarefa.count({
     *   where: {
     *     // ... the filter for the Tarefas we want to count
     *   }
     * })
    **/
    count<T extends tarefaCountArgs>(
      args?: Subset<T, tarefaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TarefaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tarefa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TarefaAggregateArgs>(args: Subset<T, TarefaAggregateArgs>): Prisma.PrismaPromise<GetTarefaAggregateType<T>>

    /**
     * Group by Tarefa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tarefaGroupByArgs} args - Group by arguments.
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
      T extends tarefaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tarefaGroupByArgs['orderBy'] }
        : { orderBy?: tarefaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tarefaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTarefaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tarefa model
   */
  readonly fields: tarefaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tarefa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tarefaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tarefa model
   */
  interface tarefaFieldRefs {
    readonly id: FieldRef<"tarefa", 'Int'>
    readonly titulo: FieldRef<"tarefa", 'String'>
    readonly descricao: FieldRef<"tarefa", 'String'>
    readonly concluida: FieldRef<"tarefa", 'Boolean'>
    readonly urgencia: FieldRef<"tarefa", 'Urgencia'>
    readonly dataDeCriacao: FieldRef<"tarefa", 'DateTime'>
    readonly dataParaConclusao: FieldRef<"tarefa", 'DateTime'>
    readonly usuarioId: FieldRef<"tarefa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tarefa findUnique
   */
  export type tarefaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tarefa
     */
    select?: tarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tarefa
     */
    omit?: tarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tarefaInclude<ExtArgs> | null
    /**
     * Filter, which tarefa to fetch.
     */
    where: tarefaWhereUniqueInput
  }

  /**
   * tarefa findUniqueOrThrow
   */
  export type tarefaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tarefa
     */
    select?: tarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tarefa
     */
    omit?: tarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tarefaInclude<ExtArgs> | null
    /**
     * Filter, which tarefa to fetch.
     */
    where: tarefaWhereUniqueInput
  }

  /**
   * tarefa findFirst
   */
  export type tarefaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tarefa
     */
    select?: tarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tarefa
     */
    omit?: tarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tarefaInclude<ExtArgs> | null
    /**
     * Filter, which tarefa to fetch.
     */
    where?: tarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tarefas to fetch.
     */
    orderBy?: tarefaOrderByWithRelationInput | tarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tarefas.
     */
    cursor?: tarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tarefas.
     */
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * tarefa findFirstOrThrow
   */
  export type tarefaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tarefa
     */
    select?: tarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tarefa
     */
    omit?: tarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tarefaInclude<ExtArgs> | null
    /**
     * Filter, which tarefa to fetch.
     */
    where?: tarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tarefas to fetch.
     */
    orderBy?: tarefaOrderByWithRelationInput | tarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tarefas.
     */
    cursor?: tarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tarefas.
     */
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * tarefa findMany
   */
  export type tarefaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tarefa
     */
    select?: tarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tarefa
     */
    omit?: tarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tarefaInclude<ExtArgs> | null
    /**
     * Filter, which tarefas to fetch.
     */
    where?: tarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tarefas to fetch.
     */
    orderBy?: tarefaOrderByWithRelationInput | tarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tarefas.
     */
    cursor?: tarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tarefas.
     */
    skip?: number
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * tarefa create
   */
  export type tarefaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tarefa
     */
    select?: tarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tarefa
     */
    omit?: tarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tarefaInclude<ExtArgs> | null
    /**
     * The data needed to create a tarefa.
     */
    data: XOR<tarefaCreateInput, tarefaUncheckedCreateInput>
  }

  /**
   * tarefa createMany
   */
  export type tarefaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tarefas.
     */
    data: tarefaCreateManyInput | tarefaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tarefa update
   */
  export type tarefaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tarefa
     */
    select?: tarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tarefa
     */
    omit?: tarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tarefaInclude<ExtArgs> | null
    /**
     * The data needed to update a tarefa.
     */
    data: XOR<tarefaUpdateInput, tarefaUncheckedUpdateInput>
    /**
     * Choose, which tarefa to update.
     */
    where: tarefaWhereUniqueInput
  }

  /**
   * tarefa updateMany
   */
  export type tarefaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tarefas.
     */
    data: XOR<tarefaUpdateManyMutationInput, tarefaUncheckedUpdateManyInput>
    /**
     * Filter which tarefas to update
     */
    where?: tarefaWhereInput
    /**
     * Limit how many tarefas to update.
     */
    limit?: number
  }

  /**
   * tarefa upsert
   */
  export type tarefaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tarefa
     */
    select?: tarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tarefa
     */
    omit?: tarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tarefaInclude<ExtArgs> | null
    /**
     * The filter to search for the tarefa to update in case it exists.
     */
    where: tarefaWhereUniqueInput
    /**
     * In case the tarefa found by the `where` argument doesn't exist, create a new tarefa with this data.
     */
    create: XOR<tarefaCreateInput, tarefaUncheckedCreateInput>
    /**
     * In case the tarefa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tarefaUpdateInput, tarefaUncheckedUpdateInput>
  }

  /**
   * tarefa delete
   */
  export type tarefaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tarefa
     */
    select?: tarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tarefa
     */
    omit?: tarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tarefaInclude<ExtArgs> | null
    /**
     * Filter which tarefa to delete.
     */
    where: tarefaWhereUniqueInput
  }

  /**
   * tarefa deleteMany
   */
  export type tarefaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tarefas to delete
     */
    where?: tarefaWhereInput
    /**
     * Limit how many tarefas to delete.
     */
    limit?: number
  }

  /**
   * tarefa without action
   */
  export type tarefaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tarefa
     */
    select?: tarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tarefa
     */
    omit?: tarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tarefaInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    dataDeCriacao: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    dataDeCriacao: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    dataDeCriacao: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    dataDeCriacao?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    dataDeCriacao?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    dataDeCriacao?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    email: string
    senha: string
    dataDeCriacao: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    dataDeCriacao?: boolean
    tarefas?: boolean | usuario$tarefasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type usuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    dataDeCriacao?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "dataDeCriacao", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarefas?: boolean | usuario$tarefasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      tarefas: Prisma.$tarefaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senha: string
      dataDeCriacao: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
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
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tarefas<T extends usuario$tarefasArgs<ExtArgs> = {}>(args?: Subset<T, usuario$tarefasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id: FieldRef<"usuario", 'String'>
    readonly nome: FieldRef<"usuario", 'String'>
    readonly email: FieldRef<"usuario", 'String'>
    readonly senha: FieldRef<"usuario", 'String'>
    readonly dataDeCriacao: FieldRef<"usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.tarefas
   */
  export type usuario$tarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tarefa
     */
    select?: tarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tarefa
     */
    omit?: tarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tarefaInclude<ExtArgs> | null
    where?: tarefaWhereInput
    orderBy?: tarefaOrderByWithRelationInput | tarefaOrderByWithRelationInput[]
    cursor?: tarefaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TarefaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    concluida: 'concluida',
    urgencia: 'urgencia',
    dataDeCriacao: 'dataDeCriacao',
    dataParaConclusao: 'dataParaConclusao',
    usuarioId: 'usuarioId'
  };

  export type TarefaScalarFieldEnum = (typeof TarefaScalarFieldEnum)[keyof typeof TarefaScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    dataDeCriacao: 'dataDeCriacao'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const tarefaOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    descricao: 'descricao',
    usuarioId: 'usuarioId'
  };

  export type tarefaOrderByRelevanceFieldEnum = (typeof tarefaOrderByRelevanceFieldEnum)[keyof typeof tarefaOrderByRelevanceFieldEnum]


  export const usuarioOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha'
  };

  export type usuarioOrderByRelevanceFieldEnum = (typeof usuarioOrderByRelevanceFieldEnum)[keyof typeof usuarioOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Urgencia'
   */
  export type EnumUrgenciaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Urgencia'>
    


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


  export type tarefaWhereInput = {
    AND?: tarefaWhereInput | tarefaWhereInput[]
    OR?: tarefaWhereInput[]
    NOT?: tarefaWhereInput | tarefaWhereInput[]
    id?: IntFilter<"tarefa"> | number
    titulo?: StringFilter<"tarefa"> | string
    descricao?: StringFilter<"tarefa"> | string
    concluida?: BoolFilter<"tarefa"> | boolean
    urgencia?: EnumUrgenciaFilter<"tarefa"> | $Enums.Urgencia
    dataDeCriacao?: DateTimeFilter<"tarefa"> | Date | string
    dataParaConclusao?: DateTimeFilter<"tarefa"> | Date | string
    usuarioId?: StringFilter<"tarefa"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type tarefaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    concluida?: SortOrder
    urgencia?: SortOrder
    dataDeCriacao?: SortOrder
    dataParaConclusao?: SortOrder
    usuarioId?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
    _relevance?: tarefaOrderByRelevanceInput
  }

  export type tarefaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tarefaWhereInput | tarefaWhereInput[]
    OR?: tarefaWhereInput[]
    NOT?: tarefaWhereInput | tarefaWhereInput[]
    titulo?: StringFilter<"tarefa"> | string
    descricao?: StringFilter<"tarefa"> | string
    concluida?: BoolFilter<"tarefa"> | boolean
    urgencia?: EnumUrgenciaFilter<"tarefa"> | $Enums.Urgencia
    dataDeCriacao?: DateTimeFilter<"tarefa"> | Date | string
    dataParaConclusao?: DateTimeFilter<"tarefa"> | Date | string
    usuarioId?: StringFilter<"tarefa"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id">

  export type tarefaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    concluida?: SortOrder
    urgencia?: SortOrder
    dataDeCriacao?: SortOrder
    dataParaConclusao?: SortOrder
    usuarioId?: SortOrder
    _count?: tarefaCountOrderByAggregateInput
    _avg?: tarefaAvgOrderByAggregateInput
    _max?: tarefaMaxOrderByAggregateInput
    _min?: tarefaMinOrderByAggregateInput
    _sum?: tarefaSumOrderByAggregateInput
  }

  export type tarefaScalarWhereWithAggregatesInput = {
    AND?: tarefaScalarWhereWithAggregatesInput | tarefaScalarWhereWithAggregatesInput[]
    OR?: tarefaScalarWhereWithAggregatesInput[]
    NOT?: tarefaScalarWhereWithAggregatesInput | tarefaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tarefa"> | number
    titulo?: StringWithAggregatesFilter<"tarefa"> | string
    descricao?: StringWithAggregatesFilter<"tarefa"> | string
    concluida?: BoolWithAggregatesFilter<"tarefa"> | boolean
    urgencia?: EnumUrgenciaWithAggregatesFilter<"tarefa"> | $Enums.Urgencia
    dataDeCriacao?: DateTimeWithAggregatesFilter<"tarefa"> | Date | string
    dataParaConclusao?: DateTimeWithAggregatesFilter<"tarefa"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"tarefa"> | string
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id?: StringFilter<"usuario"> | string
    nome?: StringFilter<"usuario"> | string
    email?: StringFilter<"usuario"> | string
    senha?: StringFilter<"usuario"> | string
    dataDeCriacao?: DateTimeFilter<"usuario"> | Date | string
    tarefas?: TarefaListRelationFilter
  }

  export type usuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    dataDeCriacao?: SortOrder
    tarefas?: tarefaOrderByRelationAggregateInput
    _relevance?: usuarioOrderByRelevanceInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    nome?: StringFilter<"usuario"> | string
    senha?: StringFilter<"usuario"> | string
    dataDeCriacao?: DateTimeFilter<"usuario"> | Date | string
    tarefas?: TarefaListRelationFilter
  }, "id" | "email">

  export type usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    dataDeCriacao?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"usuario"> | string
    nome?: StringWithAggregatesFilter<"usuario"> | string
    email?: StringWithAggregatesFilter<"usuario"> | string
    senha?: StringWithAggregatesFilter<"usuario"> | string
    dataDeCriacao?: DateTimeWithAggregatesFilter<"usuario"> | Date | string
  }

  export type tarefaCreateInput = {
    titulo: string
    descricao: string
    concluida?: boolean
    urgencia?: $Enums.Urgencia
    dataDeCriacao?: Date | string
    dataParaConclusao?: Date | string
    usuario: usuarioCreateNestedOneWithoutTarefasInput
  }

  export type tarefaUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao: string
    concluida?: boolean
    urgencia?: $Enums.Urgencia
    dataDeCriacao?: Date | string
    dataParaConclusao?: Date | string
    usuarioId: string
  }

  export type tarefaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    concluida?: BoolFieldUpdateOperationsInput | boolean
    urgencia?: EnumUrgenciaFieldUpdateOperationsInput | $Enums.Urgencia
    dataDeCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataParaConclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutTarefasNestedInput
  }

  export type tarefaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    concluida?: BoolFieldUpdateOperationsInput | boolean
    urgencia?: EnumUrgenciaFieldUpdateOperationsInput | $Enums.Urgencia
    dataDeCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataParaConclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type tarefaCreateManyInput = {
    id?: number
    titulo: string
    descricao: string
    concluida?: boolean
    urgencia?: $Enums.Urgencia
    dataDeCriacao?: Date | string
    dataParaConclusao?: Date | string
    usuarioId: string
  }

  export type tarefaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    concluida?: BoolFieldUpdateOperationsInput | boolean
    urgencia?: EnumUrgenciaFieldUpdateOperationsInput | $Enums.Urgencia
    dataDeCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataParaConclusao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tarefaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    concluida?: BoolFieldUpdateOperationsInput | boolean
    urgencia?: EnumUrgenciaFieldUpdateOperationsInput | $Enums.Urgencia
    dataDeCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataParaConclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    dataDeCriacao?: Date | string
    tarefas?: tarefaCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    dataDeCriacao?: Date | string
    tarefas?: tarefaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataDeCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: tarefaUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataDeCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: tarefaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id?: string
    nome: string
    email: string
    senha: string
    dataDeCriacao?: Date | string
  }

  export type usuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataDeCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataDeCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUrgenciaFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgencia | EnumUrgenciaFieldRefInput<$PrismaModel>
    in?: $Enums.Urgencia[]
    notIn?: $Enums.Urgencia[]
    not?: NestedEnumUrgenciaFilter<$PrismaModel> | $Enums.Urgencia
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

  export type UsuarioScalarRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type tarefaOrderByRelevanceInput = {
    fields: tarefaOrderByRelevanceFieldEnum | tarefaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tarefaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    concluida?: SortOrder
    urgencia?: SortOrder
    dataDeCriacao?: SortOrder
    dataParaConclusao?: SortOrder
    usuarioId?: SortOrder
  }

  export type tarefaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tarefaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    concluida?: SortOrder
    urgencia?: SortOrder
    dataDeCriacao?: SortOrder
    dataParaConclusao?: SortOrder
    usuarioId?: SortOrder
  }

  export type tarefaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    concluida?: SortOrder
    urgencia?: SortOrder
    dataDeCriacao?: SortOrder
    dataParaConclusao?: SortOrder
    usuarioId?: SortOrder
  }

  export type tarefaSumOrderByAggregateInput = {
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUrgenciaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgencia | EnumUrgenciaFieldRefInput<$PrismaModel>
    in?: $Enums.Urgencia[]
    notIn?: $Enums.Urgencia[]
    not?: NestedEnumUrgenciaWithAggregatesFilter<$PrismaModel> | $Enums.Urgencia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgenciaFilter<$PrismaModel>
    _max?: NestedEnumUrgenciaFilter<$PrismaModel>
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

  export type TarefaListRelationFilter = {
    every?: tarefaWhereInput
    some?: tarefaWhereInput
    none?: tarefaWhereInput
  }

  export type tarefaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioOrderByRelevanceInput = {
    fields: usuarioOrderByRelevanceFieldEnum | usuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    dataDeCriacao?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    dataDeCriacao?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    dataDeCriacao?: SortOrder
  }

  export type usuarioCreateNestedOneWithoutTarefasInput = {
    create?: XOR<usuarioCreateWithoutTarefasInput, usuarioUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutTarefasInput
    connect?: usuarioWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUrgenciaFieldUpdateOperationsInput = {
    set?: $Enums.Urgencia
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usuarioUpdateOneRequiredWithoutTarefasNestedInput = {
    create?: XOR<usuarioCreateWithoutTarefasInput, usuarioUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutTarefasInput
    upsert?: usuarioUpsertWithoutTarefasInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutTarefasInput, usuarioUpdateWithoutTarefasInput>, usuarioUncheckedUpdateWithoutTarefasInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tarefaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<tarefaCreateWithoutUsuarioInput, tarefaUncheckedCreateWithoutUsuarioInput> | tarefaCreateWithoutUsuarioInput[] | tarefaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tarefaCreateOrConnectWithoutUsuarioInput | tarefaCreateOrConnectWithoutUsuarioInput[]
    createMany?: tarefaCreateManyUsuarioInputEnvelope
    connect?: tarefaWhereUniqueInput | tarefaWhereUniqueInput[]
  }

  export type tarefaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<tarefaCreateWithoutUsuarioInput, tarefaUncheckedCreateWithoutUsuarioInput> | tarefaCreateWithoutUsuarioInput[] | tarefaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tarefaCreateOrConnectWithoutUsuarioInput | tarefaCreateOrConnectWithoutUsuarioInput[]
    createMany?: tarefaCreateManyUsuarioInputEnvelope
    connect?: tarefaWhereUniqueInput | tarefaWhereUniqueInput[]
  }

  export type tarefaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<tarefaCreateWithoutUsuarioInput, tarefaUncheckedCreateWithoutUsuarioInput> | tarefaCreateWithoutUsuarioInput[] | tarefaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tarefaCreateOrConnectWithoutUsuarioInput | tarefaCreateOrConnectWithoutUsuarioInput[]
    upsert?: tarefaUpsertWithWhereUniqueWithoutUsuarioInput | tarefaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: tarefaCreateManyUsuarioInputEnvelope
    set?: tarefaWhereUniqueInput | tarefaWhereUniqueInput[]
    disconnect?: tarefaWhereUniqueInput | tarefaWhereUniqueInput[]
    delete?: tarefaWhereUniqueInput | tarefaWhereUniqueInput[]
    connect?: tarefaWhereUniqueInput | tarefaWhereUniqueInput[]
    update?: tarefaUpdateWithWhereUniqueWithoutUsuarioInput | tarefaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: tarefaUpdateManyWithWhereWithoutUsuarioInput | tarefaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: tarefaScalarWhereInput | tarefaScalarWhereInput[]
  }

  export type tarefaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<tarefaCreateWithoutUsuarioInput, tarefaUncheckedCreateWithoutUsuarioInput> | tarefaCreateWithoutUsuarioInput[] | tarefaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tarefaCreateOrConnectWithoutUsuarioInput | tarefaCreateOrConnectWithoutUsuarioInput[]
    upsert?: tarefaUpsertWithWhereUniqueWithoutUsuarioInput | tarefaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: tarefaCreateManyUsuarioInputEnvelope
    set?: tarefaWhereUniqueInput | tarefaWhereUniqueInput[]
    disconnect?: tarefaWhereUniqueInput | tarefaWhereUniqueInput[]
    delete?: tarefaWhereUniqueInput | tarefaWhereUniqueInput[]
    connect?: tarefaWhereUniqueInput | tarefaWhereUniqueInput[]
    update?: tarefaUpdateWithWhereUniqueWithoutUsuarioInput | tarefaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: tarefaUpdateManyWithWhereWithoutUsuarioInput | tarefaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: tarefaScalarWhereInput | tarefaScalarWhereInput[]
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUrgenciaFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgencia | EnumUrgenciaFieldRefInput<$PrismaModel>
    in?: $Enums.Urgencia[]
    notIn?: $Enums.Urgencia[]
    not?: NestedEnumUrgenciaFilter<$PrismaModel> | $Enums.Urgencia
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUrgenciaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgencia | EnumUrgenciaFieldRefInput<$PrismaModel>
    in?: $Enums.Urgencia[]
    notIn?: $Enums.Urgencia[]
    not?: NestedEnumUrgenciaWithAggregatesFilter<$PrismaModel> | $Enums.Urgencia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgenciaFilter<$PrismaModel>
    _max?: NestedEnumUrgenciaFilter<$PrismaModel>
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

  export type usuarioCreateWithoutTarefasInput = {
    id?: string
    nome: string
    email: string
    senha: string
    dataDeCriacao?: Date | string
  }

  export type usuarioUncheckedCreateWithoutTarefasInput = {
    id?: string
    nome: string
    email: string
    senha: string
    dataDeCriacao?: Date | string
  }

  export type usuarioCreateOrConnectWithoutTarefasInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutTarefasInput, usuarioUncheckedCreateWithoutTarefasInput>
  }

  export type usuarioUpsertWithoutTarefasInput = {
    update: XOR<usuarioUpdateWithoutTarefasInput, usuarioUncheckedUpdateWithoutTarefasInput>
    create: XOR<usuarioCreateWithoutTarefasInput, usuarioUncheckedCreateWithoutTarefasInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutTarefasInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutTarefasInput, usuarioUncheckedUpdateWithoutTarefasInput>
  }

  export type usuarioUpdateWithoutTarefasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataDeCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuarioUncheckedUpdateWithoutTarefasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataDeCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tarefaCreateWithoutUsuarioInput = {
    titulo: string
    descricao: string
    concluida?: boolean
    urgencia?: $Enums.Urgencia
    dataDeCriacao?: Date | string
    dataParaConclusao?: Date | string
  }

  export type tarefaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    titulo: string
    descricao: string
    concluida?: boolean
    urgencia?: $Enums.Urgencia
    dataDeCriacao?: Date | string
    dataParaConclusao?: Date | string
  }

  export type tarefaCreateOrConnectWithoutUsuarioInput = {
    where: tarefaWhereUniqueInput
    create: XOR<tarefaCreateWithoutUsuarioInput, tarefaUncheckedCreateWithoutUsuarioInput>
  }

  export type tarefaCreateManyUsuarioInputEnvelope = {
    data: tarefaCreateManyUsuarioInput | tarefaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type tarefaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: tarefaWhereUniqueInput
    update: XOR<tarefaUpdateWithoutUsuarioInput, tarefaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<tarefaCreateWithoutUsuarioInput, tarefaUncheckedCreateWithoutUsuarioInput>
  }

  export type tarefaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: tarefaWhereUniqueInput
    data: XOR<tarefaUpdateWithoutUsuarioInput, tarefaUncheckedUpdateWithoutUsuarioInput>
  }

  export type tarefaUpdateManyWithWhereWithoutUsuarioInput = {
    where: tarefaScalarWhereInput
    data: XOR<tarefaUpdateManyMutationInput, tarefaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type tarefaScalarWhereInput = {
    AND?: tarefaScalarWhereInput | tarefaScalarWhereInput[]
    OR?: tarefaScalarWhereInput[]
    NOT?: tarefaScalarWhereInput | tarefaScalarWhereInput[]
    id?: IntFilter<"tarefa"> | number
    titulo?: StringFilter<"tarefa"> | string
    descricao?: StringFilter<"tarefa"> | string
    concluida?: BoolFilter<"tarefa"> | boolean
    urgencia?: EnumUrgenciaFilter<"tarefa"> | $Enums.Urgencia
    dataDeCriacao?: DateTimeFilter<"tarefa"> | Date | string
    dataParaConclusao?: DateTimeFilter<"tarefa"> | Date | string
    usuarioId?: StringFilter<"tarefa"> | string
  }

  export type tarefaCreateManyUsuarioInput = {
    id?: number
    titulo: string
    descricao: string
    concluida?: boolean
    urgencia?: $Enums.Urgencia
    dataDeCriacao?: Date | string
    dataParaConclusao?: Date | string
  }

  export type tarefaUpdateWithoutUsuarioInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    concluida?: BoolFieldUpdateOperationsInput | boolean
    urgencia?: EnumUrgenciaFieldUpdateOperationsInput | $Enums.Urgencia
    dataDeCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataParaConclusao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tarefaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    concluida?: BoolFieldUpdateOperationsInput | boolean
    urgencia?: EnumUrgenciaFieldUpdateOperationsInput | $Enums.Urgencia
    dataDeCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataParaConclusao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tarefaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    concluida?: BoolFieldUpdateOperationsInput | boolean
    urgencia?: EnumUrgenciaFieldUpdateOperationsInput | $Enums.Urgencia
    dataDeCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataParaConclusao?: DateTimeFieldUpdateOperationsInput | Date | string
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