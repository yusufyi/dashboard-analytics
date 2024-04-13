"use client";
import React from "react";
interface SmallButtonProps {
  avatar?: React.ReactNode;
  text?: string;
  color?: string;
}

const SmallButton = ({ avatar, text, color }: SmallButtonProps) => {
  console.log(color);
  return (
    <div
      className={`flex border ${
        color ? `bg-${color}` : "bg-slate-100"
      } items-center p-1  h-14 ml-2 rounded-full   `}
    >
      {avatar}
      <span className="p-10">{text}</span>
    </div>
  );
};

export default SmallButton;
