import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorModeScript } from '@chakra-ui/react';
import App from './App';
import theme from './theme';
import { ThemeTemplateProvider } from './context/ThemeContext';
import { TemplateProvider } from './context/TemplateContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <TemplateProvider>
      <ThemeTemplateProvider>
        <App />
      </ThemeTemplateProvider>
    </TemplateProvider>
  </React.StrictMode>
);
