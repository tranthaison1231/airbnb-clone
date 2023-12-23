import { Hono } from "hono";
import { RoomsService } from "./rooms.service";
import { auth } from "@/middlewares/auth";

export const router = new Hono();

router
  .get("/:roomId", async (c) => {
    const roomId = c.req.param("roomId");
    const room = await RoomsService.getBy(roomId);
    return c.json(room);
  })
  .delete("/:roomId", auth, async (c) => {
    const roomId = c.req.param("roomId");
    const user = c.get("user");
    await RoomsService.delete(roomId, user.id);
    return c.json({
      message: "Room deleted successfully",
    });
  });
