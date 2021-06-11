import * as React from 'react';
import Form from '../../../components/Form';
import { allFields, fieldGroups } from '../../../fields/siteConfig/advanced';

export default function Advanced() {
  return (
    <Form
      title="Advanced"
      dataStore="siteConfig"
      fields={allFields}
      fieldGroups={fieldGroups}
    />
  )
};
