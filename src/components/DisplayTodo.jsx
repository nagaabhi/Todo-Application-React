function DisplayTodo({ todo, setTodo, mode }) {
  function updateCompletedTask(id) {
    const updatedTodo = todo.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });

    setTodo(updatedTodo);
  }

  function deleteTodo(id) {
    setTodo(todo.filter((item) => item.id !== id));
  }

  function moveTodoUp(index) {
    if (index === 0) return;

    const newTodo = [...todo];
    [newTodo[index], newTodo[index - 1]] = [newTodo[index - 1], newTodo[index]];

    setTodo(newTodo);
  }

  function moveTodoDown(index) {
    if (index === todo.length - 1) return;

    const newTodo = [...todo];
    [newTodo[index], newTodo[index + 1]] = [newTodo[index + 1], newTodo[index]];
    setTodo(newTodo);
  }

  return (
    <>
      <div
        className={`over-all-container ${
          mode === "dark" ? "darkMode" : "lightMode"
        }`}
      >
        {todo.map((todo, index) => {
          return (
            <>
              <div
                key={todo.id}
                className={`display-todo-container ${
                  todo.isDone ? "task-completed" : "task-not-completed"
                }`}
              >
                <div className="show-mark">
                  <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => updateCompletedTask(todo.id)}
                  />
                </div>

                <div className={`show-todo-name ${todo.isDone ? "yes" : "no"}`}>
                  {todo.todoName}
                </div>

                <div className={`show-todo-date ${todo.isDone ? "yes" : "no"}`}>
                  {todo.todoDate}
                </div>

                <div className="delete-todo-button">
                  <button onClick={() => deleteTodo(todo.id)}>delete</button>
                </div>

                <div className="move-todo-up">
                  <button
                    onClick={() => moveTodoUp(index)}
                    disabled={index === 0}
                  >
                    <img src="./src/assets/up-arrow.png" alt="" />
                  </button>
                </div>

                <div className="move-todo-down">
                  <button
                    onClick={() => moveTodoDown(index)}
                    disabled={index === todo.length - 1}
                  >
                    <img src="./src/assets/down-arrow.png" alt="" />
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default DisplayTodo;
