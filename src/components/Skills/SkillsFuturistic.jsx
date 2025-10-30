import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  HStack,
  Icon,
  useTheme,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@emotion/react';
import {
  FaBrain,
  FaSparkles,
  FaRobot,
  FaShieldAlt,
  FaCode,
  FaChartLine,
  FaNetworkWired,
  FaEye,
  FaComments,
  FaArrowTrendUp,
  FaCloud,
  FaServer,
  FaDatabase,
  FaLayerGroup,
  FaPlug,
  FaPython,
  FaJava,
  FaReact,
  FaImage,
  FaVideo,
  FaChartBar,
} from 'react-icons/fa';
import { SiR } from 'react-icons/si';
import { skills } from '../../data/portfolioData';

const MotionBox = motion(Box);

// Icon mapping
const iconMap = {
  brain: FaBrain,
  sparkles: FaSparkles,
  robot: FaRobot,
  shield: FaShieldAlt,
  code: FaCode,
  chart: FaChartLine,
  network: FaNetworkWired,
  eye: FaEye,
  message: FaComments,
  trending: FaArrowTrendUp,
  cloud: FaCloud,
  server: FaServer,
  database: FaDatabase,
  stack: FaLayerGroup,
  api: FaPlug,
  python: FaPython,
  r: SiR,
  java: FaJava,
  react: FaReact,
  image: FaImage,
  video: FaVideo,
  analytics: FaChartBar,
};

// Neon glow animation
const neonPulse = keyframes`
  0%, 100% { filter: drop-shadow(0 0 5px currentColor) drop-shadow(0 0 15px currentColor); }
  50% { filter: drop-shadow(0 0 10px currentColor) drop-shadow(0 0 25px currentColor); }
`;

// Scan line animation
const scanLine = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const SkillCard = ({ skill, delay, colorIndex }) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Rotate colors for variety
  const colors = ['neon.cyan', 'neon.magenta', 'neon.green'];
  const color = colors[colorIndex % colors.length];

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      bg="rgba(10, 10, 15, 0.6)"
      border="2px solid"
      borderColor={color}
      p={5}
      position="relative"
      overflow="hidden"
      _hover={{
        bg: 'rgba(10, 10, 15, 0.8)',
        transform: 'translateY(-4px)',
        boxShadow: `0 0 30px ${theme.colors.neon?.cyan || '#00f0ff'}`,
      }}
      cursor="pointer"
    >
      {/* Corner brackets */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="20px"
        height="20px"
        borderTop="3px solid"
        borderLeft="3px solid"
        borderColor={color}
      />
      <Box
        position="absolute"
        top={0}
        right={0}
        width="20px"
        height="20px"
        borderTop="3px solid"
        borderRight="3px solid"
        borderColor={color}
      />
      <Box
        position="absolute"
        bottom={0}
        left={0}
        width="20px"
        height="20px"
        borderBottom="3px solid"
        borderLeft="3px solid"
        borderColor={color}
      />
      <Box
        position="absolute"
        bottom={0}
        right={0}
        width="20px"
        height="20px"
        borderBottom="3px solid"
        borderRight="3px solid"
        borderColor={color}
      />

      {/* Scan line effect */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height="2px"
        bg={color}
        opacity={0.3}
        animation={`${scanLine} 4s linear infinite`}
        pointerEvents="none"
      />

      <HStack mb={4} spacing={3}>
        <Icon
          as={iconMap[skill.icon]}
          boxSize={6}
          color={color}
          animation={`${neonPulse} 2s ease-in-out infinite`}
        />
        <Text
          fontWeight="700"
          fontSize="md"
          color="white"
          fontFamily="heading"
          letterSpacing="wider"
        >
          {skill.name}
        </Text>
      </HStack>

      {/* Futuristic progress bar */}
      <Box position="relative" height="8px" bg="rgba(255,255,255,0.1)" overflow="hidden">
        <MotionBox
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.3 }}
          height="100%"
          bg={color}
          boxShadow={`0 0 10px ${theme.colors.neon?.cyan || '#00f0ff'}`}
          position="relative"
        >
          {/* Animated overlay */}
          <Box
            position="absolute"
            top={0}
            right={0}
            bottom={0}
            left={0}
            bgGradient={`linear(to-r, transparent, ${color}, transparent)`}
            opacity={0.6}
            animation={`${scanLine} 2s linear infinite`}
          />
        </MotionBox>
      </Box>

      <HStack justify="space-between" mt={3}>
        <Text fontSize="xs" color="gray.400" fontFamily="mono" fontWeight="600">
          PROFICIENCY
        </Text>
        <Text
          fontSize="sm"
          color={color}
          fontWeight="bold"
          fontFamily="mono"
        >
          {skill.level}%
        </Text>
      </HStack>
    </MotionBox>
  );
};

const SkillsFuturistic = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box 
      bg="gray.900" 
      py={20} 
      id="skills"
      position="relative"
      overflow="hidden"
    >
      {/* Animated grid background */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.1}
        backgroundImage="linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)"
        backgroundSize="50px 50px"
        pointerEvents="none"
      />

      {/* Neon glow effects */}
      <Box
        position="absolute"
        top="20%"
        left="10%"
        width="300px"
        height="300px"
        bg="neon.cyan"
        borderRadius="full"
        filter="blur(100px)"
        opacity={0.15}
        animation={`${neonPulse} 4s ease-in-out infinite`}
      />
      <Box
        position="absolute"
        bottom="30%"
        right="15%"
        width="400px"
        height="400px"
        bg="neon.magenta"
        borderRadius="full"
        filter="blur(120px)"
        opacity={0.1}
        animation={`${neonPulse} 5s ease-in-out infinite`}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          mb={16}
          textAlign="center"
        >
          <Text
            fontSize="sm"
            color="neon.cyan"
            fontFamily="mono"
            fontWeight="bold"
            letterSpacing="widest"
            mb={4}
          >
            {'>'} SYSTEM.CAPABILITIES
          </Text>
          <Heading
            as="h2"
            size="2xl"
            mb={4}
            color="white"
            fontFamily="heading"
            textTransform="uppercase"
            letterSpacing="wider"
            position="relative"
            display="inline-block"
            _after={{
              content: '""',
              position: 'absolute',
              bottom: '-8px',
              left: 0,
              right: 0,
              height: '3px',
              bgGradient: 'linear(to-r, neon.cyan, neon.magenta)',
              animation: `${neonPulse} 2s ease-in-out infinite`,
            }}
          >
            TECHNICAL ARSENAL
          </Heading>
          <Text fontSize="md" color="gray.400" maxW="2xl" mx="auto" mt={6} fontFamily="mono">
            {'[ Advanced capabilities across multiple domains ]'}
          </Text>
        </MotionBox>

        <VStack spacing={16} align="stretch">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <MotionBox
              key={category}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Box
                mb={8}
                p={4}
                bg="rgba(0, 240, 255, 0.05)"
                border="2px solid"
                borderColor="neon.cyan"
                borderLeft="6px solid"
                position="relative"
              >
                <Text
                  fontSize="xs"
                  color="neon.cyan"
                  fontFamily="mono"
                  fontWeight="bold"
                  letterSpacing="widest"
                  mb={1}
                >
                  CATEGORY_{String(categoryIndex + 1).padStart(2, '0')}
                </Text>
                <Heading
                  as="h3"
                  size="lg"
                  color="white"
                  fontFamily="heading"
                  textTransform="uppercase"
                  letterSpacing="wide"
                >
                  {category}
                </Heading>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {categorySkills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    delay={categoryIndex * 0.1 + index * 0.05}
                    colorIndex={categoryIndex * categorySkills.length + index}
                  />
                ))}
              </SimpleGrid>
            </MotionBox>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default SkillsFuturistic;
