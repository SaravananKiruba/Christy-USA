import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Progress,
  useColorModeValue,
  Icon,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaBrain,
  FaRobot,
  FaShieldAlt,
  FaCode,
  FaChartLine,
  FaNetworkWired,
  FaEye,
  FaComments,
  FaChartBar,
  FaCloud,
  FaServer,
  FaDatabase,
  FaLayerGroup,
  FaPython,
  FaReact,
  FaJava,
  FaImage,
  FaVideo,
  FaAws,
} from 'react-icons/fa';
import { skills } from '../../data/portfolioData';
import { useTemplateDesign } from '../../hooks/useTemplateDesign';

const MotionBox = motion(Box);

const iconMap = {
  brain: FaBrain,
  sparkles: FaRobot,
  robot: FaRobot,
  shield: FaShieldAlt,
  code: FaCode,
  chart: FaChartLine,
  network: FaNetworkWired,
  eye: FaEye,
  message: FaComments,
  trending: FaChartBar,
  cloud: FaCloud,
  server: FaServer,
  database: FaDatabase,
  stack: FaLayerGroup,
  api: FaCode,
  python: FaPython,
  r: FaChartBar,
  java: FaJava,
  react: FaReact,
  image: FaImage,
  video: FaVideo,
  analytics: FaChartBar,
};

const SkillCard = ({ skill, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const design = useTemplateDesign();
  const bg = useColorModeValue('white', 'dark.surface');
  const borderColor = useColorModeValue('gray.200', 'dark.border');
  const textColor = useColorModeValue('gray.600', 'dark.textSecondary');

  const IconComponent = iconMap[skill.icon] || FaCode;

  // Different animations based on template
  const getInitialState = () => {
    switch (design.template) {
      case 'creative':
        return { opacity: 0, scale: 0.5, rotate: -10 };
      case 'futuristic':
        return { opacity: 0, x: -50 };
      default:
        return { opacity: 0, scale: 0.8 };
    }
  };

  const getAnimateState = () => {
    switch (design.template) {
      case 'creative':
        return { opacity: 1, scale: 1, rotate: 0 };
      case 'futuristic':
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, scale: 1 };
    }
  };

  return (
    <MotionBox
      ref={ref}
      initial={getInitialState()}
      animate={inView ? getAnimateState() : getInitialState()}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: design.animations.cardHover.includes('translateY') ? -8 : 0,
        rotate: design.animations.cardHover.includes('rotate') ? 2 : 0,
        scale: design.animations.cardHover.includes('scale') ? 1.02 : 1,
      }}
    >
      <VStack
        p={design.layout.cardPadding}
        bg={bg}
        borderRadius={design.layout.cardRadius}
        border={design.layout.borderStyle === 'dashed' ? '2px dashed' : '1px solid'}
        borderColor={borderColor}
        spacing={4}
        h="full"
        position="relative"
        overflow="hidden"
        _hover={{
          boxShadow: design.effects.glow ? 'glowPurple' : 'xl',
          borderColor: 'primary.500',
        }}
        transition={design.animations.transition}
        _before={design.effects.gradient ? {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          bgGradient: 'linear(to-r, primary.500, secondary.500)',
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.3s ease',
        } : {}}
        sx={{
          '&:hover::before': {
            transform: 'scaleX(1)',
          },
        }}
      >
        {/* Icon */}
        <Box
          p={3}
          borderRadius="full"
          bgGradient="linear(to-br, primary.500, secondary.500)"
          color="white"
        >
          <Icon as={IconComponent} w={6} h={6} />
        </Box>

        {/* Skill Name */}
        <Text fontWeight="600" fontSize="md" textAlign="center">
          {skill.name}
        </Text>

        {/* Progress Bar */}
        <Box w="full">
          <HStack justify="space-between" mb={2}>
            <Text fontSize="xs" color={textColor}>
              Proficiency
            </Text>
            <Text fontSize="xs" fontWeight="600" color="primary.500">
              {skill.level}%
            </Text>
          </HStack>
          <Progress
            value={inView ? skill.level : 0}
            size="sm"
            borderRadius="full"
            colorScheme="blue"
            bgGradient="linear(to-r, primary.500, secondary.500)"
            sx={{
              '& > div': {
                bgGradient: 'linear(to-r, primary.500, secondary.500)',
              },
            }}
            transition="all 1s ease"
          />
        </Box>
      </VStack>
    </MotionBox>
  );
};

const SkillCategory = ({ category, skillsList, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const textColor = useColorModeValue('gray.600', 'dark.textSecondary');

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <VStack align="start" spacing={6}>
        {/* Category Title */}
        <Box>
          <Heading size="lg" mb={2}>
            {category}
          </Heading>
          <Box w="60px" h="3px" bgGradient="linear(to-r, primary.500, secondary.500)" />
        </Box>

        {/* Skills Grid */}
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={4} w="full">
          {skillsList.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
              delay={delay + index * 0.1}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </MotionBox>
  );
};

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const bg = useColorModeValue('white', 'dark.bg');
  const textColor = useColorModeValue('gray.600', 'dark.textSecondary');

  return (
    <Box id="skills" py={20} bg={bg}>
      <Container maxW="7xl">
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <VStack spacing={4} mb={16} textAlign="center">
            <Heading
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="extrabold"
            >
              Skills &{' '}
              <Box
                as="span"
                bgGradient="linear(to-r, primary.500, secondary.500)"
                bgClip="text"
              >
                Expertise
              </Box>
            </Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl">
              Comprehensive technical proficiency across GenAI, Machine Learning,
              Cloud Computing, and Data Science
            </Text>
          </VStack>

          {/* Skills Categories */}
          <VStack spacing={16} align="stretch">
            {Object.entries(skills).map(([category, skillsList], index) => (
              <SkillCategory
                key={category}
                category={category}
                skillsList={skillsList}
                delay={0.2 + index * 0.1}
              />
            ))}
          </VStack>

          {/* Additional Info */}
          <MotionBox
            mt={16}
            p={8}
            bgGradient={useColorModeValue(
              'linear(to-r, gray.50, white)',
              'linear(to-r, dark.surface, dark.card)'
            )}
            borderRadius="xl"
            textAlign="center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Heading size="md" mb={3}>
              Continuous Learning & Innovation
            </Heading>
            <Text color={textColor} maxW="2xl" mx="auto">
              Constantly updating skills with the latest technologies and methodologies in
              GenAI, LLMs, and Advanced Analytics. Certified in cutting-edge AI platforms
              and tools from leading technology providers.
            </Text>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
