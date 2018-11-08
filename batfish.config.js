/* eslint-disable */
var path = require('path');

module.exports = () => {
  return {
    stylesheets: [path.join(__dirname, './node_modules/@mapbox/assembly/dist/assembly.min.css')]
    // Add more configuration options here ...
  };
}
