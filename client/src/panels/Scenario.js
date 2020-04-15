import React from 'react';
import { Link } from 'react-router-dom';

import './Scenario.css';

import icon0 from '../common/images/icon0.jpg';
import icon1 from '../common/images/icon1.jpg';
import icon2 from '../common/images/icon2.jpg';
import icon3 from '../common/images/icon3.jpg';
import icon4 from '../common/images/icon4.jpg';
import icon5 from '../common/images/icon5.jpg';
import icon6 from '../common/images/icon6.jpg';
import icon7 from '../common/images/icon7.jpg';
import icon8 from '../common/images/icon8.jpg';

import largeIcon0 from '../common/images/large-icon0.jpg';
import largeIcon1 from '../common/images/large-icon1.jpg';
import largeIcon2 from '../common/images/large-icon2.jpg';
import largeIcon3 from '../common/images/large-icon3.jpg';
import largeIcon4 from '../common/images/large-icon4.jpg';
import largeIcon5 from '../common/images/large-icon5.jpg';
import largeIcon6 from '../common/images/large-icon6.jpg';
import largeIcon7 from '../common/images/large-icon7.jpg';
import largeIcon8 from '../common/images/large-icon8.jpg';

class Scenario extends React.Component {
    render() {
        return (
            <div>
                <div className="content-box-large">
                    <div className="panel-heading">
                        <div className="panel-title">Scenario</div>

                        <div className="panel-options">
                            <a href="#" data-rel="collapse"><i className="glyphicon glyphicon-refresh"></i></a>
                            <a id="img-cog" href="#" data-rel="reload"><i className="glyphicon glyphicon-backward"></i></a>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div id="icon-set">
                            <div>
                                <img id="icon0" className="icon-dog" src={ icon0 } alt="avatar" />
								<img id="icon1" className="icon-dog" src={ icon1 } alt="avatar" />
								<img id="icon2" className="icon-dog" src={ icon2 } alt="avatar" />
                            </div>
                            <div>
								<img id="icon3" className="icon-dog" src={ icon3 } alt="avatar" />
								<img id="icon4" className="icon-dog" src={ icon4 } alt="avatar" />
								<img id="icon5" className="icon-dog" src={ icon5 } alt="avatar" />
							</div>
                            <div>
								<img id="icon6" className="icon-dog" src={ icon6 } alt="avatar" />
								<img id="icon7" className="icon-dog" src={ icon7 } alt="avatar" />
								<img id="icon8" className="icon-dog" src={ icon8 } alt="avatar" />
							</div>
                        </div>
                        <div id="large-icon0"><img className="icon-dog" src={ largeIcon0 } alt="avatar" /></div>
                        <div id="large-icon1"><img className="icon-dog" src={ largeIcon1 } alt="avatar" /></div>
                        <div id="large-icon2"><img className="icon-dog" src={ largeIcon2 } alt="avatar" /></div>
                        <div id="large-icon3"><img className="icon-dog" src={ largeIcon3 } alt="avatar" /></div>
                        <div id="large-icon4"><img className="icon-dog" src={ largeIcon4 } alt="avatar" /></div>
                        <div id="large-icon5"><img className="icon-dog" src={ largeIcon5 } alt="avatar" /></div>
                        <div id="large-icon6"><img className="icon-dog" src={ largeIcon6 } alt="avatar" /></div>
                        <div id="large-icon7"><img className="icon-dog" src={ largeIcon7 } alt="avatar" /></div>
                        <div id="large-icon8"><img className="icon-dog" src={ largeIcon8 } alt="avatar" /></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Scenario;