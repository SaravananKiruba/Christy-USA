import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Badge,
  Wrap,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaStar } from 'react-icons/fa';
import { experiences } from '../../data/portfolioData';

const MotionBox = motion(Box);

const ExperienceCard = ({ company, delay, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const isEven = index % 2 === 0;
  const colors = ['brand', 'purple', 'orange', 'teal'];
  const colorScheme = colors[index % colors.length];

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50, rotate: isEven ? -3 : 3 }}
      animate={inView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: isEven ? -50 : 50, rotate: isEven ? -3 : 3 }}
      transition={{ duration: 0.8, delay }}
      w="full"
    >
      <Box
        bg="white"
        p={8}
        borderRadius="3xl"
        border="4px solid"
        borderColor={`${colorScheme}.400`}
        position="relative"
        overflow="hidden"
        transform={isEven ? 'rotate(-1deg)' : 'rotate(1deg)'}
        _hover={{
          transform: isEven ? 'rotate(-2deg) scale(1.02)' : 'rotate(2deg) scale(1.02)',
          boxShadow: '2xl',
        }}
        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          bgGradient: `linear(to-r, ${colorScheme}.400, ${colorScheme}.600)`,
        }}
      >
        {/* Decorative Circle */}
        <Box
          position="absolute"
          top="-30px"
          right="-30px"
          w="100px"
          h="100px"
          borderRadius="full"
          bg={`${colorScheme}.100`}
          opacity={0.5}
        />

        {/* Company Header */}
        <HStack spacing={4} mb={6} position="relative" zIndex={1}>
          {company.logo && (
            <Box
              p={2}
              bg={`${colorScheme}.50`}
              borderRadius="xl"
              border="2px solid"
              borderColor={`${colorScheme}.200`}
            >
              <Image
                src={company.logo}
                alt={company.company}
                boxSize="60px"
                objectFit="contain"
              />
            </Box>
          )}
          <VStack align="start" spacing={1} flex={1}>
            <Heading
              size="lg"
              bgGradient={`linear(to-r, ${colorScheme}.500, ${colorScheme}.700)`}
              bgClip="text"
              fontWeight="extrabold"
            >
              {company.company}
            </Heading>
            <HStack>
              <Icon as={FaStar} color={`${colorScheme}.500`} />
              <Text fontSize="sm" color="gray.600" fontWeight="bold">
                {company.positions.length} Position{company.positions.length > 1 ? 's' : ''}
              </Text>
            </HStack>
          </VStack>
        </HStack>

        {/* Positions */}
        <VStack spacing={6} align="stretch">
          {company.positions.map((position, idx) => (
            <Box
              key={idx}
              p={5}
              bgGradient={`linear(to-br, ${colorScheme}.50, white)`}
              borderRadius="2xl"
              border="2px solid"
              borderColor={`${colorScheme}.100`}
            >
              <Heading size="md" color="gray.800" mb={3}>
                🚀 {position.title}
              </Heading>
              <HStack spacing={4} mb={3} fontSize="sm" color="gray.600" flexWrap="wrap">
                <HStack bg="white" px={3} py={1} borderRadius="full" border="2px solid" borderColor={`${colorScheme}.200`}>
                  <Icon as={FaClock} color={`${colorScheme}.500`} />
                  <Text fontWeight="bold">{position.duration}</Text>
                </HStack>
                <HStack bg="white" px={3} py={1} borderRadius="full" border="2px solid" borderColor={`${colorScheme}.200`}>
                  <Icon as={FaMapMarkerAlt} color={`${colorScheme}.500`} />
                  <Text fontWeight="bold">{position.location}</Text>
                </HStack>
              </HStack>
              <Text fontSize="md" color="gray.700" mb={4} lineHeight="tall">
                {position.description}
              </Text>
              {position.achievements && position.achievements.length > 0 && (
                <VStack align="stretch" spacing={2} mb={4}>
                  <Text fontSize="sm" fontWeight="bold" color={`${colorScheme}.700`}>
                    ⭐ Key Achievements:
                  </Text>
                  {position.achievements.slice(0, 3).map((achievement, i) => (
                    <HStack key={i} align="start" spacing={2}>
                      <Box
                        mt={1.5}
                        w="8px"
                        h="8px"
                        borderRadius="full"
                        bg={`${colorScheme}.500`}
                        flexShrink={0}
                      />
                      <Text fontSize="sm" color="gray.700" fontWeight="medium">
                        {achievement}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              )}
              {position.skills && (
                <Wrap spacing={2}>
                  {position.skills.slice(0, 8).map((skill, i) => (
                    <Badge
                      key={i}
                      colorScheme={colorScheme}
                      variant="solid"
                      fontSize="xs"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontWeight="bold"
                    >
                      {skill}
                    </Badge>
                  ))}
                </Wrap>
              )}
            </Box>
          ))}
        </VStack>
      </Box>
    </MotionBox>
  );
};

const ExperienceCreative = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Box
      as="section"
      id="experience"
      py={20}
      bgGradient="linear(135deg, #FFF1F2 0%, #FAF5FF 50%, #F0FDFA 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Floating Shapes */}
      <MotionBox
        position="absolute"
        bottom="10%"
        left="5%"
        w="120px"
        h="120px"
        borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
        bg="orange.200"
        opacity={0.2}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />

      <Container maxW="container.xl" position="relative">
        <VStack spacing={16} align="stretch">
          {/* Section Title */}
          <MotionBox
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            textAlign="center"
          >
            <Box display="inline-block" mb={3}>
              <Box
                px={5}
                py={2}
                bg="white"
                borderRadius="full"
                border="3px solid"
                borderColor="brand.500"
                display="inline-block"
              >
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  bgGradient="linear(to-r, brand.500, purple.500)"
                  bgClip="text"
                  textTransform="uppercase"
                  letterSpacing="wider"
                >
                  💼 My Journey
                </Text>
              </Box>
            </Box>
            <Heading
              as="h2"
              fontSize={{ base: '4xl', md: '5xl' }}
              fontWeight="extrabold"
              bgGradient="linear(to-r, brand.500, purple.500, orange.500)"
              bgClip="text"
              mb={4}
            >
              Career Adventure
            </Heading>
            <Text fontSize="xl" color="gray.700" maxW="2xl" mx="auto" fontWeight="medium">
              🎯 {experiences.length} Amazing Companies | 14+ Years of Impact
            </Text>
          </MotionBox>

          {/* Zigzag Timeline */}
          <VStack spacing={12} align="stretch">
            {experiences.map((company, index) => (
              <ExperienceCard
                key={company.id}
                company={company}
                delay={0.15 * index}
                index={index}
              />
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default ExperienceCreative;
