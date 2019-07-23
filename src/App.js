import React, { Component } from 'react';
import theme from './shared/theme/theme';

import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from './shared/theme/globalStyle'
import Layout from './Layout';

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <GlobalStyle />
            <Layout />
          </BrowserRouter>
        </ThemeProvider>
      </div>
    );
  }
};

export default App;

