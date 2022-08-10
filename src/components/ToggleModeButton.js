import React, { useContext } from "react";
import { ToggleModeContext } from './ToggleModeContext';
import {Switch} from 'antd';
function ToggleModeButton() {
  const { darkMode, setDarkMode } = useContext(ToggleModeContext);
  const handleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };
  return (
    <Switch
      // className={
      //   darkMode
      //     ? "btn btn-floating fa fa-toggle-on"
      //     : "btn btn-floating fa fa-toggle-off"
      // }
      onClick={handleTheme}
    />
  );
}

export default ToggleModeButton;