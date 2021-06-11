import * as React from 'react';
import Field from './Field';
import { SimpleGrid } from '@chakra-ui/react';
import { useFormikContext } from 'formik';

function FieldOrFields({field, ...rest}) {

  const { values } = useFormikContext();

  //if(typeof conditional === 'function' && conditional(values)) {
  //return null;
  //}

  return (
    <>
      {Array.isArray(field) ? (
        <SimpleGrid w="100%" columns={{base: 1, lg: field.length}} spacing={6}>
          {field.map((f, fi) => (
            <Field key={fi} {...f} {...rest} isConditional={typeof f.conditional === 'function' && f.conditional(values)}/>
          ))}
        </SimpleGrid>
      ) : (
        <Field {...field} {...rest} isConditional={typeof field.conditional === 'function' && field.conditional(values)}/>
      )}
    </>
  )
}

export default function Fields({fields, ...rest}) {
  return (
    <>
      {fields.map((field, i) => (
        <FieldOrFields {...rest} field={field} key={i}/>
      ))}
    </>
  );
};
