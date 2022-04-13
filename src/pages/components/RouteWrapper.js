import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

const RouteWrapper = () => {
  return (
    <>
      <Nav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RouteWrapper;
