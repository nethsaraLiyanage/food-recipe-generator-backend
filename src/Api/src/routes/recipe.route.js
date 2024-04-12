const express = require("express");
const router = express.Router();

const { getRecipesByFilter } = require("../api/recipe.api");

router.post("/", getRecipesByFilter)

module.exports = router;