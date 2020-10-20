import React from "react";
import HeroList from "../heroes/HeroList/HeroList";

function MarvelScreen() {
  return (
    <div>
      <h1>Marvel</h1>
      <HeroList publisher='Marvel Comics' />
    </div>
  );
}

export default MarvelScreen;
