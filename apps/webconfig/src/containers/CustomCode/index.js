import * as React from 'react';
import SubPage from '../../components/SubPage';
import Form from '../../components/Form';
import { allFields, fieldGroups } from '../../fields/customCode/customCode';
import { startSetCustomCode, setCustomCodeError } from '../../state/actions/customCode';

export default function CustomCode() {
  return (
    <SubPage title="Custom Code">
      <Form
        title="Danger Zone"
        dataStore="customCode"
        reduxActions={{
          startSetReduxState: startSetCustomCode,
          setReduxStateError: setCustomCodeError
        }}
        fields={allFields}
        fieldGroups={fieldGroups}
      />
    </SubPage>
  )
};
