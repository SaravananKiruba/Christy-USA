import React from 'react';
import { useTemplate, TEMPLATES } from '../../context/TemplateContext';
import HeroModern from './HeroModern';
import HeroCreative from './HeroCreative';
import HeroFuturistic from './HeroFuturistic';

const Hero = () => {
  const { currentTemplate } = useTemplate();

  // Render different Hero component based on current template
  switch (currentTemplate) {
    case TEMPLATES.MODERN_MINIMAL:
      return <HeroModern />;
    case TEMPLATES.CREATIVE_BOLD:
      return <HeroCreative />;
    case TEMPLATES.TECH_FUTURISTIC:
      return <HeroFuturistic />;
    default:
      return <HeroModern />;
  }
};

export default Hero;
