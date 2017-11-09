//------------------------------------------------------------------------------
// node.js starter application 
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// Track deployments to Bluemix
require('metrics-tracker-client').track();

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// set the port number based on the environment variable, 
// if it exists. Otherwise, use port 6006. 
var port = process.env.PORT || 6006;

// start server on the specified port and binding host
app.listen(port);
console.log("server starting on port " + port);

