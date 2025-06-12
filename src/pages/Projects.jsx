import React from 'react';
import { Grid, GridItem, Center } from '@chakra-ui/react';
import { SimpleGrid, Box, Container } from '@chakra-ui/react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: 'Portfolio Website',
        description: 'A portfolio built with React and Chakra UI. You are currently using this project!',
        technologies: ['React', 'Chakra UI', 'Vite'],
    },
    {
        title: 'Ghostlight Caverns',
        description: 'A challenging platforming game made in Unity. Can be quite difficult for inexperienced players.',
        technologies: ['Unity', 'C#'],
    },
    {
        title: 'Quiz App',
        description: 'An interactive quiz app with score tracking and feedback.',
        technologies: ['React', 'TypeScript', 'MySQL'],
    },
    {
        title: 'Announcement Discord Bot',
        description: 'A discord bot made with the purpose of tracking course related announcements. Uses APIs to interact with Discord, ChatGPT and Gmail.',
        technologies: ['C#', 'OpenAI', 'Google', 'Discord'],
    },
    {
        title: 'Stock Tracker',
        description: 'Created to streamline stocktake. Allows the user to load data into a spreadsheet using a barcode scanner. Has a user friendly GUI.',
        technologies: ['C#', 'WinForms'],
    },
    {
        title: 'Coming Soon',
        description: 'This project is still in the works. Check again later!',
        technologies: [],
    },
];

const Projects = () => {
    return (
        <Container py={10}>
            <SectionHeader title="My Projects" />
            <Grid
                templateColumns={{ base: '1fr', sm: '1fr', md: 'repeat(3, 1fr)' }}
                gap={8}
                mt={4}
            >
                {projects.map((project, index) => (
                    <GridItem key={index}>
                        <Center h="100%">
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                            />
                        </Center>
                    </GridItem>
                ))}
            </Grid>
        </Container>
    );
};

export default Projects;
