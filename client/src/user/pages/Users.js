import React from 'react';
import UsersList from "../components/UsersList";

const Users = () => {
    const DUMMY_USERS = [
        {
            id: 'u1',
            name: 'fan',
            image: 'https://images.unsplash.com/photo-1587583770025-32851bad462e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            records: [
                'r1',
                'r2'
            ]
        },
        {
            id: 'u2',
            name: 'gao',
            image: 'https://images.unsplash.com/photo-1587583770025-32851bad462e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            records: [
                'r3'
            ]
        },
        {
            id: 'u3',
            name: 'liu',
            image: 'https://images.unsplash.com/photo-1587583770025-32851bad462e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            records: [
                'r4',
                'r5',
                'r6'
            ]
        }
    ]
    return (
        <React.Fragment>
            <div className="container-fluid">
                <h1 className="mt-4">Users Header</h1>
                <UsersList items={DUMMY_USERS} />
            </div>
        </React.Fragment>
    );
};

export default Users;
