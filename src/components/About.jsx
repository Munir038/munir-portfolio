// src/components/About.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCode, FaPalette, FaRocket, FaMobile, FaServer, FaDeploydog, FaStar } from 'react-icons/fa';
import portImage from '../assets/portImage.jpg';

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

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

// Particle Background Component for About section
const ParticleCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ParticleBackground = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
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
      for (let i = 0; i < 60; i++) {
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

const AboutSection = styled.section`
  background: linear-gradient(135deg, #0a0a0f 0%, #0f0f23 50%, #1a1a2e 100%);
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0;
  animation: ${fadeInUp} 1s ease 0.3s forwards;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #cbd5e1;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  animation: ${fadeInUp} 1s ease 0.5s forwards;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 5rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #f8fafc;
    line-height: 1.2;
    font-weight: 600;
    opacity: 0;
    animation: ${fadeInUp} 1s ease 0.4s forwards;
  }

  p {
    color: #cbd5e1;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.7;
    font-weight: 300;
    opacity: 0;
    animation: ${fadeInUp} 1s ease 0.6s forwards;
  }
`;

const AboutImage = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  opacity: 0;
  animation: ${fadeInUp} 1s ease 0.8s forwards;
  
  .image-container {
    position: relative;
    max-width: 400px;
    width: 100%;
    
    &::before {
      content: '';
      position: absolute;
      top: -15px;
      left: -15px;
      right: 15px;
      bottom: 15px;
      background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
      border-radius: 20px;
      z-index: -1;
      opacity: 0.2;
      transition: all 0.3s ease;
    }
  }

  img {
    width: 100%;
    height: auto;
    max-height: 500px;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
    object-fit: cover;
    border: 2px solid rgba(0, 212, 255, 0.1);
    position: relative;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 25px 50px rgba(0,0,0,0.4);
      border-color: rgba(0, 212, 255, 0.3);
    }
  }

  @media (max-width: 968px) {
    order: -1;
    
    .image-container {
      max-width: 320px;
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin: 4rem 0;
  opacity: 0;
  animation: ${fadeInUp} 1s ease 0.7s forwards;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem 1.5rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
    border-color: rgba(0, 212, 255, 0.2);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #94a3b8;
  font-weight: 500;
  font-size: 1rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  opacity: 0;
  animation: ${fadeInUp} 1s ease 0.9s forwards;
`;

const Feature = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2.5rem 2rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
    border-color: rgba(0, 212, 255, 0.2);
    
    svg {
      transform: scale(1.1);
    }
  }

  svg {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: all 0.3s ease;
  }

  h4 {
    margin-bottom: 1rem;
    color: #f8fafc;
    font-size: 1.3rem;
    font-weight: 600;
  }

  p {
    color: #cbd5e1;
    line-height: 1.6;
    font-size: 1rem;
    font-weight: 300;
  }
`;

const HighlightBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 212, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin: 1rem 0;
  border: 1px solid rgba(0, 212, 255, 0.2);
  opacity: 0;
  animation: ${fadeInUp} 1s ease 0.5s forwards;
  
  svg {
    color: #00d4ff;
    font-size: 1rem;
  }
  
  span {
    color: #00d4ff;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <ParticleBackground />
      <AboutContainer>
        <SectionTitle>About Me</SectionTitle>
        <SectionSubtitle>
          Passionate React Native developer crafting exceptional mobile experiences
        </SectionSubtitle>
        
        <AboutContent>
          <AboutText>
            <h3>Crafting Digital Excellence</h3>
            <HighlightBadge>
              <FaStar />
              <span>React Native Specialist</span>
            </HighlightBadge>
            <p>
              I'm a passionate Software Engineer with expertise in React Native development. 
              I specialize in transforming complex business requirements into seamless, 
              high-performance mobile applications that deliver exceptional user experiences.
            </p>
            <p>
              My expertise spans the entire mobile development lifecycle, from 
              conceptualization to deployment, with proficiency in modern technologies 
              including React Native, TypeScript, Redux, and Firebase.
            </p>
            <p>
              I believe in writing clean, maintainable code and creating applications 
              that not only function flawlessly but also provide delightful user experiences.
            </p>
          </AboutText>
          
          <AboutImage>
            <div className="image-container">
              <img 
                src={portImage}
                alt="Munir Khan - React Native Developer" 
              />
            </div>
          </AboutImage>
        </AboutContent>
        
        <StatsGrid>
          <StatCard>
            <StatNumber>2+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>10+</StatNumber>
            <StatLabel>Projects Delivered</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>5+</StatNumber>
            <StatLabel>Apps Published</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>100%</StatNumber>
            <StatLabel>Client Satisfaction</StatLabel>
          </StatCard>
        </StatsGrid>
        
        <FeaturesGrid>
          <Feature>
            <FaMobile />
            <h4>Cross-Platform Development</h4>
            <p>Building native-like experiences for both iOS and Android using React Native</p>
          </Feature>
          <Feature>
            <FaCode />
            <h4>Clean Code</h4>
            <p>Writing maintainable, scalable code following industry best practices</p>
          </Feature>
          <Feature>
            <FaRocket />
            <h4>Performance</h4>
            <p>Optimizing mobile apps for speed, efficiency, and smooth interactions</p>
          </Feature>
          <Feature>
            <FaDeploydog />
            <h4>Deployment</h4>
            <p>Expertise in app deployment and cloud services for seamless delivery</p>
          </Feature>
        </FeaturesGrid>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;