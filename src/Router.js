import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme/theme';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';

function Router() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/list" element={<List />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default Router;
