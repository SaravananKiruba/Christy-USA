import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { personalInfo } from '../../data/portfolioData';

const MotionBox = motion(Box);

const StatCard = ({ stat, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const bg = useColorModeValue('white', 'dark.surface');
  const borderColor = useColorModeValue('gray.200', 'dark.border');

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <VStack
        p={6}
        bg={bg}
        borderRadius="xl"
        border="1px solid"
        borderColor={borderColor}
        spacing={2}
        h="full"
        position="relative"
        overflow="hidden"
        _hover={{
          transform: 'translateY(-8px)',
          boxShadow: 'xl',
          borderColor: 'primary.500',
        }}
        transition="all 0.3s ease"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          bgGradient: 'linear(to-r, primary.500, secondary.500)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
        sx={{
          '&:hover::before': {
            opacity: 1,
          },
        }}
      >
        <Heading
          size="3xl"
          bgGradient="linear(to-r, primary.500, secondary.500)"
          bgClip="text"
          fontWeight="extrabold"
        >
          {inView && (
            <>
              {stat.suffix === 'M+' ? (
                <>
                  <CountUp end={stat.value} duration={2.5} />
                  {stat.suffix}
                </>
              ) : (
                <>
                  <CountUp end={stat.value} duration={2.5} />
                  {stat.suffix}
                </>
              )}
            </>
          )}
        </Heading>
        <Text fontWeight="600" fontSize="lg" textAlign="center">
          {stat.label}
        </Text>
        <Text
          fontSize="sm"
          color={useColorModeValue('gray.600', 'dark.textSecondary')}
          textAlign="center"
        >
          {stat.description}
        </Text>
      </VStack>
    </MotionBox>
  );
};

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const bg = useColorModeValue('white', 'dark.bg');
  const textColor = useColorModeValue('gray.600', 'dark.textSecondary');

  return (
    <Box id="about" py={20} bg={bg}>
      <Container maxW="7xl">
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <VStack spacing={4} mb={16} textAlign="center">
            <Heading
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="extrabold"
            >
              About{' '}
              <Box
                as="span"
                bgGradient="linear(to-r, primary.500, secondary.500)"
                bgClip="text"
              >
                Me
              </Box>
            </Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl">
              Pioneering GenAI solutions with a strong foundation in statistics and
              14+ years of hands-on experience in data science and machine learning
            </Text>
          </VStack>

          {/* About Content */}
          <Box mb={16}>
            <VStack spacing={6} align="stretch">
              {personalInfo.about.split('\n\n').map((paragraph, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                >
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color={textColor}
                    lineHeight="tall"
                    textAlign="justify"
                  >
                    {paragraph}
                  </Text>
                </MotionBox>
              ))}
            </VStack>
          </Box>

          {/* Stats Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={6}>
            {personalInfo.stats.map((stat, index) => (
              <StatCard key={index} stat={stat} delay={0.2 + index * 0.1} />
            ))}
          </SimpleGrid>

          {/* Company & Location */}
          <MotionBox
            mt={12}
            p={8}
            bg={useColorModeValue('gray.50', 'dark.surface')}
            borderRadius="xl"
            textAlign="center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify="center"
              align="center"
              gap={8}
            >
              <VStack spacing={2}>
                <Text fontSize="sm" color={textColor} fontWeight="500">
                  Current Position
                </Text>
                <Heading size="md">{personalInfo.title}</Heading>
                <Text
                  fontSize="lg"
                  fontWeight="600"
                  color="primary.500"
                >
                  {personalInfo.company}
                </Text>
              </VStack>

              <Box
                display={{ base: 'none', md: 'block' }}
                w="1px"
                h="80px"
                bg={useColorModeValue('gray.300', 'dark.border')}
              />

              <VStack spacing={2}>
                <Text fontSize="sm" color={textColor} fontWeight="500">
                  Location
                </Text>
                <Heading size="md">{personalInfo.location}</Heading>
                <Text fontSize="sm" color={textColor}>
                  Open to Remote & Hybrid Opportunities
                </Text>
              </VStack>
            </Flex>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
