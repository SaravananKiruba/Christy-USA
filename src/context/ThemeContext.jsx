import React, { createContext, useContext, useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { getThemeByTemplate, TEMPLATES } from '../theme';

const ThemeTemplateContext = createContext();

export const useThemeTemplate = () => {
  const context = useContext(ThemeTemplateContext);
  if (!context) {
    throw new Error('useThemeTemplate must be used within ThemeTemplateProvider');
  }
  return context;
};

export const ThemeTemplateProvider = ({ children }) => {
  const [currentTemplate, setCurrentTemplate] = useState(() => {
    // Load from localStorage or default to PROFESSIONAL
    const saved = localStorage.getItem('portfolio-template');
    return saved || TEMPLATES.PROFESSIONAL;
  });

  const changeTemplate = (newTemplate) => {
    setCurrentTemplate(newTemplate);
    localStorage.setItem('portfolio-template', newTemplate);
  };

  useEffect(() => {
    localStorage.setItem('portfolio-template', currentTemplate);
  }, [currentTemplate]);

  const theme = getThemeByTemplate(currentTemplate);

  const value = {
    currentTemplate,
    changeTemplate,
    templates: TEMPLATES,
  };

  return (
    <ThemeTemplateContext.Provider value={value}>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </ThemeTemplateContext.Provider>
  );
};
