import React from "react";
import DirectSon from "./DirectSon";

const DirectFather = (props) => {
    return (
        <div>
            <DirectSon name="Dante" age={1} nerd={true} />
            <DirectSon name="Yuri" age={31} nerd={true} />
            <DirectSon name="Juliana" age={34} nerd={false} />
        </div>
    );
};

export default DirectFather;
