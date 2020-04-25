import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSync, faCog } from '@fortawesome/free-solid-svg-icons'

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './Scenario.css';

const Scenario = props => {
    const auth = useContext(AuthContext);
    return (
        <React.Fragment>


        </React.Fragment>
    );
};

export default Scenario;
