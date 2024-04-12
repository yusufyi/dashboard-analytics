import React, { FC } from "react";

interface XsButtonProps {
  avatar?: React.ReactNode;
  text?: string;
  color?: string;
}

export const XsButton: FC<XsButtonProps> = ({ text, color }) => {
  return (
    <div className=" bg-slate-100 rounded-full p-2 flex  max-h-10  flex-wrap  items-center m-1  overflow-auto">
      <div className={`rounded-full ${color}  p-1 w-1 h-1 mr-2`}></div>
      {text}
    </div>
  );
};
