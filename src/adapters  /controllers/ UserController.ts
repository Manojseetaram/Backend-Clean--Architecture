import express , { Request, Response } from "express";
import { GetUser } from "../../usecases/GetUser";

export class UserController {
  constructor(private getUser: GetUser) {}

  async getUserById(req: Request, res: Response) {
    const user = await this.getUser.execute(req.params.id);
    res.json(user);
  }
}
