import { PrismaPg } from "@prisma/adapter-pg";
import { DATABASE_URL } from "./env.js";
import { PrismaClient } from "../../generated/prisma/client.js";

export const adapter = new PrismaPg({
    connectionString : DATABASE_URL
})

export const prisma = new PrismaClient({
    adapter
});

export const connectToDatabase = async () => {
    try {
        await prisma.$connect();
        console.log("Connected to the database successfully.");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit the process with an error code
    }
};