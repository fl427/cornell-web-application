import React from 'react';
import { Scatter, Chart } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import PropTypes from "prop-types";



class History extends React.Component {
    static propTypes = {
        history: PropTypes.array.isRequired,
    };



    state = {
        dataScatter: {
            labels: ['Scatter'],
            datasets: [
                {
                    borderColor: 'rgba(99,0,125, .2)',
                    backgroundColor: 'rgba(99,0,125, .5)',
                    //label: 'V(node2)',
                    data:[{x: 0, y:0}] ,

                }
            ]
        },
        optionsScatter: {
            title: {
                display: true,
                text: this.props.vital+'Changes over Past 60 Seconds'
            },
            scales: {
                xAxes: [
                    {
                        type: 'linear',
                        position: 'bottom',
                        ticks: {
                            userCallback: function(tick) {
                                return tick.toString()+" s";
                            }
                        },
                        scaleLabel: {
                            labelString: 'Time',
                            display: true
                        }
                    }
                ],
                yAxes: [
                    {
                        type: 'linear',
                        ticks: {
                            max:200,
                            min:0,
                            userCallback: function(tick) {
                                return tick.toString();
                            }
                        },
                        scaleLabel: {
                            labelString: '',
                            display: false
                        }
                    }
                ]
            }
        }
    };


    componentWillReceiveProps(nextProps) {

        let tempData = {
            labels: ['Scatter'],
            datasets: [
                {
                    borderColor: 'rgba(99,0,125, .2)',
                    backgroundColor: 'rgba(99,0,125, .5)',
                    //label: 'V(node2)',
                    data:[{x: 0, y:0}] ,
                }
            ]
        };
        let temp = [];
        let data = nextProps.history;

        const length = data.length;
        for(let i=0; i<length; i++){
            temp.push({x: i,y: data[i]});
        }
        tempData["datasets"][0]["data"] = temp;
        this.setState({dataScatter: tempData});




    }

    render() {
        return (
            <MDBContainer>
                <Scatter
                    data={this.state.dataScatter}
                    options={this.state.optionsScatter}
                />
            </MDBContainer>
        );
    }
}

export default History;