import { z } from "zod";

export const createuserSchema = z.object({
    email: z.email("Invalid email format"),
    name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters")
});

export type CreateUserDto = z.infer<typeof createuserSchema>;