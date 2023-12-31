import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { forgotPasswordDto, signInDto, signUpDto } from "./dtos/auth.dto";
import { AuthService } from "./auth.service";

export const router = new Hono();

router
  .post("/sign-up", zValidator("json", signUpDto), async (c) => {
    const { email, password } = await c.req.json();

    await AuthService.signUp(email, password);

    return c.json({ message: "Sign up successfully!" });
  })
  .post("/sign-in", zValidator("json", signInDto), async (c) => {
    const { email, password } = await c.req.json();

    const accessToken = await AuthService.signIn(email, password);

    return c.json({ accessToken: accessToken });
  })
  .post(
    "/forgot-password",
    zValidator("json", forgotPasswordDto),
    async (c) => {
      const { email } = await c.req.json();
      await AuthService.forgotPassword(email);

      return c.json({
        message: "Forgot password successfully! Please check your email",
        status: 200,
      });
    },
  );
