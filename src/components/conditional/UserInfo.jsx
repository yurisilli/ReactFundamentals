import React from "react";
import If from "./If";

const UserInfo = (props) => {
    const user = props.user || {};

    return (
        <div>
            <If test={user && user.name}>
                Seja bem vindo <strong>{props.user.name}</strong>!
            </If>
            <If test={!user || !user.name}>
                Seja bem vindo <strong>macio</strong>!
            </If>
        </div>
    );
};

export default UserInfo;
