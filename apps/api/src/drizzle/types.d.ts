import { NodePgDatabase } from "drizzle-orm/node-postgres"
import * as schemas from "./schema"

export type DrizzleDb = NodePgDatabase<typeof schemas>
