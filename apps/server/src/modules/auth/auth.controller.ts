import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { signInDto, signUpDto } from "./dtos/auth.dto";

export const router = new Hono();

router
  .post("/sign-up", zValidator("json", signUpDto), async (c) => {
    const { email, password } = await c.req.json();

    if (email !== "son.tran@enouvo.com" || password !== "enouvo12345") {
      return c.json(
        { message: "Invalid email or password", statusCode: 401 },
        401,
      );
    }

    return c.json({ token: "124124124124124" });
  })
  .post("/sign-in", zValidator("json", signInDto), async (c) => {
    const { email, password } = await c.req.json();

    if (email !== "son.tran@enouvo.com" || password !== "enouvo12345") {
      return c.json(
        { message: "Invalid email or password", statusCode: 401 },
        401,
      );
    }

    return c.json({ token: "124124124124124" });
  });
