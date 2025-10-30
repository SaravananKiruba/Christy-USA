import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Badge,
  Icon,
  Wrap,
  WrapItem,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaFire, FaStar, FaBolt } from 'react-icons/fa';
import { projects } from '../../data/portfolioData';

const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

const colorSchemes = [
  { bg: 'linear(to-br, pink.400, purple.500)', accent: 'pink.500', emoji: '🚀' },
  { bg: 'linear(to-br, orange.400, red.500)', accent: 'orange.500', emoji: '🔥' },
  { bg: 'linear(to-br, blue.400, cyan.500)', accent: 'blue.500', emoji: '⚡' },
  { bg: 'linear(to-br, green.400, teal.500)', accent: 'green.500', emoji: '✨' },
  { bg: 'linear(to-br, purple.400, pink.500)', accent: 'purple.500', emoji: '🎯' },
];

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const colorScheme = colorSchemes[index % colorSchemes.length];
  const rotations = [-2, 3, -1, 2, -3];
  const rotation = rotations[index % rotations.length];

  // Varying card sizes for bento-box layout
  const gridSizes = [
    { base: 'span 1', md: 'span 2' }, // Large
    { base: 'span 1', md: 'span 1' }, // Small
    { base: 'span 1', md: 'span 1' }, // Small
    { base: 'span 1', md: 'span 2' }, // Large
  ];

  const size = gridSizes[index % gridSizes.length];

  return (
    <GridItem colSpan={size}>
      <MotionBox
        ref={ref}
        initial={{ opacity: 0, scale: 0.8, rotate: rotation * 2 }}
        animate={inView ? { opacity: 1, scale: 1, rotate: rotation } : {}}
        transition={{ 
          duration: 0.7, 
          delay: index * 0.1,
          type: 'spring',
        }}
        whileHover={{ 
          scale: 1.02,
          rotate: 0,
          transition: { duration: 0.3 }
        }}
        height="100%"
      >
        <Box
          bg="white"
          borderRadius="3xl"
          overflow="hidden"
          boxShadow="2xl"
          height="100%"
          position="relative"
          _hover={{
            boxShadow: '3xl',
          }}
          transition="all 0.3s ease"
        >
          {/* Colorful header with emoji */}
          <Box
            bgGradient={colorScheme.bg}
            p={6}
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="-30px"
              right="-30px"
              width="150px"
              height="150px"
              borderRadius="full"
              bg="whiteAlpha.200"
            />
            <Box
              position="absolute"
              bottom="-40px"
              left="-40px"
              width="180px"
              height="180px"
              borderRadius="full"
              bg="whiteAlpha.100"
            />
            
            <VStack align="start" spacing={3} position="relative" zIndex={1}>
              <Text fontSize="4xl">{colorScheme.emoji}</Text>
              <Badge
                bg="white"
                color={colorScheme.accent}
                fontSize="xs"
                px={3}
                py={1}
                borderRadius="full"
                fontWeight="extrabold"
              >
                {project.status}
              </Badge>
              <Heading as="h3" size="lg" color="white" fontWeight="extrabold">
                {project.title}
              </Heading>
              <Text fontSize="sm" fontWeight="bold" color="whiteAlpha.900">
                {project.category}
              </Text>
            </VStack>
          </Box>

          {/* Content */}
          <VStack align="start" spacing={4} p={6}>
            <Text color="gray.700" fontSize="sm" lineHeight="tall">
              {project.description}
            </Text>

            {/* Technologies as colorful badges */}
            <Wrap spacing={2}>
              {project.technologies.map((tech, idx) => (
                <WrapItem key={idx}>
                  <Badge
                    bgGradient={colorScheme.bg}
                    color="white"
                    fontSize="xs"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontWeight="bold"
                  >
                    {tech}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>

            {/* Metrics in colorful boxes */}
            {project.metrics && (
              <HStack spacing={3} width="100%">
                {Object.entries(project.metrics).map(([key, value], idx) => (
                  <Box
                    key={idx}
                    flex={1}
                    bg={`${colorScheme.accent.split('.')[0]}.50`}
                    p={3}
                    borderRadius="xl"
                    textAlign="center"
                  >
                    <Text
                      fontSize="xl"
                      fontWeight="extrabold"
                      color={colorScheme.accent}
                    >
                      {value}
                    </Text>
                    <Text fontSize="xs" color="gray.600" textTransform="capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </Text>
                  </Box>
                ))}
              </HStack>
            )}

            {/* Impact banner */}
            <Box
              width="100%"
              bgGradient={colorScheme.bg}
              p={4}
              borderRadius="xl"
              transform="rotate(-1deg)"
            >
              <Text
                fontSize="sm"
                fontWeight="extrabold"
                color="white"
                textAlign="center"
              >
                💡 {project.impact}
              </Text>
            </Box>
          </VStack>
        </Box>
      </MotionBox>
    </GridItem>
  );
};

const ProjectsCreative = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      py={20}
      id="projects"
      bgGradient="linear(to-b, white, pink.50, purple.50, orange.50, blue.50)"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative background shapes */}
      <Box
        position="absolute"
        top="10%"
        left="5%"
        width="400px"
        height="400px"
        bgGradient="linear(to-br, pink.200, purple.200)"
        borderRadius="full"
        filter="blur(100px)"
        opacity={0.4}
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="20%"
        right="10%"
        width="500px"
        height="500px"
        bgGradient="linear(to-br, orange.200, blue.200)"
        borderRadius="full"
        filter="blur(120px)"
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
            🎨 Amazing Projects
          </Heading>
          <Text fontSize="lg" color="gray.700" maxW="2xl" mx="auto" fontWeight="600">
            Bringing ideas to life with creativity and innovation!
          </Text>
        </MotionBox>

        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={8}
          autoRows="minmax(300px, auto)"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsCreative;
