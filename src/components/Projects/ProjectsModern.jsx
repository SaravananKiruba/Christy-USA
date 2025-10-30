import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Image,
  Badge,
  Icon,
  Wrap,
  WrapItem,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaChartLine, FaCheckCircle, FaClock } from 'react-icons/fa';
import { projects } from '../../data/portfolioData';

const MotionBox = motion(Box);

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const statusColors = {
    'Productionized': 'green',
    'In Development': 'blue',
    'Completed': 'purple',
  };

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Box
        bg="white"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="md"
        height="100%"
        display="flex"
        flexDirection="column"
        _hover={{
          boxShadow: '2xl',
          transform: 'translateY(-8px)',
        }}
        transition="all 0.4s ease"
      >
        {/* Project Image */}
        <Box position="relative" overflow="hidden" height="200px">
          <Image
            src={project.image}
            alt={project.title}
            width="100%"
            height="100%"
            objectFit="cover"
            transition="transform 0.4s ease"
            _groupHover={{ transform: 'scale(1.1)' }}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgGradient="linear(to-b, transparent, rgba(0,0,0,0.3))"
          />
          <Badge
            position="absolute"
            top={4}
            right={4}
            colorScheme={statusColors[project.status]}
            fontSize="xs"
            px={3}
            py={1}
            borderRadius="full"
          >
            {project.status}
          </Badge>
        </Box>

        {/* Project Content */}
        <VStack align="start" spacing={4} p={6} flex={1}>
          <VStack align="start" spacing={2} width="100%">
            <Badge colorScheme="blue" fontSize="xs">
              {project.category}
            </Badge>
            <Heading as="h3" size="md" color="gray.800">
              {project.title}
            </Heading>
            <HStack color="gray.500" fontSize="sm">
              <Icon as={FaClock} />
              <Text>{project.timeline}</Text>
            </HStack>
          </VStack>

          <Text color="gray.600" fontSize="sm" noOfLines={3}>
            {project.description}
          </Text>

          {/* Technologies */}
          <Wrap spacing={2}>
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <WrapItem key={idx}>
                <Badge
                  variant="outline"
                  colorScheme="gray"
                  fontSize="xs"
                  px={2}
                  py={1}
                >
                  {tech}
                </Badge>
              </WrapItem>
            ))}
            {project.technologies.length > 4 && (
              <WrapItem>
                <Badge
                  variant="outline"
                  colorScheme="gray"
                  fontSize="xs"
                  px={2}
                  py={1}
                >
                  +{project.technologies.length - 4}
                </Badge>
              </WrapItem>
            )}
          </Wrap>

          {/* Impact */}
          <Box
            mt="auto"
            pt={4}
            borderTop="1px solid"
            borderColor="gray.200"
            width="100%"
          >
            <HStack>
              <Icon as={FaChartLine} color="brand.500" />
              <Text fontSize="sm" fontWeight="600" color="gray.700">
                {project.impact}
              </Text>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </MotionBox>
  );
};

const ProjectsModern = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box bg="white" py={20} id="projects">
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
            Featured Projects
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
            Innovative AI solutions driving business transformation and operational excellence
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

export default ProjectsModern;
