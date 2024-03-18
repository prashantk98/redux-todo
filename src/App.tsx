import { Provider } from "react-redux";
import "./App.css";
import TodoList from "./components/TodoList";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>

    <div className="todo-app">
      <TodoList />
    </div>
    </Provider>
  );
}

export default App;
