import { Request, Response } from 'express';
import { createUser, deleteUserById, findAllUsers, findUserById, updateUserData } from '../services/users.service.js';
import { notFound } from '../utils/api-error.js';
import { sendSuccess } from '../utils/api-response.js';

export const findAllUsersController = async (_req: Request, res: Response) => {
    const response = await findAllUsers();
    sendSuccess(res, response, 200, `Users retrieved successfully. ${response.length} users found`);
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
        const newUser = await createUser(req.body);
        sendSuccess(res, newUser, 201, 'User created successfully');
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
}

export const updateUserController = async (req: Request, res: Response) => { 
    const { id } = req.params;
    const userData = req.body;

    const updateduser = await updateUserData(Number(id), userData);
    sendSuccess(res, updateduser, 200, 'User updated successfully');
}

export const deleteUserController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedUser = await deleteUserById(Number(id));
    sendSuccess(res, deletedUser, 200, 'User deleted successfully');
}