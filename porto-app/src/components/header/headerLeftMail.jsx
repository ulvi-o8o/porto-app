import React from "react";
import { GoMail } from "react-icons/go";

const HeaderLeftMail = () => {
  return (
    <>
      <div className="w-[40%] h-[100%]  flex justify-center items-center">
        <div className="w-[20%] h-[100%] flex justify-center items-center ">
          <GoMail className="w-[40%] h-[100%] text-orange-600 font-thin" />
        </div>
        <div className="w-[80%] h-[100%] flex justify-center items-center">
          <h3 className=" font-semibold text-[#332859] hover:text-orange-700 ">
            porto@portotheme.com
          </h3>
        </div>
      </div>
    </>
  );
};

export default HeaderLeftMail;
