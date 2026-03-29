import { PrismaClient } from "@prisma/client";
import { departments } from "../src/data/departments.js";
import { roles } from "../src/data/roles.js";

const prisma = new PrismaClient();

async function main() {
    console.log("Clearing database...");

    await prisma.employee.deleteMany();
    await prisma.department.deleteMany();
    await prisma.role.deleteMany();

    console.log("Seeding departments + employees...");

    // Departments
    for (const deptData of departments) {
        await prisma.department.create({
            data: {
                name: deptData.name,

                // Employees
                employees: {
                    create: deptData.employees.map((emp) => ({
                        firstName: emp.firstName,
                        lastName: emp.lastName ?? null,
                    })),
                },
            },
        });
    }

    console.log("Seeding roles...");

    await prisma.role.createMany({
        data: roles.map((r) => ({
            firstName: r.firstName,
            lastName: r.lastName,
            role: r.role,
        })),
    });

    console.log("Seed completed");
}

main()
    .catch((e) => {
        console.error("Seed failed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
