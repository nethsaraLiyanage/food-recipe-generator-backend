const express = require("express");
const router = express.Router();
// Import the saveUser function from the appropriate module
const { saveUser } = require("../api/user.api");

/**
 * @route POST /
 * @description Save user route
 * @method POST
 */
router.post("/", saveUser);

module.exports = router;
