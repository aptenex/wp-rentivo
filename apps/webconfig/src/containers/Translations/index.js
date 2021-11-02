import { useMemo, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import SubPage from "../../components/SubPage";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
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
  Select
} from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { useDebounce } from 'use-debounce';

const dataStore = "translations";

const langOptions = ['fr', 'es', 'nl', 'it', 'de'];

export const Translation = ({ lang, translation, translationKey }) => {
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
      <Box w="50%" overflow="hidden">
        <Box px={1} py={1}>
          <Editable defaultValue={translation}>
            <EditablePreview px={1} py={1} _hover={{color: 'blue.500'}} />
            <EditableInput px={1} py={1} />
          </Editable>
        </Box>
      </Box>
    </Flex>
  );
};

export const Translations = ({ langs, lang, translations }) => {

  const [inputValue, setInputValue] = useState('');
  const [searchValue] = useDebounce(inputValue, 600);

  const filteredTranslations = useMemo(() => {
    console.log('running filter');
    return translations.filter((({key, translation}) => 
      translation.toLowerCase().includes(searchValue.toLowerCase()) || 
      key.toLowerCase().includes(searchValue.toLowerCase())
    ))
  }, [translations, searchValue]);

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
          <Select top="-1px" position="relative" borderRadius="sm" placeholder="New lang" size="xs" w="100px">
            {langOptions.filter(lang => lang.includes(lang)).map((lang) => (
              <option value={lang}>{lang.toUpperCase()}</option>
            ))}
          </Select>
          <Button borderRadius="sm" colorScheme="green" size="xs">
            + Add new language
          </Button>
        </HStack>
        {lang !== 'en' && (
          <Button borderRadius="sm" colorScheme="red" size="xs">
            Remove this language
          </Button>
        )}
      </HStack>
      <Heading as="h3" fontSize="xl" mb={3}>
        Editing: {lang.toUpperCase()}
      </Heading>


      <HStack w="100%" maxW="320px" spacing={2} alignContent="center" mb={6}>
        <Input size="sm" placeholder="Search translations" onChange={(e) => setInputValue(e.target.value)}/>
      </HStack>
      
      <SimpleGrid w="100%" columns={2} spacing={3} mb={2} fontWeight="bold" color="gray.400" fontSize="md" letterSpacing="0.5px" textTransform="uppercase">
        <Box>Translation Key</Box>
        <Box>Translation Key</Box>
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

/*
 {translations.map(({key, translation}) => (
          <Translation key={key} translationKey={key} translation={translation}/>
        ))}
        */

export default function AllTranslations() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[dataStore].data);
  const error = useSelector((state) => state[dataStore].error);
  const isSaving = useSelector((state) => state[dataStore].isSaving);

  const navLinks = useMemo(() => {
    return Object.entries(state).map(([lang, translationsObj]) => {
      const langs = Object.keys(state);
      const translations = Object.entries(translationsObj).map(([key, translation]) => ({key, translation}));

      return {
        slug: lang,
        label: lang.toUpperCase(),
        component: () => (
          <Translations langs={langs} lang={lang} translations={translations} />
        ),
      };
    });
  }, [state]);

  console.log({ state, error, isSaving });

  return (
    <SubPage title={`Translations`} navLinks={navLinks}/>
  );
}
