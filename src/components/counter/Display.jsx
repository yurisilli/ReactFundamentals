import React from "react";

const Display = (props) => {
    return (
        <div className="counterInfo">
            <h2>Counter: </h2>
            <h2>{props.number}</h2>
        </div>
    );
};

export default Display;
