import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Home from "./home/components/Home";
import About from "./home/components/About";
import Contact from "./home/components/Contact";
import Search from "./home/components/Search";

/*
Navbars.Component
*/
import Sidebar from "./shared/components/Sidebar/Sidebar";
import Footer from "./shared/components/Sidebar/Footer";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

/*
Users.Components
*/
import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";

/*
Diseases.Component
*/
import NewDisease from "./diseases/pages/NewDisease";
import NewDiseaseII from "./diseases/pages/NewDiseaseII";
import UpdateDisease from "./diseases/pages/UpdateDisease";
import UserDiseases from "./diseases/pages/UserDiseases";
import AllDiseases from "./diseases/pages/AllDiseases";

import {AuthContext} from "./shared/context/auth-context";
import {useAuth} from "./shared/hooks/auth-hook";


const App = () => {

    const {token, login, logout, userId} = useAuth()

    let routes;

    if (token) {
        routes = (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/users" exact component={Users}/>
                <Route path="/search" exact component={Search}/>

                <Route path="/diseases" exact>
                    <AllDiseases/>
                </Route>

                <Route path="/:userId/diseases" exact>
                    <UserDiseases/>
                </Route>
                <Route path="/diseases/new" exact>
                    <NewDisease/>
                </Route>
                <Route path="/diseases/:diseaseId">
                    <UpdateDisease/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/about" exact>
                    <About/>
                </Route>
                <Route path="/users" exact>
                    <Users/>
                </Route>
                <Route path="/search" exact>
                    <Search/>
                </Route>
                <Route path="/:uid/diseases" exact>
                    <UserDiseases/>
                </Route>
                <Route path="/diseases" exact>
                    <AllDiseases/>
                </Route>
                <Route path="/auth" exact>
                    <Auth/>
                </Route>
                <Redirect to="/auth"/>
            </Switch>
        );
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                userId: userId,
                login: login,
                logout: logout,
            }}
        >
            <div className="wrapper">
                <BrowserRouter>
                    <Sidebar/>

                    <div className="content">
                        <MainNavigation/>

                        <main style={{marginTop:'10px'}}>{routes}</main>
                    </div>
                    <div className="footer">
                        <Footer/>
                    </div>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
};

export default App;
