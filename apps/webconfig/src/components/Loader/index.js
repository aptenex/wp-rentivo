import * as React from 'react';
import { Spinner, chakra } from '@chakra-ui/react';

export default function Loader({wrapper = {}, ...rest}) {
  return (
    <chakra.div position="absolute" inset="0px" display="flex" justifyContent="center" alignItems="center" {...wrapper}>
      <Spinner {...rest}/>
    </chakra.div>
  );
};
