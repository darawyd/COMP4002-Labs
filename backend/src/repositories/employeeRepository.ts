import { PrismaClient } from "@prisma/client";
import type { Department, Employee } from "../types.js";

const prisma = new PrismaClient();

export const employeeRepository = {
    async getDepartments(): Promise<Department[]> {
        return prisma.department.findMany({
            include: {
                employees: true,
            },
        });
    },

    async departmentExists(name: string): Promise<boolean> {
        const dept = await prisma.department.findFirst({
            where: { name },
        });
        return !!dept;
    },

    async createEmployee(
        deptName: string,
        employee: Employee,
    ): Promise<Department[]> {
        const dept = await prisma.department.findFirst({
            where: { name: deptName },
        });

        if (!dept) {
            throw new Error("Department not found");
        }

        await prisma.employee.create({
            data: {
                firstName: employee.firstName,
                lastName: employee.lastName ?? null,
                departmentId: dept.id,
            },
        });

        return prisma.department.findMany({
            include: {
                employees: true,
            },
        });
    },
};
