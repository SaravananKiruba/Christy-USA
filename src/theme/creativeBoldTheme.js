import { extendTheme } from '@chakra-ui/react';

// CREATIVE BOLD - Vibrant, Colorful, Playful Design
const creativeBoldTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#FFF1F2',
      100: '#FFE4E6',
      200: '#FECDD3',
      300: '#FDA4AF',
      400: '#FB7185',
      500: '#F43F5E', // Main pink/red
      600: '#E11D48',
      700: '#BE123C',
      800: '#9F1239',
      900: '#881337',
    },
    purple: {
      50: '#FAF5FF',
      100: '#F3E8FF',
      200: '#E9D5FF',
      300: '#D8B4FE',
      400: '#C084FC',
      500: '#A855F7',
      600: '#9333EA',
      700: '#7E22CE',
      800: '#6B21A8',
      900: '#581C87',
    },
    orange: {
      50: '#FFF7ED',
      100: '#FFEDD5',
      200: '#FED7AA',
      300: '#FDBA74',
      400: '#FB923C',
      500: '#F97316',
      600: '#EA580C',
      700: '#C2410C',
      800: '#9A3412',
      900: '#7C2D12',
    },
    teal: {
      50: '#F0FDFA',
      100: '#CCFBF1',
      200: '#99F6E4',
      300: '#5EEAD4',
      400: '#2DD4BF',
      500: '#14B8A6',
      600: '#0D9488',
      700: '#0F766E',
      800: '#115E59',
      900: '#134E4A',
    },
  },
  fonts: {
    heading: '"Poppins", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.375rem',
    '2xl': '1.75rem',
    '3xl': '2.25rem',
    '4xl': '3rem',
    '5xl': '4rem',
    '6xl': '5rem',
    '7xl': '6rem',
  },
  shadows: {
    sm: '0 2px 8px rgba(244, 63, 94, 0.1)',
    base: '0 4px 12px rgba(244, 63, 94, 0.15)',
    md: '0 8px 24px rgba(244, 63, 94, 0.2)',
    lg: '0 16px 40px rgba(244, 63, 94, 0.25)',
    xl: '0 24px 56px rgba(244, 63, 94, 0.3)',
    '2xl': '0 32px 72px rgba(244, 63, 94, 0.35)',
    purple: '0 8px 24px rgba(168, 85, 247, 0.25)',
    orange: '0 8px 24px rgba(249, 115, 22, 0.25)',
    teal: '0 8px 24px rgba(20, 184, 166, 0.25)',
  },
  styles: {
    global: {
      'html, body': {
        scrollBehavior: 'smooth',
      },
      body: {
        bg: 'linear-gradient(135deg, #FFF1F2 0%, #FAF5FF 50%, #F0FDFA 100%)',
        color: 'gray.800 !important',
        lineHeight: 'tall',
      },
      '*::placeholder': {
        color: 'gray.400',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: '2xl',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        fontSize: 'sm',
      },
      variants: {
        solid: {
          bgGradient: 'linear(to-r, brand.500, purple.500)',
          color: 'white',
          _hover: {
            bgGradient: 'linear(to-r, brand.600, purple.600)',
            transform: 'translateY(-4px) scale(1.05)',
            boxShadow: '2xl',
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        outline: {
          borderWidth: '2px',
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
            transform: 'translateY(-4px) rotate(-2deg)',
            boxShadow: 'lg',
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'extrabold',
        letterSpacing: '-0.03em',
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'white',
          borderRadius: '3xl',
          boxShadow: 'lg',
          p: 8,
          border: '3px solid',
          borderColor: 'transparent',
          bgGradient: 'linear(to-br, white, purple.50)',
          position: 'relative',
          overflow: 'hidden',
          _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            bgGradient: 'linear(to-r, brand.500, purple.500, orange.500, teal.500)',
          },
        },
      },
    },
  },
});

export default creativeBoldTheme;
