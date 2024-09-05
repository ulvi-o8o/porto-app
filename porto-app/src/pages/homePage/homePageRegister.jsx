import React from "react";
import CountdownTimer from "./homePageCountDown/homePageCountDown";

const HomePageRegister = () => {
  return (
    <>
      <section className="w-[1349px] h-[550px] bg-gray-200  bg-no-repeat bg-contain flex justify-center items-center bg-[url('https://www.portotheme.com/wordpress/porto/education/wp-content/uploads/sites/84/2021/07/ed-background-1.jpg?id=412')] ">
        <div className="w-[1140px] h-[500px] ">
          <div className="w-[546px] h-[486px] bg-white ">
            <form className="flex flex-col p-[48px] gap-3" action="">
              <div className="w-[456px] h-[33px] flex justify-center items-center ">
                <h2 className="text-[#332859] font-bold text-3xl">
                  Register Now
                </h2>
              </div>
              <div className="w-[456px] h-[33px] flex justify-center items-center ">
                <p className="text-[#777777] font-normal text-xl">
                  Get <strong>50% OFF </strong>
                  For All Courses
                </p>
              </div>
              <div className="w-[456px] h-[85px]  ">
                <CountdownTimer />
              </div>
              <div className="w-[464px] h-[160px] flex flex-col border-none">
                <div className="w-[464px] h-[72px] flex gap-3 border-none">
                  <input
                    type="text"
                    placeholder="FIRST NAME*"
                    className="w-[224px] h-[56px] bg-gray-200 border-none p-[20px]"
                  />

                  <input
                    type="text"
                    placeholder="LAST NAME*"
                    className="w-[224px] h-[56px] bg-gray-200 border-none p-[20px]"
                  />
                </div>
                <div className="w-[464px] h-[72px] flex gap-3 border-none">
                  <input
                    type="text"
                    placeholder="PHONE*"
                    className="w-[224px] h-[56px] bg-gray-200 border-none p-[20px]"
                  />

                  <input
                    type="text"
                    placeholder="EMAIL*"
                    className="w-[224px] h-[56px] bg-gray-200 border-none p-[20px]"
                  />
                </div>
              </div>
              <div>
                <button className="w-[100%] h-[60px] bg-purple-900 text-white font-semibold">
                  GET IT NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageRegister;
