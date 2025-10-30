import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
  Badge,
  Icon,
  useTheme,
  Circle,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
const MotionCircle = motion(Circle);

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

// Color schemes for different categories
const colorSchemes = {
  0: { bg: 'linear(to-br, pink.400, purple.500)', text: 'white', badge: 'pink' },
  1: { bg: 'linear(to-br, orange.400, red.500)', text: 'white', badge: 'orange' },
  2: { bg: 'linear(to-br, blue.400, cyan.500)', text: 'white', badge: 'blue' },
  3: { bg: 'linear(to-br, green.400, teal.500)', text: 'white', badge: 'green' },
  4: { bg: 'linear(to-br, purple.400, pink.500)', text: 'white', badge: 'purple' },
};

const SkillBubble = ({ skill, delay, colorScheme }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Calculate bubble size based on skill level
  const size = 60 + (skill.level / 100) * 40; // 60px to 100px

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ 
        duration: 0.5, 
        delay,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: [0, -5, 5, -5, 0],
        transition: { duration: 0.5 }
      }}
      position="relative"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
    >
      <MotionCircle
        size={`${size}px`}
        bgGradient={colorScheme.bg}
        color={colorScheme.text}
        boxShadow="xl"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={3}
        position="relative"
        overflow="visible"
        _hover={{
          boxShadow: '2xl',
        }}
      >
        <Icon
          as={iconMap[skill.icon]}
          boxSize={size > 80 ? 6 : 5}
          mb={1}
        />
        <Text
          fontSize={size > 80 ? 'xs' : '2xs'}
          fontWeight="bold"
          textAlign="center"
          lineHeight="tight"
          noOfLines={2}
        >
          {skill.name}
        </Text>
        <Badge
          position="absolute"
          top="-8px"
          right="-8px"
          colorScheme={colorScheme.badge}
          borderRadius="full"
          px={2}
          py={1}
          fontSize="2xs"
          fontWeight="extrabold"
          boxShadow="lg"
        >
          {skill.level}%
        </Badge>
      </MotionCircle>
    </MotionBox>
  );
};

const SkillsCreative = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box 
      py={20} 
      id="skills"
      bgGradient="linear(to-b, white, pink.50, purple.50)"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative background shapes */}
      <Box
        position="absolute"
        top="10%"
        left="5%"
        width="300px"
        height="300px"
        bgGradient="linear(to-br, pink.200, purple.200)"
        borderRadius="full"
        filter="blur(80px)"
        opacity={0.4}
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="20%"
        right="10%"
        width="400px"
        height="400px"
        bgGradient="linear(to-br, orange.200, red.200)"
        borderRadius="full"
        filter="blur(100px)"
        opacity={0.3}
        zIndex={0}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          mb={12}
          textAlign="center"
        >
          <Heading
            as="h2"
            size="2xl"
            mb={4}
            bgGradient="linear(to-r, pink.500, purple.500, orange.500)"
            bgClip="text"
            fontWeight="extrabold"
            transform="rotate(-2deg)"
          >
            🚀 My Superpowers
          </Heading>
          <Text fontSize="lg" color="gray.700" maxW="2xl" mx="auto" fontWeight="600">
            A colorful collection of skills that power innovation!
          </Text>
        </MotionBox>

        <VStack spacing={16} align="stretch">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <MotionBox
              key={category}
              initial={{ opacity: 0, rotate: -3 }}
              animate={inView ? { opacity: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Heading
                as="h3"
                size="lg"
                mb={8}
                textAlign="center"
                bgGradient={colorSchemes[categoryIndex % 5].bg}
                bgClip="text"
                fontWeight="extrabold"
                position="relative"
                display="inline-block"
                width="100%"
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100px',
                  height: '4px',
                  bgGradient: colorSchemes[categoryIndex % 5].bg,
                  borderRadius: 'full',
                }}
              >
                {category}
              </Heading>
              
              <Wrap spacing={6} justify="center" align="center">
                {categorySkills.map((skill, index) => (
                  <WrapItem key={skill.name}>
                    <SkillBubble
                      skill={skill}
                      delay={categoryIndex * 0.1 + index * 0.05}
                      colorScheme={colorSchemes[categoryIndex % 5]}
                    />
                  </WrapItem>
                ))}
              </Wrap>
            </MotionBox>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default SkillsCreative;
