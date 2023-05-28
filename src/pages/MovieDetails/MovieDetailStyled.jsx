import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled.p`
  display: inline-block;
  padding:10px;
  margin:10px;
  border-radius: 5px;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  font-weight: 700;
  color: #010101;
  :hover, :active {
    background-color: #9b0027;
    color: #fff;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  margin-top: 10px;

  box-shadow: 0px 10px 5px 0px #9b0027;
`;

const MovieTextInfo = styled.div`
  padding: 20px;
  padding-top: 0;
`;

const AdditionalMovieInfo = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  box-shadow: 0px 10px 5px 0px #9b0027;
  margin-bottom: 20px;
`;

const NavLinkItem = styled(NavLink)`
  text-decoration: none;
  color: #010101;
  padding: 10px;

  :hover:not(.active) {
    color: #9b0027;
  }

  &.active {
    color: #fff;
    background-color: #9b0027;
  }
`;

export { Link, NavLinkItem, AdditionalMovieInfo, MovieInfo, MovieTextInfo };