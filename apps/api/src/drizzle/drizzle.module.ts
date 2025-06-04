import { Module, Provider } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import * as schema from "./schema"
import { DrizzleDb } from "./types"

export const DRIZZLE = Symbol("drizzle-connection")

const drizzleProvider: Provider = {
  provide: DRIZZLE,
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const dbUrl = configService.get<string>("DATABASE_URL")
    const pool = new Pool({
      connectionString: dbUrl,
      ssl: false,
    })
    return drizzle(pool, { schema }) as DrizzleDb
  },
}

@Module({
  providers: [drizzleProvider],
  exports: [DRIZZLE],
})
export class DrizzleModule {}
