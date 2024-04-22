const express = require("express");
const router = express.Router();

const { login } = require("../api/auth.api");

router.post("/", login);

module.exports = router;
