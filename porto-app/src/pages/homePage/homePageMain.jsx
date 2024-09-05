import React from "react";
import HomePageSlider from "./homePageSlider";
import HomePageSteps from "./homePageSteps";
import HomePagePopularCourses from "./homePagePopularCourses";
import HomePageRegister from "./homePageRegister";
import HomePageStudentSay from "./HomePageStudentSay";
import HomePageLatestNews from "./HomePageLatestNews";
import HomePageLast from "./HomePageLast";

const HomePageMain = () => {
  return (
    <>
      <div className="w-[1343px] h-[3500px] ">
        <HomePageSlider />
        <HomePageSteps />
        <HomePagePopularCourses />
        <HomePageRegister />
        <HomePageStudentSay />
        <HomePageLatestNews />
        <HomePageLast />
      </div>
    </>
  );
};

export default HomePageMain;
