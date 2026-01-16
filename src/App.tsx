import "./App.css";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import { departments } from "./data/departments";

export default function App() {
    return (
        <>
            <Header />
            <EmployeeList departments={departments} />
            <footer className="footer">
                <p>
                    Copyright Pixell River Financial {new Date().getFullYear()}.
                </p>
            </footer>
        </>
    );
}
