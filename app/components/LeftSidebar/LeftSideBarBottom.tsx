import { RandomAvar } from "@/app/ui/RandomAvar";
import React from "react";

export const LeftSideBarBottom = () => {
  return (
    <div className=" h-2/6 flex flex-col justify-end space-y-2   items-center pb-4">
      <RandomAvar />
      <RandomAvar />

      <RandomAvar />

      <RandomAvar />
    </div>
  );
};
