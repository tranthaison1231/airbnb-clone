import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { CategoriesService } from "./modules/categories.service";
import { RoomsService } from "./modules/rooms.service";

const app = new Hono().basePath("/api");

app.use("*", logger());
app.use(
  "*",
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.post("/sign-up", async (c) => {
  const { email, password } = await c.req.json();

  if (!email || !password) {
    return c.json(
      { message: "Email and password are required", statusCode: 400 },
      400
    );
  }

  if (email !== "son.tran@enouvo.com" || password !== "enouvo12345") {
    return c.json(
      { message: "Invalid email or password", statusCode: 401 },
      401
    );
  }

  return c.json({ token: "124124124124124" });
});

app.get("/categories", (c) => {
  const categories = CategoriesService.getAll();
  return c.json(categories);
});

app.get("/categories/:categoryId/rooms", (c) => {
  const categoryId = c.req.param("categoryId");
  const rooms = RoomsService.getBy(categoryId);
  return c.json(rooms);
});

app.notFound((c) => {
  return c.json(
    {
      message: "Not found",
      statusCode: 404,
    },
    404
  );
});

export default app;
