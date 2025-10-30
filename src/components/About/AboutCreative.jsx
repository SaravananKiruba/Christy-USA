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
import { FaStar, FaRocket, FaHeart, FaFire, FaGem } from 'react-icons/fa';

const MotionBox = motion(Box);

const StatCard = ({ stat, delay, icon, colorScheme }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const colorMap = {
    pink: { bg: 'linear(to-br, brand.50, purple.50)', border: 'brand.500', icon: 'brand.500' },
    purple: { bg: 'linear(to-br, purple.50, brand.50)', border: 'purple.500', icon: 'purple.500' },
    orange: { bg: 'linear(to-br, orange.50, brand.50)', border: 'orange.500', icon: 'orange.500' },
    teal: { bg: 'linear(to-br, teal.50, purple.50)', border: 'teal.500', icon: 'teal.500' },
  };

  const colors = colorMap[colorScheme];

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
      transition={{ duration: 0.6, delay }}
    >
      <Box
        p={8}
        bgGradient={colors.bg}
        borderRadius="3xl"
        border="3px solid"
        borderColor={colors.border}
        position="relative"
        overflow="hidden"
        _hover={{
          transform: 'translateY(-8px) rotate(2deg)',
          boxShadow: '2xl',
        }}
        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        {/* Decorative Circle */}
        <Box
          position="absolute"
          top="-20px"
          right="-20px"
          w="100px"
          h="100px"
          borderRadius="full"
          bg={colors.border}
          opacity={0.1}
        />

        <VStack spacing={3} align="start">
          <Icon as={icon} boxSize={10} color={colors.icon} />
          <HStack spacing={1} align="baseline">
            <Text fontSize="5xl" fontWeight="extrabold" color="gray.800">
              {inView && (
                <CountUp
                  end={typeof stat.value === 'number' ? stat.value : parseInt(stat.value)}
                  duration={2.5}
                  separator=","
                />
              )}
            </Text>
            <Text fontSize="3xl" fontWeight="extrabold" color={colors.icon}>
              {stat.suffix}
            </Text>
          </HStack>
          <Text fontSize="xl" fontWeight="bold" color="gray.700">
            {stat.label}
          </Text>
          <Text fontSize="sm" color="gray.600" fontWeight="medium">
            {stat.description}
          </Text>
        </VStack>
      </Box>
    </MotionBox>
  );
};

const AboutCreative = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const iconMap = [FaStar, FaRocket, FaFire, FaGem, FaHeart];
  const colorSchemes = ['pink', 'purple', 'orange', 'teal', 'pink'];

  return (
    <Box
      as="section"
      id="about"
      py={20}
      bgGradient="linear(135deg, #FFF1F2 0%, #FAF5FF 50%, #F0FDFA 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Floating Shapes */}
      <MotionBox
        position="absolute"
        top="10%"
        right="5%"
        w="150px"
        h="150px"
        borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
        bg="purple.200"
        opacity={0.2}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
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
                px={4}
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
                  ✨ About Me ✨
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
              My Creative Journey
            </Heading>
            <Text fontSize="xl" color="gray.700" maxW="2xl" mx="auto" fontWeight="medium">
              🚀 Transforming ideas into reality with AI & Data Science
            </Text>
          </MotionBox>

          {/* About Text - Tilted Card */}
          <MotionBox
            ref={aboutRef}
            initial={{ opacity: 0, x: -50, rotate: -3 }}
            animate={aboutInView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -50, rotate: -3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box
              bg="white"
              p={10}
              borderRadius="3xl"
              border="4px solid"
              borderColor="brand.400"
              boxShadow="2xl"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                bgGradient: 'linear(to-r, brand.500, purple.500, orange.500, teal.500)',
              }}
            >
              <Text fontSize="lg" color="gray.700" lineHeight="tall">
                {personalInfo.about}
              </Text>
            </Box>
          </MotionBox>

          {/* Stats - Bento Box Layout */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {personalInfo.stats.map((stat, index) => (
              <StatCard
                key={index}
                stat={stat}
                delay={0.15 * index}
                icon={iconMap[index % iconMap.length]}
                colorScheme={colorSchemes[index % colorSchemes.length]}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutCreative;
