import React, { Component } from "react";
import PropTypes from 'prop-types';
import { MDBContainer,MDBRow,MDBCol, MDBBtn, MDBCollapse } from "mdbreact";
import Toggle from './Toggle';
import Profile from "./Profile";

import './css/Sidebar.css';

class Sidebar extends Component {
    static propTypes = {
        clickFunc: PropTypes.func.isRequired,
        visibleAllFunc: PropTypes.func.isRequired,
    }

    state = {
        collapseID: ""
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    }

    render() {
        return (
            <MDBCol className="rounded mb-0" style={{margin:"auto",textAlign:"center"}}>
                {/* User Profile */}
                <MDBRow>
                    <Profile className="profile-box"/>
                </MDBRow>



                {/* Sidebar Body with toggles */}
                <MDBRow className="sidebar-body">
                    <MDBCol>
                        <MDBRow className="leave-for-profile"></MDBRow>
                        <MDBRow className="grey-line"></MDBRow>
                        <MDBRow>
                            <a className="toggle" href="#!" onClick={this.toggleCollapse("collapse")}>
                                <Toggle icon="eye" text="Monitor"/>
                            </a>
                        </MDBRow>

                        <MDBRow>
                            <MDBCollapse className="flex-d flex-column subtoggle-group" id="collapse" isOpen={this.state.collapseID} >
                                <MDBCol>
                                    <MDBRow>
                                        <a className="toggle subtoggle" href="#!" onClick={this.props.clickFunc.bind(this,'Heart Rate')}>Heart Rate</a>
                                    </MDBRow>
                                    <MDBRow>
                                        <a className="toggle subtoggle" href="#!" onClick={this.props.clickFunc.bind(this,'ETCO2')}>ETCO<sub>2</sub></a>
                                    </MDBRow>
                                    <MDBRow>
                                        <a className="toggle subtoggle" href="#!" onClick={this.props.clickFunc.bind(this,'AWRR')}>AWRR</a>
                                    </MDBRow>
                                    <MDBRow>
                                        <a className="toggle subtoggle" href="#!" onClick={this.props.clickFunc.bind(this,'SPO2')}>SpO<sub>2</sub></a>
                                    </MDBRow>
                                    <MDBRow>
                                        <a className="toggle subtoggle" href="#!" onClick={this.props.clickFunc.bind(this,'TEMP')}>Temp</a>
                                    </MDBRow>
                                    <MDBRow>
                                        <a className="toggle subtoggle" href="#!" onClick={this.props.clickFunc.bind(this,'NIBP')}>NIBP</a>
                                    </MDBRow>
                                    <MDBRow>
                                        <a className="toggle subtoggle operate-all" href="#!"
                                           onClick={this.props.visibleAllFunc.bind(this,['Heart Rate', 'ETCO2', 'AWRR', 'SPO2', 'TEMP', 'NIBP'])}
                                        >
                                            Show/Hide All
                                        </a>
                                    </MDBRow>

                                </MDBCol>
                            </MDBCollapse>
                        </MDBRow>

                        <MDBRow>
                            <a
                                className="toggle" href="#!"
                                onClick={this.toggleCollapse("collapse2")}
                            >
                                <Toggle
                                    icon="eye"
                                    text="Sounds"
                                />
                            </a>
                        </MDBRow>

                        <MDBRow>
                            <MDBCollapse className="flex-d flex-column subtoggle-group" id="collapse2" isOpen={this.state.collapseID}>
                                <MDBCol>
                                    <MDBRow>
                                        <a className="toggle subtoggle" href="#!">Vocalizations</a>
                                    </MDBRow>
                                    <MDBRow>
                                        <a className="toggle subtoggle" href="#!">Right Lung Sounds</a>
                                    </MDBRow>
                                    <MDBRow>
                                        <a className="toggle subtoggle" href="#!">Left Lung Sounds</a>
                                    </MDBRow>
                                    <MDBRow>
                                        <a className="toggle subtoggle" href="#!">Chest Movement</a>
                                    </MDBRow>
                                    <MDBRow>
                                        <a className="toggle subtoggle" href="#!">Heart Sounds</a>
                                    </MDBRow>
                                    <MDBRow>
                                        <a className="toggle subtoggle" href="#!">Left Femoral Pulse</a>
                                    </MDBRow>
                                    <MDBRow>
                                        <a className="toggle subtoggle" href="#!">Right Femoral Pulse</a>
                                    </MDBRow>
                                    <MDBRow>
                                        <a className="toggle subtoggle" href="#!">Left Dorsal Pulse</a>
                                    </MDBRow>
                                    <MDBRow>
                                        <a className="toggle subtoggle" href="#!">Right Dorsal Pulse</a>
                                    </MDBRow>
                                </MDBCol>
                            </MDBCollapse>
                        </MDBRow>

                        <MDBRow>
                            <a
                                className="toggle" href="#!"
                                onClick={this.toggleCollapse("collapse3")}
                            >
                                <Toggle
                                    icon="eye"
                                    text="Probes"
                                />
                            </a>
                        </MDBRow>

                        <MDBRow>


                            <a
                                className="toggle" href="#!"
                                onClick={this.toggleCollapse("collapse4")}
                            >
                                <Toggle
                                    style={{ marginBottom: "1rem" }}
                                    icon="eye"
                                    text="Video"
                                />
                            </a>
                        </MDBRow>

                        <MDBRow>
                            <MDBCollapse className="flex-d flex-column subtoggle-group" id="collapse4" isOpen={this.state.collapseID}>
                                <p>
                                    Lorsdf
                                </p>
                            </MDBCollapse>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBCol>



        );
    }
}

export default Sidebar;