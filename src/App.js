import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";

import CreateServer from "./components/CreateServer";
import ServerList from "./components/ServerList";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/serverList" element={<ServerList />} />
                    <Route exact path="/addServer" element={<CreateServer />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    );
}

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div className="NavBar">
            <h1 onClick={() => navigate("/")}>Acel Solutions Dashboard</h1>
        </div>
    );
};

export default App;
