import { useState, useEffect, useRef } from "react";

function TodoForm(props: { edit?: { id: null | string; value: string } ,onSubmit: (input:string)=>void}) {
  const [input, setInput] = useState<string>(
    props.edit ? props.edit.value : ""
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    props.onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button
            type="submit"
            onClick={() => handleSubmit}
            className="todo-button edit"
          >
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button type="submit" onClick={()=>handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
