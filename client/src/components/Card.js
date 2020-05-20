/*
* Card:
* Card component for vital panels.*/

import React, {Component} from "react";
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBBtn,
    MDBModalHeader,
    MDBModalBody, MDBModalFooter, MDBModal,

} from 'mdbreact';
import PropTypes from "prop-types";
import HR from "../home/heartrate/components/Hr";
import "./css/Card.css";

class Card extends Component {
    state = {
        currentValue: 100,
        targetValue: 0,
        duration: 0,
        modal0: false,
        historyValues: new Array(100),
    };

    static propTypes = {
        vital: PropTypes.string.isRequired,
        unit: PropTypes.string.isRequired,
        hideFunc: PropTypes.func.isRequired,
    };

    toggle = nr => () => {
        let modalNumber = 'modal' + nr;
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    };

    componentDidMount() {
        let step = 1;
        this.timer = setInterval(() => {
            if(this.state.currentValue>=120||this.state.currentValue<=80){
                step=-step;
                }
            this.setState({currentValue: this.state["currentValue"]+step});

        }, 1000);
    }


    render() {
        return (
            <MDBCol md="12"  lg="4" style={{marginBottom: "2rem"}} >
                        <MDBCard>
                            <MDBCardBody className="mx-1" style={{marginBottom:"-0.7rem"}}>
                                <MDBRow style={{marginTop: "-0.6rem"}}>
                                    <MDBCol size="6" className="text-center">
                                        <MDBRow style={{marginTop:"0.8rem",marginBottom:"-2.75rem"}}>
                                        <h4 className="mb-5 grey-text d-flex" style={{margin:"auto",textAlign:"left"}}>
                                            {(this.props.vital==='ETCO2')||(this.props.vital==='SPO2') ?
                                                ((this.props.vital==='ETCO2')?(<strong>ETCO<sub>2</sub>&nbsp;&nbsp;&nbsp;&nbsp;</strong>) : (<strong>SpO<sub>2</sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>))
                                                : (<strong style={{whiteSpace: "nowrap"}}>{this.props.vital}&nbsp;&nbsp;&nbsp;&nbsp;</strong>)}
                                        </h4>
                                        </MDBRow>
                                        <MDBRow style={{margin:"-0.4rem 0rem -1.9rem -1.3rem"}}>
                                            <p className="text-monospace card-value">{this.state.currentValue}
                                                {this.props.unit.length<=2 ? (<p className="length-less-than-2 text-muted grey-text card-unit">{this.props.unit}</p>)
                                                : (<p className="length-more-than-2 text-muted grey-text card-unit">{this.props.unit}</p>)}
                                            </p>
                                        </MDBRow>

                                    </MDBCol>
                                    <MDBCol size="6">
                                        <MDBRow style={{margin:"0rem -0.1rem -2.5rem -0rem"}}>
                                            <MDBCol size="6"></MDBCol>
                                            <MDBCol size="6">
                                                <p style={{fontSize:"1.1rem",marginRight:"-1.2rem"}} className=" dark-grey-text d-flex justify-content-end">
                                                    <i className="far fa-chart-bar" onClick={this.toggle(0)}></i>&nbsp;&nbsp;
                                                    <MDBModal isOpen={this.state.modal0} toggle={this.toggle(0)} fullHeight position="top">
                                                        <MDBModalHeader toggle={this.toggle(0)} >
                                                                History of {this.props.vital}
                                                        </MDBModalHeader>
                                                        <MDBModalBody>
                                                            <HR />
                                                        </MDBModalBody>
                                                        <MDBModalFooter>
                                                            <div style={{margin:"auto", textAlign:"center"}}>
                                                            <MDBBtn color="secondary" onClick={this.toggle(0)}>Close</MDBBtn>
                                                            </div>
                                                        </MDBModalFooter>
                                                    </MDBModal>
                                                    <i className="far fa-times-circle" onClick={this.props.hideFunc.bind(this,this.props.vital)}></i>
                                                </p>


                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow style={{margin:"-0.6rem -0.2rem -4.7rem -0.4rem"}}>
                                            <MDBInput
                                                size="sm"
                                                label="Target Value"
                                                group
                                                type="number"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                        </MDBRow>
                                        <MDBRow style={{margin:"-4.7rem -0.2rem -0.6rem -0.4rem"}}>
                                            <MDBInput
                                                size="sm"
                                                label="Duration (s)"
                                                group
                                                type="number"
                                                validate
                                                containerClass="mb-0"
                                            />
                                        </MDBRow>

                                    </MDBCol>
                                </MDBRow>

                                <MDBRow className="text-center mb-3" style={{marginLeft:"-0.4rem",marginRight:"-1.3rem"}}>

                                    <MDBCol size="5"></MDBCol>
                                    <MDBCol size="7">
                                    <MDBBtn
                                        outline
                                        type="button"
                                        size="sm"
                                        gradient="peach"
                                        rounded
                                        className="btn-block z-depth-1a"
                                    >
                                        Set
                                    </MDBBtn>
                                    </MDBCol >

                                </MDBRow>

                            </MDBCardBody>

                        </MDBCard>
            </MDBCol>
        );
    };
}
export default Card;