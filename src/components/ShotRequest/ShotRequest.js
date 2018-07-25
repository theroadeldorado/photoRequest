import React, { Component } from 'react';
import './ShotRequest.css';
import ShotResponse from '../ShotResponse/ShotResponse';

class ShotRequest extends Component {

  render() {
    return (
      <div className="ShotRequest">
        <div className="ShotExample">
          <h2>{this.props.shot.name}</h2>
          <p>dateCreated: {this.props.shot.dateCreated}<br/>
          dueDate: {this.props.shot.dueDate}<br/>
          description: {this.props.shot.description}<br/>
          image1: {this.props.shot.image1}<br/>
          image2: {this.props.shot.image2}<br/>
          id: {this.props.shot.id}</p>
        </div>
        <ShotResponse images={this.props.shot.uploadedImages}/>
      </div>
    );
  }
}

export default ShotRequest;
