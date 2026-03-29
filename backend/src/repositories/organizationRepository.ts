import { PrismaClient } from "@prisma/client";
import type { Role } from "../types.js";

const prisma = new PrismaClient();

export const organizationRepository = {
    async getAll(): Promise<Role[]> {
        return prisma.role.findMany();
    },

    async roleExists(role: string): Promise<boolean> {
        const found = await prisma.role.findFirst({
            where: { role },
        });
        return !!found;
    },

    async add(record: Role): Promise<Role> {
        return prisma.role.create({
            data: {
                firstName: record.firstName,
                lastName: record.lastName,
                role: record.role,
            },
        });
    },
};
