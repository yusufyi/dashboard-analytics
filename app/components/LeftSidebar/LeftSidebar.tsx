import React from "react";
import LeftSideBarTop from "./LeftSideBarTop";
import LeftSideBarMidFirst from "./LeftSideBarMidFirst";
import { LeftSideBarMidSecond } from "./LeftSideBarMidSecond";
import { LeftSideBarBottom } from "./LeftSideBarBottom";

const LeftSidebar = () => {
  return (
    <div className=" h-screen w-1/6   bg-olive  dark:bg-grayviolet  overflow-hidden">
      <LeftSideBarTop />
      <LeftSideBarMidFirst />
      <LeftSideBarMidSecond />
      <LeftSideBarBottom />
    </div>
  );
};

export default LeftSidebar;
