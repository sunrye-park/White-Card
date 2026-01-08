import { db } from "./db";
import {
  visitors,
  type InsertVisitor,
  type Visitor
} from "@shared/schema";

export interface IStorage {
  recordVisit(visitor: InsertVisitor): Promise<Visitor>;
}

export class DatabaseStorage implements IStorage {
  async recordVisit(visitor: InsertVisitor): Promise<Visitor> {
    const [newVisitor] = await db.insert(visitors).values(visitor).returning();
    return newVisitor;
  }
}

export const storage = new DatabaseStorage();
