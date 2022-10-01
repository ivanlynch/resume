import React, { useEffect } from "react";
import { Divider, Navbar } from "components";
import { AppContextProvider } from "contexts";
import { About, Contact, Experience, Home } from "pages";

function App() {
  useEffect(() => {
    window.location.hash = "#home";
  }, []);

  return (
    <AppContextProvider>
      <Navbar />
      <div className="md:w-[65vw] mx-auto flex flex-col justify-center items-center mt-[10vh]">
        <Home />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </div>
    </AppContextProvider>
  );
}

export default App;
