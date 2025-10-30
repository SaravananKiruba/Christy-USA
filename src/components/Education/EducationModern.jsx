import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Badge,
  useTheme,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaTrophy } from 'react-icons/fa';
import { education } from '../../data/portfolioData';

const MotionBox = motion(Box);

const EducationCard = ({ edu, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const isEven = index % 2 === 0;

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      position="relative"
    >
      <HStack align="start" spacing={6}>
        {/* Timeline dot and line */}
        <VStack spacing={0} position="relative">
          <Box
            width="40px"
            height="40px"
            borderRadius="full"
            bg="brand.500"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0 0 0 4px white, 0 0 0 6px"
            borderColor="brand.500"
            position="relative"
            zIndex={2}
          >
            <Icon as={FaGraduationCap} color="white" boxSize={5} />
          </Box>
          {index < education.length - 1 && (
            <Box
              width="2px"
              height="100%"
              bg="gray.300"
              position="absolute"
              top="40px"
              left="50%"
              transform="translateX(-50%)"
              minHeight="100px"
            />
          )}
        </VStack>

        {/* Content card */}
        <MotionBox
          flex={1}
          bg="white"
          p={6}
          borderRadius="lg"
          boxShadow="md"
          mb={8}
          _hover={{
            boxShadow: 'xl',
            transform: 'translateY(-4px)',
          }}
          transition="all 0.3s ease"
        >
          <HStack justify="space-between" mb={4} flexWrap="wrap">
            <VStack align="start" spacing={1} flex={1}>
              <Heading as="h3" size="md" color="gray.800">
                {edu.degree}
              </Heading>
              <Text fontSize="lg" fontWeight="600" color="brand.500">
                {edu.field}
              </Text>
            </VStack>
            {edu.grade && (
              <Badge
                colorScheme="blue"
                fontSize="sm"
                px={3}
                py={1}
                borderRadius="full"
                display="flex"
                alignItems="center"
                gap={1}
              >
                <Icon as={FaTrophy} />
                {edu.grade}
              </Badge>
            )}
          </HStack>

          <VStack align="start" spacing={3} mb={4}>
            <HStack color="gray.600">
              <Icon as={FaGraduationCap} />
              <Text fontWeight="500">{edu.institution}</Text>
            </HStack>
            <HStack color="gray.600" spacing={4} flexWrap="wrap">
              <HStack>
                <Icon as={FaMapMarkerAlt} />
                <Text>{edu.location}</Text>
              </HStack>
              <HStack>
                <Icon as={FaCalendarAlt} />
                <Text>{edu.duration}</Text>
              </HStack>
            </HStack>
          </VStack>

          <Text color="gray.700" mb={4}>
            {edu.description}
          </Text>

          {edu.achievements && edu.achievements.length > 0 && (
            <VStack align="start" spacing={2}>
              <Text fontWeight="600" color="gray.700" fontSize="sm">
                Key Achievements:
              </Text>
              {edu.achievements.map((achievement, idx) => (
                <HStack key={idx} align="start" spacing={2}>
                  <Box
                    width="6px"
                    height="6px"
                    borderRadius="full"
                    bg="brand.500"
                    mt={2}
                  />
                  <Text fontSize="sm" color="gray.600" flex={1}>
                    {achievement}
                  </Text>
                </HStack>
              ))}
            </VStack>
          )}
        </MotionBox>
      </HStack>
    </MotionBox>
  );
};

const EducationModern = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box bg="gray.50" py={20} id="education">
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
            Academic Background
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
            A strong foundation in statistics, research, and data science
          </Text>
        </MotionBox>

        <VStack spacing={0} align="stretch" maxW="4xl" mx="auto">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default EducationModern;
