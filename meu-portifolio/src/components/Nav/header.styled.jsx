import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: #282c34;
  color: #f1f1f1;
  padding: 1rem 2rem;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Nav = styled.nav`
  margin-top: 0.5rem;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const NavItem = styled.li`
  display: inline;
`;

export const NavLink = styled(Link)`
  color: #61dafb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;
