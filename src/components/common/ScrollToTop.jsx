import { Box, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const MotionBox = motion(Box);

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const bg = useColorModeValue('primary.500', 'primary.600');

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionBox
          position="fixed"
          bottom={8}
          right={8}
          zIndex={1000}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Box
            as="button"
            onClick={scrollToTop}
            bg={bg}
            color="white"
            p={4}
            borderRadius="full"
            boxShadow="lg"
            cursor="pointer"
            _hover={{
              boxShadow: '0 0 20px rgba(0, 112, 243, 0.6)',
            }}
            transition="all 0.3s ease"
          >
            <Icon as={FaArrowUp} w={5} h={5} />
          </Box>
        </MotionBox>
      )}
    </AnimatePresence>
  );
}
