import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task, time) => {
    setTasks((prevItems) => {
      return [...prevItems, { task: task, time: time }];
    });
  };

  const delTask = (id) => {
    setTasks((prevItems) => {
      return prevItems.filter((task, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <header>
        <h1>Time spent on tasks</h1>
      </header>
      <Form addTask={addTask} />
      <Tasks tasks={tasks} delTask={delTask} />
    </>
  );
}

export default App;
