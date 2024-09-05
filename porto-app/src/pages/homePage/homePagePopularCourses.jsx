import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { GoCommentDiscussion } from "react-icons/go";

const HomePagePopularCourses = () => {
  return (
    <>
      <section className="w-[1349px] h-[634px] bg-gray-100  flex justify-center items-center">
        <div className="w-[1140px] h-[486px]  flex flex-col justify-center items-center">
          <div className="w-[1116px] h-[38px] flex  justify-center items-center">
            <h2 className=" font-bold text-3xl text-[#332859]">
              Popular Courses
            </h2>
          </div>
          <div className="w-[100%] h-[345px]  flex justify-center gap-6 items-center ">
            <div className="w-[340px] h-[325px]  ">
              <div className="w-[340px] h-[180px] ">
                <img
                  src="https://www.portotheme.com/wordpress/porto/education/wp-content/uploads/sites/84/2018/05/ed-course-1.jpg"
                  alt=""
                />
              </div>
              <div className="w-[340px] h-[135px] bg-white flex flex-col px-[20px] items-center">
                <div className="w-[300px] h-[50px]  flex">
                  <div className="w-[70%]">
                    <h2 className="font-semibold text-2xl text-[#332859]">
                      Advanced Maths
                    </h2>
                  </div>
                  <div className="w-[60px] h-[60px] mt-[-30px] ml-[60px]">
                    <img
                      className="rounded-[50%]"
                      src="https://www.portotheme.com/wordpress/porto/education/wp-content/uploads/sites/84/2021/07/ed-client-4.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-[300px] h-[50px]  flex justify-between items-center">
                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-[5px]">
                      <IoPersonOutline className="font-thin text-sm text-orange-600" />
                      <p>111</p>
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <GoCommentDiscussion className="font-thin text-sm text-orange-600" />
                      <p>0</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-orange-600">79$</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[340px] h-[325px]  ">
              <div className="w-[340px] h-[180px] ">
                <img
                  src="https://www.portotheme.com/wordpress/porto/education/wp-content/uploads/sites/84/2018/05/ed-course-2.jpg"
                  alt=""
                />
              </div>
              <div className="w-[340px] h-[135px] bg-white  flex flex-col px-[20px] items-center">
                <div className="w-[300px] h-[50px]  flex">
                  <div className="w-[70%]">
                    <h2 className="font-semibold text-2xl text-[#332859]">
                      Computer Sience
                    </h2>
                  </div>
                  <div className="w-[60px] h-[60px] mt-[-30px] ml-[60px]">
                    <img
                      className="rounded-[50%]"
                      src="https://www.portotheme.com/wordpress/porto/education/wp-content/uploads/sites/84/2021/07/ed-client-3.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-[300px] h-[50px]  flex justify-between items-center">
                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-[5px]">
                      <IoPersonOutline className="font-thin text-sm text-orange-600" />
                      <p>30</p>
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <GoCommentDiscussion className="font-thin text-sm text-orange-600" />
                      <p>0</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-orange-600">59$</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[340px] h-[325px] flex flex-col ">
              <div className="w-[340px] h-[180px] ">
                <img
                  src="https://www.portotheme.com/wordpress/porto/education/wp-content/uploads/sites/84/2018/05/ed-course-3.jpg"
                  alt=""
                />
              </div>
              <div className="w-[340px] h-[135px] bg-white flex flex-col px-[20px] items-center">
                <div className="w-[300px] h-[50px]  flex">
                  <div className="w-[70%]">
                    <h2 className="font-semibold text-2xl text-[#332859]">
                      Creative writing
                    </h2>
                  </div>
                  <div className="w-[60px] h-[60px] mt-[-30px] ml-[60px]">
                    <img
                      className="rounded-[50%]"
                      src="https://www.portotheme.com/wordpress/porto/education/wp-content/uploads/sites/84/2021/07/ed-client-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-[300px] h-[50px]   flex justify-between items-center">
                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-[5px]">
                      <IoPersonOutline className="font-thin text-sm text-orange-600" />
                      <p>123 </p>
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <GoCommentDiscussion className="font-thin text-sm text-orange-600" />
                      <p>0</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-orange-600">29$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[90px]  flex justify-center items-center ">
            <button className="w-[160px] h-[60px] bg-purple-900 text-white font-semibold">
              View all
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePagePopularCourses;
