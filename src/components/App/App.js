import React, { Component } from 'react';
import './App.css';
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
  				'id': '000001',
          'uploadedImages': ['']
  			}
  		],
      newShot: [
  			{
          'name': '',
  				'dateCreated': '',
  				'dueDate': '',
          'description': '',
  				'image1': '',
          'image2': '',
  				'id': '',
          'uploadedImages': ['']
  			}
  		]
    };
    this.addRequest = this.addRequest.bind(this);
  }
  // addShotRequest(request){
  //   let requests = this.state.shots;
	// 	requests.push(request);
	// 	this.setState({shots: request});
  // }

  addRequest(request){
    let requests = this.state.shots;
    alert(requests);
    // requests.push(request);
    // this.setState({shots: requests});

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
