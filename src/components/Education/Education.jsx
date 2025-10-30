import { useTemplate, TEMPLATES } from '../../context/TemplateContext';
import EducationModern from './EducationModern';
import EducationCreative from './EducationCreative';
import EducationFuturistic from './EducationFuturistic';

const Education = () => {
  const { currentTemplate } = useTemplate();

  switch (currentTemplate) {
    case TEMPLATES.MODERN_MINIMAL:
      return <EducationModern />;
    case TEMPLATES.CREATIVE_BOLD:
      return <EducationCreative />;
    case TEMPLATES.TECH_FUTURISTIC:
      return <EducationFuturistic />;
    default:
      return <EducationModern />;
  }
};

export default Education;
