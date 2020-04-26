import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from '../../context/auth-context';

import "./Navigator.css";
import {useHttpClient} from "../../hooks/http-hook";

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
                        {auth.isLoggedIn && auth.userId === '5ea511f240200368a4fe8d41' && (
                        <li className="nav-item">
                            <Link to="/logs/new" className="nav-link">Add Log</Link>
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
