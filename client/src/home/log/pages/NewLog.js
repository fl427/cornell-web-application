import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Input from "../../../shared/components/FormElements/Input";
import Button from "../../../shared/components/FormElements/Button";

import { useForm } from '../../../shared/hooks/form-hook';
import { useHttpClient } from '../../../shared/hooks/http-hook';


import {
    VALIDATOR_REQUIRE
} from '../../../shared/util/validator';
import './NewLog.css';
import {AuthContext} from "../../../shared/context/auth-context";

var urls = require('../../../URLs');

const NewLog = () => {
    const auth = useContext(AuthContext);

    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler] = useForm(
        {
            log: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const history = useHistory();

    const logSubmitHandler = async event => {
        event.preventDefault();

        try {
            const responseData = await sendRequest(
                urls.baseURL + '/api/logs',
                'POST',
                JSON.stringify({
                    log: formState.inputs.log.value,
                    createDate: Date.now()
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
            <form className="log-form" onSubmit={logSubmitHandler}>
                <ul>
                    <li>
                        <Input
                            id="log"
                            element="textarea"
                            type="text"
                            label="Log"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="The robot didn't give a log."
                            onInput={inputHandler}
                        />

                    </li>

                    <li>
                        <Button type="submit" disabled={!formState.isValid}>
                            ADD Log
                        </Button>
                    </li>
                </ul>
            </form>

        </React.Fragment>
    );
};

export default NewLog;
