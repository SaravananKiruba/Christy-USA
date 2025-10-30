import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTerminal, FaChevronRight } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

// Neon glow animation
const neonPulse = keyframes`
  0%, 100% { filter: drop-shadow(0 0 5px currentColor) drop-shadow(0 0 15px currentColor); }
  50% { filter: drop-shadow(0 0 10px currentColor) drop-shadow(0 0 25px currentColor); }
`;

// Scan line animation
const scanLine = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const FooterFuturistic = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      bg="gray.900"
      borderTop="2px solid"
      borderColor="neon.cyan"
      py={10}
      position="relative"
      overflow="hidden"
    >
      {/* Grid background */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.05}
        backgroundImage="linear-gradient(rgba(0, 240, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.5) 1px, transparent 1px)"
        backgroundSize="30px 30px"
        pointerEvents="none"
      />

      {/* Scan line */}
      <Box
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        width="200px"
        bgGradient="linear(to-r, transparent, neon.cyan, transparent)"
        opacity={0.1}
        animation={`${scanLine} 4s linear infinite`}
        pointerEvents="none"
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={8}>
          {/* Terminal-style header */}
          <HStack spacing={2}>
            <Icon as={FaTerminal} color="neon.cyan" boxSize={4} />
            <Text
              fontSize="xs"
              color="neon.cyan"
              fontFamily="mono"
              fontWeight="bold"
              letterSpacing="widest"
            >
              {'>'} FOOTER.SYS_INITIALIZED
            </Text>
          </HStack>

          {/* Social links */}
          <HStack spacing={6}>
            <Link href={personalInfo.linkedin} isExternal>
              <Box
                border="2px solid"
                borderColor="neon.cyan"
                p={3}
                _hover={{
                  bg: 'rgba(0, 240, 255, 0.1)',
                  transform: 'translateY(-4px)',
                  boxShadow: `0 0 20px #00f0ff33`,
                }}
                transition="all 0.3s ease"
              >
                <Icon
                  as={FaLinkedin}
                  boxSize={6}
                  color="neon.cyan"
                  animation={`${neonPulse} 2s ease-in-out infinite`}
                />
              </Box>
            </Link>
            <Link href={personalInfo.github} isExternal>
              <Box
                border="2px solid"
                borderColor="neon.magenta"
                p={3}
                _hover={{
                  bg: 'rgba(255, 0, 255, 0.1)',
                  transform: 'translateY(-4px)',
                  boxShadow: `0 0 20px #ff00ff33`,
                }}
                transition="all 0.3s ease"
              >
                <Icon
                  as={FaGithub}
                  boxSize={6}
                  color="neon.magenta"
                  animation={`${neonPulse} 2s ease-in-out infinite 0.5s`}
                />
              </Box>
            </Link>
            <Link href={`mailto:${personalInfo.email}`}>
              <Box
                border="2px solid"
                borderColor="neon.green"
                p={3}
                _hover={{
                  bg: 'rgba(0, 255, 127, 0.1)',
                  transform: 'translateY(-4px)',
                  boxShadow: `0 0 20px #00ff7f33`,
                }}
                transition="all 0.3s ease"
              >
                <Icon
                  as={FaEnvelope}
                  boxSize={6}
                  color="neon.green"
                  animation={`${neonPulse} 2s ease-in-out infinite 1s`}
                />
              </Box>
            </Link>
          </HStack>

          {/* Info box */}
          <Box
            bg="rgba(0, 0, 0, 0.4)"
            border="2px solid"
            borderColor="neon.cyan"
            p={6}
            width="100%"
            maxW="3xl"
            position="relative"
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
              borderColor="neon.cyan"
            />
            <Box
              position="absolute"
              bottom={0}
              right={0}
              width="20px"
              height="20px"
              borderBottom="3px solid"
              borderRight="3px solid"
              borderColor="neon.cyan"
            />

            <VStack spacing={3}>
              <HStack spacing={2}>
                <Icon as={FaChevronRight} color="neon.cyan" boxSize={3} />
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  color="white"
                  fontFamily="mono"
                  letterSpacing="wide"
                >
                  {personalInfo.name.toUpperCase()}
                </Text>
              </HStack>
              <Text
                fontSize="xs"
                color="gray.400"
                fontFamily="mono"
                textAlign="center"
              >
                {personalInfo.title}
              </Text>
              <Text
                fontSize="xs"
                color="neon.cyan"
                fontFamily="mono"
                fontWeight="bold"
                letterSpacing="wider"
              >
                © {currentYear} • ALL_RIGHTS_RESERVED.SYS
              </Text>
            </VStack>
          </Box>

          {/* Terminal output */}
          <HStack spacing={2} fontSize="xs" color="gray.500" fontFamily="mono">
            <Text>{'>'}</Text>
            <Text>System.Status: ONLINE</Text>
            <Text>•</Text>
            <Text>Framework: REACT_18.x</Text>
            <Text>•</Text>
            <Text>UI_Library: CHAKRA_2.x</Text>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default FooterFuturistic;
