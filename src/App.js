import React from "react";
import { Navbar, AnimatedRoutes } from "components";
import { ThemeContextProvider } from "contexts";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Navbar />
        <AnimatedRoutes />
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
