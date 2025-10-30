import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  Circle,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope, FaStar, FaRocket } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

const MotionBox = motion(Box);
const MotionCircle = motion(Circle);

const FooterCreative = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      bgGradient="linear(to-r, pink.500, purple.500, orange.500)"
      color="white"
      py={12}
      position="relative"
      overflow="hidden"
    >
      {/* Decorative shapes */}
      <Box
        position="absolute"
        top="-50px"
        left="10%"
        width="100px"
        height="100px"
        borderRadius="full"
        bg="whiteAlpha.200"
      />
      <Box
        position="absolute"
        bottom="-30px"
        right="15%"
        width="80px"
        height="80px"
        borderRadius="full"
        bg="whiteAlpha.100"
      />
      <Icon
        as={FaStar}
        position="absolute"
        top="20px"
        right="20%"
        boxSize={6}
        color="whiteAlpha.300"
      />
      <Icon
        as={FaRocket}
        position="absolute"
        bottom="20px"
        left="25%"
        boxSize={8}
        color="whiteAlpha.200"
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={8}>
          {/* Social links */}
          <HStack spacing={6}>
            <Link href={personalInfo.linkedin} isExternal>
              <MotionCircle
                size="60px"
                bg="whiteAlpha.300"
                display="flex"
                alignItems="center"
                justifyContent="center"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  bg: "whiteAlpha.400",
                  transition: { duration: 0.5 }
                }}
              >
                <Icon as={FaLinkedin} boxSize={7} />
              </MotionCircle>
            </Link>
            <Link href={personalInfo.github} isExternal>
              <MotionCircle
                size="60px"
                bg="whiteAlpha.300"
                display="flex"
                alignItems="center"
                justifyContent="center"
                whileHover={{
                  scale: 1.2,
                  rotate: -360,
                  bg: "whiteAlpha.400",
                  transition: { duration: 0.5 }
                }}
              >
                <Icon as={FaGithub} boxSize={7} />
              </MotionCircle>
            </Link>
            <Link href={`mailto:${personalInfo.email}`}>
              <MotionCircle
                size="60px"
                bg="whiteAlpha.300"
                display="flex"
                alignItems="center"
                justifyContent="center"
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  bg: "whiteAlpha.400",
                  transition: { duration: 0.3 }
                }}
              >
                <Icon as={FaEnvelope} boxSize={7} />
              </MotionCircle>
            </Link>
          </HStack>

          {/* Name and title */}
          <VStack spacing={2}>
            <Text fontSize="2xl" fontWeight="extrabold" textAlign="center">
              {personalInfo.name}
            </Text>
            <Text fontSize="md" fontWeight="600" textAlign="center" opacity={0.9}>
              {personalInfo.title}
            </Text>
          </VStack>

          {/* Copyright */}
          <MotionBox
            bg="whiteAlpha.200"
            px={8}
            py={4}
            borderRadius="full"
            whileHover={{ scale: 1.05 }}
          >
            <HStack spacing={2} fontSize="sm" fontWeight="600">
              <Text>© {currentYear}</Text>
              <Text>• Crafted with</Text>
              <MotionBox
                animate={{
                  scale: [1, 1.2, 1],
                  transition: { duration: 1, repeat: Infinity }
                }}
              >
                <Icon as={FaHeart} color="red.200" />
              </MotionBox>
              <Text>& lots of creativity!</Text>
            </HStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default FooterCreative;
