"use client";
import React from "react";
interface RandomAvarProps {
  first: string;
  last: string;
  email: string;
  avatar: string;
}
export const RandomAvar = () => {
  const [randomAvar, setRandomAvar] = React.useState<RandomAvarProps | null>(
    null
  );
  React.useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setRandomAvar({
          first: data.results[0].name.first,
          last: data.results[0].name.last,
          email: data.results[0].email,
          avatar: data.results[0].picture.large,
        });
      });
  }, []);
  return (
    <div>
      {randomAvar && (
        <img
          className="inline-block  w-avatar h-avatar rounded-full  ring-white "
          src={randomAvar.avatar}
          alt="avatar"
        />
      )}
    </div>
  );
};
