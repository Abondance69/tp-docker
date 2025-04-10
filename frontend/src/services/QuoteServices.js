export default class QuoteServices {
  async getAllQuotes() {
    try {
      const response = await fetch("http://localhost:5000/api/quotes");
      if (!response.ok)
        throw new Error("Erreur lors de la récupération des citations");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur API getAllQuotes: ", error);
      throw error;
    }
  }

  async createQuote(content, author) {
    try {
      const response = await fetch("http://localhost:5000/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, author }),
      });
      if (!response.ok)
        throw new Error("Erreur lors de la création de la citation");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur API createQuote: ", error);
      throw error;
    }
  }
}
