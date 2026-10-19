import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaMobile, FaCode, FaRocket, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

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

const ExperienceSection = styled.section`
  background: linear-gradient(135deg, #0a0a0f 0%, #0f0f23 50%, #1a1a2e 100%);
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const ExperienceContainer = styled.div`
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

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
  opacity: 0;
  animation: ${fadeInUp} 1s ease 0.6s forwards;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ExperienceCard = styled.div`
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

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
`;

const StatNumber = styled.div`
  font-size: 2rem;
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

const Timeline = styled.div`
  position: relative;
  opacity: 0;
  animation: ${fadeInUp} 1s ease 0.8s forwards;

  &::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
    opacity: 0.3;

    @media (max-width: 768px) {
      left: 25px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  margin-bottom: 2rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    color: #0a0a0f;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin-right: 1.5rem;
    
    svg {
      font-size: 1.25rem;
    }
  }
`;

const TimelineContent = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }
  
  h3 {
    color: #f8fafc;
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
    font-weight: 600;
  }
  
  .company {
    color: #00d4ff;
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  .duration {
    color: #cbd5e1;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;

    svg {
      color: #7c3aed;
    }
  }

  .location {
    color: #cbd5e1;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;

    svg {
      color: #7c3aed;
    }
  }
  
  .description {
    color: #94a3b8;
    line-height: 1.6;
    
    ul {
      list-style: none;
      padding: 0;
      
      li {
        margin-bottom: 0.5rem;
        position: relative;
        padding-left: 1.2rem;
        
        &::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #00d4ff;
          font-weight: bold;
        }
      }
    }
  }
`;

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Techcompiler Data System Pvt. Ltd.",
      duration: "June 2023 – Present",
      location: "Noida, UP",
      description: [
        "Developed cross-platform mobile applications using React Native",
        "Worked closely with backend developers to integrate frontend with backend services",
        "Collaborated with design team to implement intuitive and visually appealing user interfaces",
        "Optimized mobile applications for maximum speed and scalability",
        "Developed and maintained codebases for multiple platforms (iOS, Android)"
      ]
    }
  ];

  return (
    <ExperienceSection id="experience">
      <ParticleBackground />
      <ExperienceContainer>
        <SectionTitle>Professional Journey</SectionTitle>
        <SectionSubtitle>
          My experience in mobile application development and software engineering
        </SectionSubtitle>
        
        <ExperienceGrid>
          <ExperienceCard>
            <CardIcon>
              <FaMobile />
            </CardIcon>
            <StatNumber>2+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </ExperienceCard>
          <ExperienceCard>
            <CardIcon>
              <FaCode />
            </CardIcon>
            <StatNumber>10+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </ExperienceCard>
          <ExperienceCard>
            <CardIcon>
              <FaRocket />
            </CardIcon>
            <StatNumber>5+</StatNumber>
            <StatLabel>Apps Published</StatLabel>
          </ExperienceCard>
        </ExperienceGrid>

        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineIcon>
                <FaMobile />
              </TimelineIcon>
              <TimelineContent>
                <h3>{exp.title}</h3>
                <div className="company">{exp.company}</div>
                <div className="duration">
                  <FaCalendar />
                  {exp.duration}
                </div>
                <div className="location">
                  <FaMapMarkerAlt />
                  {exp.location}
                </div>
                <div className="description">
                  <ul>
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;