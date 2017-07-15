var React = require("react");
var path = require("path");


var Saved = React.createClass({

	// getInitialState: function() {
	// 	var url = (path.join(__dirname, "pullArticles"));
	// 	$.ajax({
	// 		url: url,
	// 		method: "POST"
	// 	}).done(function(results) {
	// 		this.setState({ savedArticles: results });	
	// 	}).fail(function(error) {
	// 		throw error;
	// 		return null;
	// 	});
	// 	return null;
	// },

	getInitialState: function() {
		return { 
			savedArticles: ""}
	},

	componentDidMount: function() {
		var url = (path.join(__dirname, "pullArticles"));
		$.ajax({
			context: this,
			url: url,
			method: "POST"
		}).done(function(results) {
			console.log(results);
			results = JSON.stringify(results);
			this.setState({ savedArticles: results});	
		}).fail(function(error) {
			throw error;
		});
	},

	render: function() {
		return (
			<div>
			{this.state.savedArticles}
			</div>
		);
	}
});

module.exports = Saved;