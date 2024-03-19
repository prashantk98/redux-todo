import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, removeTodo, toggleComplete } from "../reducers/todoSlice";
import { RootState } from "../store/store";

function TodoList() {
  const todos = useSelector((state: RootState) => state.todoSliceReducer);
  const dispatch = useDispatch();

  console.log(todos);
  
  const addTodoFn = (todo:string) => {
    if (!todo || /^\s*$/.test(todo)) {
      return;
    }

    dispatch(addTodo(todo))

  };

  const updateTodo = (todoId:string, newValue:string) => {
    if (!newValue || /^\s*$/.test(newValue)) {
      return;
    }
    
    dispatch(editTodo({id: todoId, newValue}))
  };

  const removeTodoFn = (id:string) => {
    dispatch(removeTodo({id}))
  };

  const completeTodo = (id:string) => {
    dispatch(toggleComplete({id}))
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodoFn} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodoFn}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
