
var React = require("react");

var Link = require("react-router").Link;

var path = require("path");

var Search = require("./children/Search.js");

var Results = require("./children/Results.js");

var Saved = require("./children/Saved.js");

var helper = require("./utils/helper.js")

var trigger = true;

var NYTkey = helper.NYTkey;

var Main = React.createClass({

	getInitialState: function() {
		return { 
			search: "",
			start: "",
			end: "",
			results: "",
			saved: []
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
			this.setState({ saved: results});	
		}).fail(function(error) {
			throw error;
		});
	},

	componentDidUpdate: function(prevProps, prevState) {
		if (trigger === false) {
			trigger = true;
			var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
			url += "?" + $.param({
				"api-key": NYTkey,
				"q": this.state.search,
				"begin_date": this.state.start,
				"end_date": this.state.end
			});
			$.ajax({
				context: this,
				url: url,
				method: "GET"
			}).done(function(results) {
				this.setState({ results: results });
			}).fail(function(error) {
				throw error;
			});
		}
	},
		// console.log(this.query(this.state.search, this.state.start, this.state.end));
		// console.log(results);
		// this.setState({ results: results });

	setSearch: function(search, start, end) {
		this.setState({
			search: search,
			start: start + "0101"
		});
		trigger = false;
		this.setState({
			end: end + "1231"
		});
	},

	updateSaved: function(data) {
		this.setState({ saved: data});
	},

  	render: function() {

  		return (
	  		<div>
	  		<br />
	  		<br />
	  		<br />
	  		<Search setSearch={this.setSearch} />
	  		<br />
	  		<br />
	  		<br />
	  		<Results results={this.state.results} updateSaved={this.updateSaved} />
	  		<br />
	  		<Saved savedArticles={this.state.saved} updateSaved={this.updateSaved} /> 
	  		</div>

	    );
	  }
});


module.exports = Main;
