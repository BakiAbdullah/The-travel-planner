import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import HeaderForLogin from '../pages/Shared/Header/HeaderForLogin';

const LoginLayout = () => {
  return (
    <div>
      <HeaderForLogin></HeaderForLogin>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;