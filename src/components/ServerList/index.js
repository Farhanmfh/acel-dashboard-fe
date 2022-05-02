import { useEffect, useState } from "react";
import axios from "axios";

import "./style.css";

const ServerList = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios
            .get("http://localhost:3001/")
            .then((response) => response.data)
            .then((data) => setData(data));
    }, []);

    return data ? (
        <div>
            <div className="title">Servers</div>
            <div className="table-container">
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Region</th>
                        <th>Price per hour</th>
                    </tr>
                    {data.map((server) => (
                        <tr key={server._id}>
                            <td>{server.date.substring(1, 10)}</td>
                            <td>{server.name}</td>
                            <td>{server.region}</td>
                            <td>${server.price}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    ) : (
        <h2>Loading....</h2>
    );
};

export default ServerList;
