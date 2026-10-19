import { Router } from "express";
import { createUserController, findAllUsersController, findUserByIdController } from "../controllers/users.controller.js";

export const usersRouter: Router = Router();

usersRouter.get("/", findAllUsersController);

usersRouter.get("/:id", findUserByIdController);

usersRouter.post("/", createUserController);