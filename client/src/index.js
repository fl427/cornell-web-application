import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import Popper from 'popper.js';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);