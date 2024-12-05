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

// add middleware to handle JSON in HTTP request bodies (used with
//  POST commands)
app.use(express.json());

// set the template engine to EJS, which generates HTML with embedded
//  JavaScript
app.set("view engine", "ejs");

// load assets
app.use("/css", express.static("assets/css"));
app.use("/img", express.static("assets/img"));
app.use("/js", express.static("assets/js"));

// create the HTTP server
const server = http.createServer(app);

// to keep this file manageable, we will move the routes to a separate file
//  the exported router object is an example of middleware
app.use("/", require("./server/routes/router"));

// start the server on port 8080
server.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
