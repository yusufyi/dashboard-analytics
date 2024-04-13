import React from "react";
interface MainSideBottomLeftProps {
  title: string;
  value: number;
  percentage: number;
  height: number;
  color: string;
}

export const OverviewChart: React.FC<MainSideBottomLeftProps> = ({
  title,
  value,
  percentage,
  height,
  color,
}) => {
  return (
    <div
      className={`min-h-[${height}px] w-1/4 mx-2  border rounded-2xl  text-xs bg-${color} flex flex-col justify-between p-4`}
    >
      <div>
        <div>{title}</div>
        <div>{value}</div>
      </div>
      <div>
        <div>{percentage}%</div>
      </div>
    </div>
  );
};
