import React from "react";
import { Link } from "react-router-dom";
import { SideMenu, Item } from 'react-sidemenu';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import './Sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>Dog Simulator</h3>
          </div>
          
          <ul className="list-unstyled components">
            <p>Dummy Heading</p>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
            <MDBDropdown>
              <MDBDropdownToggle caret color="primary">
                Signals
              </MDBDropdownToggle>
              <MDBDropdownMenu basic>
                <MDBDropdownItem>Action</MDBDropdownItem>
                <MDBDropdownItem>Another Action</MDBDropdownItem>
                <MDBDropdownItem>Something else here</MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem>Separated link</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            </li>
            <li>
            <MDBDropdown>
              <MDBDropdownToggle caret color="primary">
                Monitor
              </MDBDropdownToggle>
              <MDBDropdownMenu basic>
                <MDBDropdownItem>Action</MDBDropdownItem>
                <MDBDropdownItem>Another Action</MDBDropdownItem>
                <MDBDropdownItem>Something else here</MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem>Separated link</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            </li>
            <li>
            <MDBDropdown>
              <MDBDropdownToggle caret color="primary">
                Settings
              </MDBDropdownToggle>
              <MDBDropdownMenu basic>
                <MDBDropdownItem>Action</MDBDropdownItem>
                <MDBDropdownItem>Another Action</MDBDropdownItem>
                <MDBDropdownItem>Something else here</MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem>Separated link</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            </li>
            <li>
              <Link to="/">Videos</Link>
            </li>
            <li>
              <Link to="/">Buttons</Link>
            </li>
            <li>
              <Link to="/">Editors</Link>
            </li>
            <li>
              <Link to="/">Forms</Link>
            </li>
            <li>
              <Link to="/">Events</Link>
            </li>
          </ul>
        </nav>
    );
  }
  
};

export default Sidebar;
