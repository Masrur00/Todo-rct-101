import { TodoItem } from "./TodoItem";
import "./TodoItem.modules.css";
export const TodoList = ({ todos }) => {
  return (
    <div className={todos.length !== 0 ? "todoList" : null}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};
