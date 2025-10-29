import {import {

  Box,  Box,

  Container,  Container,

  Heading,  Heading,

  Text,  Text,

  Button,  Button,

  VStack,  VStack,

  HStack,  HStack,

  Avatar,  Avatar,

  useColorModeValue,  useColorModeValue,

  Icon,  Icon,

  Flex,  Flex,

  IconButton,} from '@chakra-ui/react';

} from '@chakra-ui/react';import { motion } from 'framer-motion';

import { motion } from 'framer-motion';import { TypeAnimation } from 'react-type-animation';

import { TypeAnimation } from 'react-type-animation';import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';import { personalInfo } from '../../data/portfolioData';

import { personalInfo } from '../../data/portfolioData';import ParticleBackground from './ParticleBackground';

import ParticleBackground from './ParticleBackground';import { Link as ScrollLink } from 'react-scroll';

import { Link as ScrollLink } from 'react-scroll';import { useTemplateDesign } from '../../hooks/useTemplateDesign';

import { useTemplateDesign } from '../../hooks/useTemplateDesign';

const MotionBox = motion(Box);

const MotionBox = motion(Box);const MotionHeading = motion(Heading);

const MotionHeading = motion(Heading);const MotionText = motion(Text);

const MotionText = motion(Text);const MotionButton = motion(Button);

const MotionButton = motion(Button);

const containerVariants = {

const containerVariants = {  hidden: { opacity: 0 },

  hidden: { opacity: 0 },  visible: {

  visible: {    opacity: 1,

    opacity: 1,    transition: {

    transition: {      staggerChildren: 0.2,

      staggerChildren: 0.2,      delayChildren: 0.3,

      delayChildren: 0.3,    },

    },  },

  },};

};

const itemVariants = {

const itemVariants = {  hidden: { opacity: 0, y: 20 },

  hidden: { opacity: 0, y: 20 },  visible: {

  visible: {    opacity: 1,

    opacity: 1,    y: 0,

    y: 0,    transition: { duration: 0.6, ease: 'easeOut' },

    transition: { duration: 0.6, ease: 'easeOut' },  },

  },};

};

const avatarVariants = {

const avatarVariants = {  hidden: { opacity: 0, scale: 0.8 },

  hidden: { opacity: 0, scale: 0.8 },  visible: {

  visible: {    opacity: 1,

    opacity: 1,    scale: 1,

    scale: 1,    transition: { duration: 0.8, delay: 0.5 },

    transition: { duration: 0.8, delay: 0.5 },  },

  },};

};

export default function Hero() {

export default function Hero() {  const design = useTemplateDesign();

  const design = useTemplateDesign();  const bg = useColorModeValue('gray.50', 'dark.bg');

  const bg = useColorModeValue('gray.50', 'dark.bg');  const textColor = useColorModeValue('gray.600', 'dark.textSecondary');

  const textColor = useColorModeValue('gray.600', 'dark.textSecondary');

  // Different container variants based on template

  // PROFESSIONAL TEMPLATE - Centered, Traditional, Clean  const getContainerVariants = () => {

  if (design.template === 'professional') {    switch (design.template) {

    return (      case 'creative':

      <Box        return {

        id="hero"          hidden: { opacity: 0, scale: 0.9 },

        position="relative"          visible: {

        minH="100vh"            opacity: 1,

        bg={bg}            scale: 1,

        overflow="hidden"            transition: {

        display="flex"              staggerChildren: 0.15,

        alignItems="center"              delayChildren: 0.2,

      >            },

        <ParticleBackground />          },

                };

        <Box      case 'futuristic':

          position="absolute"        return {

          top={0}          hidden: { opacity: 0 },

          left={0}          visible: {

          right={0}            opacity: 1,

          bottom={0}            transition: {

          bgGradient={useColorModeValue(              staggerChildren: 0.1,

            'linear(to-br, transparent, rgba(0, 112, 243, 0.05))',              delayChildren: 0.1,

            'linear(to-br, transparent, rgba(0, 112, 243, 0.1))'            },

          )}          },

          pointerEvents="none"        };

        />      default:

        return containerVariants;

        <Container maxW="7xl" position="relative" zIndex={1} pt={20}>    }

          <MotionBox  };

            variants={containerVariants}

            initial="hidden"  return (

            animate="visible"    <Box

            textAlign="center"      id="hero"

          >      position="relative"

            <MotionBox      minH="100vh"

              variants={avatarVariants}      bg={bg}

              display="flex"      overflow="hidden"

              justifyContent="center"      display="flex"

              mb={6}      alignItems="center"

            >    >

              <Avatar      {/* Particle Background - Only for professional and creative */}

                size="2xl"      {design.effects.particles && <ParticleBackground />}

                name={personalInfo.name}

                src="https://via.placeholder.com/200/0070F3/FFFFFF?text=Dr.CS"      {/* Gradient Overlay */}

                border="4px solid"      <Box

                borderColor="primary.500"        position="absolute"

                boxShadow="0 0 30px rgba(0, 112, 243, 0.3)"        top={0}

                sx={{        left={0}

                  animation: 'float 3s ease-in-out infinite',        right={0}

                  '@keyframes float': {        bottom={0}

                    '0%, 100%': { transform: 'translateY(0px)' },        bgGradient={design.effects.gradient 

                    '50%': { transform: 'translateY(-20px)' },          ? useColorModeValue(

                  },              'linear(to-br, purple.50, pink.50, teal.50)',

                }}              'linear(to-br, purple.900, pink.900, teal.900)'

              />            )

            </MotionBox>          : useColorModeValue(

              'linear(to-br, transparent, rgba(0, 112, 243, 0.05))',

            <VStack spacing={4} mb={8}>              'linear(to-br, transparent, rgba(0, 112, 243, 0.1))'

              <MotionText variants={itemVariants} fontSize="xl" color={textColor}>            )

                Hello, I'm        }

              </MotionText>        opacity={design.effects.gradient ? 0.3 : 1}

        pointerEvents="none"

              <MotionHeading        backdropFilter={design.effects.blur ? 'blur(100px)' : 'none'}

                variants={itemVariants}      />

                fontSize={{ base: '4xl', md: '6xl' }}

                fontWeight="bold"      <Container maxW="7xl" position="relative" zIndex={1} pt={20}>

                bgGradient="linear(to-r, primary.500, secondary.500)"        <MotionBox

                bgClip="text"          variants={getContainerVariants()}

              >          initial="hidden"

                {personalInfo.name}          animate="visible"

              </MotionHeading>          textAlign="center"

        >

              <Box fontSize={{ base: 'xl', md: '2xl' }} color="primary.500" fontWeight="600" minH="60px">          {/* Avatar */}

                <TypeAnimation          <MotionBox

                  sequence={personalInfo.roles.flatMap((role) => [role, 2000])}            variants={avatarVariants}

                  wrapper="span"            display="flex"

                  speed={50}            justifyContent="center"

                  repeat={Infinity}            mb={6}

                />          >

              </Box>            <Avatar

              size="2xl"

              <MotionText              name={personalInfo.name}

                variants={itemVariants}              src="https://via.placeholder.com/200/0070F3/FFFFFF?text=Dr.CS"

                fontSize={{ base: 'md', md: 'lg' }}              border="4px solid"

                color={textColor}              borderColor="primary.500"

                maxW="2xl"              boxShadow="0 0 30px rgba(0, 112, 243, 0.3)"

                textAlign="center"              sx={{

              >                animation: 'float 3s ease-in-out infinite',

                {personalInfo.bio}                '@keyframes float': {

              </MotionText>                  '0%, 100%': { transform: 'translateY(0px)' },

            </VStack>                  '50%': { transform: 'translateY(-10px)' },

                },

            <MotionBox variants={itemVariants}>              }}

              <HStack spacing={4} justify="center" mb={8}>            />

                {personalInfo.socialLinks.map((link) => (          </MotionBox>

                  <IconButton

                    key={link.platform}          {/* Name */}

                    as="a"          <MotionHeading

                    href={link.url}            variants={itemVariants}

                    target="_blank"            as="h1"

                    icon={<Icon as={link.platform === 'LinkedIn' ? FaLinkedin : link.platform === 'GitHub' ? FaGithub : FaEnvelope} />}            size="3xl"

                    colorScheme="primary"            mb={4}

                    variant="ghost"            bgGradient="linear(to-r, primary.500, secondary.500, accent.500)"

                    size="lg"            bgClip="text"

                    _hover={{ transform: 'translateY(-4px)', color: 'primary.500' }}            fontWeight="extrabold"

                    transition="all 0.3s"            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}

                  />          >

                ))}            {personalInfo.name}

              </HStack>          </MotionHeading>



              <HStack spacing={4} justify="center">          {/* Title */}

                <ScrollLink to="contact" smooth={true} duration={500}>          <MotionText

                  <MotionButton            variants={itemVariants}

                    variant="primary"            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}

                    size="lg"            fontWeight="600"

                    whileHover={{ scale: 1.05 }}            color={textColor}

                    whileTap={{ scale: 0.95 }}            mb={6}

                  >          >

                    Get In Touch            {personalInfo.title}

                  </MotionButton>          </MotionText>

                </ScrollLink>

          {/* Animated Roles */}

                <ScrollLink to="about" smooth={true} duration={500}>          <MotionBox variants={itemVariants} mb={6} h="60px">

                  <MotionButton            <TypeAnimation

                    variant="outline"              sequence={[

                    size="lg"                personalInfo.roles[0],

                    whileHover={{ scale: 1.05 }}                2000,

                    whileTap={{ scale: 0.95 }}                personalInfo.roles[1],

                  >                2000,

                    Learn More                personalInfo.roles[2],

                  </MotionButton>                2000,

                </ScrollLink>                personalInfo.roles[3],

              </HStack>                2000,

            </MotionBox>              ]}

          </MotionBox>              wrapper="span"

        </Container>              speed={50}

      </Box>              style={{

    );                fontSize: '1.5rem',

  }                fontWeight: '500',

                background: 'linear-gradient(to right, #0070F3, #7928CA)',

  // CREATIVE TEMPLATE - Split Screen, Bold & Artistic, Asymmetric                WebkitBackgroundClip: 'text',

  if (design.template === 'creative') {                WebkitTextFillColor: 'transparent',

    return (                display: 'inline-block',

      <Box              }}

        id="hero"              repeat={Infinity}

        position="relative"            />

        minH="100vh"          </MotionBox>

        bgGradient="linear(135deg, #1a0b2e 0%, #2d1b4e 50%, #1a0b2e 100%)"

        overflow="hidden"          {/* Tagline */}

        display="flex"          <MotionText

        alignItems="center"            variants={itemVariants}

      >            fontSize={{ base: 'md', md: 'lg' }}

        {/* Animated Background Shapes */}            color={textColor}

        <Box            mb={8}

          position="absolute"            maxW="2xl"

          top="20%"            mx="auto"

          right="10%"          >

          w="400px"            {personalInfo.tagline}

          h="400px"          </MotionText>

          borderRadius="full"

          bgGradient="radial(purple.500, transparent)"          {/* CTA Buttons */}

          opacity="0.2"          <MotionBox variants={itemVariants}>

          filter="blur(80px)"            <HStack

          animation="float 6s ease-in-out infinite"              spacing={4}

        />              justify="center"

        <Box              flexWrap="wrap"

          position="absolute"              mb={8}

          bottom="10%"            >

          left="5%"              <ScrollLink to="about" smooth={true} duration={500}>

          w="300px"                <MotionButton

          h="300px"                  variant="primary"

          borderRadius="full"                  size="lg"

          bgGradient="radial(pink.500, transparent)"                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 112, 243, 0.4)' }}

          opacity="0.15"                  whileTap={{ scale: 0.95 }}

          filter="blur(60px)"                >

          animation="float 8s ease-in-out infinite reverse"                  Learn More

        />                </MotionButton>

              </ScrollLink>

        <Container maxW="7xl" position="relative" zIndex={1} pt={20}>

          <Flex              <ScrollLink to="contact" smooth={true} duration={500}>

            direction={{ base: 'column', md: 'row' }}                <MotionButton

            align="center"                  variant="outline"

            gap={12}                  size="lg"

          >                  whileHover={{ scale: 1.05 }}

            {/* Left Side - Text */}                  whileTap={{ scale: 0.95 }}

            <MotionBox                >

              flex={1}                  Get In Touch

              initial={{ opacity: 0, x: -100 }}                </MotionButton>

              animate={{ opacity: 1, x: 0 }}              </ScrollLink>

              transition={{ duration: 0.8, type: 'spring' }}            </HStack>

            >          </MotionBox>

              <VStack align="flex-start" spacing={6}>

                <MotionBox          {/* Social Links */}

                  initial={{ opacity: 0, rotate: -5 }}          <MotionBox variants={itemVariants}>

                  animate={{ opacity: 1, rotate: 0 }}            <HStack spacing={4} justify="center">

                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}              <MotionBox whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>

                >                <Icon

                  <Text                   as={FaLinkedin}

                    fontSize="lg"                   w={6}

                    color="purple.300"                   h={6}

                    fontWeight="800"                   color="primary.500"

                    letterSpacing="wider"                  cursor="pointer"

                    textTransform="uppercase"                  transition="all 0.3s"

                    sx={{                  _hover={{ color: 'primary.600' }}

                      textShadow: '0 0 20px rgba(128, 90, 213, 0.5)',                  onClick={() => window.open(personalInfo.linkedin, '_blank')}

                    }}                />

                  >              </MotionBox>

                    ✨ Creative Portfolio

                  </Text>              <MotionBox whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>

                </MotionBox>                <Icon

                  as={FaGithub}

                <MotionHeading                  w={6}

                  fontSize={{ base: '5xl', md: '8xl' }}                  h={6}

                  fontWeight="black"                  color={useColorModeValue('gray.700', 'gray.300')}

                  lineHeight="0.9"                  cursor="pointer"

                  initial={{ opacity: 0, y: 30 }}                  transition="all 0.3s"

                  animate={{ opacity: 1, y: 0 }}                  _hover={{ color: 'primary.500' }}

                  transition={{ delay: 0.3, type: 'spring' }}                  onClick={() => window.open(personalInfo.github, '_blank')}

                >                />

                  <Text              </MotionBox>

                    bgGradient="linear(45deg, #805AD5, #D53F8C, #38B2AC)"

                    bgClip="text"              <MotionBox whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>

                    display="inline-block"                <Icon

                    transform="rotate(-2deg)"                  as={FaEnvelope}

                    sx={{                  w={6}

                      filter: 'drop-shadow(0 0 30px rgba(128, 90, 213, 0.5))',                  h={6}

                    }}                  color="accent.500"

                  >                  cursor="pointer"

                    {personalInfo.name.split(' ').map((word, i) => (                  transition="all 0.3s"

                      <Text                  _hover={{ color: 'accent.600' }}

                        key={i}                  onClick={() => window.location.href = `mailto:${personalInfo.email}`}

                        as="span"                />

                        display="block"              </MotionBox>

                        transform={i % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)'}            </HStack>

                      >          </MotionBox>

                        {word}

                      </Text>          {/* Scroll Indicator */}

                    ))}          <MotionBox

                  </Text>            position="absolute"

                </MotionHeading>            bottom={10}

            left="50%"

                <MotionBox            transform="translateX(-50%)"

                  fontSize="3xl"            initial={{ opacity: 0, y: -20 }}

                  color="pink.300"            animate={{ opacity: 1, y: 0 }}

                  fontWeight="bold"            transition={{

                  initial={{ opacity: 0 }}              duration: 1,

                  animate={{ opacity: 1 }}              delay: 1.5,

                  transition={{ delay: 0.4 }}              repeat: Infinity,

                  borderLeft="6px solid"              repeatType: 'reverse',

                  borderColor="secondary.500"            }}

                  pl={4}          >

                >            <VStack spacing={1}>

                  <TypeAnimation              <Text fontSize="xs" color={textColor}>

                    sequence={personalInfo.roles.flatMap((role) => [`💜 ${role}`, 1500])}                Scroll Down

                    wrapper="span"              </Text>

                    speed={60}              <Box

                    repeat={Infinity}                w={1}

                  />                h={10}

                </MotionBox>                bg="primary.500"

                borderRadius="full"

                <MotionText                sx={{

                  fontSize="xl"                  animation: 'scroll 2s ease-in-out infinite',

                  color="purple.100"                  '@keyframes scroll': {

                  maxW="xl"                    '0%': { height: '10px', opacity: 1 },

                  initial={{ opacity: 0 }}                    '50%': { height: '20px', opacity: 0.5 },

                  animate={{ opacity: 1 }}                    '100%': { height: '10px', opacity: 1 },

                  transition={{ delay: 0.5 }}                  },

                  borderLeft="4px dashed"                }}

                  borderColor="purple.500"              />

                  pl={6}            </VStack>

                  fontStyle="italic"          </MotionBox>

                >        </MotionBox>

                  {personalInfo.bio}      </Container>

                </MotionText>    </Box>

  );

                <MotionBox}

                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  w="full"
                >
                  <VStack spacing={4} align="flex-start">
                    <ScrollLink to="contact" smooth={true} duration={500}>
                      <Button
                        size="xl"
                        h="60px"
                        px={10}
                        bgGradient="linear(to-r, purple.500, pink.500)"
                        color="white"
                        fontSize="xl"
                        fontWeight="black"
                        _hover={{
                          bgGradient: 'linear(to-r, purple.600, pink.600)',
                          transform: 'translateY(-6px) rotate(3deg)',
                          boxShadow: '0 10px 40px rgba(128, 90, 213, 0.6)',
                        }}
                        transition="all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                        borderRadius="20px"
                        border="3px solid"
                        borderColor="purple.300"
                      >
                        🚀 Let's Create Magic
                      </Button>
                    </ScrollLink>

                    <HStack spacing={3}>
                      {personalInfo.socialLinks.map((link, i) => (
                        <Box
                          key={link.platform}
                          as="a"
                          href={link.url}
                          target="_blank"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          w="60px"
                          h="60px"
                          bg="whiteAlpha.100"
                          border="2px dashed"
                          borderColor="purple.400"
                          borderRadius="15px"
                          color="purple.300"
                          fontSize="24px"
                          _hover={{
                            bg: 'purple.500',
                            color: 'white',
                            transform: 'rotate(360deg) scale(1.2)',
                            borderStyle: 'solid',
                            boxShadow: '0 0 30px rgba(128, 90, 213, 0.8)',
                          }}
                          transition="all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                          style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                          <Icon as={link.platform === 'LinkedIn' ? FaLinkedin : link.platform === 'GitHub' ? FaGithub : FaEnvelope} />
                        </Box>
                      ))}
                    </HStack>
                  </VStack>
                </MotionBox>
              </VStack>
            </MotionBox>

            {/* Right Side - Creative Avatar */}
            <MotionBox
              flex={1}
              initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, type: 'spring', bounce: 0.5 }}
              position="relative"
            >
              <Box position="relative">
                {/* Decorative Circles */}
                <Box
                  position="absolute"
                  top="-40px"
                  right="-40px"
                  w="350px"
                  h="350px"
                  borderRadius="full"
                  border="4px dashed"
                  borderColor="purple.400"
                  opacity="0.3"
                  animation="spin 15s linear infinite"
                />
                <Box
                  position="absolute"
                  bottom="-30px"
                  left="-30px"
                  w="250px"
                  h="250px"
                  borderRadius="full"
                  border="4px dashed"
                  borderColor="pink.400"
                  opacity="0.3"
                  animation="spin 20s linear infinite reverse"
                />
                
                <Avatar
                  size="2xl"
                  w={{ base: "250px", md: "350px" }}
                  h={{ base: "250px", md: "350px" }}
                  name={personalInfo.name}
                  src="https://via.placeholder.com/350/805AD5/FFFFFF?text=CREATIVE"
                  border="8px solid"
                  borderColor="purple.500"
                  boxShadow="0 0 80px rgba(128, 90, 213, 0.8), inset 0 0 40px rgba(128, 90, 213, 0.3)"
                  transform="rotate(-8deg)"
                  _hover={{ 
                    transform: 'rotate(0deg) scale(1.1)',
                    boxShadow: '0 0 100px rgba(213, 63, 140, 0.9)',
                  }}
                  transition="all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                  sx={{
                    animation: 'float 4s ease-in-out infinite',
                  }}
                />

                {/* Floating Elements */}
                <Box
                  position="absolute"
                  top="10%"
                  left="-10%"
                  w="80px"
                  h="80px"
                  bg="pink.500"
                  borderRadius="20px"
                  transform="rotate(45deg)"
                  animation="float 3s ease-in-out infinite"
                  boxShadow="0 0 30px rgba(213, 63, 140, 0.6)"
                />
                <Box
                  position="absolute"
                  bottom="15%"
                  right="-5%"
                  w="60px"
                  h="60px"
                  bg="teal.400"
                  borderRadius="full"
                  animation="float 4s ease-in-out infinite reverse"
                  boxShadow="0 0 25px rgba(56, 178, 172, 0.6)"
                />

                {/* Status Badge */}
                <Box
                  position="absolute"
                  bottom="-10px"
                  right="20px"
                  bg="gradient(linear, to-r, pink.500, purple.500)"
                  bgGradient="linear(to-r, pink.500, purple.500)"
                  color="white"
                  px={8}
                  py={4}
                  borderRadius="25px"
                  fontWeight="black"
                  fontSize="lg"
                  boxShadow="0 10px 40px rgba(213, 63, 140, 0.6)"
                  transform="rotate(-10deg)"
                  border="3px solid white"
                  animation="pulse 2s ease-in-out infinite"
                >
                  ✨ Available
                </Box>
              </Box>
            </MotionBox>
          </Flex>
        </Container>

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes pulse {
              0%, 100% { transform: rotate(-10deg) scale(1); }
              50% { transform: rotate(-10deg) scale(1.05); }
            }
          `}
        </style>
      </Box>
    );
  }

  // FUTURISTIC TEMPLATE - Full Width, Tech-focused, Minimal
  return (
    <Box
      id="hero"
      position="relative"
      minH="100vh"
      bg="#000000"
      overflow="hidden"
      display="flex"
      alignItems="center"
    >
      {/* Tech Grid Background */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage="linear-gradient(rgba(43, 176, 237, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(43, 176, 237, 0.08) 1px, transparent 1px)"
        bgSize="40px 40px"
        opacity="1"
      />

      {/* Scanning Lines Effect */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height="2px"
        bgGradient="linear(to-r, transparent, primary.500, transparent)"
        animation="scan 3s linear infinite"
        sx={{
          '@keyframes scan': {
            '0%': { top: '0%' },
            '100%': { top: '100%' },
          },
        }}
      />

      {/* Radial Glow */}
      <Box
        position="absolute"
        top="50%"
        left="30%"
        transform="translate(-50%, -50%)"
        w="1000px"
        h="1000px"
        borderRadius="full"
        bgGradient="radial(primary.500, transparent 70%)"
        opacity="0.08"
        filter="blur(100px)"
      />

      <Container maxW="full" px={{ base: 6, md: 20 }} position="relative" zIndex={1}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          minH="100vh"
          gap={12}
        >
          {/* Left Content */}
          <Box flex={1.2}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Terminal-style Header */}
              <HStack spacing={2} mb={6}>
                <Box w="12px" h="12px" borderRadius="full" bg="red.500" />
                <Box w="12px" h="12px" borderRadius="full" bg="yellow.500" />
                <Box w="12px" h="12px" borderRadius="full" bg="green.500" />
                <Text
                  fontSize="xs"
                  color="gray.600"
                  fontFamily="mono"
                  ml={4}
                  letterSpacing="wider"
                >
                  ~/portfolio/initialize
                </Text>
              </HStack>

              <Text
                fontSize="sm"
                color="primary.400"
                fontFamily="mono"
                letterSpacing="widest"
                mb={4}
                textTransform="uppercase"
              >
                &gt; SYSTEM_READY [OK]
              </Text>

              <Heading
                fontSize={{ base: '5xl', md: '8xl' }}
                fontWeight="900"
                color="white"
                letterSpacing="tighter"
                mb={2}
                fontFamily="heading"
                lineHeight="0.9"
              >
                {personalInfo.name.split(' ').map((word, i) => (
                  <Text
                    key={i}
                    as="span"
                    display="block"
                    sx={{
                      textShadow: '0 0 40px rgba(43, 176, 237, 0.5)',
                    }}
                  >
                    {word}
                  </Text>
                ))}
              </Heading>

              <Box
                fontSize={{ base: 'xl', md: '3xl' }}
                color="primary.400"
                fontFamily="mono"
                mb={8}
                borderLeft="3px solid"
                borderColor="primary.500"
                pl={6}
                h="80px"
              >
                <TypeAnimation
                  sequence={personalInfo.roles.flatMap((role) => [`> ${role}_`, 2000])}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </Box>

              <Text
                fontSize="lg"
                color="gray.400"
                maxW="xl"
                mb={10}
                lineHeight="tall"
                fontFamily="mono"
              >
                {personalInfo.bio}
              </Text>

              {/* CTA Buttons */}
              <HStack spacing={4} mb={10}>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  <Button
                    size="lg"
                    h="60px"
                    px={8}
                    bg="transparent"
                    color="primary.500"
                    border="2px solid"
                    borderColor="primary.500"
                    fontFamily="mono"
                    fontSize="md"
                    letterSpacing="wider"
                    _hover={{
                      bg: 'primary.500',
                      color: 'black',
                      boxShadow: '0 0 30px rgba(43, 176, 237, 0.8)',
                      transform: 'translateX(5px)',
                    }}
                    _active={{
                      boxShadow: '0 0 50px rgba(43, 176, 237, 1)',
                    }}
                    transition="all 0.3s"
                  >
                    INITIALIZE_CONTACT &gt;&gt;
                  </Button>
                </ScrollLink>

                <HStack spacing={2}>
                  {personalInfo.socialLinks.map((link) => (
                    <Box
                      key={link.platform}
                      as="a"
                      href={link.url}
                      target="_blank"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="60px"
                      h="60px"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      color="gray.500"
                      fontSize="20px"
                      _hover={{
                        borderColor: 'primary.500',
                        color: 'primary.500',
                        bg: 'whiteAlpha.50',
                        boxShadow: '0 0 20px rgba(43, 176, 237, 0.5)',
                      }}
                      transition="all 0.3s"
                      cursor="pointer"
                    >
                      <Icon as={link.platform === 'LinkedIn' ? FaLinkedin : link.platform === 'GitHub' ? FaGithub : FaEnvelope} />
                    </Box>
                  ))}
                </HStack>
              </HStack>

              {/* Stats Terminal */}
              <Box
                border="1px solid"
                borderColor="whiteAlpha.200"
                p={6}
                maxW="xl"
                bg="whiteAlpha.50"
              >
                <HStack spacing={12}>
                  <Box>
                    <Text fontSize="3xl" fontWeight="black" color="primary.500" fontFamily="mono">10+</Text>
                    <Text fontSize="xs" color="gray.600" fontFamily="mono" letterSpacing="wider">YEARS_EXP</Text>
                  </Box>
                  <Box>
                    <Text fontSize="3xl" fontWeight="black" color="primary.500" fontFamily="mono">50+</Text>
                    <Text fontSize="xs" color="gray.600" fontFamily="mono" letterSpacing="wider">PROJECTS</Text>
                  </Box>
                  <Box>
                    <Text fontSize="3xl" fontWeight="black" color="primary.500" fontFamily="mono">∞</Text>
                    <Text fontSize="xs" color="gray.600" fontFamily="mono" letterSpacing="wider">INNOVATION</Text>
                  </Box>
                </HStack>
              </Box>
            </MotionBox>
          </Box>

          {/* Right Side - Geometric Avatar */}
          <MotionBox
            flex={1}
            display={{ base: 'none', lg: 'block' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Box position="relative" w="500px" h="500px" mx="auto">
              {/* Animated Border Frame */}
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w="400px"
                h="400px"
                border="1px solid"
                borderColor="primary.500"
                sx={{
                  animation: 'rotateFrame 20s linear infinite',
                  '@keyframes rotateFrame': {
                    '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
                    '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
                  },
                }}
              >
                {/* Corner Brackets */}
                {[...Array(4)].map((_, i) => (
                  <Box
                    key={i}
                    position="absolute"
                    w="30px"
                    h="30px"
                    border="3px solid"
                    borderColor="primary.500"
                    {...{
                      top: i < 2 ? '-2px' : 'auto',
                      bottom: i >= 2 ? '-2px' : 'auto',
                      left: i % 2 === 0 ? '-2px' : 'auto',
                      right: i % 2 === 1 ? '-2px' : 'auto',
                      borderTop: i < 2 ? '3px solid' : 'none',
                      borderBottom: i >= 2 ? '3px solid' : 'none',
                      borderLeft: i % 2 === 0 ? '3px solid' : 'none',
                      borderRight: i % 2 === 1 ? '3px solid' : 'none',
                    }}
                  />
                ))}
              </Box>

              {/* Secondary Rotating Frame */}
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w="350px"
                h="350px"
                border="1px solid"
                borderColor="primary.500"
                opacity="0.3"
                sx={{
                  animation: 'rotateFrameReverse 15s linear infinite reverse',
                  '@keyframes rotateFrameReverse': {
                    '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
                    '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
                  },
                }}
              />

              {/* Central Avatar */}
              <Avatar
                size="2xl"
                w="320px"
                h="320px"
                name={personalInfo.name}
                src="https://via.placeholder.com/320/2BB0ED/000000?text=FUTURE"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                border="3px solid"
                borderColor="primary.500"
                boxShadow="0 0 60px rgba(43, 176, 237, 0.9), inset 0 0 30px rgba(43, 176, 237, 0.2)"
                clipPath="polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                sx={{
                  animation: 'pulse 3s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { boxShadow: '0 0 60px rgba(43, 176, 237, 0.9)' },
                    '50%': { boxShadow: '0 0 100px rgba(43, 176, 237, 1)' },
                  },
                }}
              />

              {/* Data Points */}
              {[...Array(8)].map((_, i) => (
                <Box
                  key={i}
                  position="absolute"
                  w="8px"
                  h="8px"
                  bg="primary.500"
                  borderRadius="full"
                  boxShadow="0 0 10px rgba(43, 176, 237, 0.8)"
                  top={`${50 + 40 * Math.sin((i * Math.PI) / 4)}%`}
                  left={`${50 + 40 * Math.cos((i * Math.PI) / 4)}%`}
                  sx={{
                    animation: `blink ${1 + i * 0.1}s ease-in-out infinite`,
                    '@keyframes blink': {
                      '0%, 100%': { opacity: 0.3 },
                      '50%': { opacity: 1 },
                    },
                  }}
                />
              ))}

              {/* Scan Line */}
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                height="2px"
                bg="primary.500"
                opacity="0.5"
                sx={{
                  animation: 'verticalScan 2s linear infinite',
                  '@keyframes verticalScan': {
                    '0%': { top: '0%' },
                    '100%': { top: '100%' },
                  },
                }}
              />
            </Box>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
}
