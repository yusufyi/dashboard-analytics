"use client";
import React, { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import CircleIcon from "@/app/ui/CircleIcon";

const LeftSideBarTop = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="h-1/6  content-center ">
      <div className=" ">
        <div className="flex justify-center items-center">
          <div className="rounded-full p-4 bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100  h-circle w-circle ">
            {mounted && theme === "dark" ? (
              <BsSunFill onClick={() => setTheme("light")} />
            ) : (
              <BsSun onClick={() => setTheme("dark")} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBarTop;
