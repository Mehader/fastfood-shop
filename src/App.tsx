import React from "react";
import { Header, Footer, ProductCard, Basket, Home } from "./Components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/cart" element={<Basket />} />
        <Route path="product/*" element={<ProductCard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
