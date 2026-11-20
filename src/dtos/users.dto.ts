import { z } from "zod";

export const createUserSchema = z.object({
    email: z.email("Invalid email format"),
    name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters")
});

export const updateUserSchema = z.object({
    email: z.email("Invalid email format").optional(),
    name : z.string("Name must be a string").min(1, "Name is required").max(100, "Name must be less than 100 characters").optional()
}).refine((data) => data.email || data.name, {
    message: "At least one field (email or name) must be provided for update",
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
export type UpdateUserDto = z.infer<typeof updateUserSchema>;