import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import { TemplateLayout } from './components/common/TemplateLayout';

function App() {
  return (
    <Box>
      <Navbar />
      <TemplateLayout>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </TemplateLayout>
      <ScrollToTop />
    </Box>
  );
}

export default App;
