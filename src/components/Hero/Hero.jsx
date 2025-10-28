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
  Icon,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import ParticleBackground from './ParticleBackground';
import { Link as ScrollLink } from 'react-scroll';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.5 },
  },
};

export default function Hero() {
  const bg = useColorModeValue('gray.50', 'dark.bg');
  const textColor = useColorModeValue('gray.600', 'dark.textSecondary');

  return (
    <Box
      id="hero"
      position="relative"
      minH="100vh"
      bg={bg}
      overflow="hidden"
      display="flex"
      alignItems="center"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient={useColorModeValue(
          'linear(to-br, transparent, rgba(0, 112, 243, 0.05))',
          'linear(to-br, transparent, rgba(0, 112, 243, 0.1))'
        )}
        pointerEvents="none"
      />

      <Container maxW="7xl" position="relative" zIndex={1} pt={20}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          textAlign="center"
        >
          {/* Avatar */}
          <MotionBox
            variants={avatarVariants}
            display="flex"
            justifyContent="center"
            mb={6}
          >
            <Avatar
              size="2xl"
              name={personalInfo.name}
              src="https://via.placeholder.com/200/0070F3/FFFFFF?text=Dr.CS"
              border="4px solid"
              borderColor="primary.500"
              boxShadow="0 0 30px rgba(0, 112, 243, 0.3)"
              sx={{
                animation: 'float 3s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-10px)' },
                },
              }}
            />
          </MotionBox>

          {/* Name */}
          <MotionHeading
            variants={itemVariants}
            as="h1"
            size="3xl"
            mb={4}
            bgGradient="linear(to-r, primary.500, secondary.500, accent.500)"
            bgClip="text"
            fontWeight="extrabold"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
          >
            {personalInfo.name}
          </MotionHeading>

          {/* Title */}
          <MotionText
            variants={itemVariants}
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
            fontWeight="600"
            color={textColor}
            mb={6}
          >
            {personalInfo.title}
          </MotionText>

          {/* Animated Roles */}
          <MotionBox variants={itemVariants} mb={6} h="60px">
            <TypeAnimation
              sequence={[
                personalInfo.roles[0],
                2000,
                personalInfo.roles[1],
                2000,
                personalInfo.roles[2],
                2000,
                personalInfo.roles[3],
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: '1.5rem',
                fontWeight: '500',
                background: 'linear-gradient(to right, #0070F3, #7928CA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
              repeat={Infinity}
            />
          </MotionBox>

          {/* Tagline */}
          <MotionText
            variants={itemVariants}
            fontSize={{ base: 'md', md: 'lg' }}
            color={textColor}
            mb={8}
            maxW="2xl"
            mx="auto"
          >
            {personalInfo.tagline}
          </MotionText>

          {/* CTA Buttons */}
          <MotionBox variants={itemVariants}>
            <HStack
              spacing={4}
              justify="center"
              flexWrap="wrap"
              mb={8}
            >
              <ScrollLink to="about" smooth={true} duration={500}>
                <MotionButton
                  variant="primary"
                  size="lg"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 112, 243, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </MotionButton>
              </ScrollLink>

              <ScrollLink to="contact" smooth={true} duration={500}>
                <MotionButton
                  variant="outline"
                  size="lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </MotionButton>
              </ScrollLink>
            </HStack>
          </MotionBox>

          {/* Social Links */}
          <MotionBox variants={itemVariants}>
            <HStack spacing={4} justify="center">
              <MotionBox whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <Icon
                  as={FaLinkedin}
                  w={6}
                  h={6}
                  color="primary.500"
                  cursor="pointer"
                  transition="all 0.3s"
                  _hover={{ color: 'primary.600' }}
                  onClick={() => window.open(personalInfo.linkedin, '_blank')}
                />
              </MotionBox>

              <MotionBox whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <Icon
                  as={FaGithub}
                  w={6}
                  h={6}
                  color={useColorModeValue('gray.700', 'gray.300')}
                  cursor="pointer"
                  transition="all 0.3s"
                  _hover={{ color: 'primary.500' }}
                  onClick={() => window.open(personalInfo.github, '_blank')}
                />
              </MotionBox>

              <MotionBox whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <Icon
                  as={FaEnvelope}
                  w={6}
                  h={6}
                  color="accent.500"
                  cursor="pointer"
                  transition="all 0.3s"
                  _hover={{ color: 'accent.600' }}
                  onClick={() => window.location.href = `mailto:${personalInfo.email}`}
                />
              </MotionBox>
            </HStack>
          </MotionBox>

          {/* Scroll Indicator */}
          <MotionBox
            position="absolute"
            bottom={10}
            left="50%"
            transform="translateX(-50%)"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <VStack spacing={1}>
              <Text fontSize="xs" color={textColor}>
                Scroll Down
              </Text>
              <Box
                w={1}
                h={10}
                bg="primary.500"
                borderRadius="full"
                sx={{
                  animation: 'scroll 2s ease-in-out infinite',
                  '@keyframes scroll': {
                    '0%': { height: '10px', opacity: 1 },
                    '50%': { height: '20px', opacity: 0.5 },
                    '100%': { height: '10px', opacity: 1 },
                  },
                }}
              />
            </VStack>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
