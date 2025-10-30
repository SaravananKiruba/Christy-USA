import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { personalInfo } from '../../data/portfolioData';
import { FaDatabase, FaCode, FaChartBar, FaServer, FaMicrochip } from 'react-icons/fa';

const MotionBox = motion(Box);

const StatCard = ({ stat, delay, icon }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      <Box
        p={6}
        bg="dark.card"
        borderRadius="lg"
        border="1px solid"
        borderColor="neon.cyan"
        position="relative"
        overflow="hidden"
        _hover={{
          borderColor: 'neon.magenta',
          boxShadow: '0 0 30px rgba(0, 255, 255, 0.4)',
          transform: 'translateY(-4px)',
        }}
        transition="all 0.3s ease"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          bgGradient: 'linear(to-r, neon.cyan, neon.magenta)',
          opacity: 0.8,
        }}
      >
        <VStack spacing={3} align="start">
          <Icon as={icon} boxSize={8} color="neon.green" opacity={0.8} />
          <HStack spacing={1} align="baseline" fontFamily="mono">
            <Text fontSize="4xl" fontWeight="bold" color="neon.cyan" textShadow="0 0 10px rgba(0, 255, 255, 0.5)">
              {inView && (
                <CountUp
                  end={typeof stat.value === 'number' ? stat.value : parseInt(stat.value)}
                  duration={2}
                  separator=","
                />
              )}
            </Text>
            <Text fontSize="2xl" fontWeight="bold" color="neon.magenta">
              {stat.suffix}
            </Text>
          </HStack>
          <Text fontSize="md" fontWeight="bold" color="dark.text" textTransform="uppercase" letterSpacing="wide">
            {stat.label}
          </Text>
          <Text fontSize="sm" color="dark.textSecondary" fontFamily="mono">
            {'> '}{stat.description}
          </Text>
        </VStack>

        {/* Corner Brackets */}
        <Box
          position="absolute"
          top="4px"
          left="4px"
          w="20px"
          h="20px"
          borderTop="2px solid"
          borderLeft="2px solid"
          borderColor="neon.cyan"
          opacity={0.5}
        />
        <Box
          position="absolute"
          bottom="4px"
          right="4px"
          w="20px"
          h="20px"
          borderBottom="2px solid"
          borderRight="2px solid"
          borderColor="neon.cyan"
          opacity={0.5}
        />
      </Box>
    </MotionBox>
  );
};

const AboutFuturistic = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const iconMap = [FaDatabase, FaCode, FaChartBar, FaServer, FaMicrochip];

  return (
    <Box
      as="section"
      id="about"
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
        opacity={0.08}
        bgImage="linear-gradient(neon.cyan 1px, transparent 1px), linear-gradient(90deg, neon.cyan 1px, transparent 1px)"
        bgSize="40px 40px"
        pointerEvents="none"
      />

      {/* Glowing Orbs */}
      <MotionBox
        position="absolute"
        top="10%"
        right="10%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="neon.magenta"
        opacity={0.05}
        filter="blur(80px)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
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
                ABOUT_ME.SYS
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
              System_Overview
            </Heading>
            <Text fontSize="lg" color="dark.textSecondary" maxW="2xl" mx="auto" fontFamily="mono">
              {'> '}Initializing professional data stream...
            </Text>
          </MotionBox>

          {/* About Text - Terminal Style */}
          <MotionBox
            ref={aboutRef}
            initial={{ opacity: 0, x: -50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box
              bg="dark.card"
              p={8}
              borderRadius="lg"
              border="1px solid"
              borderColor="neon.cyan"
              boxShadow="0 0 20px rgba(0, 255, 255, 0.2)"
              position="relative"
              overflow="hidden"
            >
              {/* Terminal Header */}
              <HStack
                spacing={2}
                mb={4}
                pb={3}
                borderBottom="1px solid"
                borderColor="dark.border"
              >
                <Box w="12px" h="12px" borderRadius="full" bg="neon.magenta" />
                <Box w="12px" h="12px" borderRadius="full" bg="neon.yellow" />
                <Box w="12px" h="12px" borderRadius="full" bg="neon.green" />
                <Text fontSize="xs" color="dark.textSecondary" fontFamily="mono" ml={3}>
                  ~/profile/about.txt
                </Text>
              </HStack>

              <Text fontSize="md" color="dark.text" lineHeight="tall" fontFamily="mono">
                <Text as="span" color="neon.green">{'$ '}</Text>
                {personalInfo.about}
              </Text>

              {/* Scan Line Effect */}
              <MotionBox
                position="absolute"
                top={0}
                left={0}
                right={0}
                height="2px"
                bgGradient="linear(to-r, transparent, neon.cyan, transparent)"
                opacity={0.6}
                animate={{
                  top: ['0%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </Box>
          </MotionBox>

          {/* Stats Grid - Holographic Cards */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {personalInfo.stats.map((stat, index) => (
              <StatCard
                key={index}
                stat={stat}
                delay={0.1 * index}
                icon={iconMap[index % iconMap.length]}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutFuturistic;
