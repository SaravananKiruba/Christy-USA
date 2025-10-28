import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Wrap,
  WrapItem,
  useColorModeValue,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import { experiences } from '../../data/portfolioData';

const MotionBox = motion(Box);

const ExperienceCard = ({ company, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
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
      position="relative"
    >
      {/* Timeline Line */}
      <Box
        position="absolute"
        left={{ base: '20px', md: '40px' }}
        top="60px"
        bottom="-40px"
        w="2px"
        bg="primary.500"
        display={{ base: 'block', lg: 'none' }}
      />

      <Box
        bg={bg}
        borderRadius="xl"
        border="1px solid"
        borderColor={borderColor}
        overflow="hidden"
        _hover={{
          transform: 'translateY(-4px)',
          boxShadow: 'xl',
          borderColor: 'primary.500',
        }}
        transition="all 0.3s ease"
      >
        {/* Company Header */}
        <Box
          p={6}
          bgGradient={useColorModeValue(
            'linear(to-r, gray.50, white)',
            'linear(to-r, dark.card, dark.surface)'
          )}
          borderBottom="1px solid"
          borderColor={borderColor}
        >
          <HStack spacing={4} align="start">
            <Box
              p={2}
              bg={bg}
              borderRadius="lg"
              border="1px solid"
              borderColor={borderColor}
            >
              <Image
                src={company.logo}
                alt={company.company}
                boxSize="50px"
                objectFit="contain"
                fallbackSrc={`https://via.placeholder.com/50/0070F3/FFFFFF?text=${company.company.charAt(0)}`}
              />
            </Box>
            <VStack align="start" spacing={1} flex={1}>
              <Heading size="md">{company.company}</Heading>
              <Text fontSize="sm" color={textColor}>
                {company.positions.length} Position{company.positions.length > 1 ? 's' : ''}
              </Text>
            </VStack>
          </HStack>
        </Box>

        {/* Positions Accordion */}
        <Accordion allowMultiple>
          {company.positions.map((position, index) => (
            <AccordionItem key={index} border="none">
              <AccordionButton
                p={6}
                _hover={{ bg: useColorModeValue('gray.50', 'dark.card') }}
                _expanded={{ bg: useColorModeValue('gray.50', 'dark.card') }}
              >
                <VStack align="start" spacing={3} flex={1} textAlign="left">
                  <HStack spacing={2} flexWrap="wrap">
                    <Heading size="sm">{position.title}</Heading>
                    <Badge colorScheme="blue" fontSize="xs">
                      {position.type}
                    </Badge>
                  </HStack>

                  <HStack spacing={4} flexWrap="wrap" fontSize="sm" color={textColor}>
                    <HStack>
                      <Icon as={FaClock} />
                      <Text>{position.period}</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaMapMarkerAlt} />
                      <Text>{position.location}</Text>
                    </HStack>
                  </HStack>

                  <Text fontSize="xs" color="primary.500" fontWeight="600">
                    {position.duration}
                  </Text>
                </VStack>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={6} px={6}>
                {/* Description */}
                <Text
                  color={textColor}
                  mb={4}
                  lineHeight="tall"
                  fontSize="sm"
                  textAlign="justify"
                >
                  {position.description}
                </Text>

                {/* Achievements */}
                {position.achievements && position.achievements.length > 0 && (
                  <Box mb={4}>
                    <Text fontWeight="600" mb={2} fontSize="sm">
                      Key Achievements:
                    </Text>
                    <VStack align="start" spacing={2}>
                      {position.achievements.map((achievement, idx) => (
                        <HStack key={idx} align="start" spacing={2}>
                          <Icon as={FaCheckCircle} color="green.500" mt={1} />
                          <Text fontSize="sm" color={textColor}>
                            {achievement}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>
                )}

                {/* Skills */}
                <Box>
                  <Text fontWeight="600" mb={2} fontSize="sm">
                    Skills & Technologies:
                  </Text>
                  <Wrap spacing={2}>
                    {position.skills.map((skill, idx) => (
                      <WrapItem key={idx}>
                        <Badge
                          colorScheme="purple"
                          variant="subtle"
                          fontSize="xs"
                          px={3}
                          py={1}
                          borderRadius="full"
                          _hover={{
                            transform: 'scale(1.05)',
                            boxShadow: 'md',
                          }}
                          transition="all 0.2s"
                          cursor="pointer"
                        >
                          {skill}
                        </Badge>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </MotionBox>
  );
};

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const bg = useColorModeValue('gray.50', 'dark.bg');
  const textColor = useColorModeValue('gray.600', 'dark.textSecondary');

  return (
    <Box id="experience" py={20} bg={bg}>
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
              <Icon as={FaBriefcase} w={8} h={8} color="primary.500" />
              <Heading
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="extrabold"
              >
                Professional{' '}
                <Box
                  as="span"
                  bgGradient="linear(to-r, primary.500, secondary.500)"
                  bgClip="text"
                >
                  Experience
                </Box>
              </Heading>
            </HStack>
            <Text fontSize="lg" color={textColor} maxW="3xl">
              14+ years of excellence in data science, GenAI, and analytics across
              leading global organizations
            </Text>
          </VStack>

          {/* Experience Timeline */}
          <VStack spacing={8} align="stretch">
            {experiences.map((company, index) => (
              <ExperienceCard
                key={company.id}
                company={company}
                delay={0.2 + index * 0.1}
              />
            ))}
          </VStack>

          {/* Career Summary */}
          <MotionBox
            mt={12}
            p={8}
            bgGradient={useColorModeValue(
              'linear(to-r, primary.50, secondary.50)',
              'linear(to-r, rgba(0, 112, 243, 0.1), rgba(121, 40, 202, 0.1))'
            )}
            borderRadius="xl"
            textAlign="center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Heading size="md" mb={3}>
              Career Highlights
            </Heading>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify="space-around"
              gap={6}
              mt={6}
            >
              <VStack>
                <Heading size="lg" color="primary.500">
                  6+
                </Heading>
                <Text fontSize="sm" color={textColor}>
                  Companies
                </Text>
              </VStack>
              <VStack>
                <Heading size="lg" color="primary.500">
                  10+
                </Heading>
                <Text fontSize="sm" color={textColor}>
                  Major Projects
                </Text>
              </VStack>
              <VStack>
                <Heading size="lg" color="primary.500">
                  $200M+
                </Heading>
                <Text fontSize="sm" color={textColor}>
                  Business Impact
                </Text>
              </VStack>
              <VStack>
                <Heading size="lg" color="primary.500">
                  3
                </Heading>
                <Text fontSize="sm" color={textColor}>
                  Domains Mastered
                </Text>
              </VStack>
            </Flex>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
