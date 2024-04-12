import React from "react";
import { BiCheck } from "react-icons/bi";

interface TaskLineProps {
  text: string;
  task: "Done" | "Hold" | "Progress";
  hours: number;
}

const TaskLine: React.FC<TaskLineProps> = (props) => {
  return (
    <div
      className={` flex  rounded-full justify-between items-center  m-2 h-10 ${
        props.task === "Done"
          ? "bg-olive"
          : props.task === "Hold"
          ? "bg-grayviolet"
          : "bg-softlime"
      }`}
    >
      <div
        className={` mr-2
      h-10  w-10  flex justify-center items-center ${
        props.task === "Hold" ? "bg-pgray" : "bg-pgreen"
      } rounded-full
      `}
      >
        <BiCheck />
      </div>
      <div className="w-2/6">{props.text}</div>
      <div className="w-1/6 flex  justify-center">{props.task}</div>
      <div className="w-1/6 flex justify-center">{props.hours}h</div>
      <div className="w-1/6  font-bold text-center">...</div>
    </div>
  );
};

export default TaskLine;
