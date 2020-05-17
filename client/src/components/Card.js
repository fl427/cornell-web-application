import React, {Component} from "react";
import {
    MDBContainer,
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

class Card extends Component {
    state = {
        currentValue: 60,
        targetValue: 0,
        duration: 0,
        modal8: false
    }

    static propTypes = {
        vital: PropTypes.string.isRequired,
        unit: PropTypes.string.isRequired,
        hideFunc: PropTypes.func.isRequired,
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    render() {
        return (
            <div>
                        <MDBCard>
                            <MDBCardBody className="mx-1">
                                <MDBRow>
                                    <MDBCol size="6" className="text-center">
                                        <MDBRow style={{marginTop:"0.8rem",marginBottom:"-2.75rem"}}>
                                        <h4 className="mb-5 grey-text d-flex" style={{margin:"auto",textAlign:"left"}}>
                                            {this.props.vital!=='ETCO2' ? (<strong>{this.props.vital}&nbsp;&nbsp;&nbsp;</strong>):(<strong>ETCO<sub>2</sub>&nbsp;&nbsp;&nbsp;</strong>)}
                                        </h4>
                                        </MDBRow>
                                        <MDBRow style={{marginBottom:"-1.9rem"}}>
                                            <p className="text-monospace" style={{fontWeight:"bold", fontSize:"3.2rem",margin:"auto",textAlign:"left"}}>{this.state.currentValue}<p className="text-muted grey-text" style={{fontFamily:"sans-serif", fontSize:"0.9rem",margin:"auto",textAlign:"right",display:"inline"}}>{this.props.unit}</p></p>
                                        </MDBRow>

                                    </MDBCol>
                                    <MDBCol size="6">
                                        <MDBRow style={{margin:"0px 0px -2.5rem -1rem"}}>
                                            <MDBCol size="8">

                                            </MDBCol>
                                            <MDBCol size="3">
                                                <p style={{fontSize:"1.1rem"}} className=" dark-grey-text d-flex justify-content-end">
                                                    <i className="far fa-chart-bar" onClick={this.toggle(8)}></i>&nbsp;&nbsp;
                                                    <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="right">
                                                        <MDBModalHeader toggle={this.toggle(8)}>History of {this.props.vital}</MDBModalHeader>
                                                        <MDBModalBody>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                            consequat.
                                                        </MDBModalBody>
                                                        <MDBModalFooter>
                                                            <MDBBtn color="secondary" onClick={this.toggle(8)}>Close</MDBBtn>
                                                            <MDBBtn color="primary">Save changes</MDBBtn>
                                                        </MDBModalFooter>
                                                    </MDBModal>
                                                    <i className="far fa-times-circle" onClick={this.props.hideFunc.bind(this,this.props.vital)}></i>
                                                </p>
                                            </MDBCol>
                                            <MDBCol size="1">

                                            </MDBCol>
                                        </MDBRow>
                                    <MDBRow style={{margin:"-0.625rem 0px -4.7rem -0.625rem"}}>
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
                                    <MDBRow style={{margin:"-4.7rem 0px -0.625rem -0.625rem"}}>
                                        <MDBInput
                                            size="sm"
                                            label="Duration (sec)"
                                            group
                                            type="number"
                                            validate
                                            containerClass="mb-0"
                                        />
                                    </MDBRow>
                                    </MDBCol>
                                </MDBRow>

                                <div className="text-center mb-3">
                                    <MDBRow>
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
                                </div>

                            </MDBCardBody>

                        </MDBCard>
            </div>
        );
    };
}
export default Card;