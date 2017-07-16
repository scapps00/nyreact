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
		var url = path.join(__dirname, "pullArticles");
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

	delete: function(event) {
		event.preventDefault;
		$.ajax({
			context: this,
			url: path.join(__dirname, "deleteArticle", event.target.id),
			method: "POST"
		}).done(function(results) {
			this.props.updateSaved(results);
		}).fail(function(error) {
			throw error;
		});
	},

	render: function() {
		var toReturn = [<div key={"-1"} className="header">Saved Articles</div>];

		for (var i = 0; i< this.props.savedArticles.length; i++) {
				toReturn.push(<div className="each" key={i}><div className="headline"><a href={this.props.savedArticles[i].link}>{this.props.savedArticles[i].headline}</a></div><div className="lead">{this.props.savedArticles[i].lead}</div><button id={this.props.savedArticles[i]._id} className="deleteButton" onClick={this.delete}>Delete</button></div>);
		}

		return (
			<div id="saved">
				{toReturn}
			</div>
		);
	}
});

module.exports = Saved;