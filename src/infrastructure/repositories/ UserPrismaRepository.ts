import { prisma } from "../  prismaClient";
import { UserRepository } from "../../interfaces/UserRepository";
import { User } from "../../domain/ User";

export class UserPrismaRepository implements UserRepository {
  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { id } });
    return user ? new User(user.id, user.name, user.email) : null;
  }

  async create(user: User): Promise<User> {
    const newUser = await prisma.user.create({
      data: { id: user.id, name: user.name, email: user.email },
    });
    return new User(newUser.id, newUser.name, newUser.email);
  }
}
