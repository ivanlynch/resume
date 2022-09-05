import React from "react";
import { Navbar } from "components";
import { AppContextProvider } from "contexts";
import { Route, Routes, useLocation } from "react-router-dom";
import { About, Contact, Home, Experience } from "pages";

function App() {
  const location = useLocation();

  return (
    <AppContextProvider>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AppContextProvider>
  );
}

export default App;
