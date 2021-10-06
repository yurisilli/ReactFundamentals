import React from "react";

const FamilyMember = (props) => {
    return (
        <p>
            {props.name} <strong> {props.surname} </strong>
        </p>
    );
};

export default FamilyMember;
