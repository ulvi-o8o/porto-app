import React from "react";
import { TbNumber1 } from "react-icons/tb";
import { TbNumber2 } from "react-icons/tb";
import { GiNotebook } from "react-icons/gi";
import { TbNumber3 } from "react-icons/tb";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { MdOutlineFindInPage } from "react-icons/md";

const HomePageSteps = () => {
  return (
    <>
      <section className="w-[100%] h-[132px] bg-white flex justify-center items-center  ">
        <div className="w-[1140px] h-[84px]  flex justify-center items-center">
          <div className="w-[30%] h-[80px]  flex justify-center items-center">
            <div className="w-[15%] h-[90%]  flex justify-center items-center rotate-[340deg]">
              <TbNumber1 className="font-bold text-5xl  text-orange-600 " />
            </div>
            <div className="w-[25%] h-[90%] bg-orange-300 rounded-[50%] flex justify-center items-center">
              <MdOutlineFindInPage className="font-bold text-5xl  text-orange-600 " />
            </div>
            <div className="w-[60%] h-[90%] ">
              <div>
                <p className="text-gray-700">STEP 1</p>
              </div>
              <div>
                <h4 className="font-semibold  text-[20px] cursor-pointer">
                  Find Your Course
                </h4>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-[80px]  flex justify-center items-center">
            <div className="w-[15%] h-[90%]  flex justify-center items-center rotate-[340deg]">
              <TbNumber2 className="font-bold text-5xl  text-orange-600 " />
            </div>
            <div className="w-[25%] h-[90%] bg-orange-300 rounded-[50%] flex justify-center items-center">
              <GiNotebook className="font-bold text-5xl  text-orange-600 " />
            </div>
            <div className="w-[60%] h-[90%] ">
              <div>
                <p className="text-gray-700">STEP 1</p>
              </div>
              <div>
                <h4 className="font-semibold  text-[20px] cursor-pointer">
                  Make a Register
                </h4>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-[80px]  flex justify-center items-center">
            <div className="w-[15%] h-[90%]  flex justify-center items-center rotate-[340deg]">
              <TbNumber3 className="font-bold text-5xl  text-orange-600 " />
            </div>
            <div className="w-[25%] h-[90%] bg-orange-300 rounded-[50%] flex justify-center items-center">
              <LiaLaptopCodeSolid className="font-bold text-5xl  text-orange-600 " />
            </div>
            <div className="w-[60%] h-[90%] ">
              <div>
                <p className="text-gray-700">STEP 3</p>
              </div>
              <div>
                <h4 className="font-semibold  text-[20px] cursor-pointer">
                  Enjoy and Learn
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageSteps;
