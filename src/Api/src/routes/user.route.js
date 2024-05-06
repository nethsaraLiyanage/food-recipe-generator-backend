const express = require("express");
const router = express.Router();
// Import the saveUser function from the appropriate module
const { saveUser, saveUserQuestion } = require("../api/user.api");

/**
 * @route POST /
 * @description Save user route
 * @method POST
 */
router.post("/", saveUser);

/**
 * @route POST /
 * @description Save User Question
 * @method POST
 */

router.post("/saveUserQuestion", saveUserQuestion);

module.exports = router;
