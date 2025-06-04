import * as pg from "drizzle-orm/pg-core"

export const answers = pg.pgTable("answers", {
  id: pg.serial("id").primaryKey(),
  fullName: pg.text("fullName").notNull(),
  phone: pg.text("phone").notNull(),
  result: pg.text("result").notNull(),
})
