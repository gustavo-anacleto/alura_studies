import style from "./App.module.scss";
import Form from "../components/form/Form";
import List from "../components/list/List";
import Timer from "../components/timer/Timer";
import { useState } from "react";
import ITaskModel from "../models/task.model";

function App() {
  const initialState: ITaskModel[] = [
    { title: "JavaScript", time: "01:00:00" },
    { title: "TypeScript", time: "01:30:00" },
    { title: "React", time: "03:00:00" },
    { title: "Angular", time: "00:30:00" },
  ];
  const [tasks, setTasks] = useState(initialState);

  return (
    <div className={style.appStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks}/>
      <Timer />
    </div>
  );
}

export default App;
