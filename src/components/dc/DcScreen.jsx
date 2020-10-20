import React from "react";
import HeroList from "../heroes/HeroList/HeroList";

function DcScreen() {
  return (
    <div>
      <h1>DC</h1>
      <HeroList publisher='DC Comics' />
    </div>
  );
}

export default DcScreen;
