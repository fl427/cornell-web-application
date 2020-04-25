import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSync, faCog } from '@fortawesome/free-solid-svg-icons'

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import "./Logs.css";

const Logs = props => {
    const auth = useContext(AuthContext);
    return (
        <React.Fragment>
            <div className="content-box-header panel-heading">
                <div className="panel-title ">Logs</div>
                <div className="panel-options">
                    <Link to="/" data-rel="collapse"><FontAwesomeIcon icon={faSync} /></Link>
                    <Link to="/" data-rel="reload"><FontAwesomeIcon icon={faCog} /></Link>
                </div>
            </div>
            <div className="content-box-large box-with-header">
                <div className="log-style">
                    25:00:00, Nov 32<sub>nd</sub>: Control Panel Initialized...
                    <br/><br/>
                    25:00:01, Nov 32<sub>nd</sub>: Database Imported...
                    <br/><br/>
                    25:00:02, Nov 32<sub>nd</sub>: Component Connection - Nornal...
                    <br/><br/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Logs;
