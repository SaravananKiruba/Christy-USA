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
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaTerminal } from 'react-icons/fa';
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
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay }}
    >
      <Box
        bg="dark.card"
        p={6}
        borderRadius="lg"
        border="1px solid"
        borderColor="neon.cyan"
        position="relative"
        overflow="hidden"
        _hover={{
          borderColor: 'neon.magenta',
          boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)',
        }}
        transition="all 0.3s ease"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          bgGradient: 'linear(to-r, neon.cyan, neon.magenta, neon.green)',
        }}
      >
        {/* Corner Brackets */}
        <Box position="absolute" top="8px" left="8px" w="20px" h="20px" borderTop="2px solid" borderLeft="2px solid" borderColor="neon.cyan" opacity={0.5} />
        <Box position="absolute" top="8px" right="8px" w="20px" h="20px" borderTop="2px solid" borderRight="2px solid" borderColor="neon.cyan" opacity={0.5} />
        <Box position="absolute" bottom="8px" left="8px" w="20px" h="20px" borderBottom="2px solid" borderLeft="2px solid" borderColor="neon.cyan" opacity={0.5} />
        <Box position="absolute" bottom="8px" right="8px" w="20px" h="20px" borderBottom="2px solid" borderRight="2px solid" borderColor="neon.cyan" opacity={0.5} />

        {/* Company Header */}
        <HStack spacing={4} mb={6} position="relative">
          {company.logo && (
            <Box
              p={2}
              bg="dark.surface"
              borderRadius="md"
              border="1px solid"
              borderColor="neon.green"
              boxShadow="0 0 15px rgba(0, 255, 136, 0.2)"
            >
              <Image
                src={company.logo}
                alt={company.company}
                boxSize="50px"
                objectFit="contain"
                filter="brightness(1.2)"
              />
            </Box>
          )}
          <VStack align="start" spacing={1} flex={1}>
            <Heading
              size="lg"
              color="neon.cyan"
              fontFamily="heading"
              textTransform="uppercase"
              textShadow="0 0 10px rgba(0, 255, 255, 0.5)"
            >
              {company.company}
            </Heading>
            <HStack fontFamily="mono" fontSize="xs" color="dark.textSecondary">
              <Text>{'>'}</Text>
              <Text>COMPANY_ID: {String(company.id).padStart(3, '0')}</Text>
            </HStack>
          </VStack>
        </HStack>

        {/* Positions */}
        <VStack spacing={5} align="stretch">
          {company.positions.map((position, idx) => (
            <Box
              key={idx}
              p={4}
              bg="dark.surface"
              borderRadius="md"
              border="1px solid"
              borderColor="dark.border"
              position="relative"
            >
              {/* Terminal Header */}
              <HStack spacing={2} mb={3} pb={2} borderBottom="1px solid" borderColor="dark.border">
                <Box w="8px" h="8px" borderRadius="full" bg="neon.magenta" />
                <Box w="8px" h="8px" borderRadius="full" bg="neon.yellow" />
                <Box w="8px" h="8px" borderRadius="full" bg="neon.green" />
                <Text fontSize="xs" color="dark.textSecondary" fontFamily="mono" ml={2}>
                  ~/career/{position.title.toLowerCase().replace(/\s+/g, '_')}.sh
                </Text>
              </HStack>

              <Heading size="sm" color="neon.green" mb={3} fontFamily="mono" textTransform="uppercase">
                {'$ '}{position.title}
              </Heading>

              <HStack spacing={4} mb={3} fontSize="xs" color="dark.textSecondary" fontFamily="mono" flexWrap="wrap">
                <HStack>
                  <Text color="neon.cyan">{'['}</Text>
                  <Icon as={FaClock} />
                  <Text>{position.duration}</Text>
                  <Text color="neon.cyan">{']'}</Text>
                </HStack>
                <HStack>
                  <Text color="neon.cyan">{'['}</Text>
                  <Icon as={FaMapMarkerAlt} />
                  <Text>{position.location}</Text>
                  <Text color="neon.cyan">{']'}</Text>
                </HStack>
              </HStack>

              <Text fontSize="sm" color="dark.text" mb={3} lineHeight="tall" fontFamily="mono">
                <Text as="span" color="neon.green">{'> '}</Text>
                {position.description}
              </Text>

              {position.achievements && position.achievements.length > 0 && (
                <VStack align="stretch" spacing={1} mb={3}>
                  <Text fontSize="xs" color="neon.magenta" fontFamily="mono" fontWeight="bold">
                    {'> OUTPUT:'}
                  </Text>
                  {position.achievements.slice(0, 3).map((achievement, i) => (
                    <HStack key={i} align="start" spacing={2} fontFamily="mono" fontSize="xs">
                      <Text color="neon.cyan">{'[+]'}</Text>
                      <Text color="dark.textSecondary">{achievement}</Text>
                    </HStack>
                  ))}
                </VStack>
              )}

              {position.skills && (
                <Box>
                  <Text fontSize="xs" color="neon.yellow" fontFamily="mono" mb={2}>
                    {'> TECH_STACK:'}
                  </Text>
                  <Wrap spacing={2}>
                    {position.skills.slice(0, 6).map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        colorScheme="cyan"
                        fontSize="2xs"
                        fontFamily="mono"
                        px={2}
                        py={1}
                        borderColor="neon.cyan"
                        color="neon.cyan"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </Wrap>
                </Box>
              )}
            </Box>
          ))}
        </VStack>
      </Box>
    </MotionBox>
  );
};

const ExperienceFuturistic = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Box
      as="section"
      id="experience"
      py={20}
      bg="dark.bg"
      position="relative"
      overflow="hidden"
    >
      {/* Grid Background */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.05}
        bgImage="linear-gradient(neon.cyan 1px, transparent 1px), linear-gradient(90deg, neon.cyan 1px, transparent 1px)"
        bgSize="50px 50px"
        pointerEvents="none"
      />

      {/* Glowing Orb */}
      <MotionBox
        position="absolute"
        top="20%"
        left="10%"
        w="250px"
        h="250px"
        borderRadius="full"
        bg="neon.cyan"
        opacity={0.05}
        filter="blur(70px)"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 6,
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
            <HStack justify="center" spacing={3} mb={3} fontFamily="mono">
              <Text fontSize="sm" color="neon.cyan">{'['}</Text>
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="neon.green"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                EXPERIENCE.LOG
              </Text>
              <Text fontSize="sm" color="neon.cyan">{']'}</Text>
            </HStack>
            <Heading
              as="h2"
              fontSize={{ base: '4xl', md: '5xl' }}
              fontWeight="bold"
              color="dark.text"
              textShadow="0 0 20px rgba(0, 255, 255, 0.5)"
              fontFamily="heading"
              textTransform="uppercase"
              mb={4}
            >
              Career_Timeline
            </Heading>
            <Text fontSize="md" color="dark.textSecondary" maxW="2xl" mx="auto" fontFamily="mono">
              {'> '}Logged {experiences.length} companies | 14+ years_of_code
            </Text>
          </MotionBox>

          {/* Timeline with Neon Line */}
          <Box position="relative">
            {/* Neon Timeline Line */}
            <Box
              position="absolute"
              left="0"
              top="30px"
              bottom="30px"
              w="2px"
              bgGradient="linear(to-b, neon.cyan, neon.magenta, neon.green)"
              opacity={0.6}
              boxShadow="0 0 10px rgba(0, 255, 255, 0.5)"
              zIndex={0}
            />

            <VStack spacing={8} align="stretch" pl={8}>
              {experiences.map((company, index) => (
                <Box key={company.id} position="relative">
                  {/* Timeline Dot */}
                  <MotionBox
                    position="absolute"
                    left="-41px"
                    top="24px"
                    w="14px"
                    h="14px"
                    borderRadius="full"
                    bg="neon.cyan"
                    boxShadow="0 0 20px rgba(0, 255, 255, 0.8)"
                    zIndex={2}
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(0, 255, 255, 0.8)',
                        '0 0 30px rgba(0, 255, 255, 1)',
                        '0 0 20px rgba(0, 255, 255, 0.8)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <ExperienceCard
                    company={company}
                    delay={0.1 * index}
                  />
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default ExperienceFuturistic;
