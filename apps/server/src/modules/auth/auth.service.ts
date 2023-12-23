import { JWT_SECRET } from "@/lib/constants";
import { db } from "@/lib/db";
import { BadRequestException, UnauthorizedException } from "@/lib/exceptions";
import { User } from "@prisma/client";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const ACCESS_TOKEN_EXPIRE_IN = 60 * 60;

export class AuthService {
  static async signUp(email: string, password: string) {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      throw new BadRequestException("User already exists");
    }

    const salt = bcrypt.genSaltSync();
    const hashedPassword = await bcrypt.hash(password, salt);

    await db.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return "12341245";
  }

  static async createToken(user: User) {
    return jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRE_IN,
    });
  }

  static async signIn(email: string, password: string) {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new UnauthorizedException("No user found");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException("Wrong password");
    }

    const accessToken = AuthService.createToken(user);

    return accessToken;
  }
}
