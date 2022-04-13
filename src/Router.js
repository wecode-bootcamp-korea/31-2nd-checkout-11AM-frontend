import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import RouteWrapper from './pages/components/RouteWrapper';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteWrapper />}>
          <Route index element={<Main />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
