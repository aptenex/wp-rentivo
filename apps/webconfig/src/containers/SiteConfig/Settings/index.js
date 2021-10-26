import * as React from 'react';
import Form from '../../../components/Form';
import { allFields, fieldGroups } from '../../../fields/siteConfig/settings';

export default function Settings() {
  return (
    <Form
      title="Settings"
      dataStore="siteConfig"
      fields={allFields}
      fieldGroups={fieldGroups}
    />
  )
};
