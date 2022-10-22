import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./modal";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Todo[]>([]);
  // console.log(task);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      const newTask = { id: Date.now(), todo: task, isDone: false };
      setTasks([...tasks, newTask]);
      setTask("");
    }
  };

  return (
    <div className="App">
      <h1>Task</h1>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
