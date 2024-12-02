/**
 * main Javascript file for the application
 *  this file is executed by the Node server
 */

// import the http module, which provides an HTTP server
const http = require("http");

// import the express module, which exports the express function
const express = require("express");

// invoke the express function to create an Express application
const app = express();

// create the HTTP server
const server = http.createServer(app);

// pass a path (e.g., "/") and a callback function to the get method
//  when the client makes an HTTP GET request to the specified path,
//  the callback function is executed
app.get("/", (req, res) => {
  // the req parameter references the HTTP request object, which has
  //  a number of properties
  console.log("path: ", req.path);

  // the res parameter references the HTTP response object
  res.send("Good Morning!");
});

// start the server on port 8080
server.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
