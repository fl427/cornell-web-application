import React from "react";
import { Link } from "react-router-dom";

import './Sidebar.css';

const Sidebar = () => {
  return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Dog Simulator</h3>
        </div>
        
        <ul className="list-unstyled components">
          <p>Dummy Heading</p>
          <li className="active">
            <Link to="/" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</Link>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <Link to="/">Home 1</Link>
              </li>
              <li>
                <Link to="/">Home 2</Link>
              </li>
              <li>
                <Link to="/">Home 3</Link>
              </li>
            </ul>
          </li>         
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          {/* DROPDOWN BUTTON */}
          {/* <li className="dropdown">
              <a className="btn btn-secondary dropdown-toggle" href="/" role="button"
                  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Dropdown link
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="/">Action</a>
                  <a className="dropdown-item" href="/">Another action</a>
                  <a className="dropdown-item" href="/">Something else here</a>
              </div>
          </li> */}
          <li>
            <Link to="/">Monitor</Link>
          </li>
          <li>
            <Link to="/">Settings</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Sidebar;
