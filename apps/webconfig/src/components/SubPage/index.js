import * as React from 'react';
import PageHeader from '../../components/PageHeader';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import SubPageTemplate from './SubPageTemplate';

export default function SubPage({title, navLinks, children}) {
  let match = useRouteMatch();
  return (
    <div>
      <PageHeader title={title} navLinks={navLinks}/>
      {children}
      <Switch>
        {navLinks.map(({slug, component: Component}, i) => (
          <Route key={i} path={`${match.path}/${slug}`}>
            <SubPageTemplate showPageHeader={false} title={title} navLinks={navLinks}>
              <Component/>
            </SubPageTemplate>
          </Route>
        ))}
        <Redirect exact from={`${match.path}`} to={`${match.path}/${navLinks[0].slug}`} />
      </Switch>
    </div>
  )
};
