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

    // No, The page need to reload, so loadedUser is undefined, the code is not correct
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try {
    //             const responseData = await sendRequest(
    //                 `http://localhost:5000/api/users/${auth.userId}`
    //             );
    //
    //             setLoadedUser(responseData.users);
    //         } catch (err) {}
    //     };
    //     fetchUser();
    // }, [sendRequest]);


    return (
        <React.Fragment>
            
                
                 <Navbar bg="light" variant="light">
    <Nav className="mr-auto">
      <Button variant="primary" onClick={onToggle}>Toggle Menu</Button>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/dogs">Dogs</Nav.Link>
      <Nav.Link href="/scenario">Scenario</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
                
           
        </React.Fragment>
    );
};

export default Navigator;
