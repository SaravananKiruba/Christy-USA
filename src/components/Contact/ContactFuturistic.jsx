import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@emotion/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaChevronRight, FaTerminal } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

const MotionBox = motion(Box);

// Neon glow animation
const neonPulse = keyframes`
  0%, 100% { filter: drop-shadow(0 0 5px currentColor) drop-shadow(0 0 15px currentColor); }
  50% { filter: drop-shadow(0 0 10px currentColor) drop-shadow(0 0 25px currentColor); }
`;

// Typing cursor animation
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const ContactItem = ({ icon, label, value, link, color, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const content = (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <Box
        bg="rgba(10, 10, 15, 0.6)"
        border="2px solid"
        borderColor={color}
        p={5}
        mb={4}
        position="relative"
        overflow="hidden"
        _hover={{
          bg: 'rgba(10, 10, 15, 0.8)',
          transform: 'translateX(8px)',
          boxShadow: `0 0 20px ${color}33`,
        }}
        transition="all 0.3s ease"
        cursor={link ? 'pointer' : 'default'}
      >
        {/* Corner brackets */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="20px"
          height="20px"
          borderTop="3px solid"
          borderLeft="3px solid"
          borderColor={color}
        />
        <Box
          position="absolute"
          bottom={0}
          right={0}
          width="20px"
          height="20px"
          borderBottom="3px solid"
          borderRight="3px solid"
          borderColor={color}
        />

        <HStack spacing={4}>
          <Box
            width="50px"
            height="50px"
            border="2px solid"
            borderColor={color}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon
              as={icon}
              boxSize={6}
              color={color}
              animation={`${neonPulse} 2s ease-in-out infinite`}
            />
          </Box>
          <VStack align="start" spacing={1} flex={1}>
            <Text
              fontSize="xs"
              color={color}
              fontFamily="mono"
              fontWeight="bold"
              letterSpacing="widest"
            >
              {label.toUpperCase()}
            </Text>
            <Text
              fontSize="md"
              color="white"
              fontFamily="mono"
              fontWeight="600"
            >
              {value}
            </Text>
          </VStack>
          <Icon as={FaChevronRight} color={color} boxSize={5} />
        </HStack>
      </Box>
    </MotionBox>
  );

  if (link) {
    return (
      <Link href={link} isExternal _hover={{ textDecoration: 'none' }}>
        {content}
      </Link>
    );
  }

  return content;
};

const ContactFuturistic = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      bg="gray.900"
      py={20}
      id="contact"
      position="relative"
      overflow="hidden"
    >
      {/* Animated grid background */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.1}
        backgroundImage="linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)"
        backgroundSize="50px 50px"
        pointerEvents="none"
      />

      {/* Neon glow effects */}
      <Box
        position="absolute"
        top="15%"
        right="10%"
        width="350px"
        height="350px"
        bg="neon.cyan"
        borderRadius="full"
        filter="blur(120px)"
        opacity={0.15}
        animation={`${neonPulse} 4s ease-in-out infinite`}
      />
      <Box
        position="absolute"
        bottom="20%"
        left="10%"
        width="400px"
        height="400px"
        bg="neon.magenta"
        borderRadius="full"
        filter="blur(140px)"
        opacity={0.12}
        animation={`${neonPulse} 5s ease-in-out infinite`}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          mb={16}
          textAlign="center"
        >
          <Text
            fontSize="sm"
            color="neon.cyan"
            fontFamily="mono"
            fontWeight="bold"
            letterSpacing="widest"
            mb={4}
          >
            {'>'} SYSTEM.CONTACT_INTERFACE
          </Text>
          <Heading
            as="h2"
            size="2xl"
            mb={4}
            color="white"
            fontFamily="heading"
            textTransform="uppercase"
            letterSpacing="wider"
            position="relative"
            display="inline-block"
            _after={{
              content: '""',
              position: 'absolute',
              bottom: '-8px',
              left: 0,
              right: 0,
              height: '3px',
              bgGradient: 'linear(to-r, neon.cyan, neon.magenta)',
              animation: `${neonPulse} 2s ease-in-out infinite`,
            }}
          >
            ESTABLISH CONNECTION
          </Heading>
          <HStack justify="center" mt={6} fontFamily="mono" fontSize="md" color="gray.400">
            <Text>{'> Initializing communication protocols'}</Text>
            <Box
              width="2px"
              height="20px"
              bg="neon.cyan"
              animation={`${blink} 1s ease-in-out infinite`}
            />
          </HStack>
        </MotionBox>

        {/* Contact items */}
        <VStack spacing={0} align="stretch" maxW="3xl" mx="auto" mb={12}>
          <ContactItem
            icon={FaEnvelope}
            label="Email Address"
            value={personalInfo.email}
            link={`mailto:${personalInfo.email}`}
            color="neon.cyan"
            delay={0.1}
          />
          <ContactItem
            icon={FaPhone}
            label="Phone Number"
            value={personalInfo.phone}
            link={`tel:${personalInfo.phone}`}
            color="neon.magenta"
            delay={0.2}
          />
          <ContactItem
            icon={FaMapMarkerAlt}
            label="Location"
            value={personalInfo.location}
            color="neon.green"
            delay={0.3}
          />
        </VStack>

        {/* Social links */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box
            bg="rgba(0, 0, 0, 0.4)"
            border="2px solid"
            borderColor="neon.cyan"
            p={8}
            maxW="2xl"
            mx="auto"
            position="relative"
          >
            {/* Terminal header */}
            <HStack mb={6} spacing={2}>
              <Icon as={FaTerminal} color="neon.cyan" />
              <Text
                fontSize="xs"
                color="neon.cyan"
                fontFamily="mono"
                fontWeight="bold"
                letterSpacing="widest"
              >
                SOCIAL_NETWORKS.EXE
              </Text>
            </HStack>

            <VStack spacing={4}>
              <Link href={personalInfo.linkedin} isExternal width="100%" _hover={{ textDecoration: 'none' }}>
                <Box
                  bg="rgba(0, 240, 255, 0.1)"
                  border="2px solid"
                  borderColor="neon.cyan"
                  p={4}
                  _hover={{
                    bg: 'rgba(0, 240, 255, 0.2)',
                    transform: 'translateX(8px)',
                  }}
                  transition="all 0.3s ease"
                >
                  <HStack justify="space-between">
                    <HStack>
                      <Icon as={FaLinkedin} color="neon.cyan" boxSize={6} />
                      <Text color="white" fontFamily="mono" fontWeight="bold">
                        LinkedIn Profile
                      </Text>
                    </HStack>
                    <Icon as={FaChevronRight} color="neon.cyan" />
                  </HStack>
                </Box>
              </Link>

              <Link href={personalInfo.github} isExternal width="100%" _hover={{ textDecoration: 'none' }}>
                <Box
                  bg="rgba(255, 0, 255, 0.1)"
                  border="2px solid"
                  borderColor="neon.magenta"
                  p={4}
                  _hover={{
                    bg: 'rgba(255, 0, 255, 0.2)',
                    transform: 'translateX(8px)',
                  }}
                  transition="all 0.3s ease"
                >
                  <HStack justify="space-between">
                    <HStack>
                      <Icon as={FaGithub} color="neon.magenta" boxSize={6} />
                      <Text color="white" fontFamily="mono" fontWeight="bold">
                        GitHub Repository
                      </Text>
                    </HStack>
                    <Icon as={FaChevronRight} color="neon.magenta" />
                  </HStack>
                </Box>
              </Link>
            </VStack>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default ContactFuturistic;
