import "./NavBar.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [navbarColor, setNavbarColor] = useState("");

  const colorChanged = useRef(false);

  return (
    <div
      className="Nav"
      style={{
        backgroundColor: navbarColor,

        transition: "background-color 5s ease",
      }}
    >
      IDK
      <ul className="nav-menu">
        <li className="nav-concact" onClick={() => navigate("/")}>
          Home
        </li>
        <li>Explore</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;
