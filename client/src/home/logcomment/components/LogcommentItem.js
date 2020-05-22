import React, {useState, useContext, useEffect} from "react";


import Card from "../../../shared/components/UIElements/Card";
import Button from "../../../shared/components/FormElements/Button";

import { AuthContext } from '../../../shared/context/auth-context';
import { useHttpClient } from '../../../shared/hooks/http-hook';
import "./LogcommentItem.css";

const LogcommentItem = props => {
    const auth = useContext(AuthContext);

    const [loadedUser, setLoadedUser] = useState();
    console.log(props.creatorId)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://cornell-vet.herokuapp.com/api/users/${props.creatorId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                setLoadedUser(responseData.user);
                if (!response.ok) {
                    console.log(responseData.message);
                }
            } catch (e) {
                console.log(e.message || "Something went wrong, please try again.")
            }
        };
        fetchUser();
    }, []);

    return (
        <React.Fragment>
            
            <li className="logcomment-item">
                <Card className="logcomment-item__content">

                    <div className="logcomment-item__info">
                        {loadedUser && (
                        <h2>{loadedUser.name}</h2>
                        )}
                        <p>{props.content}</p>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default LogcommentItem;
