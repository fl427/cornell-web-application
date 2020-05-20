import React, {useState, useContext, useEffect, useRef} from "react";
import ReactEcharts from 'echarts-for-react';

//导入折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'


import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee, faTimes, faCog} from '@fortawesome/free-solid-svg-icons'

import Card from "../../../shared/components/UIElements/Card";
import Button from "../../../shared/components/FormElements/Button";

import {AuthContext} from '../../../shared/context/auth-context';
import {useHttpClient} from '../../../shared/hooks/http-hook';
import './HeartRate.css';
import {get} from "echarts/src/component/toolbox/featureManager";

import HR from "../components/Hr";
import Ecto from "../components/Ecto";


// @reference : https://www.echartsjs.com/examples/zh/editor.html?c=dynamic-data2
// @reference : https://github.com/hustcc/echarts-for-react/issues/98
// @reference : https://blog.csdn.net/zm_miner/article/details/89510037  -  组件共用X轴
// @reference : https://blog.csdn.net/duansamve/article/details/80188501
// @reference : https://segmentfault.com/q/1010000010905387
// @reference : https://blog.csdn.net/m0_37805167/article/details/80924647?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-4&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-4
export class HeartRate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reload: false
        };
    }

    render() {
        return (
            <div className="col-md-12" style={{marginTop: '1rem'}}>
                <div className="content-box-header">
                    <div className="panel-title">Heart Rate</div>

                    <div className="panel-options">
                        <Link to="/" data-rel="reload"><FontAwesomeIcon icon={faCog}/></Link>
                        <Link to="/" id="hr-remove" data-rel="collapse"><FontAwesomeIcon icon={faTimes}/></Link>
                    </div>
                </div>
                <div className="content-box-large box-with-header">
                    <HR />
                    <Ecto />
                </div>
            </div>
        );
    }
}

export default HeartRate;
