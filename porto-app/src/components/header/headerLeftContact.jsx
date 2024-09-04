import React from "react";
import { LuPhone } from "react-icons/lu";

const HeaderLeftContact = () => {
  return (
    <>
      <div className="w-[33%] h-[100%]  flex justify-center items-center">
        <LuPhone className="w-[30%] h-[50%] text-orange-700 font-thin" />
        <h3 className="font-semibold text-[#332859] hover:text-orange-700">
          (800) 123-4567
        </h3>
      </div>
    </>
  );
};

export default HeaderLeftContact;
