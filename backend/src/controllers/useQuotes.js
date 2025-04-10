const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/quotes.json");

module.exports.getAllQuotes = async (req, res) => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const quotes = JSON.parse(data);

    const random = Math.floor(Math.random() * quotes.length);
    return res.status(200).json(quotes[random]);
  } catch (error) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

module.exports.createQuote = async (req, res) => {
  try {
    const { content, author } = req.body;

    const data = fs.readFileSync(filePath, "utf8");
    const quotes = JSON.parse(data);

    const id = quotes.length + 1;
    const newQuote = { id, content, author };

    quotes.push(newQuote);

    fs.writeFileSync(filePath, JSON.stringify(quotes, null, 2));

    return res.status(201).json({ message: "Quotes add with success" });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};
