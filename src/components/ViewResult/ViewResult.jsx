import React, { useContext } from "react";
import ModeContext from "../../hooks/ModeContext";
import "./viewResult.css";
const ViewResult = ({ item }) => {
  const { mode } = useContext(ModeContext);
  return (
    <div
      className={mode === "light" ? "flexxcolexample" : "flexxcolexampledark"}
    >
      <p className="definition">{item?.definition} </p>
      <p className="examplefor">{item?.example} </p>
    </div>
  );
};

export default ViewResult;
