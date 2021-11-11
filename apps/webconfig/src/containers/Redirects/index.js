import * as React from 'react';
import SubPage from '../../components/SubPage';
import Form from '../../components/Form';
import { allFields, fieldGroups } from '../../fields/redirects/redirects';
import { startSetRedirects, setRedirectsError } from '../../state/actions/redirects';
export default function Redirects() {
  return (
    <SubPage title="Redirects">
      <Form
        title="Danger Zone"
        dataStore="redirects"
        reduxActions={{
          startSetReduxState: startSetRedirects,
          setReduxStateError: setRedirectsError
        }}
        fields={allFields}
        fieldGroups={fieldGroups}
      />
    </SubPage>
  )
};
