import React from "react";
import HeaderLeft from "./headerLeft";
import HeaderRight from "./headerRight";

const Header = () => {
  return (
    <>
      <section className="lg:min-w-[640px] lg:max-w-[1440px] h-[47px] flex justify-center items-center  ">
        <div className="w-[80%] h-[80%] flex  ">
          <HeaderLeft />
          <HeaderRight />
        </div>
      </section>
    </>
  );
};

export default Header;
