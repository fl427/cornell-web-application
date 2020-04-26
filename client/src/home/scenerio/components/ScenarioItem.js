import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { faCoffee, faSync, faBackward } from '@fortawesome/free-solid-svg-icons'

import Card from "../../../shared/components/UIElements/Card";
import Button from "../../../shared/components/FormElements/Button";

import { AuthContext } from '../../../shared/context/auth-context';
import { useHttpClient } from '../../../shared/hooks/http-hook';
import './ScenarioItem.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Avatar from "../../../shared/components/UIElements/Avatar";

const ScenarioItem = props => {
    const auth = useContext(AuthContext);
    return (
        <React.Fragment>
            <Link to={`/dogs/${props.id}`}>
            <img className="icon-dog" src={`http://localhost:5000/${props.image}` } alt={props.name} />
            </Link>
        </React.Fragment>
    );
};

export default ScenarioItem;
