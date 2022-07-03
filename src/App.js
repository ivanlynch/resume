import React from "react";
import { Navbar } from "components";
import { ThemeContextProvider } from "contexts";
import { About, Contact, Home, Skills, Work } from "pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
