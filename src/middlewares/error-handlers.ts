import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/api-error.js';

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => { 
    if (err instanceof ApiError) {
        const body: Record<string, unknown> = {
            success: false,
            message: err.message,
        }

        if(err.details) body.details = err.details;
        res.status(err.statusCode).json(body);
        return;
    }
}