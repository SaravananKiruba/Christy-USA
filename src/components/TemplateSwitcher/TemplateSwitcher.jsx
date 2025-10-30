import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  HStack,
  Text,
  Badge,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaCheckCircle } from 'react-icons/fa';
import { MdDesignServices, MdRocketLaunch, MdAutoAwesome } from 'react-icons/md';
import { useTemplate, TEMPLATES } from '../../context/TemplateContext';

const MotionBox = motion(Box);

const TemplateSwitcher = () => {
  const { currentTemplate, switchTemplate } = useTemplate();
  
  // Responsive values
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
  const position = useBreakpointValue({ 
    base: { top: '10px', right: '10px' }, 
    md: { top: '15px', right: '15px' },
    lg: { top: '20px', right: '20px' }
  });
  const menuWidth = useBreakpointValue({ base: '220px', md: '250px', lg: '280px' });
  const iconSize = useBreakpointValue({ base: 4, md: 4, lg: 5 });
  const showText = useBreakpointValue({ base: false, sm: true });

  const templates = [
    {
      id: TEMPLATES.MODERN_MINIMAL,
      name: 'Professional',
      icon: MdDesignServices,
      color: 'blue.500',
      desc: 'Clean & Minimal',
    },
    {
      id: TEMPLATES.CREATIVE_BOLD,
      name: 'Creative',
      icon: MdAutoAwesome,
      color: 'pink.500',
      desc: 'Bold & Colorful',
    },
    {
      id: TEMPLATES.TECH_FUTURISTIC,
      name: 'Futuristic',
      icon: MdRocketLaunch,
      color: 'cyan.400',
      desc: 'Dark & Neon',
    },
  ];

  const currentTemplateInfo = templates.find(t => t.id === currentTemplate);

  return (
    <MotionBox
      position='fixed'
      top={position.top}
      right={position.right}
      zIndex={2000}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={showText ? <FaChevronDown /> : undefined}
          size={buttonSize}
          borderRadius='full'
          bgGradient={
            currentTemplate === TEMPLATES.CREATIVE_BOLD
              ? 'linear(to-r, pink.500, purple.500)'
              : currentTemplate === TEMPLATES.TECH_FUTURISTIC
              ? 'linear(to-r, cyan.400, blue.600)'
              : 'linear(to-r, blue.500, blue.600)'
          }
          color='white'
          _hover={{
            transform: 'scale(1.05)',
          }}
          _active={{
            transform: 'scale(0.98)',
          }}
          boxShadow='xl'
          px={{ base: 3, sm: 4, md: 5, lg: 6 }}
          minW={{ base: 'auto', sm: 'auto' }}
        >
          <HStack spacing={{ base: 0, sm: 2 }}>
            <Icon as={currentTemplateInfo.icon} boxSize={iconSize} />
            {showText && <Text fontWeight='bold' fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>{currentTemplateInfo.name}</Text>}
          </HStack>
        </MenuButton>
        <MenuList
          borderRadius='xl'
          boxShadow='2xl'
          p={2}
          minW={menuWidth}
          maxW={{ base: '90vw', md: 'auto' }}
          bg={currentTemplate === TEMPLATES.TECH_FUTURISTIC ? 'gray.800' : 'white'}
          borderColor={currentTemplate === TEMPLATES.TECH_FUTURISTIC ? 'cyan.400' : 'gray.200'}
        >
          {templates.map((template) => (
            <MenuItem
              key={template.id}
              onClick={() => switchTemplate(template.id)}
              borderRadius='lg'
              py={{ base: 2, md: 3 }}
              px={{ base: 3, md: 4 }}
              mb={1}
              bg={
                currentTemplate === template.id
                  ? template.color + '20'
                  : 'transparent'
              }
              _hover={{
                bg: template.color + '30',
              }}
            >
              <HStack spacing={{ base: 2, md: 3 }} width='100%'>
                <Icon
                  as={template.icon}
                  boxSize={{ base: 5, md: 6 }}
                  color={template.color}
                />
                <Box flex={1}>
                  <HStack justify='space-between'>
                    <Text
                      fontWeight='600'
                      fontSize={{ base: 'sm', md: 'md' }}
                      color={
                        currentTemplate === TEMPLATES.TECH_FUTURISTIC
                          ? 'white'
                          : 'gray.800'
                      }
                    >
                      {template.name}
                    </Text>
                    {currentTemplate === template.id && (
                      <Icon as={FaCheckCircle} color={template.color} boxSize={{ base: 4, md: 5 }} />
                    )}
                  </HStack>
                  <Text
                    fontSize={{ base: '2xs', md: 'xs' }}
                    color={
                      currentTemplate === TEMPLATES.TECH_FUTURISTIC
                        ? 'gray.400'
                        : 'gray.600'
                    }
                  >
                    {template.desc}
                  </Text>
                </Box>
              </HStack>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </MotionBox>
  );
};

export default TemplateSwitcher;
