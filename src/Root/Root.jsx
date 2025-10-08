import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const Root = () => {
  return (
    <div className=" bg-base-200 overflow-hidden">
      <Header></Header>
      <Outlet></Outlet>
      <div className='w-full overflow-hidden'>
        
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;