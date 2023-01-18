import React, { useContext } from "react";
import ModeContext from "../../hooks/ModeContext";
import "./navbar.css";
const Navbar = () => {
  const { mode, setMode } = useContext(ModeContext);
  console.log(mode);

  return (
    <nav class={mode === "light" ? "navbar bg-body-tertiary sticky-top backcolor" :"navbar bg-body-tertiary sticky-top backcolordark"} >
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="bi bi-book logo"> #myDictionary</i>
        </a>
      </div>
      <div class="container-2">
        <i
          onClick={() => {
            setMode("light");
          }}
          class="bi bi-brightness-high-fill"
        ></i>
        <i
          onClick={() => {
            setMode("dark");
          }}
          class="bi bi-moon-stars-fill"
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
