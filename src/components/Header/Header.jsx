import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
import { FaGithub } from 'react-icons/fa';

const Header = () => {

  const [active, setActive] = useState('Home')
  
  const handelActive = (type) => {
    setActive(type)
  }

  const naveBare = (
    <>
      <Link to="/">
        <li
          onClick={() => handelActive('Home')}
          className={`${
            active === 'Home' && 'liner-text '
          } font-bold mb-2 md:mr-4`}
        >
          Home
        </li>
      </Link>
      <Link to="/apps">
        <li
          onClick={() => handelActive('apps')}
          className={`${
            active === 'apps' && 'liner-text '
          } font-bold mb-2  md:mr-4`}
        >
          Apps
        </li>
      </Link>
      <Link to="/Installation">
        <li
          onClick={() => handelActive('Installation')}
          className={`${
            active === 'Installation' && 'liner-text '
          } font-bold  `}
        >
          Installation
        </li>
      </Link>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar  md:max-w-[1400px] mx-auto w-full p-2 md:p-0 overflow-hidden">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {naveBare}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-[40px] object-cover" src={logo} alt="" />
            <h2 className=" text-xl font-bold liner-text">HERO.IO</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{naveBare}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/polokrf"
            className="btn liner-bg text-white "
          >
            <FaGithub /> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;