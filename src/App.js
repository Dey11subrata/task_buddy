import { useState } from "react";

import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTasks } from "./components/ShowTasks";
import "./App.css";

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [task, setTask] = useState({});

  return (
    <div className="App">
      <Header />
      <AddTask
        tasksList={tasksList}
        setTasksList={setTasksList}
        task={task}
        setTask={setTask}
      />
      <ShowTasks
        tasksList={tasksList}
        setTasksList={setTasksList}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
