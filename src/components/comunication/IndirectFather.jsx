import React, { useState } from "react";
import IndirectSon from "./IndirectSon";

const IndirectFather = (props) => {
    const [name, setName] = useState("?");
    const [age, setAge] = useState(0);
    const [nerd, setNerd] = useState(false);

    function sendDataToFather(nameParam, ageParam, nerdParam) {
        setName(nameParam);
        setAge(ageParam);
        setNerd(nerdParam);
    }

    return (
        <div>
            <span>{name} </span>
            <span>
                <strong>{age}</strong>{" "}
            </span>
            <span>{nerd ? "True" : "False"}</span>
            <IndirectSon sendDataToFather={sendDataToFather} />
        </div>
    );
};

export default IndirectFather;
