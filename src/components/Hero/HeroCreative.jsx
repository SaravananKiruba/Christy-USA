import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Avatar,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaRocket, FaStar } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import { Link as ScrollLink } from 'react-scroll';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const HeroCreative = () => {
  return (
    <Box
      as="section"
      id="home"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      bgGradient="linear(135deg, #FFF1F2 0%, #FAF5FF 50%, #F0FDFA 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Floating Shapes Background */}
      <MotionBox
        position="absolute"
        top="10%"
        left="5%"
        w="100px"
        h="100px"
        borderRadius="30px"
        bgGradient="linear(to-br, brand.400, purple.400)"
        opacity={0.2}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <MotionBox
        position="absolute"
        bottom="15%"
        right="10%"
        w="150px"
        h="150px"
        borderRadius="full"
        bgGradient="linear(to-br, orange.300, teal.300)"
        opacity={0.15}
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <MotionBox
        position="absolute"
        top="40%"
        right="20%"
        w="80px"
        h="80px"
        transform="rotate(45deg)"
        bg="purple.200"
        opacity={0.2}
        animate={{
          rotate: [45, 135, 45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container maxW="container.xl" position="relative">
        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap={12}
          alignItems="center"
        >
          {/* Left Side - Avatar & Visual Elements */}
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              position="relative"
            >
              {/* Decorative Background */}
              <Box
                position="absolute"
                top="-20px"
                left="-20px"
                right="-20px"
                bottom="-20px"
                borderRadius="3xl"
                bgGradient="linear(to-br, brand.400, purple.400, orange.400)"
                transform="rotate(-5deg)"
                opacity={0.2}
              />
              
              <Box position="relative" textAlign="center">
                <Avatar
                  size="2xl"
                  name={personalInfo.name}
                  bg="brand.500"
                  color="white"
                  border="6px solid white"
                  boxShadow="2xl"
                  w="250px"
                  h="250px"
                />
                
                {/* Floating Badges */}
                <MotionBox
                  position="absolute"
                  top="-10px"
                  right="-10px"
                  bg="orange.500"
                  color="white"
                  p={3}
                  borderRadius="2xl"
                  boxShadow="xl"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <FaRocket size={24} />
                </MotionBox>
                
                <MotionBox
                  position="absolute"
                  bottom="-10px"
                  left="-10px"
                  bg="purple.500"
                  color="white"
                  p={3}
                  borderRadius="2xl"
                  boxShadow="xl"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <FaStar size={24} />
                </MotionBox>
              </Box>
            </MotionBox>
          </GridItem>

          {/* Right Side - Content */}
          <GridItem>
            <VStack align={{ base: 'center', lg: 'start' }} spacing={6} textAlign={{ base: 'center', lg: 'left' }}>
              {/* Greeting Badge */}
              <MotionBox
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  display="inline-block"
                  px={4}
                  py={2}
                  bg="white"
                  borderRadius="full"
                  boxShadow="md"
                  border="2px solid"
                  borderColor="brand.200"
                >
                  <Text fontSize="sm" fontWeight="bold" color="brand.500">
                    👋 Welcome to my Portfolio
                  </Text>
                </Box>
              </MotionBox>

              {/* Name */}
              <MotionHeading
                as="h1"
                fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                fontWeight="extrabold"
                bgGradient="linear(to-r, brand.500, purple.500)"
                bgClip="text"
                lineHeight="1.1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {personalInfo.name}
              </MotionHeading>

              {/* Animated Role */}
              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl' }}
                  fontWeight="bold"
                  color="gray.700"
                  minH="50px"
                >
                  <TypeAnimation
                    sequence={[
                      '🚀 GenAI Architect',
                      2000,
                      '🎨 Innovation Leader',
                      2000,
                      '💡 Data Science Expert',
                      2000,
                      '⚡ AI Pioneer',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </Heading>
              </MotionBox>

              {/* Tagline */}
              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Text fontSize="lg" color="gray.600" lineHeight="tall" maxW="500px">
                  {personalInfo.tagline}
                </Text>
              </MotionBox>

              {/* Social Icons */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <HStack spacing={3}>
                  <Button
                    as="a"
                    href={personalInfo.linkedin}
                    target="_blank"
                    leftIcon={<FaLinkedin />}
                    bgGradient="linear(to-r, brand.500, purple.500)"
                    color="white"
                    size="md"
                    _hover={{
                      transform: 'translateY(-4px) rotate(-2deg)',
                      boxShadow: '2xl',
                    }}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    as="a"
                    href={personalInfo.github}
                    target="_blank"
                    leftIcon={<FaGithub />}
                    variant="outline"
                    colorScheme="purple"
                    size="md"
                    _hover={{
                      transform: 'translateY(-4px) rotate(2deg)',
                      boxShadow: 'lg',
                    }}
                  >
                    GitHub
                  </Button>
                  <Button
                    as="a"
                    href={`mailto:${personalInfo.email}`}
                    leftIcon={<FaEnvelope />}
                    variant="outline"
                    colorScheme="orange"
                    size="md"
                    _hover={{
                      transform: 'translateY(-4px) rotate(-2deg)',
                      boxShadow: 'lg',
                    }}
                  >
                    Email
                  </Button>
                </HStack>
              </MotionBox>

              {/* CTA Buttons */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <HStack spacing={4}>
                  <ScrollLink to="about" smooth={true} duration={500}>
                    <Button
                      size="lg"
                      bgGradient="linear(to-r, brand.500, purple.500)"
                      color="white"
                      px={8}
                      _hover={{
                        transform: 'translateY(-4px) scale(1.05)',
                        boxShadow: '2xl',
                      }}
                    >
                      Explore My Work
                    </Button>
                  </ScrollLink>
                  <Button
                    variant="outline"
                    size="lg"
                    colorScheme="brand"
                    leftIcon={<FaDownload />}
                    borderWidth="2px"
                    _hover={{
                      transform: 'translateY(-4px) rotate(2deg)',
                      boxShadow: 'xl',
                    }}
                  >
                    Download CV
                  </Button>
                </HStack>
              </MotionBox>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroCreative;
