import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { GlobalStyle } from './AppStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        {/* <Hero /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
