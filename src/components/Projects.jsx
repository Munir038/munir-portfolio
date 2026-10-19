import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaApple, FaAndroid, FaMobile, FaRocket, FaBell } from 'react-icons/fa';

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

const ProjectsSection = styled.section`
  background: linear-gradient(135deg, #0a0a0f 0%, #0f0f23 50%, #1a1a2e 100%);
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const ProjectsContainer = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  opacity: 0;
  animation: ${fadeInUp} 1s ease 0.6s forwards;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
    border-color: rgba(0, 212, 255, 0.2);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(0, 212, 255, 0.2) 100%);

  &::before {
    content: '${props => props.emoji || '📱'}';
    font-size: 3.5rem;
    opacity: 0.8;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const PlatformIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  svg {
    font-size: 1.1rem;
    color: #cbd5e1;
  }

  .ios {
    color: #00d4ff;
  }

  .android {
    color: #7c3aed;
  }
`;

const ProjectTitle = styled.h3`
  color: #f8fafc;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: #94a3b8;
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const ProjectHighlights = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
    color: #cbd5e1;
    line-height: 1.5;
    font-size: 0.9rem;
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
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(124, 58, 237, 0.15);
  color: #cbd5e1;
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(124, 58, 237, 0.3);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex: 1;
  justify-content: center;
  font-size: 0.9rem;

  &:hover {
    color: #f8fafc;
    background: rgba(0, 212, 255, 0.1);
    border-color: rgba(0, 212, 255, 0.3);
  }

  svg {
    font-size: 0.9rem;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Certified Safe Driver",
      description: "A comprehensive driver training and certification mobile application with advanced features for companies, instructors, and drivers.",
      platforms: ['ios', 'android'],
      emoji: '🚗',
      highlights: [
        "Improved performance by 25% and reduced load times by 30%",
        "Bearer Token Authorization with secure token-based authentication",
        "Driver Vehicle Inspection Report (DVIR) with dynamic PDF generation",
        "Redux state management improving performance and scalability by 20%"
      ],
      tech: ['React Native', 'Redux', 'TypeScript', 'REST APIs', 'PDF Generation', 'Firebase'],
      github: "https://github.com/munir038",
      demo: "#"
    },
    {
      title: "Paymate Time Clock",
      description: "Employee time tracking system with facial recognition authentication and multi-language support for global workforce management.",
      platforms: ['ios', 'android'],
      emoji: '⏰',
      highlights: [
        "Azure Facial Recognition API with PIN authentication",
        "Offline support with data synchronization",
        "Multi-language support (English, Spanish, French)",
        "Real-time activity logging and reporting"
      ],
      tech: ['React Native', 'Azure Face API', 'Offline Storage', 'Multi-language', 'Redux'],
      github: "https://github.com/munir038",
      demo: "#"
    },
    {
      title: "Aspedan – Health & Wellness Platform",
      description:
        "A comprehensive digital health application that integrates smart medical devices, lab testing services, wearable activity tracking, and in-app health product purchases with secure payments.",
      platforms: ['ios', 'android'],
      emoji: '❤️',
      highlights: [
        "Bluetooth integration with BP machines and smart weight scales for real-time vitals tracking",
        "Support for multiple medical tests including blood tests and genetic testing",
        "In-app marketplace for health-related products with seamless order management",
        "Secure payments implemented using Stripe",
        "Wearable integrations including Garmin, Apple Watch, Fitbit, Oura, and Whoop",
        "Activity tracking with social sharing for friends and family",
        "Smart reminders and notifications for BP checks, health routines, and test schedules"
      ],
      tech: [
        'React Native',
        'Bluetooth Low Energy (BLE)',
        'Stripe Payment Gateway',
        'Firebase',
        'Push Notifications',
        'REST APIs',
        'Redux',
        'Health APIs',
        'Wearable Integrations'
      ],
      github: "https://github.com/munir038",
      demo: "#"
    },
    {
      title: "EmergeAI – Local AI Assistant",
      description:
        "An AI-powered chat application where users manage private local clouds with multiple chats and projects stored locally in Realm database, while AI responses are fetched from endpoints online.",
      platforms: ['ios', 'android'],
      emoji: '🤖',
      highlights: [
        "Local cloud system storing multiple chats and projects privately in Realm database",
        "Users can create, edit, archive, pin, and delete chats and projects locally",
        "Messages sent to AI endpoints and responses stored locally for full conversation history",
        "Media file support with secure local storage",
        "Dual-cloud model: server-based clouds support multi-user collaboration, local clouds remain private",
        "Emphasis on user privacy and control, with all local data managed entirely on-device"
      ],
      tech: [
        'React Native',
        'Realm Database',
        'REST APIs',
        'AI Endpoint Integration',
        'Media Handling',
        'Local Data Storage'
      ],
      github: "https://github.com/munir038",
      demo: "#"
    },
    {
      title: "Social Security Law Group",
      description: "Claimant management mobile application for SSD benefits, enabling handlers to assign instructions and claimants to submit video, audio, and text updates securely.",
      platforms: ['ios', 'android'],
      emoji: '⚖️',
      highlights: [
        "Claimant-focused system to manage case details, add doctors, and log doctor visits",
        "Role-based workflow: handlers assign video instructions via portal; claimants view and respond through the app",
        "Asynchronous media communication: users can record and submit video, audio, and text messages",
        "Firebase Cloud Messaging (FCM) for notifying claimants about new instructions and updates",
        "Secure media upload and storage for audio/video messages and documents",
        "Cross-platform optimization ensuring consistent performance on iOS and Android",
        "Streamlined workflow enhancing interaction between claimants and handlers"
      ],
      tech: ['React Native', 'Firebase', 'Push Notifications', 'Realm Database', 'REST APIs', 'Async Storage'],
      github: "https://github.com/munir038",
      demo: "#"
    },
    {
      title: "JAINVANI – Jain Community News App",
      description:
        "A dedicated news platform for the Jain community delivering concise 60-word news, video updates, and localized content across multiple languages and cities.",
      platforms: ['ios', 'android'],
      emoji: '📰',
      highlights: [
        "Short-form 60-word news format for quick and meaningful updates",
        "Video news support for richer community engagement",
        "Multi-language support including English, Hindi, Marathi, Gujarati, and Kannada",
        "City-based news filtering for hyperlocal Jain community updates",
        "Optimized performance for fast content loading on mobile devices"
      ],
      tech: [
        'React Native',
        'Multi-language (i18n)',
        'Video Streaming',
        'REST APIs',
        'Redux',
        'Firebase'
      ],
      github: "https://github.com/munir038",
      demo: "#"
    },
    {
      title: "Notification & Cron Backend Service",
      description:
        "A scalable Node.js backend system designed to handle scheduled cron jobs and real-time push notifications for iOS and Android applications using Firebase Cloud Messaging.",
      platforms: ['ios', 'android'],
      emoji: '🚀',
      highlights: [
        "Scheduled cron jobs for automated and time-based notifications",
        "Firebase Cloud Messaging (FCM) integration for iOS and Android",
        "Role-based notification triggers for different user types",
        "Optimized background jobs to handle high-volume notifications",
        "Secure REST APIs for notification management and scheduling"
      ],
      tech: [
        'Node.js',
        'Express.js',
        'Firebase Admin SDK',
        'Cron Jobs',
        'REST APIs',
        'JWT Authentication',
        'MongoDB'
      ],
      github: "https://github.com/munir038",
      demo: "#"
    }


  ];

  return (
    <ProjectsSection id="projects">
      <ParticleBackground />
      <ProjectsContainer>
        <SectionTitle>Featured Projects</SectionTitle>
        <SectionSubtitle>
          Real-world applications demonstrating my React Native expertise
        </SectionSubtitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage emoji={project.emoji} />
              <ProjectContent>
                <PlatformIcons>
                  {project.platforms.includes('ios') && <FaApple className="ios" />}
                  {project.platforms.includes('android') && <FaAndroid className="android" />}
                </PlatformIcons>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>

                <ProjectHighlights>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ProjectHighlights>

                <ProjectTech>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </ProjectTech>

                {/* <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    Source Code
                  </ProjectLink>
                  <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                    Live Demo
                  </ProjectLink>
                </ProjectLinks> */}
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;