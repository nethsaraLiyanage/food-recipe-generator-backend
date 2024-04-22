const express = require("express");
const router = express.Router();

// Import API handlers
const { login } = require("../api/auth.api");

/**
 * @route POST /
 * @description User login route
 * @method POST
 */
router.post("/", login);

module.exports = router;
