import React, { createContext, useState } from "react";

export const ToggleModeContext = createContext();

export const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
  );

  return (
    <ToggleModeContext.Provider value={{ darkMode, setDarkMode }}>
      {props.children}
    </ToggleModeContext.Provider>
  );
};