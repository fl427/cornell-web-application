import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
// import 'bootstrap/dist/js/bootstrap.min.js';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Popper from 'popper.js';
import './index.css';


ReactDOM.render(
    <App />, 
    document.getElementById('root')
);