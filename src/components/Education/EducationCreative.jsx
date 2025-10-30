import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Badge,
  SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaTrophy, FaStar } from 'react-icons/fa';
import { education } from '../../data/portfolioData';

const MotionBox = motion(Box);

// Different color schemes for each card
const colorSchemes = [
  { gradient: 'linear(to-br, pink.400, purple.500)', badge: 'pink', icon: 'pink.500' },
  { gradient: 'linear(to-br, orange.400, red.500)', badge: 'orange', icon: 'orange.500' },
  { gradient: 'linear(to-br, blue.400, cyan.500)', badge: 'blue', icon: 'blue.500' },
];

const EducationCard = ({ edu, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const colorScheme = colorSchemes[index % colorSchemes.length];
  const rotations = [2, -3, 1];
  const rotation = rotations[index % rotations.length];

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotate: rotation * 2 }}
      animate={inView ? { opacity: 1, scale: 1, rotate: rotation } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ 
        scale: 1.05,
        rotate: 0,
        transition: { duration: 0.3 }
      }}
    >
      <Box
        bg="white"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="2xl"
        position="relative"
        height="100%"
        _hover={{
          boxShadow: '3xl',
        }}
        transition="all 0.3s ease"
      >
        {/* Colorful header gradient */}
        <Box
          bgGradient={colorScheme.gradient}
          p={6}
          position="relative"
          overflow="hidden"
        >
          {/* Decorative circles */}
          <Box
            position="absolute"
            top="-20px"
            right="-20px"
            width="100px"
            height="100px"
            borderRadius="full"
            bg="whiteAlpha.300"
          />
          <Box
            position="absolute"
            bottom="-30px"
            left="-30px"
            width="120px"
            height="120px"
            borderRadius="full"
            bg="whiteAlpha.200"
          />

          <HStack justify="space-between" position="relative" zIndex={1}>
            <Box
              width="60px"
              height="60px"
              borderRadius="full"
              bg="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="lg"
            >
              <Icon as={FaGraduationCap} boxSize={8} color={colorScheme.icon} />
            </Box>
            {edu.grade && (
              <Badge
                colorScheme={colorScheme.badge}
                fontSize="md"
                px={4}
                py={2}
                borderRadius="full"
                bg="white"
                color={colorScheme.icon}
                fontWeight="extrabold"
                display="flex"
                alignItems="center"
                gap={2}
                boxShadow="md"
              >
                <Icon as={FaTrophy} />
                {edu.grade}
              </Badge>
            )}
          </HStack>

          <VStack align="start" spacing={2} mt={4} position="relative" zIndex={1}>
            <Heading as="h3" size="lg" color="white" fontWeight="extrabold">
              {edu.degree}
            </Heading>
            <Text fontSize="lg" fontWeight="bold" color="whiteAlpha.900">
              {edu.field}
            </Text>
          </VStack>
        </Box>

        {/* Content */}
        <VStack align="start" spacing={4} p={6}>
          <VStack align="start" spacing={2} width="100%">
            <HStack color="gray.700">
              <Icon as={FaGraduationCap} color={colorScheme.icon} />
              <Text fontWeight="600" fontSize="sm">
                {edu.institution}
              </Text>
            </HStack>
            <HStack spacing={4} flexWrap="wrap">
              <HStack color="gray.600" fontSize="sm">
                <Icon as={FaMapMarkerAlt} />
                <Text>{edu.location}</Text>
              </HStack>
              <HStack color="gray.600" fontSize="sm">
                <Icon as={FaCalendarAlt} />
                <Text>{edu.duration}</Text>
              </HStack>
            </HStack>
          </VStack>

          <Text color="gray.700" fontSize="sm">
            {edu.description}
          </Text>

          {edu.achievements && edu.achievements.length > 0 && (
            <VStack align="start" spacing={2} width="100%">
              <HStack>
                <Icon as={FaStar} color={colorScheme.icon} />
                <Text fontWeight="700" color="gray.800" fontSize="sm">
                  Achievements
                </Text>
              </HStack>
              {edu.achievements.map((achievement, idx) => (
                <HStack key={idx} align="start" spacing={2}>
                  <Box
                    width="8px"
                    height="8px"
                    borderRadius="full"
                    bgGradient={colorScheme.gradient}
                    mt={1.5}
                    flexShrink={0}
                  />
                  <Text fontSize="sm" color="gray.600">
                    {achievement}
                  </Text>
                </HStack>
              ))}
            </VStack>
          )}
        </VStack>
      </Box>
    </MotionBox>
  );
};

const EducationCreative = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      py={20}
      id="education"
      bgGradient="linear(to-b, white, pink.50, purple.50, orange.50)"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative background shapes */}
      <Box
        position="absolute"
        top="15%"
        right="5%"
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
        bottom="25%"
        left="10%"
        width="350px"
        height="350px"
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
            transform="rotate(-1deg)"
          >
            🎓 Academic Journey
          </Heading>
          <Text fontSize="lg" color="gray.700" maxW="2xl" mx="auto" fontWeight="600">
            Building expertise through rigorous education and research
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default EducationCreative;
