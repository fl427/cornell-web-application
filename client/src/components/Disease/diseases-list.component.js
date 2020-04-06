import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Disease = props => (
    <tr>
      <td>{props.disease.name}</td>
      <td>{props.disease.description}</td>
      <td>{props.disease.duration}</td>
      <td>{props.disease.date.substring(0,10)}</td>
      <td>
        <Link to={"/diseases/edit/"+props.disease._id}>edit</Link> | <a href="#" onClick={() => { props.deleteDisease(props.disease._id) }}>delete</a>
      </td>
    </tr>
  )


export default class DiseasesList extends Component {

    constructor(props) {
        super(props);
    
        this.deleteDisease = this.deleteDisease.bind(this)
    
        this.state = {diseases: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/diseases/')
          .then(response => {
            this.setState({ diseases: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
    }

    deleteDisease(id) {
        axios.delete('http://localhost:5000/diseases/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          diseases: this.state.diseases.filter(el => el._id !== id)
        })
    }

    DiseaseList() {
        return this.state.diseases.map(currentdisease => {
          return <Disease disease={currentdisease} deleteDisease={this.deleteDisease} key={currentdisease._id}/>;
        })
    }

    render() {
        return (
            <div style={{padding: '20px'}}>
                <h3>Logged Exercises</h3>
                <li>
                    <Link to="/diseases/create">Create an new Disease</Link>
                </li>

                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.DiseaseList() }
                </tbody>
                </table>
            </div>
        )

        
    }
}