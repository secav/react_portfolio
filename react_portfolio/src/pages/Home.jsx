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
                    subtitle="I’m Santiago Cavalitto, a developer passionate about gamedev, web apps and development in general."
                />
                <Button colorScheme="blue" as={RouterLink} to="/projects">
                    View My Projects
                </Button>
            </VStack>
        </Box>
    );
};

export default Home;
