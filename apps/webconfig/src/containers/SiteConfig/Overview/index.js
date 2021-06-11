import * as React from 'react';
import Form from '../../../components/Form';
import { allFields, fieldGroups } from '../../../fields/siteConfig/overview';

export default function Overview() {
  return (
    <Form
      title="Overview"
      dataStore="siteConfig"
      fields={allFields}
      fieldGroups={fieldGroups}
    />
  )
};
