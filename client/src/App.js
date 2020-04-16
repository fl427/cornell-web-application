import React, { useState, useCallback } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./home/components/Home";
import About from "./home/components/About";
import Contact from "./home/components/Contact";
import Search from "./home/components/Search";

/*
Navbars.Component
*/
import Header from "./shared/components/Sidebar/Header";
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
import DiseasesList from "./diseases/components/diseases-list.component";
import EditDisease from "./diseases/components/edit-disease.component";
import CreateDisease from "./diseases/components/create-disease.component";
import NewDisease from "./diseases/pages/NewDisease";
import UserDiseases from "./diseases/pages/UserDiseases";

import { AuthContext } from "./shared/context/auth-context";

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/users" exact component={Users} />
        <Route path="/search" exact component={Search} />
        <Route path="/:uid/diseases" exact component={UserDiseases} />
        <Route path="/diseases" exact component={DiseasesList} />
        <Route path="/diseases/edit/:id" exact component={EditDisease} />
        <Route path="/diseases/new" exact component={CreateDisease} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/:uid/diseases" exact>
          <UserDiseases />
        </Route>
        <Route path="/diseases" exact>
          <DiseasesList />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <div className="wrapper">
        <BrowserRouter>
          <Sidebar />

          <div className="content">
            {/* <Header /> */}
            <MainNavigation />

            <main style={{ margin: "0" }}>
              {routes}
            </main>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
