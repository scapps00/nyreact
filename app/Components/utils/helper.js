var React = require("react");
var mongoose = require("mongoose");

var Articles = require("./../../../models/Articles.js");

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

var helper = {

	renderArticles: renderArticles
	
}

module.exports = helper;