import Heading from "./components/Heading";
import InputTodo from "./components/InputTodo";
import DisplayTodo from "./components/DisplayTodo";
import ShowErrorMessage from "./components/ShowErrMessage";
import { useState, useEffect } from "react";
function App() {
  const [todo, setTodo] = useState([]);
  const [showErrMsg, setShowErrMsg] = useState("");
  const [mode, setMode] = useState("light");

  function updateMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(16, 16, 82)";
      document.body.style.transition = "all 0.5s ease-in-out";
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "whitesmoke";
      document.body.style.transition = "all 0.5s ease-in-out";
    }
  }

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem("myTodo")));
  }, []);

  useEffect(() => {
    localStorage.setItem("myTodo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <Heading mode={updateMode} showMode={mode} />
      <InputTodo
        todo={todo}
        setTodo={setTodo}
        errMsg={showErrMsg}
        setErrMsg={setShowErrMsg}
      />
      <ShowErrorMessage errMsg={showErrMsg} />
      {todo.length > 0 ? (
        <DisplayTodo todo={todo} mode={mode} setTodo={setTodo} />
      ) : (
        ""
      )}
    </>
  );
}
export default App;
