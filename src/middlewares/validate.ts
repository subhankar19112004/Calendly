import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";
import { badRequest } from "../utils/api-error.js";

export const validate = (schema: ZodSchema) => 
    (req: Request, _res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            throw badRequest("Validation failed", result.error.issues);
        }

        // If validation is successful, attach the validated data to the request object
        req.body = result.data
        next();
    }