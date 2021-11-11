import { Flex, useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react'
import { Logo } from './Logo';
import { MobileHamburgerMenu } from './MobileHamburgerMenu';
import { NavMenu } from './NavMenu';
import { useMobileMenuState } from './useMobileMenuState';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import SiteConfig from '../SiteConfig';
import Translations from '../Translations';
import CustomCode from '../CustomCode';
import Redirects from '../Redirects';
import { HiMenuAlt2, HiCode, HiTemplate, HiRefresh } from 'react-icons/hi';

const navLinks = [
  {
    slug: `siteconfig`,
    label: `Site Config`,
    component: SiteConfig,
    icon: HiTemplate,
  },
  {
    slug: `translations`,
    label: `Translations`,
    component: Translations,
    icon: HiMenuAlt2,
  },
  {
    slug: `redirects`,
    label: `Redirects`,
    component: Redirects,
    icon: HiRefresh,
  },
  {
    slug: `custom`,
    label: `Custom Code`,
    component: CustomCode,
    icon: HiCode,
  }
];

export default function App() {
  const { isMenuOpen, toggle } = useMobileMenuState();

  return (
    <Router>

      <Flex direction="column" bg={mode('gray.100', 'gray.800')} height="calc(100vh - 32px)" overflowY="scroll">
        <Flex align="center" bg="blue.600" color="white" px="6" minH="16">
          <Flex justify="space-between" align="center" w="full">
            <MobileHamburgerMenu onClick={toggle} isOpen={isMenuOpen} />
            
            <NavMenu.Desktop navLinks={navLinks} />
          </Flex>
        </Flex>

        <Switch>
          {navLinks.map(({slug, component: Component}, i) => (
            <Route key={i} path={`/${slug}`}>
              <Component/>
            </Route>
          ))}
          <Redirect exact from="/" to={`/${navLinks[0].slug}`} />
        </Switch>
      </Flex>
    </Router>
  );
}
// <NavMenu.Mobile navLinks={navLinks}/>
