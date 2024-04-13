import { LargeAvatarButton } from "@/app/ui/LargeAvatarButton";
import React from "react";
interface RandomAvarProps {
  id: number;
  job: string;
  time: string;
  color: string;
  buttoncolor: string;
  buttontext: string;
}

const MainSideBottomRight = () => {
  const data: RandomAvarProps[] = [
    {
      id: 1,
      job: "Software Engineer",
      time: "1h",
      color: "bg-slate-100",
      buttoncolor: "bg-pyellow",
      buttontext: "Register",
    },
    {
      id: 2,
      job: "Software Developer",
      time: "2h",
      color: "bg-slate-100",
      buttoncolor: "bg-pyellow",
      buttontext: "Register",
    },
    {
      id: 3,
      job: "Data Scientist",
      time: "3h",
      color: "bg-slate-300",
      buttoncolor: "bg-green-200",
      buttontext: "Booked",
    },

    {
      id: 5,
      job: "Software Engineer",
      time: "5h",
      color: "bg-slate-100",
      buttoncolor: "bg-green-200",
      buttontext: "Booked",
    },
  ];

  return (
    <div className="flex  flex-col h-full justify-between">
      {data.map((item: RandomAvarProps) => (
        <LargeAvatarButton key={item.id} {...item} />
      ))}
    </div>
  );
};

export default MainSideBottomRight;
