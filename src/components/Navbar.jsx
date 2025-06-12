import { Flex, Box, Link, Spacer, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/react_portfolio' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  return (
    <Flex as="nav" p={4} align="center" bg="gray.700" color="gray.100">
      <Box>
        <Text fontWeight="bold" fontSize="lg">Santiago Cavalitto</Text>
      </Box>
      <Spacer />
      <Flex gap={4}>
        {navItems.map((item) => (
          <Link
            as={NavLink}
            key={item.path}
            to={item.path}
            px={3}
            py={1}
            rounded="md"
            variant="ghost"
            fontWeight="medium"
            colorScheme="teal"
            _activeLink={{ color: 'teal.300', fontWeight: 'bold' }}
            _hover={{ bg: 'gray.600' }}
          >
            {item.label}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
