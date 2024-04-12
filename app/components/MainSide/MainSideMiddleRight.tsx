"use client";
import BigSqueare from "@/app/layouts/BigSqueare";
import CircleIcon from "@/app/ui/CircleIcon";
import React from "react";

import { LuCalendarDays } from "react-icons/lu";

const MainSideMiddleRight = () => {
  return (
    <div className="flex-1 ">
      <div className="flex items-center h-16 m-4 p-2">
        <div className="flex flex-1  text-2xl  w-1/2     justify-between ">
          Your Progress
        </div>
        <div className="pr-2 text-xs">22.01.2022-23.02.2022</div>
        <div>
          <CircleIcon size="12px" icon={LuCalendarDays} color="" />
        </div>
      </div>
      <BigSqueare>mid</BigSqueare>
    </div>
  );
};

export default MainSideMiddleRight;
