import React from 'react';

const xml = `
  <XMLText class="yeah-attributes">
    regular text
    <XMLBold>
      bold text
    </XMLBold>
    another text
  </XMLText>
`;


// Some simple components
class Text extends React.Component {
  render () {
    return (
      <div className={this.props.class}>{this.props.children}</div>
    );
  }
}

class Bold extends React.Component {
  render () {
    return (
      <b>{this.props.children}</b>
    );
  }
}

const XMLNodeToReactComponentMap = {
  'XMLText': Text,
  'XMLBold': Bold
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

// root component
class XMLtoReact extends React.Component {
  render () {
    return (
      <div>
        {processChildren(Array.from(xmlDoc.childNodes))}
      </div>
    );
  }
}

export default XMLtoReact;
