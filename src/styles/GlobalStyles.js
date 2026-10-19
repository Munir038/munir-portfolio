import styled, { createGlobalStyle, keyframes } from 'styled-components';

// Enhanced Animations
export const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

export const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.5),
                0 0 40px rgba(124, 58, 237, 0.3); 
  }
  50% { 
    box-shadow: 0 0 40px rgba(124, 58, 237, 0.8),
                0 0 80px rgba(0, 212, 255, 0.6); 
  }
`;

export const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

export const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const typewriter = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

export const blinkCaret = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: #00d4ff; }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
`;

export const fillBar = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const morph = keyframes`
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
`;

export const slideUp = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const pulseGlow = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(0, 212, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 212, 255, 0);
  }
`;

// Global Styles
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    line-height: 1.6;
    color: #e2e8f0;
    overflow-x: hidden;
    background: #0a0a0f;
    padding-bottom: 120px;
    
    @media (max-width: 768px) {
      padding-bottom: 100px;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  .section-title {
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #ff6b6b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    font-weight: 800;
    letter-spacing: -1px;
    animation: ${slideInUp} 1s ease-out;

    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 5px;
      background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
      border-radius: 3px;
      animation: ${slideInUp} 1s ease-out 0.3s both;
    }

    @media (max-width: 768px) {
      font-size: 2.8rem;
    }
  }

  .section-subtitle {
    font-size: 1.3rem;
    text-align: center;
    color: #94a3b8;
    max-width: 700px;
    margin: 2rem auto 4rem;
    line-height: 1.7;
    font-weight: 400;
    animation: ${slideInUp} 1s ease-out 0.5s both;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 3rem;
    }
  }

  /* Enhanced scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #0f0f23;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
    border-radius: 10px;
    border: 2px solid #0f0f23;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #00c4ff 0%, #6d28d9 100%);
  }

  /* Selection styles */
  ::selection {
    background: rgba(0, 212, 255, 0.3);
    color: white;
  }

  /* Focus styles */
  *:focus {
    outline: 2px solid #00d4ff;
    outline-offset: 2px;
  }

  /* Smooth transitions for all interactive elements */
  a, button, .interactive {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Magnetic hover effect */
  .magnetic:hover {
    transform: scale(1.05);
    transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  .float-hover:hover {
    animation: ${float} 3s ease-in-out infinite;
  }
  
  .glow-hover:hover {
    box-shadow: 0 0 30px rgba(124, 58, 237, 0.4);
    transition: box-shadow 0.3s ease;
  }

  /* Loading animation */
  @keyframes shimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }

  .shimmer {
    animation: shimmer 2s infinite linear;
    background: linear-gradient(to right, #1a1a2e 8%, #16213e 18%, #1a1a2e 33%);
    background-size: 800px 104px;
  }

  /* Particle canvas styles */
  .particle-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  /* Bottom Navigation responsive styles */
  @media (max-width: 480px) {
    .nav-item .label {
      display: none;
    }
    
    .nav-item .icon {
      font-size: 1.4rem;
    }
  }

  /* Hide bottom nav on print */
  @media print {
    .bottom-nav {
      display: none !important;
    }
  }
`;

export default GlobalStyles;