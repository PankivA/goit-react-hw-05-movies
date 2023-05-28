import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Input = styled.input `
  padding:10px;
  margin-left: 50px;
  border-radius: 5px;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  font-weight: 700;
  :focus {
    outline: none;
    border: none;
    box-shadow:0 0 1px 3px #9b0027;
  }
`;

const SearchButton = styled.button `
  padding:10px;
  margin:10px;
  border-radius: 5px;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  font-weight: 700;
  :hover, :active {
    background-color: #9b0027;
    color: #fff;
  }
`;

const NavItem = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #010101;
  padding: 5px;

  :hover:not(.active) {
    color: #9b0027;
  }

  &.active {
    color: #fff;
    background-color: #9b0027;
  }
`;

const NavList = styled.ul`
list-style: none;
color:#010101;
font-size: 25px;
`;

export { Input, SearchButton, NavItem, NavList };