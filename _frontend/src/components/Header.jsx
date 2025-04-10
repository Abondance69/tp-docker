import React from "react";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa6";

export default function Header() {
  return (
    <nav className="bg-teal-800 flex justify-center items-center px-8 py-6">
      <Link to="/">
        <h1 className="text-2xl text-white hover:text-gray-300 transition flex justify-center items-center">
          <FaBook className="mx-1 text-lg" />
          <span>My Citations</span>
        </h1>
      </Link>
    </nav>
  );
}
