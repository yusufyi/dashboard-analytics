"use client";
import CircleIcon from "@/app/ui/CircleIcon";
import React from "react";
import { BiHome } from "react-icons/bi";
import { BsClipboard } from "react-icons/bs";

const LeftSideBarMidFirst = () => {
  return (
    <div className=" h-1/6">
      <div className="flex flex-col   justify-start   items-center h-full">
        <div className="text-4xl ">
          <CircleIcon size="12px" icon={BiHome} color="" />
        </div>

        <div className="text-4xl ">
          <CircleIcon size="12px" icon={BsClipboard} color="" />
        </div>
      </div>
    </div>
  );
};

export default LeftSideBarMidFirst;
