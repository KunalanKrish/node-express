const soapRequest = require('easy-soap-request');
const fs = require('fs');

const getSoapResponse = async () => {
  const url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php';
  const sampleHeaders = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
  };
  const xml = fs.readFileSync('test/zip-code-envelope.xml', 'utf-8');
  const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml, timeout: 1000 }); // Optional timeout parameter(milliseconds)
  const { headers, body, statusCode } = response;
  console.log(headers);
  console.log(body);
  console.log(statusCode);
};

module.exports = {
  getSoapResponse
};
