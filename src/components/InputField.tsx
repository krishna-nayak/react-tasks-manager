import React from "react";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export default function InputField({ task, setTask, handleAdd }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value);
  return (
    <form className="input" onSubmit={handleAdd}>
      <input type="text" value={task} onChange={handleChange} placeholder="Enter a task" className="input__box" />
      <button type="submit" className="input__submit">
        Go
      </button>
    </form>
  );
}
