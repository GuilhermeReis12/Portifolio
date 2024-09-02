
import { HeaderContainer, Nav, NavList, NavItem, NavLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavList>
          <NavItem><NavLink to="/home">Home</NavLink></NavItem>
          <NavItem><NavLink to="/about">Sobre</NavLink></NavItem>
          <NavItem><NavLink to="/projects">Projetos</NavLink></NavItem>
          <NavItem><NavLink to="/contact">Contato</NavLink></NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
