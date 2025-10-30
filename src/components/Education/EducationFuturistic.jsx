import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Badge,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@emotion/react';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaTrophy, FaChevronRight } from 'react-icons/fa';
import { education } from '../../data/portfolioData';

const MotionBox = motion(Box);

// Neon glow animation
const neonPulse = keyframes`
  0%, 100% { filter: drop-shadow(0 0 5px currentColor) drop-shadow(0 0 15px currentColor); }
  50% { filter: drop-shadow(0 0 10px currentColor) drop-shadow(0 0 25px currentColor); }
`;

// Scan line animation
const scanLine = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const EducationCard = ({ edu, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Alternate colors
  const colors = ['neon.cyan', 'neon.magenta', 'neon.green'];
  const color = colors[index % colors.length];

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      position="relative"
      mb={8}
    >
      <Box
        bg="rgba(10, 10, 15, 0.6)"
        border="2px solid"
        borderColor={color}
        p={6}
        position="relative"
        overflow="hidden"
        _hover={{
          bg: 'rgba(10, 10, 15, 0.8)',
          transform: 'translateX(8px)',
        }}
        transition="all 0.3s ease"
      >
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

        {/* Scan line effect */}
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          width="100px"
          bgGradient={`linear(to-r, transparent, ${color}, transparent)`}
          opacity={0.2}
          animation={`${scanLine} 3s linear infinite`}
          pointerEvents="none"
        />

        {/* Header with icon and degree */}
        <HStack justify="space-between" mb={4} flexWrap="wrap">
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
                as={FaGraduationCap}
                boxSize={6}
                color={color}
                animation={`${neonPulse} 2s ease-in-out infinite`}
              />
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
            <VStack align="start" spacing={0}>
              <Text
                fontSize="xs"
                color={color}
                fontFamily="mono"
                fontWeight="bold"
                letterSpacing="widest"
              >
                EDUCATION_RECORD_{String(index + 1).padStart(2, '0')}
              </Text>
              <Heading
                as="h3"
                size="md"
                color="white"
                fontFamily="heading"
                letterSpacing="wide"
              >
                {edu.degree}
              </Heading>
            </VStack>
          </HStack>
          {edu.grade && (
            <Badge
              bg={color}
              color="gray.900"
              fontSize="sm"
              px={3}
              py={1}
              fontFamily="mono"
              fontWeight="bold"
              display="flex"
              alignItems="center"
              gap={2}
              textTransform="uppercase"
            >
              <Icon as={FaTrophy} />
              {edu.grade}
            </Badge>
          )}
        </HStack>

        {/* Field */}
        <Text
          fontSize="lg"
          fontWeight="600"
          color={color}
          mb={4}
          fontFamily="heading"
          letterSpacing="wide"
        >
          {edu.field}
        </Text>

        {/* Institution and details */}
        <VStack align="start" spacing={2} mb={4}>
          <HStack color="gray.400" fontSize="sm">
            <Icon as={FaChevronRight} color={color} boxSize={3} />
            <Text fontFamily="mono" fontWeight="600">
              INSTITUTION:
            </Text>
            <Text>{edu.institution}</Text>
          </HStack>
          <HStack color="gray.400" fontSize="sm">
            <Icon as={FaChevronRight} color={color} boxSize={3} />
            <Text fontFamily="mono" fontWeight="600">
              LOCATION:
            </Text>
            <Text>{edu.location}</Text>
          </HStack>
          <HStack color="gray.400" fontSize="sm">
            <Icon as={FaChevronRight} color={color} boxSize={3} />
            <Text fontFamily="mono" fontWeight="600">
              DURATION:
            </Text>
            <Text>{edu.duration}</Text>
          </HStack>
        </VStack>

        {/* Description */}
        <Box
          bg="rgba(0, 0, 0, 0.3)"
          borderLeft="3px solid"
          borderColor={color}
          p={3}
          mb={4}
        >
          <Text color="gray.300" fontSize="sm" fontFamily="mono">
            {edu.description}
          </Text>
        </Box>

        {/* Achievements */}
        {edu.achievements && edu.achievements.length > 0 && (
          <VStack align="start" spacing={2}>
            <HStack>
              <Box width="4px" height="4px" bg={color} />
              <Box width="4px" height="4px" bg={color} />
              <Box width="4px" height="4px" bg={color} />
              <Text
                fontFamily="mono"
                fontWeight="bold"
                color={color}
                fontSize="xs"
                letterSpacing="widest"
              >
                ACHIEVEMENTS
              </Text>
            </HStack>
            {edu.achievements.map((achievement, idx) => (
              <HStack key={idx} align="start" spacing={2}>
                <Icon as={FaChevronRight} color={color} boxSize={3} mt={1} />
                <Text fontSize="sm" color="gray.400" fontFamily="mono" flex={1}>
                  {achievement}
                </Text>
              </HStack>
            ))}
          </VStack>
        )}
      </Box>
    </MotionBox>
  );
};

const EducationFuturistic = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      bg="gray.900"
      py={20}
      id="education"
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
        top="15%"
        right="10%"
        width="350px"
        height="350px"
        bg="neon.cyan"
        borderRadius="full"
        filter="blur(100px)"
        opacity={0.15}
        animation={`${neonPulse} 4s ease-in-out infinite`}
      />
      <Box
        position="absolute"
        bottom="20%"
        left="15%"
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
            {'>'} SYSTEM.EDUCATION_RECORDS
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
            ACADEMIC CREDENTIALS
          </Heading>
          <Text fontSize="md" color="gray.400" maxW="2xl" mx="auto" mt={6} fontFamily="mono">
            {'[ Advanced degrees in statistical analysis and data science ]'}
          </Text>
        </MotionBox>

        <VStack spacing={0} align="stretch" maxW="5xl" mx="auto">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default EducationFuturistic;
