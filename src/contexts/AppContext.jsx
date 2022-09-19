import { createContext, useState } from "react";

const theme = {
  isLightTheme: false,
  light: {
    text: "",
    foreground: "",
    background: "",
  },
  dark: {
    text: "",
    foreground: "",
    background: "",
  },
};

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentHash, setCurrentHash] = useState("");
  const [state, setState] = useState({
    ...theme,
  });

  const toggleTheme = () => {
    setState({ ...theme, isLightTheme: !state.isLightTheme });
  };

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, currentHash, setCurrentHash }}
    >
      {children}
    </AppContext.Provider>
  );
};
