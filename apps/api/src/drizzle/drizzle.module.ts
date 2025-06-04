import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres"
import * as schema from "./schema"

export const DRIZZLE = Symbol("drizzle-connection")

@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const dbUrl = configService.get<string>("DATABASE_URL")
        const pool = new Pool({
          connectionString: dbUrl,
          ssl: false,
        })
        return drizzle(pool, { schema }) as NodePgDatabase<typeof schema>
      }
    }
  ],
  exports: [DRIZZLE],
})
export class DrizzleModule {}
