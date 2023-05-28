import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavLinkItem = styled(NavLink)`
  margin-right: 30px;
  margin-left: 30px;
  text-decoration: none;
  color: #010101;
  padding: 10px;
  border-radius: 5px;

  :hover:not(.active) {
    color: #9b0027;
  }

  &.active {
    color: #fff;
    font-weight: 500;
    background-color: #9b0027;

  }
`;

const Header = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #010101;
  box-shadow: 0px 10px 5px 0px #9b0027;
`;

const Main = styled.main`
  margin: 20px;
  text-decoration: none;
`;

export { Main, Header, NavLinkItem };