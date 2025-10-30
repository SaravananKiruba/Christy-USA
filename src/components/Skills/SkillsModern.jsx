import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Progress,
  HStack,
  Icon,
  useTheme,
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

const SkillCard = ({ skill, delay }) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      bg="white"
      p={5}
      borderRadius="lg"
      boxShadow="sm"
      _hover={{
        boxShadow: 'md',
        transform: 'translateY(-4px)',
      }}
    >
      <HStack mb={3}>
        <Icon
          as={iconMap[skill.icon]}
          boxSize={6}
          color="brand.500"
        />
        <Text fontWeight="600" fontSize="md">
          {skill.name}
        </Text>
      </HStack>
      <Progress
        value={skill.level}
        colorScheme="blue"
        borderRadius="full"
        size="sm"
        hasStripe
        isAnimated={inView}
      />
      <Text
        fontSize="xs"
        color="gray.600"
        mt={2}
        textAlign="right"
        fontWeight="500"
      >
        {skill.level}%
      </Text>
    </MotionBox>
  );
};

const SkillsModern = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box bg="gray.50" py={20} id="skills">
      <Container maxW="container.xl">
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
            bgGradient="linear(to-r, brand.500, brand.600)"
            bgClip="text"
          >
            Technical Expertise
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
            Comprehensive skill set spanning AI, machine learning, cloud computing, and modern development technologies
          </Text>
        </MotionBox>

        <VStack spacing={12} align="stretch">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <MotionBox
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Heading
                as="h3"
                size="lg"
                mb={6}
                color="gray.700"
                borderBottom="3px solid"
                borderColor="brand.500"
                pb={2}
                display="inline-block"
              >
                {category}
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {categorySkills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    delay={categoryIndex * 0.1 + index * 0.05}
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

export default SkillsModern;
