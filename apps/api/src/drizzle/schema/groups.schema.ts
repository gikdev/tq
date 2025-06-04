import * as pg from "drizzle-orm/pg-core";
import { users } from "./users.schema";
import { relations } from "drizzle-orm";

export const groups = pg.pgTable("groups", {
  id: pg.serial("id").primaryKey(),
  name: pg.text("name").notNull(),
})

// This is joint table
export const usersToGroups = pg.pgTable("usersToGroup", {
  userId: pg.integer("userId").references(() => users.id),
  groupId: pg.integer("groupId").references(() => groups.id),
}, table => ({
  pk: pg.primaryKey({ columns: [table.groupId, table.userId] }),
  userIdIndex: pg.index("userIdIndex").on(table.userId),
}))

export const usersToGroupsRelations = relations(usersToGroups, ({ one }) => ({
  users: one(users, {
    fields: [usersToGroups.userId],
    references: [users.id],
  }),
  groups: one(groups, {
    fields: [usersToGroups.groupId],
    references: [groups.id],
  }),
}))
