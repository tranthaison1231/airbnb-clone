import { Hono } from "hono";
import { RoomsService } from "./rooms.service";

export const router = new Hono();

router.get("/:roomId", (c) => {
  const roomId = c.req.param("roomId");
  const room = RoomsService.getBy(roomId);
  return c.json(room);
});
