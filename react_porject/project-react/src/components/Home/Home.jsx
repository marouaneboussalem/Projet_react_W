import React from "react";
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import Background from "../Background/Background";
import { useState } from "react";

function Home() {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in  to", text2: "your passions" },
  ];
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <NavBar />
      <Hero />
    </>
  );
}

export default Home;
