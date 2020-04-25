import React from 'react';
import { Link } from 'react-router-dom';

import './Monitor.css';
class Monitor extends React.Component {
  render() {
    return (
      <div>
        <div className="content-box-header">
          <div className="panel-title">Monitor 1</div>

          <div className="panel-options">
            <a id="setting-btn" data-rel="reload">
              <i className="glyphicon glyphicon-cog"></i>
            </a>
            <a id="monitor-remove" href="#" data-rel="collapse">
              <i className="glyphicon glyphicon-remove"></i>
            </a>
          </div>
        </div>

        <div className="content-box-large box-with-header">
          <div id="panel-etco2" className="row">
            <table className="panel-item">
              <tbody>
                <td>
                  <div className="panel-item-title">
                    <strong>
                      ETCO<sub>2</sub>
                    </strong>
                  </div>
                </td>
                <td>
                  <div id="text-bar1" className="progressbar-frame">
                    <div id="progress-bar1" className="progress-bar">
                      34mmHg
                    </div>
                  </div>
                </td>
                <td className="panel-setting">
                  <td>
                    <div className="input-group form setting-select">
                      <input
                        id="etco2-value"
                        type="text"
                        className="panel-input"
                        placeholder="34mmHg"
                      />
                      <input
                        id="etco2-period"
                        type="text"
                        className="panel-input"
                        placeholder="60s"
                      />
                      <span className="input-group-btn">
                        <button
                          id="etco2-set"
                          className="btn btn-primary panel-btn"
                          type="button"
                        >
                          set
                        </button>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="panel-options setting-select">
                      <a id="etco2-remove" data-rel="collapse">
                        <i className="glyphicon glyphicon-remove submenu-item"></i>
                      </a>
                    </div>
                  </td>
                </td>
              </tbody>
            </table>
          </div>

          <div id="panel-awrr" className="row">
            <table className="panel-item">
              <tbody>
                <td>
                  <div className="panel-item-title">
                    <strong>awRR</strong>
                  </div>
                </td>

                <td>
                  <div id="text-bar2" className="progressbar-frame">
                    <div id="progress-bar2" className="progress-bar" value="10">
                      20bpm
                    </div>
                  </div>
                </td>

                <td className="panel-setting">
                  <td>
                    <div className="input-group form setting-select">
                      <input
                        id="awrr-value"
                        type="text"
                        className="panel-input"
                        placeholder="20bpm"
                      />
                      <input
                        id="awrr-period"
                        type="text"
                        className="panel-input"
                        placeholder="60s"
                      />
                      <span className="input-group-btn">
                        <button
                          id="awrr-set"
                          className="btn btn-primary panel-btn"
                          type="button"
                        >
                          set
                        </button>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="panel-options setting-select">
                      <a id="awrr-remove" data-rel="collapse">
                        <i className="glyphicon glyphicon-remove submenu-item"></i>
                      </a>
                    </div>
                  </td>
                </td>
              </tbody>
            </table>
          </div>

          <div id="panel-spo2" className="row">
            <table className="panel-item">
              <tbody>
                <td>
                  <div className="panel-item-title">
                    <strong>
                      SpO<sub>2</sub>
                    </strong>
                  </div>
                </td>

                <td>
                  <div id="text-bar3" className="progressbar-frame">
                    <div id="progress-bar3" className="progress-bar">
                      95%
                    </div>
                  </div>
                </td>

                <td className="panel-setting">
                  <td>
                    <div className="input-group form setting-select">
                      <input
                        id="spo2-value"
                        type="text"
                        className="panel-input"
                        placeholder="95%"
                      />
                      <input
                        id="spo2-period"
                        type="text"
                        className="panel-input"
                        placeholder="60s"
                      />

                      <span className="input-group-btn">
                        <button
                          id="spo2-set"
                          className="btn btn-primary panel-btn"
                          type="button"
                        >
                          set
                        </button>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="panel-options setting-select">
                      <a id="spo2-remove" data-rel="collapse">
                        <i className="glyphicon glyphicon-remove submenu-item"></i>
                      </a>
                    </div>
                  </td>
                </td>
              </tbody>
            </table>
          </div>

          <div id="panel-temp" className="row">
            <table className="panel-item">
              <tbody>
                <td>
                  <div className="panel-item-title">
                    <strong>Temp</strong>
                  </div>
                </td>

                <td>
                  <div id="text-bar4" className="progressbar-frame">
                    <div id="progress-bar4" className="progress-bar">
                      xxx
                    </div>
                  </div>
                </td>

                <td className="panel-setting">
                  <td>
                    <div className="input-group form setting-select">
                      <input
                        id="temp-value"
                        type="text"
                        className="panel-input"
                        placeholder="xxx"
                      />
                      <input
                        id="temp-period"
                        type="text"
                        className="panel-input"
                        placeholder="60s"
                      />

                      <span className="input-group-btn">
                        <button
                          id="temp-set"
                          className="btn btn-primary panel-btn"
                          type="button"
                        >
                          set
                        </button>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="panel-options setting-select">
                      <a id="temp-remove" data-rel="collapse">
                        <i className="glyphicon glyphicon-remove submenu-item"></i>
                      </a>
                    </div>
                  </td>
                </td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Monitor;
