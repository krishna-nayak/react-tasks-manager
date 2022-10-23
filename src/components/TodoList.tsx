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

  const handleEditText = (id: number, text: string) => {
    const editTask = tasks.map((task) => {
      if (task.id === id) return { id: id, todo: text, isDone: false };
      return task;
    });
    setTasks(editTask);
  };

  return (
    <div>
      {tasks?.map((task) => (
        <SignleTodoList handleEditText={handleEditText} key={task.id} task={task} handleDelete={handleDelete} handleDone={handleDone} />
      ))}
    </div>
  );
};

export default TodoList;
