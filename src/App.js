import React from "react";
import { Navbar, AnimatedRoutes } from "components";
import { AppContextProvider } from "contexts";
import { BrowserRouter } from "react-router-dom";
import { useDevice } from "hooks";

function App() {
  const { isMobile } = useDevice();
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Navbar isMobile={isMobile} />
        <AnimatedRoutes />
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
