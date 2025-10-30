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
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import { Link as ScrollLink } from 'react-scroll';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const HeroModern = () => {
  const bg = useColorModeValue('white', 'gray.50');

  return (
    <Box
      as="section"
      id="home"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      bg={bg}
      position="relative"
    >
      {/* Subtle Background Pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.03}
        bgImage="radial-gradient(circle, #0EA5E9 1px, transparent 1px)"
        bgSize="30px 30px"
        pointerEvents="none"
      />

      <Container maxW="container.lg" position="relative" px={{ base: 4, md: 6, lg: 8 }}>
        <MotionVStack
          spacing={{ base: 6, md: 8 }}
          align="center"
          textAlign="center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Avatar
              size={{ base: 'xl', md: '2xl' }}
              name={personalInfo.name}
              bg="brand.500"
              color="white"
              border="4px solid"
              borderColor="brand.100"
              boxShadow="xl"
            />
          </MotionBox>

          {/* Name */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Heading
              as="h1"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight="bold"
              color="gray.800"
              letterSpacing="-0.02em"
            >
              {personalInfo.name}
            </Heading>
          </MotionBox>

          {/* Animated Title */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Heading
              as="h2"
              fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
              fontWeight="medium"
              color="brand.500"
              minH={{ base: '30px', md: '40px' }}
            >
              <TypeAnimation
                sequence={[
                  personalInfo.title,
                  3000,
                  'GenAI Innovation Leader',
                  3000,
                  'Data Science Expert',
                  3000,
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
            transition={{ duration: 0.6, delay: 0.8 }}
            maxW={{ base: '90%', md: '600px' }}
            px={{ base: 4, md: 0 }}
          >
            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="tall">
              {personalInfo.tagline}
            </Text>
          </MotionBox>

          {/* Social Links */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <HStack spacing={{ base: 2, md: 4 }} flexWrap="wrap" justify="center">
              <Button
                as="a"
                href={personalInfo.linkedin}
                target="_blank"
                leftIcon={<FaLinkedin />}
                variant="ghost"
                colorScheme="brand"
                size={{ base: 'sm', md: 'md', lg: 'lg' }}
              >
                LinkedIn
              </Button>
              <Button
                as="a"
                href={personalInfo.github}
                target="_blank"
                leftIcon={<FaGithub />}
                variant="ghost"
                colorScheme="gray"
                size={{ base: 'sm', md: 'md', lg: 'lg' }}
              >
                GitHub
              </Button>
              <Button
                as="a"
                href={`mailto:${personalInfo.email}`}
                leftIcon={<FaEnvelope />}
                variant="ghost"
                colorScheme="brand"
                size={{ base: 'sm', md: 'md', lg: 'lg' }}
              >
                Email
              </Button>
            </HStack>
          </MotionBox>

          {/* CTA Buttons */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <HStack spacing={{ base: 3, md: 4 }} flexWrap="wrap" justify="center">
              <ScrollLink to="about" smooth={true} duration={500}>
                <Button size={{ base: 'md', md: 'lg' }} colorScheme="brand">
                  About Me
                </Button>
              </ScrollLink>
              <Button
                variant="outline"
                size={{ base: 'md', md: 'lg' }}
                colorScheme="brand"
                leftIcon={<FaDownload />}
              >
                Download CV
              </Button>
            </HStack>
          </MotionBox>

          {/* Scroll Indicator */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            position="absolute"
            bottom={{ base: 4, md: 8 }}
            display={{ base: 'none', md: 'block' }}
          >
            <VStack spacing={2}>
              <Text fontSize="sm" color="gray.400" letterSpacing="wider">
                SCROLL TO EXPLORE
              </Text>
              <MotionBox
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Box w="1px" h="40px" bg="gray.300" />
              </MotionBox>
            </VStack>
          </MotionBox>
        </MotionVStack>
      </Container>
    </Box>
  );
};

export default HeroModern;
