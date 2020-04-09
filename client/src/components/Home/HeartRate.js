import React from "react";
import { Link } from "react-router-dom";

import './HeartRate.css';
class HeartRate extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-11">
          <div className="content-box-header">
            <div className="panel-title">Heart Rate</div>
            <div className="panel-options">
              <Link to="/" data-rel="reload">
                <i className="glyphicon glyphicon-cog"></i>
              </Link>
              <Link to="/" id="hr-remove" data-rel="collapse">
                <i className="glyphicon glyphicon-remove"></i>
              </Link>
            </div>
          </div>
          <div className="content-box-large box-with-header">
            <div className="ecg-anime" id="hr"></div>
            <div>
              <div className="ecg-anime"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeartRate;
