import React from 'react';
import errorApp from '../../assets/App-Error.png'
import {useNavigate } from 'react-router';

const ErrorApp = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center ">
      <div className="my-[30px] text-center">
        <img className="my-3 block mx-auto" src={errorApp} alt="" />
        <h2 className=" capitalize font-bold md:text-4xl text-2xl mb-2">
          OPPS!! APP NOT FOUND
        </h2>

        <p className="text-[#627382] mb-2">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <div>
          <button
            onClick={() => navigate('/apps')}
            className="liner-bg text-white font-bold btn"
          >
            Go Back!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorApp;