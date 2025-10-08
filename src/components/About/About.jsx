import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import dwon from '../../assets/icon-downloads.png'
import review from '../../assets/icon-review.png'
import rating from '../../assets/icon-ratings.png'
import ReChart from './ReChart';
import { getDataLocal, setDataItems } from '../../Appjs/app';
 import { ToastContainer, toast } from 'react-toastify';

const About = () => {
  
  

  const appAboutId = useParams()
  
  const convertEd = parseInt(appAboutId.appId)
  
  const appAbout = useLoaderData()
  
  const findId = appAbout.find(appId => appId.id === convertEd)
    
   const {
     image,
     title,
     ratingAvg,
     downloads,
    id,
     companyName,
     reviews,
     ratings,
     size,
     description
   } = findId;
  
  const dataCharst = ratings.map(d => {
    const chart = {
      name: d.name,
      count:d.count
    }
    return chart
  })
  
  const [install, setInstall] = useState(false)
  
  const handelInstall = id => {
    setInstall(true)
    toast('Installed');
    setDataItems(id)
  }
  
  
  useEffect(() => {
    const dataLocal = getDataLocal();
    const data = dataLocal.map(ids => parseInt(ids))
    if (data.includes(id)) {
       setInstall(true)
    } else {
      setInstall(false)
     }
  },[])
  

  return (
    <div className="wigth">
      <div className="  border-b-1 border-gray-300 mb-[30px] flex justify-center md:justify-start ">
        <div className="flex justify-center md:justify-start md:flex-row flex-col   md:my-[50px] my-[30px]">
          <div className="md:mr-[40px] mb-[20px] md:mb-0">
            <img
              className="md:w-[300px] h-[300px] w-[100%]  "
              src={image}
              alt=""
            />
          </div>
          <div>
            <div className=" border-b-1 border-gray-300 text-center md:text-left ">
              <h1 className="font-bold text-3xl capitalize mb-3">{title}</h1>
              <p className="mb-[30px] font-bold text-[#627382]">
                Developed by{' '}
                <span className="liner-text font-bold">{companyName}</span>
              </p>
            </div>
            <div className="flex justify-center items-center mt-[30px] md:flex-row flex-col mb-[30px]">
              <div className="md:mr-[24px] md:mb-0 mb-[20px] text-center md:text-left">
                <img className="mx-auto mb-[10px] md:mb-0" src={dwon} alt="" />
                <p>Downloads</p>
                <span>{downloads}</span>
              </div>
              <div className="md:mr-[24px] md:mb-0 mb-[20px] text-center md:text-left">
                <img
                  className="mx-auto mb-[10px] md:mb-0"
                  src={rating}
                  alt=""
                />
                <p>Average Ratings</p>
                <span>{ratingAvg}</span>
              </div>
              <div className=" md:mb-0 mb-[20px] text-center md:text-left">
                <img
                  className="mx-auto mb-[10px] md:mb-0"
                  src={review}
                  alt=""
                />
                <p>Total Reviews</p>
                <span>{reviews}</span>
              </div>
            </div>
            <div className="text-center md:text-left">
              <button
                disabled={install}
                onClick={() => handelInstall(id)}
                className="btn bg-[#00D390] text-white"
              >
                {install ? 'Installed' : `Install Now (${size} MB)`}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-b-1 border-gray-300 mb-[30px]">
        <h3 className="font-bold text-3xl capitalize mb-[20px] ">Ratings</h3>
        <ReChart dataCharst={dataCharst}></ReChart>
      </div>
      <div className="mb-[30px]">
        <h2 className="font-bold text-3xl capitalize mb-[20px]">Description</h2>
        <p className="text-[#627382]">{description}</p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default About;