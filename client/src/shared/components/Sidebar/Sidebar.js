// import React from "react";
// import { NavLink, Link } from "react-router-dom";

// import "./Sidebar.css";

// const Sidebar = props => {
//         return (
//             <React.Fragment>
//             <div className="bg-light border-right sidebar" id="sidebar-wrapper">
//                 <div className="sidebar-heading">Simulation</div>
//                 <div className="list-group list-group-flush">
//                     <Link to="/" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
//                     <li className="list-group-item list-group-item-action bg-light">
//                         <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
//                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                 Signals
//                         </Link>
//                         <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
//                             <Link to="/" className="dropdown-item">Action</Link>
//                             <Link to="/" className="dropdown-item">Another action</Link>
//                             <div className="dropdown-divider"></div>
//                             <Link to="/" className="dropdown-item">Something else here</Link>
//                         </div>
//                     </li>
//                     <Link to="/" className="list-group-item list-group-item-action bg-light">Monitor</Link>
//                     <Link to="/" className="list-group-item list-group-item-action bg-light">Videos</Link>
//                     <Link to="/" className="list-group-item list-group-item-action bg-light">Editors</Link>
//                     <Link to="/" className="list-group-item list-group-item-action bg-light">Events</Link>
//                 </div>
//             </div>




//                 {/*<div className="sidebar content-box" style={{display: 'block'}}>*/}
//                 {/*    <ul className="nav">*/}
//                 {/*        <li className="current"><a href="index.html"><i*/}
//                 {/*            className="glyphicon glyphicon-home"></i> Dashboard</a></li>*/}

//                         {/*<li className="submenu">*/}
//                         {/*    <a href="#">*/}
//                         {/*        <i className="glyphicon glyphicon-record"></i> Signals*/}
//                         {/*        <span className="caret pull-right"></span>*/}
//                         {/*    </a>*/}
//                         {/*    <ul>*/}
//                         {/*        <li><a id="sk" href="index.html">Shock</a></li>*/}
//                         {/*        <li><a id="do" href="index.html">Low Dose Epi</a></li>*/}

//                         {/*    </ul>*/}
//                         {/*</li>*/}

//                 {/*        <li className="submenu submenu-item">*/}
//                 {/*            <a id="monitor">*/}
//                 {/*                <i className="glyphicon glyphicon-eye-open"></i> Monitor*/}
//                 {/*                <span className="caret pull-right"></span>*/}
//                 {/*            </a>*/}
//                 {/*            <ul>*/}
//                 {/*                <li><a id="monitor-hr" className="submenu-item">Heart Rate </a></li>*/}
//                 {/*                <li><a id="monitor-etco2" className="submenu-item">ETCO<sub>2</sub></a></li>*/}
//                 {/*                <li><a id="monitor-awrr" className="submenu-item">awRR</a></li>*/}
//                 {/*                <li><a id="monitor-spo2" className="submenu-item">SpO<sub>2</sub></a></li>*/}
//                 {/*                <li><a id="monitor-temp" className="submenu-item">Temp</a></li>*/}
//                 {/*                <li><a id="monitor-nibp" className="submenu-item">NIBP</a></li>*/}

//                 {/*            </ul>*/}
//                 {/*        </li>*/}


//                 {/*        <li className="submenu">*/}
//                 {/*            <a href="#">*/}
//                 {/*                <i className="glyphicon glyphicon-cog"></i> Settings*/}
//                 {/*                <span className="caret pull-right"></span>*/}
//                 {/*            </a>*/}
//                 {/*            <ul>*/}
//                 {/*                <li><a id="set-ecg" href="index.html">ECG</a></li>*/}
//                 {/*                <li><a id="set-hr" href="index.html">Heart Rate</a></li>*/}


//                 {/*            </ul>*/}
//                 {/*        </li>*/}


//                 {/*        <li><a href="calendar.html"><i className="glyphicon glyphicon-facetime-video"></i> Videos</a>*/}
//                 {/*        </li>*/}
//                 {/*        <li><a href="buttons.html"><i className="glyphicon glyphicon-record"></i> Buttons</a></li>*/}
//                 {/*        <li><a href="editors.html"><i className="glyphicon glyphicon-pencil"></i> Editors</a></li>*/}
//                 {/*        <li><a href="forms.html"><i className="glyphicon glyphicon-tasks"></i> Forms</a></li>*/}

//                 {/*        <li className="submenu">*/}
//                 {/*            <a href="#">*/}
//                 {/*                <i className="glyphicon glyphicon-list"></i> Events*/}
//                 {/*                <span className="caret pull-right"></span>*/}
//                 {/*            </a>*/}

//                 {/*            <ul>*/}
//                 {/*                <li><a id="shock" href="index.html">Shock</a></li>*/}
//                 {/*                <li><a id="lowdo" href="index.html">Low Dose Epi</a></li>*/}
//                 {/*                <li><a id="vasop" href="index.html">Vasoperssin</a></li>*/}
//                 {/*                <li><a id="reversal" href="index.html">Reversal</a></li>*/}
//                 {/*                <li><a id="defib" href="index.html">Defib</a></li>*/}
//                 {/*                <li><a id="terminal" href="index.html">Terminal</a></li>*/}
//                 {/*            </ul>*/}
//                 {/*        </li>*/}
//                 {/*    </ul>*/}
//                 {/*</div>*/}











//             </React.Fragment>
//         );
// };

// export default Sidebar;
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
import "./Sidebar.css"; 

function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }) {
  const [collapsed, setCollapsed] = React.useState(true);
  const { label, items, Icon, onClick: onClickProp } = item;

  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }

  function onClick(e) {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
    if (onClickProp) {
      onClickProp(e, item);
    }
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? (
      <ExpandLessIcon
        className={
          "sidebar-item-expand-arrow" + " sidebar-item-expand-arrow-expanded"
        }
      />
    ) : (
      <ExpandMoreIcon className="sidebar-item-expand-arrow" />
    );
  }

  return (
    <>
      <ListItem
        className="sidebar-item"
        onClick={onClick}
        button
        dense
        {...rest}
      >
        <div
          style={{ paddingLeft: depth * depthStep }}
          className="sidebar-item-content"
        >
          {Icon && <Icon className="sidebar-item-icon" fontSize="small" />}
          <div className="sidebar-item-text">{label}</div>
        </div>
        {expandIcon}
      </ListItem>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem, index) => (
              <React.Fragment key={`${subItem.name}${index}`}>
                {subItem === "divider" ? (
                  <Divider style={{ margin: "6px 0" }} />
                ) : (
                  <SidebarItem
                    depth={depth + 1}
                    depthStep={depthStep}
                    item={subItem}
                  />
                )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse>
    </>
  );
}

function Sidebar({ items, depthStep, depth, expanded }) {
  return (
    <div className="sidebar">
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <React.Fragment key={`${sidebarItem.name}${index}`}>
            {sidebarItem === "divider" ? (
              <Divider style={{ margin: "6px 0" }} />
            ) : (
              <SidebarItem
                depthStep={depthStep}
                depth={depth}
                expanded={expanded}
                item={sidebarItem}
              />
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;
