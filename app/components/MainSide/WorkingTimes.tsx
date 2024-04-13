import { DaysChart } from "@/app/ui/DaysChart";
import React from "react";

const WorkingTimes = () => {
  return (
    <div className=" p-4 h-full flex flex-col">
      <div className="text-slate-500 text-xs px-6">For All time</div>
      <div className="text-2xl px-6">24h 56m</div>
      <div className="flex   justify-between  h-full ">
        <div className="h-full flex-col  w-1/6 justify-center">
          <div className="flex justify-center  items-center h-1/4">6h</div>
          <div className=" flex justify-center h-1/4">4h</div>
          <div className=" flex justify-center h-1/4">2h</div>
          <div className=" flex justify-center h-1/4">0h</div>
        </div>
        <div className="h-full  flex justify-between w-full items-end px-3">
          <DaysChart size="h-1/6" day="Mon" />
          <DaysChart size="h-2/6" day="Tue" />
          <DaysChart size="h-3/6" day="Wed" />
          <DaysChart size="h-1/6" day="Thu" />
          <DaysChart size="h-5/6" day="Fri" color="softlime" />
          <DaysChart size="h-2/6" day="Sat" />
          <DaysChart size="h-1/6" day="Sun" />
        </div>
      </div>
    </div>
  );
};

export default WorkingTimes;
