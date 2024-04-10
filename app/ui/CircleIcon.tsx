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
}) => {
  const [active, setActive] = React.useState(false);
  const handClick = () => {
    setActive(!active);
  };
  console.log("active", active);

  return (
    <div
      style={{ fontSize: size }}
      className={`rounded-full p-4  mb-4 ${
        active ? "bg-slate-900 text-slate-200" : "bg-slate-200 text-slate-900"
      }`}
    >
      <IconComponent
        onClick={handClick}
        className={`cursor-pointer ${color}`}
      />
    </div>
  );
};

export default CircleIcon;
