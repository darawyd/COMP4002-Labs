import Header from "./components/Header";
import { Department } from "./types";
import "./App.css";

const departments: Department[] = [
    {
        name: "Administration",
        employees: [
            { firstName: "Zoë", lastName: "Robins" },
            { firstName: "Madeleine", lastName: "Madden" },
        ],
    },
    {
        name: "Audit",
        employees: [
            { firstName: "Josha", lastName: "Sadowski" },
            { firstName: "Kate", lastName: "Fleetwood" },
        ],
    },
];

function App() {
    return (
        <>
            <Header />
            <main id="employee-container">
                {departments.map((dept) => (
                    <section key={dept.name} className="department-section">
                        <h2>{dept.name}</h2>
                        <ul>
                            {dept.employees.map((emp, index) => (
                                <li key={index}>
                                    {emp.firstName} {emp.lastName || ""}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </main>
            <footer>
                <p>
                    Copyright Pixell River Financial {new Date().getFullYear()}.
                </p>
            </footer>
        </>
    );
}

export default App;
