import { db } from "@/lib/db";
import { BadRequestException } from "@/lib/exceptions";

export class UsersService {
  static async getByWithError(email: string) {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new BadRequestException("No user found");
    }
    return user;
  }
}
