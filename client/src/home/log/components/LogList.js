import React from 'react';

import Card from "../../../shared/components/UIElements/Card";
import LogItem from "./LogItem";
import Button from "../../../shared/components/FormElements/Button";
import './LogList.css';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog, faSync} from "@fortawesome/free-solid-svg-icons";

const LogList = props => {
    if (props.items.length === 0) {
        return (
            <div className="dog-list center">
                <Card>
                    <h2>No dog found. Maybe create one?</h2>
                    <Button to="/dogs/new">Create New Dog</Button>
                </Card>
            </div>
        );
    }

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
                    {props.items.map(log => (
                        <LogItem
                            key={log.id}
                            id={log.id}
                            log={log.log}
                            createDate={log.createDate}
                        />
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default LogList;
