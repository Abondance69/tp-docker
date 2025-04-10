import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";
import Quotes from "./page/Quotes";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Quotes />} path="/create"></Route>
      </Routes>
    </BrowserRouter>
  );
}
