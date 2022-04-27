import { useState } from "react";

const CreateServer = () => {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [region, setRegion] = useState();
    const [date, setDate] = useState();

    const handleInputField = (field, value) => {
        // Need to add Logic
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, price, region, date);
    };
    return (
        <div>
            <h1>Add New Server</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type={"text"}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type={"number"}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type={"text"}
                    onChange={(e) => setRegion(e.target.value)}
                />
                <input
                    type={"date"}
                    onChange={(e) => setDate(e.target.value)}
                />

                <button type="Submit">Submit</button>
            </form>

            <h1>{name}</h1>
            <h1>{price}</h1>
            <h1>{region}</h1>
            <h1>{date}</h1>
        </div>
    );
};

export default CreateServer;
