import type { Department, Employee } from "../types";

const API = "http://localhost:3000/api/employees";

export const employeeRepo = {
    async getDepartments(): Promise<Department[]> {
        const res = await fetch(API);
        return res.json();
    },

    async createEmployee(deptName: string, employee: Employee) {
        const res = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                department: deptName,
                employee,
            }),
        });

        return res.json();
    },
};
