import { prisma } from "../config/database.js";
import { CreateUserDto } from "../dtos/users.dto.js";
import { getAll, getUserById, createUser as createUserRepo } from "../repositories/users.repository.js"
import { conflict } from "../utils/api-error.js";

export const findAllUsers = async () => {
    const users = await getAll();
    return users;
}

export const findUserById = async (id: number) => {
    const user = await getUserById(id);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
}

export const findByMail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });
    return user;
}

export const createUser = async (userData: CreateUserDto) => {
    const existingUser = await findByMail(userData.email);
    if (existingUser) {
        throw conflict('User already exists');
    }
    return createUserRepo(userData);
}