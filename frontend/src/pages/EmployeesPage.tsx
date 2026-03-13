import { useEffect, useState } from "react";
import EmployeeList from "../components/EmployeeList";
import AddEmployeeForm from "../components/AddEmployeeForm";
// import { departments as initialDepartments } from "../data/departments";
import type { Department } from "../types";
import { employeeRepo } from "../repositories/employeeRepo";
import "./EmployeesPage.css";

export default function EmployeesPage() {
    const [departments, setDepartments] = useState<Department[]>([]);

    useEffect(() => {
        async function load() {
            const data = await employeeRepo.getDepartments();
            setDepartments(data);
        }

        load();
    }, []);

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
