import React, { useState } from "react";
import navbar from "../assets/shark tank banner.png";
import smallNavbar from "../assets/shark tank banner-sm.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-center">
        <img
          src={smallNavbar}
          alt="Navbar Logo"
          className=" w-full h-10 sm:h-16 md:hidden"
        />
        <img
          src={navbar}
          alt="Navbar Logo"
          className="hidden lg:block xl:w-full md:block md:w-full w-full h-auto"
        />
      </div>
      <div className="flex md:w-full w-full justify-between md:justify-between">
        <div className="flex w-full   md:w-full flex-col sm:flex-row justify-between items-center p-1 md:px-10">
          <div className="flex w-full  justify-between ">
            <div className="flex justify-between gap-2 w-full mb-4 md:mb-0">
                <div className="flex mt-2 gap-2">
              <p className="text-black text-xl font-semibold">PLUS</p>
              <p className="font-semibold text-xl text-yellow-600">GOLD</p>
              </div>
              <div className="flex ">
              <button className="bg-red-700 md:text-xs flex w-32 text-xs text-center justify-center   sm:text-xs    lg:hidden text-white rounded-3xl p-2">
                Download App
              </button>
         
            <div className=" justify-end text-end flex items-end lg:hidden md:justify-end  ">
              <button onClick={toggleMenu} className="text-gray-600 text-end justify-end items-end text-2xl">
                ☰
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="flex justify-end  flex-col items-start w-full ">
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-gray-600 font-medium text-xl hover:text-red-700">
                  Home
                </p>
                <p className="text-gray-600 font-medium text-xl hover:text-red-700">
                  Start Saving
                </p>
                <p className="text-gray-600 font-medium text-xl hover:text-red-700">
                  Partner With Us
                </p>
              </div>
            </div>
          )}
             </div>
          </div>
        </div>
        <div className=" hidden md:hidden  justify-end mr-20 items-center    w-full lg:flex  md:flex-row gap-6 mt-4 md:mt-0">
          <p className="text-gray-600 text-center justify-center items-center font-medium text-xl hover:text-red-700">
            Home
          </p>
          <p className="text-gray-600 flex font-medium text-xl hover:text-red-700">
            Start Saving
          </p>
          <p className="text-gray-600 flex font-medium text-xl hover:text-red-700">
            Partner With Us
          </p>
          <button className="bg-red-700 text-sm  text-white rounded-3xl p-2">
            Download App
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
