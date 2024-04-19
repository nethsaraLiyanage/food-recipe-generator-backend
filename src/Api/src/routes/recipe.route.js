const express = require("express");
const router = express.Router();

const {
	getRecipesByFilter,
	updateRecipesSaveStatus,
	getSavedRecipes,
	getIngredientMasterData,
} = require("../api/recipe.api");

router.post("/", getRecipesByFilter);
router.put("/updateRecipesSaveStatus", updateRecipesSaveStatus);
router.get("/getSavedRecipes", getSavedRecipes);
router.get("/getIngredientMasterData", getIngredientMasterData);

module.exports = router;
