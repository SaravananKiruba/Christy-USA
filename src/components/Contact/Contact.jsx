import { useTemplate, TEMPLATES } from '../../context/TemplateContext';
import ContactModern from './ContactModern';
import ContactCreative from './ContactCreative';
import ContactFuturistic from './ContactFuturistic';

const Contact = () => {
  const { currentTemplate } = useTemplate();

  switch (currentTemplate) {
    case TEMPLATES.MODERN_MINIMAL:
      return <ContactModern />;
    case TEMPLATES.CREATIVE_BOLD:
      return <ContactCreative />;
    case TEMPLATES.TECH_FUTURISTIC:
      return <ContactFuturistic />;
    default:
      return <ContactModern />;
  }
};

export default Contact;
