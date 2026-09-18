import { drizzle, MySql2Database } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

declare global {
  // eslint-disable-next-line no-var
  var _mysqlPool: mysql.Pool | undefined;
}

const connectionUri = process.env.DATABASE_URL || "mysql://root:@127.0.0.1:3306/yesshost";

const pool =
  globalThis._mysqlPool ??
  mysql.createPool({
    uri: connectionUri,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  });

if (process.env.NODE_ENV !== "production") {
  globalThis._mysqlPool = pool;
}

export const db: MySql2Database<typeof schema> = drizzle(pool, { schema, mode: "default" });
export { schema };
