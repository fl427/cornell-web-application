/*
* Card:
* Card component for vital panels.*/

import React, {Component, useContext} from "react";
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBBtn,
    MDBModalHeader,
    MDBModalBody, MDBModalFooter, MDBModal,
    MDBDropdownItem, MDBDropdownToggle, MDBDropdownMenu, MDBDropdown,

} from 'mdbreact';
import PropTypes from "prop-types";
//import HR from "../home/heartrate/components/Hr";
import "./css/Card.css";
import History2 from "./History2";
import { postValue} from "../request/fetch";


const arrLength = 60;
const timeInterval = 5;

const convertDict = {'Heart Rate':"heartRate", 'ETCO2':"etco2", 'AWRR':"awrr", 'SPO2':"spo2", 'TEMP':"temp",
    'NIBP':"nibp"};

const convertName = (frontendName) => {
    return convertDict[frontendName];
};

class Card extends Component {
    state = {
        inputValue: 0,
        inputDuration: 0,
        targetValue: 0,
        modal0: false,
        historyValues: [],
        //pointer: 0,
        slot: 0,
        radio: 1,
        bp: true,
    };

    componentWillReceiveProps(nextProps) {
        if(this.state.slot===0) {

            let temp = JSON.parse(JSON.stringify(this.state.historyValues));
            if (temp.length<arrLength){
                temp.push(nextProps.currentValue);
            }else{
                temp.splice(0,1);
                temp.push(nextProps.currentValue);
            }

            this.setState({
                historyValues: temp,
                // pointer: (this.state.pointer + 1) % arrLength,
                slot: (this.state.slot + 1) % timeInterval
            });
        }else{
            this.setState({slot: (this.state.slot + 1) % timeInterval});
        }
    }

    static propTypes = {
        currentValue: PropTypes.number.isRequired,
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


    handleChangeValue = (e)=>{
        this.setState({inputValue:e.target.value});
    };

    handleChangeDuration =(e)=> {
        this.setState({inputDuration:e.target.value});
    };

    handleSelectMode (n){
        if(n===0){
            this.setState({bp: true});
        }else{
            this.setState({bp: false});
        }
    };


    handlePost = async()=>{
        if(this.props.vital!=="NIBP"){
            await postValue("/api/vitals",{vital:convertName(this.props.vital), target:this.state.inputValue, duration:this.state.inputDuration});
        }else if(this.state.bp){
            await postValue("/api/vitals",{vital:"systolicNIBP", target:this.state.inputValue, duration:this.state.inputDuration});
            console.log(this.state.inputValue);
        }else{
            await postValue("/api/vitals",{vital:"diastolicNIBP", target:this.state.inputValue, duration:this.state.inputDuration});
            console.log(this.state.inputValue);
        }

    };

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
                                        <MDBRow style={{margin:"-0.4rem 0rem -0.8rem -1.3rem"}}>
                                            {this.props.vital!=="NIBP"?
                                                <p className="text-monospace card-value">{this.props.currentValue}
                                                    {this.props.unit.length<=2 ? (<p className="length-less-than-2 text-muted grey-text card-unit">{this.props.unit}</p>)
                                                        : (<p className="length-more-than-2 text-muted grey-text card-unit">{this.props.unit}</p>)}
                                                </p>
                                                :
                                                <p className="text-monospace card-value-nibp">{this.props.currentValue}
                                                    {this.props.unit.length<=2 ? (<p className="length-less-than-2 text-muted grey-text card-unit">{this.props.unit}</p>)
                                                        : (<p className="length-more-than-2 text-muted grey-text card-unit">{this.props.unit}</p>)}
                                                </p>
                                            }

                                        </MDBRow>
                                        {this.props.vital!=="NIBP" ? null:
                                            <MDBRow style={{margin:"1.8rem 1.2rem -0.1rem 2.5rem"}}>
                                                <MDBDropdown dropup size="sm" className="card2-dropdown">
                                                    <MDBDropdownToggle style={{marginTop: "0.4rem",marginLeft:"0.7rem",zIndex:"999"}} caret color="ins" >&nbsp;</MDBDropdownToggle>
                                                    <MDBDropdownMenu>
                                                        <MDBDropdownItem onClick={this.handleSelectMode.bind(this,0)}>Systolic</MDBDropdownItem>
                                                        <MDBDropdownItem onClick={this.handleSelectMode.bind(this,1)}>Diastolic</MDBDropdownItem>
                                                    </MDBDropdownMenu>
                                                </MDBDropdown>
                                            </MDBRow>
                                        }




                                    </MDBCol>
                                    <MDBCol size="6">
                                        <MDBRow style={{margin:"0rem -0.1rem -2.5rem -0rem"}}>
                                            <MDBCol size="6"></MDBCol>
                                            <MDBCol size="6">
                                                <p style={{fontSize:"1.1rem",marginRight:"-1.2rem"}} className=" dark-grey-text d-flex justify-content-end">
                                                    <i className="far fa-chart-bar" onClick={this.toggle(0)}></i>&nbsp;&nbsp;
                                                    <MDBModal isOpen={this.state.modal0} toggle={this.toggle(0)} fullHeight position="top">

                                                        <MDBModalHeader toggle={this.toggle(0)} style={{backgourndColor:"light-grey"}}>
                                                                History of {this.props.vital}
                                                        </MDBModalHeader>
                                                        <MDBModalBody>
                                                            <History2 history={this.state.historyValues} vital={this.props.vital}/>
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
                                                onChange={this.handleChangeValue}
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
                                                onChange={this.handleChangeDuration.bind(this)}
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
                                        onClick={this.handlePost}
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