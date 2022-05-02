import { useNavigate } from "react-router-dom";

import "./style.css";

const NavBar = () => {
    const navigate = useNavigate();
    const handleButtonClick = (path) => {
        navigate(`/${path}`);
    };

    return (
        <div className="container">
            <div className="NavBar">
                <h1 onClick={() => navigate("/")}>Acel Solutions Dashboard</h1>
            </div>
            <div className="menu-items">
                <div
                    className="server-list"
                    onClick={() => handleButtonClick("serverList")}
                >
                    Servers
                </div>
                <div
                    className="dashboard"
                    onClick={() => handleButtonClick("dashboard")}
                >
                    Billing Dashboard
                </div>
                <div
                    className="add-server"
                    onClick={() => handleButtonClick("addServer")}
                >
                    Add a Server
                </div>
            </div>
        </div>
    );
};

export default NavBar;
