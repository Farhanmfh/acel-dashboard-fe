import axios from "axios";
import { useState } from "react";

import "./styles.css";

const CreateServer = () => {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [region, setRegion] = useState();
    const [date, setDate] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/add", {
                name,
                price,
                region,
                date,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="container">
            <div className="form">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Name</label>
                    <input
                    placeholder="Enter The User Name"
                        type={"text"}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Price Per Hour</label>
                    <input
                        type={"number"}
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <label>Region</label>
                    <select onChange={(e) => setRegion(e.target.value)}>
                        <option style={{ display: "none" }}>Region</option>
                        <option value="London">London</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Paris">Paris</option>
                        <option value="New York">New York</option>
                    </select>
                    <label>Date</label>
                    <input
                        type={"date"}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <button className="button" type="Submit">
                        Submit
                    </button>
                </form>
            </div>
            <div className="list">
                <h1>Price Per Month</h1>
                <h2 style={{ color: price ? "green" : "#ff2f00ba" }}>
                    {price ? "$" + price * 730 : "Enter the Price"}
                </h2>
            </div>
        </div>
    );
};

export default CreateServer;
