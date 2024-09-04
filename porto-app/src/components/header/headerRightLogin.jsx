import React from "react";
import { MdOutlinePerson4 } from "react-icons/md";

const HeaderRightLogin = () => {
  return (
    <div className="w-[30%] h-[100%]  flex justify-center items-center ">
      <div className="w-[20%] h-[100%] flex justify-center items-center ">
        <MdOutlinePerson4 className="w-[70%] h-[100%] text-orange-700 text-2xl" />
      </div>
      <div className="cursor-pointer">
        <h3 className="text-bold font-semibold text-[#332859]">Log In</h3>
      </div>
    </div>
  );
};

export default HeaderRightLogin;
