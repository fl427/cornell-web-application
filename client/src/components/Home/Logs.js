import React from 'react';
import { Link } from "react-router-dom";

import './Logs.css';
class Logs extends React.Component {
    render() {
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/" className="card-link">Card link</Link>
                        <Link to="/" className="card-link">Another link</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Logs;