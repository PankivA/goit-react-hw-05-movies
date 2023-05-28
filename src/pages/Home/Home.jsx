import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import { getTrendingMovies } from 'utils/FilmsAPI';

import { NavItem, NavList } from './HomeStyled';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(movies => setTrends(movies.results));
  }, []);

  return (
    <div>
      <NavList>
        {trends.length > 0 &&
          trends.map(({ id, title }) => {
            return (
              <li key={id}>
                <NavItem to={`/movies/${id}`} state={location}>
                  {title}
                </NavItem>
              </li>
            );
          })}
      </NavList>
    </div>
  );
};

export default Home;