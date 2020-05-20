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
import {get} from "echarts/src/component/toolbox/featureManager";

var data = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;

export class HR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reload: false
        };
    }

    randomData = () => {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
            name: now.toString(),
            value: [
                [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                Math.round(value)
            ]
        };
    }

    handleResize = () => {
        this.setState({
            reload: true,
        }, () => {
            this.setState({reload: false});
        });
    }


    componentDidMount() {
        for (var i = 0; i < 1000; i++) {
            data.push(this.randomData());
        }
        let hrChart_instance = this.hrChart.getEchartsInstance()
        this.timer = setInterval(() => {
            for (var i = 0; i < 5; i++) {
                data.shift();
                data.push(this.randomData());
            }
            hrChart_instance.setOption({
                series: [{
                    data: data
                }]
            });
            this.handleResize()
        }, 1000);
    }

    componentWillUnmount() {
    }

    getOption = () => {
        let option = {
            title: {
                text: 'HR',
                right: '20px',
                top: '40px'
            },
            grid: {
                top: '10px',
                left: '40px',
                bottom: '20px',
                right: '60px'
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                },
                // show: false, // 不显示数据，X轴上25mm代表1秒时间
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: 'Real-Time Data',
                type: 'line',
                smooth: true,
                showSymbol: false,
                hoverAnimation: false,
                data: data
            }]
        };
        return option;
    }


    render() {
        return (

            <ReactEcharts
                ref={(e) => {
                    this.hrChart = e;
                }}
                option={this.getOption()}
                style={{height: '150px'}}
            />
        );
    }
}

export default HR;
