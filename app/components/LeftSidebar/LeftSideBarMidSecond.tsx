"use client";
import CircleIcon from "@/app/ui/CircleIcon";
import React from "react";
import { BsBell } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";

import { BsChatDots } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

export const LeftSideBarMidSecond = () => {
  return (
    <div className=" h-2/6">
      <div className="flex flex-col   items-center h-full">
        <CircleIcon size="12px" icon={BsBell} color="" />
        <CircleIcon size="12px" icon={BsBarChart} color="" />
        <CircleIcon size="12px" icon={BsChatDots} color="" />
        <CircleIcon size="12px" icon={CiSettings} color="" />
      </div>
    </div>
  );
};
