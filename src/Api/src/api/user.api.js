const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const logger = require("../utils/logger");

const saveUser = async (request, response) => {
	try {
		let { id, fullName, email, phoneNumber, password } = request.body;

		if (id == null) {
			let user = new User({
				fullName,
				email,
				phoneNumber,
				password,
			});

			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(user.password, salt);
			await user.save();

			response.json({ isSuccess: true, message: "User has been save Successfully" });
		} else {
			const isUserAvailable = await User.findById(id);

			if (!isUserAvailable) {
				response.json({
					isSuccess: false,
					message: "Cannot Find User",
				});
			}

			await User.findByIdAndUpdate(id, {
				fullName,
				email,
				mobileNumber,
			});

			response.json({
				isSuccess: true,
				message: "User has been  Update SuccessFully",
			});
		}
	} catch (error) {
		response.json(error);
	}
};

module.exports = {
	saveUser,
};
