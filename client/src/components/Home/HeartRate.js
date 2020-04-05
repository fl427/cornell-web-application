import React from 'react';
import { Link } from "react-router-dom";

class HeartRate extends React.Component {
    render() {
        return (
            <div>
                <div class="card" style={{width: '18rem'}}>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/" class="card-link">Card link</Link>
                        <Link to="/" class="card-link">Another link</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeartRate;