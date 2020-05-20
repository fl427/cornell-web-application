import React from 'react';

import Card from "../../../shared/components/UIElements/Card";
import LogcommentItem from "./LogcommentItem";
import Button from "../../../shared/components/FormElements/Button";
import './LogcommentList.css';

const LogcommentList = props => {
    if (props.items.length === 0) {
        return (
            <div className="logcomment-list center">
                <Card>
                    <h2>No logcomment found. Maybe create one?</h2>
                    <Button to="/logcomments/new">Create New Logcomment</Button>
                </Card>
            </div>
        );
    }

    return (

        <ul className="logcomment-list">
            {props.items.map(logcomment => (
                <LogcommentItem
                    key={logcomment.id}
                    id={logcomment.id}
                    content={logcomment.content}
                    creatorId={logcomment.creator}
                />
            ))}
        </ul>
    );
};

export default LogcommentList;
