import React, { useEffect, useState } from "react";
import { Todo } from "../modal";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete, MdDone } from "react-icons/md";

interface Props {
  task: Todo;
  handleDelete: (id: number) => void;
  handleDone: (id: number) => void;
  handleEditText: (id: number, text: string) => void;
}

const SignleTodoList: React.FC<Props> = ({ task, handleDelete, handleDone, handleEditText }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (edit && inputRef.current != null) inputRef.current?.focus();
  }, [edit]);

  const handleChange = (e: React.FormEvent<HTMLHeadingElement>) => {
    handleEditText(task.id, e.currentTarget.innerText);
    setEdit(false);
  };

  return (
    <div className="todo-card">
      <h3 style={task?.isDone ? { textDecoration: "line-through" } : {}} ref={inputRef} contentEditable={edit} suppressContentEditableWarning={true} onBlur={handleChange}>
        {task.todo}
      </h3>
      <div className="todo-card-btn">
        <FiEdit2 size={25} onClick={() => setEdit((prev) => !prev)} />
        <MdDelete size={25} onClick={() => handleDelete(task.id)} />
        <MdDone size={25} onClick={() => handleDone(task.id)} />
      </div>
    </div>
  );
};

export default SignleTodoList;
