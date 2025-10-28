import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  HStack,
  Icon,
  Divider,
  VStack,
} from '@chakra-ui/react';
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  const bg = useColorModeValue('gray.900', 'dark.surface');
  const textColor = useColorModeValue('gray.400', 'dark.textSecondary');

  return (
    <Box bg={bg} color={textColor}>
      <Container maxW="7xl" py={10}>
        <VStack spacing={8}>
          {/* Top Section */}
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={8}
            justify="space-between"
            align="center"
            w="full"
          >
            {/* Brand */}
            <VStack align={{ base: 'center', md: 'start' }} spacing={2}>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                bgGradient="linear(to-r, primary.500, secondary.500)"
                bgClip="text"
              >
                Dr. Christy Sarguna
              </Text>
              <Text fontSize="sm">
                GenAI Architect & Master Data Scientist
              </Text>
            </VStack>

            {/* Quick Links */}
            <HStack spacing={6} flexWrap="wrap" justify="center">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <ScrollLink
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                >
                  <Link
                    fontSize="sm"
                    _hover={{
                      color: 'primary.500',
                      textDecoration: 'none',
                    }}
                    cursor="pointer"
                  >
                    {item}
                  </Link>
                </ScrollLink>
              ))}
            </HStack>

            {/* Social Links */}
            <HStack spacing={4}>
              <Icon
                as={FaLinkedin}
                w={5}
                h={5}
                cursor="pointer"
                _hover={{ color: 'primary.500' }}
                onClick={() => window.open(personalInfo.linkedin, '_blank')}
              />
              <Icon
                as={FaGithub}
                w={5}
                h={5}
                cursor="pointer"
                _hover={{ color: 'primary.500' }}
                onClick={() => window.open(personalInfo.github, '_blank')}
              />
              <Icon
                as={FaEnvelope}
                w={5}
                h={5}
                cursor="pointer"
                _hover={{ color: 'primary.500' }}
                onClick={() => window.location.href = `mailto:${personalInfo.email}`}
              />
            </HStack>
          </Stack>

          <Divider />

          {/* Bottom Section */}
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify="space-between"
            align="center"
            w="full"
            fontSize="sm"
          >
            <Text textAlign="center">
              © {new Date().getFullYear()} Dr. Christy Sarguna. All rights reserved.
            </Text>

            <HStack>
              <Text>Made with</Text>
              <Icon as={FaHeart} color="red.500" />
              <Text>using React & Chakra UI</Text>
            </HStack>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
}
