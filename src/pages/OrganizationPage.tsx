// import { roles } from "../data/roles";
import { useState } from "react";
import type { Role } from "../types";
import { organizationRepo } from "../repositories/organizationRepo";
import AddRoleForm from "../components/AddRoleForm";
import "./OrganizationPage.css";

export default function OrganizationPage() {
    const [records, setRecords] = useState<Role[]>(() =>
        organizationRepo.getAll(),
    );

    const reload = () => {
        setRecords(organizationRepo.getAll());
    };

    return (
        <main className="page org">
            <h2>Leadership and Management</h2>

            <AddRoleForm onSuccess={reload} />

            <div
                className="org-table"
                role="table"
                aria-label="Leadership and Management"
            >
                {records.map((r, idx) => (
                    <div
                        className="org-row"
                        role="row"
                        key={`${r.role}-${idx}`}
                    >
                        <div className="org-name" role="cell">
                            {r.firstName} {r.lastName}
                        </div>
                        <div className="org-role" role="cell">
                            {r.role}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
