import { UserRepository } from "../interfaces/UserRepository.js";  // Use .js if you're using ES Modules


export class GetUser {
  constructor(private userRepo: UserRepository) {}

  async execute(id: string) {
    return await this.userRepo.findById(id);
  }
}
