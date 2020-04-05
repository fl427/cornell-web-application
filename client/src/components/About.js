import React from 'react';

// Use this page to test
// 仅做测试使用

// 测试Home Page
import HeartRate from './Home/HeartRate';
import Monitor from './Home/Monitor';
import Logs from './Home/Logs';
import Scenario from './Home/Scenario';

class About extends React.Component {
    render() {
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <HeartRate />
                    </div>
                    <div className="col-6">
                        <Scenario />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Monitor />
                    </div>
                    <div className="col-6">
                        <Logs />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default About;