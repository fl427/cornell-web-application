import React, { useState, useEffect } from 'react';

import LogcommentList from "../components/LogcommentList";
import { useHttpClient } from '../../../shared/hooks/http-hook';

var urls = require('../../../URLs');

const Logcomments = () => {

    const [loadedLogcomments, setLoadedLogcomments] = useState();

    useEffect(() => {
        const fetchLogcomments = async () => {
            try {
                const response = await fetch(urls.baseURL + "/api/logcomments", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                setLoadedLogcomments(responseData.logcomments);
                if (!response.ok) {
                    console.log(responseData.message);
                }
            } catch (e) {
                console.log(e.message || "Something went wrong, please try again.")
            }
        };
        fetchLogcomments();
    }, []);

    return (
        <React.Fragment>
            {loadedLogcomments && (
                <LogcommentList items={loadedLogcomments} />
            )}
        </React.Fragment>
    );
};

export default Logcomments;
