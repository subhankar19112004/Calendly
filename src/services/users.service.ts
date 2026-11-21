import { prisma } from "../config/database.js";
import { CreateUserDto, UpdateUserDto } from "../dtos/users.dto.js";
import { getAll, getUserById, createUser as createUserRepo, updateUserDataRepo, deleteUserByIdRepo } from "../repositories/users.repository.js"
import { conflict, notFound } from "../utils/api-error.js";

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

export const updateUserData = async (id: number, userdata: UpdateUserDto) => {
    const user = await findUserById(id);
    if (!user) {
        throw notFound('User not found');
    }

    if (userdata.email && userdata.email !== user.email) {
        const existingUser = await findByMail(userdata.email);
        if (existingUser) {
            throw conflict('Email already in use');
        }
    }

    return updateUserDataRepo(id, userdata);
}

export const deleteUserById = async (id: number) => {
    const user = await findUserById(id);
    if (!user) {
        throw notFound('User not found');
    }
    return deleteUserByIdRepo(id);
}