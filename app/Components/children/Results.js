var React = require("react");
var path = require("path");

var Results = React.createClass({

	saveArticle: function(event) {
		event.preventDefault();
		var targetID = Number(event.target.id);
		$.ajax({
			context: this,
			data: {
				link: this.props.results.response.docs[targetID].web_url,
				headline: this.props.results.response.docs[targetID].headline.main,
				lead: this.props.results.response.docs[targetID].lead_paragraph
			},
			url: path.join(__dirname, "save"),
			method: "POST"
		}).done(function(results) {
			console.log(results);
			var url = path.join(__dirname, "pullArticles");
			$.ajax({
				context: this,
				url: url,
				method: "GET"
			}).done(function(results2) {
				console.log(results2);
				//console.log(results);
				//results = JSON.stringify(results);
				this.props.updateSaved(results2);	
			}).fail(function(error) {
				throw error;
			});
		}).fail(function(error) {
				throw error;
		});
	},

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
				//didn't figure out til later how to for loop this
				<div id="results">
					<div className="each">
					<div className="headline"><a href={this.props.results.response.docs[0].web_url}>{this.props.results.response.docs[0].headline.main}</a></div>
					<div className="lead">{this.props.results.response.docs[0].lead_paragraph}</div>
					<form>
						<input name="link" type="hidden" value={this.props.results.response.docs[0].web_url} />
						<input name="headline" type="hidden" value={this.props.results.response.docs[0].headline.main} />
						<input name="lead" type="hidden" value={this.props.results.response.docs[0].lead_paragraph} />
						<input id="0" type="submit" value="Submit" onClick={this.saveArticle}/>
					</form>
					</div>
					<div className="each">
					<div className="headline"><a href={this.props.results.response.docs[1].web_url}>{this.props.results.response.docs[1].headline.main}</a></div>
					<div className="lead">{this.props.results.response.docs[1].lead_paragraph}</div>
					<form>
						<input name="link" type="hidden" value={this.props.results.response.docs[1].web_url} />
						<input name="headline" type="hidden" value={this.props.results.response.docs[1].headline.main} />
						<input name="lead" type="hidden" value={this.props.results.response.docs[1].lead_paragraph} />
						<input id="1" type="submit" value="Submit" onClick={this.saveArticle} />
					</form>
					</div>
					<div className="each">
					<div className="headline"><a href={this.props.results.response.docs[2].web_url}>{this.props.results.response.docs[2].headline.main}</a></div>
					<div className="lead">{this.props.results.response.docs[2].lead_paragraph}</div>
					<form>
						<input name="link" type="hidden" value={this.props.results.response.docs[2].web_url} />
						<input name="headline" type="hidden" value={this.props.results.response.docs[2].headline.main} />
						<input name="lead" type="hidden" value={this.props.results.response.docs[2].lead_paragraph} />
						<input id="2" type="submit" value="Submit" onClick={this.saveArticle} />
					</form>
					</div>
					<div className="each">
					<div className="headline"><a href={this.props.results.response.docs[3].web_url}>{this.props.results.response.docs[3].headline.main}</a></div>
					<div className="lead">{this.props.results.response.docs[3].lead_paragraph}</div>
					<form>
						<input name="link" type="hidden" value={this.props.results.response.docs[3].web_url} />
						<input name="headline" type="hidden" value={this.props.results.response.docs[3].headline.main} />
						<input name="lead" type="hidden" value={this.props.results.response.docs[3].lead_paragraph} />
						<input id="3" type="submit" value="Submit" onClick={this.saveArticle} />
					</form>
					</div>
					<div className="each">
					<div className="headline"><a href={this.props.results.response.docs[4].web_url}>{this.props.results.response.docs[4].headline.main}</a></div>
					<div className="lead">{this.props.results.response.docs[4].lead_paragraph}</div>
					<form>
						<input name="link" type="hidden" value={this.props.results.response.docs[4].web_url} />
						<input name="headline" type="hidden" value={this.props.results.response.docs[4].headline.main} />
						<input name="lead" type="hidden" value={this.props.results.response.docs[4].lead_paragraph} />
						<input id="4" type="submit" value="Submit" onClick={this.saveArticle} />
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