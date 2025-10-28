import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
  Container,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const MotionBox = motion(Box);

const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Skills', to: 'skills' },
  { name: 'Education', to: 'education' },
  { name: 'Contact', to: 'contact' },
];

const NavLink = ({ children, to }) => {
  return (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
    >
      <ChakraLink
        px={3}
        py={2}
        rounded={'md'}
        fontWeight={500}
        fontSize="sm"
        cursor="pointer"
        position="relative"
        _hover={{
          textDecoration: 'none',
          color: 'primary.500',
        }}
        _after={{
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '0%',
          height: '2px',
          bg: 'primary.500',
          transition: 'width 0.3s ease',
        }}
        sx={{
          '&:hover::after': {
            width: '100%',
          },
        }}
      >
        {children}
      </ChakraLink>
    </ScrollLink>
  );
};

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [scrolled, setScrolled] = useState(false);
  
  const bg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(10, 14, 39, 0.8)');
  const borderColor = useColorModeValue('gray.200', 'dark.border');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MotionBox
      as="nav"
      position="fixed"
      top={0}
      w="full"
      zIndex={1000}
      bg={scrolled ? bg : 'transparent'}
      backdropFilter={scrolled ? 'blur(10px)' : 'none'}
      borderBottom={scrolled ? '1px' : '0'}
      borderColor={borderColor}
      transition="all 0.3s ease"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      boxShadow={scrolled ? 'sm' : 'none'}
    >
      <Container maxW="7xl">
        <Flex h={20} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <MotionBox
            fontWeight="bold"
            fontSize="xl"
            bgGradient="linear(to-r, primary.500, secondary.500)"
            bgClip="text"
            cursor="pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ScrollLink to="hero" smooth={true} duration={500}>
              Dr. CS
            </ScrollLink>
          </MotionBox>

          {/* Desktop Navigation */}
          <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.to}>
                {item.name}
              </NavLink>
            ))}
          </HStack>

          {/* Right Side Actions */}
          <HStack spacing={3}>
            <IconButton
              size="md"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              aria-label="Toggle color mode"
              onClick={toggleColorMode}
              variant="ghost"
              _hover={{
                transform: 'rotate(180deg)',
                transition: 'transform 0.5s ease',
              }}
            />
            
            <ScrollLink to="contact" smooth={true} duration={500}>
              <Button
                variant="primary"
                size="sm"
                display={{ base: 'none', md: 'inline-flex' }}
              >
                Get In Touch
              </Button>
            </ScrollLink>

            {/* Mobile Menu Toggle */}
            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Toggle Navigation"
              display={{ md: 'none' }}
              onClick={onToggle}
              variant="ghost"
            />
          </HStack>
        </Flex>

        {/* Mobile Navigation */}
        {isOpen && (
          <MotionBox
            pb={4}
            display={{ md: 'none' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Stack as="nav" spacing={4}>
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={onToggle}
                >
                  <ChakraLink
                    px={3}
                    py={2}
                    rounded="md"
                    cursor="pointer"
                    _hover={{
                      textDecoration: 'none',
                      bg: useColorModeValue('gray.100', 'dark.surface'),
                      color: 'primary.500',
                    }}
                  >
                    {item.name}
                  </ChakraLink>
                </ScrollLink>
              ))}
              <ScrollLink to="contact" smooth={true} duration={500} onClick={onToggle}>
                <Button variant="primary" w="full" size="sm">
                  Get In Touch
                </Button>
              </ScrollLink>
            </Stack>
          </MotionBox>
        )}
      </Container>
    </MotionBox>
  );
}
