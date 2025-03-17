import express from "express";
import { UserController } from "../controllers/ UserController";
import { GetUser } from "../../usecases/GetUser";
import { UserPrismaRepository } from "../../infrastructure/repositories/ UserPrismaRepository";
const router = express.Router();
const userRepo = new UserPrismaRepository();
const getUser = new GetUser(userRepo);
const userController = new UserController(getUser);

router.get("/users/:id", userController.getUserById.bind(userController));

export default router;
