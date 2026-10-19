import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: ${props => props.scrolled ? 
    'rgba(10, 10, 15, 0.95)' : 
    'rgba(10, 10, 15, 0.1)'};
  backdrop-filter: ${props => props.scrolled ? 'blur(20px)' : 'none'};
  z-index: 1000;
  padding: ${props => props.scrolled ? '1rem 0' : '1.5rem 0'};
  transition: all 0.3s ease;
  border-bottom: ${props => props.scrolled ? 
    '1px solid rgba(124, 58, 237, 0.2)' : 
    'none'};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.scrolled ? 
      'linear-gradient(135deg, rgba(10, 10, 15, 0.95) 0%, rgba(15, 15, 35, 0.95) 50%, rgba(26, 26, 46, 0.95) 100%), radial-gradient(circle at 70% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)' :
      'linear-gradient(135deg, rgba(10, 10, 15, 0.1) 0%, rgba(15, 15, 35, 0.1) 50%, rgba(26, 26, 46, 0.1) 100%), radial-gradient(circle at 70% 20%, rgba(124, 58, 237, 0.05) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(0, 212, 255, 0.05) 0%, transparent 50%)'};
    z-index: -1;
    transition: all 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(124, 58, 237, 0.4) 50%, 
      transparent 100%);
    opacity: ${props => props.scrolled ? '1' : '0'};
    transition: opacity 0.3s ease;
    box-shadow: 0 2px 10px rgba(124, 58, 237, 0.2);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.scrolled ? 
    'rgba(248, 250, 252, 0.95)' : 
    'rgba(248, 250, 252, 0.95)'};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  text-shadow: ${props => props.scrolled ? 
    '0 2px 15px rgba(124, 58, 237, 0.4)' : 
    '0 2px 25px rgba(0, 212, 255, 0.5)'};
  cursor: pointer;

  svg {
    font-size: 2rem;
    background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: all 0.3s ease;
    filter: ${props => props.scrolled ? 
      'drop-shadow(0 2px 12px rgba(124, 58, 237, 0.5))' :
      'drop-shadow(0 2px 15px rgba(0, 212, 255, 0.6))'};
  }

  &:hover {
    transform: translateY(-2px);
    text-shadow: 0 4px 25px rgba(124, 58, 237, 0.6);
    
    svg {
      filter: drop-shadow(0 4px 20px rgba(0, 212, 255, 0.8));
      transform: scale(1.1);
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 3rem;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 968px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, #0a0a0f 0%, #0f0f23 50%, #1a1a2e 100%);
    backdrop-filter: blur(30px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
    gap: 2.5rem;
    border-right: 1px solid rgba(124, 58, 237, 0.3);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 30%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(0, 212, 255, 0.1) 0%, transparent 50%);
      z-index: -1;
    }
  }
`;

const MagneticNavLink = styled.a`
  text-decoration: none;
  color: ${props => props.active ? 
    'rgba(248, 250, 252, 0.95)' : 
    props.scrolled ? 'rgba(203, 213, 225, 0.9)' : 'rgba(203, 213, 225, 0.9)'};
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 1rem;
  text-shadow: ${props => props.active ? 
    '0 2px 12px rgba(124, 58, 237, 0.5)' : 'none'};
  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%);
    transition: all 0.3s ease;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
    transition: width 0.3s ease;
    box-shadow: 0 2px 10px rgba(124, 58, 237, 0.4);
    border-radius: 2px;
  }

  &:hover {
    color: rgba(248, 250, 252, 0.95);
    text-shadow: 0 2px 12px rgba(124, 58, 237, 0.5);
    transform: translateY(-2px);
    
    &::before {
      width: 100px;
      height: 100px;
    }
    
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 968px) {
    font-size: 1.4rem;
    padding: 1rem 2rem;
    color: rgba(203, 213, 225, 0.9);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;

    &::before {
      display: none;
    }

    &:hover {
      color: rgba(248, 250, 252, 0.95);
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(124, 58, 237, 0.3);
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(124, 58, 237, 0.2);
    }
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.scrolled ? 
    'rgba(203, 213, 225, 0.9)' : 
    'rgba(203, 213, 225, 0.9)'};
  z-index: 1001;
  transition: all 0.3s ease;
  padding: 0.75rem;
  border-radius: 12px;
  background: ${props => props.scrolled ? 
    'rgba(124, 58, 237, 0.15)' : 
    'rgba(124, 58, 237, 0.1)'};
  border: 1px solid rgba(124, 58, 237, 0.3);
  backdrop-filter: blur(10px);

  &:hover {
    color: rgba(248, 250, 252, 0.95);
    background: rgba(124, 58, 237, 0.25);
    border-color: rgba(124, 58, 237, 0.5);
    transform: scale(1.1);
    box-shadow: 0 5px 20px rgba(124, 58, 237, 0.4);
  }

  @media (max-width: 968px) {
    display: block;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <HeaderContainer scrolled={isScrolled}>
      <Nav>
        <Logo scrolled={isScrolled} onClick={scrollToTop}>
          <FaCode />
          Munir Khan
        </Logo>
        
        <NavLinks isOpen={isMenuOpen}>
          <li>
            <MagneticNavLink 
              active={activeSection === 'home'}
              scrolled={isScrolled}
              onClick={() => handleNavClick('home')}
              className="magnetic"
            >
              Home
            </MagneticNavLink>
          </li>
          <li>
            <MagneticNavLink 
              active={activeSection === 'about'}
              scrolled={isScrolled}
              onClick={() => handleNavClick('about')}
              className="magnetic"
            >
              About
            </MagneticNavLink>
          </li>
          <li>
            <MagneticNavLink 
              active={activeSection === 'experience'}
              scrolled={isScrolled}
              onClick={() => handleNavClick('experience')}
              className="magnetic"
            >
              Experience
            </MagneticNavLink>
          </li>
          <li>
            <MagneticNavLink 
              active={activeSection === 'skills'}
              scrolled={isScrolled}
              onClick={() => handleNavClick('skills')}
              className="magnetic"
            >
              Skills
            </MagneticNavLink>
          </li>
          <li>
            <MagneticNavLink 
              active={activeSection === 'projects'}
              scrolled={isScrolled}
              onClick={() => handleNavClick('projects')}
              className="magnetic"
            >
              Projects
            </MagneticNavLink>
          </li>
          <li>
            <MagneticNavLink 
              active={activeSection === 'contact'}
              scrolled={isScrolled}
              onClick={() => handleNavClick('contact')}
              className="magnetic"
            >
              Contact
            </MagneticNavLink>
          </li>
        </NavLinks>

        <MobileMenuButton 
          scrolled={isScrolled}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="magnetic"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;