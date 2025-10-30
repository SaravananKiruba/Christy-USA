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
import { FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { experiences } from '../../data/portfolioData';

const MotionBox = motion(Box);

const ExperienceCard = ({ company, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      position="relative"
      pl={{ base: 6, md: 12 }}
    >
      {/* Timeline Dot */}
      <Box
        position="absolute"
        left={{ base: '0px', md: '-8px' }}
        top="24px"
        w={{ base: '12px', md: '16px' }}
        h={{ base: '12px', md: '16px' }}
        borderRadius="full"
        bg="brand.500"
        border="4px solid"
        borderColor="white"
        boxShadow="0 0 0 4px rgba(14, 165, 233, 0.2)"
        zIndex={2}
      />

      {/* Card */}
      <Box
        bg="white"
        p={{ base: 4, md: 6 }}
        borderRadius="xl"
        border="1px solid"
        borderColor="gray.100"
        boxShadow="sm"
        _hover={{
          boxShadow: 'md',
          borderColor: 'brand.200',
        }}
        transition="all 0.3s ease"
      >
        {/* Company Header */}
        <HStack spacing={{ base: 3, md: 4 }} mb={4} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
          {company.logo && (
            <Image
              src={company.logo}
              alt={company.company}
              boxSize={{ base: '40px', md: '50px' }}
              objectFit="contain"
              borderRadius="md"
            />
          )}
          <Box flex={1}>
            <Heading size={{ base: 'sm', md: 'md' }} color="gray.800" mb={1}>
              {company.company}
            </Heading>
          </Box>
        </HStack>

        {/* Positions */}
        <VStack spacing={4} align="stretch">
          {company.positions.map((position, idx) => (
            <Box key={idx} pl={4} borderLeft="2px solid" borderColor="brand.100">
              <Heading size="sm" color="brand.600" mb={2}>
                {position.title}
              </Heading>
              <HStack spacing={4} mb={2} fontSize="sm" color="gray.600" flexWrap="wrap">
                <HStack>
                  <Icon as={FaClock} />
                  <Text>{position.duration}</Text>
                </HStack>
                <HStack>
                  <Icon as={FaMapMarkerAlt} />
                  <Text>{position.location}</Text>
                </HStack>
              </HStack>
              <Text fontSize="sm" color="gray.700" mb={3} lineHeight="tall">
                {position.description}
              </Text>
              {position.achievements && position.achievements.length > 0 && (
                <VStack align="stretch" spacing={1} mb={3}>
                  {position.achievements.map((achievement, i) => (
                    <HStack key={i} align="start" spacing={2}>
                      <Box mt={1.5} w="4px" h="4px" borderRadius="full" bg="brand.500" flexShrink={0} />
                      <Text fontSize="sm" color="gray.600">{achievement}</Text>
                    </HStack>
                  ))}
                </VStack>
              )}
              {position.skills && (
                <Wrap spacing={2}>
                  {position.skills.slice(0, 6).map((skill, i) => (
                    <Badge key={i} colorScheme="blue" variant="subtle" fontSize="xs">
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

const ExperienceModern = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Box as="section" id="experience" py={{ base: 12, md: 16, lg: 20 }} bg="white">
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
        <VStack spacing={{ base: 12, md: 16 }} align="stretch">
          {/* Section Title */}
          <MotionBox
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            textAlign="center"
          >
            <Text
              fontSize={{ base: 'xs', md: 'sm' }}
              fontWeight="semibold"
              color="brand.500"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={2}
            >
              Career Journey
            </Text>
            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} color="gray.800" mb={4}>
              Professional Experience
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="2xl" mx="auto">
              {experiences.length}+ companies | 14+ years of innovation
            </Text>
          </MotionBox>

          {/* Timeline */}
          <Box position="relative">
            {/* Vertical Line */}
            <Box
              position="absolute"
              left={{ base: '4px', md: '0px' }}
              top="40px"
              bottom="40px"
              w="2px"
              bg="gray.200"
              zIndex={0}
            />

            <VStack spacing={{ base: 6, md: 8 }} align="stretch">
              {experiences.map((company, index) => (
                <ExperienceCard
                  key={company.id}
                  company={company}
                  delay={0.1 * index}
                />
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default ExperienceModern;
