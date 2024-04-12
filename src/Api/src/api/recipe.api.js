const Recipe = require("../models/recipe.model");
const logger = require("../utils/logger");

const getRecipesByFilter = async (request, response) => {
	try {
		let { searchText, mealType } = request.body;

        logger.info(request.body)
		let listOfRecipeDetailDTO = [];
		let query = {};

		if (searchText) {
			query.name = { $regex: new RegExp(searchText, "i") };
		}

		if (mealType) {
			//need more info  client
		}

		let listOfRecipes = await Recipe.find(query).exec();
       
		listOfRecipes.forEach((recipe) => {
			listOfRecipeDetailDTO.push({
				name: recipe.name ?? "",
				imageUrl: recipe.imageUrl ?? "",
				rating: recipe.rating ?? "",
				proteins: recipe.proteins ?? "",
				fats: recipe.fats ?? "",
				carbohydrates: recipe.carbohydrates ?? "",
				ingredients: recipe.ingredients ?? "",
				direction: recipe.direction ?? "",
				calories: recipe.calories ?? "",
				season: recipe.season ?? "",
			});
		});

		response.json(listOfRecipeDetailDTO);
	} catch (error) {
		logger.error(error);
	}
};

module.exports = {
	getRecipesByFilter,
};
