import { Box, Flex, HStack } from '@chakra-ui/react';
import * as React from 'react';
import { NavItem } from './NavItem';
import { useLocation } from 'react-router-dom';

const MobileNavMenu = (props) => {
  const { isOpen, navLinks } = props;
  const { pathname } = useLocation();
  return (
    <Flex
      hidden={!isOpen}
      as="nav"
      direction="column"
      bg="blue.600"
      position="fixed"
      height="calc(100vh - 4rem)"
      top="16"
      insetX="0"
      zIndex={10}
      w="full"
    >
      <Box px="4">
        {navLinks.map((navLink, i) => (
          <NavItem.Mobile key={i} active={pathname.includes(`/${navLink.slug}`)} to={`/${navLink.slug}`} label={navLink.label}>
            {navLink.label}
          </NavItem.Mobile>
        ))}
      </Box>
    </Flex>
  )
};

const DesktopNavMenu = (props) => {
  const { navLinks } = props;
  const { pathname } = useLocation();

  return (
    <HStack
      spacing="3"
      flex="1"
      
    >
      {navLinks.map(({icon: Icon, ...navLink}, i) => (
        <NavItem.Desktop key={i} active={pathname.includes(`/${navLink.slug}`)} to={`/${navLink.slug}`} label={navLink.label} icon={<Icon />}>
          {navLink.label}
        </NavItem.Desktop>
      ))}
    </HStack>
  );
};

/*
display={{
        base: 'none',
        lg: 'flex',
      }}*/

export const NavMenu = {
  Mobile: MobileNavMenu,
  Desktop: DesktopNavMenu,
};
