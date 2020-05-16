import React, { Component } from "react";
import PropTypes from 'prop-types';
import { MDBContainer, MDBCol,MDBRow, MDBIcon } from "mdbreact";


class Toggle extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return (

                <MDBRow style={{margin:"auto",textAlign: "left"}}>
                    <MDBCol size="2"><MDBIcon far icon={this.props.icon} style={{fontSize: "0.8rem"}}/></MDBCol>

                    <MDBCol size="7" style={{fontSize: "0.875rem",fontWeight: "bold",textTransform:"capitalize", fontFamily: "Arial", textAlign: "left"}}>
                        {this.props.text}
                    </MDBCol>

                    <MDBCol size="3" style={{ margin:"auto",textAlign: "right"}} ><MDBIcon icon="sort-down" style={{fontSize: "0.8rem",marginRight:"0px"}}/></MDBCol>

                </MDBRow>

        );
    }
}

export default Toggle;