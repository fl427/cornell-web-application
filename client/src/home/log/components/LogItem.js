import React, { useState, useContext } from "react";


import Card from "../../../shared/components/UIElements/Card";
import Button from "../../../shared/components/FormElements/Button";

import { AuthContext } from '../../../shared/context/auth-context';
import { useHttpClient } from '../../../shared/hooks/http-hook';
import "./LogItem.css";

const LogItem = props => {
    const auth = useContext(AuthContext);

    return (
        <React.Fragment>
            {props.createDate}<sub>nd</sub>: {props.log}
            <br/><br/>
        </React.Fragment>
    );
};

export default LogItem;
