import * as React from 'react';
import { Box, Container, useColorModeValue as mode } from '@chakra-ui/react';
import PageHeader from '../../components/PageHeader';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

export default function SubPage({title, navLinks}) {
  let match = useRouteMatch();
  return (
    <div>
      <PageHeader title={title} navLinks={navLinks}/>
      <Switch>
        {navLinks.map(({slug, component: Component}, i) => (
          <Route key={i} path={`${match.path}/${slug}`}>
            <Box as="main" py="8" flex="1">
              <Container maxW="7xl">
                <Box bg={mode('white', 'gray.700')} p="2" rounded="lg" shadow="base">
                  <Box
                    border="2px dashed currentColor"
                    borderColor={mode('gray.100', 'gray.500')}
                    p={6}
                    rounded="lg"
                    position="relative"
                    minH="250px"
                  >
                   <Component/>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Route>
        ))}
        <Redirect exact from={`${match.path}`} to={`${match.path}/${navLinks[0].slug}`} />
      </Switch>
    </div>
  )
};
