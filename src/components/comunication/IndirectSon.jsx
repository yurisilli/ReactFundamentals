import React from "react";

const IndirectSon = (props) => {
    const randomAge = () => Math.floor(Math.random() * 60) + 1;
    const ramdomNerd = () => Math.random() > 0.5;

    return (
        <div>
            <button
                onClick={(e) =>
                    props.sendDataToFather("Yuri", randomAge, ramdomNerd)
                }
            >
                Send data to Father
            </button>
        </div>
    );
};

export default IndirectSon;
