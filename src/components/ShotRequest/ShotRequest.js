import React, { Component } from 'react';
import './ShotRequest.css';

class ShotRequest extends Component {
  constructor(props){
		super(props);
    this.state = {
			newImage: ''
		};
    this.addPhoto = this.addPhoto.bind(this);
		this.handleAddPhoto = this.handleAddPhoto.bind(this);
	}
  addPhoto(){
    alert(this.state.newImage);
    this.props.shot.uploadedImages.push(this.state.newImage);
	}
	handleAddPhoto(event){
    this.setState({newImage: event.target.value});
	}
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
        <div className="ShotUploads">
          {this.props.shot.uploadedImages.map(imageUrl =>
            <img src={imageUrl}/>
          )}
          <br/>
          <input type="file" onChange={this.handleAddPhoto}/>
          <a className="button" onClick={this.addPhoto} >UPLOAD</a>
        </div>
      </div>
    );
  }
}

export default ShotRequest;
