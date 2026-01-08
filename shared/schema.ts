import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const visitors = pgTable("visitors", {
  id: serial("id").primaryKey(),
  visitedAt: timestamp("visited_at").defaultNow(),
  userAgent: text("user_agent"),
});

export const insertVisitorSchema = createInsertSchema(visitors).omit({ id: true, visitedAt: true });

export type Visitor = typeof visitors.$inferSelect;
export type InsertVisitor = z.infer<typeof insertVisitorSchema>;
