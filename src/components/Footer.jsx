import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaHeart, FaMobile, FaRegCopyright, FaReact, FaCode } from 'react-icons/fa';

// Animations matching Hero section
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0a0a0f 0%, #0f0f23 50%, #1a1a2e 100%);
  color: white;
  padding: 3rem 0 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(124, 58, 237, 0.2);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  opacity: 0;
  animation: ${fadeInUp} 1s ease 0.3s forwards;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FooterText = styled.p`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #cbd5e1;
  font-weight: 300;

  .heart {
    color: #00d4ff;
  }

  .mobile {
    color: #7c3aed;
  }

  .react {
    color: #00d4ff;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.9rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  span {
    background: rgba(255, 255, 255, 0.05);
    padding: 0.4rem 0.8rem;
    border-radius: 15px;
    color: #94a3b8;
    font-size: 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const Copyright = styled.p`
  color: #94a3b8;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 300;
  margin-bottom: 1rem;

  svg {
    color: #7c3aed;
    font-size: 0.8rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    color: #f8fafc;
    background: rgba(124, 58, 237, 0.1);
    border-color: rgba(124, 58, 237, 0.3);
  }
`;

const Signature = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    color: #64748b;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    
    svg {
      background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          Crafted with <FaHeart className="heart" /> using 
          <FaMobile className="mobile" /> React Native & 
          <FaReact className="react" /> Modern Technologies
        </FooterText>
        
        <TechStack>
          <span>React Native</span>
          <span>TypeScript</span>
          <span>Styled Components</span>
          <span>Firebase</span>
          <span>Redux</span>
        </TechStack>
        
        <FooterLinks>
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
          <FooterLink href="https://github.com/munir038" target="_blank" rel="noopener noreferrer">GitHub</FooterLink>
          <FooterLink href="https://linkedin.com/in/munirkhan11" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink>
        </FooterLinks>
        
        <Copyright>
          <FaRegCopyright />
          {currentYear} Munir Khan. All rights reserved.
        </Copyright>
        
        <Signature>
          <p>
            <FaCode />
            Built with passion for mobile excellence
          </p>
        </Signature>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;