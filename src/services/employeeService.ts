import type { Employee } from "../types";
import { employeeRepo } from "../repositories/employeeRepo";

export type CreateEmployeeResult =
    | { ok: true; departments: ReturnType<typeof employeeRepo.getDepartments> }
    | { ok: false; field?: "firstName" | "department"; message: string };

export const employeeService = {
    createEmployee(deptName: string, employee: Employee): CreateEmployeeResult {
        if (!employeeRepo.departmentExists(deptName)) {
            return {
                ok: false,
                field: "department",
                message: "Department does not exist.",
            };
        }

        if (employee.firstName.trim().length < 3) {
            return {
                ok: false,
                field: "firstName",
                message: "First name must be at least 3 characters.",
            };
        }

        const updated = employeeRepo.createEmployee(deptName, {
            firstName: employee.firstName.trim(),
            lastName: employee.lastName?.trim() || undefined,
        });

        return { ok: true, departments: updated };
    },
};
