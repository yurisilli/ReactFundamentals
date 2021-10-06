import "./Card.css";
import React from "react";

const Card = (props) => {
    const cardStyle = {
        backgroundColor: props.color || "#1ed760",
        borderColor: props.color || "#1ed760",
    };

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.title}</div>
            <div className="Content"> {props.children} </div>
        </div>
    );
};

export default Card;
