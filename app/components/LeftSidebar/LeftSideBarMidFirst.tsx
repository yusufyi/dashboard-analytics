"use client";
import CircleIcon from "@/app/ui/CircleIcon";
import React from "react";
import { BiHome } from "react-icons/bi";

const LeftSideBarMidFirst = () => {
  const [active, setActive] = React.useState(false);
  const handClick = () => {
    setActive(!active);
  };
  return (
    <div className="border h-1/6">
      <div className="flex justify-center items-center">
        <div className="text-4xl ">
          <CircleIcon
            size="24px"
            icon={BiHome}
            color=""
            onClick={handClick}
            active={active}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSideBarMidFirst;
