import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineNumbers } from "react-icons/md";

const HomePageSlider = () => {
  return (
    <>
      <div className="w-[1343px] h-[450px] bg-gray-300 flex justify-center items-center">
        {/* <div className="w-[80%] h-[100%] bg-yellow-300 ">
          <div className="w-[100%] h-[35%] bg-pink-300 flex justify-end items-center">
            <div className="w-[15%] h-[80%] flex justify-center items-center ">
              <img
                className="w-[90%] h-[50%] "
                src="https://www.portotheme.com/wordpress/porto/education/wp-content/uploads/sites/84/2021/06/ed-logo.png"
                alt=""
              />
            </div>
            <div className="w-[35%] h-[80%] bg-green-600 flex justify-center items-center "></div>
            <div className="w-[50%] h-[80%] bg-green-900 flex justify-center items-center ">
              <ul className="w-[100%] h-[40%] flex justify-around">
                <li className="font-semibold text-orange-700 cursor-pointer hover:text-orange-700">
                  Home
                </li>
                <li className="font-semibold text-[#332859] cursor-pointer hover:text-orange-700">
                  About Us
                </li>
                <li className="font-semibold text-[#332859] cursor-pointer hover:text-orange-700">
                  Courses
                </li>
                <li className="font-semibold text-[#332859] cursor-pointer hover:text-orange-700">
                  Instructors
                </li>
                <li className="font-semibold text-[#332859] cursor-pointer hover:text-orange-700">
                  Blog
                </li>
                <li className="font-semibold text-[#332859] cursor-pointer hover:text-orange-700">
                  Contact Us
                </li>
                <li className="font-semibold text-[#332859] cursor-pointer hover:text-orange-700">
                  <CiSearch className="w-[70%] h-[70%] text-orange-700 text-xl font-bold" />
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[100%] h-[35%] bg-pink-600 ">
            <div></div>
          </div>
          <div className="w-[100%] h-[30%] bg-pink-900 "></div>
        </div> */}

        <div className="w-[80%] h-[100%]  flex flex col ">
          <div className="w-[15%] h-[30%] flex justify-center items-center ">
            <img
              className="w-[90%] h-[50%] "
              src="https://www.portotheme.com/wordpress/porto/education/wp-content/uploads/sites/84/2021/06/ed-logo.png"
              alt=""
            />
          </div>
          <div className="w-[25%] h-[90%] ">
            <img
              src="https://www.portotheme.com/wordpress/porto/education/wp-content/uploads/sites/84/2021/06/ed-slide-2-1.png"
              alt=""
            />
          </div>
          <div className="w-[60%] h-[90%] ">
            <div className="w-[100%] h-[30%]  flex justify-center items-center ">
              <ul className="w-[100%] h-[40%] flex justify-around">
                <li className="font-semibold text-orange-700 cursor-pointer hover:text-orange-700">
                  Home
                </li>
                <li className="font-semibold text-[#332859] cursor-pointer hover:text-orange-700">
                  About Us
                </li>
                <li className="font-semibold text-[#332859] cursor-pointer hover:text-orange-700">
                  Courses
                </li>
                <li className="font-semibold text-[#332859] cursor-pointer hover:text-orange-700">
                  Instructors
                </li>
                <li className="font-semibold text-[#332859] cursor-pointer hover:text-orange-700">
                  Blog
                </li>
                <li className="font-semibold text-[#332859] cursor-pointer hover:text-orange-700">
                  Contact Us
                </li>
                <li className="font-semibold text-[#332859] cursor-pointer hover:text-orange-700">
                  <CiSearch className="w-[70%] h-[70%] text-orange-700 text-xl font-bold" />
                </li>
              </ul>
            </div>
            <div className="w-[100%] h-[40%] flex  ">
              <div>
                <MdOutlineNumbers className="font-bold text-9xl text-orange-600 rotate-[295deg]" />
              </div>
              <div className="flex flex-col justify-around">
                <h1 className="font-extrabold text-8xl text-[#332859]">
                  yourfuture
                </h1>
                <p className="font-bold text-xl self-end text-gray-600">
                  Complete Solution For Your Education Needs!
                </p>
              </div>
            </div>
            <div className="w-[100%] h-[20%]  flex items-center justify-end">
              <button className="w-[160px] h-[60px] bg-purple-900 text-white font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/* <div className="w-[10%] h-[60%] bg-yellow-200 "></div> */}
      </div>
    </>
  );
};

export default HomePageSlider;
