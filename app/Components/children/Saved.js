var React = require("react");
var mongoose = require("mongoose");

var savedArticles = [];

Articles.find({})
.exec(function(error, articles) {
	if (error) console.log(error);
	else {
		savedArticles = articles;
	}
});

var Saved = React.createClass({
	render: function() {
		return (
			console.log(savedArticles);
		);
	}
});