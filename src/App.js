import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTasks } from "./components/ShowTasks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <ShowTasks />
    </div>
  );
}

export default App;
