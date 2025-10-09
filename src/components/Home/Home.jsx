import React from 'react';
import Hero from './Hero';
import Apps8 from './Apps8';
import { Link, useLoaderData } from 'react-router';
import useApp from '../../Hooks/useApp';

const Home = () => {

  const { apps } = useApp()
  
  const mobileData = apps.slice(0, 8)
  
  
  return (
    <div>
      <Hero></Hero>
      <div className="md:max-w-[1400px] mx-auto w-full p-2 md:p-0 mt-[40px] mb-[15px]">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">Trending Apps</h2>
          <p className="text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mobileData.map((app, index) => (
            <Apps8 key={index} app={app}></Apps8>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Home;