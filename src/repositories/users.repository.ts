import { prisma } from "../config/database.js";

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