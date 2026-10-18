import { Request, Response } from 'express';
import { findAllUsers } from '../services/users.service.js';

export const findAllUsersController = async (_req: Request, res: Response) => {
    const response = await findAllUsers();
    res.status(200).json(response);
}