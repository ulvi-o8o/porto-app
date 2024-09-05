import React from "react";
import { PiMedalBold } from "react-icons/pi";
import { GiNotebook } from "react-icons/gi";
import { TfiPrinter } from "react-icons/tfi";

const HomePageLast = () => {
  return (
    <>
      <div className="w-[1349px] h-[667px]  flex justify-center items-center">
        <div className="w-[50%] h-[80%]    bg-cover object-left-bottom bg-[url('https://www.portotheme.com/wordpress/porto/education/wp-content/uploads/sites/84/2021/07/ed-background-2.jpg?id=466')]"></div>
        <div className="w-[40%] h-[80%]  flex flex-col ">
          <div className="w-[540px] h-[173px]  flex flex-row gap-4 ">
            <div className="w-[25%] h-[80%] flex justify-center">
              <PiMedalBold className="text-6xl text-orange-600" />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-[#332859] text-2xl font-bold">
                  National Awards
                </h2>
              </div>
              <div>
                <p className="text-[#777777]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse quis elit vitae enim vehicula fermentum
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[540px] h-[173px]  flex flex-row gap-4 ">
            <div className="w-[25%] h-[80%] flex justify-center">
              <GiNotebook className="text-6xl text-orange-600" />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-[#332859] text-2xl font-bold">
                  Many Courses
                </h2>
              </div>
              <div>
                <p className="text-[#777777]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse quis elit vitae enim vehicula fermentum
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[540px] h-[173px]  flex flex-row gap-4 ">
            <div className="w-[25%] h-[80%] flex justify-center">
              <TfiPrinter className="text-6xl text-orange-600" />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-[#332859] text-2xl font-bold">
                  The Best Instructors
                </h2>
              </div>
              <div>
                <p className="text-[#777777]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse quis elit vitae enim vehicula fermentum
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageLast;
