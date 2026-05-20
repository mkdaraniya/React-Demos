import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col margin-auto gap-4 max-w-2xl mt-10 ml-10">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
