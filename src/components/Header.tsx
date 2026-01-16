import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <img src={logo} alt="Pixell River Logo" className="logo" />
                <div className="title-group">
                    <h1>Pixell River Employee Directory</h1>
                    <p>Welcome to internal employee portal.</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
