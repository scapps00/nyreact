var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var mongoose = require("mongoose");

var Articles = require("./models/Articles.js");

mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost");
var db = mongoose.connection;

db.on("error", function(error) {
	console.log("Mongoose Error: " + error);
});

db.once("open", function() {
	console.log("Mongoose connection successful");
});

var app = express();

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
	res.send("index.html");
});

app.post("/save", function(req, res) {
	var article = {};
	article.link = req.body.link;
	article.headline = req.body.headline;
	article.lead = req.body.lead;
	var entry = new Articles(article);
	entry.save(function(error, doc) {
		if (error) console.log(error);
	});
});

app.get("/pullArticles", function(req, res) {

		var savedArticles = [];

		Articles.find({})
		.exec(function(error, articles) {
			if (error) console.log(error);
			else {
				savedArticles = articles;
				res.send(savedArticles);
			}
		});
		// renderArticles = {};

		// for (var i = 0; i<savedArticles.length; i++) {
		// 	renderArticles += "{savedArticles[" + i + "]}";
		// }
		// console.log(renderArticles);
		

});

app.listen(3000);