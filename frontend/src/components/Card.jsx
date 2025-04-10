import React from "react";

export default function Card({ quote }) {
  return (
    <div className="px-3 border border-gray-400 rounded-md my-2 py-2">
      <p className="text-lg italic text-gray-800">"{quote.content}"</p>
      <p className="text-right text-sm text-gray-600 mt-2"> — {quote.author}</p>
    </div>
  );
}
