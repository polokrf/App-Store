import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import dwon from '../../assets/icon-downloads.png'
import review from '../../assets/icon-review.png'
import rating from '../../assets/icon-ratings.png'

const About = () => {
  
  const appAboutId = useParams()
  
  const convertEd = parseInt(appAboutId.appId)
  
  const appAbout = useLoaderData()
  
  const findId = appAbout.find(appId => appId.id === convertEd)

   const { image, title, ratingAvg, downloads, id, companyName, reviews } =
     findId;
  
  
  

  return (
    <div>
      <div className="flex justify-center  md:flex-row flex-col   wigth md:my-[50px] my-[30px]">
        <div className="mr-[40px]">
          <img
            className="md:w-[300px] h-[300px] w-[100%]  "
            src={image}
            alt=""
          />
        </div>
        <div>
          <div className=" border-b-1 border-gray-300 ">
            <h1 className="font-bold text-3xl capitalize mb-3">{title}</h1>
            <p className="mb-[30px] font-bold text-[#627382]">
              Developed by{' '}
              <span className="liner-text font-bold">{companyName}</span>
            </p>
          </div>
          <div className="flex justify-center items-center mt-[30px] md:flex-row flex-col mb-[30px]">
            <div className="mr-[24px]">
              <img src={dwon} alt="" />
              <p>Downloads</p>
              <span>{downloads}</span>
            </div>
            <div className="mr-[24px]">
              <img src={rating} alt="" />
              <p>Average Ratings</p>
              <span>{ratingAvg}</span>
            </div>
            <div>
              <img src={review} alt="" />
              <p>Total Reviews</p>
              <span>{reviews}</span>
            </div>
          </div>
          <div>
            <button className="btn bg-[#00D390]">Install Now (291 MB)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;