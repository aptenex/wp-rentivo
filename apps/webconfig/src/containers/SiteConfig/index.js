import * as React from 'react';
import SubPage from '../../components/SubPage';
import Overview from './Overview';
import Design from './Design';
import ApisAndTracking from './ApisAndTracking';
import Advanced from './Advanced';

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
  },
  {
    slug: `apis-and-tracking`,
    label: `APIs & Tracking`,
    component: ApisAndTracking
  },
  {
    slug: `advanced`,
    label: `Advanced`,
    component: Advanced
  },
];

export default function SiteConfig() {
  return (
    <SubPage title="Site Config" navLinks={navLinks}/>
  )
};
