import { useState } from "react";
import style from "./List.module.scss";
import Task from "./task/Task";
import ITaskModel from "../../models/task.model";

function List({ tasks, selectTask }: { tasks: ITaskModel[], selectTask: Function }) {
  function loadTasks() {
    return tasks.map((task, index) => (
      <Task
        key={index}
        task={task}
        selectTask={selectTask}
      />
    ));
  }

  return (
    <aside className={style.listaTarefas}>
      <h2>Daily Studies</h2>
      <ul>{loadTasks()}</ul>
    </aside>
  );
}

export default List;
