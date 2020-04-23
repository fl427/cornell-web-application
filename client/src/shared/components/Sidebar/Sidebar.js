import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = props => {
        return (
            <React.Fragment>
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">Simulation</div>
                <div className="list-group list-group-flush">
                    <Link to="/" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                    <Link to="/" className="list-group-item list-group-item-action bg-light">Signals</Link>
                    <Link to="/" className="list-group-item list-group-item-action bg-light">Monitor</Link>
                    <Link to="/" className="list-group-item list-group-item-action bg-light">Videos</Link>
                    <Link to="/" className="list-group-item list-group-item-action bg-light">Editors</Link>
                    <Link to="/" className="list-group-item list-group-item-action bg-light">Events</Link>
                </div>
            </div>
            </React.Fragment>
        );
};

export default Sidebar;
