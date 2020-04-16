import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



export default class CreateDisease extends Component {
    

    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            description: '',
            date: new Date()
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const disease = {
            title: this.state.title,
            description: this.state.description,
        }

        console.log(disease);

        axios.post('http://localhost:5000/diseases/create', disease)
            .then(res => {
                console.log(res.data);
                window.location = '/';
            });

        
    }

    render() {
        return (
            <div style={{'margin':'20px'}} >
                <h3>Create New Disease Log</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Title: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                        />
                    </div>
                    

                    <div className="form-group">
                        <input type="submit" value="Create Disease Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}