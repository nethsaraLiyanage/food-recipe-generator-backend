const toRecipeDTO = (recipe) => {
	return {
		id: recipe._id,
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
		mealType: recipe.mealType ?? "",
		isSaved: recipe.isSaved,
		preparationTime: recipe.preparationTime,
		cookingTime: recipe.cookingTime,
	};
};

module.exports = {
	toRecipeDTO,
};
