import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@emotion/react';
import { FaRocket, FaCube, FaChevronRight, FaTerminal } from 'react-icons/fa';
import { projects } from '../../data/portfolioData';

const MotionBox = motion(Box);

// Neon glow animation
const neonPulse = keyframes`
  0%, 100% { filter: drop-shadow(0 0 5px currentColor) drop-shadow(0 0 15px currentColor); }
  50% { filter: drop-shadow(0 0 10px currentColor) drop-shadow(0 0 25px currentColor); }
`;

// Data stream animation
const dataStream = keyframes`
  0% { transform: translateY(0) opacity(0); }
  50% { opacity: 1; }
  100% { transform: translateY(20px); opacity: 0); }
`;

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const colors = ['neon.cyan', 'neon.magenta', 'neon.green'];
  const color = colors[index % colors.length];

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Box
        bg="rgba(10, 10, 15, 0.6)"
        border="2px solid"
        borderColor={color}
        position="relative"
        overflow="hidden"
        height="100%"
        _hover={{
          bg: 'rgba(10, 10, 15, 0.8)',
          transform: 'translateY(-8px)',
          boxShadow: `0 20px 40px ${color}33`,
        }}
        transition="all 0.4s ease"
      >
        {/* Terminal-style header */}
        <Box
          bg="rgba(0, 0, 0, 0.5)"
          borderBottom="2px solid"
          borderColor={color}
          p={3}
        >
          <HStack spacing={2}>
            <Box width="12px" height="12px" borderRadius="full" bg="red.500" />
            <Box width="12px" height="12px" borderRadius="full" bg="yellow.500" />
            <Box width="12px" height="12px" borderRadius="full" bg="green.500" />
            <Text
              fontSize="xs"
              color={color}
              fontFamily="mono"
              fontWeight="bold"
              ml={4}
              letterSpacing="wider"
            >
              PROJECT_{String(index + 1).padStart(2, '0')}.exe
            </Text>
          </HStack>
        </Box>

        {/* Content */}
        <VStack align="start" spacing={4} p={6}>
          {/* Project icon and title */}
          <HStack spacing={4}>
            <Box
              width="50px"
              height="50px"
              border="2px solid"
              borderColor={color}
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <Icon
                as={FaCube}
                boxSize={6}
                color={color}
                animation={`${neonPulse} 2s ease-in-out infinite`}
              />
              {/* Outer border */}
              <Box
                position="absolute"
                top={-1}
                right={-1}
                bottom={-1}
                left={-1}
                border="1px solid"
                borderColor={color}
                opacity={0.3}
              />
            </Box>
            <VStack align="start" spacing={1} flex={1}>
              <Heading
                as="h3"
                size="md"
                color="white"
                fontFamily="heading"
                letterSpacing="wide"
              >
                {project.title}
              </Heading>
              <Badge
                bg={color}
                color="gray.900"
                fontSize="xs"
                px={2}
                py={1}
                fontFamily="mono"
                fontWeight="bold"
              >
                {project.status}
              </Badge>
            </VStack>
          </HStack>

          {/* Category */}
          <HStack>
            <Icon as={FaChevronRight} color={color} boxSize={3} />
            <Text
              fontSize="sm"
              color={color}
              fontFamily="mono"
              fontWeight="bold"
              letterSpacing="wide"
            >
              {project.category.toUpperCase()}
            </Text>
          </HStack>

          {/* Description */}
          <Box
            bg="rgba(0, 0, 0, 0.3)"
            borderLeft="3px solid"
            borderColor={color}
            p={4}
          >
            <Text color="gray.300" fontSize="sm" fontFamily="mono">
              {project.description}
            </Text>
          </Box>

          {/* Technologies */}
          <VStack align="start" spacing={2} width="100%">
            <HStack>
              <Icon as={FaTerminal} color={color} boxSize={4} />
              <Text
                fontSize="xs"
                color={color}
                fontFamily="mono"
                fontWeight="bold"
                letterSpacing="widest"
              >
                TECH_STACK
              </Text>
            </HStack>
            <SimpleGrid columns={2} spacing={2} width="100%">
              {project.technologies.map((tech, idx) => (
                <HStack key={idx} spacing={2}>
                  <Box width="4px" height="4px" bg={color} />
                  <Text
                    fontSize="xs"
                    color="gray.400"
                    fontFamily="mono"
                    noOfLines={1}
                  >
                    {tech}
                  </Text>
                </HStack>
              ))}
            </SimpleGrid>
          </VStack>

          {/* Metrics */}
          {project.metrics && (
            <Box width="100%" pt={3} borderTop="1px solid" borderColor="gray.700">
              <HStack spacing={4} justify="space-between">
                {Object.entries(project.metrics).map(([key, value], idx) => (
                  <VStack key={idx} spacing={1} flex={1}>
                    <Text
                      fontSize="lg"
                      fontWeight="bold"
                      color={color}
                      fontFamily="mono"
                    >
                      {value}
                    </Text>
                    <Text
                      fontSize="2xs"
                      color="gray.500"
                      textTransform="uppercase"
                      fontFamily="mono"
                      letterSpacing="wider"
                    >
                      {key}
                    </Text>
                  </VStack>
                ))}
              </HStack>
            </Box>
          )}

          {/* Impact */}
          <Box
            width="100%"
            bg="rgba(0, 0, 0, 0.4)"
            border="1px solid"
            borderColor={color}
            p={3}
            position="relative"
            overflow="hidden"
          >
            {/* Animated data stream effect */}
            <Box
              position="absolute"
              top={0}
              left="10%"
              width="2px"
              height="100%"
            >
              <Box
                width="100%"
                height="10px"
                bg={color}
                opacity={0.6}
                animation={`${dataStream} 2s ease-in-out infinite`}
              />
            </Box>
            <Box
              position="absolute"
              top={0}
              left="50%"
              width="2px"
              height="100%"
            >
              <Box
                width="100%"
                height="10px"
                bg={color}
                opacity={0.6}
                animation={`${dataStream} 2s ease-in-out infinite 0.5s`}
              />
            </Box>
            <Box
              position="absolute"
              top={0}
              left="90%"
              width="2px"
              height="100%"
            >
              <Box
                width="100%"
                height="10px"
                bg={color}
                opacity={0.6}
                animation={`${dataStream} 2s ease-in-out infinite 1s`}
              />
            </Box>

            <HStack position="relative" zIndex={1}>
              <Icon as={FaRocket} color={color} />
              <Text
                fontSize="xs"
                color="gray.300"
                fontFamily="mono"
                fontWeight="bold"
              >
                {project.impact}
              </Text>
            </HStack>
          </Box>
        </VStack>

        {/* Corner brackets */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="30px"
          height="30px"
          borderTop="4px solid"
          borderLeft="4px solid"
          borderColor={color}
        />
        <Box
          position="absolute"
          top={0}
          right={0}
          width="30px"
          height="30px"
          borderTop="4px solid"
          borderRight="4px solid"
          borderColor={color}
        />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          width="30px"
          height="30px"
          borderBottom="4px solid"
          borderLeft="4px solid"
          borderColor={color}
        />
        <Box
          position="absolute"
          bottom={0}
          right={0}
          width="30px"
          height="30px"
          borderBottom="4px solid"
          borderRight="4px solid"
          borderColor={color}
        />
      </Box>
    </MotionBox>
  );
};

const ProjectsFuturistic = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      bg="gray.900"
      py={20}
      id="projects"
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
        top="10%"
        left="10%"
        width="400px"
        height="400px"
        bg="neon.cyan"
        borderRadius="full"
        filter="blur(120px)"
        opacity={0.15}
        animation={`${neonPulse} 4s ease-in-out infinite`}
      />
      <Box
        position="absolute"
        bottom="15%"
        right="10%"
        width="450px"
        height="450px"
        bg="neon.magenta"
        borderRadius="full"
        filter="blur(140px)"
        opacity={0.12}
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
            {'>'} SYSTEM.PROJECTS
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
            PROJECT PORTFOLIO
          </Heading>
          <Text fontSize="md" color="gray.400" maxW="2xl" mx="auto" mt={6} fontFamily="mono">
            {'[ Enterprise-grade AI solutions and data-driven applications ]'}
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ProjectsFuturistic;
