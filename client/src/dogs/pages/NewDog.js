import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validator';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

import './DogForm.css';

const NewDog = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler] = useForm(
        {
            name: {
                value: '',
                isValid: false
            },
            description: {
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

    const history = useHistory();


    const dogSubmitHandler = async event => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', formState.inputs.name.value);
            formData.append('description', formState.inputs.description.value);
            formData.append('image', formState.inputs.image.value);
            const responseData = await sendRequest('https://cornell-vet.herokuapp.com/api/dogs', 'POST', formData, {
                Authorization: 'Bearer ' + auth.token
            });

            history.push('/dogs');
        } catch (e) {
            // console.log(e.message || "Something went wrong, please try again.")
        }
    }

    return (
        <React.Fragment>
            <form className="dog-form" onSubmit={dogSubmitHandler}>
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
                        <ImageUpload
                            id="image"
                            onInput={inputHandler}
                            errorText="Please provide an image."
                        />
                    </li>
                    <li>
                        <Button type="submit" disabled={!formState.isValid}>
                            ADD DOG
                        </Button>
                    </li>
                </ul>
            </form>

            {/*CSS DESIGN@reference: https://www.sanwebe.com/2014/08/css-html-forms-designs*/}

        </React.Fragment>
    );
};

export default NewDog;
