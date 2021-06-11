import * as React from 'react';
import { get, set } from 'lodash';
import {
  Field as FormikField,
  FastField as FormikFieldFast,
  FieldArray as FormikFieldArray
} from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Switch,
  NumberInput,
  NumberInputField,
  Select,
  HStack,
  VStack,
  IconButton
} from '@chakra-ui/react';
import { HiOutlineExternalLink, HiPlus, HiMinus, HiChevronUp, HiChevronDown } from 'react-icons/hi';
import { FormStateContext, setSanitizer } from '../../containers/FormProvider';
import { useContext } from 'react';
import Fields from './index';
import { useCallback, useState, useMemo } from 'react';
import { useEffect } from 'react';

export function FieldWrapper(props) {
  const { state, slowFields } = useContext(FormStateContext);
  let { id } = props;
  const { validate, label, helperText, children, onBlur, inputProps = {}, hidden, isArray, inArray, itemIndex, parentId, isArrayOfStrings } = props;
  const getState = useCallback((path, defaultValue) => get(state, path, defaultValue), [state]);

  const formControlProps = hidden ? { visibility: 'hidden', h: 0, p: 0, style: { marginTop: 0 } } : {};

  if(inArray) {
    id = (isArrayOfStrings) ? `${parentId}.${itemIndex}` : `${parentId}[${itemIndex}].${id}`;
  }

  const isSlowField = useMemo(() => {
    return slowFields.includes(id);
  }, [slowFields, id]);

  const FastSlowField = (isSlowField) ? FormikField : FormikFieldFast;

  //console.log(slowFields, Math.random(), id, isSlowField, inArray);

  if(isArray) {
    return (
      <FormikFieldArray name={id} validate={validate}>
        {arrayHelpers => (
          <FormControl>
            {label && (<FormLabel htmlFor={id}>{label}</FormLabel>)}
            {helperText && (
              <FormHelperText mb={4}>
                {helperText}
              </FormHelperText>
            )}
            {children({...arrayHelpers, ...props})}
            <FormErrorMessage>{arrayHelpers.form.errors[id]}</FormErrorMessage>
          </FormControl>
        )}
      </FormikFieldArray>
    )
  }

  return (
    <FastSlowField name={id} validate={validate}>
      {({ field, form }) => (
        <FormControl {...formControlProps} isInvalid={form.errors[id] && form.touched[id]}>
          {label && (<FormLabel htmlFor={id}>{label}</FormLabel>)}
          {children({field: { ...field, onBlur: typeof onBlur === 'function' ? (e) => onBlur({
                field,
                form,
                state,
                get,
                set,
                prevVal: props.getValue && typeof props.getValue === 'function' ? props.getValue({state, get, getState}) : get(state, props.path),
                getState,
                setState: (path, value) => set(state, path, setSanitizer(value, props.type)),
                setVal: (value) => set(state, props.path, setSanitizer(value, props.type)),
                id,
                e
              }) : field.onBlur}, form, inputProps, ...props})}
          <FormErrorMessage>{form.errors[id]}</FormErrorMessage>
          {helperText && (
            <FormHelperText>
              {helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    </FastSlowField>

  );
}

const FieldWrapperMemo = React.memo(FieldWrapper);

function NumberField(props) {
  const { id, placeholder, inputProps, numberInputProps = {} } = props;

  return (
    <FieldWrapperMemo {...props}>
      {({ field }) => (
        <NumberInput {...field} id={id} placeholder={placeholder} {...numberInputProps}>
          <NumberInputField {...field} {...inputProps} />
        </NumberInput>
      )}
    </FieldWrapperMemo>
  );
}

function TextField(props) {
  const { id, placeholder, inputProps } = props;

  return (
    <FieldWrapperMemo {...props}>
      {({ field }) => (
        <Input {...field} id={id} placeholder={placeholder} {...inputProps} />
      )}
    </FieldWrapperMemo>
  );
}

// TODO: Need to do loading...
function SelectField(props) {
  const { id, placeholder, inputProps, options = [], getOptions } = props;
  const [hasRunGet, setHasRunGet] = useState(false);
  const [renderedOptions, setRenderedOptions] = useState(options);

  useEffect(() => {
    async function fetchData() {
      const newOptions = await getOptions();
      if(newOptions.length) {
        setRenderedOptions(newOptions);
      }
    }

    if(!hasRunGet) {
      setHasRunGet(true);
      fetchData();
    }
  }, [getOptions, options, hasRunGet, setHasRunGet, setRenderedOptions]);

  return (
    <FieldWrapperMemo {...props}>
      {({ field }) => (
        <Select {...field} id={id} placeholder={placeholder} {...inputProps}>
          {renderedOptions.map((option, i) => <option key={i} value={typeof option === 'string' ? option : option.value}>{typeof option === 'string' ? option : option.label}</option>)}
        </Select>
      )}
    </FieldWrapperMemo>
  );
}

function MediaUrlField(props) {
  const { id, placeholder, inputProps } = props;

  return (
    <FieldWrapperMemo {...props}>
      {({ field }) => (
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            {...field}
            id={id}
            placeholder={placeholder}
            {...inputProps}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => window.open('/wp-admin/upload.php', 'Media Library', 'width=800,height=600,scrollbars=yes')}>
              <HiOutlineExternalLink/>
            </Button>
          </InputRightElement>
        </InputGroup>
      )}
    </FieldWrapperMemo>
  );
}

function SwitchField(props) {
  const { id, inputProps } = props;

  return (
    <FieldWrapperMemo {...props}>
      {({ field, form }) => (
        <Switch
          {...field}
          id={id}
          isInvalid={!!form.errors[id] && form.touched[id]}
          isChecked={field.value}
          {...inputProps}
        />
      )}
    </FieldWrapperMemo>
  );
}

// TODO: Fix massive re-rendering issues onChange in repeater field.
// https://formik.org/docs/api/fieldarray

function RepeaterValues({values, id, move, push, insert, remove, fields, addNewLabel}) {
  const isArrayOfStrings = (!Array.isArray(fields) && typeof fields === 'object');

  const handleInsert = useCallback((i) => {
    let newVal;

    if(!isArrayOfStrings && fields.length > 0) {
      newVal = {};
      for(const field of fields) {
        newVal[field.id] = field.defaultValue ? field.defaultValue : '';
      }
    } else {
      newVal = fields && fields.defaultValue ? fields.defaultValue : '';
    }

    insert(i + 1, newVal);
  }, [insert, isArrayOfStrings, fields]);

  return (
    <VStack w="100%" align="flex-start">
      {values && values.length > 0 ? (
        values.map((val, i) => (
          <HStack key={i} w="100%" align="flex-end">
            {!isArrayOfStrings && fields && fields.length && <Fields fields={fields} inArray isArrayOfStrings={isArrayOfStrings} itemIndex={i} parentId={id}/>}
            {isArrayOfStrings && <FieldMemo {...fields} inArray isArrayOfStrings={isArrayOfStrings} parentId={id} itemIndex={i} />}
            <IconButton aria-label="Remove" icon={<HiMinus />} onClick={() => remove(i)}/>
            <IconButton aria-label="Add" icon={<HiPlus />} onClick={() => handleInsert(i)}/>
            {values.length > 1 && <IconButton aria-label="Up" icon={<HiChevronUp />} onClick={() => move(i, i - 1)}/>}
            {values.length > 1 && <IconButton aria-label="Down" icon={<HiChevronDown />} onClick={() => move(i, i + 1)}/>}
          </HStack>
        ))
      ) : (
        <Button type="button" onClick={() => push('')}>
          {addNewLabel ? addNewLabel : 'Add new item'}
        </Button>
      )}
    </VStack>
  );
}

const RepeaterValuesMemo = React.memo(RepeaterValues);

function RepeaterField(props) {
  const { id, addNewLabel, fields } = props;

  return (
    <FieldWrapperMemo {...props} isArray>
      {({remove, insert, move, push, form: { values }}) => (
        <RepeaterValuesMemo
          id={id}
          remove={remove}
          insert={insert}
          move={move}
          push={push}
          values={values[id]}
          fields={fields}
          addNewLabel={addNewLabel}
        />
      )}
    </FieldWrapperMemo>
  );
}

function Field(props) {
  const { type, render, isConditional } = props;

  if(isConditional) {
    return null;
  }

  if(render) {
    return render(props);
  }

  if(type === 'switch') {
    return <SwitchField {...props}/>;
  }

  if(type === 'media') {
    return <MediaUrlField {...props}/>;
  }

  if(type === 'number') {
    return <NumberField {...props}/>;
  }

  if(type === 'select') {
    return <SelectField {...props}/>;
  }

  if(type === 'repeater') {
    return <RepeaterField {...props}/>;
  }

  return <TextField {...props}/>;
}

const FieldMemo = React.memo(Field);

export default FieldMemo;
