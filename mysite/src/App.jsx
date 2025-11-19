import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/chatbot";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
        
        </Routes>
      </main>
       <Chatbot />
      <Footer />
    </div>
  );
}
