import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
// import ErrorModal from "../../shared/components/UIElements/ErrorModal";
// import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
// import ImageUpload from "../../shared/components/FormElements/ImageUpload";

import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from "../../shared/util/validator";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from "../../shared/context/auth-context";
import "./Auth.css";

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(false);
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

    // const authSubmitHandler = async (event) => {
    //     event.preventDefault();
    //     setIsLoading(true);
    //
    //     if (isLoginMode) {
    //         try {
    //             const response = await fetch("http://localhost:5000/api/users/login", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({
    //                     email: formState.inputs.email.value,
    //                     password: formState.inputs.password.value,
    //                 }),
    //             });
    //
    //             const responseData = await response.json();
    //             if (!response.ok) {
    //                 throw new Error(responseData.message);
    //             }
    //             console.log("Logged-User", responseData);
    //             setIsLoading(false);
    //             auth.login(responseData.userId, responseData.token);
    //         } catch (err) {
    //             setIsLoading(false);
    //             console.log(err.message || "Something went wrong, please try again.");
    //         }
    //     } else {
    //         const formData = new FormData();
    //         formData.append("email", formState.inputs.email.value);
    //         formData.append("name", formState.inputs.name.value);
    //         formData.append("password", formState.inputs.password.value);
    //
    //         try {
    //             setIsLoading(true);
    //             const response = await fetch("http://localhost:5000/api/users/signup", {
    //                 method: "POST",
    //                 // headers: {
    //                 //   "Content-Type": "application/json",
    //                 // },
    //                 body: formData,
    //             });
    //
    //             const responseData = await response.json();
    //             if (!response.ok) {
    //                 throw new Error(responseData.message);
    //             }
    //             console.log("Registered User", responseData);
    //             setIsLoading(false);
    //             auth.login(responseData.userId, responseData.token);
    //         } catch (err) {
    //             console.log(err.message || "Something went wrong, please try again");
    //         }
    //     }
    // };
    //

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
                // formData.append('image', formState.inputs.image.value);
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
        <React.Fragment>
            <Card className="authentication">
                <h2>Login Required</h2>
                <hr />
                <form className="auth-form" onSubmit={authSubmitHandler}>
                    <ul>
                        <li>
                            {!isLoginMode && (
                                <Input
                                    element="input"
                                    id="name"
                                    type="text"
                                    label="Your Name"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    errorText="Please enter a name."
                                    onInput={inputHandler}
                                />
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
                            <Button type="submit" disabled={!formState.isValid}>
                                {isLoginMode ? 'LOGIN' : 'SIGNUP'}
                            </Button>
                        </li>
                    </ul>
                </form>
                <Button inverse onClick={switchModeHandler}>
                    SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
                </Button>

            </Card>
        </React.Fragment>
    );
};

export default Auth;
