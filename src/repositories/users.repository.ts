import { prisma } from "../config/database.js";
import { CreateUserDto } from "../dtos/users.dto.js";

export const getAll = async () => {
    const users = await prisma.user.findMany();
    return users;
}

export const getUserById = async (id: number) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    })
    return user;
}

export const createUser = async (userData: CreateUserDto) => {
    const user = await prisma.user.create({
        data: userData
    });
    return user;
}