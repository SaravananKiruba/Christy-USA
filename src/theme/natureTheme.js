import { extendTheme } from '@chakra-ui/react';

// Organic Nature Theme
const natureTheme = extendTheme({
  colors: {
    nature: {
      primary: '#2d5016',
      secondary: '#8fbc8f',
      accent: '#ff6b35',
      background: '#f8f8f2',
      surface: '#ffffff',
      card: '#fefefe',
      border: '#e8e5e0',
      text: '#2d5016',
      textSecondary: '#5a7c65',
      leaf: '#4a7c59',
      earth: '#8b4513',
      sky: '#87ceeb',
      flower: '#ff69b4',
    },
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Lora', serif",
  },
  styles: {
    global: {
      body: {
        background: 'linear-gradient(to bottom, #e8f5e8 0%, #f0f8f0 50%, #f8fdf8 100%)',
        minHeight: '100vh',
        fontFamily: 'Lora, serif',
        color: '#2d5016',
      },
      '@keyframes leafFloat': {
        '0%, 100%': {
          transform: 'translateY(0px) rotate(0deg)',
        },
        '33%': {
          transform: 'translateY(-10px) rotate(2deg)',
        },
        '66%': {
          transform: 'translateY(5px) rotate(-1deg)',
        },
      },
      '@keyframes flowerBloom': {
        '0%': {
          transform: 'scale(0.8) rotate(-5deg)',
          opacity: 0.7,
        },
        '50%': {
          transform: 'scale(1.1) rotate(2deg)',
          opacity: 1,
        },
        '100%': {
          transform: 'scale(1) rotate(0deg)',
          opacity: 0.9,
        },
      },
    },
  },
  components: {
    Box: {
      variants: {
        nature: {
          background: 'rgba(255, 255, 255, 0.8)',
          border: '2px solid transparent',
          borderRadius: '25px',
          boxShadow: '0 10px 30px rgba(45, 80, 22, 0.1)',
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(45, 80, 22, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(143, 188, 143, 0.05) 0%, transparent 50%)
          `,
          position: 'relative',
          _before: {
            content: '""',
            position: 'absolute',
            top: -2,
            left: -2,
            right: -2,
            bottom: -2,
            background: 'linear-gradient(45deg, #8fbc8f, #ff6b35, #4a7c59, #8fbc8f)',
            borderRadius: '25px',
            zIndex: -1,
            opacity: 0.6,
          },
        },
        natureCard: {
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '20px',
          boxShadow: '0 8px 25px rgba(45, 80, 22, 0.15)',
          border: '1px solid rgba(143, 188, 143, 0.3)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          _hover: {
            transform: 'translateY(-5px) scale(1.02)',
            boxShadow: '0 15px 40px rgba(45, 80, 22, 0.2)',
            _after: {
              opacity: 1,
            },
          },
          _after: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 30% 30%, rgba(255, 107, 53, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 70% 70%, rgba(74, 124, 89, 0.1) 0%, transparent 40%)
            `,
            opacity: 0,
            transition: 'opacity 0.4s ease',
          },
        },
      },
    },
    Button: {
      variants: {
        nature: {
          background: 'linear-gradient(135deg, #8fbc8f 0%, #4a7c59 100%)',
          color: 'white',
          borderRadius: '50px',
          border: 'none',
          fontFamily: 'Playfair Display, serif',
          fontWeight: '600',
          boxShadow: '0 4px 15px rgba(74, 124, 89, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          _hover: {
            background: 'linear-gradient(135deg, #4a7c59 0%, #2d5016 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(74, 124, 89, 0.4)',
          },
          _active: {
            transform: 'translateY(0)',
          },
        },
      },
    },
    Heading: {
      variants: {
        nature: {
          color: '#2d5016',
          fontFamily: 'Playfair Display, serif',
          fontWeight: '700',
          textShadow: '0 2px 4px rgba(45, 80, 22, 0.1)',
          position: 'relative',
        },
      },
    },
    Text: {
      variants: {
        nature: {
          color: '#5a7c65',
          fontFamily: 'Lora, serif',
          lineHeight: '1.7',
        },
        natureAccent: {
          color: '#ff6b35',
          fontWeight: '600',
        },
      },
    },
  },
});

export default natureTheme;