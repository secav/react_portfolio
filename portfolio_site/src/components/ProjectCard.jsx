import React from 'react';
import { Box, Heading, Text, Badge, VStack } from '@chakra-ui/react';

const ProjectCard = ({ title, description, technologies }) => {
    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            p={6}
            shadow="md"
            bg="white"
            _dark={{ bg: 'gray.700' }}
            maxW="md"
            width="100%"
        >
            <VStack align="start" spacing={3}>
                <Heading size="md">{title}</Heading>
                <Text>{description}</Text>
                <Box>
                    {technologies.map((tech, index) => (
                        <Badge key={index} colorScheme="blue" mr={1}>
                            {tech}
                        </Badge>
                    ))}
                </Box>
            </VStack>
        </Box>
    );
};

export default ProjectCard;
