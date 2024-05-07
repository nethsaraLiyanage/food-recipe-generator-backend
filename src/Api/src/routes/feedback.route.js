const express = require("express");
const router = express.Router();

// Import API handlers
const { saveFeedBack } = require("../api/feedback.api");

/**
 * @route POST/saveFeedBack
 * @description save FeedBack
 * @method POST
 */
router.post("/saveFeedBack", saveFeedBack);

module.exports = router;
