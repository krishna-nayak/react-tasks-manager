import React from "react";
import { Todo } from "../modal";
import SignleTodoList from "./SignleTodoList";

interface Props {
  tasks: Todo[];
  setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({ tasks, setTasks }) => {
  const handleDelete = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleDone = (id: number) => {
    const unDoneTask = tasks.filter((task) => task.id !== id);
    const doneTasks = tasks.filter((task) => task.id === id);
    setTasks([...unDoneTask, { id: id, todo: doneTasks[0].todo, isDone: true }]);
  };

  return (
    <div>
      {tasks?.map((task) => (
        <SignleTodoList task={task} handleDelete={handleDelete} handleDone={handleDone} />
      ))}
    </div>
  );
};

export default TodoList;
