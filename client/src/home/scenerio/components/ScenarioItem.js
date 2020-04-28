import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { faCoffee, faSync, faBackward } from '@fortawesome/free-solid-svg-icons'

import Card from "../../../shared/components/UIElements/Card";
import Button from "../../../shared/components/FormElements/Button";
// import Modal from "../../../shared/components/UIElements/Modal";
import {Modal} from "react-bootstrap";

import { AuthContext } from '../../../shared/context/auth-context';
import { useHttpClient } from '../../../shared/hooks/http-hook';
import './ScenarioItem.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Avatar from "../../../shared/components/UIElements/Avatar";

const ScenarioItem = props => {
    const auth = useContext(AuthContext);
    const [showScenerio, setShowScenerio] = useState(false);

    const openScenerioHandler = () => setShowScenerio(true);

    const closeScenerioHandler = () => setShowScenerio(false);



    return (
        <React.Fragment>
            {/*<Modal*/}
            {/*    show={showScenerio}*/}
            {/*    onCancel={closeScenerioHandler}*/}
            {/*    header={props.name}*/}
            {/*    className="scenerio-item__modal"*/}
            {/*    headerClass="scenerio-item__modal-header"*/}
            {/*    contentClass="scenerio-item__modal-content"*/}
            {/*    footerClass="scenerio-item__modal-actions"*/}
            {/*    footer={<Button onClick={closeScenerioHandler}>CLOSE</Button>}*/}
            {/*>*/}
            {/*    <div className="scenerio-container">*/}
            {/*        <h2>The Scenerio</h2>*/}
            {/*    </div>*/}
            {/*</Modal>*/}

            <Modal show={showScenerio} onHide={closeScenerioHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Modal content here </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={closeScenerioHandler}>Close</Button>
                </Modal.Footer>
            </Modal>

            <Button inverse onClick={openScenerioHandler}>VIEW Scenerio</Button>
            <Link to={`/dogs/${props.id}`}>
            {/*<Link to={openScenerioHandler}>*/}
            <img className="icon-dog" src={`http://localhost:5000/${props.image}` } alt={props.name} />
            </Link>
        </React.Fragment>
    );
};

export default ScenarioItem;
