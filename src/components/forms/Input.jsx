import "./Input.css";
import React, { useState } from "react";

const Input = (props) => {
    const [value, setValue] = useState("Default");

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className="Input">
            <h2> {value} </h2>
            <input value={value} onChange={handleChange}></input>
            <input value={value} readOnly></input>
            <input value={undefined}></input>
        </div>
    );
};

export default Input;
