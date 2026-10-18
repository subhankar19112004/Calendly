import { getAll } from "../repositories/users.repository.js"

export const findAllUsers = async () => {
    const users = await getAll();
    return users;
}