//import { useState } from "react";
import type { Department, Employee } from "../types";
import useFormInput from "../hooks/useFormInput";
//import { employeeService } from "../services/employeeService";
import { employeeRepo } from "../repositories/employeeRepo";

type Props = {
    departments: Department[];
    onDepartmentsUpdated: (next: Department[]) => void;
};

export default function AddEmployeeForm({
    departments,
    onDepartmentsUpdated,
}: Props) {
    const firstName = useFormInput("");
    const lastName = useFormInput("");
    const department = useFormInput("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        firstName.clearMessage();
        department.clearMessage();

        if (firstName.value.trim().length < 3) {
            firstName.setMessage("First name must be at least 3 characters.");
            return;
        }

        if (!department.value) {
            department.setMessage("Please select a department.");
            return;
        }

        const employee: Employee = {
            firstName: firstName.value,
            lastName: lastName.value || undefined,
        };

        try {
            const updatedDepartments = await employeeRepo.createEmployee(
                department.value,
                employee,
            );

            onDepartmentsUpdated(updatedDepartments);

            firstName.setValue("");
            lastName.setValue("");
            department.setValue("");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} aria-labelledby="add-employee-heading">
            <h3 id="add-employee-heading">Add New Employee</h3>

            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    value={firstName.value}
                    onChange={firstName.onChange}
                />
                {firstName.message && (
                    <p
                        role="alert"
                        style={{ color: "red", margin: "0.25rem 0 0" }}
                    >
                        {firstName.message}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    value={lastName.value}
                    onChange={lastName.onChange}
                />
            </div>

            <div>
                <label htmlFor="department">Department</label>
                <select
                    id="department"
                    value={department.value}
                    onChange={department.onChange}
                >
                    <option value="">-- Select --</option>
                    {departments.map((d) => (
                        <option key={d.name} value={d.name}>
                            {d.name}
                        </option>
                    ))}
                </select>
                {department.message && (
                    <p
                        role="alert"
                        style={{ color: "red", margin: "0.25rem 0 0" }}
                    >
                        {department.message}
                    </p>
                )}
            </div>

            <button type="submit">Add Employee</button>
        </form>
    );
}
