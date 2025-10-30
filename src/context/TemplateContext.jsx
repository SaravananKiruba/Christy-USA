import React, { createContext, useContext, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import modernMinimalTheme from '../theme/modernMinimalTheme';
import creativeBoldTheme from '../theme/creativeBoldTheme';
import techFuturisticTheme from '../theme/techFuturisticTheme';

const TemplateContext = createContext();

export const TEMPLATES = {
  MODERN_MINIMAL: 'modern-minimal',
  CREATIVE_BOLD: 'creative-bold',
  TECH_FUTURISTIC: 'tech-futuristic',
};

const themeMap = {
  [TEMPLATES.MODERN_MINIMAL]: modernMinimalTheme,
  [TEMPLATES.CREATIVE_BOLD]: creativeBoldTheme,
  [TEMPLATES.TECH_FUTURISTIC]: techFuturisticTheme,
};

export const TemplateProvider = ({ children }) => {
  const [currentTemplate, setCurrentTemplate] = useState(TEMPLATES.MODERN_MINIMAL);

  const switchTemplate = (templateName) => {
    setCurrentTemplate(templateName);
  };

  const getCurrentTheme = () => {
    return themeMap[currentTemplate];
  };

  return (
    <TemplateContext.Provider value={{ currentTemplate, switchTemplate, getCurrentTheme }}>
      <ChakraProvider theme={getCurrentTheme()}>
        {children}
      </ChakraProvider>
    </TemplateContext.Provider>
  );
};

export const useTemplate = () => {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error('useTemplate must be used within a TemplateProvider');
  }
  return context;
};
