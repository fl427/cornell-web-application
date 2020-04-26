// @Reference: https://startbootstrap.com/templates/simple-sidebar/
// @Reference: https://stackoverflow.com/questions/20557912/creating-a-fixed-sidebar-alongside-a-centered-bootstrap-3-grid
import React, { useState } from "react";
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Home
import Home from "./home/pages/Home";

// User
import Users from "./user/pages/Users";
import Auth from "./user/pages/Auth";
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from "./shared/hooks/auth-hook";

// Navigation
import Sidebar from "./shared/components/Sidebar/Sidebar";
import Navigator from "./shared/components/Navigator/Navigator";

// Dog
import Dogs from "./dogs/pages/Dogs";
import UserDogs from "./dogs/pages/UserDogs";
import NewDog from "./dogs/pages/NewDog";
import UpdateDog from "./dogs/pages/UpdateDog";
import DogDetail from "./dogs/pages/DogDetail";

// Log
import NewLog from "./home/log/pages/NewLog";

const App = () => {

    const {token, login, logout, userId} = useAuth()
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        if (toggle) {
            setToggle(false);
        } else {
            setToggle(true);
        }
    }

    let wrapperClassName = 'd-flex'
    if (toggle) {
        wrapperClassName += ' toggled'
    }

    let routes;

    if (token) {
        routes = (
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/users" exact>
                    <Users/>
                </Route>
                <Route path="/dogs" exact>
                    <Dogs/>
                </Route>
                <Route path="/:userId/dogs" exact>
                    <UserDogs/>
                </Route>
                <Route path="/dogs/new" exact>
                    <NewDog/>
                </Route>
                <Route path="/dogs/edit/:dogId">
                    <UpdateDog/>
                </Route>
                <Route path="/dogs/:dogId">
                    <DogDetail/>
                </Route>
                <Route path="/logs/new">
                    <NewLog/>
                </Route>

                <Redirect to="/" />
            </Switch>
        )
    } else {
        routes = (
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/users" exact>
                    <Users/>
                </Route>
                <Route path="/dogs" exact>
                    <Dogs/>
                </Route>
                <Route path="/auth" exact>
                    <Auth/>
                </Route>

                <Redirect to="/auth" />
            </Switch>
        )
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                userId: userId,
                login: login,
                logout: logout
            }}
        >
            <BrowserRouter>
                <div id="wrapper" className={wrapperClassName}>
                    <Sidebar/>
                    <div id="page-content-wrapper">
                        <Navigator
                            isToggle={toggle}
                            onToggle={handleToggle}
                        />
                        {routes}
                    </div>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );

};

export default App;