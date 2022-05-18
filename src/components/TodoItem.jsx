import "./TodoItem.modules.css";
export const TodoItem = ({ value }) => {
  return (
    <>
      <div className="todoItem"> {value} </div>
    </>
  );
};
