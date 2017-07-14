var React = require("react");

var Results = React.createClass({


	render: function() {
		if (this.props.results !== "") {
			// var articles = [];

			// for (var i = 0; i<5; i++) {
			// 	articles.push(
			// 		<div className="each">
			// 		<div className="headline"><a href={this.props.results.response.docs[i].web_url}>{this.props.results.response.docs[i].headline.main}</a></div>
			// 		<br />
			// 		<div className="sub">{this.props.results.response.docs[i].headline.sub}</div>
			// 		<br />
			// 		<br />
			// 		</div>
			// 	);
			// }
			
			return (
				<div id="results">
					<div className="each">
					<div className="headline"><a href={this.props.results.response.docs[0].web_url}>{this.props.results.response.docs[0].headline.main}</a></div>
					<div className="lead">{this.props.results.response.docs[0].lead_paragraph}</div>
					<form action="/saveArticle" method="POST">
						<input name="link" type="hidden" value={this.props.results.response.docs[0].web_url} />
						<input name="headline" type="hidden" value={this.props.results.response.docs[0].headline.main} />
						<input name="lead" type="hidden" value={this.props.results.response.docs[0].lead_paragraph} />
						<input type="submit" value="Submit" />
					</form>
					</div>
					<div className="each">
					<div className="headline"><a href={this.props.results.response.docs[1].web_url}>{this.props.results.response.docs[1].headline.main}</a></div>
					<div className="lead">{this.props.results.response.docs[1].lead_paragraph}</div>
					<form action="/saveArticle" method="POST">
						<input name="link" type="hidden" value={this.props.results.response.docs[1].web_url} />
						<input name="headline" type="hidden" value={this.props.results.response.docs[1].headline.main} />
						<input name="lead" type="hidden" value={this.props.results.response.docs[1].lead_paragraph} />
						<input type="submit" value="Submit" />
					</form>
					</div>
					<div className="each">
					<div className="headline"><a href={this.props.results.response.docs[2].web_url}>{this.props.results.response.docs[2].headline.main}</a></div>
					<div className="lead">{this.props.results.response.docs[2].lead_paragraph}</div>
					<form action="/saveArticle" method="POST">
						<input name="link" type="hidden" value={this.props.results.response.docs[2].web_url} />
						<input name="headline" type="hidden" value={this.props.results.response.docs[2].headline.main} />
						<input name="lead" type="hidden" value={this.props.results.response.docs[2].lead_paragraph} />
						<input type="submit" value="Submit" />
					</form>
					</div>
					<div className="each">
					<div className="headline"><a href={this.props.results.response.docs[3].web_url}>{this.props.results.response.docs[3].headline.main}</a></div>
					<div className="lead">{this.props.results.response.docs[3].lead_paragraph}</div>
					<form action="/saveArticle" method="POST">
						<input name="link" type="hidden" value={this.props.results.response.docs[3].web_url} />
						<input name="headline" type="hidden" value={this.props.results.response.docs[3].headline.main} />
						<input name="lead" type="hidden" value={this.props.results.response.docs[3].lead_paragraph} />
						<input type="submit" value="Submit" />
					</form>
					</div>
					<div className="each">
					<div className="headline"><a href={this.props.results.response.docs[4].web_url}>{this.props.results.response.docs[4].headline.main}</a></div>
					<div className="lead">{this.props.results.response.docs[4].lead_paragraph}</div>
					<form action="/saveArticle" method="POST">
						<input name="link" type="hidden" value={this.props.results.response.docs[4].web_url} />
						<input name="headline" type="hidden" value={this.props.results.response.docs[4].headline.main} />
						<input name="lead" type="hidden" value={this.props.results.response.docs[4].lead_paragraph} />
						<input type="submit" value="Submit" />
					</form>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}

});

module.exports = Results;