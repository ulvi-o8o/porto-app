import React from "react";
import HomePageSlider from "./homePageSlider";
import HomePageSteps from "./homePageSteps";
import HomePagePopularCourses from "./homePagePopularCourses";
import HomePageRegister from "./homePageRegister";

const HomePageMain = () => {
  return (
    <>
      <div className="w-[1343px] h-[3700px] bg-red-100">
        <HomePageSlider />
        <HomePageSteps />
        <HomePagePopularCourses />
        <HomePageRegister />
      </div>
    </>
  );
};

export default HomePageMain;
