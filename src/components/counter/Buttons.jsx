import React from "react";

const Buttons = (props) => {
    return (
        <div>
            <button className="btnIncDec" onClick={props.increment}>
                Increment (+)
            </button>
            <button className="btnIncDec" onClick={props.decrement}>
                Decrement (-)
            </button>
        </div>
    );
};

export default Buttons;
