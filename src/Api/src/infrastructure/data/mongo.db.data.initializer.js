const Ingredient = require("../../models/ingredient.model");
const logger = require("../../utils/logger");
const mongoose = require("mongoose");

const seedDatabase = async () => {
	try {
		await seedIngredient();
	} catch (error) {
		logger.error("Error seeding data:", error);
	} finally {
		//mongoose.disconnect();
	}
};

const seedIngredient = async () => {
	try {
		const ingredients = [
			{ name: "Chicken" },
			{ name: "Onions" },
			{ name: "Tomatoes" },
			{ name: "Curry powder" },
			{ name: "Coconut milk" },
			{ name: "Coconut milk " },
			{ name: "Green chilies" },
			{ name: "Garlic" },
			{ name: "Ginger" },
			{ name: "Eggs" },
			{ name: "Fish" },
			{ name: "Rice" },
			{ name: "Cardamom pods" },
			{ name: "Grated coconut" },
			{ name: "Eggplant" },
			{ name: "Beetroot" },
			{ name: "Dal" },
			{ name: "Yeast" },
			{ name: "Wheat flour" },
			{ name: "Semolina flour" },
			{ name: "Sugar" },
			{ name: "Milk" },
			{ name: "Lime juice" },
			{ name: "Green mangoes" },
			{ name: "Spinach" },
			{ name: "Jaggery" },
			{ name: "Crabs" },
		];
		if ((await Ingredient.countDocuments()) === 0) {
			await Ingredient.insertMany(ingredients);
			logger.info("Data seeded successfully");
		}
	} catch (error) {
		logger.error("Error seeding data:", error);
	}
};

module.exports = {
	seedDatabase,
};
