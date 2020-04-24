import React from 'react';

import Card from "../../shared/components/UIElements/Card";
import DogItem from "./DogItem";
import Button from "../../shared/components/FormElements/Button";
import './DogList.css';

const DogList = props => {
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

        <ul className="dog-list">
            {props.items.map(dog => (
                <DogItem
                    key={dog.id}
                    id={dog.id}
                    name={dog.name}
                    description={dog.description}
                    image={dog.image}
                    creatorId={dog.creator}
                />
            ))}
        </ul>
    );
};

export default DogList;
