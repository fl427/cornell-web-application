// @Reference: https://startbootstrap.com/templates/simple-sidebar/
// @Reference: https://stackoverflow.com/questions/20557912/creating-a-fixed-sidebar-alongside-a-centered-bootstrap-3-grid
import React from "react";
import { BrowserRouter} from "react-router-dom";

// Navigation
import Sidebar from "./shared/components/Sidebar/Sidebar";
import Navigator from "./shared/components/Navigator/Navigator";

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
                        <div className="container-fluid">
                            <h1 className="mt-4">Simple Sidebar</h1>
                            <p>The starting state of the menu will appear collapsed on smaller screens, and will appear
                                non-collapsed on larger screens. When toggled using the button below, the menu will
                                change.</p>
                            <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top
                                navbar is optional, and just for demonstration. Just create an element with
                                the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }

};

export default App;