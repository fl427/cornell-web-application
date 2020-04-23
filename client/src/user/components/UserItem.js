import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from "../../shared/components/UIElements/Avatar";
import './UserItem.css';

const UserItem = props => {

    return (
        <li className="user-item">
            <Link to={`/${props.id}/records`}>
                <div className="user-item__image">
                    <Avatar image={props.image} alt={props.name} className="user-item__image"/>
                </div>
                <div className="user-item__info">
                    <h2>{props.name}</h2>
                    <h3>
                        {props.recordCount} {props.recordCount === 1 ? 'Record' : 'Records'}
                    </h3>
                </div>
            </Link>
        </li>
    );
};

export default UserItem;