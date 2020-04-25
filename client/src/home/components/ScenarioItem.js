import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { faCoffee, faSync, faBackward } from '@fortawesome/free-solid-svg-icons'

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './ScenarioItem.css';

import icon0 from '../../common/images/icon0.jpg';
import icon1 from '../../common/images/icon1.jpg';
import icon2 from '../../common/images/icon2.jpg';
import icon3 from '../../common/images/icon3.jpg';
import icon4 from '../../common/images/icon4.jpg';
import icon5 from '../../common/images/icon5.jpg';
import icon6 from '../../common/images/icon6.jpg';
import icon7 from '../../common/images/icon7.jpg';
import icon8 from '../../common/images/icon8.jpg';

import largeIcon0 from '../../common/images/large-icon0.jpg';
import largeIcon1 from '../../common/images/large-icon1.jpg';
import largeIcon2 from '../../common/images/large-icon2.jpg';
import largeIcon3 from '../../common/images/large-icon3.jpg';
import largeIcon4 from '../../common/images/large-icon4.jpg';
import largeIcon5 from '../../common/images/large-icon5.jpg';
import largeIcon6 from '../../common/images/large-icon6.jpg';
import largeIcon7 from '../../common/images/large-icon7.jpg';
import largeIcon8 from '../../common/images/large-icon8.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Avatar from "../../shared/components/UIElements/Avatar";

const ScenarioItem = props => {
    const auth = useContext(AuthContext);
    return (
        <React.Fragment>
            <img className="icon-dog" src={`http://localhost:5000/${props.image}`} alt={props.name} />
        </React.Fragment>
    );
};

export default ScenarioItem;
