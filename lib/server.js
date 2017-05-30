'use strict';

// load the http module, comes with node
var http = require('http'),
    logger = require('./logger');

logger.level = process.env.NODE_ENV === 'development' ? 'debug' : 'info';

// create a server and give it a function to use
// to respond to requests
var server = http.createServer(function (request, response) {
    // var name = "TEST";
    logger.debug(request.method + ' request for "' + request.url + '"');
     if (request.url=="/") {
         response.end("Hello world!");

     }else{
         var name = request.url.replace("/", "");
         response.end("Hello, " + name + "!");
     }
});

// allow other modules to use the server
module.exports = server;
