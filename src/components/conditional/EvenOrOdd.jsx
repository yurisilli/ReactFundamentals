import React from "react";

const EvenOrOdd = (props) => {
    const isEven = props.number % 2 === 0;

    return <div>{isEven ? <p>Even</p> : <p>Odd</p>}</div>;
};

export default EvenOrOdd;
