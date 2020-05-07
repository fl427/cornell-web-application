// @Reference: https://startbootstrap.com/templates/simple-sidebar/
// @Reference: https://stackoverflow.com/questions/20557912/creating-a-fixed-sidebar-alongside-a-centered-bootstrap-3-grid
import React, { useState } from "react";
import {BrowserRouter, Route, Switch, Redirect, Link} from "react-router-dom";

// Home
import Home from "./home/pages/Home";

// User
import Users from "./user/pages/Users";
import Auth from "./user/pages/Auth";
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from "./shared/hooks/auth-hook";

// Navigation
import Sidebar from "./shared/components/Sidebar/Sidebar";
import Navigator from "./shared/components/Navigator/Navigator";

// Dog
import Dogs from "./dogs/pages/Dogs";
import UserDogs from "./dogs/pages/UserDogs";
import NewDog from "./dogs/pages/NewDog";
import UpdateDog from "./dogs/pages/UpdateDog";
import DogDetail from "./dogs/pages/DogDetail";

// Log
import NewLog from "./home/log/pages/NewLog";
import NewLogcomment from "./home/logcomment/pages/NewLogcomment";
import Logs from "./home/log/pages/Logs";
import Logcomments from "./home/logcomment/pages/Logcomments";

// Media
import Media from "./media/pages/Media";

// New Sidebar Setting
import HomeIcon from "@material-ui/icons/Home";
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SettingsIcon from "@material-ui/icons/Settings";

function onClick(e, item) {
    // window.alert(JSON.stringify(item, null, 2));
    // return <Link to="/media">Media</Link>
}

const items = [
    { name: "", label: "Dashboard", Icon: HomeIcon },
    "divider",
    {
        name: "signal", // 这里用name作为路由。传入Sidebar.js里面的ListItem component={Link} to={`/${item.name}`}
        label: "Signals",
        Icon: RadioButtonCheckedIcon,
        items: [
            { name: "media", label: "Statements", onClick },
            { name: "media", label: "Reports", onClick }
        ]
    },
    "divider",
    {
        name:"monitor",
        label: "Monitor",
        Icon: VisibilityIcon,
        items:[
            { name: "heartrate", label: "HeartRate", onClick}
        ]
    },
    "divider",
    {
        name: "settings",
        label: "Settings",
        Icon: SettingsIcon,
        items: [
            { name: "profile", label: "Profile" },
            { name: "insurance", label: "Insurance", onClick },
            "divider",
            {
                name: "notifications",
                label: "Notifications",
                Icon: NotificationsIcon,
                items: [
                    { name: "email", label: "Email", onClick },
                    {
                        name: "desktop",
                        label: "Desktop",
                        Icon: DesktopWindowsIcon,
                        items: [
                            { name: "schedule", label: "Schedule" },
                            { name: "frequency", label: "Frequency" }
                        ]
                    },
                    { name: "sms", label: "SMS" }
                ]
            }
        ]
    }
];


const App = () => {

    const {token, login, logout, userId} = useAuth()
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        if (toggle) {
            setToggle(false);
        } else {
            setToggle(true);
        }
    }

    let wrapperClassName = 'd-flex'
    if (toggle) {
        wrapperClassName += ' toggled'
    }

    let routes;

    if (token) {
        routes = (
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/users" exact>
                    <Users/>
                </Route>
                <Route path="/dogs" exact>
                    <Dogs/>
                </Route>
                <Route path="/:userId/dogs" exact>
                    <UserDogs/>
                </Route>
                <Route path="/dogs/new" exact>
                    <NewDog/>
                </Route>
                <Route path="/dogs/edit/:dogId">
                    <UpdateDog/>
                </Route>
                <Route path="/dogs/:dogId">
                    <DogDetail/>
                </Route>
                <Route path="/logs/new">
                    <NewLog/>
                </Route>
                <Route path="/logcomments">
                    <Logcomments/>
                </Route>
                <Route path="/logcomments/new">
                    <NewLogcomment/>
                </Route>
                <Route path="/media">
                    <Media />
                </Route>
                <Redirect to="/" />
            </Switch>
        )
    } else {
        routes = (
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/users" exact>
                    <Users/>
                </Route>
                <Route path="/dogs" exact>
                    <Dogs/>
                </Route>
                <Route path="/auth" exact>
                    <Auth/>
                </Route>

                <Redirect to="/auth" />
            </Switch>
        )
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                userId: userId,
                login: login,
                logout: logout
            }}
        >
            <BrowserRouter>
                <div id="wrapper" className={wrapperClassName}>
                    <Sidebar items={items}/>
                    <div id="page-content-wrapper">
                        <Navigator
                            isToggle={toggle}
                            onToggle={handleToggle}
                        />
                        {routes}
                    </div>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );

};

export default App;