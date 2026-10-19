import { Request, Response } from 'express';
import { createUser, findAllUsers, findUserById } from '../services/users.service.js';

export const findAllUsersController = async (_req: Request, res: Response) => {
    const response = await findAllUsers();
    res.status(200).json(response);
}

export const findUserByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await findUserById(Number(id));
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error finding user by ID' });
    }
}

export const createUserController = async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        const newUser = await createUser({ name, email });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
}