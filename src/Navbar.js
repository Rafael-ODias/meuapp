// Navbar.js
import React from 'react';
import styled from 'styled-components';

// Estilo do componente Navbar
const NavbarContainer = styled.nav`
  background-color: #4a90e2;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Estilo do logotipo
const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
`;

// Estilo dos links de navegação
const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Logo</Logo>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
