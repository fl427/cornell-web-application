import React from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';

import "./NavLinks.css";

class SearchButton extends React.Component {

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
      <ul className="nav-links">
        <li>
          <form ref="searchForm" className="searchbar" onSubmit={this.onSubmit}>
            <input
              className="search_input"
              type="text"
              placeholder="Search..."
              value={this.state.searchQuery}
              onChange={this.onChangeQuery}
            />         
          </form>
        </li>
      </ul>
    );
  }
  
};

export default SearchButton;
