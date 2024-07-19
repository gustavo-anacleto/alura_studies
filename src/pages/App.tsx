import style from "./App.module.scss";
import Form from "../components/form/Form";
import List from "../components/list/List";
import Timer from "../components/timer/Timer";
import { useEffect, useState } from "react";
import ITaskModel from "../models/task.model";
import { v4 as uuid } from "uuid";

function App() {
  const initialState: ITaskModel[] = [
    {
      id: uuid(),
      title: "JavaScript",
      time: "01:00:00",
      selected: false,
      completed: false,
    },
    {
      id: uuid(),
      title: "TypeScript",
      time: "01:30:00",
      selected: false,
      completed: false,
    },
    {
      id: uuid(),
      title: "React",
      time: "03:00:00",
      selected: false,
      completed: false,
    },
    {
      id: uuid(),
      title: "Angular",
      time: "00:30:00",
      selected: false,
      completed: false,
    },
  ];
  const [tasks, setTasks] = useState<ITaskModel[]>(initialState);
  const [selectedTask, setSelectedTask] = useState<ITaskModel>();

  function selectTask(task: ITaskModel) {
    setSelectedTask(task);
    setTaskAsSelected(task);
  }

  function setTaskAsSelected(taskToSelect: ITaskModel) {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        selected: task.id === taskToSelect.id ? true : false,
      }))
    );
  }

  function finishTask() {
    if (selectedTask) {
      setSelectedTask(undefined);
      setTaskAsCompleted(selectedTask);
    }
  }

  function setTaskAsCompleted(taskToComplete: ITaskModel) {
    const tasksMaped: ITaskModel[] = tasks.map((task) => {
      if (task.id === taskToComplete.id) {
        return {
          ...task,
          selected: false,
          completed: true,
        };
      }
      return task;
    });

    setTasks(tasksMaped);
  }

  return (
    <div className={style.appStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selectedTask={selectedTask} finishTask={finishTask} />
    </div>
  );
}

export default App;
