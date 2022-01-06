import * as React from 'react';
import SubPage from '../../components/SubPage';
import Overview from './Overview';
import Settings from './Settings';
import Design from './Design';
import ApisAndTracking from './ApisAndTracking';
import Advanced from './Advanced';
import Danger from './Danger';
import { isAdmin, isManager } from '../../utils/role';

const navLinks = [
  {
    slug: `overview`,
    label: `Overview`,
    component: Overview
  },
  {
    slug: `design`,
    label: `Design`,
    component: Design
  }
];

if(isManager()) {
  navLinks.push(
    {
      slug: `settings`,
      label: `Settings`,
      component: Settings
    }
  );

  navLinks.push(
    {
      slug: `apis-and-tracking`,
      label: `APIs & Tracking`,
      component: ApisAndTracking
    }
  );
}

if(isAdmin()) {
  navLinks.push(
    {
      slug: `advanced`,
      label: `Advanced`,
      component: Advanced
    }
  );

  navLinks.push(
    {
      slug: `siteConfig`,
      label: `Site Config`,
      component: Danger
    }
  );
}

export default function SiteConfig() {
  return (
    <SubPage title="Site Config" navLinks={navLinks}/>
  )
};
