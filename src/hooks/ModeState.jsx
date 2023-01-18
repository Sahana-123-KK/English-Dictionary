import React, { useState } from "react";

import ModeContext from "./ModeContext";

const ModeState = (props) => {
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  const [mode, setMode] = useState("light");
  return (
    <ModeContext.Provider value={{ mode, setMode, changeMode }}>
      {props.children}
    </ModeContext.Provider>
  );
};

export default ModeState;
