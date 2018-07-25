import React, { Component } from 'react';
import './NewRequest.css';

class NewRequest extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
      name: 'test',
  		dateCreated: '',
  		dueDate: '',
      description: '',
  		image1: '',
      image2: '',
  		id: '',
      uploadedImages: ['']
    }
    this.handleChange = this.handleChange.bind(this);
    this.addRequest = this.addRequest.bind(this);
  }
  handleChange(event){
    switch (event.target.id) {
      case 'name':
        this.setState({name: event.target.value});
        break;
      case 'created':
        this.setState({dateCreated: event.target.value});
        break;
      case 'due':
        this.setState({dueDate: event.target.value});
        break;
      case 'description':
        this.setState({description: event.target.value});
        break;
      case 'file1':
        this.setState({image1: event.target.value});
        break;
      case 'file2':
        this.setState({image2: event.target.value});
        break;
      case 'id':
        this.setState({id: event.target.value});
        break;
    }
  }
  addRequest(){
    const request = [
      this.state.name,
      this.state.dateCreated,
      this.state.dueDate,
      this.state.description,
      this.state.image1,
      this.state.image2,
      this.state.id,
      this.state.uploadedImages
    ];

    alert(request);
  }
  render() {
    return (
      <div className="NewRequest">
        <h2>New Image Request</h2>

        <input type="text" id="name" placeholder="Request Title" onChange={this.handleChange}/>
        <input type="text" id="created" placeholder="Date Created" onChange={this.handleChange}/>
        <input type="text" id="due" placeholder="Due Date" onChange={this.handleChange}/>
        <input type="textarea" id="description" placeholder="Description" onChange={this.handleChange}/>
        <p>Example Image</p>
        <input type="file" id="file1" onChange={this.handleChange}/>
        <input type="file" id="file2" onChange={this.handleChange}/>
        <input type="text" id="id" placeholder="ID Number" onChange={this.handleChange}/>
        <a className="button" onClick={this.addRequest}>New Image Request</a>
      </div>
    );
  }
}

export default NewRequest;
