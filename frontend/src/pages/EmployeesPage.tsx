import { useState } from "react";
import EmployeeList from "../components/EmployeeList";
import AddEmployeeForm from "../components/AddEmployeeForm";
// import { departments as initialDepartments } from "../data/departments";
import type { Department } from "../types";
import { employeeRepo } from "../repositories/employeeRepo";
import "./EmployeesPage.css";

export default function EmployeesPage() {
    const [departments, setDepartments] = useState<Department[]>(
        employeeRepo.getDepartments(),
    );

    return (
        <main className="page" aria-labelledby="employees-heading">
            <h2 id="employees-heading">Employees and Department</h2>

            <EmployeeList departments={departments} />

            <AddEmployeeForm
                departments={departments}
                onDepartmentsUpdated={setDepartments}
            />
        </main>
    );
}
