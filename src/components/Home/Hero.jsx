import React from 'react';
import img1 from '../../assets/g1.png'
import img2 from '../../assets/g.png'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
    <div>
      <div className=" pt-[40px]  max-w-[1400px] mx-auto w-full">
        <div className="hero min-h-screen ">
          <div className="hero-content text-center">
            <div className="">
              <h1 className="text-5xl font-bold mb-2">We Build</h1>

              <h2 className="text-5xl font-bold mb-4">
                <span className="liner-text">Productive</span> Apps
              </h2>
              <p>
                <span className="md:block">
                  At HERO.IO, we craft innovative apps designed to make everyday
                  life simpler, smarter, and more exciting.
                </span>
                <span className="md:block">
                  Our goal is to turn your ideas into digital experiences that
                  truly make an impact.
                </span>
              </p>
              <div className="flex  justify-center my-4 ">
                <a
                  href="https://play.google.com/store/apps?hl=en"
                  className="btn md:mr-3 mb-2 mr-2 "
                >
                  <img src={img1} alt="" />
                  Google Play
                </a>
                <a href="https://www.apple.com/app-store/" className="btn ">
                  <img src={img2} alt="" /> App Store
                </a>
              </div>
              <div>
                <img src={hero} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="liner-bg    py-3 md:py-0 w-full   relative md:mt-[-111px]  mt-[-50px]">
        <div>
          <div className="md:h-[310px] flex flex-col justify-center items-center">
            <div className="mb-5 text-center">
              <h2 className="font-bold text-xl md:text-3xl text-white mb-4">
                Trusted by Millions, Built for You
              </h2>
            </div>
            <div className="flex flex-col  md:flex-row justify-center  text-center  ">
              <div className="lg:mr-[30px] md:mr-[15] mr-0 mb-[15px] md:mb-0">
                <span className="text-white mb-4">Total Downloads</span>
                <p className="font-bold text-3xl md:text-5xl text-white mb-4">
                  29.6M
                </p>
                <span className="text-white">21% more than last month</span>
              </div>
              <div className="lg:mr-[24px] md:mr-[15] mr-0 mb-[15px] md:mb-0">
                <span className="text-white mb-4">Total Reviews</span>
                <p className="font-bold text-3xl md:text-5xl text-white mb-4">
                  906K
                </p>
                <span className="text-white">46% more than last month</span>
              </div>
              <div className="lg:mr-[24px] md:mr-[15] mr-0 mb-[15px] md:mb-0">
                <span className="text-white mb-4">Active Apps</span>
                <p className="font-bold text-3xl md:text-5xl text-white mb-4">
                  132+
                </p>
                <span className="text-white">31 more will Launch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;