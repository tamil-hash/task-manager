import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Tasks = ({ tasks, delTask }) => {
  return (
    <table>
      <thead>
        <tr className="table-head">
          <td>Tasks</td>
          <td>Time taken(Hours:minutes)</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {tasks.map(({ task, time }, index) => {
          return (
            <tr key={index}>
              <td>{task}</td>
              <td>{time}</td>
              <td className="del-button" onClick={() => delTask(index)}>
                {<AiOutlineDelete />}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Tasks;
