var NYTkey = "";

var helper = {

	query: function(search, start, end) {
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += "?" + $.param({
			"api-key": NYTkey,
			"q": search,
			"begin_date": start,
			"end_date": end
		});
		$.ajax({
			url: url,
			method: "GET"
		}).done(function(result) {
			return result;
		}).fail(function(error) {
			throw error;
		});
	}

};

module.exports = helper;