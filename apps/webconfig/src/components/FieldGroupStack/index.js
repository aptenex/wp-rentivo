import { VStack } from '@chakra-ui/react';
import * as React from 'react';
import FieldGroup from '../FieldGroup';
import Fields from '../Fields';

export default function FieldGroupStack({title, children, fields}) {
  return (
    <FieldGroup title={title}>
      <VStack width="full" spacing="6">
        <Fields fields={fields}/>
        {children}
      </VStack>
    </FieldGroup>
  );
}
