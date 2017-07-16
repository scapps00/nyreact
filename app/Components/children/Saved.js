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
			savedArticles: this.props.savedArticles
		}
	},

	componentDidMount: function() {
		var url = (path.join(__dirname, "pullArticles"));
		$.ajax({
			context: this,
			url: url,
			method: "GET"
		}).done(function(results) {
			//console.log(results);
			//results = JSON.stringify(results);
			this.setState({ savedArticles: results});	
		}).fail(function(error) {
			throw error;
		});
	},

	render: function() {
		var toReturn = [];

		for (var i = 0; i< this.state.savedArticles.length; i++) {
				toReturn.push(<div className="each" key={i}><div className="headline"><a href={this.state.savedArticles[i].link}>{this.state.savedArticles[i].headline}</a></div><div className="lead">{this.state.savedArticles[i].lead}</div></div>);
		}

		return (
			<div id="saved">
				{toReturn}
			</div>
		);
	}
});

module.exports = Saved;