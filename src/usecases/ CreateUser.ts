import { UserRepository } from "../interfaces/UserRepository";
import { User } from "../domain/ User";

export class CreateUser {
  constructor(private userRepo: UserRepository) {}

  async execute(name: string, email: string) {
    const user = new User(Date.now().toString(), name, email);
    user.validateEmail();
    return await this.userRepo.create(user);
  }
}
