import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage.js";
import Gallery from "./components/Gallery.js";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/portfolio/:collectionName" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
