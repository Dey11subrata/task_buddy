import { useState } from "react";

import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTasks } from "./components/ShowTasks";
import "./App.css";

function App() {
  const [tasksList, setTasksList] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddTask tasksList={tasksList} setTasksList={setTasksList} />
      <ShowTasks tasksList={tasksList} setTasksList={setTasksList} />
    </div>
  );
}

export default App;
