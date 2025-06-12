import React, { useState, useRef } from 'react';

import { Box, Input, Textarea, Button } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', { name, email, message });

    // Reset the form
    setName('');
    setEmail('');
    setMessage('');

    // Focus on name field again
    nameRef.current.focus();
  };

  return (
    <Box as="form" onSubmit={handleSubmit} maxW="500px" mx="auto">
      <FormControl mb={4}>
        <FormLabel>Name</FormLabel>
        <Input
          ref={nameRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Message</FormLabel>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here..."
        />
      </FormControl>

      <Button type="submit" colorScheme="blue" width="full" _hover={{ bg: 'gray.600' }} bg="gray.700">
        Send
      </Button>
    </Box>
  );
};

export default ContactForm;
