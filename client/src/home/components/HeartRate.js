import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTimes, faCog } from '@fortawesome/free-solid-svg-icons'

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './HeartRate.css';

const HeartRate = props => {
    const auth = useContext(AuthContext);
    return (
        <React.Fragment>
            <div className="col-md-12" style={{marginTop:'1rem'}}>
                <div className="content-box-header">
                    <div className="panel-title">Heart Rate</div>

                    <div className="panel-options">
                        <Link to="/" data-rel="reload"><FontAwesomeIcon icon={faCog} /></Link>
                        <Link to="/" id="hr-remove" data-rel="collapse"><FontAwesomeIcon icon={faTimes} /></Link>
                    </div>
                </div>
                <div className="content-box-large box-with-header">

                    <div className="ecg-anime" id='hr'>
                    </div>
                    <div>
                        <div className="ecg-anime">
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HeartRate;
