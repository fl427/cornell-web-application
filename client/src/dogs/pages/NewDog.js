import React from 'react';
// import { useHistory } from 'react-router-dom';
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './DogForm.css';

const NewDog = () => {

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
            <form className="dog-form">
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
                </ul>


            </form>

            {/*@reference: https://www.sanwebe.com/2014/08/css-html-forms-designs*/}
            <form className="form-style-9">
                <ul>
                    <li>
                        <label>Name <span className="required">*</span></label>
                        <input type="text" name="field3" className="field-style field-full align-none"
                               placeholder="Name"/>
                    </li>
                    <li>
                        <textarea name="field5" className="field-style" placeholder="Description"></textarea>
                    </li>
                    <li>
                        <input type="submit" value="Create Dog"/>
                    </li>
                </ul>
            </form>

        </React.Fragment>
    );
};

export default NewDog;
