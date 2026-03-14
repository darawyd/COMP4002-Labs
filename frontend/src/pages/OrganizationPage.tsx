// import { roles } from "../data/roles";
import { useEffect, useState } from "react";
import type { Role } from "../types";
import { organizationRepo } from "../repositories/organizationRepo";
import AddRoleForm from "../components/AddRoleForm";
import "./OrganizationPage.css";

export default function OrganizationPage() {
    const [records, setRecords] = useState<Role[]>([]);

    useEffect(() => {
        async function load() {
            const data = await organizationRepo.getAll();
            setRecords(data);
        }

        load();
    }, []);

    return (
        <main className="page org">
            <h2>Leadership and Management</h2>

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
            <AddRoleForm
                onSuccess={async () => {
                    const data = await organizationRepo.getAll();
                    setRecords(data);
                }}
            />
        </main>
    );
}
