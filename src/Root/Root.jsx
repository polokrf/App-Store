import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { HashLoader } from 'react-spinners';
import { useNavigation } from 'react-router';


const Root = () => {
  const navigatino = useNavigation()
  return (
    
      <div className=" bg-base-200 overflow-hidden min-h-screen flex flex-col ">
        <div className="flex-1">
          <Header></Header>
          {navigatino?.state === 'loading' ? (
            <div className="w-[200px] mx-auto">
              <HashLoader></HashLoader>
            </div>
          ) : (
            <Outlet></Outlet>
          )}
        </div>

        <div className="w-full overflow-hidden mb-0">
          <Footer></Footer>
        </div>
      </div>
    
  );
};

export default Root;