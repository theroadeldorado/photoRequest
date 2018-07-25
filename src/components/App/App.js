import React, { Component } from 'react';
import './App.css';
import ShotRequestList from '../ShotRequestList/ShotRequestList';

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
          'uploadedImages': ['https://feldmarwatch.com/wp-content/uploads/2018/05/slide-ulyssee-nardin.jpg','https://feldmarwatch.com/wp-content/uploads/2018/06/home-slider-bom-june-2018-mockup.jpg']
  			}
  		]
    };
  }
    
  render() {
    return (
      <div className="App">
        <h1>Social Image Requests</h1>
        <ShotRequestList
          shots={this.state.shots}
        />
      </div>
    );
  }
}

export default App;
