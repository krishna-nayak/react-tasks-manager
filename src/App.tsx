import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./modal";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      const newTask = { id: Date.now(), todo: task, isDone: false };
      setTasks([newTask, ...tasks]);
      setTask("");
    }
  };

  return (
    <div className="App">
      <h1>Tasks Manager</h1>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
