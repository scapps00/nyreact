var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var bodyParser = require("body-parser");

mongoose.Promise = Promise;

var app = express();

app.use(bodyParser.urlencoded({
	extended: false
}));

mongoose.connect("mongodb://localhost:3000/");
var db = mongoose.connection;

db.on("error", function(error) {
	console.log("Mongoose Error: " + error);
});

db.once("open", function() {
	console.log("Mongoose connection successful");
});

app.post("/saveArticle", function(req, res) {
	var article = {};
	article.link = req.body.link;
	article.headline = req.body.headline;
	article.lead = req.body.lead;
	var entry = new Articles(article);
	entry.save(function(error, doc) {
		if (error) console.log(error);
	});
});

app.use(express.static(path.join(__dirname, "/public")));

app.listen(3000);