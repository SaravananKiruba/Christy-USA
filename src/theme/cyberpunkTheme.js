import { extendTheme } from '@chakra-ui/react';

// Cyberpunk Neon Theme
const cyberpunkTheme = extendTheme({
  colors: {
    cyber: {
      primary: '#00ff88',
      secondary: '#ff0088',
      accent: '#00aaff',
      background: '#0a0a0a',
      surface: '#1a1a1a',
      card: '#1e1e1e',
      border: '#333',
      text: '#00ff88',
      textSecondary: '#888',
      neonGreen: '#00ff88',
      neonPink: '#ff0088',
      neonBlue: '#00aaff',
      neonPurple: '#aa00ff',
    },
  },
  fonts: {
    heading: "'Orbitron', 'Courier New', monospace",
    body: "'Rajdhani', 'Courier New', monospace",
  },
  styles: {
    global: {
      body: {
        background: 'radial-gradient(circle at 50% 50%, #1a0033 0%, #000000 100%)',
        minHeight: '100vh',
        fontFamily: 'Rajdhani, monospace',
        color: '#00ff88',
      },
      '@keyframes neonGlow': {
        '0%, 100%': {
          textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor',
        },
        '50%': {
          textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor',
        },
      },
      '@keyframes gridMove': {
        '0%': { backgroundPosition: '0 0' },
        '100%': { backgroundPosition: '50px 50px' },
      },
    },
  },
  components: {
    Box: {
      variants: {
        cyber: {
          background: 'rgba(0, 255, 136, 0.05)',
          border: '1px solid #00ff88',
          borderRadius: '0',
          boxShadow: '0 0 20px rgba(0, 255, 136, 0.3), inset 0 0 20px rgba(0, 255, 136, 0.1)',
          position: 'relative',
          _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              linear-gradient(90deg, transparent 98%, #00ff88 100%),
              linear-gradient(0deg, transparent 98%, #00ff88 100%)
            `,
            backgroundSize: '20px 20px',
            opacity: 0.3,
            animation: 'gridMove 2s linear infinite',
          },
        },
        cyberCard: {
          background: 'linear-gradient(145deg, rgba(0, 255, 136, 0.1), rgba(255, 0, 136, 0.1))',
          border: '1px solid',
          borderImage: 'linear-gradient(45deg, #00ff88, #ff0088) 1',
          borderRadius: '0',
          boxShadow: '0 0 30px rgba(0, 255, 136, 0.2)',
          transition: 'all 0.3s ease',
          _hover: {
            boxShadow: '0 0 40px rgba(0, 255, 136, 0.4), 0 0 60px rgba(255, 0, 136, 0.2)',
            transform: 'scale(1.02)',
          },
        },
      },
    },
    Button: {
      variants: {
        cyber: {
          background: 'transparent',
          border: '2px solid #00ff88',
          color: '#00ff88',
          borderRadius: '0',
          textTransform: 'uppercase',
          fontFamily: 'Orbitron, monospace',
          fontWeight: 'bold',
          textShadow: '0 0 10px currentColor',
          _hover: {
            background: 'rgba(0, 255, 136, 0.1)',
            boxShadow: '0 0 20px #00ff88, inset 0 0 20px rgba(0, 255, 136, 0.1)',
            textShadow: '0 0 20px currentColor',
          },
          _active: {
            background: 'rgba(0, 255, 136, 0.2)',
          },
        },
      },
    },
    Heading: {
      variants: {
        cyber: {
          color: '#00ff88',
          fontFamily: 'Orbitron, monospace',
          textTransform: 'uppercase',
          textShadow: '0 0 10px currentColor',
          animation: 'neonGlow 2s ease-in-out infinite alternate',
        },
      },
    },
    Text: {
      variants: {
        cyber: {
          color: '#888',
          fontFamily: 'Rajdhani, monospace',
          fontSize: '18px',
        },
        cyberAccent: {
          color: '#00aaff',
          textShadow: '0 0 5px currentColor',
        },
      },
    },
  },
});

export default cyberpunkTheme;