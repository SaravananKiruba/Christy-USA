import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useColorModeValue,
  Icon,
  useToast,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const MotionBox = motion(Box);

const ContactInfo = ({ icon, label, value, link }) => {
  const bg = useColorModeValue('white', 'dark.surface');
  const borderColor = useColorModeValue('gray.200', 'dark.border');
  const textColor = useColorModeValue('gray.600', 'dark.textSecondary');

  const content = (
    <HStack
      p={6}
      bg={bg}
      borderRadius="xl"
      border="1px solid"
      borderColor={borderColor}
      spacing={4}
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'lg',
        borderColor: 'primary.500',
      }}
      transition="all 0.3s ease"
      cursor={link ? 'pointer' : 'default'}
    >
      <Box
        p={3}
        borderRadius="full"
        bgGradient="linear(to-br, primary.500, secondary.500)"
        color="white"
      >
        <Icon as={icon} w={5} h={5} />
      </Box>
      <VStack align="start" spacing={0}>
        <Text fontSize="xs" color={textColor} fontWeight="500">
          {label}
        </Text>
        <Text fontWeight="600" fontSize="sm">
          {value}
        </Text>
      </VStack>
    </HStack>
  );

  if (link) {
    return (
      <ChakraLink href={link} isExternal _hover={{ textDecoration: 'none' }}>
        {content}
      </ChakraLink>
    );
  }

  return content;
};

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const bg = useColorModeValue('gray.50', 'dark.bg');
  const cardBg = useColorModeValue('white', 'dark.surface');
  const borderColor = useColorModeValue('gray.200', 'dark.border');
  const textColor = useColorModeValue('gray.600', 'dark.textSecondary');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual EmailJS configuration)
    try {
      // Uncomment and configure EmailJS
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formData,
      //   'YOUR_USER_ID'
      // );

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: 'Message sent successfully!',
        description: "I'll get back to you as soon as possible.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: 'Error sending message',
        description: 'Please try again later or contact me directly via email.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box id="contact" py={20} bg={bg}>
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
              Get In{' '}
              <Box
                as="span"
                bgGradient="linear(to-r, primary.500, secondary.500)"
                bgClip="text"
              >
                Touch
              </Box>
            </Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl">
              Let's discuss how we can collaborate on innovative GenAI and Data Science
              projects
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
            {/* Contact Information */}
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <VStack spacing={6} align="stretch">
                <Box>
                  <Heading size="lg" mb={4}>
                    Contact Information
                  </Heading>
                  <Text color={textColor} mb={6}>
                    Feel free to reach out through any of these channels. I'm always
                    open to discussing new opportunities and collaborations.
                  </Text>
                </Box>

                <ContactInfo
                  icon={FaEnvelope}
                  label="Email"
                  value={personalInfo.email}
                  link={`mailto:${personalInfo.email}`}
                />

                <ContactInfo
                  icon={FaPhone}
                  label="Phone"
                  value={personalInfo.phone}
                  link={`tel:${personalInfo.phone}`}
                />

                <ContactInfo
                  icon={FaMapMarkerAlt}
                  label="Location"
                  value={personalInfo.location}
                />

                <ContactInfo
                  icon={FaLinkedin}
                  label="LinkedIn"
                  value="Connect on LinkedIn"
                  link={personalInfo.linkedin}
                />

                {/* Social Links */}
                <Box
                  p={6}
                  bg={cardBg}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={borderColor}
                >
                  <Text fontWeight="600" mb={4}>
                    Follow Me
                  </Text>
                  <HStack spacing={4}>
                    <MotionBox whileHover={{ scale: 1.2, y: -5 }}>
                      <Icon
                        as={FaLinkedin}
                        w={8}
                        h={8}
                        color="primary.500"
                        cursor="pointer"
                        onClick={() => window.open(personalInfo.linkedin, '_blank')}
                      />
                    </MotionBox>
                    <MotionBox whileHover={{ scale: 1.2, y: -5 }}>
                      <Icon
                        as={FaGithub}
                        w={8}
                        h={8}
                        color={useColorModeValue('gray.700', 'gray.300')}
                        cursor="pointer"
                        onClick={() => window.open(personalInfo.github, '_blank')}
                      />
                    </MotionBox>
                    <MotionBox whileHover={{ scale: 1.2, y: -5 }}>
                      <Icon
                        as={FaEnvelope}
                        w={8}
                        h={8}
                        color="accent.500"
                        cursor="pointer"
                        onClick={() => window.location.href = `mailto:${personalInfo.email}`}
                      />
                    </MotionBox>
                  </HStack>
                </Box>
              </VStack>
            </MotionBox>

            {/* Contact Form */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box
                as="form"
                onSubmit={handleSubmit}
                p={8}
                bg={cardBg}
                borderRadius="xl"
                border="1px solid"
                borderColor={borderColor}
                boxShadow="lg"
              >
                <VStack spacing={6}>
                  <FormControl isInvalid={errors.name}>
                    <FormLabel>Name</FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      size="lg"
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.email}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      size="lg"
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.subject}>
                    <FormLabel>Subject</FormLabel>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      size="lg"
                    />
                    <FormErrorMessage>{errors.subject}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.message}>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={6}
                      size="lg"
                    />
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  </FormControl>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    w="full"
                    rightIcon={<Icon as={FaPaperPlane} />}
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </MotionBox>
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
}
