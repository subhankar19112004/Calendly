import { Router } from "express";
import {
    createUserController,
    deleteUserController,
    findAllUsersController,
    findUserByIdController,
    updateUserController
} from "../controllers/users.controller.js";
import { validate } from "../middlewares/validate.js";
import { createUserSchema, updateUserSchema } from "../dtos/users.dto.js";

export const usersRouter: Router = Router();

usersRouter.get("/", findAllUsersController);

usersRouter.get("/:id", findUserByIdController);

usersRouter.post("/", validate(createUserSchema), createUserController);

usersRouter.put("/:id", validate(updateUserSchema), updateUserController);

usersRouter.delete("/:id", deleteUserController);