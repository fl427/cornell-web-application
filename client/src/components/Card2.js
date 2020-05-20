/*
* Card2:
* Card component for sound panels.*/

import React, {Component} from "react";
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from 'mdbreact';
import PropTypes from "prop-types";
import "./css/Card2.css";

class Card2 extends Component {
    state = {
        inputMode: "s",
        inputVolume: 0,
        currentVolume: 5,
        targetVolume: 0,
        duration: 0,
    };

    static propTypes = {
        currentMode: PropTypes.string.isRequired,
        sound: PropTypes.string.isRequired,
        hideFunc: PropTypes.func.isRequired,
        items: PropTypes.array.isRequired,
    };

    handleSelectMode (n){
        this.setState({inputMode:this.props.items[n]});
    };

    handleChangeVolume =(e)=> {
        this.setState({inputVolume:e.target.value});
    };

    handlePost = async()=>{
        await console.log(this.state.inputMode,this.state.inputVolume);
    };


    render() {
        let elements = new Array();
        for(let i in this.props.items){
            elements.push((<MDBDropdownItem onClick={this.handleSelectMode.bind(this,i)}>{this.props.items[i]}</MDBDropdownItem>));
        }

        return (
            <MDBCol md="12"  lg="4" style={{marginBottom: "2rem"}} >
                <MDBCard>
                    <MDBCardBody className="mx-1" style={{marginBottom:"-0.7rem"}}>

                        <MDBRow className="card2-icon" style={{marginBottom: "-0.9rem"}}>
                            <MDBCol size="10"></MDBCol>
                            <MDBCol size="2" style={{textAlign: "right"}}>
                                <p className="dark-grey-text d-flex justify-content-end">
                                    <i className="far fa-times-circle" onClick={this.props.hideFunc.bind(this,this.props.sound)}></i>
                                </p>
                            </MDBCol>

                        </MDBRow>
                        <MDBRow style={{marginTop:"0.1rem",marginBottom:"-4rem", height:"7.5rem"}}>

                            <MDBCol size="10">
                                <h3 className="mb-5 grey-text d-flex" style={{margin:"auto",textAlign:"left"}}>
                                    <strong>{this.props.sound}&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                </h3>
                            </MDBCol>
                            <MDBCol size="0"></MDBCol>
                        </MDBRow>

                        <MDBRow className="card2-mode">
                            <h6 className="dark-grey-text card2-mode-text">
                                <p className="grey-text">Volume & Mode:</p>
                                <p style={{marginTop: "-0.5rem", fontWeight: "bold"}}>
                                    {this.state.currentVolume}&nbsp;&nbsp;|&nbsp;&nbsp;Fine Crakeless
                                </p>
                            </h6>
                        </MDBRow>

                        <MDBRow>


                            <MDBCol size="10">
                                <div className="card2-input">
                                <MDBInput
                                    label="Volume (0-10)"
                                    group
                                    type="number"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.handleChangeVolume}
                                />
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className="text-center mb-3 card2-btn">

                            <MDBCol size="2">
                                <MDBDropdown dropup size="sm" className="card2-dropdown" onChange={this.handleChangeMode}>
                                    <MDBDropdownToggle caret color="ins" style={{marginLeft:"0.7rem"}} onChange={this.handleChangeMode}></MDBDropdownToggle>
                                    <MDBDropdownMenu onChange={this.handleChangeMode}>
                                        {elements}

                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBCol>
                            <MDBCol size="8">
                                <MDBBtn
                                    outline
                                    type="button"
                                    size="sm"
                                    gradient="blue"
                                    rounded
                                    className="btn-block"
                                    onClick={this.handlePost}
                                >
                                    Set
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>

                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        );
    };
}
export default Card2;