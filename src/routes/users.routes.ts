import { Router } from "express";
import { findAllUsersController } from "../controllers/users.controller.js";

export const usersRouter: Router = Router();

usersRouter.get("/", findAllUsersController);