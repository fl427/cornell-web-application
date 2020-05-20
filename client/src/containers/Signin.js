import React, { useState, useContext } from "react";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

import ImageUpload from "../shared/components/FormElements/ImageUpload";

import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from "../shared/util/validator";
import { useForm } from "../shared/hooks/form-hook";
import { useHttpClient } from '../shared/hooks/http-hook';
import { AuthContext } from "../shared/context/auth-context";
import "./css/Signin.css";
import {useHistory} from "react-router-dom";

const Signin = () => {
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
                history.push('/');
            } catch (err) {}
        }
    };


    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="3"></MDBCol>
                <MDBCol md="6">
                    <form>
                        <p className="h5 text-center mb-4">Subscribe</p>
                        <div className="grey-text">
                            <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                                      success="right" />
                            <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                                      success="right" />
                        </div>
                        <div className="text-center">
                            <MDBBtn outline color="info">
                                Send
                                <MDBIcon far icon="paper-plane" className="ml-1" />
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Signin;
