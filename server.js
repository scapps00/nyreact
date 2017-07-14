var express = require("express");
var mongoose = require("mongoose");
var path = require("path");

mongoose.Promise = Promise;

var app = express();

mongoose.connect("mongodb://localhost/");
var db = mongoose.connection;

db.on("error", function(error) {
	console.log("Mongoose Error: " + error);
});

db.once("open", function() {
	console.log("Mongoose connection successful");
});

app.use(express.static(path.join(__dirname, "/public")));

app.listen(27017);