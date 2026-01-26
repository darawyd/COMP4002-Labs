import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <nav className="nav">
            <NavLink
                to="/employees"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Employees
            </NavLink>
            <NavLink
                to="/organization"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Organization
            </NavLink>
        </nav>
    );
}
