import { handleClientScriptLoad } from "next/script";
import React, { use, useEffect, useState } from "react";
import { VscSend } from "react-icons/vsc";

interface ChatProps {
  message: string;
  time: string;
  avatar: string;
}

const RightSideBottom = () => {
  const data: ChatProps[] = [
    {
      message: "Hello",
      time: "1h",
      avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      message: "Hi",
      time: "2h",
      avatar: "https://randomuser.me/api/portraits/men/16.jpg",
    },
  ];

  //set array of chat
  const [chat, setChat] = useState<ChatProps[] | null>(null);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    setChat(data);
  }, []);

  const handleChat = () => {
    const newChat = {
      message: text,
      time: "now",
      avatar: "https://randomuser.me/api/portraits/men/16.jpg",
    };
    setChat([...chat, newChat]);
    setText("");
  };

  return (
    <div className=" h-full  w-80   rounded-2xl p-2 m-4 flex flex-col  space-y-4 items-center  justify-between overflow-hidden ">
      <div className="flex flex-col  items-center w-full space-y-4 pt-10  max-h-96 justify-end overflow-scroll">
        {chat?.map((item, index) => (
          <div className="flex  w-full  ">
            <img
              src={item.avatar}
              alt="avatar"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="flex flex-col bg-slate-200 rounded-3xl    w-full text-sm px-6">
              <span className="text-md"> {item.message} </span>
              <span className="text-md"> {item.time} </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-end  border-2 border-gray-200 bg-slate-50  space-x-2 ">
        <input
          type="text"
          className="w-3/4 h-10  rounded-lg bg-transparent p-2 justify-center outline-none text-slate-600"
          placeholder="Chat with me..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-center">
          <VscSend
            className="w-8 h-8 flex pt-2 text-slate-400 justify-center rounded-full "
            onClick={handleChat}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSideBottom;
