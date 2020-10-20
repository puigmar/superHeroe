import { heroes } from "../data/heroes";

export const getHeroByFilter = (keyFilter, value) => {
  const heroesFilter = heroes;
  return heroesFilter.filter((hero) => {
    if (hero[keyFilter].toLowerCase().includes(value.toLowerCase())) {
      return hero;
    }
  });
};
