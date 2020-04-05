import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class DiseasesList extends Component {
    render() {
        return (
            <div>
                <p>You are on the Diseases List Component!</p>
                <li>
                    <Link to="/diseases/create">Create an new Disease</Link>
                </li>
            </div>
        )
    }
}