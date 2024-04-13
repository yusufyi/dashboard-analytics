"use client";
import BigSqueare from "@/app/layouts/BigSqueare";
import React from "react";
import MainSideBottomLeft from "./MainSideBottomLeft";
import { BsBarChart, BsBell } from "react-icons/bs";
import CircleIcon from "@/app/ui/CircleIcon";
import MainSideBottomRight from "./MainSideBottomRight";

export const MainSideBottom = () => {
  return (
    <div className="flex flex-col border ">
      <div className="flex ">
        <div className="flex justify-between flex-1 px-6 items-center">
          <div className="flex flex-col">
            <span className="text-xl">OVERVIEW</span>
            <span className="text-md">Your Statistics</span>
          </div>

          <div className="flex">
            <CircleIcon size="12px" icon={BsBell} color="" />
            <CircleIcon size="12px" icon={BsBarChart} color="" />
          </div>
        </div>
        <div className="flex justify-between flex-1 px-6 items-center">
          <div className="flex flex-col">
            <span className="text-xl">WORKSHOP</span>
            <span className="text-md">Your Statistics</span>
          </div>

          <div className="flex">
            <CircleIcon size="12px" icon={BsBell} color="" />
            <CircleIcon size="12px" icon={BsBarChart} color="" />
          </div>
        </div>
      </div>

      <div className="flex ">
        <div className=" h-80 flex-1 rounded-2xl p-2 m-4">
          {" "}
          <MainSideBottomLeft />{" "}
        </div>
        <div className=" h-80 flex-1 rounded-2xl p-2 m-4">
          <MainSideBottomRight />
        </div>
      </div>
    </div>
  );
};
