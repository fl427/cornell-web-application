import React, {useState, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSync, faCog } from '@fortawesome/free-solid-svg-icons'

import Card from "../../../shared/components/UIElements/Card";
import Button from "../../../shared/components/FormElements/Button";

import { AuthContext } from '../../../shared/context/auth-context';
import { useHttpClient } from '../../../shared/hooks/http-hook';
import "./Logs.css";
import LogList from "../components/LogList";

const Logs = props => {
    const auth = useContext(AuthContext);
    const [loadedLogs, setLoadedLogs] = useState();

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const response = await fetch("http://cornell-vet.herokuapp.com//api/logs", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                setLoadedLogs(responseData.logs);
                if (!response.ok) {
                    console.log(responseData.message);
                }
            } catch (e) {
                console.log(e.message || "Something went wrong, please try again.")
            }
        };
        fetchLogs();
    }, []);

    return (
        <React.Fragment>
            {loadedLogs && (
                <LogList items={loadedLogs} />
            )}
        </React.Fragment>
    );
};

export default Logs;
