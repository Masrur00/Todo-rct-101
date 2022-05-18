import { TodoItem } from "./TodoItem";
import "./TodoList.modules.css";
import "./TodoItem.module.css";
export const TodoList = ({ todos }) => {
  return (
    <div className={todos.length !== 0 ? "todoList" : null}>
      {todos.map((todo) => (
        <TodoItem className="todo-item" key={todo.id} {...todo} />
      ))}
    </div>
  );
};
