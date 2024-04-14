import React from "react";
import MainsideTop from "./MainsideTop";
import { MainSideMiddle } from "./MainSideMiddle";
import { MainSideBottom } from "./MainSideBottom";

const MainSide = () => {
  return (
    <div className=" w-4/6 ">
      <MainsideTop />
      <MainSideMiddle />
      <MainSideBottom />
    </div>
  );
};

export default MainSide;
