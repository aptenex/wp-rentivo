import { flattenArray } from '../../utils/arrays';

export const headCustomHTMLField = {
  id: 'headCustomHTML',
  label: 'Please beware that modifications here may break your website.',
  type: 'html',
  path: 'headCustomHTML',
  defaultValue: '',
  placeholder: `<style>.example-css-selector: { width: 50%; }</style>`
};

export const closingBodyCustomHTMLField = {
  id: 'closingBodyCustomHTML',
  label: 'Please beware that modifications here may break your website.',
  type: 'html',
  path: 'closingBodyCustomHTML',
  defaultValue: '',
  placeholder: `<script>const javascriptVar = 1;</script>`
};

export const headCustomHTML = [
  headCustomHTMLField,
];

export const closingBodyCustomHTML = [
  closingBodyCustomHTMLField,
];

export const allFields = flattenArray([headCustomHTML, closingBodyCustomHTML]);

export const fieldGroups = [
  {
    title: 'HTML in <head>',
    fields: headCustomHTML
  },
  {
    title: 'HTML before </body>',
    fields: closingBodyCustomHTML
  }
];
