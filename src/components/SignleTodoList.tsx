import React from "react";
import { Todo } from "../modal";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete, MdDone } from "react-icons/md";

interface Props {
  task: Todo;
  handleDelete: (id: number) => void;
  handleDone: (id: number) => void;
}

const SignleTodoList: React.FC<Props> = ({ task, handleDelete, handleDone }) => {
  return (
    <div key={task.id} className="todo-card">
      <h3 style={task?.isDone ? { textDecoration: "line-through" } : {}}>{task.todo}</h3>
      <div className="todo-card-btn">
        <FiEdit2 size={25} />
        <MdDelete size={25} onClick={() => handleDelete(task.id)} />
        <MdDone size={25} onClick={() => handleDone(task.id)} />
      </div>
    </div>
  );
};

export default SignleTodoList;
