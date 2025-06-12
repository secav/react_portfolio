import React from 'react';
import { Heading, Text, VStack } from '@chakra-ui/react';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <VStack spacing={2} textAlign="center" py={10}>
      <Heading as="h3" size="xl">
        {title}
      </Heading>
      {subtitle && (
        <Text fontSize="md" color="gray.600" maxW="600px">
          {subtitle}
        </Text>
      )}
    </VStack>
  );
};

export default SectionHeader;
