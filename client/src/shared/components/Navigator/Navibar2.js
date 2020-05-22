import React, {useState, useEffect, useContext} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBView, MDBMask } from 'mdbreact';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {AuthContext} from "../../context/auth-context";
import {useHttpClient} from "../../hooks/http-hook";

import "./Navigator.css";

const Navibar2 = props => {
    const {isToggled, onToggle,isLogin} = props;
    const auth = useContext(AuthContext);
    const [loadedUser, setLoadedUser] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    // The navibar will be simplified when the width is not enough
    const [collapse,setCollapse] = useState(false);
    const [isWideEnough,setIswideenough] = useState(false);

    const clickToggle = ()=>{
        setCollapse(!collapse);
    }

    return (
        <div>
            <header>
                    <MDBNavbar color="black" fixed="top" dark expand="md">
                        <MDBContainer id="navbarSupportedContent">
                            <MDBNavbarBrand href="#!">
                                <strong>Advanced Animal Simulator</strong>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={clickToggle} />
                            <MDBCollapse isOpen={collapse} navbar>
                                {isLogin===false?
                                    (<MDBNavbarNav right>
                                        <MDBNavItem>
                                            <MDBNavLink to="/auth">Sign in / up </MDBNavLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>)
                                    :
                                    (<MDBNavbarNav right>
                                        <MDBNavItem>
                                            <MDBNavLink to="/">Dashboard </MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="/users">Admins</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="/dogs">Scenarios</MDBNavLink>
                                        </MDBNavItem>
                                        {/*
                                        <MDBNavItem>
                                            <MDBNavLink to={`/${auth.userId}/dogs`}>My repo</MDBNavLink>
                                        </MDBNavItem>
                                        */}
                                        <MDBNavItem>
                                            <MDBNavLink to="/dogs/new">New scenario</MDBNavLink>
                                        </MDBNavItem>
                                        {!auth.isLoggedIn && (
                                            <MDBNavItem>
                                                <MDBNavLink to="/auth" onClick={auth.logout}>Sign in</MDBNavLink>
                                            </MDBNavItem>
                                        )}
                                        {auth.isLoggedIn && (
                                            <MDBNavItem>
                                                <MDBNavLink to="#!" onClick={auth.logout}>Log out</MDBNavLink>
                                            </MDBNavItem>
                                        )}

                                    </MDBNavbarNav>)
                                }
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
            </header>


        </div>
    );
}

export default Navibar2;