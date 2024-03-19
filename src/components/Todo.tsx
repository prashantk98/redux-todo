import { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { TodoListType } from "../reducers/todoSlice";

const Todo = ({
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
}: {
  todos: TodoListType[];
  completeTodo: (id:string)=>void;
  removeTodo: (id: string)=>void;
  updateTodo: (id: string, newValue:string)=>void;
}) => {
  const [edit, setEdit] = useState<{id:null|string, value: string}>({
    id: null,
    value: "",
  });

  const submitUpdate = (value:string) => {
    updateTodo(edit.id!, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
      onClick={() => completeTodo(todo.id)}
    >
      <div >
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
