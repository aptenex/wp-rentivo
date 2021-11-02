import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './state/store';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      fontFamily: 'body',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
      transitionProperty: 'background-color',
      transitionDuration: 'normal',
      lineHeight: 'base',
      overflowY: 'scroll',
    },
    '*::-webkit-scrollbar': {
      w: '5px',
    },
    '*::-webkit-scrollbar-track': {
      bg: mode('gray.50', 'whiteAlpha.100')(props),
    },
    '*::-webkit-scrollbar-thumb': {
      bg: mode('gray.200', 'whiteAlpha.300')(props),
      borderRadius: 'md',
    },
    '*::-webkit-scrollbar-thumb:hover': {
      bg: mode('gray.300', 'whiteAlpha.400')(props),
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.500')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    }
  })
}


const theme = extendTheme({
  styles
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
