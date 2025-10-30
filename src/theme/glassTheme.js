import { extendTheme } from '@chakra-ui/react';

// Minimalist Glassmorphism Theme
const glassTheme = extendTheme({
  colors: {
    glass: {
      primary: 'rgba(255, 255, 255, 0.25)',
      secondary: 'rgba(255, 255, 255, 0.1)',
      accent: 'rgba(99, 102, 241, 0.8)',
      text: '#1a202c',
      textLight: '#4a5568',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      card: 'rgba(255, 255, 255, 0.15)',
      border: 'rgba(255, 255, 255, 0.2)',
    },
  },
  fonts: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  styles: {
    global: {
      body: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        fontFamily: 'Inter, sans-serif',
      },
    },
  },
  components: {
    Box: {
      variants: {
        glass: {
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        },
        glassCard: {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '16px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          _hover: {
            background: 'rgba(255, 255, 255, 0.2)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    Button: {
      variants: {
        glass: {
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: 'white',
          borderRadius: '50px',
          _hover: {
            background: 'rgba(255, 255, 255, 0.3)',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          },
          _active: {
            transform: 'translateY(0)',
          },
        },
      },
    },
    Heading: {
      variants: {
        glass: {
          color: 'white',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          fontWeight: '700',
        },
      },
    },
    Text: {
      variants: {
        glass: {
          color: 'rgba(255, 255, 255, 0.9)',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default glassTheme;