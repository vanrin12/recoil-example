import React from "react";
import "./App.css";
import ProductList from "./products";
import CartInfo from "./Cart";

function App() {
  return (
    <div className="App">
      <h1>Shopping cart recoil example</h1>
      <ProductList />
      <CartInfo />
    </div>
  );
}

export default App;
