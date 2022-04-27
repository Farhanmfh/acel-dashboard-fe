import { useNavigate } from "react-router-dom";

import "./style.css";

const HomePage = () => {
    const navigate = useNavigate();
    const handleButtonClick = (path) => {
        navigate(`/${path}`);
    };
    return (
        <div className="flex-container">
            <div
                className="column server-list"
                onClick={() => handleButtonClick("serverList")}
            >
                <h1>View Server List</h1>
            </div>
            <div
                className="column add-server"
                onClick={() => handleButtonClick("addServer")}
            >
                <h1>Add New Server</h1>
            </div>
            <div
                className="column dashboard"
                onClick={() => handleButtonClick("dashboard")}
            >
                <h1>View Dashboard</h1>
            </div>
        </div>
    );
};

export default HomePage;
