import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { GlobalStyle } from './AppStyle';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
