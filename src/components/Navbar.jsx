import { Flex, Box, Link, Spacer, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/react_portfolio' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  return (
    <Flex as="nav" p={4} bg="blue.600" color="white" align="center">
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
            _hover={{ bg: 'blue.500' }}
            _activeLink={{ bg: 'blue.800' }}
          >
            {item.label}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
