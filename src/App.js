import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import CreateServer from "./components/CreateServer";
import ServerList from "./components/ServerList";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

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

export default App;
