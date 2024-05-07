const FeedBack = require("../models/feedback.model");
const logger = require("../utils/logger");

const saveFeedBack = async (request, response) => {
	try {
		let { statisfaction, isThereAreAnyLeftOvers, createdUserId, recipeId } = request.body;

		const feedback = new FeedBack({
			statisfaction,
			isThereAreAnyLeftOvers,
			createdUserId,
			recipeId,
		});

		await feedback.save();

		response.json({ isSuccess: true, status: 200, message: "FeedBack has been save Successfully" });
	} catch (error) {
		logger.error(error);
		response.json({ isSuccess: false, status: 500, message: "Error has been ocurred please try again" });
	}
};

module.exports = {
	saveFeedBack,
};
