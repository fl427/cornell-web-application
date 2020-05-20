import React from "react";

import ScenerioList from "../components/ScenerioList";
import './Scenerios.css';

const Scenerios = props => {

    return (
        <React.Fragment>
            <ScenerioList items={props.items} />
        </React.Fragment>
    );
};

export default Scenerios;
