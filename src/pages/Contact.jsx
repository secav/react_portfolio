import React from 'react';
import { Container } from '@chakra-ui/react';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Container py={10}>
      <SectionHeader title="Get in Touch" subtitle="I will reply as soon as possible!"/>
      <ContactForm />
    </Container>
  );
};

export default Contact;
