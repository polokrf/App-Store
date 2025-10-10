import React, { useEffect, useState } from 'react';

import swal from 'sweetalert';
import { HashLoader } from 'react-spinners';

import InstallApp from './InstallApp';


const Install = () => {
  
  
  

  const [dataI, setDataI] = useState([]);

 
 

  useEffect(() => {
    const dataOfLocal = JSON.parse(localStorage.getItem('app'));
    if (dataOfLocal) {
     setDataI(dataOfLocal)
   }
  }, [])



  

  

  const handleClick = id => {
    const appReamove = JSON.parse(localStorage.getItem('app'));
    const filtersItems = appReamove.filter(apIds => apIds.id !== id);
    setDataI(filtersItems);
   
    localStorage.setItem('app', JSON.stringify(filtersItems))
   const willDelete = swal({
     title: 'Are you sure?',
     text: 'Are you sure that you want to  Uninstall this App?',
     icon: 'warning',
     dangerMode: true,
   });
 

   
  }

  const [sorts,setShorts] = useState('')
 
  const handelSrot = (type) => {
    setShorts(type)
    if (sorts === 'Big') {
       const bigRatiing = [...dataI].sort((a, b) => a.downloads - b.downloads);
       setDataI(bigRatiing);
      
    }
    if (sorts === 'Small') {
     const smallRating = [...dataI].sort((a, b) => b.downloads - a.downloads);
     setDataI(smallRating);
    }
  }
 

   

  
  return (
    <div className="wigth my-[40px]">
      <div className="mb-[30px] text-center">
        <h2 className="font-bold text-4xl capitalize mb-3">
          Your Installed Apps
        </h2>
        <p className="text-[#627382] ">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex md:justify-between justify-center items-center md:flex-row flex-col mb-[30px]">
        <div>
          <h3 className="text-2xl font-bold capitalize">
            {dataI.length} Apps Found
          </h3>
        </div>
        <div>
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1 md:mt-0 mt-3">
              Sort By Size ⬇
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li
                onClick={() => handelSrot('Small')}
                className=" mb-3 font-bold cursor-pointer"
              >
                High-Low
              </li>

              <li
                onClick={() => handelSrot('Big')}
                className=" font-bold cursor-pointer"
              >
                Low-High
              </li>
            </ul>
          </div>
        </div>
      </div>

      {dataI.length === 0 ? (
        <div className='text-center'>
          <h2 className="text-4xl font-bold capitalize text-red-600">"No apps Installed"</h2>
        </div>
      ) : (
        <div>
          {dataI.map(itemI => (
            <InstallApp
              key={itemI.id}
              itemI={itemI}
              handleClick={handleClick}
            ></InstallApp>
          ))}
        </div>
      )}
    </div>
  );
};

export default Install;