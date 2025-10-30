import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

const MotionBox = motion(Box);

const ContactCard = ({ icon, title, value, link, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const content = (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <Box
        bg="white"
        p={6}
        borderRadius="lg"
        boxShadow="md"
        textAlign="center"
        _hover={{
          boxShadow: 'xl',
          transform: 'translateY(-4px)',
        }}
        transition="all 0.3s ease"
      >
        <VStack spacing={4}>
          <Box
            width="60px"
            height="60px"
            borderRadius="full"
            bgGradient="linear(to-br, brand.500, brand.600)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={icon} boxSize={7} color="white" />
          </Box>
          <VStack spacing={1}>
            <Text fontWeight="600" fontSize="sm" color="gray.600">
              {title}
            </Text>
            <Text fontWeight="700" fontSize="md" color="gray.800">
              {value}
            </Text>
          </VStack>
        </VStack>
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

const ContactModern = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box bg="gray.50" py={20} id="contact">
      <Container maxW="container.xl">
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          mb={12}
          textAlign="center"
        >
          <Heading
            as="h2"
            size="2xl"
            mb={4}
            bgGradient="linear(to-r, brand.500, brand.600)"
            bgClip="text"
          >
            Get In Touch
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
            Let's connect and discuss how we can collaborate on innovative AI solutions
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mb={12}>
          <ContactCard
            icon={FaEnvelope}
            title="Email"
            value={personalInfo.email}
            link={`mailto:${personalInfo.email}`}
            delay={0.1}
          />
          <ContactCard
            icon={FaPhone}
            title="Phone"
            value={personalInfo.phone}
            link={`tel:${personalInfo.phone}`}
            delay={0.2}
          />
          <ContactCard
            icon={FaMapMarkerAlt}
            title="Location"
            value={personalInfo.location}
            delay={0.3}
          />
        </SimpleGrid>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box
            bg="white"
            p={8}
            borderRadius="xl"
            boxShadow="lg"
            textAlign="center"
          >
            <Heading as="h3" size="md" mb={4} color="gray.800">
              Connect on Social Media
            </Heading>
            <HStack spacing={6} justify="center">
              <Link href={personalInfo.linkedin} isExternal>
                <Box
                  width="50px"
                  height="50px"
                  borderRadius="lg"
                  bg="blue.500"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{
                    bg: 'blue.600',
                    transform: 'scale(1.1)',
                  }}
                  transition="all 0.3s ease"
                >
                  <Icon as={FaLinkedin} boxSize={6} color="white" />
                </Box>
              </Link>
              <Link href={personalInfo.github} isExternal>
                <Box
                  width="50px"
                  height="50px"
                  borderRadius="lg"
                  bg="gray.800"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{
                    bg: 'gray.900',
                    transform: 'scale(1.1)',
                  }}
                  transition="all 0.3s ease"
                >
                  <Icon as={FaGithub} boxSize={6} color="white" />
                </Box>
              </Link>
            </HStack>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default ContactModern;
