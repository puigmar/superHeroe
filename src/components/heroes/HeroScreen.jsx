import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroByID } from "../../selectors/getHeroesByID";

function HeroScreen({ history }) {
  const { heroID } = useParams();

  const hero = useMemo(() => getHeroByID(heroID), heroID);

  if (!hero) return <Redirect to='/' />;
  console.log(hero);
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  const handleBackTo = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  return (
    <div className='row mt-5 animate__animated animate__fadeIn'>
      <div className='col-4'>
        <img
          src={`/assets/heroes/${heroID}.jpg`}
          alt={superhero}
          className='img-thumbnail'
        />
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher:</b> {publisher}
          </li>
          <li className='list-group-item'>
            <b>First appearance:</b> {first_appearance}
          </li>
        </ul>
        <h4>Characters</h4>
        <p>{characters}</p>
        <button
          className='btn btn-outline-primary'
          type='button'
          onClick={handleBackTo}>
          Return
        </button>
      </div>
    </div>
  );
}

export default HeroScreen;
