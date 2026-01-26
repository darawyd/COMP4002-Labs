import { roles } from "../data/roles";
import "./OrganizationPage.css";

export default function OrganizationPage() {
    return (
        <main className="page org">
            <h2>Leadership and Management</h2>

            <div
                className="org-table"
                role="table"
                aria-label="Leadership and Management"
            >
                {roles.map((r, idx) => (
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
