import React from 'react';
import pagImg from '.././assets/error-404.png'
import { Link } from 'react-router';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const ErrorPage = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex items-center justify-center ">
        <div className="my-[30px] text-center">
          <img className="my-3 block mx-auto" src={pagImg} alt="" />
          <h2 className=" capitalize font-bold md:text-4xl text-2xl mb-2">
            Oops, page not found!
          </h2>

          <p className="text-[#627382] mb-2">
            The page you are looking for is not available.
          </p>
          <div>
            <Link to="/">
              <button className="liner-bg text-white font-bold btn">
                Go Back!
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;