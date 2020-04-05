import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

import './Header.css';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.onChangeQuery = this.onChangeQuery.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        searchQuery: ''
    };

  }

  onChangeQuery(event) {
    this.setState({
        searchQuery: event.target.value
    });
    console.log("query", this.state.searchQuery)
  }

  onSubmit(event) {
    event.preventDefault();

    const findDisease = {
        name: this.state.searchQuery
    };

    axios.post('http://localhost:5000/diseases/search', findDisease)
        .then(res => console.log(res.data));

    this.setState({
        searchQuery: ''
    })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button type="button" id="sidebarCollapse" className="btn btn-info">
            <i className="fas fa-align-left"></i>
            <span>Toggle Sidebar</span>
          </button>
          <button
            className="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-justify"></i>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/diseases" className="nav-link">
                  Diseases
                </Link>
              </li>
              <li id="navbar" className="navbar-collapse collapse">
  
                  <form ref='searchForm' className="searchbar" onSubmit={this.onSubmit}>
                      <input className="search_input" type="text" placeholder="Search..." value={this.state.searchQuery} onChange={this.onChangeQuery} />
                      <FontAwesomeIcon
                          icon={faCoffee} onClick={this.onSubmit}
                          className="search_icon"
                      />
                  </form>
  
              </li>
            </ul>
          </div>
        </div>
      </nav>   
    );
  }  
};

export default Header;
