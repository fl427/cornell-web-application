import React from 'react';
import { Line } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import PropTypes from "prop-types";

const emptyLabel = new Array(60).fill("");

class History2 extends React.Component {
    static propTypes = {
        vital: PropTypes.string.isRequired,
        history: PropTypes.array.isRequired,
    };


    state = {
        dataLine: {
            labels: emptyLabel,
            datasets: [
                {
                    label: "Vital",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: []
                }
            ]
        }
    };


    componentWillReceiveProps(nextProps) {

        let tempData = {
            labels: emptyLabel,
            datasets: [
                {
                    label: "",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: []
                }
            ]
        };
        tempData["datasets"][0]["label"] = `History of ${this.props.vital} over Past 5 Minutes`;
        tempData["datasets"][0]["data"] = nextProps.history;
        this.setState({dataLine: tempData});


    }



    render() {
        return (
            <MDBContainer>

                <Line data={this.state.dataLine} options={{ responsive: true }} />
            </MDBContainer>
        );
    }
}

export default History2;