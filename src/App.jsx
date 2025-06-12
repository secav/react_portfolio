import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" bg="gray.900" color="gray.100">
      <Navbar />
      <Box flex="1">
        <Routes>
          <Route path="/react_portfolio" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
