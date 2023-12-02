import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono().basePath("/api");

app.use("*", logger());
app.use(
  "*",
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.get("/categories", (c) => {
  const categories = CategoriesService.getAll();
  return c.json(categories);
});

app.get("/categories/:categoryId/rooms", (c) => {
  const categoryId = c.req.param("categoryId");
  const rooms = RoomsService.getBy(categoryId);
  return c.json(rooms);
});

export default app;
