import React from 'react';
import { Box, Heading, Text, Badge, VStack } from '@chakra-ui/react';

const ProjectCard = ({ title, description, technologies }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      shadow="md"
      bg="gray.700"
      borderColor="gray.600"
      color="gray.100"
      maxW="md"
      width="100%"
    >
      <VStack align="start" spacing={3}>
        <Heading size="md" color="teal.300">
          {title}
        </Heading>
        <Text>{description}</Text>
        <Box>
          {technologies.map((tech, index) => (
            <Badge key={index} colorScheme="teal" mr={1}>
              {tech}
            </Badge>
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default ProjectCard;
