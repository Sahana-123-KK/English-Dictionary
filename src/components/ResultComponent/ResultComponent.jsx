import React, { useContext, useEffect, useState } from "react";
import ModeContext from "../../hooks/ModeContext";
import ViewResult from "../ViewResult/ViewResult";
import "./resultComponent.css";
const ResultComponent = ({ meaning }) => {
  const [alldef, setAllDef] = useState(meaning[0]?.meanings);
  const [def, setDef] = useState([meaning[0]?.meanings[0]?.definitions]);
  const { mode } = useContext(ModeContext);

  useEffect(() => {
    setDef(meaning[0]?.meanings[0]?.definitions);
  }, []);
  console.log(meaning[0]?.meanings);
  return (
    <div className="flexxcolresultscomp">
      {alldef?.map((item, ind) => {
        return (
          <div
            className={
              mode === "light" ? "flexxcolalltypes" : "flexxcolalltypesdark"
            }
          >
            <h5 className={
              mode === "light" ? "typenoun" : "typenoundark"
            }>Part Of Speech: {item?.partOfSpeech} </h5>

            {item?.definitions.map((ex, i) => {
              return <ViewResult item={ex} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ResultComponent;
