import React from "react";

const HomePageStudentSay = () => {
  return (
    <div className="w-[1349px] h-[475px] bg-[#E1E2E5] flex justify-center items-center">
      <div className="w-[1116px] h-[346px]  flex flex-col gap-5 justify-center items-center">
        <div className="flex justify-center items-center">
          <h1 className="text-[#332859] font-semibold text-[26px]">
            What Students Say
          </h1>
        </div>
        <div className="w-[60px] h-[60px] flex justify-center items-center ">
          <img
            className="rounded-[50%]"
            src="https://www.portotheme.com/wordpress/porto/education/wp-content/uploads/sites/84/2021/07/ed-client-1.jpg"
            alt=""
          />
        </div>
        <div className="w-[1116px] h-[100px]  flex justify-center items-center">
          <p className=" text-[18px] text-center text-[#777777] italic px-[100px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            nulla dolore pariatur obcaecati rem quaerat quis dolorum nam nisi.
            Quam harum natus nobis laudantium dignissimos cupiditate saepe
            facere, a sequi! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Ipsa molestias cumque odio rerum explicabo, aspernatur totam
            rem. Dolor, aperiam laborum eligendi nam cupiditate aliquam? Ullam
            beatae impedit vitae iusto eius.
          </p>
        </div>
        <div className="w-[1116px] h-[50px]    flex justify-center items-center">
          <h3 className=" text-[20px] text-center font-bold   ">John Smith</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePageStudentSay;
