import React from "react";

const DirectSon = (props) => {
    return (
        <div>
            <span>
                <strong>{props.name}</strong>{" "}
            </span>
            <span>{props.age} </span>
            <span>{props.nerd ? "True" : "False"}</span>
        </div>
    );
};

export default DirectSon;
