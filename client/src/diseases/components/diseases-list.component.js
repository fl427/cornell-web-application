import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from "react-router-dom";

const Disease = props => (
    <tr>
      <td>{props.disease.title}</td>
      <td>{props.disease.description}</td>
      <td>
        <NavLink to={"/diseases/edit/"+props.disease._id}>edit</NavLink> | <a href="#" onClick={() => { props.deleteDisease(props.disease._id) }}>delete</a>
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
      // const loadedDiseases = this.state.diseases.filter(disease => disease.creator === this.getUserId());
        return this.state.diseases.map(currentdisease => {
          return <Disease disease={currentdisease} deleteDisease={this.deleteDisease} key={currentdisease._id}/>;
        })
    }

    render() {
        return (
            <div style={{padding: '20px'}}>
                <h3>Logged Exercises</h3>
                <li>
                    <NavLink to="/diseases/new">Create an new Disease</NavLink>
                </li>

                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Title</th>
                    <th>Description</th>
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