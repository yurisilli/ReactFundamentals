import React from "react";
import FamilyMember from "./FamilyMember";

const Family = (props) => {
    return (
        <div>
            <FamilyMember name="Yuri" surname={props.surname} />
            <FamilyMember name="Juliana" {...props} />
            <FamilyMember name="Dante" surname="Silli" />
        </div>
    );
};

export default Family;
