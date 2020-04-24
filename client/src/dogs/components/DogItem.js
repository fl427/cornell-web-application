import React from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import "./DogItem.css";

const DogItem = props => {

    return (
        <React.Fragment>
            
            <li className="dog-item">
                <Card className="dog-item__content">
                    <div className="dog-item__image">
                        <img src={props.image} alt={props.name} />
                    </div>
                    <div className="dog-item__info">
                        <h2>{props.name}</h2>
                        <p>{props.description}</p>
                    </div>
                    <div className="dog-item__actions">
                        <Button inverse onClick={() => console.log("Click View Button")}>VIEW</Button>

                        <Button to={`/dogs/${props.id}`}>EDIT</Button>

                        <Button danger onClick={() => console.log("Click Delete Button")}>DELETE</Button>

                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default DogItem;
