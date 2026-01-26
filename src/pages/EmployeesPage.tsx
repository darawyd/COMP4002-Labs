import { useState } from "react";
import EmployeeList from "../components/EmployeeList";
import AddEmployeeForm from "../components/AddEmployeeForm";
import { departments as initialDepartments } from "../data/departments";
import type { Department, Employee } from "../types";

export default function EmployeesPage() {
    const [departments, setDepartments] =
        useState<Department[]>(initialDepartments);

    const handleAddEmployee = (deptName: string, employee: Employee) => {
        setDepartments((prev) =>
            prev.map((dept) =>
                dept.name === deptName
                    ? { ...dept, employees: [...dept.employees, employee] }
                    : dept,
            ),
        );
    };

    return (
        <>
            <EmployeeList departments={departments} />
            <AddEmployeeForm
                departments={departments}
                onAddEmployee={handleAddEmployee}
            />
        </>
    );
}
