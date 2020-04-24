import React from 'react';

import DogList from "../components/DogList";

const Dogs = () => {
    const DUMMY_DOGS = [
        {
            id: 'd1',
            name: 'Herding',
            description: 'The starting state of the menu will appear collapsed on smaller screens, and will appear\n' +
                'non-collapsed on larger screens. When toggled using the button below, the menu will\n' +
                'change.',
            image: 'https://images.unsplash.com/photo-1587583770025-32851bad462e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            creator: 'u3'
        },
        {
            id: 'd2',
            name: 'Terriers',
            description: 'The starting state of the menu will appear collapsed on smaller screens, and will appear\n' +
                'non-collapsed on larger screens. When toggled using the button below, the menu will\n' +
                'change.',
            image: 'https://images.unsplash.com/photo-1587583770025-32851bad462e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            creator: 'u1'
        },
        {
            id: 'd3',
            name: 'Hounds',
            description: 'The starting state of the menu will appear collapsed on smaller screens, and will appear\n' +
                'non-collapsed on larger screens. When toggled using the button below, the menu will\n' +
                'change.',
            image: 'https://images.unsplash.com/photo-1587583770025-32851bad462e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            creator: 'u2'
        }
    ]

    return (
        <React.Fragment>
            <DogList items={DUMMY_DOGS} />
        </React.Fragment>
    );
};

export default Dogs;
