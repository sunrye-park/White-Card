import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Simple visitor tracking
  app.post(api.visitors.record.path, async (req, res) => {
    try {
      const input = api.visitors.record.input.parse(req.body);
      const visitor = await storage.recordVisit(input);
      res.status(201).json(visitor);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
