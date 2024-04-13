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
      <div className="h-5 border-b-4 border-black text-2xl text-center">
        <span className="bg-white px-5">your text</span>
      </div>
      <RightSideBottom />
    </div>
  );
};

export default RightSide;
