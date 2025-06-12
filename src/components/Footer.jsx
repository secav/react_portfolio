import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box bg="gray.800" py={4} textAlign="center" color="gray.400">
            <Flex direction="column" align="center" gap={2}>
                <Text fontSize="sm">© 2025 Santiago Cavalitto</Text>
                <Link href="https://github.com/secav" isExternal color="gray.100">
                    GitHub
                </Link>
            </Flex>
        </Box>
    );
};

export default Footer;
