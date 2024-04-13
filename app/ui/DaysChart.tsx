import React, { FC } from "react";

interface Props {
  size: string;
  color?: string;
  day?: string;
}

export const DaysChart: FC<Props> = ({ size, color, day }) => {
  if (color === "softlime") {
    return (
      <div
        className={`bg-softlime border ${size} rounded-t-full w-12  flex justify-center items-end`}
      >
        {day}
      </div>
    );
  }
  return (
    <div
      className={`bg-pgray border ${size} rounded-t-full w-12  flex justify-center items-end`}
    >
      {day}
    </div>
  );
};
