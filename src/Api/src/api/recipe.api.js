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

		// Construct the query based on search criteria
		if (searchText) {
			query.name = { $regex: new RegExp(searchText, "i") };
		}

		if (mealType) {
			query.mealType = mealType;
		}

		// Retrieve recipes based on the constructed query
		let listOfRecipes = await Recipe.find(query).exec();

		// Convert each recipe to DTO format
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

const getRecipesByIngredientsFilter = async (request, response) => {
	try {
		const { ingredients } = request.body;
		let query = {};
		let listOfRecipeDetailDTO = [];

		let validatedIngredients = ingredients.filter((x) => x != "");

		if (validatedIngredients && validatedIngredients.length > 0) {
			const listOfIngredients = validatedIngredients.map((ingredient) => ingredient.toLowerCase().trim());
			const ingredientsFilter = listOfIngredients.join("|");
			query.ingredients = { $regex: new RegExp(ingredientsFilter, "i") };
		}

		const listOfRecipes = await Recipe.find(query).exec();

		listOfRecipes.forEach((recipe) => {
			listOfRecipeDetailDTO.push(toRecipeDTO(recipe));
		});

		response.json(listOfRecipeDetailDTO);
	} catch (error) {
		logger.error(error);
	}
};

const getRecipesBySeason = async (request, response) => {
	try {
		let { season } = request.body;

		let listOfRecipeDetailDTO = [];

		let listOfYearAroundRecipes = await Recipe.find({ season: "Year-round" }).exec();

		let listOfRecipes = await Recipe.find({ season: season }).exec();

		logger.info(listOfRecipes);

		listOfYearAroundRecipes.forEach((recipe) => {
			listOfRecipeDetailDTO.push(toRecipeDTO(recipe));
		});

		listOfRecipes.forEach((recipe) => {
			listOfRecipeDetailDTO.push(toRecipeDTO(recipe));
		});

		response.json(listOfRecipeDetailDTO);
	} catch (error) {
		logger.error(error);
		response.json(error);
	}
};

module.exports = {
	getRecipesByFilter,
	updateRecipesSaveStatus,
	getSavedRecipes,
	getIngredientMasterData,
	getRecipesByIngredientsFilter,
	getRecipesBySeason,
};
