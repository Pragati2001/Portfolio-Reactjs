import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "../src/Components/Pre.js";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import Projects from "./Components/Projects/Projects.js";
import Footer from "./Components/Footer.js";
import ScrollToTop from "./Components/ScrollToTop.js";
import "./styles.css";
import "./App.css";
import Contact from "./Components/Contact/Contact";

export default function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
    
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
  );
}
