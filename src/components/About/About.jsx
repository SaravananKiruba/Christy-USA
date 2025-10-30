import React from 'react';
import { useTemplate, TEMPLATES } from '../../context/TemplateContext';
import AboutModern from './AboutModern';
import AboutCreative from './AboutCreative';
import AboutFuturistic from './AboutFuturistic';

const About = () => {
  const { currentTemplate } = useTemplate();

  // Render different About component based on current template
  switch (currentTemplate) {
    case TEMPLATES.MODERN_MINIMAL:
      return <AboutModern />;
    case TEMPLATES.CREATIVE_BOLD:
      return <AboutCreative />;
    case TEMPLATES.TECH_FUTURISTIC:
      return <AboutFuturistic />;
    default:
      return <AboutModern />;
  }
};

export default About;
