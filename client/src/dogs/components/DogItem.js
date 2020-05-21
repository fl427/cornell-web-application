import React, { useState, useContext} from "react";
import {  useHistory } from 'react-router-dom';

import Card from "../../shared/components/UIElements/Card";

import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import "./DogItem.css";
import { MDBBtn } from "mdbreact";
import { postValue} from "../../request/fetch";


const DogItem = props => {
    const auth = useContext(AuthContext);
    const history = useHistory();
    const [hint, setHint] = useState(false);

    const error =()=>{
        setTimeout(async() => {setHint(true)},5000);
        setHint(false);
    }

    const selectScenario = async()=>{


        const id = (props.name).charAt(props.name.length-1);

        let num = parseInt(id) % 5;

        const response = await postValue("/api/vitals/scenario",{"scenario": num.toString()});
        console.log(response.status);
        if(response.status===undefined){
            error();
        }else{
            if(response.status===201){
                history.push("/");
            }else{
                error();
            }
        }


    }


    return (
        <React.Fragment>
            
            <li className="dog-item">
                <h2 className="dark-grey-text mb-5">
                    <strong>Scenario Selector</strong>
                </h2>
                {hint?
                    (<h5 className="red-text" style={{top:"65px",left:"12px",position: "fixed", color: "red"}}>HTTP Post Time out. Try Again!</h5>)
                :
                    null
                }
                <Card className="dog-item__content">
                    <div className="dog-item__image">
                        <img src={`http://cornell-vet.herokuapp.com//${props.image}`} alt={props.name} />
                    </div>
                    <div className="dog-item__info">
                        <h2>{props.name}</h2>
                        <p>{props.description}</p>
                    </div>
                    <div className="dog-item__actions">
                        <MDBBtn size="lg" gradient="peach" onClick={selectScenario} style={{fontSize:"1.1rem", opacity:"90%",borderRadius: "50px"}}>&nbsp;Select&nbsp;</MDBBtn>
                        {/*
                        <Button inverse to={`/dogs/${props.id}`}>Select</Button>

                        {auth.userId === props.creatorId && (
                        <Button to={`/dogs/edit/${props.id}`}>EDIT</Button>
                        )}

                        {auth.userId === props.creatorId && (
                        <Button danger onClick={() => console.log("Click Delete Button")}>DELETE</Button>
                        )}
*/}
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default DogItem;
