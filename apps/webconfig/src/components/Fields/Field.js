import * as React from 'react';
import { ChromePicker } from 'react-color';
import colorParse from 'color-parse';
import { get, set } from 'lodash';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/mode/html';
import 'brace/theme/github';
import 'brace/theme/monokai';
import {
  Field as FormikField,
  FastField as FormikFieldFast,
  FieldArray as FormikFieldArray, useFormikContext
} from 'formik';
import {
  Textarea,
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
  IconButton,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
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

function rgb2hex(rgb){
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

function ColorPicker({value, id, defaultValue, setFieldValue, ...rest}) {

  const convertToColorObject = useCallback((value) => {
    const pc = colorParse(value);
    if(pc.space === 'rgb') {
      return  {
        a: pc.alpha,
        r: pc.values[0],
        g: pc.values[1],
        b: pc.values[2]
      }
    }

    return value;
  }, []);

  const convertToColorString = useCallback((value) => {
    const rgbaString = `rgba(${value.r}, ${value.g}, ${value.b}, ${value.a})`;
    return (value.a === 1) ? rgb2hex(rgbaString) : rgbaString;
  }, []);

  const [internalValue, setInternalValue] = useState(convertToColorObject(value ? value : defaultValue));
  const handleOnChange = useCallback((color) => {
    setInternalValue(color.rgb);
  }, [setInternalValue]);

  const handleOnChangeComplete = useCallback((color) => {
    setFieldValue(id, convertToColorString(color.rgb));
  }, [setFieldValue, id, convertToColorString]);

  return (
    <Box
      alignSelf="baseline"
      justifySelf="flex-start"
    >
      <Popover>
        <PopoverTrigger>
          <Box
            width="32px"
            height="32px"
            borderRadius="md"
            border="3px solid"
            borderColor="gray.200"
            _hover={{
              cursor: 'pointer'
            }}
            bg={convertToColorString(internalValue)}
          />
        </PopoverTrigger>
        <PopoverContent w="227px">
          <ChromePicker color={ internalValue } onChange={ handleOnChange } onChangeComplete={handleOnChangeComplete} />
        </PopoverContent>
      </Popover>
    </Box>
  )
}

function ColorField(props) {
  const { validate, id, helperText, label } = props;

  return (
    <FormikFieldFast name={id} validate={validate}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[id] && form.touched[id]}>
          {label && (<FormLabel htmlFor={id}>{label}</FormLabel>)}
          <ColorPicker {...props} {...form} {...field}/>
          <FormErrorMessage>{form.errors[id]}</FormErrorMessage>
          {helperText && (
            <FormHelperText>
              {helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    </FormikFieldFast>
  );
}

// TODO: Need to do loading...
function SelectField(props) {
  const { state } = useContext(FormStateContext);
  const { values } = useFormikContext();
  const { id, placeholder, inputProps, options = [], getOptions, listensTo = [] } = props;
  const [hasRunGet, setHasRunGet] = useState(false);
  const [renderedOptions, setRenderedOptions] = useState(options);
  const getState = useCallback((path, defaultValue) => get(state, path, defaultValue), [state]);
  const listeningToData = useMemo(() => {
    const listening = [];
    for (let [key, value] of Object.entries(values)) {
      if(listensTo.includes(key)) {
        listening.push(value);
      }
    }
    return JSON.stringify(listening);
  }, [listensTo, values]);
  const [listenToVal, setListenToVal] = useState(listeningToData);


  useEffect(() => {
    async function fetchData() {
      if(typeof getOptions !== 'function') return null;
      const newOptions = await getOptions({state, getState, get, values});
      if(newOptions.length) {
        setRenderedOptions(newOptions);
      }
    }

    if(!hasRunGet && typeof getOptions === 'function') {
      setHasRunGet(true);
      fetchData();
    }
    //console.log({listenToVal: listenToVal.length, listeningToData: listeningToData.length, areTheyDiff: (listenToVal !== listeningToData)});
    if(listenToVal !== listeningToData) {
      setListenToVal(listeningToData);
      fetchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getOptions, options, hasRunGet, setHasRunGet, setRenderedOptions, listensTo, listenToVal, listeningToData]);

  return (
    <FieldWrapperMemo {...props} key={`select-${id}-${renderedOptions.length}`}>
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

const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set

const nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set

function JSONEditorField(props) {
  let { state } = useContext(FormStateContext);
  if(props.path) {
    state = get(state, props.path);
  }
  const inputRef = React.useRef();
  const [hiddenInputState, setHiddenInputState] = useState(undefined);
  const { id } = props;

  useEffect(() => {
    if(hiddenInputState) {
      nativeInputValueSetter.call(inputRef.current, hiddenInputState);
      const fakeEvent = new Event('input', { bubbles: true});
      inputRef.current.dispatchEvent(fakeEvent);
    }
  }, [inputRef, hiddenInputState, id]);
  
  return (

    <FieldWrapperMemo {...props}>
      {({ field }) => (
        <div>
          <Input 
            ref={inputRef}
            id={id}
            onChange={field.onChange}
            display="none"
          />
          <div id={id + '_editor'}>
            {state && (
              <AceEditor
                placeholder={props.placeholder ? props.placeholder : ''}
                mode="json"
                theme="monokai"
                name={id + '_editor'}
                width="100%"
                height="800px"
                //onLoad={this.onLoad}
                onChange={(value) => {
                  setHiddenInputState(value);
                }}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                defaultValue={JSON.stringify(state, null, 2)}
                //value={JSON.stringify(state, null, 2)}
                setOptions={{
                  enableBasicAutocompletion: false,
                  enableLiveAutocompletion: false,
                  enableSnippets: false,
                  showLineNumbers: true,
                  tabSize: 2
                }}
              />
            )}
          </div>
        </div>
      )}
    </FieldWrapperMemo>
    
  );
}

function HTMLEditorField(props) {
  const { state } = useContext(FormStateContext);
  const inputRef = React.useRef();
  const [hiddenInputState, setHiddenInputState] = useState(undefined);
  const { id, placeholder, inputProps } = props;

  useEffect(() => {
    if(hiddenInputState) {
      nativeTextAreaValueSetter.call(inputRef.current, hiddenInputState);
      const fakeEvent = new Event('input', { bubbles: true});
      inputRef.current.dispatchEvent(fakeEvent);
    }
  }, [inputRef, hiddenInputState, id]);

  return (

    <FieldWrapperMemo {...props}>
      {({ field }) => (
        <div>
          <Textarea 
            ref={inputRef}
            onChange={field.onChange}
            id={id} 
            display="none"
            {...inputProps}
          />
          <div id={id + '_editor'}>
            {state && (
              <AceEditor
                mode="html"
                theme="monokai"
                name={id + '_editor'}
                width="100%"
                height="450px"
                //onLoad={this.onLoad}
                placeholder={placeholder}
                onChange={(value) => {
                  setHiddenInputState(value);
                }}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                defaultValue={field.value}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: false,
                  showLineNumbers: true,
                  tabSize: 2
                }}
              />
            )}
          </div>
        </div>
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

  if(type === 'color') {
    return <ColorField {...props}/>;
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

  if(type === 'json') {
    return <JSONEditorField {...props} />;
  }

  if(type === 'html') {
    return <HTMLEditorField {...props} />;
  }

  return <TextField {...props}/>;
}

const FieldMemo = React.memo(Field);

export default FieldMemo;
