import React, {   useState } from 'react';

import App from './App';
import { CiSearch } from 'react-icons/ci';
import ErrorApp from './ErrorApp';

import useApp from '../../Hooks/useApp';
import { HashLoader } from 'react-spinners';

const Apps = () => {
  const { apps,loading } = useApp();
  
  const [datas, setDatas] = useState('');
  const trim = datas.trim().toLowerCase();
  const findSarchData =trim ? apps.filter(d => d.title.toLowerCase() === trim):apps;

  

 if(loading) return <HashLoader></HashLoader>
 
 
  
  
  return (
    <div>
      <div className="wigth mt-[50px]">
        <div className="text-center my-[30px]">
          <h1 className="font-bold lg:text-5xl text-3xl capitalize mb-[15px]">
            Our All Applications
          </h1>
          <p className=" capitalize text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center m-4 md:flex-row flex-col">
          <div>
            <h3 className="font-bold text-2xl capitalize  mb-2 md:mb-0">
              ({findSarchData.length}) Apps Found
            </h3>
          </div>
          <div className="flex items-center">
            <label className="input">
              <input
                onChange={e => setDatas(e.target.value)}
                value={datas}
                type="search"
                placeholder="search Apps"
              />
            </label>
          </div>
        </div>

        <div>{findSarchData.length === 0 && <ErrorApp></ErrorApp>}</div>

        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center">
          {findSarchData.map((app, index) => (
            <App key={index} app={app}></App>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Apps;