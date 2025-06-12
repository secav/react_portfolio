import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box as="footer" bg="blue.600" color="white" py={4} mt={10}>
            <Flex direction="column" align="center" gap={2}>
                <Text fontSize="sm">© 2025 Santiago Cavalitto</Text>
                <Link href="https://github.com/secav" isExternal>
                    GitHub
                </Link>
            </Flex>
        </Box>
    );
};

export default Footer;
