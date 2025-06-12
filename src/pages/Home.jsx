import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';


const Home = () => {
    return (
        <Box textAlign="center" py={10} px={6}>
            <VStack spacing={4}>
                <SectionHeader
                    title="Welcome to My Portfolio"
                    subtitle="I’m Santiago Cavalitto, a developer passionate about game development and web/desktop application development."
                />
                <Button colorScheme="teal" as={RouterLink} to="/projects" _hover={{ bg: 'gray.600' }} bg="gray.700">
                    View My Projects
                </Button>
            </VStack>
        </Box>
    );
};

export default Home;
