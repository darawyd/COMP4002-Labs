import { departments } from "../data/departments.js";
import type { Department, Employee } from "../types.js";

let store: Department[] = JSON.parse(JSON.stringify(departments));

export const employeeRepository = {
    getDepartments(): Department[] {
        return store;
    },

    departmentExists(name: string): boolean {
        return store.some((d) => d.name === name);
    },

    createEmployee(deptName: string, employee: Employee): Department[] {
        store = store.map((d) =>
            d.name === deptName
                ? { ...d, employees: [...d.employees, employee] }
                : d,
        );

        return store;
    },
};
