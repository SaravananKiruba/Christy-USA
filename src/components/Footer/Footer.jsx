import { useTemplate, TEMPLATES } from '../../context/TemplateContext';
import FooterModern from './FooterModern';
import FooterCreative from './FooterCreative';
import FooterFuturistic from './FooterFuturistic';

const Footer = () => {
  const { currentTemplate } = useTemplate();

  switch (currentTemplate) {
    case TEMPLATES.MODERN_MINIMAL:
      return <FooterModern />;
    case TEMPLATES.CREATIVE_BOLD:
      return <FooterCreative />;
    case TEMPLATES.TECH_FUTURISTIC:
      return <FooterFuturistic />;
    default:
      return <FooterModern />;
  }
};

export default Footer;
