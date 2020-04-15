import React from 'react';

// Use this page to test
// 仅做测试使用

// 测试Home Page
import HeartRate from '../../panels/HeartRate';
import Monitor from '../../panels/Monitor';
import Logs from '../../panels/Logs';
import Scenario from '../../panels/Scenario';

class About extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-7">
                            <div id="panel0" className="row col-md-11">
                                <HeartRate />
                            </div>
                            <div id="panel1" className="row col-md-11">
                                <Monitor />
                            </div>
                            
                        </div>
                        <div className="col-md-4">
                            <Scenario />    
                        </div>
                        
                    </div>

                    <div className="row">
                        <div className="col-md-11">
                            <Logs />
                        </div>
                    </div>
                </div>           
            </div>
            // <div className="container-fluid">
            //     <div className="row">
            //         <div className="col-6">
            //             <HeartRate />
            //         </div>
            //         <div className="col-6">
            //             <Scenario />
            //         </div>
            //     </div>
            //     <div className="row">
            //         <div className="col-6">
            //             <Monitor />
            //         </div>
            //         <div className="col-6">
            //             <Logs />
            //         </div>
            //     </div>
                
            // </div>
            
        )
    }
}

export default About;