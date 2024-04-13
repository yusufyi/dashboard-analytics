import RandomUser from "@/app/api/RandomUser";
import CircleIcon from "@/app/ui/CircleIcon";
import React, { use, useEffect, useState } from "react";
import { BsBarChart, BsChatDots } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
interface RandomUserProps {
  first: string;
  last: string;
  email: string;
  avatar: string;
}

const RightSideTop = () => {
  const [randomUser, setRandomUser] = useState<RandomUserProps | null>(null);
  useEffect(() => {
    RandomUser().then((data) => {
      console.log(data);
      setRandomUser(data);
    });
  }, []);
  if (!randomUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" bg-pblue h-80  w-80  border rounded-2xl p-2 m-4 flex flex-col  space-y-4 items-center justify-center">
      <div className="flex flex-col justify-between items-center">
        <img
          src={randomUser?.avatar}
          alt="avatar"
          className="w-16 h-16 rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-md"> {randomUser?.first} </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-md"> {randomUser?.email} </span>
      </div>
      <div className="flex justify-between space-x-2 items-center">
        <CircleIcon size="12px" icon={BsBarChart} color="" />
        <CircleIcon size="12px" icon={BsChatDots} color="" />
        <CircleIcon size="12px" icon={CiSettings} color="" />
      </div>
    </div>
  );
};

export default RightSideTop;
