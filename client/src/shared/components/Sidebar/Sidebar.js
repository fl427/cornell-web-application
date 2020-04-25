import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = props => {
        return (
            <React.Fragment>
            <div className="bg-light border-right sidebar" id="sidebar-wrapper">
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




                {/*<div className="sidebar content-box" style={{display: 'block'}}>*/}
                {/*    <ul className="nav">*/}
                {/*        <li className="current"><a href="index.html"><i*/}
                {/*            className="glyphicon glyphicon-home"></i> Dashboard</a></li>*/}

                        {/*<li className="submenu">*/}
                        {/*    <a href="#">*/}
                        {/*        <i className="glyphicon glyphicon-record"></i> Signals*/}
                        {/*        <span className="caret pull-right"></span>*/}
                        {/*    </a>*/}
                        {/*    <ul>*/}
                        {/*        <li><a id="sk" href="index.html">Shock</a></li>*/}
                        {/*        <li><a id="do" href="index.html">Low Dose Epi</a></li>*/}

                        {/*    </ul>*/}
                        {/*</li>*/}

                {/*        <li className="submenu submenu-item">*/}
                {/*            <a id="monitor">*/}
                {/*                <i className="glyphicon glyphicon-eye-open"></i> Monitor*/}
                {/*                <span className="caret pull-right"></span>*/}
                {/*            </a>*/}
                {/*            <ul>*/}
                {/*                <li><a id="monitor-hr" className="submenu-item">Heart Rate </a></li>*/}
                {/*                <li><a id="monitor-etco2" className="submenu-item">ETCO<sub>2</sub></a></li>*/}
                {/*                <li><a id="monitor-awrr" className="submenu-item">awRR</a></li>*/}
                {/*                <li><a id="monitor-spo2" className="submenu-item">SpO<sub>2</sub></a></li>*/}
                {/*                <li><a id="monitor-temp" className="submenu-item">Temp</a></li>*/}
                {/*                <li><a id="monitor-nibp" className="submenu-item">NIBP</a></li>*/}

                {/*            </ul>*/}
                {/*        </li>*/}


                {/*        <li className="submenu">*/}
                {/*            <a href="#">*/}
                {/*                <i className="glyphicon glyphicon-cog"></i> Settings*/}
                {/*                <span className="caret pull-right"></span>*/}
                {/*            </a>*/}
                {/*            <ul>*/}
                {/*                <li><a id="set-ecg" href="index.html">ECG</a></li>*/}
                {/*                <li><a id="set-hr" href="index.html">Heart Rate</a></li>*/}


                {/*            </ul>*/}
                {/*        </li>*/}


                {/*        <li><a href="calendar.html"><i className="glyphicon glyphicon-facetime-video"></i> Videos</a>*/}
                {/*        </li>*/}
                {/*        <li><a href="buttons.html"><i className="glyphicon glyphicon-record"></i> Buttons</a></li>*/}
                {/*        <li><a href="editors.html"><i className="glyphicon glyphicon-pencil"></i> Editors</a></li>*/}
                {/*        <li><a href="forms.html"><i className="glyphicon glyphicon-tasks"></i> Forms</a></li>*/}

                {/*        <li className="submenu">*/}
                {/*            <a href="#">*/}
                {/*                <i className="glyphicon glyphicon-list"></i> Events*/}
                {/*                <span className="caret pull-right"></span>*/}
                {/*            </a>*/}

                {/*            <ul>*/}
                {/*                <li><a id="shock" href="index.html">Shock</a></li>*/}
                {/*                <li><a id="lowdo" href="index.html">Low Dose Epi</a></li>*/}
                {/*                <li><a id="vasop" href="index.html">Vasoperssin</a></li>*/}
                {/*                <li><a id="reversal" href="index.html">Reversal</a></li>*/}
                {/*                <li><a id="defib" href="index.html">Defib</a></li>*/}
                {/*                <li><a id="terminal" href="index.html">Terminal</a></li>*/}
                {/*            </ul>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}











            </React.Fragment>
        );
};

export default Sidebar;
