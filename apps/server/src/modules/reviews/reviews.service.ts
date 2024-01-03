import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

export class ReviewsService {
  static async getAllBy(roomId: string) {
    const reviews = await db.review.findMany({
      where: {
        roomId,
      },
      select: {
        user: {
          select: {
            email: true,
          },
        },
        comment: true,
        id: true,
        rate: true,
      },
    });
    return reviews;
  }

  static async create(
    roomId: string,
    userId: string,
    createReviewDto: Omit<Prisma.ReviewCreateInput, "user" | "room">,
  ) {
    const review = await db.review.create({
      data: {
        ...createReviewDto,
        room: {
          connect: {
            id: roomId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return review;
  }
}
