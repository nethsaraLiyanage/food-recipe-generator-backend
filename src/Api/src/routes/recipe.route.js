const express = require("express");
const router = express.Router();

// Import API handlers
const {
	getRecipesByFilter,
	updateRecipesSaveStatus,
	getSavedRecipes,
	getIngredientMasterData,
	getRecipesByIngredientsFilter,
	getRecipesBySeason,
} = require("../api/recipe.api");

/**
 * @route POST /
 * @description Get recipes by filter criteria
 * @method POST
 */
router.post("/", getRecipesByFilter);

/**
 * @route PUT /updateRecipesSaveStatus
 * @description Update recipes' save status
 * @method PUT
 */
router.put("/updateRecipesSaveStatus", updateRecipesSaveStatus);

/**
 * @route GET /getSavedRecipes
 * @description Get saved recipes
 * @method GET
 */
router.get("/getSavedRecipes", getSavedRecipes);

/**
 * @route GET /getIngredientMasterData
 * @description Get ingredient master data
 * @method GET
 */
router.get("/getIngredientMasterData", getIngredientMasterData);

/**
 * @route POST /getRecipesByIngredientsFilter
 * @description Get recipes by ingredients filter
 * @method POST
 */
router.post("/getRecipesByIngredientsFilter", getRecipesByIngredientsFilter);

/**
 * @route POST /getRecipesBySeason
 * @description Get recipes by Season
 * @method POST
 */
router.post("/getRecipesBySeason", getRecipesBySeason);

module.exports = router;
