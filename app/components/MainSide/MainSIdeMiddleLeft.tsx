import { XsButton } from "@/app/ui/XsButton";
import React from "react";
import MainSide from "./MainSide";
import { MainSideBottom } from "./MainSideBottom";
import { MainSideMiddleBottom } from "./MainSideMiddleBottom";
import BigSqueare from "@/app/layouts/BigSqueare";

const MainSIdeMiddleLeft = () => {
  return (
    <div className=" flex-1 ">
      <div className="flex flex-1  h-16 m-4 p-2  justify-between ">
        <div className="text-2xl  w-1/2 ">Active Tasks</div>
        <div className="flex flex-wrap ">
          <XsButton text="Done" color="bg-pgreen" />
          <XsButton text="Progress" color="bg-pyellow" />
          <XsButton text="Hold" color="bg-pgray" />
        </div>
      </div>
      <BigSqueare>
        <MainSideMiddleBottom />
      </BigSqueare>
    </div>
  );
};

export default MainSIdeMiddleLeft;
