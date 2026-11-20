import { Router } from "express";
import { createUserController, findAllUsersController, findUserByIdController } from "../controllers/users.controller.js";
import { validate } from "../middlewares/validate.js";
import { createUserSchema } from "../dtos/users.dto.js";

export const usersRouter: Router = Router();

usersRouter.get("/", findAllUsersController);

usersRouter.get("/:id", findUserByIdController);

usersRouter.post("/", validate(createUserSchema), createUserController);