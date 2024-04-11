const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
	fullName: {
		type: String,
		required: true,
	},

	phoneNumber: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
		unique: true,
	},

	password: {
		type: String,
		required: true,
	},
});

userSchema.methods.generateJwtToken = async function () {
	const user = this;
	const jwtSecret = process.env.jwtPrivateKey;

	const token = jwt.sign({ _id: user._id }, jwtSecret);
	user.token = token;
	return token;
};

module.exports = User = mongoose.model("User", userSchema);
