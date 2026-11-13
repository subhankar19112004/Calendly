import { Request, Response } from 'express';
import { createUser, findAllUsers, findUserById } from '../services/users.service.js';
import { notFound } from '../utils/api-error.js';
import { sendSuccess } from '../utils/api-response.js';

export const findAllUsersController = async (_req: Request, res: Response) => {
    const response = await findAllUsers();
    sendSuccess(res, response, 200, 'Users retrieved successfully');
}

export const findUserByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await findUserById(Number(id));
        sendSuccess(res, user);
    } catch (error) {
        const apiError = notFound("User not found");
        res.status(apiError.statusCode).json(apiError);
    }
}

export const createUserController = async (req: Request, res: Response) => {
    try {
        res.status(201).json({});
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
}