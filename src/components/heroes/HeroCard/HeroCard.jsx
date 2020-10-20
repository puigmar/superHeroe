import React from "react";
import { Link } from "react-router-dom";

const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <li className='card animate__animated animate__fadeIn' key={id}>
      <div className='row no-gutters'>
        <div
          className='col-md-5 card-img-top'
          style={{
            backgroundImage: `url("/assets/heroes/${id}.jpg")`,
            color: "#ffff",
          }}></div>
        <div className='col-md-7'>
          <div className='card-body'>
            <h3 className='h5'>{superhero}</h3>
            <p className='card-text'>
              {alter_ego !== characters ? characters : alter_ego}
            </p>
            <p className='card-text text-black-50 h6'>{first_appearance}</p>
            <p className='mb-0'>
              <Link to={`./hero/${id}`}>Ver más</Link>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default HeroCard;
