import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const EnterData = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Task Name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="time"
        placeholder="Time Spent"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button
        onClick={() => {
          addTask(task, time);
          setTask("");
          setTime("");
        }}
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default EnterData;
