import React from "react";
import { Link } from "react-router-dom";

import Logs from "../components/Logs";
import Scenario from "../components/Scenario";
import Monitor from "../components/Monitor";
import HeartRate from "../components/HeartRate";

import '../components/Logs.css'

class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                {/*HeartRate*/}
                {/*Monitor 01*/}
                {/*Monitor 02*/}
                {/*Scenario*/}
                <div className="row">
                    {/*HeartRate*/}
                    {/*Monitor 01*/}
                    {/*Monitor 02*/}
                    <div className="col-md-7">
                        {/*HeartRate*/}
                        <div id="panel0" className="row">
                            <h2>HeartRate</h2>:<h5>The starting state of the menu will appear collapsed on smaller screens, and will appear
                                non-collapsed on larger screens. When toggled using the button below, the menu will
                                change.</h5>
                        </div>
                        {/*Monitor 01*/}
                        <div id="panel1" className="row">
                            <h2>Monitor 01</h2>:<h5>The starting state of the menu will appear collapsed on smaller screens, and will appear
                            non-collapsed on larger screens. When toggled using the button below, the menu will
                            change.</h5>
                        </div>
                        {/*Monitor 02*/}
                        <div id="panel2" className="row">
                            <h2>Monitor 02</h2>:<h5>The starting state of the menu will appear collapsed on smaller screens, and will appear
                            non-collapsed on larger screens. When toggled using the button below, the menu will
                            change.</h5>
                        </div>
                    </div>

                    {/*Scenario*/}
                    <div className="col-md-4">
                        <Scenario />
                    </div>
                </div>

                {/*Logs*/}
                <div className="row">
                    <div className="col-md-11 panel-warning">
                        <Logs />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
