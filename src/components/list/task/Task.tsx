import ITaskModel from "../../../models/task.model";
import style from "../List.module.scss";

function Task({ task }: {task: ITaskModel}) {
  return (
    <li className={style.item}>
      <h3>{task.title}</h3>
      <span>{task.time}</span>
    </li>
  );
}

export default Task;
