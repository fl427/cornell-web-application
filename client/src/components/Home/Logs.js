import React from 'react';
import { Link } from "react-router-dom";

import './Logs.css';
class Logs extends React.Component {
    render() {
        return (
            <div>
                <div className="content-box-header panel-heading">
                    <div className="panel-title ">Logs</div>
                    
                    <div className="panel-options">
                        <Link to="/" data-rel="collapse"><i className="glyphicon glyphicon-refresh"></i></Link>
                        <Link to="/" data-rel="reload"><i className="glyphicon glyphicon-cog"></i></Link>
                    </div>
                </div>
                <div className="content-box-large box-with-header">
                    <div className="log-style">
                    25:00:00, Nov 32<sub>nd</sub>: Control Panel Initialized...
                    <br /><br />
                    25:00:01, Nov 32<sub>nd</sub>: Database Imported...
                    <br /><br />
                    25:00:02, Nov 32<sub>nd</sub>: Component Connection - Nornal...
                    <br /><br />
                    </div>
				</div>
            </div>
        )
    }
}

export default Logs;