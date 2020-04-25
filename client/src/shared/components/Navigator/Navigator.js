import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from '../../context/auth-context';

import "./Navigator.css";

const Navigator = props => {

    const {isToggled, onToggle} = props;
    const auth = useContext(AuthContext);
    console.log("Navigator:" + auth);

    return (
        <React.Fragment>
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
                            <Link to="/:userId/dogs" className="nav-link">My Dogs</Link>
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
                        <li className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <Link to="/" className="dropdown-item">Action</Link>
                                <Link to="/" className="dropdown-item">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link to="/" className="dropdown-item">Something else here</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Navigator;
