import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Image,
  Badge,
  Icon,
  useColorModeValue,
  Flex,
  Tooltip,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaGraduationCap,
  FaCertificate,
  FaTrophy,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaBook,
} from 'react-icons/fa';
import { education, certifications, publications } from '../../data/portfolioData';

const MotionBox = motion(Box);

const EducationCard = ({ edu, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const bg = useColorModeValue('white', 'dark.surface');
  const borderColor = useColorModeValue('gray.200', 'dark.border');
  const textColor = useColorModeValue('gray.600', 'dark.textSecondary');

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay }}
    >
      <Flex
        p={6}
        bg={bg}
        borderRadius="xl"
        border="1px solid"
        borderColor={borderColor}
        gap={6}
        _hover={{
          transform: 'translateX(8px)',
          boxShadow: 'xl',
          borderColor: 'primary.500',
        }}
        transition="all 0.3s ease"
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '4px',
          bgGradient: 'linear(to-b, primary.500, secondary.500)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
        sx={{
          '&:hover::before': {
            opacity: 1,
          },
        }}
      >
        {/* Logo */}
        <Box flexShrink={0}>
          <Image
            src={edu.logo}
            alt={edu.institution}
            boxSize="80px"
            objectFit="contain"
            borderRadius="lg"
            border="1px solid"
            borderColor={borderColor}
            p={2}
          />
        </Box>

        {/* Content */}
        <VStack align="start" spacing={3} flex={1}>
          <HStack spacing={2} flexWrap="wrap">
            <Heading size="md">{edu.degree}</Heading>
            {edu.grade && (
              <Badge colorScheme="green" fontSize="sm">
                <Icon as={FaTrophy} mr={1} />
                {edu.grade}
              </Badge>
            )}
          </HStack>

          <Text fontWeight="600" color="primary.500">
            {edu.field}
          </Text>

          <VStack align="start" spacing={1} fontSize="sm">
            <Text fontWeight="500">{edu.institution}</Text>
            <HStack color={textColor}>
              <Text>{edu.location}</Text>
              <Text>•</Text>
              <Text>{edu.duration}</Text>
            </HStack>
          </VStack>

          {edu.description && (
            <Text fontSize="sm" color={textColor}>
              {edu.description}
            </Text>
          )}

          {edu.achievements && edu.achievements.length > 0 && (
            <VStack align="start" spacing={2} w="full">
              {edu.achievements.map((achievement, idx) => (
                <HStack key={idx} align="start" spacing={2}>
                  <Icon as={FaCheckCircle} color="green.500" mt={1} />
                  <Text fontSize="sm" color={textColor}>
                    {achievement}
                  </Text>
                </HStack>
              ))}
            </VStack>
          )}
        </VStack>
      </Flex>
    </MotionBox>
  );
};

const CertificationCard = ({ cert, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const bg = useColorModeValue('white', 'dark.surface');
  const borderColor = useColorModeValue('gray.200', 'dark.border');
  const textColor = useColorModeValue('gray.600', 'dark.textSecondary');

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, rotateY: 90 }}
      animate={inView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: 90 }}
      transition={{ duration: 0.6, delay }}
      style={{ perspective: '1000px' }}
    >
      <Tooltip label="Click to view credential" placement="top">
        <Box
          p={6}
          bg={bg}
          borderRadius="xl"
          border="1px solid"
          borderColor={borderColor}
          h="full"
          cursor="pointer"
          _hover={{
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: 'xl',
            borderColor: 'primary.500',
          }}
          transition="all 0.3s ease"
          onClick={() => cert.credentialUrl && window.open(cert.credentialUrl, '_blank')}
        >
          <VStack spacing={4} align="center">
            {/* Logo */}
            <Box
              p={3}
              borderRadius="full"
              bg={useColorModeValue('gray.50', 'dark.card')}
            >
              <Image
                src={cert.logo}
                alt={cert.issuer}
                boxSize="60px"
                objectFit="contain"
                fallbackSrc={`https://via.placeholder.com/60/0070F3/FFFFFF?text=${cert.issuer.charAt(0)}`}
              />
            </Box>

            {/* Title */}
            <Heading size="sm" textAlign="center" noOfLines={2}>
              {cert.title}
            </Heading>

            {/* Issuer */}
            <Text
              fontSize="sm"
              fontWeight="600"
              color="primary.500"
              textAlign="center"
            >
              {cert.issuer}
            </Text>

            {/* Date */}
            <Badge colorScheme="blue" fontSize="xs">
              {cert.issueDate}
            </Badge>

            {/* Credential ID */}
            {cert.credentialId && (
              <Text fontSize="xs" color={textColor} textAlign="center">
                ID: {cert.credentialId}
              </Text>
            )}

            {/* View Link */}
            <HStack spacing={2} color="primary.500" fontSize="sm">
              <Text fontWeight="500">View Credential</Text>
              <Icon as={FaExternalLinkAlt} />
            </HStack>
          </VStack>
        </Box>
      </Tooltip>
    </MotionBox>
  );
};

const PublicationCard = ({ publication, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const bg = useColorModeValue('white', 'dark.surface');
  const borderColor = useColorModeValue('gray.200', 'dark.border');
  const textColor = useColorModeValue('gray.600', 'dark.textSecondary');

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <Box
        p={6}
        bg={bg}
        borderRadius="xl"
        border="1px solid"
        borderColor={borderColor}
        _hover={{
          transform: 'translateY(-4px)',
          boxShadow: 'xl',
          borderColor: 'primary.500',
        }}
        transition="all 0.3s ease"
      >
        <VStack align="start" spacing={4}>
          <HStack spacing={3}>
            <Icon as={FaBook} w={6} h={6} color="primary.500" />
            <Heading size="md">{publication.title}</Heading>
          </HStack>

          <VStack align="start" spacing={2} fontSize="sm" color={textColor}>
            <Text>
              <strong>Journal:</strong> {publication.journal}
            </Text>
            <Text>
              <strong>Volume:</strong> {publication.volume}, Pages {publication.pages}
            </Text>
            <Text>
              <strong>ISSN:</strong> {publication.issn} | <strong>Year:</strong> {publication.year}
            </Text>
            <Text>
              <strong>Authors:</strong> {publication.authors.join(', ')}
            </Text>
          </VStack>

          {publication.abstract && (
            <Text fontSize="sm" color={textColor} fontStyle="italic">
              {publication.abstract}
            </Text>
          )}

          <HStack
            spacing={2}
            color="primary.500"
            fontSize="sm"
            fontWeight="500"
            cursor="pointer"
            _hover={{ textDecoration: 'underline' }}
            onClick={() => window.open(publication.doi, '_blank')}
          >
            <Text>View Publication</Text>
            <Icon as={FaExternalLinkAlt} />
          </HStack>
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default function Education() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const bg = useColorModeValue('white', 'dark.bg');
  const textColor = useColorModeValue('gray.600', 'dark.textSecondary');

  return (
    <Box id="education" py={20} bg={bg}>
      <Container maxW="7xl">
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <VStack spacing={4} mb={16} textAlign="center">
            <HStack spacing={3} justify="center">
              <Icon as={FaGraduationCap} w={8} h={8} color="primary.500" />
              <Heading
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="extrabold"
              >
                Education &{' '}
                <Box
                  as="span"
                  bgGradient="linear(to-r, primary.500, secondary.500)"
                  bgClip="text"
                >
                  Certifications
                </Box>
              </Heading>
            </HStack>
            <Text fontSize="lg" color={textColor} maxW="3xl">
              Academic excellence and continuous professional development in cutting-edge
              technologies
            </Text>
          </VStack>

          {/* Education Timeline */}
          <VStack spacing={6} align="stretch" mb={16}>
            <Heading size="lg" mb={4}>
              <Icon as={FaGraduationCap} mr={2} color="primary.500" />
              Academic Qualifications
            </Heading>
            {education.map((edu, index) => (
              <EducationCard key={edu.id} edu={edu} delay={0.2 + index * 0.1} />
            ))}
          </VStack>

          {/* Certifications */}
          <Box mb={16}>
            <Heading size="lg" mb={6}>
              <Icon as={FaCertificate} mr={2} color="primary.500" />
              Professional Certifications
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {certifications.map((cert, index) => (
                <CertificationCard
                  key={cert.id}
                  cert={cert}
                  delay={0.2 + index * 0.1}
                />
              ))}
            </SimpleGrid>
          </Box>

          {/* Publications */}
          <Box>
            <Heading size="lg" mb={6}>
              <Icon as={FaBook} mr={2} color="primary.500" />
              Research Publications
            </Heading>
            <VStack spacing={6} align="stretch">
              {publications.map((pub, index) => (
                <PublicationCard
                  key={pub.id}
                  publication={pub}
                  delay={0.2 + index * 0.1}
                />
              ))}
            </VStack>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
