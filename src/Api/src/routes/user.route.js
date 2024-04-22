const express = require("express");
const router = express.Router();
const { saveUser } = require("../api/user.api");

router.post("/", saveUser);

module.exports = router;
