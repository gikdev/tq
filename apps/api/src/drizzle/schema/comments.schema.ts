import * as pg from "drizzle-orm/pg-core";
import { users } from "./users.schema";
import { posts } from "./posts.schema";

export const comments = pg.pgTable("comments", {
  id: pg.serial("id").primaryKey(),
  text: pg.text("text").notNull(),
  authorId: pg.integer("authorId").references(() => users.id),
  postId: pg.integer("postId").references(() => posts.id),
})
