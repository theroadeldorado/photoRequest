import React, { Component } from 'react';
import './ShotResponse.css';

class ShotResponse extends Component {
  constructor(props){
		super(props);
    this.state = {
			newImage: '',
      currentImages: this.props.images
		};
    this.addPhoto = this.addPhoto.bind(this);
		this.handleAddPhoto = this.handleAddPhoto.bind(this);
	}
  handleAddPhoto(event){
    this.setState({newImage: event.target.value});
	}
  addPhoto(){
    this.state.currentImages.push(this.state.newImage);
    this.setState({newImage: ''});
	}

  render() {
    return (
      <div className="ShotUploads">
        <h2>Shot Response</h2>
        {this.state.currentImages.map(imageUrl =>
          <img src={imageUrl}/>
        )}
        <br/>
        <input type="file" onChange={this.handleAddPhoto}/>
        <a className="button" onClick={this.addPhoto}>UPLOAD</a>
      </div>
    );
  }
}

export default ShotResponse;
