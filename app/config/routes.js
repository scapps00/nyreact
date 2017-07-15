var React = require("react");

var router = require("react-router");

var Route = router.Route;

var Router = router.Route;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var Main = require("../Components/Main.js");
var Search = require("../Components/children/Search.js");
var Saved = require("../Components/children/Saved.js");

var mongoose = require("mongoose");

var Articles = require("../../models/Articles.js");

mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost:3000");
var db = mongoose.connection;

db.on("error", function(error) {
	console.log("Mongoose Error: " + error);
});

db.once("open", function() {
	console.log("Mongoose connection successful");
});

var pullSaved = function() {

	var savedArticles = [];

	Articles.find({})
	.exec(function(error, articles) {
		if (error) console.log(error);
		else {
			savedArticles = articles;
		}
	});

	renderArticles = "";

	for (var i = 0; i<savedArticles.length; i++) {
		renderArticles += "{savedArticles[" + i + "]}";
	}

	return renderArticles;
}

module.exports = (

	<Router history={hashHistory}>

		<Route path="/" component={Main} renderArticles={pullSaved()} />

	</Router>

);