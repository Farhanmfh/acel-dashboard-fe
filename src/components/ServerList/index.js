import { useEffect, useState } from "react";
import axios from "axios";

const ServerList = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get("http://localhost:3001/")
            .then((response) => response.data)
            .then((data) => setData(data));
    }, []);

    console.log(data);
    return data ? (
        <div>
            <h1>Server List - Rumana</h1>
            {data.map((server) => (
                <div key={server._id}>
                    <h1>{server.name}</h1>
                    <h2>{server.price}</h2>
                    <h2>{server.region}</h2>
                    <h2>{server.date}</h2>
                </div>
            ))}
        </div>
    ) : (
        <h2>Loading....</h2>
    );
};

export default ServerList;
