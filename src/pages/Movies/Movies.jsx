import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByQuerySearch } from 'utils/FilmsAPI';
import { Input, SearchButton, NavItem, NavList } from './MoviesStyled';

const Movies = () => {
  const [movieList, setMovieList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieToSearch = searchParams.get('movie');
  const location = useLocation();

  useEffect(() => {
    if (movieToSearch === null) {
      return;
    }

    getMovieByQuerySearch(movieToSearch).then(e => setMovieList(e));
  }, [movieToSearch]);

  const submitHandler = e => {
    e.preventDefault();

    const { value } = e.currentTarget.elements.movie;

    setSearchParams({ movie: value });

    e.currentTarget.reset();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Input type="text" placeholder="input movie name" name="movie" />
        <SearchButton type="submit">Search</SearchButton>
      </form>
      {movieList !== null && (
        <NavList>
          {movieList.map(({ id, original_title }) => (
            <li key={id}>
              <NavItem to={`/movies/${id}`} state={location}>
                {original_title}{' '}
              </NavItem>
            </li>
          ))}
        </NavList>
      )}
    </div>
  );
};

export default Movies;