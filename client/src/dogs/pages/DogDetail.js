import React, {useState, useContext, useEffect} from "react";
import { useParams } from 'react-router-dom';

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import "./DogDetail.css";

const DogDetail = props => {
    const auth = useContext(AuthContext);
    const [loadedDog, setLoadedDog] = useState();

    const dogId = useParams().dogId;
    console.log("dogId: ", dogId);

    useEffect(() => {
        const fetchDog = async () => {
            try {
                const response = await fetch(`http://cornell-vet.herokuapp.com//api/dogs/${dogId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                setLoadedDog(responseData.dog);
                if (!response.ok) {
                    console.log(responseData.message);
                }
            } catch (e) {
                console.log(e.message || "Something went wrong, please try again.")
            }
        };
        fetchDog();
    }, []);

    return (
        <React.Fragment>
            <h1>This is Dog Detail Page, which would be defined by Admin</h1>
            {loadedDog && (
                <div>
                    <Card className="dog-item__content">
                        <div className="dog-item__image">
                            <img src={`http://cornell-vet.herokuapp.com//${loadedDog.image}`} alt={loadedDog.name}/>
                        </div>
                        <div className="dog-item__info">
                            <h2>{loadedDog.name}</h2>
                            <p>{loadedDog.description}</p>
                        </div>
                    </Card>

                </div>
            )}
        </React.Fragment>
    );
};

export default DogDetail;
