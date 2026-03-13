import type { Department } from "../types";
import "./EmployeeList.css";

type EmployeeListProps = {
    departments: Department[];
};

export default function EmployeeList(props: EmployeeListProps) {
    const { departments } = props;

    return (
        <main className="directory" aria-label="Employee Directory">
            {departments.map((dept) => (
                <section key={dept.name} className="dept-card">
                    <h2>{dept.name}</h2>
                    <ul>
                        {dept.employees.map((emp, idx) => {
                            const fullName = emp.lastName
                                ? `${emp.firstName} ${emp.lastName}`
                                : emp.firstName;

                            return (
                                <li key={`${dept.name}-${idx}`}>{fullName}</li>
                            );
                        })}
                    </ul>
                </section>
            ))}
        </main>
    );
}
