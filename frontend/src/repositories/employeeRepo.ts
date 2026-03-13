import type { Department, Employee } from "../types";
import { departments as seedDepartments } from "../data/departments";

const STORAGE_KEY = "pixell_departments";

function load(): Department[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return seedDepartments;
    try {
        return JSON.parse(raw) as Department[];
    } catch {
        return seedDepartments;
    }
}

function save(depts: Department[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(depts));
}

export const employeeRepo = {
    getDepartments(): Department[] {
        return load();
    },

    departmentExists(name: string): boolean {
        return load().some((d) => d.name === name);
    },

    createEmployee(deptName: string, employee: Employee): Department[] {
        const depts = load();

        const next = depts.map((d) =>
            d.name === deptName
                ? { ...d, employees: [...d.employees, employee] }
                : d,
        );

        save(next);
        return next;
    },
};
