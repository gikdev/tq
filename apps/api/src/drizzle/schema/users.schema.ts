import { relations } from "drizzle-orm";
import * as pg from "drizzle-orm/pg-core";
import { comments } from "./comments.schema";
import { posts } from "./posts.schema";
import { profileInfo } from "./profileInfo.schema";
import { usersToGroups } from "./groups.schema";

export const users = pg.pgTable("users", {
  id: pg.serial("id").primaryKey(),
  name: pg.text("name").notNull(),
  email: pg.text("email").notNull(),
  password: pg.text("password").notNull(),
})

export const usersRelations = relations(users, ({one,many})=> ({
  comments: many(comments),
  posts: many(posts),
  usersToGroups: many(usersToGroups),
}))