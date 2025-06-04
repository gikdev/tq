import * as pg from "drizzle-orm/pg-core";
import { users } from "./users.schema";

export const profileInfo = pg.pgTable("profileInfo", {
  id: pg.serial("id").primaryKey(),
  metadata: pg.jsonb("metadata"),
  userId: pg.integer("userId").references(() => users.id)
})
