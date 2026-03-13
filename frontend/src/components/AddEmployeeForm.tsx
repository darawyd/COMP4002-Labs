//import { useState } from "react";
import type { Department } from "../types";
import useFormInput from "../hooks/useFormInput";
import { employeeService } from "../services/employeeService";

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        firstName.clearMessage();
        department.clearMessage();

        firstName.validate((v) =>
            v.trim().length >= 3
                ? null
                : "First name must be at least 3 characters.",
        );
        const result = employeeService.createEmployee(department.value, {
            firstName: firstName.value,
            lastName: lastName.value || undefined,
        });

        if (!result.ok) {
            if (result.field === "firstName")
                firstName.setMessage(result.message);
            else if (result.field === "department")
                department.setMessage(result.message);
            return;
        }

        onDepartmentsUpdated(result.departments);

        firstName.setValue("");
        lastName.setValue("");
        department.setValue("");
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
