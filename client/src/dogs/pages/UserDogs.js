import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DogList from "../components/DogList";
import { useHttpClient } from '../../shared/hooks/http-hook';

const UserDogs = () => {

    const [loadedDogs, setLoadedDogs] = useState();
    const userId = useParams().userId;
    console.log(userId);

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/dogs/user/${userId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                setLoadedDogs(responseData.dogs);
                if (!response.ok) {
                    console.log(responseData.message);
                }
            } catch (e) {
                console.log(e.message || "Something went wrong, please try again.")
            }
        };
        fetchDogs();
    }, []);

    return (
        <React.Fragment>
            {loadedDogs && (
                <DogList items={loadedDogs} />
            )}
        </React.Fragment>
    );
};

export default UserDogs;
