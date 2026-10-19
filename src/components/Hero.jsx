import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown, FaMobile, FaCode, FaReact } from 'react-icons/fa';
import { SiReact, SiJavascript, SiTypescript, SiRedux } from 'react-icons/si';

// Simplified Animations
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

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

// Particle Background Component
const ParticleCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = Math.random() > 0.5 ? '#00d4ff' : '#7c3aed';
        this.alpha = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    init();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <ParticleCanvas ref={canvasRef} />;
};

// Styled Components
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0a0f 0%, #0f0f23 50%, #1a1a2e 100%);
  color: white;
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const TechIcon = styled.div`
  position: absolute;
  font-size: 2.5rem;
  color: ${props => props.color};
  animation: ${float} 6s ease-in-out infinite;
  filter: drop-shadow(0 0 10px ${props => props.glow});
  z-index: 2;
  
  &:nth-child(1) {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    top: 70%;
    right: 15%;
    animation-delay: 2s;
  }
  
  &:nth-child(3) {
    top: 30%;
    right: 20%;
    animation-delay: 1s;
  }
  
  &:nth-child(4) {
    top: 60%;
    left: 20%;
    animation-delay: 3s;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    
    &:nth-child(1) {
      top: 15%;
      left: 5%;
    }
    
    &:nth-child(2) {
      top: 75%;
      right: 10%;
    }
  }
`;

const HeroContent = styled.div`
  width: 100vw;
  padding: 0;
  text-align: center;
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: none !important;
  margin: 0 !important;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  line-height: 1.1;
  opacity: 0;
  transform: translateY(30px);
  animation: ${fadeInUp} 1s ease 0.3s forwards;
  width: 100%;
  padding: 0 2rem;

  span {
    background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #cbd5e1;
  opacity: 0;
  transform: translateY(30px);
  animation: ${fadeInUp} 1s ease 0.5s forwards;
  width: 100%;
  padding: 0 2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
`;

const DescriptionText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 3rem;
  min-height: 60px;
  opacity: 0;
  animation: ${fadeInUp} 1s ease 0.7s forwards;
  max-width: 600px;
  line-height: 1.6;
  color: #94a3b8;
  width: 100%;
  padding: 0 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    min-height: 80px;
    padding: 0 1rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeInUp} 1s ease 0.8s forwards;
  flex-wrap: wrap;
  justify-content: center;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(124, 58, 237, 0.2);
  font-size: 0.9rem;
  color: #cbd5e1;

  svg {
    color: ${props => props.color || '#00d4ff'};
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(30px);
  animation: ${fadeInUp} 1s ease 0.9s forwards;
  width: 100%;
  padding: 0 2rem;

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 0 1rem;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: ${props => props.primary ? 
    'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)' : 
    'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.primary ? '#0a0a0f' : '#f8fafc'};
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  border: ${props => props.primary ? 'none' : '1px solid rgba(124, 58, 237, 0.3)'};
  transition: all 0.3s ease;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.primary ? 
      '0 10px 25px rgba(124, 58, 237, 0.3)' : 
      '0 5px 15px rgba(0, 0, 0, 0.2)'};
  }

  @media (max-width: 480px) {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease 1.1s forwards;
  margin-bottom: 2rem;
  width: 100%;
  padding: 0 2rem;
`;

const SocialIcon = styled.a`
  color: #cbd5e1;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  padding: 0.75rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(124, 58, 237, 0.2);

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
    color: #0a0a0f;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #cbd5e1;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: ${fadeIn} 2s ease 1.5s forwards;
  opacity: 0;

  svg {
    animation: ${float} 2s ease-in-out infinite;
    color: #00d4ff;
  }
`;

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Building high-performance cross-platform mobile applications";

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <HeroSection id="home">
      <ParticleBackground />
      
      {/* Tech Icons */}
      <TechIcon color="#61dafb" glow="rgba(97, 218, 251, 0.4)">
        <SiReact />
      </TechIcon>
      
      <TechIcon color="#7c3aed" glow="rgba(124, 58, 237, 0.4)">
        <FaMobile />
      </TechIcon>
      
      <TechIcon color="#00d4ff" glow="rgba(0, 212, 255, 0.4)">
        <FaCode />
      </TechIcon>
      
      <TechIcon color="#764abc" glow="rgba(118, 74, 188, 0.4)">
        <SiRedux />
      </TechIcon>

      <HeroContent>
        <HeroTitle>
          Hi, I'm <span>Munir Khan</span>
        </HeroTitle>
        
        <HeroSubtitle>
          Software Engineer
        </HeroSubtitle>
        
        <DescriptionText>
          {displayText}
          <span style={{ animation: 'blink 1s infinite' }}>|</span>
        </DescriptionText>

        <TechStack>
          <TechItem color="#61dafb">
            <SiReact />
            <span>React Native</span>
          </TechItem>
        </TechStack>
        
        <CTAButtons>
          <CTAButton primary href="#projects">
            View My Work
          </CTAButton>
          <CTAButton href="#contact">
            Get In Touch
          </CTAButton>
          <CTAButton href="/resume.pdf" download>
            <FaDownload />
            Download CV
          </CTAButton>
        </CTAButtons>
        
        <SocialLinks>
          <SocialIcon href="https://github.com/munir038" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/in/munirkhan11" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="mailto:munirkhan8296@gmail.com">
            <FaEnvelope />
          </SocialIcon>
        </SocialLinks>
      </HeroContent>
      
      <ScrollIndicator>
        <span>Scroll Down</span>
        <FaArrowDown />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;