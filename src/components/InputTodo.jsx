import { useState } from "react";

function InputTodo({ todo, setTodo, setErrMsg }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  function updateTodoName(event) {
    setTodoName(event.target.value);
  }

  function updateTodoDate(event) {
    setTodoDate(event.target.value);
  }

  function showErrorMessage() {
    if (!todoName || !todoDate) {
      setErrMsg("Please Fill The Above Fields...");
      setTodo([]);
    }
  }

  function addTodo() {
    setTodo([
      ...todo,
      {
        id: crypto.randomUUID(),
        todoName: todoName,
        todoDate: todoDate,
        isDone: false,
      },
    ]);

    setTodoName("");
    setTodoDate("");
    showErrorMessage();
  }
  return (
    <>
      <div className="input-todo-container">
        <div className="input-todo-name">
          <input
            type="text"
            placeholder="Enter Todo"
            onChange={updateTodoName}
            value={todoName}
          />
        </div>

        <div className="input-todo-date">
          <input
            type="date"
            placeholder="Enter Date"
            onChange={updateTodoDate}
            value={todoDate}
          />
        </div>

        <div className="add-todo-button">
          <button onClick={addTodo}>Add Todo </button>
        </div>
      </div>
    </>
  );
}
export default InputTodo;
