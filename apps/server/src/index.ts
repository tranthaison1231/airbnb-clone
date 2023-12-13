import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { router as auth } from "./modules/auth/auth.controller";
import { router as categories } from "./modules/categories/categories.controller";
import { router as rooms } from "./modules/rooms/rooms.controller";

const app = new Hono().basePath("/api");

app.use("*", logger());
app.use(
  "*",
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.route("/", auth);
app.route("/categories", categories);
app.route("/rooms", rooms);

app.notFound((c) => {
  return c.json(
    {
      message: "Not found",
      statusCode: 404,
    },
    404
  );
});

serve(app, () => {
  console.log("Server is running on http://localhost:3000");
});