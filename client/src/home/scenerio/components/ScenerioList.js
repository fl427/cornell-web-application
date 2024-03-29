import React from 'react';

import ScenerioItem from "./ScenarioItem";
import Card from "../../../shared/components/UIElements/Card";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faSync} from "@fortawesome/free-solid-svg-icons";
import icon0 from "../../../common/images/icon0.jpg";
import icon1 from "../../../common/images/icon1.jpg";
import icon2 from "../../../common/images/icon2.jpg";
import icon3 from "../../../common/images/icon3.jpg";
import icon4 from "../../../common/images/icon4.jpg";
import icon5 from "../../../common/images/icon5.jpg";
import icon6 from "../../../common/images/icon6.jpg";
import icon7 from "../../../common/images/icon7.jpg";
import icon8 from "../../../common/images/icon8.jpg";

const ScenerioList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No Scenerio found.</h2>
                </Card>
            </div>
        );
    }

    return (
        <React.Fragment>
            <div className="content-box-large" style={{marginTop:'1rem'}}>
                <div className="panel-heading">
                    <div className="panel-title">Scenario</div>

                    <div className="panel-options">
                        <Link to="/" data-rel="collapse"><FontAwesomeIcon icon={faSync} /></Link>
                        <Link to="/" id="img-cog" data-rel="reload"><FontAwesomeIcon icon={faBackward} /></Link>
                    </div>
                </div>
                <div className="panel-body">

                    <div id="icon-set">

                        {props.items.map(dog => (
                            <ScenerioItem
                                key={dog.id}
                                id={dog.id}
                                name={dog.name}
                                image={dog.image}
                            />
                        ))}

                        {/*<div>*/}
                        {/*    <img id="icon0" className="icon-dog" src={ icon0 } alt="avatar" />*/}
                        {/*    <img id="icon1" className="icon-dog" src={ icon1 } alt="avatar" />*/}
                        {/*    <img id="icon2" className="icon-dog" src={ icon2 } alt="avatar" />*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <img id="icon3" className="icon-dog" src={ icon3 } alt="avatar" />*/}
                        {/*    <img id="icon4" className="icon-dog" src={ icon4 } alt="avatar" />*/}
                        {/*    <img id="icon5" className="icon-dog" src={ icon5 } alt="avatar" />*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <img id="icon6" className="icon-dog" src={ icon6 } alt="avatar" />*/}
                        {/*    <img id="icon7" className="icon-dog" src={ icon7 } alt="avatar" />*/}
                        {/*    <img id="icon8" className="icon-dog" src={ icon8 } alt="avatar" />*/}
                        {/*</div>*/}
                    </div>

                </div>
            </div>

        </React.Fragment>
    );
};

export default ScenerioList;