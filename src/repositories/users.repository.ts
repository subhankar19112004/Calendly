import { prisma } from "../config/database.js";
import { CreateUserDto, UpdateUserDto } from "../dtos/users.dto.js";

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

export const updateUserDataRepo = async (id: number, userData: UpdateUserDto) => {
    const user = await prisma.user.update({
        where: {
            id
        },
        data: userData
    });
    return user;
}

export const deleteUserByIdRepo = async (id: number) => { 
    const user = await prisma.user.delete({
        where: {
            id
        }
    });
    return user;
}