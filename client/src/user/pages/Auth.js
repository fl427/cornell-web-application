import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

// import ErrorModal from "../../shared/components/UIElements/ErrorModal";
// import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";

import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from "../../shared/util/validator";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from "../../shared/context/auth-context";
import "./Auth.css";
import {useHistory} from "react-router-dom";

const Auth = () => {
    //const auth
    const auth = useContext(AuthContext);
    const history = useHistory();
    const [isLoginMode, setIsLoginMode] = useState(true);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: "",
                isValid: false,
            },
            password: {
                value: "",
                isValid: false,
            },
        },
        false
    );

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined,
                    image: undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    },
                    image: {
                        value: null,
                        isValid: false
                    }
                },
                false
            );
        }
        setIsLoginMode(prevMode => !prevMode);
    };

    const authSubmitHandler = async event => {
        event.preventDefault();

        if (isLoginMode) {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/users/login',
                    'POST',
                    JSON.stringify({
                        //email: formState.inputs.email.value,
                        //password: formState.inputs.password.value
                        email: "test@test.com",
                        password: "111111",
                    }),
                    {
                        'Content-Type': 'application/json'
                    }
                );
                auth.login(responseData.userId, responseData.token);
            } catch (err) {}
        } else {
            try {
                const formData = new FormData();
                formData.append('email', formState.inputs.email.value);
                formData.append('name', formState.inputs.name.value);
                formData.append('password', formState.inputs.password.value);
                formData.append('image', formState.inputs.image.value);
                const responseData = await sendRequest(
                    'http://localhost:5000/api/users/signup',
                    'POST',
                    formData
                );

                auth.login(responseData.userId, responseData.token);
                history.push('/');
            } catch (err) {}
        }
    };


    return (<div>
        <MDBRow>
            <MDBCol size="2"></MDBCol>
            <MDBCol size="8">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBCard>
                                <MDBCardBody className="mx-4">
                                    <div className="text-center">
                                        <h3 className="dark-grey-text mb-5">
                                            <strong>Sign in</strong>
                                        </h3>
                                    </div>
                                    <MDBInput
                                        label="Your email"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your password"
                                        group
                                        type="password"
                                        validate
                                        containerClass="mb-0"
                                    />
                                    <p className="font-small blue-text d-flex justify-content-end pb-3">
                                        Forgot
                                        <a href="#!" className="blue-text ml-1">

                                            Password?
                                        </a>
                                    </p>
                                    <div className="text-center mb-3">
                                        <MDBBtn
                                            type="button"
                                            gradient="blue"
                                            rounded
                                            className="btn-block z-depth-1a"
                                        >
                                            Sign in
                                        </MDBBtn>
                                    </div>
                                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                                        or Sign in with:
                                    </p>
                                </MDBCardBody>
                                <MDBModalFooter className="mx-5 pt-3 mb-1">
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        Not a member?
                                        <a href="#!" className="blue-text ml-1">

                                            Sign Up
                                        </a>
                                    </p>
                                </MDBModalFooter>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBCol>
            <MDBCol size="2"></MDBCol>
            <MDBCol size="12">
                <Card className="authentication" style={{marginTop:"-1rem"}}>


                    <div className="text-center">
                        <h3 className="dark-grey-text mb-5">
                            <strong>Sign in</strong>
                        </h3>
                    </div>
                    <form className="auth-form" onSubmit={authSubmitHandler}>
                        <ul>
                            <li>
                                {!isLoginMode && (<div>
                                    <Input
                                        element="input"
                                        id="name"
                                        type="text"
                                        label="Your Name"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        errorText="Please enter a name."
                                        onInput={inputHandler}
                                    />
                                    <MDBInput
                                        element="input"
                                        id="name"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        errorText="Please enter a name."
                                        onChange={inputHandler}
                                    label="Your email"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    />
                                    </div>
                                )}
                            </li>

                            <li>
                                <Input
                                    element="input"
                                    id="email"
                                    type="email"
                                    label="E-Mail"
                                    validators={[VALIDATOR_EMAIL()]}
                                    errorText="Please enter a valid email address."
                                    onInput={inputHandler}
                                />
                                <MDBInput
                                    label="Your email"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                            </li>
                            <li>
                                <Input
                                    element="input"
                                    id="password"
                                    type="password"
                                    label="Password"
                                    validators={[VALIDATOR_MINLENGTH(6)]}
                                    errorText="Please enter a valid password, at least 6 characters."
                                    onInput={inputHandler}
                                />
                            </li>
                            <li>
                                {!isLoginMode && (
                                    <ImageUpload
                                        center
                                        id="image"
                                        onInput={inputHandler}
                                        errorText="Please provide an image."
                                    />
                                )}
                            </li>
                            <li>
                                <MDBBtn type="submit" gradient="peach" disabled={formState.isValid}>{isLoginMode ? 'LOGIN' : 'SIGNUP'}</MDBBtn>



                            </li>
                        </ul>
                    </form>
                    <Button inverse onClick={switchModeHandler}>
                        SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
                    </Button>

                </Card>
            </MDBCol>


        </MDBRow>
    </div>


    );
};

export default Auth;
