import React from 'react';
import { useTemplate, TEMPLATES } from '../../context/TemplateContext';
import ExperienceModern from './ExperienceModern';
import ExperienceCreative from './ExperienceCreative';
import ExperienceFuturistic from './ExperienceFuturistic';

const Experience = () => {
  const { currentTemplate } = useTemplate();

  switch (currentTemplate) {
    case TEMPLATES.MODERN_MINIMAL:
      return <ExperienceModern />;
    case TEMPLATES.CREATIVE_BOLD:
      return <ExperienceCreative />;
    case TEMPLATES.TECH_FUTURISTIC:
      return <ExperienceFuturistic />;
    default:
      return <ExperienceModern />;
  }
};

export default Experience;
