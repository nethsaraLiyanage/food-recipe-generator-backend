const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");

const recipeSchema = new Schema({
	name: {
		type: String,
		required: true,
	},

	imageUrl: {
		type: String,
		required: false,
	},

	rating: {
		type: Number,
		required: false,
	},

	proteins: {
		type: String,
		required: false,
	},

	fats: {
		type: String,
		required: false,
	},

	carbohydrates: {
		type: String,
		required: false,
	},

	ingredients: {
		type: String,
		required: false,
	},

	direction: {
		type: String,
		required: false,
	},

	calories: {
		type: String,
		required: false,
	},

	season: {
		type: String,
		required: false,
	},
});

module.exports = User = mongoose.model("Recipe", recipeSchema);
