import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCollapse,
    MDBModal,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter
} from "mdbreact";
import Toggle from './Toggle';
import Profile from "./Profile";

import './css/Sidebar.css';
import History2 from "./History2";

class Sidebar extends Component {
    static propTypes = {
        clickFunc: PropTypes.func.isRequired,
        visibleAllFunc: PropTypes.func.isRequired,
    }

    state = {
        modal0: false,
        collapseID: "",
        probeStatus:{"ECG": true, "ETCO2": true, "SPO2": true, "TEMP": true, "Cuff": true},
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr;
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    };

    render() {
        const vitalList = ["Heart Rate", "ETCO2", "AWRR", "SPO2", "TEMP", "NIBP"];
        const soundList = ["Simulated Vocalizations", "Heart Sounds", "Left Lung Sounds", "Right Lung Sounds",
            "Left Femoral Pulse", "Right Femoral Pulse", "Left Dorsal Pulse", "Right Dorsal Pulse"];
        const probeList = ["ECG", "ETCO2", "SPO2", "TEMP", "Cuff"];
        let vitalElements = new Array();
        let soundElements = new Array();
        let probeElements = new Array();

        for(let i in vitalList){
            if(vitalList[i]==="ETCO2"){
                vitalElements.push((<MDBRow><a className="toggle subtoggle" href="#!" onClick={this.props.clickFunc.bind(this,vitalList[i])}>ETCO<sub>2</sub></a></MDBRow>));
                continue
            }

            if(vitalList[i]==="SPO2"){
                vitalElements.push((<MDBRow><a className="toggle subtoggle" href="#!" onClick={this.props.clickFunc.bind(this,vitalList[i])}>SpO<sub>2</sub></a></MDBRow>));
                continue
            }

            vitalElements.push((<MDBRow><a className="toggle subtoggle" href="#!" onClick={this.props.clickFunc.bind(this,vitalList[i])}>{vitalList[i]}</a></MDBRow>));
        }

        for(let i in soundList){
            soundElements.push((<MDBRow><a className="toggle subtoggle" href="#!" onClick={this.props.clickFunc.bind(this,soundList[i])}>{soundList[i]}</a></MDBRow>));
        }

        for(let i in probeList){
            probeElements.push((<MDBRow><a className="toggle subtoggle" href="#!" >{probeList[i]}</a></MDBRow>));
        }



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
                                    {vitalElements}
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
                                    icon="bell"
                                    text="Sounds"
                                />
                            </a>
                        </MDBRow>

                        <MDBRow>
                            <MDBCollapse className="flex-d flex-column subtoggle-group" id="collapse2" isOpen={this.state.collapseID}>
                                <MDBCol>
                                    {soundElements}
                                </MDBCol>
                            </MDBCollapse>
                        </MDBRow>

                        <MDBRow>
                            <a
                                className="toggle" href="#!"
                                onClick={this.toggleCollapse("collapse3")}
                            >
                                <Toggle
                                    icon="dot-circle"
                                    text="Probes"
                                />
                            </a>
                        </MDBRow>

                        <MDBRow>
                            <MDBCollapse className="flex-d flex-column subtoggle-group" id="collapse3" isOpen={this.state.collapseID}>
                                <MDBCol>
                                    {probeElements}
                                </MDBCol>
                            </MDBCollapse>
                        </MDBRow>

                        <MDBRow>


                            <a
                                className="toggle" href="#!"
                                onClick={this.toggleCollapse("collapse4")}
                            >
                                <Toggle
                                    style={{ marginBottom: "1rem" }}
                                    icon="video"
                                    text="Video"
                                />
                            </a>
                        </MDBRow>

                        <MDBRow>
                            <MDBCollapse className="flex-d flex-column subtoggle-group" id="collapse4" isOpen={this.state.collapseID}>
                                <MDBCol>
                                    <MDBRow><a className="toggle subtoggle" href="#!" onClick={this.toggle(0)}>Play</a></MDBRow>
                                </MDBCol>
                                <MDBModal isOpen={this.state.modal0} toggle={this.toggle(0)} fullHeight position="top">

                                    <MDBModalHeader toggle={this.toggle(0)} >
                                        Video Player
                                    </MDBModalHeader>
                                    <MDBModalBody>
                                        <div className="embed-responsive embed-responsive-21by9">
                                            <iframe title="Embeds Page" className="embed-responsive-item"
                                                    src="https://www.youtube.com/embed/GuM8vTq0jd4"

                                                    allowFullScreen></iframe>
                                            {/*https://www.youtube.com/embed/GuM8vTq0jd4*/}
                                        </div>
                                    </MDBModalBody>
                                    <MDBModalFooter>
                                        <div style={{margin:"auto", textAlign:"center"}}>
                                            <MDBBtn color="secondary" onClick={this.toggle(0)}>Close</MDBBtn>
                                        </div>
                                    </MDBModalFooter>
                                </MDBModal>
                            </MDBCollapse>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBCol>



        );
    }
}

export default Sidebar;