import "/src/styles.css";
export const TodoItem = ({ value }) => {
  return (
    <>
      <div className="item"> {value} </div>
    </>
  );
};
