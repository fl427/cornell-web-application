import React, { useState, useEffect } from 'react';

import DogList from "../components/DogList";
import { useHttpClient } from '../../shared/hooks/http-hook';

const Dogs = () => {

    const [loadedDogs, setLoadedDogs] = useState();

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/dogs", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                setLoadedDogs(responseData.dogs);
                console.log(responseData);
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

export default Dogs;
