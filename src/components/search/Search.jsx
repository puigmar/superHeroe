import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { useParams } from "react-router-dom";
import { heroes } from "../../data/heroes";
import HeroCard from "../heroes/HeroCard/HeroCard";
import { getHeroByFilter } from "../../selectors/getHeroesByFilter";

export const Search = ({ history }) => {
  const heroesFilter = heroes;

  const [filterList, setFilterList] = useState(heroesFilter);
  const [searchText, setSearchText] = useState("");

  const getQuery = (history) => {
    let query = queryString.parse(history.location.search);
    setSearchText(query.q || "");
  };

  useEffect(() => {
    if (history.location.search) {
      getQuery(history);
    }
  }, []);

  useEffect(() => {
    handleFilterList(searchText);
  }, [searchText]);

  const handleFilterList = (value) => {
    const filteredList = getHeroByFilter("superhero", value);
    setFilterList(filteredList);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    history.push(`?q=${value}`);
    setSearchText(value);
    handleFilterList(value);
  };

  return (
    <div>
      <div className='d-flex align-items-center mt-4 mb-4'>
        <h1 className='h1 mt-0 mb-0'>Search your hero</h1>
        <form className='form-inline w-auto d-flex align-items-center ml-3'>
          <div className='form-group d-flex searchForm'>
            <input
              type='text'
              placeholder='Find your hero'
              className='form-control mr-2'
              onChange={handleChange}
              value={searchText}
            />
          </div>
        </form>
      </div>
      <hr />
      <div className='row'>
        <div className='col-12'>
          {searchText && (
            <h3 className='mb-4'>
              Results
              <span className='text-primary'>{` for ${searchText}`}</span>
            </h3>
          )}

          <div className='card-list'>
            {filterList.length === 0 && history.location.search && (
              <div className='card alert alert-info w-100'>
                There is not hero with {searchText}
              </div>
            )}
            {filterList.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
