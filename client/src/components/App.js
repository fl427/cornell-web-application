import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Search from './Search';

/*
Navbars.Component
*/
import Header from './Navbars/Header';
import Sidebar from './Navbars/Sidebar';
import Footer from './Navbars/Footer';

/*
Diseases.Component
*/
import DiseasesList from "./Disease/diseases-list.component";
import EditDisease from "./Disease/edit-disease.component";
import CreateDisease from './Disease/create-disease.component';

import './App.css';

const App = () => {
    return (
        <div className="wrapper">
            <BrowserRouter>
    
                <Sidebar /> 

                <div className="content">   
                    <Header />
                    
                    {/* Home Page's Component */}
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/diseases" exact component={DiseasesList} />
                        <Route path="/about" exact component={About} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/search" exact component={Search} /> 
                    </Switch> 
                    
                    {/* Diseases Page's Component */}
                    <Switch>
                        <Route path="/diseases/edit/:id" exact component={EditDisease} />
                        <Route path="/diseases/create" exact component={CreateDisease} />
                    </Switch> 

                    
                </div>  
                <div className="footer">
                <Footer />
                </div>          
    
            </BrowserRouter>       
        </div>
    );
}

export default App;
