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
import { FaTrophy, FaBriefcase, FaChartLine, FaDollarSign } from 'react-icons/fa';

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
      <VStack
        p={{ base: 6, md: 8 }}
        bg="white"
        borderRadius="xl"
        border="1px solid"
        borderColor="gray.100"
        spacing={3}
        h="full"
        align="start"
        _hover={{
          transform: 'translateY(-4px)',
          boxShadow: 'lg',
          borderColor: 'brand.200',
        }}
        transition="all 0.3s ease"
      >
        <Icon as={icon} boxSize={{ base: 6, md: 8 }} color="brand.500" />
        <HStack spacing={1} align="baseline">
          <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight="bold" color="gray.800">
            {inView && (
              <CountUp
                end={typeof stat.value === 'number' ? stat.value : parseInt(stat.value)}
                duration={2}
                separator=","
              />
            )}
          </Text>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color="brand.500">
            {stat.suffix}
          </Text>
        </HStack>
        <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold" color="gray.700">
          {stat.label}
        </Text>
        <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.500">
          {stat.description}
        </Text>
      </VStack>
    </MotionBox>
  );
};

const AboutModern = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const iconMap = [FaTrophy, FaBriefcase, FaChartLine, FaDollarSign, FaBriefcase];

  return (
    <Box as="section" id="about" py={{ base: 12, md: 16, lg: 20 }} bg="gray.50">
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
              About Me
            </Text>
            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} color="gray.800" mb={4}>
              Professional Journey
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="2xl" mx="auto">
              Transforming data into insights and leading innovation in AI
            </Text>
          </MotionBox>

          {/* About Text */}
          <MotionBox
            ref={aboutRef}
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Box
              bg="white"
              p={{ base: 6, md: 8, lg: 10 }}
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.100"
              boxShadow="sm"
            >
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="tall" textAlign={{ base: 'left', md: 'justify' }}>
                {personalInfo.about}
              </Text>
            </Box>
          </MotionBox>

          {/* Stats Grid */}
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={{ base: 4, md: 6 }}>
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

export default AboutModern;
