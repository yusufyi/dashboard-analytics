import React from "react";
import MainsideTop from "./MainsideTop";
import { MainSideMiddle } from "./MainSideMiddle";
import { MainSideBottom } from "./MainSideBottom";

const MainSide = () => {
  return (
    <div className="border w-4/6 bg-midgrey">
      <MainsideTop />
      <MainSideMiddle />
      <MainSideBottom />
    </div>
  );
};

export default MainSide;
