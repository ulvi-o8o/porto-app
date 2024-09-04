import React from "react";
import HeaderRightEmpty from "./headerRightEmpty";
import HeaderRightLogin from "./headerRightLogin";

const HeaderRight = () => {
  return (
    <>
      <div className="w-[50%] h-[100%]  flex ">
        <HeaderRightEmpty />
        <HeaderRightLogin />
      </div>
    </>
  );
};

export default HeaderRight;
