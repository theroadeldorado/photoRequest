var XMLParser = require('react-xml-parser');
var xmlText = "<requests><request><id>0000001</id><name>First Request</name><dateCreated>7-26-18</dateCreated><dueDate>8-26-18</dueDate><description>This is an example request from the xml doc.</description><exampleImage1>example1.png</exampleImage1><exampleImage2>example1.png</exampleImage2><uploadedImage1></uploadedImage1><uploadedImage2></uploadedImage2><uploadedImage3></uploadedImage3><uploadedImage4></uploadedImage4><uploadedImage5></uploadedImage5></request><request><id>0000002</id><name>Second Request</name><dateCreated>7-26-18</dateCreated><dueDate>8-26-18</dueDate><description>This is an example request from the xml doc.</description><exampleImage1>example1.png</exampleImage1><exampleImage2>example1.png</exampleImage2><uploadedImage1></uploadedImage1><uploadedImage2></uploadedImage2><uploadedImage3></uploadedImage3><uploadedImage4></uploadedImage4><uploadedImage5></uploadedImage5></request></requests>";
var xml = new XMLParser().parseFromString(xmlText);    // Assume xmlText contains the example XML

const FromXML = xml.getElementsByTagName('request');

getRequests(FromXML){
  var x, i, xmlDoc, txt;
  for (i = 0; i< x.length; i++) {
    txt += x[i].childNodes[0].nodeValue + "<br>";
  }
}



export default FromXML;
