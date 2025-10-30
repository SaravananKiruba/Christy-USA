import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  Circle,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

const MotionBox = motion(Box);
const MotionCircle = motion(Circle);

const ContactBubble = ({ icon, title, value, link, color, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const content = (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: [0, -5, 5, -5, 0],
        transition: { duration: 0.5 }
      }}
    >
      <VStack spacing={4}>
        <MotionCircle
          size="120px"
          bgGradient={color}
          boxShadow="2xl"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={4}
          cursor={link ? 'pointer' : 'default'}
          _hover={{
            boxShadow: '3xl',
          }}
        >
          <Icon as={icon} boxSize={10} color="white" mb={2} />
          <Text fontSize="xs" fontWeight="bold" color="white" textAlign="center">
            {title}
          </Text>
        </MotionCircle>
        <Text
          fontSize="sm"
          fontWeight="700"
          color="gray.800"
          textAlign="center"
          maxW="150px"
        >
          {value}
        </Text>
      </VStack>
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

const ContactCreative = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      py={20}
      id="contact"
      bgGradient="linear(to-b, white, pink.50, purple.50)"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative background shapes */}
      <Box
        position="absolute"
        top="20%"
        right="10%"
        width="300px"
        height="300px"
        bgGradient="linear(to-br, pink.200, purple.200)"
        borderRadius="full"
        filter="blur(80px)"
        opacity={0.5}
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="30%"
        left="5%"
        width="350px"
        height="350px"
        bgGradient="linear(to-br, orange.200, blue.200)"
        borderRadius="full"
        filter="blur(100px)"
        opacity={0.4}
        zIndex={0}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
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
            bgGradient="linear(to-r, pink.500, purple.500, orange.500)"
            bgClip="text"
            fontWeight="extrabold"
            transform="rotate(-2deg)"
          >
            💌 Let's Chat!
          </Heading>
          <Text fontSize="lg" color="gray.700" maxW="2xl" mx="auto" fontWeight="600">
            Ready to create something amazing together?
          </Text>
        </MotionBox>

        {/* Contact bubbles */}
        <HStack spacing={8} justify="center" flexWrap="wrap" mb={12}>
          <ContactBubble
            icon={FaEnvelope}
            title="Email Me"
            value={personalInfo.email}
            link={`mailto:${personalInfo.email}`}
            color="linear(to-br, pink.400, purple.500)"
            delay={0.1}
          />
          <ContactBubble
            icon={FaPhone}
            title="Call Me"
            value={personalInfo.phone}
            link={`tel:${personalInfo.phone}`}
            color="linear(to-br, orange.400, red.500)"
            delay={0.2}
          />
          <ContactBubble
            icon={FaMapMarkerAlt}
            title="Find Me"
            value={personalInfo.location}
            color="linear(to-br, blue.400, cyan.500)"
            delay={0.3}
          />
        </HStack>

        {/* Social media section */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box
            bg="white"
            p={8}
            borderRadius="3xl"
            boxShadow="2xl"
            textAlign="center"
            transform="rotate(1deg)"
            _hover={{
              transform: 'rotate(0deg)',
            }}
            transition="all 0.3s ease"
          >
            <Heading as="h3" size="lg" mb={6} color="gray.800" fontWeight="extrabold">
              🚀 Connect & Collaborate
            </Heading>
            <HStack spacing={6} justify="center">
              <Link href={personalInfo.linkedin} isExternal>
                <MotionCircle
                  size="70px"
                  bgGradient="linear(to-br, blue.400, blue.600)"
                  boxShadow="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  <Icon as={FaLinkedin} boxSize={8} color="white" />
                </MotionCircle>
              </Link>
              <Link href={personalInfo.github} isExternal>
                <MotionCircle
                  size="70px"
                  bgGradient="linear(to-br, gray.700, gray.900)"
                  boxShadow="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  whileHover={{
                    scale: 1.2,
                    rotate: -360,
                    transition: { duration: 0.5 }
                  }}
                >
                  <Icon as={FaGithub} boxSize={8} color="white" />
                </MotionCircle>
              </Link>
            </HStack>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default ContactCreative;
