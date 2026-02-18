import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";
import DownloadPage from "./DownloadPage";

const Home = () => (
  <>
    <Hero />
    <Gallery />
    <About />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950">
        <Navbar />

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download/:id" element={<DownloadPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
