import React from "react";

interface RandomUserProps {
  first: string;
  last: string;
  email: string;
  avatar: string;
}

async function RandomUser(): Promise<RandomUserProps> {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();

  const randomUser: RandomUserProps = {
    first: data.results[0].name.first,
    last: data.results[0].name.last,
    email: data.results[0].email,
    avatar: data.results[0].picture.large,
  };

  return randomUser;
}

export default RandomUser;
