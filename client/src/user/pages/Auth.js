import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";

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
import {  MDBBtn } from 'mdbreact';

const Auth = () => {
    const auth = useContext(AuthContext);
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
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value
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
            } catch (err) {}
        }
    };


    return (
            <Card style={{marginTop:"-0.6rem"}} className="authentication">
                <h2 className="dark-grey-text mb-5">
                    <strong>Sign in</strong>
                </h2>
                <hr style={{marginTop:"-1.5rem",marginBot:"-1.2rem"}}/>
                <form className="auth-form" onSubmit={authSubmitHandler}>
                    <ul style={{marginTop:"-1.5rem"}}>
                        <li>
                            {!isLoginMode && (
                                <Input
                                    element="input"
                                    id="name"
                                    type="text"
                                    label="Username"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    errorText="Please enter a name."
                                    onInput={inputHandler}
                                />
                            )}
                        </li>

                        <li >
                            <Input
                                element="input"
                                id="email"
                                type="email"
                                label="Email"
                                validators={[VALIDATOR_EMAIL()]}
                                errorText="Incorrect Email Format!"
                                onInput={inputHandler}
                            />
                        </li>
                        <li>
                            <Input
                                element="input"
                                id="password"
                                type="password"
                                label="Password"
                                validators={[VALIDATOR_MINLENGTH(6)]}
                                errorText="At least 6 characters!"
                                onInput={inputHandler}
                            />
                        </li>
                        {!isLoginMode && (
                        <li style={{margin:"auto", textAlign:"right"}}>
                                <ImageUpload
                                    right
                                    id="image"
                                    onInput={inputHandler}
                                    errorText="Please upload an image!"
                                />
                        </li>
                        )}
                        <li>
                            <MDBBtn type="submit" disabled={!formState.isValid}
                                gradient="blue"
                                rounded
                                className="btn-block z-depth-1a"
                                    style={{marginTop: "2rem"}}
                            >
                                {isLoginMode ? 'Sign in' : 'Sign up'}
                            </MDBBtn>
                        </li>
                    </ul>
                </form>

                <div className="switch-text">
                {isLoginMode ?
                    (<p className="font-small grey-text d-flex justify-content-end">
                        Not a member?
                        <a href="#!" className="blue-text ml-1" onClick={switchModeHandler}>
                            Sign up
                        </a>
                    </p>) : (
                        <p className="font-small grey-text d-flex justify-content-end">
                            Have an account?
                            <a href="#!" className="blue-text ml-1" onClick={switchModeHandler}>
                                Sign in
                            </a>
                        </p>
                        )
                }
                </div>
            </Card>
    );
};

export default Auth;
