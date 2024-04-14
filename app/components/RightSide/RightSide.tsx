"use client";
import React, { useEffect } from "react";
import RightSideTop from "./RightSideTop";
import RightSideBottom from "./RightSideBottom";
import RandomUser from "@/app/api/RandomUser";
import SmallButton from "@/app/ui/SmallButton";

const RightSide = () => {
  return (
    <div className="flex flex-col w-3/12 items-center border bg-slate-100">
      <RightSideTop />
      <SmallButton text="Please Leave Message" color="softlime" />
      <div>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t w-20 border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">Chat Now</span>
          <div className="flex-grow border-t w-20 border-gray-400"></div>
        </div>
      </div>
      <RightSideBottom />
    </div>
  );
};

export default RightSide;
