// @reference: https://medium.com/better-programming/create-a-modern-dynamic-sidebar-menu-in-react-using-recursion-f757135045bc
import React from "react";
import { NavLink, Link } from "react-router-dom";

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
                component={Link} to={`/${item.name}`}
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


const Sidebar = ({ props, items, depthStep, depth, expanded }) => {
        return (
            <React.Fragment>
                {/*className="bg-light border-right sidebar"*/}
                <div className="sidebar" id="sidebar-wrapper">
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

            </React.Fragment>
        );
};

export default Sidebar;
