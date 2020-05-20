import React, { useState, useContext, useEffect, useRef } from "react";
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

const HeartRateBad = props => {
    const HrECG = useRef(null);
    const [optionHr, setOptionHr] = useState(null);
    const [optionEtco, setOptionEtco] = useState(null);
    const [time, setTime] = useState(Date.now());

    // https://github.com/hustcc/echarts-for-react/issues/98
    // https://github.com/apache/incubator-echarts/issues/6836
    // https://blog.csdn.net/m0_37805167/article/details/80924647?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-4&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-4
    // https://www.jianshu.com/p/b84776585387
    // https://blog.csdn.net/CxGxLife/article/details/102663582?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1
    // https://blog.csdn.net/weixin_30399055/article/details/97182871?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1
    useEffect(() => {
        showHR()
        showETCO()
        setOptionHr(optionHr)
    }, []);

    const showHR = () => {

        const data = [];
        const xdata = [];
        function randomData() {
            let value = Math.random() * 100;
            value = value + Math.random() * 10;
            return Math.round(value)

        }
        function XTime() {
            let time =  3000;
            let now = new Date();
            let newnow = new Date(+now.getTime() + time);
            return newnow.toLocaleString();
        }

        for (let i = 0; i < 30; i++) {
            data.push(randomData());
            xdata.push(XTime())
        }

        let optionHr = {
            title: {
                text: "HR",
                right: "10px",
                top: "40px"
            },
            grid: {
                top: 10,
                bottom: 20,
                left: 30,
                right: 80
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [
                {
                    //type:'time',
                    type:'category',
                    boundaryGap:false,
                    data:xdata, // x轴数据
                    show: false, // 不显示数据，X轴上25mm代表1秒时间
                }
            ],
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: 'Real-time Data',
                type: 'line',
                smooth:true,
                data: data // y轴数据，一般标准：每cm代表1mV
            }]
        };

        setInterval(function () {
            data.shift();
            data.push(randomData());
            xdata.shift()
            xdata.push(XTime())
            setOptionHr(optionHr)
            // HrECG.current.click();

            console.log("optionHr: ", optionHr)
        }, 3000);
        setOptionHr(optionHr)

    }


    function handleClick() {
        HrECG.current.focus();
    }

    const showETCO = () => {
        const data = [];
        const xdata = [];
        function randomData() {
            let value = Math.random() * 100;
            value = value + Math.random() * 10;
            return Math.round(value)

        }
        function XTime() {
            let time =  3000;
            let now = new Date();
            let newnow = new Date(+now.getTime() + time);
            return newnow.toLocaleString();
        }
        for (let i = 0; i < 30; i++) {
            data.push(randomData());
            xdata.push(XTime())
        }
        let optionEtco = {
            title: {
                text: "ETCO",
                right: "10px",
                top: "40px"
            },
            grid: {
                top: 10,
                bottom: 20,
                left: 30,
                right: 80
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [
                {
                    //type:'time',
                    type:'category',
                    boundaryGap:false,
                    data:xdata, // x轴数据
                    show: false, // 不显示数据，X轴上25mm代表1秒时间
                }
            ],
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: 'Real-time Data',
                type: 'line',
                smooth:true,
                data: data // y轴数据，一般标准：每cm代表1mV
            }]
        };
        setOptionEtco(optionEtco)

    }

    return (
        <React.Fragment>

            <input
                type="button"
                value="Focus the text input"
                onClick={handleClick}
            />

            <div onClick={() => {
                HrECG.current.click();
            }}>
                测试测试
            </div>
            <div className="col-md-12" style={{marginTop: '1rem'}}>
                <div className="content-box-header">
                    <div className="panel-title">Heart Rate</div>

                    <div className="panel-options">
                        <Link to="/" data-rel="reload"><FontAwesomeIcon icon={faCog}/></Link>
                        <Link to="/" id="hr-remove" data-rel="collapse"><FontAwesomeIcon icon={faTimes}/></Link>
                    </div>
                </div>
                <div className="content-box-large box-with-header">

                    {/* render echarts option.*/}
                    {optionHr && (
                        <ReactEcharts
                            ref={(e) => {this.HrECG = e}}
                            option={optionHr}
                            style={{height: '150px'}}
                        />
                    )}
                    {optionEtco && (
                        <ReactEcharts
                            option={optionEtco}
                            style={{height: '150px'}}
                        />
                    )}

                </div>
            </div>
        </React.Fragment>
    );
};

export default HeartRateBad;
