import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  Divider,
} from '@chakra-ui/react';
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

const FooterModern = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box bg="gray.800" color="white" py={8}>
      <Container maxW="container.xl">
        <VStack spacing={6}>
          <HStack spacing={6}>
            <Link href={personalInfo.linkedin} isExternal>
              <Icon
                as={FaLinkedin}
                boxSize={6}
                _hover={{ color: 'brand.500', transform: 'scale(1.1)' }}
                transition="all 0.3s ease"
              />
            </Link>
            <Link href={personalInfo.github} isExternal>
              <Icon
                as={FaGithub}
                boxSize={6}
                _hover={{ color: 'brand.500', transform: 'scale(1.1)' }}
                transition="all 0.3s ease"
              />
            </Link>
            <Link href={`mailto:${personalInfo.email}`}>
              <Icon
                as={FaEnvelope}
                boxSize={6}
                _hover={{ color: 'brand.500', transform: 'scale(1.1)' }}
                transition="all 0.3s ease"
              />
            </Link>
          </HStack>

          <Divider borderColor="gray.600" />

          <HStack spacing={2} fontSize="sm" color="gray.400">
            <Text>© {currentYear}</Text>
            <Text fontWeight="600" color="white">
              {personalInfo.name}
            </Text>
            <Text>• Made with</Text>
            <Icon as={FaHeart} color="red.500" />
            <Text>using React & Chakra UI</Text>
          </HStack>

          <Text fontSize="xs" color="gray.500">
            {personalInfo.title}
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default FooterModern;
