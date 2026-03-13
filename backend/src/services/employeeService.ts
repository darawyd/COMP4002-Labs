import { employeeRepository } from "../repositories/employeeRepository.js";
import type { Employee } from "../types.js";

export const employeeService = {
    getDepartments() {
        return employeeRepository.getDepartments();
    },

    createEmployee(deptName: string, employee: Employee) {
        if (employee.firstName.length < 3) {
            throw new Error("First name must be at least 3 characters");
        }

        if (!employeeRepository.departmentExists(deptName)) {
            throw new Error("Department does not exist");
        }

        return employeeRepository.createEmployee(deptName, employee);
    },
};
