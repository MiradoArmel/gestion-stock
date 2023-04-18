import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StockForm from "./components/StockForm";
import StockList from "./components/StockList";
import StockOutForm from "./components/StockOutForm";
import StockOutList from "./components/StockOutList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/stock-form" element={<StockForm />} />
        <Route path="/stock-list" element={<StockList />} />
        <Route path="/stock-out-form" element={<StockOutForm />} />
        <Route path="/stock-out-list" element={<StockOutList />} />
      </Routes>
    </Router>
  );
}

export default App;
