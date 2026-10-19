import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaReact, FaJs, FaMobile, FaDatabase, FaApple, FaAndroid, FaGitAlt, FaNodeJs, FaCode } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiExpo, SiStyledcomponents, SiXcode, SiAndroidstudio, SiPostman, SiHasura, SiSwift, SiDart} from 'react-icons/si';

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

const SkillsSection = styled.section`
  background: linear-gradient(135deg, #0a0a0f 0%, #0f0f23 50%, #1a1a2e 100%);
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const SkillsContainer = styled.div`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  opacity: 0;
  animation: ${fadeInUp} 1s ease 0.6s forwards;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SkillCategory = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
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

const SkillTitle = styled.h3`
  color: #f8fafc;
  margin-bottom: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1.3rem;
  font-weight: 600;

  svg {
    background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 1.5rem;
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(124, 58, 237, 0.2);
    transform: translateX(3px);
  }

  svg {
    font-size: 1.5rem;
    background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    flex-shrink: 0;
  }
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.div`
  font-weight: 500;
  color: #f8fafc;
  font-size: 1rem;
`;

const SkillPercentage = styled.div`
  font-weight: 600;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 0.8rem;
`;

const SkillBar = styled.div`
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const SkillLevel = styled.div`
  height: 100%;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  width: ${props => props.level}%;
  border-radius: 10px;
  transition: width 1s ease-in-out;
`;

const Skills = () => {
  const skills = {
    languages: [
      { name: 'JavaScript (ES6+)', level: 90, icon: <FaJs /> },
      { name: 'TypeScript', level: 85, icon: <SiTypescript /> },
      { name: 'Swift', level: 70, icon: <SiSwift /> },
    { name: 'Dart', level: 70, icon: <SiDart /> },
      { name: 'Java', level: 75, icon: <FaAndroid /> },
      { name: 'HTML/CSS', level: 88, icon: <SiStyledcomponents /> },
    ],
    technologies: [
      { name: 'React Native', level: 95, icon: <FaReact /> },
      { name: 'React.js', level: 85, icon: <FaReact /> },
      { name: 'Node.js', level: 80, icon: <FaNodeJs /> },
      { name: 'Redux/Redux Toolkit', level: 88, icon: <SiRedux /> },
    ],
    tools: [
      { name: 'Git & GitHub', level: 90, icon: <FaGitAlt /> },
      { name: 'Xcode', level: 80, icon: <SiXcode /> },
      { name: 'Android Studio', level: 85, icon: <SiAndroidstudio /> },
      { name: 'Postman', level: 88, icon: <SiPostman /> },
      { name: 'Hasura Cloud', level: 75, icon: <SiHasura /> },
      { name: 'Expo', level: 90, icon: <SiExpo /> },
    ],
    concepts: [
      { name: 'React Navigation', level: 92, icon: <FaMobile /> },
      { name: 'Firebase', level: 85, icon: <FaDatabase /> },
      { name: 'Async Storage', level: 88, icon: <FaDatabase /> },
      { name: 'CodePush', level: 80, icon: <FaMobile /> },
    ]
  };

  return (
    <SkillsSection id="skills">
      <ParticleBackground />
      <SkillsContainer>
        <SectionTitle>Technical Skills</SectionTitle>
        <SectionSubtitle>
          Comprehensive expertise in mobile development technologies and tools
        </SectionSubtitle>
        
        <SkillsGrid>
          <SkillCategory>
            <SkillTitle>
              <FaCode />
              Languages
            </SkillTitle>
            <SkillList>
              {skills.languages.map((skill, index) => (
                <SkillItem key={index}>
                  {skill.icon}
                  <SkillInfo>
                    <SkillHeader>
                      <SkillName>{skill.name}</SkillName>
                      <SkillPercentage>{skill.level}%</SkillPercentage>
                    </SkillHeader>
                    <SkillBar>
                      <SkillLevel level={skill.level} />
                    </SkillBar>
                  </SkillInfo>
                </SkillItem>
              ))}
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>
              <FaReact />
              Technologies
            </SkillTitle>
            <SkillList>
              {skills.technologies.map((skill, index) => (
                <SkillItem key={index}>
                  {skill.icon}
                  <SkillInfo>
                    <SkillHeader>
                      <SkillName>{skill.name}</SkillName>
                      <SkillPercentage>{skill.level}%</SkillPercentage>
                    </SkillHeader>
                    <SkillBar>
                      <SkillLevel level={skill.level} />
                    </SkillBar>
                  </SkillInfo>
                </SkillItem>
              ))}
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>
              <FaGitAlt />
              Tools & Platforms
            </SkillTitle>
            <SkillList>
              {skills.tools.map((skill, index) => (
                <SkillItem key={index}>
                  {skill.icon}
                  <SkillInfo>
                    <SkillHeader>
                      <SkillName>{skill.name}</SkillName>
                      <SkillPercentage>{skill.level}%</SkillPercentage>
                    </SkillHeader>
                    <SkillBar>
                      <SkillLevel level={skill.level} />
                    </SkillBar>
                  </SkillInfo>
                </SkillItem>
              ))}
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>
              <FaDatabase />
              Concepts & Libraries
            </SkillTitle>
            <SkillList>
              {skills.concepts.map((skill, index) => (
                <SkillItem key={index}>
                  {skill.icon}
                  <SkillInfo>
                    <SkillHeader>
                      <SkillName>{skill.name}</SkillName>
                      <SkillPercentage>{skill.level}%</SkillPercentage>
                    </SkillHeader>
                    <SkillBar>
                      <SkillLevel level={skill.level} />
                    </SkillBar>
                  </SkillInfo>
                </SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;