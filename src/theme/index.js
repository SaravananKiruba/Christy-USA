import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: {
    50: '#E6F6FF',
    100: '#BAE3FF',
    200: '#7CC4FA',
    300: '#47A3F3',
    400: '#2186EB',
    500: '#0070F3',
    600: '#0060DF',
    700: '#0051B4',
    800: '#00419D',
    900: '#003280',
  },
  secondary: {
    50: '#FAF5FF',
    100: '#E9D8FD',
    200: '#D6BCFA',
    300: '#B794F6',
    400: '#9F7AEA',
    500: '#7928CA',
    600: '#6421A8',
    700: '#553C9A',
    800: '#44337A',
    900: '#322659',
  },
  accent: {
    50: '#FFE5F0',
    100: '#FFB8D9',
    200: '#FF8AC2',
    300: '#FF5CAB',
    400: '#FF2E94',
    500: '#FF0080',
    600: '#DB006D',
    700: '#B7005A',
    800: '#930047',
    900: '#6F0034',
  },
  dark: {
    bg: '#0A0E27',
    surface: '#1A1F3A',
    card: '#252B4A',
    border: '#2D3454',
    text: '#E4E4E7',
    textSecondary: '#A1A1AA',
  },
};

const fonts = {
  heading: `'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
  body: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
  mono: `'JetBrains Mono', Menlo, Monaco, Consolas, "Courier New", monospace`,
};

const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'dark.bg' : 'gray.50',
      color: props.colorMode === 'dark' ? 'dark.text' : 'gray.800',
      fontFamily: 'body',
    },
    '*::placeholder': {
      color: props.colorMode === 'dark' ? 'dark.textSecondary' : 'gray.400',
    },
    '*, *::before, &::after': {
      borderColor: props.colorMode === 'dark' ? 'dark.border' : 'gray.200',
    },
    html: {
      scrollBehavior: 'smooth',
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: '600',
      borderRadius: 'lg',
    },
    variants: {
      primary: (props) => ({
        bg: 'primary.500',
        color: 'white',
        _hover: {
          bg: 'primary.600',
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        },
        _active: {
          bg: 'primary.700',
          transform: 'translateY(0)',
        },
        transition: 'all 0.3s ease',
      }),
      secondary: {
        bg: 'secondary.500',
        color: 'white',
        _hover: {
          bg: 'secondary.600',
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        },
        transition: 'all 0.3s ease',
      },
      outline: (props) => ({
        borderColor: props.colorMode === 'dark' ? 'dark.border' : 'gray.300',
        _hover: {
          bg: props.colorMode === 'dark' ? 'dark.surface' : 'gray.50',
          transform: 'translateY(-2px)',
        },
        transition: 'all 0.3s ease',
      }),
    },
  },
  Card: {
    baseStyle: (props) => ({
      container: {
        bg: props.colorMode === 'dark' ? 'dark.surface' : 'white',
        borderRadius: 'xl',
        boxShadow: props.colorMode === 'dark' ? 'dark-lg' : 'lg',
        transition: 'all 0.3s ease',
        _hover: {
          transform: 'translateY(-8px)',
          boxShadow: '2xl',
        },
      },
    }),
  },
  Heading: {
    baseStyle: {
      fontFamily: 'heading',
      fontWeight: '700',
    },
  },
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: 'none',
      },
    },
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const shadows = {
  'dark-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.5)',
  'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
  'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
  'dark-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
  'dark-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
  glow: '0 0 20px rgba(0, 112, 243, 0.4)',
  glowPurple: '0 0 20px rgba(121, 40, 202, 0.4)',
};

const theme = extendTheme({
  colors,
  fonts,
  styles,
  components,
  config,
  shadows,
  space: {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
});

// Template definitions
export const TEMPLATES = {
  PROFESSIONAL: 'professional',
  CREATIVE: 'creative',
  FUTURISTIC: 'futuristic',
};

// Template-specific design configurations
export const templateDesigns = {
  professional: {
    name: 'Professional',
    description: 'Clean & Corporate',
    animations: {
      speed: 'normal',
      intensity: 'subtle',
      cardHover: 'translateY(-8px)',
      buttonHover: 'translateY(-2px)',
      transition: 'all 0.3s ease',
    },
    layout: {
      cardRadius: 'xl',
      cardPadding: 6,
      sectionSpacing: 20,
      borderStyle: 'solid',
    },
    effects: {
      blur: false,
      glow: false,
      gradient: false,
      particles: true,
    },
  },
  creative: {
    name: 'Creative',
    description: 'Bold & Artistic',
    animations: {
      speed: 'fast',
      intensity: 'bold',
      cardHover: 'translateY(-12px) rotate(2deg)',
      buttonHover: 'translateY(-4px) scale(1.05)',
      transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    layout: {
      cardRadius: '2xl',
      cardPadding: 8,
      sectionSpacing: 24,
      borderStyle: 'dashed',
    },
    effects: {
      blur: true,
      glow: true,
      gradient: true,
      particles: true,
    },
  },
  futuristic: {
    name: 'Futuristic',
    description: 'Modern & Tech',
    animations: {
      speed: 'slow',
      intensity: 'smooth',
      cardHover: 'translateY(-6px) scale(1.02)',
      buttonHover: 'translateX(4px)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    layout: {
      cardRadius: 'none',
      cardPadding: 6,
      sectionSpacing: 16,
      borderStyle: 'solid',
    },
    effects: {
      blur: true,
      glow: true,
      gradient: false,
      particles: false,
    },
  },
};

// Professional Blue Theme Colors
const professionalColors = {
  ...colors,
};

// Creative Theme Colors (Purple/Pink Gradient)
const creativeColors = {
  ...colors,
  primary: {
    50: '#FAF5FF',
    100: '#E9D8FD',
    200: '#D6BCFA',
    300: '#B794F6',
    400: '#9F7AEA',
    500: '#805AD5',
    600: '#6B46C1',
    700: '#553C9A',
    800: '#44337A',
    900: '#322659',
  },
  secondary: {
    50: '#FFF5F7',
    100: '#FED7E2',
    200: '#FBB6CE',
    300: '#F687B3',
    400: '#ED64A6',
    500: '#D53F8C',
    600: '#B83280',
    700: '#97266D',
    800: '#702459',
    900: '#521B41',
  },
  accent: {
    50: '#E6FFFA',
    100: '#B2F5EA',
    200: '#81E6D9',
    300: '#4FD1C5',
    400: '#38B2AC',
    500: '#319795',
    600: '#2C7A7B',
    700: '#285E61',
    800: '#234E52',
    900: '#1D4044',
  },
  dark: {
    bg: 'linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 100%)',
    surface: 'rgba(88, 28, 135, 0.4)',
    card: 'rgba(109, 40, 217, 0.2)',
    border: 'rgba(167, 139, 250, 0.3)',
    text: '#F3E8FF',
    textSecondary: '#C4B5FD',
  },
};

// Futuristic Theme Colors (Minimal Tech)
const futuristicColors = {
  ...colors,
  primary: {
    50: '#F0F4F8',
    100: '#D9E2EC',
    200: '#BCCCDC',
    300: '#9FB3C8',
    400: '#829AB1',
    500: '#627D98',
    600: '#486581',
    700: '#334E68',
    800: '#243B53',
    900: '#102A43',
  },
  secondary: {
    50: '#F0F4F8',
    100: '#D9E2EC',
    200: '#BCCCDC',
    300: '#9FB3C8',
    400: '#829AB1',
    500: '#627D98',
    600: '#486581',
    700: '#334E68',
    800: '#243B53',
    900: '#102A43',
  },
  accent: {
    50: '#E3F8FF',
    100: '#B3ECFF',
    200: '#81DEFD',
    300: '#5ED0FA',
    400: '#40C3F7',
    500: '#2BB0ED',
    600: '#1992D4',
    700: '#127FBF',
    800: '#0B69A3',
    900: '#035388',
  },
  dark: {
    bg: '#0D0D0D',
    surface: '#1A1A1A',
    card: '#262626',
    border: '#333333',
    text: '#F5F5F5',
    textSecondary: '#A3A3A3',
  },
};

// Create Professional theme
const professionalTheme = extendTheme({
  ...theme,
  colors: professionalColors,
  ...templateDesigns.professional,
});

// Create Creative theme  
const creativeTheme = extendTheme({
  ...theme,
  colors: creativeColors,
  shadows: {
    ...shadows,
    glowPurple: '0 0 25px rgba(128, 90, 213, 0.5)',
    glowTeal: '0 0 20px rgba(49, 151, 149, 0.5)',
  },
  ...templateDesigns.creative,
});

// Create Futuristic theme
const futuristicTheme = extendTheme({
  ...theme,
  colors: futuristicColors,
  shadows: {
    ...shadows,
    glow: '0 0 15px rgba(98, 125, 152, 0.3)',
    neon: '0 0 10px rgba(43, 176, 237, 0.6), 0 0 20px rgba(43, 176, 237, 0.4)',
  },
  ...templateDesigns.futuristic,
});

// Function to get theme by template name
export const getThemeByTemplate = (template) => {
  switch (template) {
    case TEMPLATES.CREATIVE:
      return creativeTheme;
    case TEMPLATES.FUTURISTIC:
      return futuristicTheme;
    case TEMPLATES.PROFESSIONAL:
    default:
      return professionalTheme;
  }
};

export default theme;
