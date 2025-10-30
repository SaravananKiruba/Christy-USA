import { useTemplate, TEMPLATES } from '../../context/TemplateContext';
import SkillsModern from './SkillsModern';
import SkillsCreative from './SkillsCreative';
import SkillsFuturistic from './SkillsFuturistic';

const Skills = () => {
  const { currentTemplate } = useTemplate();

  switch (currentTemplate) {
    case TEMPLATES.MODERN_MINIMAL:
      return <SkillsModern />;
    case TEMPLATES.CREATIVE_BOLD:
      return <SkillsCreative />;
    case TEMPLATES.TECH_FUTURISTIC:
      return <SkillsFuturistic />;
    default:
      return <SkillsModern />;
  }
};

export default Skills;
