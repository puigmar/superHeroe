import React, { useMemo } from "react";
import { getHeroByPublisher } from "../../../selectors/getHeroesByPublisher";
import HeroCard from "../HeroCard/HeroCard";
import "./HeroList.css";

const HeroList = ({ publisher }) => {
  const heroes = getHeroByPublisher(publisher);
  return (
    <ul className='card-list animate__animated animate__fadeIn'>
      {heroes.map((hero) => (
        <HeroCard {...hero} key={hero.id} />
      ))}
    </ul>
  );
};

export default HeroList;
