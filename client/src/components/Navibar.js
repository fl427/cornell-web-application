import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBView, MDBMask } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


class Navibar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {

        return (
            <div>
                <header>
                <Router>
                        <MDBNavbar color="black" fixed="top" dark expand="md">
                            <MDBContainer>
                                <MDBNavbarBrand href="/">
                                    <strong>Advanced Animal Simulator</strong>
                                </MDBNavbarBrand>
                                <MDBNavbarToggler onClick={this.onClick} />
                                <MDBCollapse isOpen={this.state.collapse} navbar>

                                        {this.props.isLogin===false?
                                            (<MDBNavbarNav right> <MDBNavItem>
                                                <MDBNavLink to="#">Sign in/up</MDBNavLink>
                                            </MDBNavItem></MDBNavbarNav>)
                                            :( <MDBNavbarNav right><MDBNavItem>
                                                    <MDBNavLink to="#">Home</MDBNavLink>
                                                </MDBNavItem>
                                                <MDBNavItem>
                                                <MDBNavLink to="#">Scenarios</MDBNavLink>
                                            </MDBNavItem>
                                            <MDBNavItem>
                                            <MDBNavLink to="#">Sign in</MDBNavLink>
                                            </MDBNavItem> </MDBNavbarNav>)
                                        }


                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>

                </Router>


            </header>


    </div>
    );
    }
}

export default Navibar;