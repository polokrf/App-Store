import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import App from './App';
import { CiSearch } from 'react-icons/ci';
import ErrorApp from './ErrorApp';

const Apps = () => {
  const appsData = useLoaderData()
 
  const [datas, setDatas] = useState(appsData)
  
  
 
  
  const [ittel, setTitel] = useState('')
  
  const handelChage = (e) => {
    const titelValue = e.target.value.toLowerCase()
    setTitel(titelValue)

    const matchedApps = datas.filter(data => data.title.toLowerCase().includes(titelValue))

    

    
      setDatas(matchedApps);
    

    }
    
   

    
  

 
 
  
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
              ({appsData.length}) Apps Found
            </h3>
          </div>
          <div className="flex items-center">
            <input
              className="input shadow "
              type="text"
              name="name"
              id=""
              placeholder="search Apps"
              onChange={handelChage}
              defaultValue={ittel}
            />
          </div>
        </div>

        {datas.length === 0 ? (
          <div className="my-[30px]">
            <ErrorApp></ErrorApp>
          </div>
        ) : (
          <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center">
            {datas.map((app, index) => (
              <App key={index} app={app}></App>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;