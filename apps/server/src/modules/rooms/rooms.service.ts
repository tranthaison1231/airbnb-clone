import { db } from "@/lib/db";
import { BadRequestException } from "@/lib/exceptions";
import { Prisma } from "@prisma/client";

export class RoomsService {
  static async getAllBy(categoryId: string) {
    const rooms = await db.room.findMany({ where: { categoryId } });
    return rooms;
  }

  static async getBy(roomId: string) {
    const room = await db.room.findMany({
      where: {
        id: roomId,
      },
    });
    return room;
  }

  static async create(
    categoryId: string,
    input: Prisma.RoomCreateWithoutCategoryInput,
  ) {
    const createdRoom = await db.room.create({
      data: {
        ...input,
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });

    return createdRoom;
  }
}
