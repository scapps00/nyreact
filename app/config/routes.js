var React = require("react");

var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var Main = require("../Components/Main.js");

// var pullSaved = function() {

// 	var savedArticles = [];

// 	Articles.find({})
// 	.exec(function(error, articles) {
// 		if (error) console.log(error);
// 		else {
// 			savedArticles = articles;
// 		}
// 	});

// 	renderArticles = "";

// 	for (var i = 0; i<savedArticles.length; i++) {
// 		renderArticles += "{savedArticles[" + i + "]}";
// 	}

// 	return renderArticles;
// }

module.exports = (

	<Router history={hashHistory}>

		<Route path="/" component={Main} />

	</Router>

);