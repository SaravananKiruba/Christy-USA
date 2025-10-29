import React from 'react';
import { Box } from '@chakra-ui/react';
import { useTemplateDesign } from '../hooks/useTemplateDesign';

// Professional Layout - Traditional centered sections
export const ProfessionalLayout = ({ children }) => {
  return (
    <Box>
      {children}
    </Box>
  );
};

// Creative Layout - Asymmetric, bold sections
export const CreativeLayout = ({ children }) => {
  return (
    <Box
      sx={{
        '& section:nth-of-type(even)': {
          bg: 'linear-gradient(135deg, rgba(128, 90, 213, 0.05) 0%, rgba(213, 63, 140, 0.05) 100%)',
        },
        '& section': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '4px',
            height: '100%',
            bgGradient: 'linear(to-b, primary.500, secondary.500)',
            opacity: 0.6,
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

// Futuristic Layout - Edge-to-edge, minimal padding
export const FuturisticLayout = ({ children }) => {
  return (
    <Box
      sx={{
        '& section': {
          borderTop: '1px solid',
          borderColor: 'whiteAlpha.100',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            bgGradient: 'linear(to-r, transparent, primary.500, transparent)',
            opacity: 0.3,
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

// Layout Wrapper - switches based on template
export const TemplateLayout = ({ children }) => {
  const design = useTemplateDesign();
  
  switch (design.template) {
    case 'creative':
      return <CreativeLayout>{children}</CreativeLayout>;
    case 'futuristic':
      return <FuturisticLayout>{children}</FuturisticLayout>;
    default:
      return <ProfessionalLayout>{children}</ProfessionalLayout>;
  }
};
