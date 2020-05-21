import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Input from "../../../shared/components/FormElements/Input";
import Button from "../../../shared/components/FormElements/Button";

import { useForm } from '../../../shared/hooks/form-hook';
import { useHttpClient } from '../../../shared/hooks/http-hook';


import {
    VALIDATOR_REQUIRE
} from '../../../shared/util/validator';
import './NewLogcomment.css';
import {AuthContext} from "../../../shared/context/auth-context";


const NewLogcomment = () => {
    const auth = useContext(AuthContext);

    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler] = useForm(
        {
            logcomment: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const history = useHistory();

    const logcommentSubmitHandler = async event => {
        // event.preventDefault();

        try {
            const responseData = await sendRequest(
                'http://cornell-vet.herokuapp.com//api/logcomments',
                'POST',
                JSON.stringify({
                    content: formState.inputs.logcomment.value,
                }),
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token
                }
            );
            history.push('/');
        } catch (err) {
            console.log(err.message || "Something went wrong, please try again.")
        }
    }

    return (
        <React.Fragment>
            <form className="logcomment-form" onSubmit={logcommentSubmitHandler}>
                <ul>
                    <li>
                        <Input
                            id="logcomment"
                            element="textarea"
                            type="text"
                            label="Logcomment"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText=""
                            // errorText="The user didn't give a logcomment."
                            onInput={inputHandler}
                        />
                    </li>

                    <li>
                        <Button type="submit" disabled={!formState.isValid}>
                            ADD Logcomment
                        </Button>
                    </li>
                </ul>
            </form>

        </React.Fragment>
    );
};

export default NewLogcomment;
