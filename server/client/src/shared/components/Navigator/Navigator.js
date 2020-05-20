import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from '../../context/auth-context';

import "./Navigator.css";
import {useHttpClient} from "../../hooks/http-hook";

import { Button, Form, FormControl, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


const Navigator = props => {

    const {isToggled, onToggle} = props;
    const auth = useContext(AuthContext);
    const [loadedUser, setLoadedUser] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();



    return (
        <React.Fragment>

            {/*<Navbar bg="light" variant="light">*/}
            {/*    <Nav className="mr-auto">*/}
            {/*        <Button variant="primary" onClick={onToggle}>Toggle Menu</Button>*/}
            {/*        <Nav.Link href="/">Home</Nav.Link>*/}
            {/*        <Nav.Link href="/users">Users</Nav.Link>*/}
            {/*        <Nav.Link href="/dogs">Dogs</Nav.Link>*/}
            {/*        {auth.isLoggedIn && (*/}
            {/*            <Nav.Link href={`/${auth.userId}/dogs`}>My Dogs</Nav.Link>*/}
            {/*        )}*/}
            {/*    </Nav>*/}
            {/*    <Form inline>*/}
            {/*        <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
            {/*        <Button variant="outline-primary">Search</Button>*/}
            {/*    </Form>*/}
            {/*</Navbar>*/}

            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button className="btn btn-primary" id="menu-toggle" onClick={onToggle}>Toggle Menu</button>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/users" className="nav-link">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dogs" className="nav-link">Dogs</Link>
                        </li>
                        {auth.isLoggedIn && (
                        <li className="nav-item">
                            <Link to={`/${auth.userId}/dogs`} className="nav-link">My Dogs</Link>
                        </li>
                        )}
                        {auth.isLoggedIn && (
                            <li className="nav-item">
                                <Link to="/dogs/new" className="nav-link">Add Dog</Link>
                            </li>
                        )}
                        {!auth.isLoggedIn && (
                            <li className="nav-item">
                                <Link to="/auth" className="nav-link">Auth</Link>
                            </li>
                        )}
                        {auth.isLoggedIn && (
                            <li className="nav-item">
                                <Link to="/" className="nav-link" onClick={auth.logout}>Logout</Link>
                                {/*<button className="nav-link" onClick={auth.logout}>LOGOUT</button>*/}
                            </li>
                        )}

                        {/*Check whether this user is admin, this checking method is not good, since we only check the
                        unique admin, there can not have multiple admin if using this method*/}
                        {auth.isLoggedIn && auth.userId === '5ea62c47e9a2207c62c4148d' && (
                        <li className="nav-item">
                            <Link to="/logs/new" className="nav-link">Add Log</Link>
                        </li>
                        )}

                        {/*<Form inline>*/}
                        {/*    <FormControl type="text" placeholder="Search" className="md-sm-2" />*/}
                        {/*    <Button variant="outline-primary">Search</Button>*/}
                        {/*</Form>*/}
                    </ul>
                </div>
            </nav>

        </React.Fragment>
    );
};

export default Navigator;
