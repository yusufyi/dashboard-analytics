import TaskLine from "@/app/ui/TaskLine";
import React from "react";

interface TaskLineProps {
  text?: string;
  task?: string;
  hours?: number;
}
const data = [
  { text: "Set up discord", task: "Done", hours: 2 },
  { text: "User Flow", task: "Hold", hours: 4 },
  { text: "Marketing consept", task: "Progress", hours: 6 },
  { text: "Library", task: "Done", hours: 2 },
  { text: "Payment Setup", task: "Hold", hours: 4 },
  { text: "Design", task: "Progress", hours: 6 },
];
export const MainSideMiddleBottom = () => {
  return (
    <>
      {data.map((item, index) => (
        <TaskLine key={index} {...item} />
      ))}
    </>
  );
};
