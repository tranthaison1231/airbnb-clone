import { Hono } from "hono";

export const router = new Hono();

router
  .post("/sign-up", async (c) => {
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
  })
  .post("/sign-in", async (c) => {
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
