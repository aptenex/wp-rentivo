import * as React from 'react';
import Form from '../../../components/Form';
import { allFields, fieldGroups } from '../../../fields/siteConfig/apisAndTracking';

export default function ApisAndTracking() {
  return (
    <Form
      title="APIs & Tracking"
      dataStore="siteConfig"
      fields={allFields}
      fieldGroups={fieldGroups}
    />
  )
};
