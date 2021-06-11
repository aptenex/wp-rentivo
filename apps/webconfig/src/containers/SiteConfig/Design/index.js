import * as React from 'react';
import Form from '../../../components/Form';
import { allFields, fieldGroups } from '../../../fields/siteConfig/design';

export default function Design() {
  return (
    <Form
      title="Design"
      dataStore="siteConfig"
      fields={allFields}
      fieldGroups={fieldGroups}
    />
  )
};
