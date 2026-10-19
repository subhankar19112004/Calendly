import { getAll, getUserById, createUser as createUserRepo } from "../repositories/users.repository.js"

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

export const createUser = async (userData: { name: string, email: string }) => {
    const user = await createUserRepo(userData);
    return user;
}