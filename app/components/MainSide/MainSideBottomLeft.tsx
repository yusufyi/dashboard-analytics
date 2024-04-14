import { OverviewChart } from "@/app/ui/OverviewChart";
import React from "react";
interface MainSideBottomLeftProps {
  title: string;
  value: number;
  percentage: number;
  height: number;
  color: string;
}

const data = [
  {
    title: "Visits",
    value: 2.4,
    percentage: 0.34,
    height: 220,
    color: "pyellow",
  },
  {
    title: "Unique Visitors",
    value: 1.4,
    percentage: 0.34,
    height: 150,
    color: "pgray ",
  },
  {
    title: "Page Views",
    value: 4.4,
    percentage: 0.54,
    height: 150,
    color: "pyellow",
  },
  {
    title: "Bounce Rate",
    value: 0.4,
    percentage: 0.94,
    height: 220,
    color: "pgray",
  },
];

const MainSideBottomLeft = () => {
  return (
    <div className=" h-full flex items-end p-2">
      {data.map((item) => (
        <OverviewChart
          key={item.title}
          title={item.title}
          value={item.value}
          percentage={item.percentage}
          height={item.height}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default MainSideBottomLeft;
