import "./Hero.css";
import arrow_btn from "../../assets/play-button.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [inputValue, setInputValue] = useState("");
  const hendleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const bidingValue = () => {
    console.log(inputValue);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    bidingValue();
    navigate("/explorer", { state: { query: inputValue } });
  };

  return (
    <div className="hero">
      <div className="hero-text">
        <p>Explore morrocan cities</p>
      </div>
      <div className="hero-explore">
        <input
          type="text"
          placeholder="Explore a city"
          value={inputValue}
          onChange={hendleInputChange}
        />
        <img
          src={arrow_btn}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleClick();
          }}
        />{" "}
      </div>
    </div>
  );
}

export default Hero;
