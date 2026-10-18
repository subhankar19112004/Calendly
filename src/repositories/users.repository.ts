import { prisma } from "../config/database.js";

export const getAll = async () => {
    const users = await prisma.user.findMany();
    return users;
}