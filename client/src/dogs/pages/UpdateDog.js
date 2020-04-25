import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';

import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validator';

import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './DogForm.css';

const UpdateDog = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedDog, setLoadedDog] = useState();
    const dogId = useParams().dogId;
    const history = useHistory();

    const [formState, inputHandler, setFormData] = useForm(
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

    useEffect(() => {
        const fetchDog = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/dogs/${dogId}`
                );
                setLoadedDog(responseData.dog);
                setFormData(
                    {
                        name: {
                            value: responseData.dog.name,
                            isValid: true
                        },
                        description: {
                            value: responseData.dog.description,
                            isValid: true
                        }
                    },
                    true
                );
            } catch (err) {}
        };
        fetchDog();
    }, [sendRequest, dogId, setFormData]);


    const dogUpdateSubmitHandler = async event => {
        event.preventDefault();
        try {
            await sendRequest(
                `http://localhost:5000/api/dogs/${dogId}`,
                'PATCH',
                JSON.stringify({
                    name: formState.inputs.name.value,
                    description: formState.inputs.description.value
                }),
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token
                }
            );
            history.push('/dogs');
        } catch (err) {}
    };


    if (!loadedDog) {
        return (
            <div className="center">
                <Card>
                    <h2>Can not Find Dog!</h2>
                </Card>
            </div>
        )
    }

    return (
        <React.Fragment>
            {loadedDog && (
            <form className="dog-form" onSubmit={dogUpdateSubmitHandler}>
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
                            initialValue={loadedDog.name}
                            initialValid={true}
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
                            initialValue={loadedDog.description}
                            initialValid={true}
                        />
                    </li>
                    <li>
                        <Button type="submit" disabled={!formState.isValid}>
                            Update DOG
                        </Button>
                    </li>
                </ul>
            </form>
            )}
        </React.Fragment>
    );
};

export default UpdateDog;
