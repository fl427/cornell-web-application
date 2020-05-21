import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

import Logs from "../log/pages/Logs";
import Scenerios from "../scenerio/pages/Scenerios";
import Monitor from "../monitor/pages/Monitor";
import HeartRate from "../heartrate/pages/HeartRate";
import NewLogcomment from "../logcomment/pages/NewLogcomment";

import { useHttpClient } from '../../shared/hooks/http-hook';

var urls = require('../../URLs');

const Home = props => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedDogs, setLoadedDogs] = useState();

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const responseData = await sendRequest(
                    urls.baseURL + '/api/dogs'
                );

                setLoadedDogs(responseData.dogs);
            } catch (err) {
                console.log(err.message || "Something went wrong, please try again.")
            }
        };
        fetchDogs();
    }, [sendRequest]);

    console.log(loadedDogs)

    return (
        <div className="container-fluid">
            <div className="row">
                {/*HeartRate*/}
                {/*Monitor 01*/}
                <div className="col-md-8">
                    <div id="panel0" className="row">
                        <HeartRate />
                    </div>
                    <div id="panel1" className="row">
                        <Monitor />
                    </div>
                </div>

                {/*ScenarioItem*/}
                <div className="col-md-4">
                    {loadedDogs && (
                        <Scenerios items={loadedDogs} />
                    )}
                </div>
            </div>

            {/*Logs*/}
            <div className="row">
                <div className="col-md-12 panel-warning">
                    <Logs/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 panel-warning">
                    <NewLogcomment/>
                </div>
            </div>
        </div>
    );
}

export default Home;
