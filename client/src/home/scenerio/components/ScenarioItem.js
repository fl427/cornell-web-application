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
import Input from "../../../shared/components/FormElements/Input";
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../../shared/util/validator";
import ImageUpload from "../../../shared/components/FormElements/ImageUpload";
import {useForm} from "../../../shared/hooks/form-hook";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';


const ScenarioItem = props => {
    const auth = useContext(AuthContext);
    const [showScenerio, setShowScenerio] = useState(false);

    const openScenerioHandler = () => setShowScenerio(true);

    const closeScenerioHandler = () => setShowScenerio(false);

    const [formState, inputHandler] = useForm(
        {
            name: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        false
    );



    return (
        <React.Fragment>

            <Modal show={showScenerio} onHide={closeScenerioHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Modal content here </div>

                    <form className="scenerio-form">
                        <ul>
                            <li>
                                <Input
                                    id="name"
                                    element="input"
                                    type="text"
                                    label="Name"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    errorText="Please enter a valid title."
                                    onInput={inputHandler}
                                />
                            </li>
                            <li>
                                <Input
                                    id="description"
                                    element="textarea"
                                    label="Description"
                                    validators={[VALIDATOR_MINLENGTH(5)]}
                                    errorText="Please enter a valid description (at least 5 characters)."
                                    onInput={inputHandler}
                                />
                            </li>
                            <li>

                                <MDBBtn type="submit" disabled={!formState.isValid}
                                        gradient="blue"
                                        rounded
                                        className="btn-block z-depth-1a"
                                        style={{marginTop: "2rem"}}
                                >
                                    ADD Scenario
                                </MDBBtn>
                            </li>
                        </ul>
                    </form>


                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={closeScenerioHandler}>Close</Button>
                </Modal.Footer>
            </Modal>

            {/*<Button inverse onClick={openScenerioHandler}>VIEW Scenerio</Button>*/}

            <img className="icon-dog" src={`http://cornell-vet.herokuapp.com//${props.image}` } alt={props.name} onClick={openScenerioHandler}/>

            {/*<Link to={`/dogs/${props.id}`}>*/}
            {/*<img className="icon-dog" src={`http://cornell-vet.herokuapp.com//${props.image}` } alt={props.name} onClick={openScenerioHandler}/>*/}
            {/*</Link>*/}
        </React.Fragment>
    );
};

export default ScenarioItem;
