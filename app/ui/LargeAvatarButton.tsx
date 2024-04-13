import React from "react";
import { RandomAvar } from "./RandomAvar";
interface RandomAvarProps {
  id: number;
  job: string;
  time: string;
  color: string;
  buttoncolor: string;
  buttontext: string;
}

import { FC } from "react"; // Add missing import

export const LargeAvatarButton: FC<RandomAvarProps> = ({
  job,
  time,
  color,
  buttoncolor,
  buttontext,
}) => {
  // Fix syntax error and provide initializer for 'items'
  console.log(job);
  return (
    <div
      className={`${color} rounded-full  flex  items-center justify-between p-4`}
    >
      <RandomAvar />
      <div className="flex flex-col justify-start  w-1/2">
        <div className="text-sm">{job}</div>
        <span className="text-sm">{time}</span>
      </div>

      <button className={`${buttoncolor} rounded-full p-2 w-24 text-sm`}>
        {buttontext}
      </button>
    </div>
  );
};
