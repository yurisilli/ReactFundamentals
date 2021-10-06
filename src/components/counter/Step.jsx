import React from "react";

const Step = (props) => {
    return (
        <div className="setSteps">
            <label htmlFor="stepsInput">Steps: </label>
            <input
                id="stepsInput"
                className="stepsInput"
                type="number"
                value={props.steps}
                onChange={(e) => props.setSteps(+e.target.value)}
            ></input>
        </div>
    );
};

export default Step;
