import * as React from 'react';
import { useColorModeValue as mode, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const TabLink = (props) => (
  <Link
    {...props}
    as={RouterLink}
    fontWeight="semibold"
    px="4"
    py="3"
    color={mode('gray.600', 'gray.400')}
    borderBottom="2px solid transparent"
    transition="all 0.2s"
    _hover={{
      borderColor: mode('gray.400', 'gray.600'),
    }}
    _activeLink={{
      color: mode('blue.600', 'blue.400'),
      borderColor: 'currentColor',
    }}
  />
);

export default TabLink;
