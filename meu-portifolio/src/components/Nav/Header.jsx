import { useState, useEffect, useRef } from "react";
import {
  HeaderContainer,
  Logo,
  Nav,
  NavList,
  NavItem,
  NavLink,
  MobileMenuButton,
  MobileNavList,
  MobileNavItem,
  MobileNavLink,
} from "./Header.styled";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo>Meu Portfólio</Logo>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/projects">Projetos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contato</NavLink>
          </NavItem>
        </NavList>
      </Nav>
      <MobileMenuButton onClick={toggleMenu}>
        {isMenuOpen ? "✖️" : "☰"}
      </MobileMenuButton>
      <MobileNavList ref={menuRef} isOpen={isMenuOpen}>
        <MobileNavItem>
          <MobileNavLink to="/home" onClick={handleLinkClick}>
            Home
          </MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/about" onClick={handleLinkClick}>
            Sobre
          </MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/projects" onClick={handleLinkClick}>
            Projetos
          </MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/contact" onClick={handleLinkClick}>
            Contato
          </MobileNavLink>
        </MobileNavItem>
      </MobileNavList>
    </HeaderContainer>
  );
};

export default Header;
