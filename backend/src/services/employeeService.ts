import { employeeRepo } from "../repositories/employeeRepo";
import type { Employee } from "../types";

export const employeeService = {
    getDepartments() {
        return employeeRepo.getDepartments();
    },

    createEmployee(deptName: string, employee: Employee) {
        if (employee.firstName.trim().length < 3) {
            throw new Error("First name must be at least 3 characters");
        }

        if (!employeeRepo.departmentExists(deptName)) {
            throw new Error("Department does not exist");
        }

        return employeeRepo.createEmployee(deptName, employee);
    },
};
