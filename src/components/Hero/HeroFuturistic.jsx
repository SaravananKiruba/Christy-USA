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
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaTerminal } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import { Link as ScrollLink } from 'react-scroll';
import { keyframes } from '@emotion/react';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

// Glitch animation
const glitchAnimation = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

// Scan line animation
const scanAnimation = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`;

const HeroFuturistic = () => {
  return (
    <Box
      as="section"
      id="home"
      minHeight="100vh"
      display="flex"
      alignItems="center"
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
        opacity={0.1}
        bgImage="linear-gradient(neon.cyan 1px, transparent 1px), linear-gradient(90deg, neon.cyan 1px, transparent 1px)"
        bgSize="50px 50px"
        pointerEvents="none"
      />

      {/* Scan Line Effect */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height="2px"
        bgGradient="linear(to-r, transparent, neon.cyan, transparent)"
        opacity={0.6}
        animation={`${scanAnimation} 8s linear infinite`}
        pointerEvents="none"
      />

      {/* Glowing Orbs */}
      <MotionBox
        position="absolute"
        top="20%"
        left="10%"
        w="200px"
        h="200px"
        borderRadius="full"
        bg="neon.cyan"
        opacity={0.1}
        filter="blur(60px)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
      <MotionBox
        position="absolute"
        bottom="20%"
        right="15%"
        w="250px"
        h="250px"
        borderRadius="full"
        bg="neon.magenta"
        opacity={0.08}
        filter="blur(70px)"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      <Container maxW="container.xl" position="relative">
        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap={16}
          alignItems="center"
        >
          {/* Left Side - Avatar */}
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              position="relative"
            >
              {/* Hexagon Frame */}
              <Box position="relative" textAlign="center">
                {/* Outer Glow */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  w="280px"
                  h="280px"
                  borderRadius="full"
                  border="2px solid"
                  borderColor="neon.cyan"
                  opacity={0.3}
                  boxShadow="0 0 40px rgba(0, 255, 255, 0.5)"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    inset: '-10px',
                    borderRadius: 'full',
                    border: '1px solid',
                    borderColor: 'neon.cyan',
                    opacity: 0.2,
                  }}
                />

                {/* Avatar with Glitch */}
                <MotionBox
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(0, 255, 255, 0.5)',
                      '0 0 40px rgba(0, 255, 255, 0.8)',
                      '0 0 20px rgba(0, 255, 255, 0.5)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Avatar
                    size="2xl"
                    name={personalInfo.name}
                    bg="dark.card"
                    color="neon.cyan"
                    border="4px solid"
                    borderColor="neon.cyan"
                    w="250px"
                    h="250px"
                    position="relative"
                    zIndex={2}
                  />
                </MotionBox>

                {/* Corner Brackets */}
                {['topLeft', 'topRight', 'bottomLeft', 'bottomRight'].map((corner) => (
                  <Box
                    key={corner}
                    position="absolute"
                    {...{
                      topLeft: { top: '-10px', left: '-10px' },
                      topRight: { top: '-10px', right: '-10px' },
                      bottomLeft: { bottom: '-10px', left: '-10px' },
                      bottomRight: { bottom: '-10px', right: '-10px' },
                    }[corner]}
                    w="40px"
                    h="40px"
                    borderColor="neon.green"
                    {...{
                      topLeft: { borderTop: '3px solid', borderLeft: '3px solid' },
                      topRight: { borderTop: '3px solid', borderRight: '3px solid' },
                      bottomLeft: { borderBottom: '3px solid', borderLeft: '3px solid' },
                      bottomRight: { borderBottom: '3px solid', borderRight: '3px solid' },
                    }[corner]}
                  />
                ))}

                {/* Rotating Ring */}
                <MotionBox
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  w="300px"
                  h="300px"
                  border="1px dashed"
                  borderColor="neon.cyan"
                  borderRadius="full"
                  opacity={0.3}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </Box>
            </MotionBox>
          </GridItem>

          {/* Right Side - Content */}
          <GridItem>
            <VStack align={{ base: 'center', lg: 'start' }} spacing={6} textAlign={{ base: 'center', lg: 'left' }}>
              {/* Terminal Header */}
              <MotionBox
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <HStack
                  spacing={3}
                  px={4}
                  py={2}
                  bg="dark.card"
                  borderRadius="md"
                  border="1px solid"
                  borderColor="dark.border"
                  fontFamily="mono"
                  fontSize="sm"
                  color="neon.green"
                >
                  <FaTerminal />
                  <Text>~/portfolio/welcome</Text>
                  <Box w="8px" h="16px" bg="neon.green" animation={`${glitchAnimation} 0.1s infinite`} />
                </HStack>
              </MotionBox>

              {/* Name with Glitch Effect */}
              <MotionHeading
                as="h1"
                fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                fontWeight="bold"
                color="dark.text"
                textShadow="0 0 20px rgba(0, 255, 255, 0.5)"
                lineHeight="1.1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                _hover={{
                  animation: `${glitchAnimation} 0.3s`,
                }}
              >
                {personalInfo.name}
              </MotionHeading>

              {/* Animated Role - Terminal Style */}
              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                fontFamily="mono"
              >
                <Heading
                  as="h2"
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight="bold"
                  color="neon.cyan"
                  minH="40px"
                >
                  <TypeAnimation
                    sequence={[
                      '> GenAI_Architect.execute()',
                      2000,
                      '> Data_Scientist.innovate()',
                      2000,
                      '> AI_Pioneer.lead()',
                      2000,
                      '> Tech_Visionary.create()',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </Heading>
              </MotionBox>

              {/* Tagline */}
              <MotionText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                fontSize="md"
                color="dark.textSecondary"
                lineHeight="tall"
                maxW="500px"
                fontFamily="mono"
              >
                {'> '}{personalInfo.tagline}
              </MotionText>

              {/* Stats Bar */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                w="full"
              >
                <HStack
                  spacing={6}
                  px={6}
                  py={4}
                  bg="dark.card"
                  borderRadius="md"
                  border="1px solid"
                  borderColor="neon.cyan"
                  boxShadow="0 0 20px rgba(0, 255, 255, 0.2)"
                  fontFamily="mono"
                  fontSize="sm"
                >
                  <VStack spacing={0} align="start">
                    <Text color="dark.textSecondary">EXPERIENCE</Text>
                    <Text color="neon.cyan" fontWeight="bold" fontSize="lg">14+ Years</Text>
                  </VStack>
                  <Box w="1px" h="40px" bg="dark.border" />
                  <VStack spacing={0} align="start">
                    <Text color="dark.textSecondary">PROJECTS</Text>
                    <Text color="neon.green" fontWeight="bold" fontSize="lg">200M+</Text>
                  </VStack>
                  <Box w="1px" h="40px" bg="dark.border" />
                  <VStack spacing={0} align="start">
                    <Text color="dark.textSecondary">STATUS</Text>
                    <Text color="neon.magenta" fontWeight="bold" fontSize="lg">ONLINE</Text>
                  </VStack>
                </HStack>
              </MotionBox>

              {/* Social & CTA Buttons */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <VStack spacing={4} align={{ base: 'center', lg: 'start' }}>
                  <HStack spacing={3}>
                    <Button
                      as="a"
                      href={personalInfo.linkedin}
                      target="_blank"
                      leftIcon={<FaLinkedin />}
                      variant="solid"
                      size="md"
                    >
                      CONNECT
                    </Button>
                    <Button
                      as="a"
                      href={personalInfo.github}
                      target="_blank"
                      leftIcon={<FaGithub />}
                      variant="outline"
                      size="md"
                      borderColor="neon.magenta"
                      color="neon.magenta"
                      _hover={{
                        bg: 'rgba(255, 0, 255, 0.1)',
                        boxShadow: 'neonMagenta',
                      }}
                    >
                      GITHUB
                    </Button>
                    <Button
                      as="a"
                      href={`mailto:${personalInfo.email}`}
                      leftIcon={<FaEnvelope />}
                      variant="outline"
                      size="md"
                      borderColor="neon.green"
                      color="neon.green"
                      _hover={{
                        bg: 'rgba(0, 255, 136, 0.1)',
                        boxShadow: 'neonGreen',
                      }}
                    >
                      CONTACT
                    </Button>
                  </HStack>

                  <HStack spacing={4}>
                    <ScrollLink to="about" smooth={true} duration={500}>
                      <Button size="lg" variant="solid">
                        EXPLORE_PORTFOLIO
                      </Button>
                    </ScrollLink>
                    <Button
                      variant="outline"
                      size="lg"
                      leftIcon={<FaDownload />}
                    >
                      DOWNLOAD_CV
                    </Button>
                  </HStack>
                </VStack>
              </MotionBox>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroFuturistic;
