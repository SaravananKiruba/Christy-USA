import React, { createContext, useContext, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import glassTheme from '../theme/glassTheme';
import cyberpunkTheme from '../theme/cyberpunkTheme';
import natureTheme from '../theme/natureTheme';
import { extendTheme } from '@chakra-ui/react';

// Import your original theme
const originalTheme = extendTheme({
  colors: {
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
  },
  fonts: {
    heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  },
});

const StyleContext = createContext();

export const STYLE_THEMES = {
  ORIGINAL: 'original',
  GLASS: 'glass',
  CYBERPUNK: 'cyberpunk',
  NATURE: 'nature',
};

const themeMap = {
  [STYLE_THEMES.ORIGINAL]: originalTheme,
  [STYLE_THEMES.GLASS]: glassTheme,
  [STYLE_THEMES.CYBERPUNK]: cyberpunkTheme,
  [STYLE_THEMES.NATURE]: natureTheme,
};

export const StyleProvider = ({ children }) => {
  const [currentStyle, setCurrentStyle] = useState(STYLE_THEMES.ORIGINAL);

  const switchStyle = (styleName) => {
    setCurrentStyle(styleName);
  };

  const getCurrentTheme = () => {
    return themeMap[currentStyle];
  };

  return (
    <StyleContext.Provider value={{ currentStyle, switchStyle, getCurrentTheme }}>
      <ChakraProvider theme={getCurrentTheme()}>
        {children}
      </ChakraProvider>
    </StyleContext.Provider>
  );
};

export const useStyle = () => {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error('useStyle must be used within a StyleProvider');
  }
  return context;
};