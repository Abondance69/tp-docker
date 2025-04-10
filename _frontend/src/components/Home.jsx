import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Quotes from "./Quotes";

export default function Home() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/quotes")
      .then((res) => res.json())
      .then((data) => setQuotes(data.quotes))
      .catch((err) =>
        console.error("Erreur lors du fetch des citations :", err)
      );
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">Mes citations ({quotes.length})</h2>

        <Link
          to="/create"
          className="text-white bg-teal-700 py-2 px-3 rounded-sm hover:bg-teal-800 transition"
        >
          Ajouter une citation
        </Link>
      </div>

      {quotes.map((quote) => (
        <Quotes key={quote.id} quote={quote} />
      ))}
    </div>
  );
}
