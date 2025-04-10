const express = require("express");
const { getAllQuotes, createQuote } = require("../controllers/useQuotes");

const router = express.Router();

router.get("/api/quotes", getAllQuotes);
router.post("/api/quote", createQuote);

module.exports = router;
