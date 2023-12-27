import React from "react";
import Home from "../images/Frame.png";
import Rectangle from "../images/Rectangle.jpg";
import Signout from "../images/Signout.jpg";

const Header = () => {
  return (
    <>
      <div className="bg-background w-full flex flex-col items-start justify-start text-left text-sm text-black-100 font-small-body-medium">
        <div className="rounded-t-none rounded-b-13xl bg-white w-full flex flex-row items-center justify-between py-2 pr-4 pl-4 box-border">
          <div className="flex flex-row items-center justify-start py-4 px-4 gap-4">
            <img
              className="rounded-lg w-8 h-8 bg-black"
              alt="home icon"
              src={Home}
            />
            <div className="flex flex-col items-start justify-start">
              <div className="relative font-black">Welcome 👋</div>
              <div className="flex">
                <span className="font-normal text-xs">it’s: 20 Sept.</span>
                <span className="ml-2 font-normal text-xs">11:58 am</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-end justify-end text-xs gap-7">
          <span className="flex flex-row items-start justify-start ml-2">
              Jobs
            </span>
            <span className="flex flex-row items-start justify-start ml-2">
              Employees
            </span>
            <img
              className="rounded-lg w-4 h-4 bg-black"
              alt="rectangle icon"
              src={Rectangle}
            />
            <span className="text-sm font-normal">Giorgi Gelashvili</span>
            <img
              className="rounded-lg ml-ts w-4 h-4 bg-black"
              alt="signout icon"
              src={Signout}
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
