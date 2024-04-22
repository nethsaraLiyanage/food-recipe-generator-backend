const Recipe = require("../models/recipe.model");
const logger = require("../utils/logger");
const Ingredient = require("../models/ingredient.model");
const { toRecipeDTO } = require("../utils/mapper/recipe.mapper");

const getRecipesByFilter = async (request, response) => {
	try {
		let { searchText, mealType } = request.body;

		logger.info(request.body);
		let listOfRecipeDetailDTO = [];
		let query = {};

		if (searchText) {
			query.name = { $regex: new RegExp(searchText, "i") };
		}

		if (mealType) {
			query.mealType = mealType;
		}

		let listOfRecipes = await Recipe.find(query).exec();

		listOfRecipes.forEach((recipe) => {
			listOfRecipeDetailDTO.push(toRecipeDTO(recipe));
		});

		response.json(listOfRecipeDetailDTO);
	} catch (error) {
		logger.error(error);
	}
};

const updateRecipesSaveStatus = async (request, response) => {
	try {
		let { id, saveStatus } = request.body;

		await Recipe.findByIdAndUpdate(id, {
			isSaved: saveStatus,
		});

		response.json({
			isSuccess: true,
			message: "Recipe Save Status updated Successfully",
		});
	} catch (error) {
		logger.error(error);
		response.json({
			isSuccess: false,
			message: "Error has been ocurred please try again ",
		});
	}
};

const getSavedRecipes = async (request, response) => {
	try {
		let listOfRecipeDetailDTO = [];

		let listOfRecipes = await Recipe.find({ isSaved: true }).exec();

		listOfRecipes.forEach((recipe) => {
			listOfRecipeDetailDTO.push(toRecipeDTO(recipe));
		});

		response.json(listOfRecipeDetailDTO);
	} catch (error) {
		logger.error(error);
	}
};

const getIngredientMasterData = async (request, response) => {
	try {
		let listOfIngredients = [];
		let ingredients = await Ingredient.find().exec();

		ingredients.forEach((ingredient) => {
			listOfIngredients.push({
				id: ingredient._id,
				name: ingredient.name,
			});
		});

		response.json(listOfIngredients);
	} catch (error) {
		logger.error(error);
	}
};

module.exports = {
	getRecipesByFilter,
	updateRecipesSaveStatus,
	getSavedRecipes,
	getIngredientMasterData,
};
