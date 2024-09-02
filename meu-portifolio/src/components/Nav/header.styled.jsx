import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: #282c34;
  color: #f1f1f1;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Logo = styled.h1`
  font-size: 1.8rem;
  color: #61dafb;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
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

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #61dafb;
  font-size: 1.8rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 60px;
  left: 1rem;
  background-color: #282c34;
  width: calc(100% - 2rem);
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

export const MobileNavItem = styled.li`
  text-align: center;
`;

export const MobileNavLink = styled(Link)`
  color: #61dafb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;
