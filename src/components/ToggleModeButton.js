import React, { useContext } from "react";
import { ToggleModeContext } from './ToggleModeContext';

function ToggleModeButton() {
  const { darkMode, setDarkMode } = useContext(ToggleModeContext);
  const handleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };
  return (
    <button
      className={
        darkMode
          ? "btn btn-floating fa fa-toggle-on"
          : "btn btn-floating fa fa-toggle-off"
      }
      onClick={handleTheme}
    ></button>
  );
}

export default ToggleModeButton;