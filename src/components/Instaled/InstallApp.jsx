import React from 'react';
import { PiDownloadSimple } from 'react-icons/pi';
import { FaStar } from 'react-icons/fa';

const InstallApp = ({ itemI, handleClick }) => {
  const { image, title, ratingAvg, downloads, id } = itemI;

  return (
    <div className="bg-white shadow  md:p-[16px] p-2 rounded-2xl mb-[20px] flex md:justify-between justify-center items-center md:flex-row flex-col">
      {/* main div */}
      <div className="flex justify-center items-center md:justify-start ">
        <div className="mr-[16px]">
          <img className="w-[80px] h-[80px]" src={image} alt="" />
        </div>
        <div>
          <div>
            <h2 className="card-title font-bold text-xl mb-3">{title}</h2>
          </div>
          <div className="flex items-center md:mb-0 mb-3">
            <div className=" text-[#00D390] flex items-center  font-bold  bg-[#F1F5E8] py-2  px-3 rounded-xl">
              <div className="mr-2">
                <PiDownloadSimple />
              </div>
              {downloads}
            </div>
            <div className=" text-[#FF8811] font-bold flex items-center bg-[#F1F5E8] px-3 py-2 rounded-xl ml-3">
              <div className="mr-2">
                <FaStar />
              </div>
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={() => handleClick(id)}
          className="btn bg-[#00D390] text-white"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallApp;