import React, { Component } from 'react';
import theme from './theme';

import { ThemeProvider } from "styled-components";
import GlobalStyle from './globalStyle'
import Layout from './Layout';
import Dashboard from './pages/Dashboard/';
import Navigation from './components/Navigation/';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Layout>
            <Navigation />
            <Dashboard />
          </Layout>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
