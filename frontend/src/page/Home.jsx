import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuoteServices from "../services/QuoteServices";
import Card from "../components/Card";

export default function Home() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const quoteServices = new QuoteServices();

    quoteServices
      .getAllQuotes()
      .then((data) => setQuotes(data))
      .catch((err) =>
        console.error("Erreur lors du fetch des citations :", err)
      );
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">Citation du jour (aléatoire)</h2>

        <Link
          to="/create"
          className="text-white bg-teal-700 py-2 px-3 rounded-sm hover:bg-teal-800 transition"
        >
          Ajouter une citation
        </Link>
      </div>

      <Card quote={quotes} />
    </div>
  );
}
