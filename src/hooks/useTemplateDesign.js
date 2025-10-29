import { useTheme } from '@chakra-ui/react';
import { templateDesigns } from '../theme';

export const useTemplateDesign = () => {
  const theme = useTheme();
  const currentTemplate = theme.template || 'professional';
  
  return {
    ...templateDesigns[currentTemplate],
    template: currentTemplate,
  };
};
