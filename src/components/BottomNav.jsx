import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaHome, FaUser, FaBriefcase, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const BottomNavContainer = styled.nav`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(10, 10, 15, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(124, 58, 237, 0.3);
  border-radius: 25px;
  padding: 0.75rem 1.5rem;
  z-index: 999;
  display: flex;
  gap: 0.5rem;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(124, 58, 237, 0.2);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    bottom: 1rem;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 480px) {
    width: 95%;
    justify-content: space-between;
  }
`;

const NavItem = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.active ? '#00d4ff' : '#94a3b8'};
  padding: 0.75rem 1rem;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.3s ease;
  position: relative;
  min-width: 60px;

  &:hover {
    color: #00d4ff;
    transform: translateY(-2px);
  }

  &.active {
    background: rgba(0, 212, 255, 0.1);
    color: #00d4ff;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      width: 4px;
      height: 4px;
      background: #00d4ff;
      border-radius: 50%;
      box-shadow: 0 0 10px #00d4ff;
    }
  }

  .icon {
    font-size: 1.2rem;
    transition: all 0.3s ease;
  }

  .label {
    font-size: 0.7rem;
    font-weight: 500;
    opacity: ${props => props.active ? 1 : 0.8};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem;
    min-width: 50px;
    
    .icon {
      font-size: 1.1rem;
    }
    
    .label {
      font-size: 0.65rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    min-width: auto;
    
    .label {
      display: none;
    }
  }
`;

const FloatingIndicator = styled.div`
  position: absolute;
  top: -10px;
  left: ${props => props.position}%;
  width: 40px;
  height: 3px;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  border-radius: 2px;
  transition: left 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
`;

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorPosition, setIndicatorPosition] = useState(10);

  const navItems = [
    { id: 'home', icon: FaHome, label: 'Home' },
    { id: 'about', icon: FaUser, label: 'About' },
    { id: 'experience', icon: FaBriefcase, label: 'Exp' },
    { id: 'skills', icon: FaCode, label: 'Skills' },
    { id: 'projects', icon: FaProjectDiagram, label: 'Projects' },
    { id: 'contact', icon: FaEnvelope, label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 300 && rect.bottom >= 300;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
        // Update indicator position
        const index = sections.indexOf(current);
        const position = (index / (sections.length - 1)) * 80 + 10;
        setIndicatorPosition(position);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
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

  return (
    <BottomNavContainer>
      <FloatingIndicator position={indicatorPosition} />
      {navItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <NavItem
            key={item.id}
            active={activeSection === item.id}
            className={activeSection === item.id ? 'active' : ''}
            onClick={() => handleNavClick(item.id)}
          >
            <IconComponent className="icon" />
            <span className="label">{item.label}</span>
          </NavItem>
        );
      })}
    </BottomNavContainer>
  );
};

export default BottomNav;