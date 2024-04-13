import React from "react";
import MainsideTopLeft from "./MainsideTopLeft";
import MainSideTopRight from "./MainSideTopRight";

const MainsideTop = () => {
  return (
    <div className="h-1/12 flex mt-4 justify-between overflow-hidden">
      <MainsideTopLeft />
      <MainSideTopRight />
    </div>
  );
};

export default MainsideTop;
