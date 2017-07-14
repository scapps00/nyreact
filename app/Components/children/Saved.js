var helper = require("./../utils/helper.js");

var renderArticles = helper.renderArticles;

var Saved = React.createClass({

	render: function() {
		return (
			<div>
			{renderArticles}
			</div>
		);
	}
});

module.exports = Saved;