import React from 'react';

import { FaStar } from 'react-icons/fa';
import { PiDownloadSimple } from 'react-icons/pi';
import { Link } from 'react-router';

const Apps8 = ({ app }) => {
  console.log(app)
  const {  image, title, ratingAvg, downloads,id } = app;
  return (
    <div>
      <Link to={`/apps/${id}`}>
        <div className="card bg-base-100 p-2 shadow-sm m-4 ">
          <figure>
            <img
              className="h-[300px] object-cover shadow rounded-xl "
              src={image}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-xl mb-3">{title}</h2>

            <div className="flex justify-between items-center">
              <div className=" text-[#00D390] flex items-center  font-bold  bg-[#F1F5E8] py-2  px-3 rounded-xl">
                <div className="mr-2">
                  <PiDownloadSimple />
                </div>
                {downloads}
              </div>
              <div className=" text-[#FF8811] font-bold flex items-center bg-[#F1F5E8] px-3 py-2 rounded-xl">
                <div className="mr-2">
                  <FaStar />
                </div>
                {ratingAvg}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Apps8;