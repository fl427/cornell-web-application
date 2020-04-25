import React, { useEffect, useState } from 'react';
import UsersList from "../components/UsersList";
import { useHttpClient } from '../../shared/hooks/http-hook';

const Users = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedUsers, setLoadedUsers] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/users'
                );

                setLoadedUsers(responseData.users);
            } catch (err) {}
        };
        fetchUsers();
    }, [sendRequest]);

    return (
        <React.Fragment>
            <div className="container-fluid">
                <h1 className="mt-4">Users Header</h1>
                {loadedUsers && <UsersList items={loadedUsers} />}
            </div>
        </React.Fragment>
    );
};

export default Users;
