import { useTemplate, TEMPLATES } from '../../context/TemplateContext';
import ProjectsModern from './ProjectsModern';
import ProjectsCreative from './ProjectsCreative';
import ProjectsFuturistic from './ProjectsFuturistic';

const Projects = () => {
  const { currentTemplate } = useTemplate();

  switch (currentTemplate) {
    case TEMPLATES.MODERN_MINIMAL:
      return <ProjectsModern />;
    case TEMPLATES.CREATIVE_BOLD:
      return <ProjectsCreative />;
    case TEMPLATES.TECH_FUTURISTIC:
      return <ProjectsFuturistic />;
    default:
      return <ProjectsModern />;
  }
};

export default Projects;
