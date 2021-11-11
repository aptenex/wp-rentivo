import * as React from 'react';
import { Box, Container, Heading, Stack, useColorModeValue as mode } from '@chakra-ui/react';
import { useRouteMatch, useLocation } from 'react-router-dom';
import TabLink from './TabLink';

export default function PageHeader({title, navLinks}) {
  const match = useRouteMatch();
  const { pathname } = useLocation();
  return (
    <Box bg={mode('white', 'gray.900')} pt="8" shadow="sm">
      <Container maxW="7xl">
        <Heading size="lg" mb="3" pb={(navLinks && navLinks.length) ? 0 : 3}>
          {title}
        </Heading>
        {(navLinks && navLinks.length) && (
          <Stack direction="row" spacing="4">
            {navLinks.map((navLink, i) => (
              <TabLink key={i} aria-current={`${match.url}/${navLink.slug}` === pathname ? 'page' : undefined} to={`${match.url}/${navLink.slug}`}>
                {navLink.label}
              </TabLink>
            ))}
          </Stack>
        )}
      </Container>
    </Box>
  )
};
