import React from "react";
import MainsideTopLeft from "./MainsideTopLeft";
import MainSideTopRight from "./MainSideTopRight";

const MainsideTop = () => {
  return (
    <div className="border h-1/6 flex justify-between">
      <MainsideTopLeft />
      <MainSideTopRight />
    </div>
  );
};

export default MainsideTop;
