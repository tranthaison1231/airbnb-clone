import { Hono } from "hono";
import { CategoriesService } from "./categories.service";
import { RoomsService } from "../rooms/rooms.service";

export const router = new Hono();

router
  .get("/", (c) => {
    const categories = CategoriesService.getAll();
    return c.json(categories);
  })
  .get("/:categoryId/rooms", (c) => {
    const categoryId = c.req.param("categoryId");
    const rooms = RoomsService.getAllBy(categoryId);
    return c.json(rooms);
  });
