var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticlesSchema = new Schema({
	link: {
		type: String,
		required: true,
		unique: true
	},
	headline: {
		type: String,
		required: true
	},
	lead: {
		type: String,
		required: true
	}//,
	// notes: [{
	// 	type: Schema.Types.ObjectId,
	// 	ref: "Notes"
	// }]
});

var Articles = mongoose.model("Articles", ArticlesSchema);

module.exports = Articles;