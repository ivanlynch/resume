import React from "react";
import { Navbar } from "components";
import { AppContextProvider } from "contexts";
import { About, Contact, Experience, Home } from "pages";

function App() {
  return (
    <AppContextProvider>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Contact />
    </AppContextProvider>
  );
}

export default App;
