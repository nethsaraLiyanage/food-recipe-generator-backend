const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const logger = require("../utils/logger");

const login = async (request, response) => {
	try {
		let user = await User.findOne({ email: request.body.email });

		if (!user) {
			return response.json({
				isSuccess: false,
				message: "User Not Exist the System",
			});
		} else {
			const isValidPassword = await bcrypt.compare(request.body.password, user.password);

			if (!isValidPassword) {
				return response.json({
					isSuccess: false,
					message: "Password Incorrect",
				});
			}

			const token = await user.generateJwtToken();

			currentUserModel = {
				token: token,
				userId: user._id,
				email: user.email,
				userName: user.firstName,
			};

			response.header("Bearer", token).json(currentUserModel).send();
		}
	} catch (error) {
		logger.error(error);
	}
};

module.exports = {
	login,
};
