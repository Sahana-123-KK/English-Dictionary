import React, { useContext, useEffect, useState } from "react";
import ModeContext from "../../hooks/ModeContext";
import ResultComponent from "../ResultComponent/ResultComponent";
import "./home.css";
const Home = () => {
  const [meaning, setMeaning] = useState([]);
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);
  const { mode } = useContext(ModeContext);

  const getMeaning = async () => {
    setMeaning([]);
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      if (response.status === 200) {
        const json = await response.json();
        console.log(json);
        setMeaning(json);
        setLoading(false);
      } else {
        console.log(response);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  return (
    <div className={mode === "light" ? "flexxcolhome" : "flexxcolhomedark"}>
      <h3 className="headhome">Enter Any Word</h3>

      <div class="mb-3 textinput">
        <h4 className="wordsearched">
          {" "}
          {word.length !== 0 && "Your Search: " + word}{" "}
        </h4>
        {/* <label for="exampleInputEmail1" class="form-label">
          Email address
        </label> */}
        <input
          // autoComplete={true}
          value={word}
          onChange={handleChange}
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Any Word..."
        />
      </div>
      <button onClick={getMeaning} className="btn btn-primary">
        Search
      </button>

      <div className="flexxcolresults">
        {loading ? (
          <div class="spinner-border widcorrect  " role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : meaning.length === 0 && word.length === 0 ? (
          "Type something to find Meaning"
        ) : meaning.length === 0 && word.length !== 0 ? (
          "No Results"
        ) : (
          <ResultComponent meaning={meaning} />
        )}
      </div>
    </div>
  );
};

export default Home;
