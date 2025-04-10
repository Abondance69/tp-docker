const quotes = require("../data/quotes");

module.exports.getAllQuotes = async (req, res) => {
  try {
    const datas = await quotes;
    return res.status(200).json(datas);
  } catch (error) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
};
