import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTasks } from "./components/ShowTasks";
import "./App.css";

function App() {
  const [tasksList, setTasksList] = useState(
    JSON.parse(localStorage.getItem("tasksList")) || []
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasksList", JSON.stringify(tasksList));
  }, [tasksList]);

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
