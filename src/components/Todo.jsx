import { useState } from "react";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodo = () => {
    setTodos([...todos, { id: Date.now(), value }]);
    setValue("");
  };
  return (
    <>
      <TodoList todos={todos} />
      <div className="input-ele">
        <input
          value={value}
          placeholder="enter todo"
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleTodo}>Add</button>
      </div>
    </>
  );
};
