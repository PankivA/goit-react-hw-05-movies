import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export { NavItem, NavList };