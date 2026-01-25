import { useState } from "react";
import type { Department, Employee } from "../types";

type AddEmployeeFormProps = {
    departments: Department[];
    onAddEmployee: (deptName: string, employee: Employee) => void;
};

export default function AddEmployeeForm({
    departments,
    onAddEmployee,
}: AddEmployeeFormProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [department, setDepartment] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (firstName.trim().length < 3) {
            setError("First name must be at least 3 characters long.");
            return;
        }

        if (!department) {
            setError("Please select a department.");
            return;
        }

        const newEmployee: Employee = {
            firstName: firstName.trim(),
            lastName: lastName.trim() || undefined,
        };

        onAddEmployee(department, newEmployee);

        setFirstName("");
        setLastName("");
        setDepartment("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add New Employee</h3>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div>
                <label>First Name</label>
                <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            <div>
                <label>Last Name</label>
                <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            <div>
                <label>Department</label>
                <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                >
                    <option value="">-- Select --</option>
                    {departments.map((d) => (
                        <option key={d.name} value={d.name}>
                            {d.name}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit">Add Employee</button>
        </form>
    );
}
