import * as pg from "drizzle-orm/pg-core";
import { users } from "./users.schema";
import { relations } from "drizzle-orm";
import { comments } from "./comments.schema";

export const posts = pg.pgTable("posts", {
  id: pg.serial("id").primaryKey(),
  title: pg.text("title").notNull(),
  content: pg.text("content").notNull(),
  authorId: pg.integer("authorId").references(() => users.id),
})

export const postRelations = relations(posts, ({ one, many }) => ({
  comments: many(comments),
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id]
  }),
}))
