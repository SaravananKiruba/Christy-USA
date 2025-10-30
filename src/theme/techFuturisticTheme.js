import { extendTheme } from '@chakra-ui/react';

// TECH FUTURISTIC - Dark, Cyberpunk, Neon Design
const techFuturisticTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#E0FFFF',
      100: '#B3FFFF',
      200: '#80FFFF',
      300: '#4DFFFF',
      400: '#1AFFFF',
      500: '#00E5E5', // Cyan
      600: '#00CCCC',
      700: '#00B3B3',
      800: '#009999',
      900: '#008080',
    },
    neon: {
      cyan: '#00FFFF',
      magenta: '#FF00FF',
      green: '#00FF88',
      yellow: '#FFFF00',
      blue: '#0088FF',
      pink: '#FF0088',
    },
    dark: {
      bg: '#0A0A0F',
      surface: '#12121A',
      card: '#1A1A2E',
      border: '#252538',
      hover: '#2A2A3E',
      text: '#E0E0FF',
      textSecondary: '#9090B0',
    },
  },
  fonts: {
    heading: '"Orbitron", "Rajdhani", "Inter", monospace, sans-serif',
    body: '"Rajdhani", "Inter", -apple-system, BlinkMacSystemFont, monospace, sans-serif',
    mono: '"Fira Code", "Courier New", monospace',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.75rem',
    '5xl': '3.5rem',
    '6xl': '4.5rem',
    '7xl': '6rem',
  },
  shadows: {
    sm: '0 0 10px rgba(0, 229, 229, 0.3)',
    base: '0 0 15px rgba(0, 229, 229, 0.4)',
    md: '0 0 20px rgba(0, 229, 229, 0.5)',
    lg: '0 0 30px rgba(0, 229, 229, 0.6)',
    xl: '0 0 40px rgba(0, 229, 229, 0.7)',
    '2xl': '0 0 60px rgba(0, 229, 229, 0.8)',
    neonCyan: '0 0 20px rgba(0, 255, 255, 0.8)',
    neonMagenta: '0 0 20px rgba(255, 0, 255, 0.8)',
    neonGreen: '0 0 20px rgba(0, 255, 136, 0.8)',
  },
  styles: {
    global: {
      body: {
        bg: '#0A0A0F',
        color: 'dark.text',
        lineHeight: 'tall',
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(0, 229, 229, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.05) 0%, transparent 50%),
          linear-gradient(180deg, #0A0A0F 0%, #12121A 100%)
        `,
        backgroundAttachment: 'fixed',
      },
      '*::placeholder': {
        color: 'dark.textSecondary',
      },
      '*, *::before, &::after': {
        borderColor: 'dark.border',
      },
      '@keyframes scan': {
        '0%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(100%)' },
      },
      '@keyframes glitch': {
        '0%': { transform: 'translate(0)' },
        '20%': { transform: 'translate(-2px, 2px)' },
        '40%': { transform: 'translate(-2px, -2px)' },
        '60%': { transform: 'translate(2px, 2px)' },
        '80%': { transform: 'translate(2px, -2px)' },
        '100%': { transform: 'translate(0)' },
      },
      '@keyframes glow': {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0.5 },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontFamily: 'heading',
      },
      variants: {
        solid: {
          bg: 'transparent',
          color: 'neon.cyan',
          border: '2px solid',
          borderColor: 'neon.cyan',
          position: 'relative',
          overflow: 'hidden',
          _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            bg: 'neon.cyan',
            opacity: 0.1,
            transition: 'left 0.3s ease',
          },
          _hover: {
            bg: 'rgba(0, 229, 229, 0.1)',
            boxShadow: 'neonCyan',
            transform: 'translateY(-2px)',
            _before: {
              left: 0,
            },
          },
          _active: {
            transform: 'translateY(0)',
          },
          transition: 'all 0.3s ease',
        },
        outline: {
          borderWidth: '2px',
          borderColor: 'neon.magenta',
          color: 'neon.magenta',
          _hover: {
            bg: 'rgba(255, 0, 255, 0.1)',
            boxShadow: 'neonMagenta',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: 'dark.text',
        textShadow: '0 0 10px rgba(0, 229, 229, 0.5)',
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'dark.card',
          borderRadius: 'lg',
          boxShadow: 'md',
          p: 6,
          border: '1px solid',
          borderColor: 'dark.border',
          position: 'relative',
          overflow: 'hidden',
          _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            bg: 'linear-gradient(90deg, transparent, neon.cyan, transparent)',
          },
          _after: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '2px',
            height: '100%',
            bg: 'linear-gradient(180deg, transparent, neon.cyan, transparent)',
          },
          _hover: {
            borderColor: 'neon.cyan',
            boxShadow: 'lg',
          },
        },
      },
    },
  },
});

export default techFuturisticTheme;
