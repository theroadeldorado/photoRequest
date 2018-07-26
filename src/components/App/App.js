import React, { Component } from 'react';
import './App.css';
import FromXML from '../../xml';
import ShotRequestList from '../ShotRequestList/ShotRequestList';
import NewRequest from '../NewRequest/NewRequest'

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
      shots: [
  			{
          'name': 'Request Name',
  				'dateCreated': 'Jan 1, 2018',
  				'dueDate': 'Jan 31, 2018',
          'description': 'description',
  				'image1': 'Image 1',
          'image2': 'Image 2',
  				'id': Date.now(),
          'uploadedImages': ['']
  			}
  		]
    };
    this.addRequest = this.addRequest.bind(this);
  }

  addRequest(request){
    let requests = this.state.shots;
    requests.push(request);
    this.setState({shots: requests});
    console.log(FromXML);
  }
  render() {
    return (
      <div className="App">
        <h1>Social Image Requests</h1>
        <ShotRequestList
          shots={this.state.shots}
        />
        <NewRequest newRequest={this.state.newShot} onAdd={this.addRequest}/>
      </div>
    );
  }
}

export default App;
