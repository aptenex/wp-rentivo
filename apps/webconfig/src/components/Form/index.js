import * as React from 'react';
import FieldGroup from '../FieldGroup';
import {
  Button,
  Heading,
  HStack,
  Stack,
  StackDivider,
} from '@chakra-ui/react'
import FormProvider from '../../containers/FormProvider';
import { useFormikContext } from 'formik';
import FieldGroupStack from '../FieldGroupStack';

const SubmitButton = () => {
  const { isSubmitting } = useFormikContext();
  return (
    <Button
      type="submit"
      colorScheme="blue"
      isLoading={isSubmitting}
    >
      Save Changes
    </Button>
  );
};

export default function Form({title, children, dataStore, fields, fieldGroups, reduxActions}) {
  return (
    <FormProvider fields={fields} dataStore={dataStore} reduxActions={reduxActions}>
      <Stack spacing="4" divider={<StackDivider />}>
        <Heading size="lg" as="h1" paddingBottom="4">
          {title}
        </Heading>
        {fieldGroups.map((fg, i) => (
          <FieldGroupStack key={i} title={fg.title} fields={fg.fields}/>
        ))}
        {children}
      </Stack>
      <FieldGroup mt="8">
        <HStack width="full">
          <SubmitButton/>
        </HStack>
      </FieldGroup>
    </FormProvider>
  )
};
