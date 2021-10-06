import React from "react";

const Random = (props) => {
    const randomValue = Math.floor(Math.random() * props.max) + props.min;

    return (
        <div>
            <h2>{randomValue}</h2>
        </div>
    );
};

export default Random;
