import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

import Logs from "../components/Logs";
import ScenarioItem from "../components/ScenarioItem";
import Monitor from "../components/Monitor";
import HeartRate from "../components/HeartRate";

import { useHttpClient } from '../../shared/hooks/http-hook';

import '../components/Logs.css'
import ScenerioList from "../components/ScenerioList";

const Home = props => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedDogs, setLoadedDogs] = useState();

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/dogs'
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
                {/*Monitor 02*/}
                <div className="col-md-8">
                    <div id="panel0" className="row">
                        <HeartRate />
                    </div>
                    <div id="panel1" className="row">
                        <Monitor />
                    </div>
                    {/*Monitor 02*/}
                    <div id="panel2" className="row">
                        <h2>Monitor 02</h2>:<h5>The starting state of the menu will appear collapsed on smaller screens,
                        and will appear
                        non-collapsed on larger screens. When toggled using the button below, the menu will
                        change.</h5>
                    </div>
                </div>

                {/*ScenarioItem*/}
                <div className="col-md-4">
                    {loadedDogs && (
                        <ScenerioList items={loadedDogs} />
                    )}
                </div>
            </div>

            {/*Logs*/}
            <div className="row">
                <div className="col-md-12 panel-warning">
                    <Logs/>
                </div>
            </div>
        </div>
    );
}

export default Home;
