import React from "react";
import HeaderLeftTitle from "./headerLeftTitle";
import HeaderLeftContact from "./headerLeftContact";
import HeaderLeftMail from "./headerLeftMail";

const HeaderLeft = () => {
  return (
    <>
      <div className="w-[50%] h-[100%]  flex ">
        <HeaderLeftTitle />
        <HeaderLeftContact />
        <HeaderLeftMail />
      </div>
    </>
  );
};

export default HeaderLeft;
