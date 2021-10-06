import React from "react";

const AnotherFamilyMember = (props) => {
    return (
        <p>
            {props.name} <strong> {props.surname} </strong>
        </p>
    );
};

export default AnotherFamilyMember;
