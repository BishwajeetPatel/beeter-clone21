// app/components/Navbar.js
'use client'
import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 800;
  color: #017848;
  text-decoration: none;
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.3s ease;
  }
`

const NavLink = styled(Link)`
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  
  &:hover {
    color: #017848;
  }
`

const MobileToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Nav>
      <NavContainer>
        <Logo href="/">Better</Logo>
        
        <NavLinks isOpen={isOpen}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about-us">About Us</NavLink>
          <NavLink href="/mortgage-calculator">Calculator</NavLink>
          <NavLink href="/start" className="btn btn-primary">
            Get Started
          </NavLink>
        </NavLinks>
        
        <MobileToggle onClick={() => setIsOpen(!isOpen)}>
          ☰
        </MobileToggle>
      </NavContainer>
    </Nav>
  )
}
