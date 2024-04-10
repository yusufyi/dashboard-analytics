import SmallButton from "@/app/ui/SmallButton";
import React from "react";
import { BiSearch } from "react-icons/bi";

const MainSideTopRight = () => {
  return (
    <div className="flex items-center px-4">
      <SmallButton text="Dashboard" color="softlime" />
      <SmallButton
        avatar={
          <div className="bg-slate-300 w-circle h-circle  flex justify-center items-center rounded-full">
            <BiSearch />
          </div>
        }
        text="Search Something"
      />
    </div>
  );
};

export default MainSideTopRight;
