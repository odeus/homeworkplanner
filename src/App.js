import React from 'react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from './shared/theme/theme';
import GlobalStyle from './shared/theme/globalStyle';
import Layout from './Layout';

const App = () => (
    <div>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyle />
                <Layout />
            </BrowserRouter>
        </ThemeProvider>
    </div>
);

export default App;
