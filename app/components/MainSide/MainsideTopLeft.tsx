"use client";
import CircleIcon from "@/app/ui/CircleIcon";
import { RandomAvar } from "@/app/ui/RandomAvar";
import SmallButton from "@/app/ui/SmallButton";
import React, { useState, useEffect } from "react";
import { LuHeadphones } from "react-icons/lu";
import { RandomUserProps } from "@/app/api/RandomUser";
import RandomUser from "@/app/api/RandomUser";
import Loading from "@/app/ui/Loading";

const MainsideTopLeft = () => {
  const [userData, setUserData] = useState<RandomUserProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = await RandomUser();
      setUserData(user);
    };

    fetchData();
  }, []);

  if (!userData) return <Loading />;

  console.log(userData);
  return (
    <div className="flex    w-1/2 pl-5 items-center h-full">
      {userData ? (
        <>
          <div>
            <CircleIcon size="12px" icon={LuHeadphones} color="" />
          </div>
          <SmallButton
            avatar={<RandomAvar />}
            text={`${userData?.first} ${userData?.last}`}
          />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MainsideTopLeft;
