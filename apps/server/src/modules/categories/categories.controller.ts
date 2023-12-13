import { Hono } from "hono";
import { CategoriesService } from "./categories.service";
import { RoomsService } from "../rooms/rooms.service";

export const router = new Hono();

router
  .get("/", async (c) => {
    const categories = await CategoriesService.getAll();
    return c.json(categories);
  })
  .post("/", async (c) => {
    const data = await c.req.json();
    const category = await CategoriesService.create(data);
    return c.json(category);
  })
  .get("/:categoryId", async (c) => {
    const categoryId = c.req.param("categoryId");
    const category = await CategoriesService.getBy(categoryId);
    return c.json(category);
  })
  .delete("/:categoryId", async (c) => {
    const categoryId = c.req.param("categoryId");
    const category = await CategoriesService.delete(categoryId);
    return c.json(category);
  })
  .get("/:categoryId/rooms", (c) => {
    const categoryId = c.req.param("categoryId");
    const rooms = RoomsService.getAllBy(categoryId);
    return c.json(rooms);
  });
