import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/bgImg.png"), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))`,
        backgroundBlendMode: "overlay",
      }}
      className="bg-cover bg-center min-h-screen"
    >
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;