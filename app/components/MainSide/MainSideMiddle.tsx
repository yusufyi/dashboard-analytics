import React from "react";
import MainSIdeMiddleLeft from "./MainSIdeMiddleLeft";
import MainSideMiddleRight from "./MainSideMiddleRight";
import { MainSideMiddleBottom } from "./MainSideMiddleBottom";
import BigSqueare from "@/app/layouts/BigSqueare";

export const MainSideMiddle = () => {
  return (
    <div className="flex    w-full ">
      <MainSIdeMiddleLeft />
      <MainSideMiddleRight />
    </div>
  );
};
