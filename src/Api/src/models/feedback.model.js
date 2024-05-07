const mongoose = require("mongoose");
const { Schema } = mongoose;

const feedBackSchema = new Schema({
	statisfaction: {
		type: String,
		required: false,
	},

	isThereAreAnyLeftOvers: {
		type: Boolean,
		required: false,
	},

	createdUserId: {
		type: String,
		required: false,
	},

	recipeId: {
		type: String,
		required: false,
	},
});

module.exports = FeedBack = mongoose.model("feedback", feedBackSchema);
