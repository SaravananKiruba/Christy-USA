import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image,
  Badge,
  HStack,
  Wrap,
  WrapItem,
  useColorModeValue,
  Icon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import { projects } from '../../data/portfolioData';
import { useState } from 'react';
import { useTemplateDesign } from '../../hooks/useTemplateDesign';

const MotionBox = motion(Box);

const ProjectCard = ({ project, delay, onOpen }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const design = useTemplateDesign();
  const bg = useColorModeValue('white', 'dark.surface');
  const borderColor = useColorModeValue('gray.200', 'dark.border');
  const textColor = useColorModeValue('gray.600', 'dark.textSecondary');

  const statusColor = {
    'Productionized': 'green',
    'In Development': 'blue',
    'Completed': 'purple',
  };

  // Different animations based on template
  const getInitialState = () => {
    switch (design.template) {
      case 'creative':
        return { opacity: 0, scale: 0.8, rotate: -5 };
      case 'futuristic':
        return { opacity: 0, x: 100 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  const getAnimateState = () => {
    switch (design.template) {
      case 'creative':
        return { opacity: 1, scale: 1, rotate: 0 };
      case 'futuristic':
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <MotionBox
      ref={ref}
      initial={getInitialState()}
      animate={inView ? getAnimateState() : getInitialState()}
      transition={{ duration: 0.6, delay }}
    >
      <Box
        bg={bg}
        borderRadius={design.layout.cardRadius}
        border={design.layout.borderStyle === 'dashed' ? '2px dashed' : '1px solid'}
        borderColor={borderColor}
        overflow="hidden"
        h="full"
        display="flex"
        flexDirection="column"
        _hover={{
          transform: design.animations.cardHover,
          boxShadow: design.effects.glow ? 'glowPurple' : '2xl',
          borderColor: 'primary.500',
        }}
        transition={design.animations.transition}
        cursor="pointer"
        onClick={onOpen}
      >
        {/* Project Image */}
        <Box position="relative" overflow="hidden" h="200px">
          <Image
            src={project.image}
            alt={project.title}
            w="full"
            h="full"
            objectFit="cover"
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.1)' }}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgGradient="linear(to-b, transparent, rgba(0,0,0,0.7))"
          />
          <HStack position="absolute" top={4} right={4} spacing={2}>
            <Badge colorScheme={statusColor[project.status]} fontSize="xs">
              {project.status}
            </Badge>
          </HStack>
        </Box>

        {/* Project Content */}
        <VStack p={6} spacing={4} align="start" flex={1}>
          {/* Title & Category */}
          <VStack align="start" spacing={2} w="full">
            <Heading size="md">{project.title}</Heading>
            <HStack spacing={2}>
              <Badge colorScheme="purple" variant="subtle" fontSize="xs">
                {project.category}
              </Badge>
              <Text fontSize="xs" color={textColor}>
                {project.timeline}
              </Text>
            </HStack>
          </VStack>

          {/* Description */}
          <Text
            fontSize="sm"
            color={textColor}
            noOfLines={3}
            flex={1}
          >
            {project.description}
          </Text>

          {/* Impact */}
          <Box
            w="full"
            p={3}
            bg={useColorModeValue('gray.50', 'dark.card')}
            borderRadius="md"
          >
            <Text fontSize="xs" fontWeight="600" color="primary.500">
              Impact: {project.impact}
            </Text>
          </Box>

          {/* Technologies */}
          <Wrap spacing={2}>
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <WrapItem key={idx}>
                <Badge
                  colorScheme="blue"
                  variant="outline"
                  fontSize="xs"
                  px={2}
                  py={1}
                  borderRadius="md"
                >
                  {tech}
                </Badge>
              </WrapItem>
            ))}
            {project.technologies.length > 4 && (
              <WrapItem>
                <Badge
                  colorScheme="gray"
                  variant="outline"
                  fontSize="xs"
                  px={2}
                  py={1}
                  borderRadius="md"
                >
                  +{project.technologies.length - 4} more
                </Badge>
              </WrapItem>
            )}
          </Wrap>

          {/* View Details Button */}
          <Button
            size="sm"
            variant="ghost"
            colorScheme="blue"
            rightIcon={<Icon as={FaExternalLinkAlt} />}
            w="full"
          >
            View Details
          </Button>
        </VStack>
      </Box>
    </MotionBox>
  );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  const textColor = useColorModeValue('gray.600', 'dark.textSecondary');

  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl" scrollBehavior="inside">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent>
        <ModalHeader>
          <VStack align="start" spacing={2}>
            <Heading size="lg">{project.title}</Heading>
            <HStack spacing={3}>
              <Badge colorScheme="purple">{project.category}</Badge>
              <Badge colorScheme="blue">{project.status}</Badge>
              <Text fontSize="sm" color={textColor}>
                {project.timeline}
              </Text>
            </HStack>
          </VStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={6} align="start">
            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              w="full"
              h="300px"
              objectFit="cover"
              borderRadius="lg"
            />

            {/* Description */}
            <Box>
              <Heading size="sm" mb={2}>
                Overview
              </Heading>
              <Text color={textColor}>{project.description}</Text>
            </Box>

            {/* Features */}
            <Box w="full">
              <Heading size="sm" mb={3}>
                Key Features
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
                {project.features.map((feature, idx) => (
                  <HStack key={idx} align="start">
                    <Icon as={FaCheckCircle} color="green.500" mt={1} />
                    <Text fontSize="sm" color={textColor}>
                      {feature}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </Box>

            {/* Technologies */}
            <Box w="full">
              <Heading size="sm" mb={3}>
                Technologies Used
              </Heading>
              <Wrap spacing={2}>
                {project.technologies.map((tech, idx) => (
                  <WrapItem key={idx}>
                    <Badge
                      colorScheme="blue"
                      variant="subtle"
                      fontSize="xs"
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {tech}
                    </Badge>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>

            {/* Metrics */}
            <Box w="full">
              <Heading size="sm" mb={3}>
                Project Metrics
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                {Object.entries(project.metrics).map(([key, value]) => (
                  <Box
                    key={key}
                    p={4}
                    bg={useColorModeValue('gray.50', 'dark.surface')}
                    borderRadius="md"
                    textAlign="center"
                  >
                    <Text
                      fontSize="2xl"
                      fontWeight="bold"
                      color="primary.500"
                    >
                      {value}
                    </Text>
                    <Text
                      fontSize="sm"
                      color={textColor}
                      textTransform="capitalize"
                    >
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            {/* Impact */}
            <Box
              w="full"
              p={4}
              bgGradient={useColorModeValue(
                'linear(to-r, primary.50, secondary.50)',
                'linear(to-r, rgba(0, 112, 243, 0.1), rgba(121, 40, 202, 0.1))'
              )}
              borderRadius="lg"
            >
              <Heading size="sm" mb={2}>
                Business Impact
              </Heading>
              <Text fontSize="lg" fontWeight="600" color="primary.500">
                {project.impact}
              </Text>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);

  const bg = useColorModeValue('gray.50', 'dark.bg');
  const textColor = useColorModeValue('gray.600', 'dark.textSecondary');

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box id="projects" py={20} bg={bg}>
      <Container maxW="7xl">
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <VStack spacing={4} mb={16} textAlign="center">
            <HStack spacing={3} justify="center">
              <Icon as={FaRocket} w={8} h={8} color="primary.500" />
              <Heading
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="extrabold"
              >
                Featured{' '}
                <Box
                  as="span"
                  bgGradient="linear(to-r, primary.500, secondary.500)"
                  bgClip="text"
                >
                  Projects
                </Box>
              </Heading>
            </HStack>
            <Text fontSize="lg" color={textColor} maxW="3xl">
              Transformative GenAI and Data Science projects delivering measurable
              business value and innovation
            </Text>
          </VStack>

          {/* Projects Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={0.2 + index * 0.1}
                onOpen={() => handleOpenModal(project)}
              />
            ))}
          </SimpleGrid>

          {/* Project Modal */}
          <ProjectModal
            project={selectedProject}
            isOpen={isOpen}
            onClose={onClose}
          />
        </MotionBox>
      </Container>
    </Box>
  );
}
