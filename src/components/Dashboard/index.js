import axios from "axios";
import { useEffect, useState } from "react";

const getTotalPrice = (servers) => {
    let price = [];
    servers.forEach((element) => price.push(element.price));
    return price;
};
const Dashboard = () => {
    const [servers, setServers] = useState();

    useEffect(() => {
        console.log("First Effect");
        axios
            .get("http://localhost:3001/")
            .then((response) => response.data)
            .then((data) => setServers(data));
    }, []);

    return servers ? (
        <div>
            <h1>Dashboard</h1>
            <h2>
               Grand Total = ${getTotalPrice(servers).reduce(
                    (accumulator, currentValue) => accumulator + currentValue
                )}
            </h2>
        </div>
    ) : (
        <div>Loading....</div>
    );
};

export default Dashboard;
