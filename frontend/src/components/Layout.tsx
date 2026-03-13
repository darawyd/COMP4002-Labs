import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

export default function Layout() {
    return (
        <>
            <Header />
            <NavBar />
            <Outlet />
            <footer className="footer">
                <p>
                    Copyright Pixell River Financial {new Date().getFullYear()}.
                </p>
            </footer>
        </>
    );
}
