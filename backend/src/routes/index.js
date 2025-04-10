const express = require("express");
const { getAllQuotes } = require("../controllers/useQuotes");

const router = express.Router();

router.get("/api/quotes", getAllQuotes);

module.exports = router;
