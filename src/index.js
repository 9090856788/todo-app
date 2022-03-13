import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

ReactDom.render(
    <>
    <ChakraProvider>
    <ColorModeScript initial='light'/>
        <App />
    </ChakraProvider>
    </>,document.getElementById('root')
);