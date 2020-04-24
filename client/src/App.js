// @Reference: https://startbootstrap.com/templates/simple-sidebar/
// @Reference: https://stackoverflow.com/questions/20557912/creating-a-fixed-sidebar-alongside-a-centered-bootstrap-3-grid
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Home
import Home from "./home/pages/Home";

// User
import Users from "./user/pages/Users";

// Navigation
import Sidebar from "./shared/components/Sidebar/Sidebar";
import Navigator from "./shared/components/Navigator/Navigator";

// Dog
import Dogs from "./dogs/pages/Dogs";
import NewDog from "./dogs/pages/NewDog";

class App extends React.Component {

    constructor(props) {
        super(props);

        // Bind action handlers to the current instance
        this.handleToggle = this.handleToggle.bind(this);

        // Initialise the state
        this.state = {
            isToggled: false,
        };
    }

    // Define action handlers
    handleToggle() {
        if (this.state.isToggled) {
            this.setState({ isToggled: false });
        } else {
            this.setState({ isToggled: true });
        }
    }

    render() {
        let wrapperClassName = 'd-flex'
        if (this.state.isToggled) {
            wrapperClassName += ' toggled'
        }
        return (
            <BrowserRouter>

                <div id="wrapper" className={wrapperClassName}>
                    <Sidebar/>

                    <div id="page-content-wrapper">
                        <Navigator
                            isToggle={this.state.isToggled}
                            onToggle={this.handleToggle}
                        />
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/users" exact>
                                <Users />
                            </Route>
                            <Route path="/dogs" exact>
                                <Dogs />
                            </Route>
                            <Route path="/:userId/records" exact>
                                <Users />
                            </Route>
                            <Route path="/dogs/new" exact>
                                <NewDog />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }

};

export default App;