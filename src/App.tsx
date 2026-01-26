import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import AddEmployeeForm from "./components/AddEmployeeForm";

import { departments as initialDepartments } from "./data/departments";
import type { Department, Employee } from "./types";

export default function App() {
    const [departments, setDepartments] =
        useState<Department[]>(initialDepartments);

    const handleAddEmployee = (deptName: string, employee: Employee) => {
        setDepartments((prevDepartments) =>
            prevDepartments.map((dept) =>
                dept.name === deptName
                    ? { ...dept, employees: [...dept.employees, employee] }
                    : dept,
            ),
        );
    };

    return (
        <>
            <Header />

            <EmployeeList departments={departments} />

            <AddEmployeeForm
                departments={departments}
                onAddEmployee={handleAddEmployee}
            />

            <footer className="footer">
                <p>
                    Copyright Pixell River Financial {new Date().getFullYear()}.
                </p>
            </footer>
        </>
    );
}
