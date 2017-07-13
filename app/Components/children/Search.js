var React = require("react");

var Search = React.createClass({
	
	getInitialState: function() {
		return {
			search: "",
			start: "",
			end: ""
		}
	},

	change: function(event) {
		var newState = {};
		newState[event.target.name] = event.target.value;
		this.setState(newState);
	},

	submit: function(event) {
		event.preventDefault();
		this.props.setSearch(this.state.search, this.state.start, this.state.end);
		this.setState({
			search: "",
			start: "",
			end: ""
		});
	},

	render: function() {
		return (
			<div id="search">
			<form onSubmit={this.submit}>
				Topic
				<br />
				<br />
				<input
					type="text"
					name="search"
					value={this.state.search}
					onChange={this.change}
					required
				/>
				<br />
				<br />
				Start Year
				<br />
				<br />
				<input
					type="number"
					name="start"
					value={this.state.start}
					onChange={this.change}
				/>
				<br />
				<br />
				End Year
				<br />
				<br />
				<input
					type="number"
					name="end"
					value={this.state.end}
					onChange={this.change}
				/>
				<br />
				<br />
				<button
					type="submit"
				>
					Submit
				</button>
			</form>
			</div>
		);
	}

});

module.exports = Search;