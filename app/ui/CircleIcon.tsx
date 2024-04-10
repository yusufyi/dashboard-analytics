"use client";
import React from "react";
import { IconType } from "react-icons";

interface CircleIconProps {
  size?: string;
  icon: IconType;
  color?: string;
  onClick?: () => void;
  active?: boolean;
}

const CircleIcon: React.FC<CircleIconProps> = ({
  size,
  icon: IconComponent,
  color,
  onClick,
  active,
}) => {
  console.log("active", active);
  return (
    <div
      style={{ fontSize: size }}
      className={`rounded-full p-4 ${
        active ? "bg-slate-600 text-slate-200" : "bg-slate-200 text-slate-600"
      }`}
    >
      <IconComponent onClick={onClick} />
    </div>
  );
};

export default CircleIcon;
