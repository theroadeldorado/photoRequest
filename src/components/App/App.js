import React, { Component } from 'react';
import './App.css';
import ShotRequestList from '../ShotRequestList/ShotRequestList';
import NewRequest from '../NewRequest/NewRequest'

var xmlText = "<requests><request><id>0000001</id><name>First Request</name><dateCreated>7-26-18</dateCreated><dueDate>8-26-18</dueDate><description>This is an example request from the xml doc.</description><exampleImage1>example1.png</exampleImage1><exampleImage2>example1.png</exampleImage2><uploadedImage1></uploadedImage1><uploadedImage2></uploadedImage2><uploadedImage3></uploadedImage3><uploadedImage4></uploadedImage4><uploadedImage5></uploadedImage5></request><request><id>0000002</id><name>Second Request</name><dateCreated>7-26-18</dateCreated><dueDate>8-26-18</dueDate><description>This is an example request from the xml doc.</description><exampleImage1>example1.png</exampleImage1><exampleImage2>example1.png</exampleImage2><uploadedImage1></uploadedImage1><uploadedImage2></uploadedImage2><uploadedImage3></uploadedImage3><uploadedImage4></uploadedImage4><uploadedImage5></uploadedImage5></request></requests>";

const xml = `
  <request>
    <id>0000001</id>
    <name>First Request</name>
    <dateCreated>7-26-18</dateCreated>
    <dueDate>8-26-18</dueDate>
  </request>
`;

// Some simple components
class xmlRequest extends React.Component {
  render () {
    return (
      <div className={this.props.class}>{this.props.children}</div>
    );
  }
}
class xmlName extends React.Component {
  render () {
    return (
      <div className={this.props.class}>{this.props.children}</div>
    );
  }
}
class xmlId extends React.Component {
  render () {
    return (
      <b>{this.props.children}</b>
    );
  }
}
class xmlDateCreated extends React.Component {
  render () {
    return (
      <b>{this.props.children}</b>
    );
  }
}
class xmlDueDate extends React.Component {
  render () {
    return (
      <b>{this.props.children}</b>
    );
  }
}
const XMLNodeToReactComponentMap = {
  'request': xmlRequest,
  'id': xmlId,
  'name':xmlName,
  'dateCreated': xmlDateCreated,
  'dueDate': xmlDueDate
};
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xml, 'text/xml');
function processChildren (children) {
  return Array.from(children.length ? children : []).map(
    (node, i) => {
      // return if text node
      if (node.nodeType === 3) return node.nodeValue;
      // collect all attributes
      let attributes = Array.from(node.attributes).reduce((attrs, attr) => {
        attrs[attr.name] = attr.value;
        return attrs;
      }, {});

      // create React component
      return React.createElement(XMLNodeToReactComponentMap[node.nodeName], {
        ...attributes,
        key: i
      }, processChildren(node.childNodes));
    });
}


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
    console.log('XMLtoReact');
  }
  render() {
    return (
      <div className="App">
        <h1>Social Image Requests</h1>
        <ShotRequestList
          shots={this.state.shots}
        />
        <div>
          {processChildren(Array.from(xmlDoc.childNodes))}
        </div>
        <NewRequest newRequest={this.state.newShot} onAdd={this.addRequest}/>
      </div>
    );
  }
}

export default App;
