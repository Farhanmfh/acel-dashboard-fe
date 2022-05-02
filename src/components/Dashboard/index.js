import axios from "axios";
import { useEffect, useState } from "react";

import "./style.css";

const getTotalPrice = (servers) => {
    return servers.reduce(
        (acc, val) => {
            if (val.name) {
                acc.user += 1;
            }
            acc.price += val.price;
            return acc;
        },
        { price: 0, user: 0 }
    );
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
            <div className="title">Dashboard</div>
            <div className="dashboard-price">
                <div className="total-price">
                    ${getTotalPrice(servers).price}
                    {getTotalPrice(servers).user}
                    <div className="total-amount-lable">Total Amount</div>
                </div>
                <div className="total-server">
                    {getTotalPrice(servers).user}
                    <div className="total-server-lable">Total Servers</div>
                </div>
            </div>
        </div>
    ) : (
        <div>Loading....</div>
    );
};

export default Dashboard;
