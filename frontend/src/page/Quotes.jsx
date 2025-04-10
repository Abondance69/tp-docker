import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuoteServices from "../services/QuoteServices";
import { ToastContainer, toast } from "react-toastify";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const quoteServices = new QuoteServices();

    await quoteServices
      .createQuote(content, author)
      .then((response) => {
        // console.log(response);
        toast.success("Citation ajouté avec succes");
      })
      .catch((error) => {
        toast.error("Une erreur est survenue");
      });

    setAuthor("");
    setContent("");
  };

  return (
    <>
      <ToastContainer />

      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Ajouter une citation</h2>
        </div>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="author" className="block text-sm font-semibold">
              Auteur
            </label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Nom de l'auteur"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-semibold">
              Citation
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Entrez la citation ici"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-teal-700 py-2 px-4 rounded-sm hover:bg-teal-800 transition"
          >
            Ajouter la citation
          </button>
        </form>
      </div>
    </>
  );
}
