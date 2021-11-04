import { memo, useMemo, useState, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import SubPage from "../../components/SubPage";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { addNewLang, removeLang, startSetTranslations, startSetTranslation } from "../../state/actions/translations";
import defaultTranslations from '../../state/defaultStates/translations';
import { parse } from '@formatjs/icu-messageformat-parser';
import {
  Button,
  Box,
  Heading,
  Text,
  Flex,
  HStack,
  SimpleGrid,
  Tooltip,
  Editable,
  EditableInput,
  EditablePreview,
  Input,
  Select,
  IconButton,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { useDebounce } from 'use-debounce';
import { useHistory } from "react-router-dom";
import { isEqual } from "lodash";
import { RepeatClockIcon, CloseIcon } from "@chakra-ui/icons";

/*
const ast = parse(`this is {count, plural, 
  one{# dog} 
  other{# dogs}
}`)
*/

const dataStore = "translations";

const langOptions = ['fr', 'es', 'nl', 'it', 'de'];

export const Translation = ({ lang, translation, translationKey }) => {
  const dispatch = useDispatch();
  const prevTranslation = useRef(translation);
  const [newTranslation, setNewTranslation] = useState(translation);

  const handleOnBlur = useCallback(() => {
    if(newTranslation && prevTranslation.current !== newTranslation) {
      let canSave = true;

      try {
        parse(newTranslation);
      } catch (e) {
        console.log(e.message);
        if(e.message === 'MALFORMED_ARGUMENT') {
          canSave = false;
          alert('Please enter a valid message, using the ICU message format.');
          setNewTranslation(translation);
          prevTranslation.current = translation;
        }
      }
      if(canSave) {
        const sanitized = (newTranslation) ? newTranslation : translation;
        prevTranslation.current = sanitized;
        dispatch(startSetTranslation(lang, translationKey, sanitized));
      }

    }
  }, [dispatch, translation, translationKey, lang, newTranslation]);

  const handleReset = useCallback(() => {
    if(defaultTranslations[lang] !== undefined && defaultTranslations[lang][translationKey] !== undefined && defaultTranslations[lang][translationKey] !== translation) {
      setNewTranslation(defaultTranslations[lang][translationKey]);
      dispatch(startSetTranslation(lang, translationKey, defaultTranslations[lang][translationKey]));
    }
  }, [translationKey, translation, lang, dispatch]);

  const handleDelete = useCallback(() => {
    let r = window.confirm("Are you sure you want to remove this translation?");
    if (r === true) {
      if(defaultTranslations[lang] !== undefined && defaultTranslations[lang][translationKey] === undefined) {
        setNewTranslation(defaultTranslations[lang][translationKey] === '');
        dispatch(startSetTranslation(lang, translationKey, '', true));
      }
    }
  }, [translationKey, lang, dispatch]);

  console.log({defaults: defaultTranslations[lang], translationKey, exists: (defaultTranslations[lang][translationKey] !== undefined)});

  return (
    <Flex
      h="100%"
      borderBottom="1px solid"
      borderColor="blackAlpha.300"
      fontSize="sm"
      w="100%"
      spacing="0"
      _hover={{
        bg: 'blackAlpha.300'
      }}
    >
      <Box w="50%" overflow="hidden" borderRight="1px solid" borderColor="blackAlpha.300">
        <Text px={2} py={2} fontWeight="semibold" isTruncated>
          <Tooltip label={translationKey} placement="bottom-end">
            <InfoOutlineIcon mr={2} />
          </Tooltip>
          {translationKey}
        </Text>
      </Box>
      <Box w="50%" overflow="hidden" position="relative">
        <Box px={1} py={1}>
          {(defaultTranslations[lang] !== undefined && defaultTranslations[lang][translationKey] !== undefined && defaultTranslations[lang][translationKey] !== newTranslation) && (
            <IconButton
              position="absolute"
              top="4px"
              right="5px"
              colorScheme="blue"
              size="xs"
              aria-label="Revert to default"
              icon={<RepeatClockIcon />}
              onClick={handleReset}
            />
          )}
          {(defaultTranslations[lang] !== undefined && defaultTranslations[lang][translationKey] === undefined) && (
            <IconButton
              position="absolute"
              top="4px"
              right="5px"
              size="xs"
              aria-label="Remove"
              icon={<CloseIcon/>}
              onClick={handleDelete}
            />
          )}
          <Editable
            w={`calc(100% - 30px)`}
            defaultValue={translation} 
            value={newTranslation} 
            placeholder={defaultTranslations && defaultTranslations[lang] && defaultTranslations[lang][translationKey] ? defaultTranslations[lang][translationKey] : ''}
          >
            <EditablePreview px={1} py={1} _hover={{color: 'blue.500'}} minH="21px" w="100%"/>
            <EditableInput 
              px={1} 
              py={1} 
              onChange={(e) => setNewTranslation(e.target.value)} 
              onBlur={handleOnBlur} 
              onKeyDown={(e) => {
                if(e.key === 'Enter'){
                  e.target.blur(); 
                }
              }}
            />
          </Editable>
        </Box>
      </Box>
    </Flex>
  );
};

export const Translations = ({ langs, lang }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[dataStore].data);
  const translations = Object.entries(state[lang]).map(([key, translation]) => ({key, translation}));
  const [translationInputKeyValue, setTranslationInputKeyValue] = useState('');
  const [translationInputValue, setTranslationInputValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [searchValue] = useDebounce(inputValue, 600);
  const [newSelectedLang, setNewSelectedLang] = useState();
  const history = useHistory();

  const filteredTranslations = useMemo(() => {
    return translations.filter((({key, translation}) => 
      translation.toLowerCase().includes(searchValue.toLowerCase()) || 
      key.toLowerCase().includes(searchValue.toLowerCase())
    ))
  }, [translations, searchValue]);

  const handleNewLang = useCallback(async (newSelectedLang) => {
    if(newSelectedLang) {
      dispatch(addNewLang(newSelectedLang));
    } else {
      alert('Please select a language');
    }
  }, [dispatch]);

  const handleRemoveLang = useCallback(() => {
    let r = window.confirm("Are you sure you want to remove " + lang + "? Your changes will be lost.");
    if (r === true) {
      dispatch(removeLang(lang));
      history.push('/translations/en');
    }
  }, [dispatch, lang, history]);

  const handleAddTranslation = useCallback(() => {
    if(!translationInputKeyValue || !translationInputValue) {
      alert('Please enter a key & and value');
      return;
    }

    try {
      dispatch(startSetTranslation(
        lang, 
        `containers.LycanMessages.${JSON.stringify(translationInputKeyValue).slice(1, -1)}`, 
        `${JSON.stringify(translationInputValue).slice(1, -1)}`
      ));
    } catch(e) {
      alert(e.message);
    }

    setTranslationInputKeyValue('');
    setTranslationInputValue('');
  }, [dispatch, translationInputKeyValue, translationInputValue, lang]);

  const Row = useCallback(({ index, style }) => {
    return (
      <div style={style}>
       <Translation 
        lang={lang}
        translationKey={filteredTranslations[index].key}
        translation={filteredTranslations[index].translation}
      />
      </div>
    )
  }, [lang, filteredTranslations]);
  
  return (
    <Box position="relative">
      <HStack position="absolute" right="0" spacing={1}>
        <HStack spacing={1}>
          <Select top="-1px" position="relative" borderRadius="sm" placeholder="New lang" size="xs" w="100px" onChange={(e) => setNewSelectedLang(e.target.value)}>
            {langOptions.filter(lang => !langs.includes(lang)).map((lang) => (
              <option key={lang} value={lang}>{lang.toUpperCase()}</option>
            ))}
          </Select>
          <Button borderRadius="sm" colorScheme="green" size="xs" onClick={() => handleNewLang(newSelectedLang)}>
            + Add new language
          </Button>
        </HStack>
        {lang !== 'en' && (
          <Button borderRadius="sm" colorScheme="red" size="xs" onClick={handleRemoveLang}>
            Remove this language
          </Button>
        )}
      </HStack>
      <Heading as="h3" fontSize="xl" mb={3}>
        Editing: {lang.toUpperCase()}
      </Heading>


      <HStack w="100%" spacing={2} mb={6} justify="flex-end">
        <Box w="100%" mr={2}><Input size="sm" placeholder="Search translations" onChange={(e) => setInputValue(e.target.value)}/></Box>
        <Box><Input value={translationInputKeyValue} size="sm" minW="200px" placeholder="New Translation Key" onChange={(e) => setTranslationInputKeyValue(e.target.value)}/></Box>
        <Box><Input value={translationInputValue} size="sm" minW="200px" placeholder="New Translation Value" onChange={(e) => setTranslationInputValue(e.target.value)}/></Box>
        <Box><Button size="sm" onClick={handleAddTranslation}>Add Translation</Button></Box>
      </HStack>
      
      <SimpleGrid w="100%" columns={2} spacing={3} mb={2} fontWeight="bold" color="gray.400" fontSize="md" letterSpacing="0.5px" textTransform="uppercase">
        <Box>Translation Key</Box>
        <Box>Translation Value</Box>
      </SimpleGrid>
      
      <Box w="100%" h="800px" borderTop="1px solid"
      borderColor="blackAlpha.300">
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              itemCount={filteredTranslations.length}
              itemSize={74}
              width={width}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </Box>
    

    </Box>
  );
};

export const TranslationsMemo = memo(Translations, isEqual);

export default function AllTranslations() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[dataStore].data);
  const error = useSelector((state) => state[dataStore].error);
  const isSaving = useSelector((state) => state[dataStore].isSaving);
  const langs = Object.keys(state);
  const prevLangs = useRef(null);
  const [navLinks, setNavLinks] = useState([]);

  const getNavLinks = useCallback((langs) => {
    return langs.map((lang) => {
      return {
        slug: lang,
        label: lang.toUpperCase(),
        component: () => (
          <Translations langs={langs} lang={lang} />
        ),
      };
    });
  }, []);

  // Save adding/removing a language
  useEffect(() => {
    if(!prevLangs.current) {
      prevLangs.current = langs;
      setNavLinks(getNavLinks(langs));
    } else {
      if(!isEqual(prevLangs.current, langs)) {
        prevLangs.current = langs;
        dispatch(startSetTranslations());
        setNavLinks(getNavLinks(langs));
      }
    }

  }, [langs, dispatch, getNavLinks]);


  console.log({ state, error, isSaving });

  if(navLinks.length === 0) {
    return null;
  }
  
  return (
    <SubPage title={`Translations`} navLinks={navLinks}/>
  );
}
