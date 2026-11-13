import { notFound } from "../utils/api-error.js"
import { Request, Response, NextFunction } from "express"

export const routeNotFoundHandler = (_req: Request, _res: Response, next: NextFunction) => {
    next(notFound("Route not found"));
}